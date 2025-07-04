import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Over Ons - Verde',
  description: 'Het verhaal van Verde - Twee gepassioneerde ondernemers uit Nederland die duurzame mode toegankelijk maken voor iedereen',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ons Verhaal</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Van een gedeelde passie voor duurzaamheid naar een missie om mode eerlijker en groener te maken
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welkom bij Verde</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Verde is meer dan een webshop - het is de vervulling van een droom. Een droom van twee vrienden 
              uit Nederland die geloofden dat mode mooi, eerlijk én duurzaam kan zijn. Ons verhaal begon met 
              een eenvoudige vraag: &ldquo;Waarom is het zo moeilijk om kleding te vinden die goed is voor 
              zowel mensen als planeet?&rdquo;
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Die vraag leidde tot een reis van ontdekking, passie en uiteindelijk tot Verde - een plek waar 
              bewuste consumenten terecht kunnen voor mode die een positieve impact heeft op de wereld.
            </p>
          </div>
        </section>

        {/* Founders Story */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">De Oprichters</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emma van der Berg</h3>
                <p className="text-green-600 font-medium mb-4">Co-oprichter & Duurzaamheidsexpert</p>
                <p className="text-gray-600 text-sm">
                  Milieuwetenschapper met 8 jaar ervaring in duurzame textiel. 
                  Gepassioneerd over circulaire economie en eerlijke handel.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lars Janssen</h3>
                <p className="text-green-600 font-medium mb-4">Co-oprichter & Tech Innovator</p>
                <p className="text-gray-600 text-sm">
                  E-commerce specialist en tech-entrepreneur. Gelooft in de kracht van 
                  technologie om duurzame keuzes toegankelijk te maken.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Hoe het allemaal begon</h3>
              <p className="text-green-700 leading-relaxed mb-4">
                Emma en Lars leerden elkaar kennen tijdens een duurzaamheidsevent in Amsterdam in 2019. 
                Emma, met haar achtergrond in milieuwetenschappen, was gefrustreerd over de impact van 
                fast fashion. Lars, een ervaren e-commerce ondernemer, zag de uitdaging om duurzame 
                alternatieven mainstream te maken.
              </p>
              <p className="text-green-700 leading-relaxed mb-4">
                &ldquo;We realiseerden ons dat er een enorme kloof was tussen wat consumenten wilden - 
                mooie, betaalbare kleding - en wat beschikbaar was in de duurzame mode wereld,&rdquo; 
                vertelt Emma. &ldquo;Veel duurzame merken waren ofwel te duur, ofwel moeilijk te vinden, 
                ofwel niet transparant genoeg over hun praktijken.&rdquo;
              </p>
              <p className="text-green-700 leading-relaxed">
                Lars voegt toe: &ldquo;We zagen een kans om technologie en zorgvuldige curatie te 
                combineren om een platform te creëren waar mensen gemakkelijk kunnen shoppen zonder 
                hun waarden te compromitteren. Zo werd Verde geboren.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Onze Missie & Visie</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🎯 Onze Missie</h3>
                <p className="text-blue-700 leading-relaxed">
                  Duurzame mode toegankelijk, betaalbaar en begrijpelijk maken voor elke Nederlandse 
                  consument. Wij geloven dat iedereen het recht heeft op mooie kleding die geen 
                  schade toebrengt aan mensen of planeet.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">🌟 Onze Visie</h3>
                <p className="text-green-700 leading-relaxed">
                  Een wereld waarin duurzame mode de norm is, niet de uitzondering. Waar transparantie, 
                  eerlijkheid en milieubewustzijn de standaard zijn in de mode-industrie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Onze Waarden</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Duurzaamheid</h3>
                <p className="text-gray-600 text-sm">
                  Elke beslissing die we nemen, wordt getoetst aan onze impact op het milieu en de samenleving.
                </p>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparantie</h3>
                <p className="text-gray-600 text-sm">
                  We delen openlijk informatie over onze leveranciers, productieprocessen en impact.
                </p>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Eerlijkheid</h3>
                <p className="text-gray-600 text-sm">
                  Eerlijke prijzen, eerlijke lonen en eerlijke behandeling van alle betrokkenen in onze keten.
                </p>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovatie</h3>
                <p className="text-gray-600 text-sm">
                  We zoeken voortdurend naar nieuwe manieren om mode duurzamer en toegankelijker te maken.
                </p>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Passie</h3>
                <p className="text-gray-600 text-sm">
                  Onze liefde voor duurzame mode en positieve verandering drijft alles wat we doen.
                </p>
              </div>
              
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gemeenschap</h3>
                <p className="text-gray-600 text-sm">
                  We bouwen aan een community van bewuste consumenten die samen impact maken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Onze Reis</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2019
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Het Begin</h3>
                  <p className="text-gray-600">
                    Emma en Lars ontmoeten elkaar op een duurzaamheidsevent in Amsterdam. 
                    De eerste gesprekken over een duurzame mode platform.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2020
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Onderzoek & Planning</h3>
                  <p className="text-gray-600">
                    Uitgebreid marktonderzoek, gesprekken met duurzame merken en consumenten. 
                    Ontwikkeling van het Verde concept en businessplan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2021
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Eerste Partnerships</h3>
                  <p className="text-gray-600">
                    Samenwerking met de eerste duurzame merken. Ontwikkeling van onze 
                    duurzaamheidscriteria en certificeringsproces.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2022
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Platform Ontwikkeling</h3>
                  <p className="text-gray-600">
                    Bouw van het Verde platform met focus op gebruiksvriendelijkheid en transparantie. 
                    Beta testing met een selecte groep bewuste consumenten.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2023
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Officiële Launch</h3>
                  <p className="text-gray-600">
                    Verde gaat live! Lancering met 25 zorgvuldig geselecteerde duurzame merken 
                    en meer dan 500 producten.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2024
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Groei & Impact</h3>
                  <p className="text-gray-600">
                    Uitbreiding naar 50+ merken, lancering van ons impact dashboard en 
                    eerste duurzaamheidsrapport. Meer dan 10.000 tevreden klanten.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                  2025
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">De Toekomst</h3>
                  <p className="text-gray-600">
                    Uitbreiding naar België en Duitsland, lancering van ons eigen Verde label 
                    en verdere innovatie in duurzame mode technologie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Culture */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ons Team</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Verde is uitgegroeid van twee oprichters naar een hecht team van 12 gepassioneerde 
              professionals. Elk teamlid deelt onze missie en brengt unieke expertise mee:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="font-semibold text-gray-900">Design Team</h4>
                <p className="text-sm text-gray-600">UX/UI en visuele communicatie</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">🔬</div>
                <h4 className="font-semibold text-gray-900">Sustainability Team</h4>
                <p className="text-sm text-gray-600">Productonderzoek en certificering</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">🛒</div>
                <h4 className="font-semibold text-gray-900">Buying Team</h4>
                <p className="text-sm text-gray-600">Inkoop en merkrelaties</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">💻</div>
                <h4 className="font-semibold text-gray-900">Tech Team</h4>
                <p className="text-sm text-gray-600">Platform ontwikkeling</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">📦</div>
                <h4 className="font-semibold text-gray-900">Operations</h4>
                <p className="text-sm text-gray-600">Logistiek en fulfillment</p>
              </div>
              
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-semibold text-gray-900">Customer Care</h4>
                <p className="text-sm text-gray-600">Klantenservice en support</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Onze Werkcultuur</h3>
              <ul className="space-y-2 text-blue-700">
                <li>✨ <strong>Flexibel werken:</strong> Hybride model met focus op resultaten</li>
                <li>🌱 <strong>Persoonlijke groei:</strong> Leerbudget en ontwikkelingsmogelijkheden</li>
                <li>🤝 <strong>Samenwerking:</strong> Open communicatie en gezamenlijke besluitvorming</li>
                <li>🎯 <strong>Impact gedreven:</strong> Elke rol draagt bij aan onze missie</li>
                <li>🌍 <strong>Duurzaam kantoor:</strong> Circulaire inrichting en groene energie</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community & Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Onze Community</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Verde is meer dan een webshop - we zijn een beweging. Onze community van bewuste 
              consumenten groeit elke dag en samen maken we impact:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                <p className="text-green-800 font-medium">Actieve klanten</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-green-800 font-medium">Duurzame merken</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">25,000kg</div>
                <p className="text-green-800 font-medium">CO2 bespaard</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Word Deel van Onze Missie</h3>
              <p className="text-yellow-700 mb-4">
                Wil je meer weten over duurzame mode of heb je vragen over onze producten? 
                We horen graag van je! Volg ons op social media voor de laatste updates, 
                tips en verhalen uit de duurzame mode wereld.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Neem Contact Op
                </Link>
                <Link href="/sustainability" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                  Onze Duurzaamheid
                </Link>
                <Link href="/impact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Bekijk Onze Impact
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Samen Maken We Het Verschil</h2>
            <p className="text-xl mb-6 opacity-90">
              Elke aankoop bij Verde is een stem voor een duurzamere toekomst. 
              Sluit je aan bij onze missie en ontdek mode die goed voelt.
            </p>
            <Link 
              href="/" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Shop Duurzame Mode
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

