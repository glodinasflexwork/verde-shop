/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impact - Verde',
  description: 'Ontdek de meetbare impact van Verde op milieu en samenleving. Van CO2 besparing tot sociale projecten - transparante impact rapportage.',
}

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Onze Impact</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Meetbare verandering voor een betere wereld. Ontdek hoe Verde en onze 
            community samen positieve impact creëren.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Impact Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Impact Dashboard 2024</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">25,000kg</div>
                <p className="text-green-800 font-medium">CO2 Bespaard</p>
                <p className="text-green-600 text-sm mt-1">vs. conventionele mode</p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">500,000L</div>
                <p className="text-blue-800 font-medium">Water Bespaard</p>
                <p className="text-blue-600 text-sm mt-1">door duurzame productie</p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">2,500+</div>
                <p className="text-purple-800 font-medium">Werknemers Ondersteund</p>
                <p className="text-purple-600 text-sm mt-1">met eerlijke lonen</p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl font-bold text-orange-600 mb-2">15,000+</div>
                <p className="text-orange-800 font-medium">Bewuste Consumenten</p>
                <p className="text-orange-600 text-sm mt-1">in onze community</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sinds onze lancering in 2023 hebben we samen met onze community en partners 
                aantoonbare positieve impact gecreëerd. Deze cijfers worden maandelijks 
                bijgewerkt en onafhankelijk geverifieerd.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Milieu Impact</h2>
            
            <div className="space-y-8">
              {/* Carbon Footprint */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">🌍 Koolstofvoetafdruk Reductie</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Onze Besparingen</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700">Biologische katoen vs. conventioneel:</span>
                        <span className="font-bold text-green-800">-46% CO2</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700">Gerecyclede polyester vs. virgin:</span>
                        <span className="font-bold text-green-800">-59% CO2</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-green-700">Lokale productie vs. globaal:</span>
                        <span className="font-bold text-green-800">-32% CO2</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-800 mb-3">Impact per Product</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Gemiddeld T-shirt:</span>
                          <span className="font-bold text-gray-800">2.1 kg CO2</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">vs. 7.5 kg conventioneel</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Gemiddelde jeans:</span>
                          <span className="font-bold text-gray-800">8.3 kg CO2</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">vs. 33.4 kg conventioneel</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎯 2025 Doelen</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">50,000kg</div>
                      <p className="text-green-700 text-sm">CO2 besparing target</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">Carbon Neutral</div>
                      <p className="text-green-700 text-sm">Eigen operaties</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">-30%</div>
                      <p className="text-green-700 text-sm">Supply chain emissies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Water Conservation */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">💧 Water Conservering</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Water Besparingen</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700">Biologische katoen:</span>
                        <span className="font-bold text-blue-800">-91% water</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700">Gerecyclede vezels:</span>
                        <span className="font-bold text-blue-800">-95% water</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-700">Natuurlijke verfstoffen:</span>
                        <span className="font-bold text-blue-800">-60% water</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Water Projecten</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold text-gray-800">India - Katoen Boeren</h5>
                        <p className="text-sm text-gray-600">Druppelirrigatie systemen geïnstalleerd</p>
                        <p className="text-blue-600 font-medium">250 boeren ondersteund</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold text-gray-800">Bangladesh - Textielfabrieken</h5>
                        <p className="text-sm text-gray-600">Waterzuivering technologie</p>
                        <p className="text-blue-600 font-medium">5 fabrieken geüpgraded</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Waste Reduction */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">♻️ Afval Reductie</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
                    <p className="text-purple-800 font-medium">Gerecyclede Materialen</p>
                    <p className="text-purple-600 text-sm">in onze collectie</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1,200</div>
                    <p className="text-purple-800 font-medium">Kledingstukken</p>
                    <p className="text-purple-600 text-sm">gerecycleerd via take-back</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Zero</div>
                    <p className="text-purple-800 font-medium">Waste to Landfill</p>
                    <p className="text-purple-600 text-sm">in onze operaties</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-3">Circulaire Initiatieven</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-purple-800">Take-Back Programma</h5>
                      <p className="text-purple-700 text-sm">Klanten kunnen oude kleding inleveren voor recycling</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-800">Upcycling Workshops</h5>
                      <p className="text-purple-700 text-sm">Maandelijkse workshops voor kleding reparatie en styling</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sociale Impact</h2>
            
            <div className="space-y-8">
              {/* Fair Wages */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">💰 Eerlijke Lonen</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">Living Wage Impact</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-orange-700">Werknemers ondersteund:</span>
                          <span className="font-bold text-orange-800">2,500+</span>
                        </div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-orange-700">Gemiddelde loonverhoging:</span>
                          <span className="font-bold text-orange-800">+35%</span>
                        </div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-orange-700">Fabrieken met living wage:</span>
                          <span className="font-bold text-orange-800">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">Regionale Verdeling</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-gray-700">India:</span>
                          <span className="font-bold text-gray-800">1,200 werknemers</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Bangladesh:</span>
                          <span className="font-bold text-gray-800">800 werknemers</span>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Peru:</span>
                          <span className="font-bold text-gray-800">500 werknemers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Women Empowerment */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">👩‍💼 Vrouwen Empowerment</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">78%</div>
                    <p className="text-pink-800 font-medium">Vrouwelijke Werknemers</p>
                    <p className="text-pink-600 text-sm">in onze supply chain</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">45%</div>
                    <p className="text-pink-800 font-medium">Vrouwen in Leidinggevende Posities</p>
                    <p className="text-pink-600 text-sm">bij onze partners</p>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">150</div>
                    <p className="text-pink-800 font-medium">Vrouwelijke Ondernemers</p>
                    <p className="text-pink-600 text-sm">ondersteund met microkredieten</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-3">Empowerment Programma's</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-pink-800">Leiderschap Training</h5>
                      <p className="text-pink-700 text-sm">Ontwikkeling van management vaardigheden voor vrouwen</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-pink-800">Financiële Geletterdheid</h5>
                      <p className="text-pink-700 text-sm">Training in budgettering en sparen</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Development */}
              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">🏘️ Community Ontwikkeling</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-teal-800 mb-3">Onderwijs Projecten</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-teal-800">Kinderopvang Centra</h5>
                        <p className="text-teal-700 text-sm">3 centra geopend nabij fabrieken</p>
                        <p className="text-teal-600 font-medium">180 kinderen bediend</p>
                      </div>
                      <div className="p-3 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-teal-800">Volwassenen Educatie</h5>
                        <p className="text-teal-700 text-sm">Lees- en schrijfprogramma's</p>
                        <p className="text-teal-600 font-medium">320 deelnemers</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-teal-800 mb-3">Gezondheidszorg</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-teal-800">Mobiele Klinieken</h5>
                        <p className="text-teal-700 text-sm">Maandelijkse bezoeken aan afgelegen gemeenschappen</p>
                        <p className="text-teal-600 font-medium">1,500 patiënten per jaar</p>
                      </div>
                      <div className="p-3 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-teal-800">Gezondheidsverzekering</h5>
                        <p className="text-teal-700 text-sm">Uitgebreide dekking voor werknemers</p>
                        <p className="text-teal-600 font-medium">2,500 families gedekt</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Innovatie Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔬 R&D Investeringen</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Materiaal Innovatie</h4>
                    <p className="text-blue-700 text-sm mb-2">Investering in nieuwe duurzame materialen</p>
                    <div className="text-2xl font-bold text-blue-600">€125,000</div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Productie Technologie</h4>
                    <p className="text-green-700 text-sm mb-2">Efficiëntere en schonere productieprocessen</p>
                    <div className="text-2xl font-bold text-green-600">€85,000</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Circulaire Oplossingen</h4>
                    <p className="text-purple-700 text-sm mb-2">Recycling en upcycling technologieën</p>
                    <div className="text-2xl font-bold text-purple-600">€65,000</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Innovatie Projecten</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Blockchain Traceability</h4>
                    <p className="text-gray-600 text-sm">Volledige transparantie van grondstof tot eindproduct</p>
                    <div className="mt-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">In Development</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800">AI Impact Scoring</h4>
                    <p className="text-gray-600 text-sm">Real-time duurzaamheidsscoring per product</p>
                    <div className="mt-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Beta Testing</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Bioplastic Packaging</h4>
                    <p className="text-gray-600 text-sm">100% composteerbare verpakkingsmaterialen</p>
                    <div className="mt-2">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Pilot Phase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Impact */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">15,000+</div>
                <p className="text-indigo-800 font-medium">Bewuste Consumenten</p>
                <p className="text-indigo-600 text-sm">in onze community</p>
              </div>
              
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">4.8/5</div>
                <p className="text-indigo-800 font-medium">Klanttevredenheid</p>
                <p className="text-indigo-600 text-sm">gemiddelde beoordeling</p>
              </div>
              
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">89%</div>
                <p className="text-indigo-800 font-medium">Herhaalaankopen</p>
                <p className="text-indigo-600 text-sm">binnen 12 maanden</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📚 Educatie & Bewustwording</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Duurzaamheids Blog</h4>
                    <p className="text-gray-600 text-sm">50+ artikelen over duurzame mode</p>
                    <p className="text-indigo-600 font-medium">25,000 maandelijkse lezers</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Workshops & Events</h4>
                    <p className="text-gray-600 text-sm">Maandelijkse educatieve evenementen</p>
                    <p className="text-indigo-600 font-medium">500+ deelnemers per jaar</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Social Media Impact</h4>
                    <p className="text-gray-600 text-sm">Bewustwording campagnes</p>
                    <p className="text-indigo-600 font-medium">100,000+ bereik per maand</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🤝 Community Initiatieven</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Clothing Swap Events</h4>
                    <p className="text-gray-600 text-sm">Kwartaal evenementen in Amsterdam</p>
                    <p className="text-indigo-600 font-medium">200+ deelnemers per event</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Repair Cafés</h4>
                    <p className="text-gray-600 text-sm">Gratis reparatie workshops</p>
                    <p className="text-indigo-600 font-medium">150+ items gerepareerd</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Student Programma</h4>
                    <p className="text-gray-600 text-sm">Kortingen voor studenten</p>
                    <p className="text-indigo-600 font-medium">2,000+ studenten bereikt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Toekomst Doelen</h2>
            
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border-2 border-green-200 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">2025</h3>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-green-600">50,000kg CO2</div>
                    <p className="text-green-700 text-sm">Besparing target</p>
                    <div className="text-lg font-bold text-green-600">5,000</div>
                    <p className="text-green-700 text-sm">Werknemers ondersteund</p>
                  </div>
                </div>
                
                <div className="text-center p-6 border-2 border-blue-200 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">2027</h3>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-blue-600">Carbon Neutral</div>
                    <p className="text-blue-700 text-sm">Volledige operaties</p>
                    <div className="text-lg font-bold text-blue-600">100%</div>
                    <p className="text-blue-700 text-sm">Circulaire materialen</p>
                  </div>
                </div>
                
                <div className="text-center p-6 border-2 border-purple-200 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">2030</h3>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-purple-600">Net Positive</div>
                    <p className="text-purple-700 text-sm">Milieu impact</p>
                    <div className="text-lg font-bold text-purple-600">10,000</div>
                    <p className="text-purple-700 text-sm">Werknemers ondersteund</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Onze Commitment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We committeren ons aan transparante rapportage van onze voortgang. 
                  Elk kwartaal publiceren we updates over onze impact metrics, en jaarlijks 
                  laten we onze cijfers onafhankelijk verifiëren door een derde partij.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Transparante Rapportage</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Onafhankelijke Verificatie</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Continue Verbetering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Word Onderdeel van Onze Impact</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-green-200 rounded-lg">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Shop met Impact</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Elke aankoop draagt bij aan onze gezamenlijke impact. 
                  Kies bewust, kies Verde.
                </p>
                <Link href="/" className="text-green-600 hover:underline font-medium">
                  Shop Nu →
                </Link>
              </div>
              
              <div className="text-center p-6 border border-blue-200 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Track je Impact</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Zie in je account hoeveel CO2 en water je hebt bespaard 
                  met je aankopen.
                </p>
                <Link href="/account" className="text-blue-600 hover:underline font-medium">
                  Mijn Impact →
                </Link>
              </div>
              
              <div className="text-center p-6 border border-purple-200 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Deel je Verhaal</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Inspireer anderen door je duurzame keuzes te delen 
                  op social media.
                </p>
                <Link href="/contact" className="text-purple-600 hover:underline font-medium">
                  Deel Impact →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Samen Creëren We Positieve Impact</h2>
            <p className="text-xl mb-6 opacity-90">
              Onze impact is jouw impact. Elke bewuste keuze telt, 
              elke aankoop maakt verschil.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/" 
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop met Impact
              </Link>
              <Link 
                href="/about" 
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
              >
                Ons Verhaal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

