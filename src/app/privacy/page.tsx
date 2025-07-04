import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid - Verde',
  description: 'Privacybeleid voor Verde duurzame mode en schoonheid webshop',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacybeleid</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Inleiding</h2>
              <p>
                Verde (&ldquo;wij&rdquo;, &ldquo;ons&rdquo; of &ldquo;onze&rdquo;) respecteert uw privacy en zet zich in voor de bescherming van uw persoonsgegevens. 
                Dit privacybeleid legt uit hoe wij uw persoonsgegevens verzamelen, gebruiken, opslaan en beschermen wanneer u onze website bezoekt of onze diensten gebruikt.
              </p>
              <p>
                Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en andere toepasselijke Nederlandse en Europese privacywetgeving.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Contactgegevens verwerkingsverantwoordelijke</h2>
              <div className="space-y-2">
                <p><strong>Verde</strong></p>
                <p>Adres: [BEDRIJFSADRES INVULLEN]</p>
                <p>Postcode en plaats: [POSTCODE EN PLAATS INVULLEN]</p>
                <p>E-mailadres: hello@verde.nl</p>
                <p>KvK-nummer: [KVK-NUMMER INVULLEN]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Welke persoonsgegevens verzamelen wij?</h2>
              <p>Wij kunnen de volgende categorieën persoonsgegevens van u verzamelen:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Accountgegevens</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Naam en voornaam</li>
                <li>E-mailadres</li>
                <li>Wachtwoord (versleuteld opgeslagen)</li>
                <li>Geboortedatum (optioneel)</li>
                <li>Telefoonnummer (optioneel)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Bestel- en betalingsgegevens</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Factuur- en bezorgadres</li>
                <li>Bestellingsgeschiedenis</li>
                <li>Betalingsgegevens (via beveiligde betalingsproviders)</li>
                <li>Factuurgegevens</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Technische gegevens</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP-adres</li>
                <li>Browsertype en -versie</li>
                <li>Besturingssysteem</li>
                <li>Referrer URL</li>
                <li>Cookies en vergelijkbare technologieën</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 Communicatiegegevens</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Correspondentie via e-mail of andere kanalen</li>
                <li>Klachten en feedback</li>
                <li>Klantenservice interacties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Waarom verwerken wij uw persoonsgegevens?</h2>
              <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1 Uitvoering van de overeenkomst</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verwerking en afhandeling van bestellingen</li>
                <li>Levering van producten</li>
                <li>Betalingsverwerking</li>
                <li>Klantenservice en ondersteuning</li>
                <li>Afhandeling van retouren en garantieclaims</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2 Wettelijke verplichtingen</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Boekhouding en fiscale verplichtingen</li>
                <li>Consumentenbescherming</li>
                <li>Fraudepreventie</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.3 Gerechtvaardigd belang</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verbetering van onze website en diensten</li>
                <li>Analyse van gebruikersgedrag (geanonimiseerd)</li>
                <li>Beveiliging van onze systemen</li>
                <li>Directe marketing (met opt-out mogelijkheid)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.4 Toestemming</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nieuwsbrieven en marketingcommunicatie</li>
                <li>Niet-essentiële cookies</li>
                <li>Gepersonaliseerde aanbevelingen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Hoe lang bewaren wij uw gegevens?</h2>
              <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld:</p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Accountgegevens:</strong> Zolang uw account actief is, plus 1 jaar na laatste activiteit</li>
                <li><strong>Bestellingsgegevens:</strong> 7 jaar (wettelijke bewaarplicht)</li>
                <li><strong>Financiële gegevens:</strong> 7 jaar (fiscale wetgeving)</li>
                <li><strong>Marketinggegevens:</strong> Tot u zich uitschrijft of 3 jaar na laatste interactie</li>
                <li><strong>Technische logs:</strong> Maximaal 12 maanden</li>
                <li><strong>Cookies:</strong> Conform onze cookiebeleid (maximaal 24 maanden)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Met wie delen wij uw gegevens?</h2>
              <p>Wij delen uw persoonsgegevens alleen in de volgende gevallen:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Dienstverleners</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Betalingsproviders:</strong> Stripe, iDEAL, PayPal voor betalingsverwerking</li>
                <li><strong>Verzendpartners:</strong> PostNL, DHL voor levering van bestellingen</li>
                <li><strong>E-mailservices:</strong> Voor transactionele e-mails en nieuwsbrieven</li>
                <li><strong>Hosting providers:</strong> Voor website hosting en databeheer</li>
                <li><strong>Analytics:</strong> Voor website analyse (geanonimiseerd)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Wettelijke verplichtingen</h3>
              <p>Wij kunnen uw gegevens delen met autoriteiten wanneer dit wettelijk verplicht is of noodzakelijk voor rechtszaken.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Bedrijfsoverdracht</h3>
              <p>Bij een fusie, overname of verkoop van ons bedrijf kunnen uw gegevens worden overgedragen aan de nieuwe eigenaar.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Internationale gegevensoverdracht</h2>
              <p>
                Uw persoonsgegevens worden voornamelijk verwerkt binnen de Europese Economische Ruimte (EER). 
                Indien wij gegevens overdragen naar landen buiten de EER, zorgen wij voor passende waarborgen conform de AVG, 
                zoals adequaatheidsbeslissingen of standaard contractuele bepalingen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Beveiliging van uw gegevens</h2>
              <p>Wij nemen de beveiliging van uw persoonsgegevens zeer serieus en hebben passende technische en organisatorische maatregelen getroffen:</p>
              
              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>SSL-versleuteling voor alle datatransmissie</li>
                <li>Versleutelde opslag van gevoelige gegevens</li>
                <li>Regelmatige beveiligingsupdates en patches</li>
                <li>Toegangscontrole en autorisatie</li>
                <li>Regelmatige beveiligingsaudits</li>
                <li>Backup en herstelplannen</li>
                <li>Training van medewerkers over gegevensbescherming</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Uw rechten</h2>
              <p>Onder de AVG heeft u de volgende rechten betreffende uw persoonsgegevens:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.1 Recht op inzage</h3>
              <p>U heeft het recht om te weten welke persoonsgegevens wij van u verwerken.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.2 Recht op rectificatie</h3>
              <p>U kunt onjuiste of onvolledige gegevens laten corrigeren.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.3 Recht op verwijdering</h3>
              <p>U kunt verzoeken om verwijdering van uw gegevens (&ldquo;recht om vergeten te worden&rdquo;).</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.4 Recht op beperking</h3>
              <p>U kunt de verwerking van uw gegevens laten beperken in bepaalde omstandigheden.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.5 Recht op overdraagbaarheid</h3>
              <p>U kunt uw gegevens in een gestructureerd formaat opvragen om over te dragen naar een andere dienstverlener.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.6 Recht van bezwaar</h3>
              <p>U kunt bezwaar maken tegen de verwerking van uw gegevens voor directe marketing of op basis van gerechtvaardigd belang.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">9.7 Intrekking toestemming</h3>
              <p>U kunt uw toestemming voor bepaalde verwerkingen te allen tijde intrekken.</p>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">
                  <strong>Uitoefening van uw rechten:</strong> Om uw rechten uit te oefenen, kunt u contact opnemen via hello@verde.nl. 
                  Wij reageren binnen 30 dagen op uw verzoek. Voor verificatie kunnen wij om een kopie van uw identiteitsbewijs vragen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Cookies en tracking</h2>
              <p>
                Onze website gebruikt cookies en vergelijkbare technologieën. Voor gedetailleerde informatie over welke cookies wij gebruiken 
                en hoe u deze kunt beheren, verwijzen wij naar ons cookiebeleid.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">10.1 Essentiële cookies</h3>
              <p>Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden uitgeschakeld.</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">10.2 Analytische cookies</h3>
              <p>Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken (met uw toestemming).</p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">10.3 Marketing cookies</h3>
              <p>Deze cookies worden gebruikt voor gepersonaliseerde advertenties en marketing (met uw toestemming).</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Minderjarigen</h2>
              <p>
                Onze diensten zijn niet gericht op personen onder de 16 jaar. Wij verzamelen niet bewust persoonsgegevens van kinderen onder de 16 jaar. 
                Indien u ouder of voogd bent en u denkt dat uw kind ons persoonsgegevens heeft verstrekt, neem dan contact met ons op.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Wijzigingen in dit privacybeleid</h2>
              <p>
                Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Belangrijke wijzigingen zullen wij u meedelen via e-mail of 
                een prominente kennisgeving op onze website. Wij adviseren u om dit beleid regelmatig te controleren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Klachten</h2>
              <p>
                Indien u een klacht heeft over hoe wij uw persoonsgegevens verwerken, kunt u contact met ons opnemen via hello@verde.nl. 
                U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP):
              </p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Autoriteit Persoonsgegevens</strong></p>
                <p>Postbus 93374</p>
                <p>2509 AJ Den Haag</p>
                <p>Telefoon: 088 - 1805 250</p>
                <p>Website: autoriteitpersoonsgegevens.nl</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact</h2>
              <p>Voor vragen over dit privacybeleid of over de verwerking van uw persoonsgegevens kunt u contact opnemen met:</p>
              
              <div className="mt-4 space-y-2">
                <p><strong>Verde</strong></p>
                <p>E-mail: hello@verde.nl</p>
                <p>Website: www.verde-shop.vercel.app</p>
                <p>Adres: [BEDRIJFSADRES INVULLEN]</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Duurzaamheid en privacy</h3>
              <p className="text-green-700 text-sm">
                Bij Verde geloven wij dat duurzaamheid en privacy hand in hand gaan. Net zoals wij zorgvuldig omgaan met het milieu, 
                gaan wij ook zorgvuldig om met uw persoonlijke gegevens. Wij verzamelen alleen wat nodig is en beschermen het met de 
                grootst mogelijke zorg.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

