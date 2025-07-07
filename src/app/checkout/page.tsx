'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Lock, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { useToast } from '@/contexts/toast-context';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface CustomerDetails {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export default function CheckoutPage() {
  const { state } = useCart();
  const router = useRouter();
  const { error } = useToast();
  
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Nederland'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Partial<CustomerDetails>>({});

  // Redirect to cart if empty
  useEffect(() => {
    if (state.items.length === 0) {
      router.push('/cart');
    }
  }, [state.items.length, router]);

  const shippingCost = state.total >= 50 ? 0 : 4.95;
  const tax = state.total * 0.21; // 21% BTW for Netherlands
  const finalTotal = state.total + shippingCost + tax;

  const validateForm = (): boolean => {
    const newErrors: Partial<CustomerDetails> = {};

    if (!customerDetails.email) newErrors.email = 'E-mailadres is verplicht';
    if (!customerDetails.firstName) newErrors.firstName = 'Voornaam is verplicht';
    if (!customerDetails.lastName) newErrors.lastName = 'Achternaam is verplicht';
    if (!customerDetails.phone) newErrors.phone = 'Telefoonnummer is verplicht';
    if (!customerDetails.address) newErrors.address = 'Adres is verplicht';
    if (!customerDetails.city) newErrors.city = 'Stad is verplicht';
    if (!customerDetails.postalCode) newErrors.postalCode = 'Postcode is verplicht';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      error('Formulierfout', 'Vul alle verplichte velden in');
      return;
    }

    setIsProcessing(true);

    try {
      console.log('Starting checkout process...');
      console.log('Cart items:', state.items);
      console.log('Customer details:', customerDetails);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: state.items,
          customerDetails,
        }),
      });

      console.log('Checkout response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Checkout error response:', errorData);
        throw new Error(errorData.details || 'Failed to create checkout session');
      }

      const { sessionId, url } = await response.json();
      console.log('Checkout session created:', { sessionId, url });

      if (url) {
        // Direct redirect to Stripe Checkout URL
        window.location.href = url;
        return;
      }

      // Fallback: Use Stripe.js redirect
      const { getStripe } = await import('@/lib/stripe');
      const stripeInstance = await getStripe();
      
      if (!stripeInstance) {
        throw new Error('Failed to load Stripe');
      }

      console.log('Redirecting to Stripe checkout...');
      const { error: stripeError } = await stripeInstance.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        console.error('Stripe redirect error:', stripeError);
        throw stripeError;
      }
      
    } catch (err) {
      console.error('Payment error:', err);
      error(
        'Betalingsfout', 
        err instanceof Error ? err.message : 'Er is een fout opgetreden bij het verwerken van de betaling. Probeer het opnieuw.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (state.items.length === 0) {
    return null; // Will redirect to cart
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/cart" 
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar winkelwagen
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Afrekenen</h1>
          <p className="text-gray-600 mt-2">Vul je gegevens in om je bestelling te voltooien</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Contactgegevens</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={customerDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="je@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={customerDetails.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Jan"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={customerDetails.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="de Vries"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={customerDetails.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="06 12345678"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Verzendadres</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Adres *
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={customerDetails.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Straatnaam 123"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        value={customerDetails.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.postalCode ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="1234 AB"
                      />
                      {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        Stad *
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={customerDetails.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Amsterdam"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Land *
                    </label>
                    <select
                      id="country"
                      value={customerDetails.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Nederland">Nederland</option>
                      <option value="België">België</option>
                      <option value="Duitsland">Duitsland</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Betaalmethode</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">iDEAL, Creditcard & meer</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Veilig betalen met iDEAL, Visa, Mastercard en andere betaalmethoden
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-semibold"
              >
                <Lock className="w-5 h-5 mr-2" />
                {isProcessing ? 'Verwerken...' : `Bestelling plaatsen - €${finalTotal.toFixed(2)}`}
              </Button>

              <div className="text-xs text-gray-500 text-center">
                🔒 Betaalformulier wordt geladen in de volgende stap
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bestelsamenvatting</h2>
            
            {/* Items */}
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    {item.color && <p className="text-sm text-gray-600">Kleur: {item.color}</p>}
                    {item.size && <p className="text-sm text-gray-600">Maat: {item.size}</p>}
                    <p className="text-sm text-gray-600">Aantal: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotaal</span>
                <span className="text-gray-900">€{state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Verzendkosten</span>
                <span className="text-gray-900">
                  {shippingCost === 0 ? 'Gratis' : `€${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">BTW (21%)</span>
                <span className="text-gray-900">€{tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-900">Totaal</span>
                  <span className="text-gray-900">€{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Lock className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-xs text-gray-600">Veilig betalen</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-xs text-gray-600">Gratis retour binnen 30 dagen</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-xs text-gray-600">2 jaar garantie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

