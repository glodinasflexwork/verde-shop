import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookiebeleid - Verde',
  description: 'Cookiebeleid voor Verde duurzame mode en schoonheid webshop',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookiebeleid</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Wat zijn cookies?</h2>
              <p>
                Cookies zijn kleine tekstbestanden die op uw computer, tablet of smartphone worden opgeslagen wanneer u onze website bezoekt. 
                Deze bestanden bevatten informatie die wordt gebruikt om uw ervaring op onze website te verbeteren en om bepaalde functies mogelijk te maken.
              </p>
              <p>
                Naast cookies gebruiken wij ook vergelijkbare technologieën zoals web beacons, pixels en local storage. 
                In dit beleid verwijzen wij naar al deze technologieën als &ldquo;cookies&rdquo;.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Waarom gebruiken wij cookies?</h2>
              <p>Verde gebruikt cookies voor verschillende doeleinden:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Functionaliteit:</strong> Om de website goed te laten functioneren</li>
                <li><strong>Gebruikerservaring:</strong> Om uw voorkeuren te onthouden</li>
                <li><strong>Beveiliging:</strong> Om fraude te voorkomen en de website te beveiligen</li>
                <li><strong>Analyse:</strong> Om te begrijpen hoe bezoekers onze website gebruiken</li>
                <li><strong>Marketing:</strong> Om relevante advertenties en aanbiedingen te tonen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Welke soorten cookies gebruiken wij?</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Essentiële cookies</h3>
              <p>
                Deze cookies zijn noodzakelijk voor het functioneren van onze website. Zonder deze cookies kunnen bepaalde delen van de website niet goed werken.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Voorbeelden van essentiële cookies:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Sessie cookies:</strong> Voor inloggen en winkelwagen functionaliteit</li>
                  <li><strong>Beveiligingscookies:</strong> Voor bescherming tegen aanvallen</li>
                  <li><strong>Voorkeurscookies:</strong> Voor taalinstellingen en cookievoorkeuren</li>
                </ul>
                <p className="text-sm mt-2"><strong>Bewaartermijn:</strong> Sessie of tot 1 jaar</p>
                <p className="text-sm"><strong>Toestemming vereist:</strong> Nee (wettelijk toegestaan)</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Analytische cookies</h3>
              <p>
                Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat wij de website kunnen verbeteren.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Analytische cookies die wij gebruiken:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Google Analytics:</strong> Voor websitestatistieken (geanonimiseerd)</li>
                  <li><strong>Vercel Analytics:</strong> Voor prestatiemonitoring</li>
                  <li><strong>Hotjar:</strong> Voor gebruikersgedrag analyse (indien geactiveerd)</li>
                </ul>
                <p className="text-sm mt-2"><strong>Bewaartermijn:</strong> Tot 24 maanden</p>
                <p className="text-sm"><strong>Toestemming vereist:</strong> Ja</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Marketing cookies</h3>
              <p>
                Deze cookies worden gebruikt om u relevante advertenties en gepersonaliseerde content te tonen.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Marketing cookies die wij kunnen gebruiken:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Facebook Pixel:</strong> Voor Facebook advertenties</li>
                  <li><strong>Google Ads:</strong> Voor Google advertenties</li>
                  <li><strong>Retargeting cookies:</strong> Voor gepersonaliseerde advertenties</li>
                </ul>
                <p className="text-sm mt-2"><strong>Bewaartermijn:</strong> Tot 24 maanden</p>
                <p className="text-sm"><strong>Toestemming vereist:</strong> Ja</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 Sociale media cookies</h3>
              <p>
                Deze cookies worden geplaatst door sociale media platforms wanneer u content deelt of inlogt via sociale media.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Sociale media cookies:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li><strong>Facebook:</strong> Voor delen en inloggen via Facebook</li>
                  <li><strong>Instagram:</strong> Voor Instagram integratie</li>
                  <li><strong>Twitter:</strong> Voor delen via Twitter</li>
                </ul>
                <p className="text-sm mt-2"><strong>Bewaartermijn:</strong> Volgens beleid van sociale media platform</p>
                <p className="text-sm"><strong>Toestemming vereist:</strong> Ja</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies van derde partijen</h2>
              <p>
                Sommige cookies op onze website worden geplaatst door derde partijen. Wij hebben geen controle over deze cookies. 
                De volgende derde partijen kunnen cookies plaatsen:
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Betalingsproviders</h4>
                  <p className="text-sm text-gray-600">Stripe, iDEAL, PayPal - voor veilige betalingsverwerking</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Analytics providers</h4>
                  <p className="text-sm text-gray-600">Google Analytics, Vercel Analytics - voor websitestatistieken</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Sociale media</h4>
                  <p className="text-sm text-gray-600">Facebook, Instagram, Twitter - voor sociale media integratie</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Klantenservice</h4>
                  <p className="text-sm text-gray-600">Zendesk, Intercom - voor chat en ondersteuning</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Hoe kunt u cookies beheren?</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Cookie-instellingen op onze website</h3>
              <p>
                Wanneer u onze website voor het eerst bezoekt, krijgt u een cookiebanner te zien waarin u kunt kiezen welke cookies u accepteert. 
                U kunt uw voorkeuren altijd wijzigen via de cookie-instellingen onderaan elke pagina.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <p className="text-green-800 font-semibold">Cookie-instellingen wijzigen</p>
                <p className="text-green-700 text-sm mt-1">
                  Klik op &ldquo;Cookie-instellingen&rdquo; onderaan deze pagina om uw voorkeuren aan te passen.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Browser-instellingen</h3>
              <p>U kunt cookies ook beheren via uw browserinstellingen:</p>
              
              <div className="space-y-3 mt-4">
                <div>
                  <h4 className="font-semibold">Google Chrome</h4>
                  <p className="text-sm text-gray-600">Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Mozilla Firefox</h4>
                  <p className="text-sm text-gray-600">Instellingen → Privacy en beveiliging → Cookies en sitegegevens</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Safari</h4>
                  <p className="text-sm text-gray-600">Voorkeuren → Privacy → Cookies en websitegegevens</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Microsoft Edge</h4>
                  <p className="text-sm text-gray-600">Instellingen → Cookies en sitemachtigingen</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Opt-out tools</h3>
              <p>Voor specifieke diensten kunt u zich uitschrijven via:</p>
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-green-600 hover:underline">Google Analytics Opt-out</a></li>
                <li><a href="https://www.facebook.com/settings?tab=ads" className="text-green-600 hover:underline">Facebook Ad Preferences</a></li>
                <li><a href="https://adssettings.google.com/" className="text-green-600 hover:underline">Google Ad Settings</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Gevolgen van het uitschakelen van cookies</h2>
              <p>Het uitschakelen van cookies kan gevolgen hebben voor uw ervaring op onze website:</p>
              
              <div className="space-y-3 mt-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800">Essentiële cookies uitschakelen</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-red-700 mt-2">
                    <li>Inloggen werkt mogelijk niet</li>
                    <li>Winkelwagen wordt niet bewaard</li>
                    <li>Voorkeuren gaan verloren</li>
                    <li>Bepaalde functies werken niet</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800">Analytische cookies uitschakelen</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-yellow-700 mt-2">
                    <li>Wij kunnen de website minder goed verbeteren</li>
                    <li>Prestatieproblemen worden minder snel opgemerkt</li>
                    <li>Gebruikerservaring kan minder worden</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Marketing cookies uitschakelen</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-blue-700 mt-2">
                    <li>Advertenties zijn minder relevant</li>
                    <li>U ziet mogelijk meer herhaalde advertenties</li>
                    <li>Gepersonaliseerde aanbevelingen werken niet</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Wijzigingen in dit cookiebeleid</h2>
              <p>
                Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze website, wetgeving of cookietechnologieën weer te geven. 
                Wij adviseren u om dit beleid regelmatig te controleren. De datum van de laatste wijziging staat bovenaan dit document.
              </p>
              <p className="mt-4">
                Bij belangrijke wijzigingen zullen wij u hiervan op de hoogte stellen via een kennisgeving op onze website of per e-mail.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
              <p>Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op:</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Verde</strong></p>
                <p>E-mail: hello@verde.nl</p>
                <p>Website: www.verde-shop.vercel.app</p>
                <p>Adres: [BEDRIJFSADRES INVULLEN]</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Duurzame cookies</h3>
              <p className="text-green-700 text-sm">
                Net zoals wij streven naar duurzaamheid in mode, streven wij ook naar &ldquo;duurzame&rdquo; cookies. 
                Wij gebruiken alleen cookies die echt nodig zijn en respecteren uw privacy. Samen maken wij het internet een beetje groener! 🌱
              </p>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block">
                Cookie-instellingen beheren
              </div>
              <p className="text-sm text-gray-600 mt-2">
                (Functionaliteit wordt geïmplementeerd in een toekomstige update)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

