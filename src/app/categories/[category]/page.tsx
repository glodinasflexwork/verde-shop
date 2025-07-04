'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Grid, List, Search, ArrowLeft } from 'lucide-react';

// Mock product data - will be replaced with real data later
const mockProducts = [
  {
    id: 1,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: null,
    category: 'tops',
    image: '/api/placeholder/300/400',
    rating: 4.5,
    reviews: 24,
    sustainable: true,
    colors: ['White', 'Black', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Recycled Denim Jeans',
    price: 89.99,
    originalPrice: 109.99,
    category: 'bottoms',
    image: '/api/placeholder/300/400',
    rating: 4.8,
    reviews: 42,
    sustainable: true,
    colors: ['Blue', 'Black'],
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 3,
    name: 'Hemp Blend Hoodie',
    price: 69.99,
    originalPrice: null,
    category: 'tops',
    image: '/api/placeholder/300/400',
    rating: 4.6,
    reviews: 18,
    sustainable: true,
    colors: ['Forest Green', 'Charcoal', 'Cream'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Bamboo Fiber Dress',
    price: 79.99,
    originalPrice: null,
    category: 'dresses',
    image: '/api/placeholder/300/400',
    rating: 4.7,
    reviews: 31,
    sustainable: true,
    colors: ['Black', 'Navy', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 5,
    name: 'Organic Linen Shirt',
    price: 59.99,
    originalPrice: 74.99,
    category: 'tops',
    image: '/api/placeholder/300/400',
    rating: 4.4,
    reviews: 15,
    sustainable: true,
    colors: ['White', 'Light Blue', 'Sage'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 6,
    name: 'Recycled Wool Sweater',
    price: 99.99,
    originalPrice: null,
    category: 'tops',
    image: '/api/placeholder/300/400',
    rating: 4.9,
    reviews: 28,
    sustainable: true,
    colors: ['Charcoal', 'Cream', 'Forest Green'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];

const categoryInfo = {
  tops: {
    title: 'Tops',
    description: 'Duurzame shirts, hoodies en truien gemaakt van biologische en gerecyclede materialen.'
  },
  bottoms: {
    title: 'Bottoms',
    description: 'Ethisch geproduceerde broeken, jeans en shorts voor elke gelegenheid.'
  },
  dresses: {
    title: 'Dresses',
    description: 'Elegante jurken gemaakt van natuurlijke vezels en duurzame stoffen.'
  },
  outerwear: {
    title: 'Outerwear',
    description: 'Warme jassen en vesten die je beschermen tegen de elementen.'
  },
  accessories: {
    title: 'Accessories',
    description: 'Duurzame accessoires om je outfit compleet te maken.'
  }
};

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryData = categoryInfo[category as keyof typeof categoryInfo];
  
  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/products" className="text-green-600 hover:text-green-700">
            ← Back to All Products
          </Link>
        </div>
      </div>
    );
  }

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = product.category === category;
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-4">
            <Link 
              href="/products" 
              className="flex items-center text-green-600 hover:text-green-700 mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              All Products
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryData.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {categoryData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {sortedProducts.length} products found
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search in category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or browse other categories.
            </p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Sale
                        </div>
                      )}
                      {product.sustainable && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Sustainable
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">
                            €{product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              €{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-1">
                          {product.colors.slice(0, 3).map((color, index) => (
                            <div
                              key={index}
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // List View
                  <div className="flex gap-4 p-4">
                    <div className="w-32 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">
                            €{product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              €{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">Colors:</span>
                          <div className="flex gap-1">
                            {product.colors.slice(0, 3).map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full border border-gray-300"
                                style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

