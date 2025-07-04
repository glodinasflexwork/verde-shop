export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Garantie</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bij Verde staan we 100% achter de kwaliteit van onze duurzame producten. 
            Ontdek onze uitgebreide garantievoorwaarden en kwaliteitsbeloftes.
          </p>
        </div>

        <div className="space-y-8">
          {/* Kwaliteitsgarantie */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Kwaliteitsgarantie</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Onze belofte</h3>
                <p className="text-gray-600 mb-4">
                  Alle Verde producten worden gemaakt van hoogwaardige, duurzame materialen en 
                  geproduceerd onder eerlijke arbeidsomstandigheden. We garanderen dat elk product 
                  voldoet aan onze strenge kwaliteitseisen.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Gecertificeerde biologische en gerecyclede materialen</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Strenge kwaliteitscontroles in elke productiefase</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Fair trade productie met eerlijke lonen</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-sm">Geen schadelijke chemicaliën of kleurstoffen</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Garantieperiodes</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Kleding</span>
                      <span className="text-green-600 font-semibold">2 jaar</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Garantie tegen materiaal- en fabricagefouten bij normaal gebruik
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Schoenen</span>
                      <span className="text-green-600 font-semibold">1 jaar</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Garantie op zolen, naden en materialen bij normaal gebruik
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Accessoires</span>
                      <span className="text-green-600 font-semibold">1 jaar</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Garantie tegen defecten aan sluitingen, riemen en hardware
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">Ondergoed</span>
                      <span className="text-green-600 font-semibold">6 maanden</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Garantie tegen materiaaldefecten en vormverlies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Wat valt onder garantie */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wat valt onder de garantie?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Wel gedekt
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Materiaaldefecten (scheuren, gaten zonder externe oorzaak)</li>
                  <li>• Fabricagefouten (slechte naden, verkeerde maten)</li>
                  <li>• Kleurverschil ten opzichte van productfoto&apos;s</li>
                  <li>• Defecte ritsen, knopen of andere sluitingen</li>
                  <li>• Vormverlies bij normaal gebruik en wassen</li>
                  <li>• Verkleuring door materiaaldefecten</li>
                  <li>• Loszittende onderdelen bij levering</li>
                  <li>• Producten die niet voldoen aan beschrijving</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Niet gedekt
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Normale slijtage door gebruik</li>
                  <li>• Schade door verkeerd wassen of drogen</li>
                  <li>• Vlekken, brandgaten of chemische schade</li>
                  <li>• Schade door huisdieren of insecten</li>
                  <li>• Wijzigingen of reparaties door derden</li>
                  <li>• Schade door ongelukken of misbruik</li>
                  <li>• Verkleuring door parfum of deodorant</li>
                  <li>• Pilling bij wollen producten (normaal)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Garantie claimen */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hoe claim je garantie?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact opnemen</h3>
                <p className="text-gray-600 text-sm">
                  Neem contact met ons op via e-mail of telefoon met je bestelnummer
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Foto&apos;s maken</h3>
                <p className="text-gray-600 text-sm">
                  Maak duidelijke foto&apos;s van het defect en het gehele product
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Beoordeling</h3>
                <p className="text-gray-600 text-sm">
                  Wij beoordelen je claim binnen 2 werkdagen
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl font-bold">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Oplossing</h3>
                <p className="text-gray-600 text-sm">
                  Vervanging, reparatie of terugbetaling binnen 5 werkdagen
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Benodigde informatie voor garantieclaim:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• Bestelnummer (VRD-YYYY-XXXXXX)</li>
                  <li>• Aankoopdatum</li>
                  <li>• Productcode en naam</li>
                  <li>• Beschrijving van het probleem</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Duidelijke foto&apos;s van het defect</li>
                  <li>• Foto van het gehele product</li>
                  <li>• Foto van het waslabel (indien van toepassing)</li>
                  <li>• Gebruiksgeschiedenis (hoe vaak gedragen/gewassen)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Onderhoudstips */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Onderhoudstips voor langere levensduur</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Wassen</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Was op 30°C of kouder</li>
                  <li>• Gebruik milieuvriendelijk wasmiddel</li>
                  <li>• Draai kleding binnenstebuiten</li>
                  <li>• Was donkere en lichte kleuren apart</li>
                  <li>• Gebruik geen bleek of wasverzachter</li>
                </ul>
              </div>

              <div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Drogen</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Hang aan de lijn in plaats van droger</li>
                  <li>• Vermijd direct zonlicht</li>
                  <li>• Leg wollen items plat om te drogen</li>
                  <li>• Gebruik geen hoge temperaturen</li>
                  <li>• Schud items uit voor het ophangen</li>
                </ul>
              </div>

              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Opslag</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• Hang op brede hangers</li>
                  <li>• Bewaar in droge, goed geventileerde ruimte</li>
                  <li>• Gebruik kledinghoezen voor lange opslag</li>
                  <li>• Vouw zware items zoals truien</li>
                  <li>• Gebruik lavendel tegen motten</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Reparatieservice */}
          <section className="bg-green-50 rounded-lg p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gratis reparatieservice</h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                Kleine reparaties zoals het vervangen van knopen, het herstellen van kleine scheurtjes 
                of het repareren van ritsen doen we gratis binnen de garantieperiode. 
                Zo verlengen we samen de levensduur van je favoriete kledingstukken.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Gratis</div>
                  <p className="text-gray-600 text-sm">Reparaties binnen garantie</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">5-7</div>
                  <p className="text-gray-600 text-sm">Werkdagen reparatietijd</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-600 text-sm">Duurzame reparatiematerialen</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Vragen over garantie of reparatie?
            </h3>
            <p className="text-gray-600 mb-6">
              Ons klantenservice team helpt je graag verder met al je garantievragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Garantieclaim indienen
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
          </section>
        </div>
      </div>
    </div>
  );
}

