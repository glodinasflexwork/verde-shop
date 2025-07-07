import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    
    if (!publishableKey) {
      return NextResponse.json(
        { error: 'Stripe publishable key not configured' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      publishableKey: publishableKey
    })
  } catch (error) {
    console.error('Error fetching Stripe config:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

