import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    'Klantenservice': [
      { name: 'Contact', href: '/contact' },
      { name: 'Veelgestelde Vragen', href: '/faq' },
      { name: 'Verzending & Retour', href: '/shipping' },
      { name: 'Maattabel', href: '/maattabel' },
      { name: 'Garantie', href: '/garantie' },
    ],
    'Over Flint & Glow': [
      { name: 'Ons Verhaal', href: '/about' },
      { name: 'Duurzaamheid', href: '/sustainability' },
      { name: 'Certificeringen', href: '/certifications' },
      { name: 'Impact Report', href: '/impact' },
    ],
    'Mijn Account': [
      { name: 'Inloggen', href: '/auth/signin' },
      { name: 'Registreren', href: '/auth/signup' },
      { name: 'Mijn Bestellingen', href: '/account/orders' },
      { name: 'Verlanglijst', href: '/wishlist' },
    ],
    'Juridisch': [
      { name: 'Algemene Voorwaarden', href: '/terms' },
      { name: 'Privacybeleid', href: '/privacy' },
      { name: 'Cookiebeleid', href: '/cookies' },
      { name: 'Retourbeleid', href: '/returns' },
    ],
  }

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image 
                src="/flint-glow-horizontal-header.png" 
                alt="Flint & Glow" 
                width={150}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Duurzame mode en natuurlijke schoonheid voor een betere wereld. 
              Ethisch geproduceerd, milieuvriendelijk en stijlvol.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@flintandglow.nl" className="text-gray-400 hover:text-amber-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Nieuwsbrief
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Ontvang de laatste updates over nieuwe producten en duurzaamheidsinitiatieven.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Uw e-mailadres"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-600 text-white rounded-r-lg hover:bg-amber-700 transition-colors"
              >
                Aanmelden
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Flint & Glow. Alle rechten voorbehouden.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-500">Betaalmethoden:</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">iDEAL</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">PayPal</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Visa</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">Mastercard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

