import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retourbeleid - Verde',
  description: 'Retourbeleid voor Verde duurzame mode en schoonheid webshop - 14 dagen bedenktijd',
}

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Retourbeleid</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-green-800 mb-3">Snel overzicht</h2>
              <ul className="space-y-2 text-green-700">
                <li>✅ <strong>14 dagen bedenktijd</strong> vanaf ontvangst</li>
                <li>✅ <strong>Gratis retourneren</strong> binnen Nederland</li>
                <li>✅ <strong>Snelle terugbetaling</strong> binnen 14 dagen</li>
                <li>✅ <strong>Duurzame verpakking</strong> hergebruiken mogelijk</li>
                <li>✅ <strong>Eenvoudig retourproces</strong> via uw account</li>
              </ul>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Uw retourrecht</h2>
              <p>
                Bij Verde heeft u het wettelijke recht om uw bestelling binnen <strong>14 dagen</strong> na ontvangst 
                zonder opgave van redenen te retourneren. Deze bedenktijd begint op de dag nadat u (of een door u aangewezen derde) 
                het laatste product van uw bestelling heeft ontvangen.
              </p>
              <p className="mt-4">
                Dit retourrecht geldt voor alle producten in onze webshop, behalve voor de uitzonderingen die vermeld staan in artikel 6.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Voorwaarden voor retour</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Staat van het product</h3>
              <p>Om in aanmerking te komen voor retour moet het product:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>In originele staat verkeren (ongedragen, ongewassen, onbeschadigd)</li>
                <li>Alle originele labels en etiketten nog bevatten</li>
                <li>In de originele verpakking zitten (indien mogelijk)</li>
                <li>Vergezeld zijn van de originele factuur of pakbon</li>
                <li>Geen geuren bevatten (parfum, rook, etc.)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Hygiëne en veiligheid</h3>
              <p>Voor uw veiligheid en die van andere klanten accepteren wij geen retouren van:</p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>Ondergoed en badkleding (om hygiënische redenen)</li>
                <li>Producten die direct contact hebben gehad met de huid</li>
                <li>Gepersonaliseerde of op maat gemaakte items</li>
                <li>Producten die duidelijk zijn gebruikt of beschadigd</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Duurzaamheid</h3>
              <p>
                Als duurzaam modebedrijf vragen wij u om zorgvuldig om te gaan met retouren. 
                Probeer producten alleen uit zoals u dat in een winkel zou doen. 
                Onnodige retouren hebben impact op het milieu door extra transport en verpakking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hoe retourneren?</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Stap-voor-stap retourproces</h3>
                <ol className="list-decimal pl-6 space-y-3 text-blue-700">
                  <li><strong>Log in op uw account</strong> en ga naar &lsquo;Mijn bestellingen&rsquo;</li>
                  <li><strong>Selecteer de bestelling</strong> die u wilt retourneren</li>
                  <li><strong>Klik op &lsquo;Retour aanmelden&rsquo;</strong> en selecteer de producten</li>
                  <li><strong>Geef de reden op</strong> voor de retour (optioneel maar helpt ons verbeteren)</li>
                  <li><strong>Print het retourlabel</strong> dat automatisch wordt gegenereerd</li>
                  <li><strong>Verpak de producten</strong> zorgvuldig in de originele verpakking</li>
                  <li><strong>Plak het retourlabel</strong> op het pakket</li>
                  <li><strong>Breng het pakket</strong> naar een PostNL punt of plan een ophaalmoment</li>
                </ol>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Zonder account</h3>
              <p>
                Heeft u geen account? Geen probleem! Stuur een e-mail naar <strong>returns@verde.nl</strong> met:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>Uw bestelnummer</li>
                <li>E-mailadres waarmee u besteld heeft</li>
                <li>Welke producten u wilt retourneren</li>
                <li>Reden voor retour (optioneel)</li>
              </ul>
              <p className="mt-4">
                Wij sturen u dan binnen 24 uur een retourlabel toe.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Verpakking</h3>
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold text-green-800 mb-2">Duurzaam verpakken</h4>
                <ul className="list-disc pl-6 space-y-1 text-green-700 text-sm">
                  <li>Hergebruik de originele Verde verpakking indien mogelijk</li>
                  <li>Gebruik een andere doos of envelop als de originele beschadigd is</li>
                  <li>Verpak producten zorgvuldig om beschadiging te voorkomen</li>
                  <li>Voeg de factuur of pakbon toe in het pakket</li>
                  <li>Gebruik geen plastic zakjes tenzij noodzakelijk</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Retourkosten</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🆓 Gratis retour</h3>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>✅ Binnen Nederland</li>
                    <li>✅ Via PostNL retourlabel</li>
                    <li>✅ Bij bestelling boven €50</li>
                    <li>✅ Bij defecte producten</li>
                    <li>✅ Bij verkeerde levering</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">💰 Retourkosten</h3>
                  <ul className="space-y-2 text-yellow-700 text-sm">
                    <li>€4,95 bij bestelling onder €50</li>
                    <li>€9,95 naar België en Duitsland</li>
                    <li>€14,95 naar andere EU-landen</li>
                    <li>Eigen kosten bij zelf verzenden</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-600">
                <strong>Let op:</strong> Retourkosten worden automatisch afgetrokken van uw terugbetaling, 
                behalve wanneer de retour gratis is volgens bovenstaande voorwaarden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Terugbetaling</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Verwerkingstijd</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-2 text-blue-700">
                  <li><strong>1-2 werkdagen:</strong> Ontvangst en controle van uw retour</li>
                  <li><strong>2-3 werkdagen:</strong> Verwerking van de terugbetaling</li>
                  <li><strong>1-5 werkdagen:</strong> Terugboeking op uw rekening (afhankelijk van uw bank)</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong>Totale verwerkingstijd:</strong> Maximaal 14 dagen na ontvangst van uw retour, 
                conform wettelijke bepalingen.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Terugbetalingsmethode</h3>
              <p>
                Wij betalen het bedrag terug via dezelfde betaalmethode als waarmee u heeft betaald:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li><strong>iDEAL:</strong> Terugboeking op uw bankrekening</li>
                <li><strong>Creditcard:</strong> Terugboeking op uw creditcard</li>
                <li><strong>PayPal:</strong> Terugboeking naar uw PayPal account</li>
                <li><strong>Cadeaubon:</strong> Nieuwe cadeaubon (indien gewenst)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Wat wordt terugbetaald?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">✅</span>
                  <div>
                    <strong>Productprijs:</strong> Volledige prijs van geretourneerde producten
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold">✅</span>
                  <div>
                    <strong>Verzendkosten:</strong> Originele verzendkosten (bij volledige retour)
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong>Retourkosten:</strong> Worden afgetrokken (tenzij gratis retour)
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">❌</span>
                  <div>
                    <strong>Verzendkosten:</strong> Bij gedeeltelijke retour
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Uitzonderingen</h2>
              <p>
                Het herroepingsrecht geldt niet voor de volgende producten, 
                conform artikel 6:230p van het Burgerlijk Wetboek:
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Geen retourrecht voor:</h3>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li><strong>Ondergoed en badkleding</strong> (om hygiënische redenen)</li>
                  <li><strong>Gepersonaliseerde producten</strong> (op naam of maat gemaakt)</li>
                  <li><strong>Verzegelde producten</strong> die om gezondheids- of hygiëneredenen niet geschikt zijn voor terugzending en waarvan de verzegeling na levering is verbroken</li>
                  <li><strong>Producten die snel bederven</strong> of een beperkte houdbaarheid hebben</li>
                  <li><strong>Digitale content</strong> (e-books, digitale cadeaubonnen) waarvan de levering is begonnen met uitdrukkelijke voorafgaande toestemming</li>
                  <li><strong>Producten die duidelijk gebruikt zijn</strong> buiten het uitproberen zoals in een winkel</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Ruilen</h2>
              <p>
                Verde biedt momenteel geen directe ruilservice aan. Als u een ander maat of kleur wilt:
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Ruilen in 3 stappen:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-yellow-700">
                  <li><strong>Retourneer</strong> het originele product volgens ons retourbeleid</li>
                  <li><strong>Plaats een nieuwe bestelling</strong> voor het gewenste product</li>
                  <li><strong>Ontvang terugbetaling</strong> voor het geretourneerde product</li>
                </ol>
              </div>
              
              <p className="mt-4">
                <strong>Tip:</strong> Om teleurstelling te voorkomen, raadpleeg onze 
                <Link href="/size-guide" className="text-green-600 hover:underline"> maattabel</Link> 
                voordat u bestelt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Defecte producten</h2>
              <p>
                Heeft u een defect product ontvangen? Dan gelden er andere regels dan bij een gewone retour:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Bij defecte producten:</h3>
                <ul className="list-disc pl-6 space-y-2 text-blue-700">
                  <li>✅ <strong>Altijd gratis retour</strong> (ook buiten de 14 dagen)</li>
                  <li>✅ <strong>Volledige terugbetaling</strong> inclusief alle kosten</li>
                  <li>✅ <strong>Vervanging mogelijk</strong> (indien op voorraad)</li>
                  <li>✅ <strong>2 jaar garantie</strong> conform wettelijke bepalingen</li>
                  <li>✅ <strong>Snelle afhandeling</strong> binnen 48 uur</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8.1 Defect melden</h3>
              <p>Neem direct contact op via:</p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li><strong>E-mail:</strong> defect@verde.nl</li>
                <li><strong>Telefoon:</strong> [TELEFOONNUMMER INVULLEN]</li>
                <li><strong>Chat:</strong> Via onze website (werkdagen 9-17 uur)</li>
              </ul>
              <p className="mt-4">
                Voeg foto&rsquo;s van het defect toe om de afhandeling te versnellen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Verkeerde levering</h2>
              <p>
                Heeft u het verkeerde product ontvangen? Onze excuses! Wij lossen dit zo snel mogelijk op:
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Wat doen wij?</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 mt-2">
                    <li>Gratis ophalen van het verkeerde product</li>
                    <li>Gratis verzending van het juiste product</li>
                    <li>Volledige terugbetaling indien gewenst</li>
                    <li>Compensatie voor het ongemak (cadeaubon €10)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Wat vragen wij van u?</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 mt-2">
                    <li>Melding binnen 48 uur na ontvangst</li>
                    <li>Foto van het ontvangen product</li>
                    <li>Bestelnummer en gewenste oplossing</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Duurzaamheid en retouren</h2>
              <p>
                Als duurzaam modebedrijf nemen wij onze verantwoordelijkheid serieus, 
                ook bij retouren:
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🌱 Onze duurzame aanpak:</h3>
                <ul className="list-disc pl-6 space-y-2 text-green-700">
                  <li><strong>Hergebruik verpakkingen:</strong> Originele dozen worden opnieuw gebruikt</li>
                  <li><strong>Geretourneerde producten:</strong> Worden gecontroleerd en opnieuw verkocht</li>
                  <li><strong>Donaties:</strong> Producten die niet meer verkocht kunnen worden, doneren wij aan goede doelen</li>
                  <li><strong>Recycling:</strong> Niet-herbruikbare items worden gerecycled</li>
                  <li><strong>CO2-compensatie:</strong> Wij compenseren de CO2-uitstoot van retourzendingen</li>
                  <li><strong>Bewustwording:</strong> Wij informeren klanten over de impact van retouren</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Tips om retouren te voorkomen:</h4>
                <ul className="list-disc pl-6 space-y-1 text-blue-700 text-sm">
                  <li>Bekijk onze maattabel en productfoto&rsquo;s zorgvuldig</li>
                  <li>Lees productbeschrijvingen en materiaalinformatie</li>
                  <li>Check klantbeoordelingen voor pasinformatie</li>
                  <li>Neem contact op bij twijfel over maat of pasvorm</li>
                  <li>Gebruik onze virtuele paskamer (binnenkort beschikbaar)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact en hulp</h2>
              <p>
                Heeft u vragen over uw retour of hulp nodig bij het retourproces? 
                Ons klantenservice team helpt u graag:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">📧 E-mail</h3>
                  <p className="text-sm text-gray-600 mb-2">Voor algemene vragen:</p>
                  <p className="font-semibold">hello@verde.nl</p>
                  <p className="text-sm text-gray-600 mb-2 mt-4">Voor retouren:</p>
                  <p className="font-semibold">returns@verde.nl</p>
                  <p className="text-xs text-gray-500 mt-2">Reactie binnen 24 uur</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">💬 Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-2">Directe hulp via onze website</p>
                  <p className="font-semibold">Werkdagen 9:00 - 17:00</p>
                  <p className="text-sm text-gray-600 mb-2 mt-4">Telefonisch:</p>
                  <p className="font-semibold">[TELEFOONNUMMER INVULLEN]</p>
                  <p className="text-xs text-gray-500 mt-2">Werkdagen 9:00 - 17:00</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">🚀 Snelle hulp</h4>
                <p className="text-yellow-700 text-sm">
                  Voor de snelste service, log in op uw account en gebruik de retourservice. 
                  Heeft u geen account? Geen probleem, stuur ons een e-mail met uw bestelnummer.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Wettelijke informatie</h2>
              <p>
                Dit retourbeleid is opgesteld conform Nederlandse en Europese wetgeving:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Burgerlijk Wetboek Boek 6:</strong> Algemene bepalingen verbintenissenrecht</li>
                <li><strong>Artikel 6:230p BW:</strong> Herroepingsrecht bij overeenkomsten op afstand</li>
                <li><strong>EU Richtlijn 2011/83/EU:</strong> Consumentenrechten</li>
                <li><strong>Wet handhaving consumentenbescherming:</strong> Nederlandse implementatie</li>
              </ul>
              
              <p className="mt-4 text-sm text-gray-600">
                Voor meer informatie over uw rechten als consument, bezoek 
                <a href="https://www.consuwijzer.nl" className="text-green-600 hover:underline"> ConsuWijzer.nl</a> 
                of neem contact op met de 
                <a href="https://www.acm.nl" className="text-green-600 hover:underline"> Autoriteit Consument & Markt (ACM)</a>.
              </p>
            </section>

            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Verde&rsquo;s belofte</h3>
              <p className="text-green-700 text-sm">
                Wij geloven in eerlijke handel en tevreden klanten. Ons retourbeleid is ruim en klantvriendelijk, 
                omdat wij vertrouwen hebben in de kwaliteit van onze duurzame producten. Samen maken wij mode 
                duurzamer en eerlijker! 🌱
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                Hulp nodig? Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

