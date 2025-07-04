/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Certificeringen - Verde',
  description: 'Ontdek alle duurzaamheidscertificeringen van Verde merken. Van GOTS tot Fair Trade - transparantie in elke certificering.',
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Certificeringen</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Transparantie door verificatie. Ontdek de certificeringen die onze 
            duurzaamheidsclaims ondersteunen en valideren.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Waarom Certificeringen Belangrijk Zijn</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In een wereld vol greenwashing zijn certificeringen essentieel voor transparantie. 
                  Ze bieden onafhankelijke verificatie van duurzaamheidsclaims en zorgen ervoor 
                  dat consumenten kunnen vertrouwen op wat ze kopen.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bij Verde werken we alleen met merken die hun claims kunnen onderbouwen met 
                  erkende, onafhankelijke certificeringen van gerespecteerde organisaties.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Onze Certificering Standaarden</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>✅ <strong>Onafhankelijke verificatie</strong> door erkende organisaties</li>
                  <li>✅ <strong>Jaarlijkse audits</strong> en hernieuwing van certificaten</li>
                  <li>✅ <strong>Transparante criteria</strong> en openbare standaarden</li>
                  <li>✅ <strong>Traceability</strong> door de hele supply chain</li>
                  <li>✅ <strong>Continuous improvement</strong> en monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Milieu Certificeringen</h2>
            
            <div className="space-y-8">
              {/* GOTS */}
              <div className="border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">GO</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      GOTS (Global Organic Textile Standard)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      De wereldwijde standaard voor biologische textielvezels. GOTS garandeert dat 
                      textielproducten bestaan uit minimaal 70% biologische vezels en voldoen aan 
                      strenge milieu- en sociale criteria.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Milieu Criteria:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Biologische vezelproductie zonder pesticiden</li>
                          <li>• Beperkte chemicaliën in verwerking</li>
                          <li>• Waterzuivering en afvalbehandeling</li>
                          <li>• Energieverbruik monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Sociale Criteria:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• ILO kernconventies naleving</li>
                          <li>• Geen kinderarbeid of dwangarbeid</li>
                          <li>• Veilige arbeidsomstandigheden</li>
                          <li>• Vrijheid van vereniging</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* OEKO-TEX */}
              <div className="border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">OT</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      OEKO-TEX Standard 100
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Test op schadelijke stoffen in textiel. Garandeert dat textielproducten 
                      vrij zijn van meer dan 100 schadelijke chemicaliën en veilig zijn voor 
                      menselijk gebruik.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Klasse I:</h4>
                        <p className="text-sm text-gray-600">Baby artikelen (0-3 jaar)</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Klasse II:</h4>
                        <p className="text-sm text-gray-600">Direct huidcontact</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Klasse III:</h4>
                        <p className="text-sm text-gray-600">Geen huidcontact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cradle to Cradle */}
              <div className="border border-purple-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-600">C2C</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cradle to Cradle Certified™
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Holistische benadering van duurzaamheid die producten beoordeelt op 
                      materiaalveiligheid, hernieuwbare energie, waterbeheer, sociale eerlijkheid 
                      en circulaire economie principes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Beoordelingscategorieën:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Materiaal gezondheid</li>
                          <li>• Hernieuwbare energie gebruik</li>
                          <li>• Koolstof management</li>
                          <li>• Water stewardship</li>
                          <li>• Sociale eerlijkheid</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Certificaat Niveaus:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Basic Level</li>
                          <li>• Bronze Level</li>
                          <li>• Silver Level</li>
                          <li>• Gold Level</li>
                          <li>• Platinum Level</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sociale Certificeringen</h2>
            
            <div className="space-y-8">
              {/* Fair Trade */}
              <div className="border border-orange-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">FT</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Fair Trade Certified™
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Garandeert eerlijke handel door het ondersteunen van boeren en arbeiders 
                      met eerlijke prijzen, veilige arbeidsomstandigheden en gemeenschapsinvesteringen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Voor Producenten:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Gegarandeerde minimumprijzen</li>
                          <li>• Fair Trade premiums voor investeringen</li>
                          <li>• Lange termijn handelsrelaties</li>
                          <li>• Toegang tot voorfinanciering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Voor Arbeiders:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Veilige arbeidsomstandigheden</li>
                          <li>• Geen kinderarbeid of dwangarbeid</li>
                          <li>• Vrijheid van vereniging</li>
                          <li>• Non-discriminatie beleid</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SA8000 */}
              <div className="border border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">SA</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      SA8000 Social Accountability Standard
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Internationale standaard voor sociale verantwoordelijkheid die werkplekken 
                      beoordeelt op naleving van fundamentele arbeidsrechten en ethische behandeling 
                      van werknemers.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Kernprincipes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Geen kinderarbeid</li>
                          <li>• Geen dwangarbeid</li>
                          <li>• Gezondheid en veiligheid</li>
                          <li>• Vrijheid van vereniging</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Aanvullende Eisen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Non-discriminatie</li>
                          <li>• Disciplinaire praktijken</li>
                          <li>• Werktijden regulering</li>
                          <li>• Compensatie systemen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WRAP */}
              <div className="border border-teal-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-600">WR</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      WRAP (Worldwide Responsible Accredited Production)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Onafhankelijke certificering voor de textiel-, schoenen- en speelgoedindustrie 
                      die zich richt op legale, humane en ethische productieomstandigheden.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-teal-800 mb-2">12 Principes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Naleving van wetten</li>
                          <li>• Geen dwangarbeid</li>
                          <li>• Geen kinderarbeid</li>
                          <li>• Geen intimidatie</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800 mb-2">Werkplek:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Non-discriminatie</li>
                          <li>• Gezondheid & veiligheid</li>
                          <li>• Verenigingsvrijheid</li>
                          <li>• Compensatie</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800 mb-2">Operaties:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Werktijden</li>
                          <li>• Milieupraktijken</li>
                          <li>• Douane compliance</li>
                          <li>• Beveiliging</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Materiaal Certificeringen</h2>
            
            <div className="space-y-8">
              {/* GRS */}
              <div className="border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">GR</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      GRS (Global Recycled Standard)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Internationale standaard voor gerecyclede content verificatie, supply chain 
                      eisen, sociale en milieupraktijken en chemische restricties.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Vereisten:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Minimaal 20% gerecyclede content</li>
                          <li>• Supply chain traceability</li>
                          <li>• Sociale en milieucriteria</li>
                          <li>• Chemische restricties</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Voordelen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Afvalreductie</li>
                          <li>• Verminderde afhankelijkheid van virgin materialen</li>
                          <li>• Transparante supply chain</li>
                          <li>• Verbeterde sociale en milieupraktijken</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RCS */}
              <div className="border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">RC</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      RCS (Recycled Claim Standard)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Standaard die de aanwezigheid en hoeveelheid gerecyclede materialen in een 
                      eindproduct verifieert en de supply chain van input tot eindproduct tracked.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Scope:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Pre-consumer gerecyclede materialen</li>
                          <li>• Post-consumer gerecyclede materialen</li>
                          <li>• Supply chain tracking</li>
                          <li>• Content verificatie</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Toepassingen:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Gerecyclede polyester</li>
                          <li>• Gerecyclede katoen</li>
                          <li>• Gerecyclede wol</li>
                          <li>• Andere gerecyclede vezels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FSC */}
              <div className="border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-600">FS</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      FSC (Forest Stewardship Council)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Certificering voor verantwoord bosbeheer, relevant voor textielproducten 
                      gemaakt van houtpulp zoals viscose, modal en lyocell.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Principes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Biodiversiteit behoud</li>
                          <li>• Duurzame oogst niveaus</li>
                          <li>• Rechten van inheemse volkeren</li>
                          <li>• Arbeidsrechten en veiligheid</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Labels:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• FSC 100%: Volledig FSC materiaal</li>
                          <li>• FSC Mix: Mix van FSC en gecontroleerde bronnen</li>
                          <li>• FSC Recycled: Gerecyclede materialen</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verde Certification Process */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Verde Certificering Proces</h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Elk merk dat wil samenwerken met Verde doorloopt ons rigoureuze certificering proces. 
                We controleren niet alleen de certificaten, maar verifiëren ook de implementatie en 
                naleving van duurzaamheidsstandaarden.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">1. Aanmelding</h3>
                <p className="text-blue-700 text-sm">
                  Merken dienen certificaten en documentatie in via ons partner portal
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">2. Verificatie</h3>
                <p className="text-green-700 text-sm">
                  Onze experts controleren de geldigheid en scope van alle certificeringen
                </p>
              </div>
              
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">3. Audit</h3>
                <p className="text-yellow-700 text-sm">
                  On-site bezoeken en interviews met leveranciers en productiefaciliteiten
                </p>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">4. Goedkeuring</h3>
                <p className="text-purple-700 text-sm">
                  Succesvolle merken worden toegelaten tot het Verde platform
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Onze Minimum Vereisten</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Milieu:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Minimaal één erkende milieucertificering</li>
                    <li>• Transparante supply chain mapping</li>
                    <li>• Meetbare duurzaamheidsdoelen</li>
                    <li>• Jaarlijkse impact rapportage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Sociaal:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Naleving van ILO kernconventies</li>
                    <li>• Living wage implementatie</li>
                    <li>• Veilige arbeidsomstandigheden</li>
                    <li>• Non-discriminatie beleid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Monitoring */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Continue Monitoring & Verbetering</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔄 Jaarlijkse Reviews</h3>
                <p className="text-gray-700 mb-4">
                  Alle Verde partners ondergaan jaarlijkse reviews om ervoor te zorgen dat 
                  certificeringen geldig blijven en standaarden worden gehandhaafd.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Certificaat geldigheid controle</li>
                  <li>• Performance tegen KPI's</li>
                  <li>• Klantenfeedback evaluatie</li>
                  <li>• Nieuwe ontwikkelingen assessment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Verbetering Programma's</h3>
                <p className="text-gray-700 mb-4">
                  We ondersteunen onze partners bij continue verbetering door training, 
                  resources en best practice sharing.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Duurzaamheids workshops</li>
                  <li>• Technische ondersteuning</li>
                  <li>• Peer learning netwerken</li>
                  <li>• Innovatie partnerships</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">🎯 Toekomstige Ontwikkelingen</h3>
              <p className="text-green-700 mb-4">
                We blijven onze certificering standaarden ontwikkelen om voorop te lopen 
                in duurzaamheid en transparantie:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-green-800">2025</h4>
                  <p className="text-green-700 text-sm">Blockchain traceability implementatie</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">2026</h4>
                  <p className="text-green-700 text-sm">AI-powered impact monitoring</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800">2027</h4>
                  <p className="text-green-700 text-sm">Real-time sustainability scoring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Read Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hoe Certificeringen Lezen?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🏷️ Op Productpagina's</h3>
                <p className="text-gray-700 mb-4">
                  Elk product op Verde toont duidelijk alle relevante certificeringen 
                  met uitleg over wat ze betekenen.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Certificering Labels:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Certificering naam en logo</li>
                    <li>• Certificaat nummer</li>
                    <li>• Geldigheids periode</li>
                    <li>• Scope van certificering</li>
                    <li>• Link naar volledige documentatie</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔍 Verificatie</h3>
                <p className="text-gray-700 mb-4">
                  Wil je zelf certificeringen verifiëren? Hier is hoe je dat kunt doen:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Verificatie Stappen:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Bezoek de officiële certificering website</li>
                    <li>• Zoek op certificaat nummer</li>
                    <li>• Controleer geldigheids datum</li>
                    <li>• Verifieer scope en bedrijfsnaam</li>
                    <li>• Neem contact op bij twijfel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Vertrouw op Verificatie</h2>
            <p className="text-xl mb-6 opacity-90">
              Certificeringen geven je de zekerheid dat je keuzes echt impact hebben. 
              Shop met vertrouwen bij Verde.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Gecertificeerde Mode
              </Link>
              <Link 
                href="/sustainability" 
                className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Onze Duurzaamheid
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

