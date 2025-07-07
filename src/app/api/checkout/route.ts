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
  stripePriceId?: string
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

// Map product names to Stripe price IDs
const PRODUCT_PRICE_MAP: Record<string, string> = {
  'Organic Cotton T-Shirt': 'price_1RiIiYKopO2jXhaHtKF7YthX',
  'Sustainable Jeans': 'price_1RiIiZKopO2jXhaHhgrYMpLO',
  'Natural Face Cream': 'price_1RiIiZKopO2jXhaHorWSCJrk',
  'Eco-Friendly Tote Bag': 'price_1RiIiZKopO2jXhaH3BaqoKHF',
  'Bamboo Toothbrush Set': 'price_1RiIiaKopO2jXhaHFmWL8XSG'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, customerDetails }: { items: CartItem[], customerDetails: CustomerDetails } = body

    console.log('Checkout request received:', { items, customerDetails })

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

    // Create line items using Stripe price IDs
    const lineItems = items.map((item: CartItem) => {
      const stripePriceId = item.stripePriceId || PRODUCT_PRICE_MAP[item.name]
      
      if (!stripePriceId) {
        console.error(`No Stripe price ID found for product: ${item.name}`)
        throw new Error(`Product ${item.name} not found in Stripe`)
      }

      return {
        price: stripePriceId,
        quantity: item.quantity,
      }
    })

    console.log('Line items created:', lineItems)

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
      automatic_tax: {
        enabled: true,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'eur',
            },
            display_name: 'Gratis verzending',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 2,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 495, // €4.95
              currency: 'eur',
            },
            display_name: 'Standaard verzending',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 3,
              },
            },
          },
        },
      ],
    })

    console.log('Stripe session created:', session.id)

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
}

