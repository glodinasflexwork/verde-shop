'use client';

import Link from 'next/link';
import { XCircle, ArrowLeft, ShoppingCart, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          {/* Cancel Icon */}
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>

          {/* Cancel Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Betaling Geannuleerd
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Je betaling is geannuleerd. Geen zorgen - er zijn geen kosten in rekening gebracht 
            en je kunt altijd later terugkomen om je bestelling te voltooien.
          </p>

          {/* Reasons */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Waarom zou dit kunnen gebeuren?</h2>
            <ul className="text-sm text-gray-600 space-y-2 text-left max-w-md mx-auto">
              <li>• Je hebt op &ldquo;Terug&rdquo; geklikt tijdens het betaalproces</li>
              <li>• Er was een probleem met je betaalmethode</li>
              <li>• Je hebt besloten om later te betalen</li>
              <li>• Er was een technisch probleem</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/cart">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Terug naar winkelwagen
              </Link>
            </Button>
            
            <Button variant="outline" asChild>
              <Link href="/products">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Verder winkelen
              </Link>
            </Button>
          </div>

          {/* Help Section */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="font-medium">Hulp nodig?</span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Als je problemen ondervindt met het betaalproces, neem dan contact met ons op.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">
                  Contact opnemen
                </Link>
              </Button>
              
              <Button variant="outline" size="sm" asChild>
                <Link href="/faq">
                  Veelgestelde vragen
                </Link>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t text-sm text-gray-500">
            <p>
              Je winkelwagen blijft bewaard. Je kunt altijd terugkeren om je bestelling te voltooien.
              Voor vragen kun je ons bereiken via{' '}
              <a href="mailto:hello@flintandglow.nl" className="text-amber-600 hover:text-amber-700">
                hello@flintandglow.nl
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

