import Stripe from 'stripe'
import { loadStripe, Stripe as StripeType } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

// Client-side Stripe instance
let stripePromise: Promise<StripeType | null> | null = null

export const getStripe = async (): Promise<StripeType | null> => {
  if (!stripePromise) {
    try {
      console.log('🔧 Fetching Stripe publishable key from API...')
      
      // Fetch the publishable key from our secure API endpoint
      const response = await fetch('/api/stripe-config')
      
      if (!response.ok) {
        throw new Error(`Failed to fetch Stripe config: ${response.status}`)
      }
      
      const data = await response.json()
      const publishableKey = data.publishableKey
      
      if (!publishableKey) {
        throw new Error('Stripe publishable key not found in API response')
      }
      
      console.log('✅ Stripe publishable key retrieved successfully')
      stripePromise = loadStripe(publishableKey)
      
    } catch (error) {
      console.error('❌ Failed to initialize Stripe:', error)
      throw new Error('Unable to initialize Stripe payment system')
    }
  }
  
  return stripePromise
}

