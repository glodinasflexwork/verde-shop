'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { state, updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Winkelwagen</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {state.itemCount}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Je winkelwagen is leeg
                </h3>
                <p className="text-gray-500 mb-6">
                  Voeg producten toe om te beginnen met winkelen
                </p>
                <Button onClick={onClose} className="bg-green-600 hover:bg-green-700">
                  Verder winkelen
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {item.name}
                      </h3>
                      
                      {/* Variants */}
                      <div className="flex gap-2 mt-1 text-sm text-gray-500">
                        {item.color && (
                          <span>Kleur: {item.color}</span>
                        )}
                        {item.size && (
                          <span>Maat: {item.size}</span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="mt-2 font-semibold text-gray-900">
                        €{item.price.toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Subtotaal:</span>
                <span>€{state.total.toFixed(2)}</span>
              </div>

              {/* Shipping Info */}
              <div className="text-sm text-gray-500 text-center">
                Verzendkosten worden berekend bij het afrekenen
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href="/cart" onClick={onClose}>
                  <Button variant="outline" className="w-full">
                    Bekijk winkelwagen
                  </Button>
                </Link>
                <Link href="/checkout" onClick={onClose}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Afrekenen
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

