import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  color?: string
  size?: string
}

interface CustomerDetails {
  email: string
  firstName: string
  lastName: string
  phone: string
  address: string
  city: string
  postalCode: string
  country: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, customerDetails }: { items: CartItem[], customerDetails: CustomerDetails } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      )
    }

    if (!customerDetails || !customerDetails.email) {
      return NextResponse.json(
        { error: 'Customer details required' },
        { status: 400 }
      )
    }

    // Calculate totals
    const subtotal = items.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0)
    const shippingCost = subtotal >= 50 ? 0 : 4.95
    const tax = subtotal * 0.21 // 21% BTW for Netherlands

    // Create line items for Stripe - simplified approach
    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: `${item.color ? `Kleur: ${item.color}` : ''}${item.color && item.size ? ' • ' : ''}${item.size ? `Maat: ${item.size}` : ''}`.trim() || 'Product',
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }))

    // Add shipping as a line item if applicable
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Verzendkosten',
            description: 'Standaard verzending naar Nederland',
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      })
    }

    // Add tax as a line item
    lineItems.push({
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'BTW (21%)',
          description: 'Nederlandse belasting over toegevoegde waarde',
        },
        unit_amount: Math.round(tax * 100),
      },
      quantity: 1,
    })

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'ideal'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/checkout/cancel`,
      customer_email: customerDetails.email,
      shipping_address_collection: {
        allowed_countries: ['NL', 'BE', 'DE'],
      },
      billing_address_collection: 'required',
      metadata: {
        customerFirstName: customerDetails.firstName,
        customerLastName: customerDetails.lastName,
        customerPhone: customerDetails.phone,
        customerAddress: customerDetails.address,
        customerCity: customerDetails.city,
        customerPostalCode: customerDetails.postalCode,
        customerCountry: customerDetails.country,
      },
      locale: 'nl',
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

