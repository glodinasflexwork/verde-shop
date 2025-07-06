'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrderDetails {
  id: string;
  amount_total: number;
  customer_email: string;
  payment_status: string;
}

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetchOrderDetails(sessionId);
    }
  }, [sessionId]);

  const fetchOrderDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/checkout/session?session_id=${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setOrderDetails(data);
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Bestelling wordt verwerkt...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bestelling Succesvol Geplaatst!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Bedankt voor je bestelling bij Flint & Glow. We hebben je betaling ontvangen en 
            je bestelling wordt nu verwerkt.
          </p>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Bestelgegevens</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bestelnummer:</span>
                  <span className="font-medium">{orderDetails.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Totaalbedrag:</span>
                  <span className="font-medium">€{(orderDetails.amount_total / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">E-mailadres:</span>
                  <span className="font-medium">{orderDetails.customer_email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Betalingsstatus:</span>
                  <span className="font-medium text-green-600">Betaald</span>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bevestigingsmail</h3>
              <p className="text-sm text-gray-600">
                Je ontvangt binnen enkele minuten een bevestigingsmail met alle details van je bestelling.
              </p>
            </div>

            <div className="text-center p-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Verzending</h3>
              <p className="text-sm text-gray-600">
                Je bestelling wordt binnen 1-2 werkdagen verzonden. Je ontvangt een track & trace code.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/products">
                Verder winkelen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/contact">
                Vragen? Neem contact op
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>
              Heb je vragen over je bestelling? Neem contact met ons op via{' '}
              <a href="mailto:hello@flintandglow.nl" className="text-amber-600 hover:text-amber-700">
                hello@flintandglow.nl
              </a>{' '}
              of bekijk onze{' '}
              <Link href="/faq" className="text-amber-600 hover:text-amber-700">
                veelgestelde vragen
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

