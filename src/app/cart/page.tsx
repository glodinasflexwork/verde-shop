'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const shippingCost = state.total >= 50 ? 0 : 4.95;
  const totalWithShipping = state.total + shippingCost;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/products" 
              className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Verder winkelen
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Winkelwagen</h1>
          </div>

          {/* Empty Cart */}
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Je winkelwagen is leeg
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Ontdek onze duurzame collectie en voeg je favoriete items toe aan je winkelwagen.
            </p>
            <div className="space-y-4">
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700 px-8">
                  Ontdek onze collectie
                </Button>
              </Link>
              <div className="text-sm text-gray-500">
                of bekijk onze{' '}
                <Link href="/categories/tops" className="text-green-600 hover:text-green-700">
                  populaire items
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/products" 
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Verder winkelen
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Winkelwagen ({state.itemCount} {state.itemCount === 1 ? 'item' : 'items'})
            </h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Winkelwagen legen
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-32 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Variants */}
                    <div className="flex gap-4 mb-4 text-sm text-gray-600">
                      {item.color && (
                        <div>
                          <span className="font-medium">Kleur:</span> {item.color}
                        </div>
                      )}
                      {item.size && (
                        <div>
                          <span className="font-medium">Maat:</span> {item.size}
                        </div>
                      )}
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-semibold text-gray-900">
                        €{item.price.toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">Aantal:</span>
                        <div className="flex items-center gap-2 border rounded-lg">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="mt-4 text-right">
                      <span className="text-lg font-semibold text-gray-900">
                        Subtotaal: €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Bestelsamenvatting
              </h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotaal</span>
                  <span className="font-medium">€{state.total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Verzendkosten</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? (
                      <span className="text-green-600">Gratis</span>
                    ) : (
                      `€${shippingCost.toFixed(2)}`
                    )}
                  </span>
                </div>

                {state.total < 50 && (
                  <div className="text-sm text-gray-500 bg-blue-50 p-3 rounded-lg">
                    Voeg nog €{(50 - state.total).toFixed(2)} toe voor gratis verzending
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Totaal</span>
                    <span>€{totalWithShipping.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href="/checkout">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    Afrekenen
                  </Button>
                </Link>
                
                <Link href="/products">
                  <Button variant="outline" className="w-full">
                    Verder winkelen
                  </Button>
                </Link>
              </div>

              {/* Security & Trust */}
              <div className="mt-6 pt-6 border-t">
                <div className="text-center text-sm text-gray-500">
                  <div className="mb-2">🔒 Veilig afrekenen</div>
                  <div className="mb-2">📦 Gratis retour binnen 30 dagen</div>
                  <div>🌱 100% duurzame producten</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

