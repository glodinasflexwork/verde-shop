'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Bestellen & Betalen
  {
    id: 'order-1',
    category: 'Bestellen & Betalen',
    question: 'Welke betaalmethoden accepteren jullie?',
    answer: 'We accepteren alle gangbare betaalmethoden: iDEAL, PayPal, Visa, Mastercard, American Express, Bancontact en Apple Pay. Alle betalingen worden veilig verwerkt via Stripe.'
  },
  {
    id: 'order-2',
    category: 'Bestellen & Betalen',
    question: 'Kan ik mijn bestelling nog wijzigen of annuleren?',
    answer: 'Je kunt je bestelling wijzigen of annuleren zolang deze nog niet is verzonden. Log in op je account en ga naar "Mijn bestellingen" of neem contact met ons op via info@verde-shop.nl.'
  },
  {
    id: 'order-3',
    category: 'Bestellen & Betalen',
    question: 'Krijg ik een bevestiging van mijn bestelling?',
    answer: 'Ja, je ontvangt direct na je bestelling een bevestigingsmail met alle details. Controleer ook je spam-map als je geen mail hebt ontvangen.'
  },
  {
    id: 'order-4',
    category: 'Bestellen & Betalen',
    question: 'Vanaf welk bedrag is verzending gratis?',
    answer: 'Verzending is gratis bij bestellingen vanaf €50 binnen Nederland. Voor België en Duitsland is verzending gratis vanaf €75.'
  },

  // Verzending & Levering
  {
    id: 'shipping-1',
    category: 'Verzending & Levering',
    question: 'Hoe lang duurt de levering?',
    answer: 'Nederland: 1-2 werkdagen, België: 2-3 werkdagen, Duitsland: 3-4 werkdagen, Overig EU: 4-7 werkdagen. Bestellingen voor 15:00 worden dezelfde dag verzonden (werkdagen).'
  },
  {
    id: 'shipping-2',
    category: 'Verzending & Levering',
    question: 'Kan ik mijn pakket volgen?',
    answer: 'Ja, zodra je bestelling is verzonden ontvang je een track & trace code via e-mail. Hiermee kun je je pakket live volgen.'
  },
  {
    id: 'shipping-3',
    category: 'Verzending & Levering',
    question: 'Wat als ik niet thuis ben bij de bezorging?',
    answer: 'De bezorger probeert het pakket af te leveren. Als je niet thuis bent, wordt het bij een buurman of afhaalpunt in de buurt achtergelaten. Je ontvangt hiervan bericht.'
  },
  {
    id: 'shipping-4',
    category: 'Verzending & Levering',
    question: 'Leveren jullie ook internationaal?',
    answer: 'Ja, we leveren in heel Europa. Verzendkosten en levertijden variëren per land. Bekijk onze volledige verzendinfo voor details.'
  },

  // Retour & Ruilen
  {
    id: 'return-1',
    category: 'Retour & Ruilen',
    question: 'Hoe lang heb ik om te retourneren?',
    answer: 'Je hebt 14 dagen bedenktijd vanaf ontvangst van je bestelling. De retourzending moet binnen 14 dagen na melding bij ons zijn.'
  },
  {
    id: 'return-2',
    category: 'Retour & Ruilen',
    question: 'Zijn retourzendingen gratis?',
    answer: 'Retourzendingen zijn gratis bij bestellingen boven €50. Voor bestellingen onder €50 rekenen we €4,95 retourkosten.'
  },
  {
    id: 'return-3',
    category: 'Retour & Ruilen',
    question: 'Hoe start ik een retour?',
    answer: 'Log in op je account, ga naar "Mijn bestellingen" en klik op "Retourneren". Je krijgt dan een retourlabel en instructies.'
  },
  {
    id: 'return-4',
    category: 'Retour & Ruilen',
    question: 'Kan ik ruilen voor een andere maat?',
    answer: 'Ja, je kunt ruilen voor een andere maat of kleur. Start een retour en plaats een nieuwe bestelling, of neem contact met ons op voor directe ruil.'
  },

  // Producten & Maten
  {
    id: 'product-1',
    category: 'Producten & Maten',
    question: 'Hoe weet ik welke maat ik moet bestellen?',
    answer: 'Gebruik onze maattabel bij elk product. Meet jezelf op en vergelijk met onze maten. Bij twijfel kun je altijd contact opnemen of meerdere maten bestellen.'
  },
  {
    id: 'product-2',
    category: 'Producten & Maten',
    question: 'Zijn jullie kleding echt duurzaam geproduceerd?',
    answer: 'Ja, al onze kleding heeft certificeringen zoals GOTS, Fair Trade of OEKO-TEX. We werken alleen met leveranciers die voldoen aan onze strenge duurzaamheidseisen.'
  },
  {
    id: 'product-3',
    category: 'Producten & Maten',
    question: 'Hoe moet ik de kleding wassen?',
    answer: 'Volg altijd het waslabel in het kledingstuk. Over het algemeen adviseren we 30°C wassen, geen bleek, en aan de lijn drogen om de levensduur te verlengen.'
  },
  {
    id: 'product-4',
    category: 'Producten & Maten',
    question: 'Krijgen jullie nieuwe collecties?',
    answer: 'Ja, we lanceren 4 keer per jaar een nieuwe collectie: lente, zomer, herfst en winter. Schrijf je in voor onze nieuwsbrief om als eerste op de hoogte te zijn.'
  },

  // Account & Privacy
  {
    id: 'account-1',
    category: 'Account & Privacy',
    question: 'Moet ik een account aanmaken om te bestellen?',
    answer: 'Nee, je kunt ook als gast bestellen. Een account heeft wel voordelen: sneller bestellen, bestellingen volgen, en persoonlijke aanbevelingen.'
  },
  {
    id: 'account-2',
    category: 'Account & Privacy',
    question: 'Hoe reset ik mijn wachtwoord?',
    answer: 'Ga naar de inlogpagina en klik op "Wachtwoord vergeten". Vul je e-mailadres in en je ontvangt instructies om een nieuw wachtwoord in te stellen.'
  },
  {
    id: 'account-3',
    category: 'Account & Privacy',
    question: 'Wat doen jullie met mijn persoonlijke gegevens?',
    answer: 'We behandelen je gegevens vertrouwelijk volgens de AVG. We gebruiken ze alleen voor orderverwerking en communicatie. Lees ons privacybeleid voor details.'
  },
  {
    id: 'account-4',
    category: 'Account & Privacy',
    question: 'Kan ik mijn account verwijderen?',
    answer: 'Ja, je kunt je account verwijderen via je accountinstellingen of door contact met ons op te nemen. We bewaren alleen gegevens die wettelijk verplicht zijn.'
  },

  // Duurzaamheid
  {
    id: 'sustainability-1',
    category: 'Duurzaamheid',
    question: 'Wat maakt Verde duurzaam?',
    answer: 'We gebruiken alleen biologische en gerecyclede materialen, werken met fair trade leveranciers, compenseren onze CO2-uitstoot, en doneren 1% van onze winst aan milieudoelen.'
  },
  {
    id: 'sustainability-2',
    category: 'Duurzaamheid',
    question: 'Welke certificeringen hebben jullie producten?',
    answer: 'Onze producten hebben certificeringen zoals GOTS (biologisch katoen), Fair Trade (eerlijke handel), OEKO-TEX (geen schadelijke stoffen), en Cradle to Cradle.'
  },
  {
    id: 'sustainability-3',
    category: 'Duurzaamheid',
    question: 'Hoe compenseren jullie de CO2-uitstoot?',
    answer: 'We compenseren 110% van onze CO2-uitstoot via gecertificeerde projecten zoals herbebossing en hernieuwbare energie. Elke bestelling is klimaatneutraal.'
  },
  {
    id: 'sustainability-4',
    category: 'Duurzaamheid',
    question: 'Wat gebeurt er met geretourneerde kleding?',
    answer: 'Geretourneerde items worden gecontroleerd en indien mogelijk doorverkocht. Items die niet meer verkocht kunnen worden, doneren we aan goede doelen.'
  }
];

const categories = [
  'Alle vragen',
  'Bestellen & Betalen',
  'Verzending & Levering',
  'Retour & Ruilen',
  'Producten & Maten',
  'Account & Privacy',
  'Duurzaamheid'
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alle vragen');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'Alle vragen' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Veelgestelde Vragen</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vind snel antwoorden op de meest gestelde vragen over bestellen, verzending, 
            retourneren en onze duurzame producten.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Zoek in veelgestelde vragen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Geen resultaten gevonden</h3>
              <p className="text-gray-600">
                Probeer een andere zoekterm of bekijk alle categorieën.
              </p>
            </div>
          ) : (
            filteredFAQs.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 pr-4">{item.question}</h3>
                    <span className="text-sm text-green-600 mt-1 inline-block">{item.category}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Staat je vraag er niet bij?
          </h3>
          <p className="text-gray-600 mb-6">
            Ons klantenservice team helpt je graag verder. We reageren binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Stuur een bericht
            </a>
            <a
              href="tel:020-123-4567"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              020 - 123 4567
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/shipping"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Verzending & Retour</h3>
            <p className="text-gray-600 text-sm">Alle info over levering en retourneren</p>
          </a>

          <a
            href="/returns"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Retourbeleid</h3>
            <p className="text-gray-600 text-sm">14 dagen bedenktijd en gratis retour</p>
          </a>

          <a
            href="/sustainability"
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Duurzaamheid</h3>
            <p className="text-gray-600 text-sm">Onze missie voor een betere wereld</p>
          </a>
        </div>
      </div>
    </div>
  );
}

