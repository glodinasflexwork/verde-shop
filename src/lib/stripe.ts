import Stripe from 'stripe'
import { loadStripe, Stripe as StripeType } from '@stripe/stripe-js'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
  typescript: true,
})

let stripePromise: Promise<StripeType | null> | null = null

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    
    // Debug logging
    console.log('Environment check:', {
      hasPublishableKey: !!publishableKey,
      keyLength: publishableKey?.length || 0,
      keyPrefix: publishableKey?.substring(0, 7) || 'none',
      allEnvKeys: Object.keys(process.env).filter(key => key.includes('STRIPE'))
    })
    
    if (!publishableKey) {
      console.error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set')
      console.error('Available environment variables:', Object.keys(process.env))
      throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set')
    }
    
    console.log('Initializing Stripe with key:', publishableKey.substring(0, 20) + '...')
    stripePromise = loadStripe(publishableKey)
  }
  
  return stripePromise
}

