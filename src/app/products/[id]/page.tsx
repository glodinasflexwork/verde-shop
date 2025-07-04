'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Heart, Share2, ShoppingCart, Star, Truck, Shield, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock product data - will be replaced with real data later
const mockProducts = {
  '1': {
    id: 1,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: null,
    category: 'Tops',
    description: 'Een zachte en comfortabele t-shirt gemaakt van 100% biologisch katoen. Perfect voor dagelijks gebruik en gemaakt onder eerlijke arbeidsomstandigheden.',
    longDescription: 'Deze premium t-shirt is gemaakt van GOTS-gecertificeerd biologisch katoen dat geteeld is zonder schadelijke pesticiden of kunstmest. Het zachte, ademende materiaal zorgt voor optimaal comfort gedurende de hele dag. De klassieke pasvorm en tijdloze kleuren maken dit shirt een veelzijdige toevoeging aan je garderobe.',
    images: [
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800'
    ],
    rating: 4.5,
    reviews: 24,
    sustainable: true,
    colors: [
      { name: 'White', value: '#FFFFFF', available: true },
      { name: 'Black', value: '#000000', available: true },
      { name: 'Navy', value: '#1e3a8a', available: true },
      { name: 'Forest Green', value: '#166534', available: false }
    ],
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: false }
    ],
    features: [
      'GOTS-gecertificeerd biologisch katoen',
      'Fair Trade geproduceerd',
      'Voorgewassen voor zachtheid',
      'Kleurvast en krimpvrij',
      'Unisex pasvorm'
    ],
    care: [
      'Machinewas op 30°C',
      'Niet bleken',
      'Aan de lijn drogen',
      'Strijken op lage temperatuur',
      'Niet chemisch reinigen'
    ],
    sustainability: {
      co2Saved: '2.5 kg',
      waterSaved: '150 liter',
      certification: 'GOTS, Fair Trade'
    }
  },
  '2': {
    id: 2,
    name: 'Recycled Denim Jeans',
    price: 89.99,
    originalPrice: 109.99,
    category: 'Bottoms',
    description: 'Stijlvolle jeans gemaakt van gerecyclede denim. Duurzaam, comfortabel en perfect voor elke gelegenheid.',
    longDescription: 'Deze innovatieve jeans zijn gemaakt van 85% gerecyclede denim en 15% biologisch katoen. Door het hergebruik van bestaande denim reduceren we waterverbruik met 70% en CO2-uitstoot met 60%. De moderne slim-fit pasvorm en klassieke five-pocket styling maken deze jeans geschikt voor zowel casual als smart-casual looks.',
    images: [
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800'
    ],
    rating: 4.8,
    reviews: 42,
    sustainable: true,
    colors: [
      { name: 'Blue', value: '#3b82f6', available: true },
      { name: 'Black', value: '#000000', available: true },
      { name: 'Light Blue', value: '#93c5fd', available: false }
    ],
    sizes: [
      { name: '28', available: true },
      { name: '30', available: true },
      { name: '32', available: true },
      { name: '34', available: true },
      { name: '36', available: false }
    ],
    features: [
      '85% gerecyclede denim',
      '15% biologisch katoen',
      'Slim-fit pasvorm',
      'Five-pocket styling',
      'Duurzame metalen hardware'
    ],
    care: [
      'Machinewas op 30°C',
      'Binnenstebuiten wassen',
      'Niet bleken',
      'Aan de lijn drogen',
      'Strijken op medium temperatuur'
    ],
    sustainability: {
      co2Saved: '8.2 kg',
      waterSaved: '1200 liter',
      certification: 'Cradle to Cradle, OEKO-TEX'
    }
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = mockProducts[productId as keyof typeof mockProducts];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-green-600 hover:text-green-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic will be implemented later
    alert(`Added ${quantity} x ${product.name} (${selectedSize}, ${product.colors[selectedColor].name}) to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link href="/products" className="text-green-600 hover:text-green-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            All Products
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-green-600 font-medium">{product.category}</span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">€{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">€{product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Save €{(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Color: {product.colors[selectedColor].name}
              </h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    disabled={!color.available}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === index
                        ? 'border-gray-900 scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    } ${!color.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <Link href="/maattabel" className="text-sm text-green-600 hover:text-green-700">
                  Size Guide
                </Link>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    disabled={!size.available}
                    className={`py-2 px-3 text-sm font-medium border rounded-lg transition-colors ${
                      selectedSize === size.name
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : size.available
                        ? 'border-gray-300 text-gray-900 hover:border-gray-400'
                        : 'border-gray-200 text-gray-400 cursor-not-allowed line-through'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                >
                  -
                </button>
                <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - €{(product.price * quantity).toFixed(2)}
              </Button>
              
              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <Truck className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">Free Shipping €50+</span>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">2 Year Warranty</span>
                </div>
                <div className="text-center">
                  <Recycle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                  <span className="text-xs text-gray-600">100% Sustainable</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Features' },
                { id: 'care', label: 'Care Instructions' },
                { id: 'sustainability', label: 'Sustainability' },
                { id: 'reviews', label: `Reviews (${product.reviews})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed text-lg">{product.longDescription}</p>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'care' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Care Instructions</h3>
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'sustainability' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Environmental Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {product.sustainability.co2Saved}
                    </div>
                    <div className="text-sm text-green-700">CO2 Saved</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {product.sustainability.waterSaved}
                    </div>
                    <div className="text-sm text-blue-700">Water Saved</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-sm font-medium text-purple-600 mb-1">Certifications</div>
                    <div className="text-sm text-purple-700">{product.sustainability.certification}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Reviews</h3>
                <div className="text-center py-8 text-gray-500">
                  <p>Reviews functionality will be implemented in the next phase.</p>
                  <p className="text-sm mt-2">Current rating: {product.rating}/5 based on {product.reviews} reviews</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

