import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

// Client-side Stripe instance
let stripePromise: Promise<any> | null = null

export const getStripe = async () => {
  if (!stripePromise) {
    // Try to get the publishable key from environment variables first
    let publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    
    // If not available, fetch it from our API endpoint
    if (!publishableKey) {
      try {
        const response = await fetch('/api/stripe-config')
        const data = await response.json()
        publishableKey = data.publishableKey
      } catch (error) {
        console.error('Failed to fetch Stripe config:', error)
        throw new Error('Unable to initialize Stripe')
      }
    }
    
    if (!publishableKey) {
      throw new Error('Stripe publishable key not found')
    }
    
    console.log('🔧 Stripe Debug: Initializing with publishable key')
    stripePromise = loadStripe(publishableKey)
  }
  return stripePromise
}

