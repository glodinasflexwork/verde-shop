import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Star, Leaf, Truck, Shield, Heart } from 'lucide-react'

export default function HomePage() {
  const featuredCategories = [
    {
      name: 'Duurzame Mode',
      nameNL: 'Sustainable Fashion',
      href: '/fashion',
      image: '/images/sustainable-fashion.jpg',
      description: 'Ethisch geproduceerde kleding van biologische materialen'
    },
    {
      name: 'Natuurlijke Schoonheid',
      nameNL: 'Natural Beauty',
      href: '/beauty',
      image: '/images/natural-beauty.jpg',
      description: 'Biologische huidverzorging en natuurlijke cosmetica'
    },
    {
      name: 'Eco-Friendly Huis',
      nameNL: 'Eco-Friendly Home',
      href: '/home',
      image: '/images/eco-home.jpg',
      description: 'Duurzame woonaccessoires en huishoudelijke producten'
    }
  ]

  const trustIndicators = [
    {
      icon: Leaf,
      title: 'Gecertificeerd Duurzaam',
      description: 'Alle producten zijn gecertificeerd door erkende duurzaamheidsorganisaties'
    },
    {
      icon: Truck,
      title: 'Gratis Verzending',
      description: 'Gratis verzending vanaf €50 naar heel Nederland'
    },
    {
      icon: Shield,
      title: 'Veilig Betalen',
      description: 'Beveiligde betalingen via iDEAL, PayPal en creditcard'
    },
    {
      icon: Heart,
      title: 'Ethisch Geproduceerd',
      description: 'Eerlijke arbeidsomstandigheden en milieuvriendelijke productie'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Duurzame Mode &{' '}
                <span className="text-amber-600">Schoonheid</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ontdek onze collectie van ethisch geproduceerde mode en natuurlijke 
                schoonheidsproducten bij Flint & Glow. Voor een betere wereld, stap voor stap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/products">Ontdek Onze Collectie</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/about">Ons Verhaal</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-amber-200 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-sustainable-fashion.jpg"
                  alt="Duurzame mode collectie"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <indicator.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {indicator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ontdek Onze Categorieën
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Van duurzame mode tot natuurlijke schoonheid - alles wat je nodig hebt 
              voor een bewuste levensstijl.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Meer dan 10.000 tevreden klanten
            </h2>
            <p className="text-gray-600">
              Ontdek waarom onze klanten kiezen voor duurzame mode en natuurlijke schoonheid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Emma van der Berg',
                review: 'Geweldige kwaliteit en echt duurzaam geproduceerd. Mijn favoriete webshop voor bewuste mode!',
                rating: 5
              },
              {
                name: 'Lars Janssen',
                review: 'Snelle levering en uitstekende klantenservice. De producten zijn precies zoals beschreven.',
                rating: 5
              },
              {
                name: 'Sophie Bakker',
                review: 'Eindelijk een webshop die echt om het milieu geeft. Prachtige producten en eerlijke prijzen.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

