/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Duurzaamheid - Verde',
  description: 'Ontdek hoe Verde duurzame mode toegankelijk maakt. Van circulaire economie tot eerlijke handel - onze complete duurzaamheidsstrategie.',
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Duurzaamheid</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Mode die goed is voor mensen, planeet en profit. Ontdek hoe wij de mode-industrie 
            transformeren naar een duurzame toekomst.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Duurzaamheidsfilosofie</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Bij Verde geloven we dat duurzaamheid niet optioneel is - het is essentieel. 
                  De mode-industrie is verantwoordelijk voor 10% van de wereldwijde CO2-uitstoot 
                  en is de op één na meest vervuilende industrie ter wereld.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wij zijn vastbesloten om dit te veranderen door alleen merken te selecteren 
                  die aantoonbaar positieve impact hebben op mens en milieu.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Onze Impact in Cijfers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-700">CO2 Besparing:</span>
                    <span className="font-bold text-green-800">25,000 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Water Besparing:</span>
                    <span className="font-bold text-green-800">500,000 L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Gerecycled Materiaal:</span>
                    <span className="font-bold text-green-800">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Eerlijke Lonen:</span>
                    <span className="font-bold text-green-800">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Pillars */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Onze Duurzaamheidspijlers</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Milieu</h3>
                <p className="text-gray-600 text-sm">
                  Minimale ecologische voetafdruk door circulaire materialen en 
                  klimaatneutrale productie.
                </p>
              </div>
              
              <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Mensen</h3>
                <p className="text-gray-600 text-sm">
                  Eerlijke arbeidsomstandigheden, leefbare lonen en respect voor 
                  mensenrechten in de hele keten.
                </p>
              </div>
              
              <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Circulariteit</h3>
                <p className="text-gray-600 text-sm">
                  Van ontwerp tot recycling - producten die gemaakt zijn om 
                  lang mee te gaan en opnieuw gebruikt te worden.
                </p>
              </div>
              
              <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:border-green-400 transition-colors">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transparantie</h3>
                <p className="text-gray-600 text-sm">
                  Volledige openheid over onze leveranciers, processen en 
                  impact - zodat je weet wat je koopt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Milieu Impact</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 Klimaatactie</h3>
                <p className="text-gray-700 mb-4">
                  We streven naar klimaatneutraliteit in onze hele waardeketen tegen 2030. 
                  Onze aanpak omvat:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Scope 1 & 2:</strong> 100% hernieuwbare energie in onze operaties</li>
                  <li>• <strong>Scope 3:</strong> Samenwerking met leveranciers voor emissiereductie</li>
                  <li>• <strong>Carbon offsetting:</strong> Compensatie van restuitstoot via gecertificeerde projecten</li>
                  <li>• <strong>Transport:</strong> Optimalisatie van logistiek en lokale productie</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💧 Waterbeheer</h3>
                <p className="text-gray-700 mb-4">
                  Water is een kostbaar goed. Onze merken implementeren waterbesparende technieken:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Gesloten watersystemen:</strong> Hergebruik van proceswater</li>
                  <li>• <strong>Natuurlijke verfstoffen:</strong> Minder chemicaliën en water nodig</li>
                  <li>• <strong>Lokale productie:</strong> Vermindert transport en waterstress</li>
                  <li>• <strong>Watermonitoring:</strong> Tracking van waterverbruik per product</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">♻️ Afvalreductie</h3>
                <p className="text-gray-700 mb-4">
                  Zero waste is ons doel. We minimaliseren afval door:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Circulair ontwerp:</strong> Producten ontworpen voor hergebruik</li>
                  <li>• <strong>Productie-efficiëntie:</strong> Minimaal materiaalverlies</li>
                  <li>• <strong>Verpakkingsoptimalisatie:</strong> Herbruikbare en composteerbare verpakkingen</li>
                  <li>• <strong>Take-back programma:</strong> Inname van oude kleding voor recycling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Innovation */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Duurzame Materialen & Innovatie</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🧵 Materialen die we Prefereren</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Biologisch Katoen</h4>
                    <p className="text-green-700 text-sm">95% minder water, geen pesticiden</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Gerecycled Polyester</h4>
                    <p className="text-green-700 text-sm">Gemaakt van plastic flessen en textielafval</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Tencel/Lyocell</h4>
                    <p className="text-green-700 text-sm">Van duurzaam beheerde bossen</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Hennep & Vlas</h4>
                    <p className="text-green-700 text-sm">Snel groeiend, weinig water nodig</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚫 Materialen die we Vermijden</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Conventioneel Katoen</h4>
                    <p className="text-red-700 text-sm">Hoog water- en pesticidenverbruik</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Virgin Polyester</h4>
                    <p className="text-red-700 text-sm">Gemaakt van fossiele brandstoffen</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Niet-gecertificeerd Leer</h4>
                    <p className="text-red-700 text-sm">Mogelijk dierenleed en vervuiling</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800">Synthetische Bont</h4>
                    <p className="text-red-700 text-sm">Microplastics en niet-biologisch afbreekbaar</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🔬 Innovatieve Materialen</h3>
              <p className="text-blue-700 mb-4">
                We investeren in de toekomst van duurzame mode door innovatieve materialen te ondersteunen:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🍄</div>
                  <h4 className="font-semibold text-blue-800">Mycelium Leer</h4>
                  <p className="text-blue-700 text-sm">Van schimmelwortels</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🌊</div>
                  <h4 className="font-semibold text-blue-800">Zeewier Vezels</h4>
                  <p className="text-blue-700 text-sm">Biologisch afbreekbaar</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🍎</div>
                  <h4 className="font-semibold text-blue-800">Fruit Leer</h4>
                  <p className="text-blue-700 text-sm">Van voedselafval</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sociale Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">👥 Eerlijke Arbeidsomstandigheden</h3>
                <p className="text-gray-700 mb-4">
                  Alle Verde merken moeten voldoen aan strenge sociale standaarden:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>✅ <strong>Leefbare lonen:</strong> Minimaal living wage voor alle werknemers</li>
                  <li>✅ <strong>Veilige werkplekken:</strong> Gecertificeerde fabrieken met veiligheidsprotocollen</li>
                  <li>✅ <strong>Geen kinderarbeid:</strong> Strikte leeftijdscontroles en monitoring</li>
                  <li>✅ <strong>Gendergelijkheid:</strong> Gelijke kansen en lonen voor alle geslachten</li>
                  <li>✅ <strong>Vrijheid van vereniging:</strong> Recht op vakbondslidmaatschap</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 Community Development</h3>
                <p className="text-gray-700 mb-4">
                  We investeren in de gemeenschappen waar onze producten gemaakt worden:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>🏫 <strong>Onderwijs:</strong> Scholingsprogramma's voor werknemers</li>
                  <li>🏥 <strong>Gezondheidszorg:</strong> Toegang tot medische voorzieningen</li>
                  <li>💧 <strong>Schoon water:</strong> Waterprojecten in productiegemeenschappen</li>
                  <li>🌱 <strong>Lokale economie:</strong> Voorkeur voor lokale leveranciers</li>
                  <li>👩‍💼 <strong>Vrouwenempowerment:</strong> Speciale programma's voor vrouwelijke ondernemers</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">📊 Onze Sociale Impact Metrics</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">2,500+</div>
                  <p className="text-yellow-800 text-sm">Werknemers ondersteund</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">15</div>
                  <p className="text-yellow-800 text-sm">Landen met projecten</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">€50K</div>
                  <p className="text-yellow-800 text-sm">Geïnvesteerd in communities</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">100%</div>
                  <p className="text-yellow-800 text-sm">Living wage compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Circular Economy */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Circulaire Economie</h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We geloven in een circulaire mode-economie waar afval niet bestaat. 
                Onze aanpak omvat het hele product lifecycle:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Design for Circularity</h3>
                  <p className="text-green-700 text-sm">
                    Producten ontworpen voor duurzaamheid, repareerbaarheid en recycling
                  </p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Use & Reuse</h3>
                  <p className="text-green-700 text-sm">
                    Lange levensduur, reparatieservice en doorverkoop programma's
                  </p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl mb-4">♻️</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Recycle & Regenerate</h3>
                  <p className="text-green-700 text-sm">
                    Take-back programma en transformatie naar nieuwe producten
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">🔄 Verde Circulair Programma</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Voor Klanten:</h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Gratis reparatieservice voor Verde producten</li>
                    <li>• Trade-in programma met korting op nieuwe aankopen</li>
                    <li>• Styling advies voor langer plezier van je kleding</li>
                    <li>• Doorverkoop platform voor tweedehands Verde items</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Voor de Industrie:</h4>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Textiel recycling partnerships</li>
                    <li>• Innovatie in circulaire materialen</li>
                    <li>• Knowledge sharing met andere merken</li>
                    <li>• Investering in recycling technologie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency & Reporting */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transparantie & Rapportage</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📊 Wat we Meten</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Milieu Metrics</h4>
                    <p className="text-gray-600 text-sm">CO2, water, afval, energie per product</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Sociale Metrics</h4>
                    <p className="text-gray-600 text-sm">Lonen, arbeidsomstandigheden, gendergelijkheid</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-800">Economische Metrics</h4>
                    <p className="text-gray-600 text-sm">Lokale economische impact, investeringen</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Onze Rapportage</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Jaarlijks Duurzaamheidsrapport</h4>
                    <p className="text-gray-600 text-sm">Uitgebreide analyse van onze impact en doelen</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Kwartaal Updates</h4>
                    <p className="text-gray-600 text-sm">Voortgang op onze duurzaamheidsdoelstellingen</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Product Impact Labels</h4>
                    <p className="text-gray-600 text-sm">CO2, water en sociale impact per product</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Onze 2030 Doelen</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Net Zero</div>
                  <p className="text-blue-800 text-sm">CO2 uitstoot</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50%</div>
                  <p className="text-blue-800 text-sm">Minder waterverbruik</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <p className="text-blue-800 text-sm">Circulaire materialen</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">Zero</div>
                  <p className="text-blue-800 text-sm">Waste to landfill</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Word Onderdeel van de Oplossing</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shop Bewust</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Elke aankoop is een stem voor duurzame mode. Kies kwaliteit boven kwantiteit.
                </p>
                <Link href="/" className="text-green-600 hover:underline font-medium">
                  Shop Nu →
                </Link>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Leer & Deel</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Verdiep je in duurzame mode en deel je kennis met vrienden en familie.
                </p>
                <Link href="/impact" className="text-green-600 hover:underline font-medium">
                  Bekijk Impact →
                </Link>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Werk Samen</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ben je een merk, influencer of organisatie? Laten we samenwerken voor impact.
                </p>
                <Link href="/contact" className="text-green-600 hover:underline font-medium">
                  Neem Contact Op →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Samen Bouwen we aan een Duurzame Toekomst</h2>
            <p className="text-xl mb-6 opacity-90">
              Duurzaamheid is geen bestemming, maar een reis. Een reis die we samen maken, 
              stap voor stap, keuze voor keuze.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/certifications" 
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Onze Certificeringen
              </Link>
              <Link 
                href="/impact" 
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
              >
                Bekijk Onze Impact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

