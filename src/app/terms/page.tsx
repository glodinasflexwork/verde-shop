import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Verde',
  description: 'Algemene voorwaarden voor Verde duurzame mode en schoonheid webshop',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Algemene Voorwaarden</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 1 - Definities</h2>
              <div className="space-y-3">
                <p><strong>Ondernemer:</strong> Verde, gevestigd te Nederland, KvK-nummer: [INVULLEN], BTW-nummer: [INVULLEN]</p>
                <p><strong>Consument:</strong> de natuurlijke persoon die niet handelt in de uitoefening van beroep of bedrijf en een overeenkomst op afstand aangaat met de ondernemer</p>
                <p><strong>Overeenkomst op afstand:</strong> een overeenkomst die tussen de ondernemer en de consument wordt gesloten in het kader van een georganiseerd systeem voor verkoop op afstand</p>
                <p><strong>Techniek voor communicatie op afstand:</strong> middel dat kan worden gebruikt voor het sluiten van een overeenkomst, zonder dat consument en ondernemer gelijktijdig in dezelfde ruimte zijn samengekomen</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 2 - Identiteit van de ondernemer</h2>
              <div className="space-y-2">
                <p><strong>Verde</strong></p>
                <p>Adres: [BEDRIJFSADRES INVULLEN]</p>
                <p>Postcode en plaats: [POSTCODE EN PLAATS INVULLEN]</p>
                <p>Telefoonnummer: [TELEFOONNUMMER INVULLEN]</p>
                <p>E-mailadres: hello@verde.nl</p>
                <p>KvK-nummer: [KVK-NUMMER INVULLEN]</p>
                <p>BTW-identificatienummer: [BTW-NUMMER INVULLEN]</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 3 - Toepasselijkheid</h2>
              <div className="space-y-3">
                <p>1. Deze algemene voorwaarden zijn van toepassing op elk aanbod van de ondernemer en op elke tot stand gekomen overeenkomst op afstand tussen ondernemer en consument.</p>
                <p>2. Voordat de overeenkomst op afstand wordt gesloten, wordt de tekst van deze algemene voorwaarden aan de consument beschikbaar gesteld.</p>
                <p>3. Indien dit redelijkerwijs niet mogelijk is, zal voordat de overeenkomst op afstand wordt gesloten, worden aangegeven dat de algemene voorwaarden bij de ondernemer zijn in te zien.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 4 - Het aanbod</h2>
              <div className="space-y-3">
                <p>1. Indien een aanbod een beperkte geldigheidsduur heeft of onder voorwaarden geschiedt, wordt dit nadrukkelijk in het aanbod vermeld.</p>
                <p>2. Het aanbod bevat een volledige en nauwkeurige omschrijving van de aangeboden producten. De beschrijving is voldoende gedetailleerd om een goede beoordeling van het aanbod door de consument mogelijk te maken.</p>
                <p>3. Alle prijzen in het aanbod zijn inclusief belastingen.</p>
                <p>4. Het aanbod geldt zolang de voorraad strekt, tenzij anders aangegeven.</p>
                <p>5. Verde behoudt zich het recht voor om prijzen te wijzigen.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 5 - De overeenkomst</h2>
              <div className="space-y-3">
                <p>1. De overeenkomst komt, onder voorbehoud van het bepaalde in lid 4, tot stand op het moment van aanvaarding door de consument van het aanbod en het voldoen aan de daarbij gestelde voorwaarden.</p>
                <p>2. Indien de consument het aanbod langs elektronische weg heeft aanvaard, bevestigt de ondernemer onverwijld langs elektronische weg de ontvangst van de aanvaarding van het aanbod.</p>
                <p>3. Indien de overeenkomst elektronisch tot stand komt, treft de ondernemer passende technische en organisatorische maatregelen ter beveiliging van de elektronische overdracht van data.</p>
                <p>4. De ondernemer kan zich - binnen wettelijke kaders - op de hoogte stellen of de consument aan zijn betalingsverplichtingen kan voldoen.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 6 - Herroepingsrecht</h2>
              <div className="space-y-3">
                <p>1. Bij de aankoop van producten heeft de consument de mogelijkheid de overeenkomst zonder opgave van redenen te ontbinden gedurende 14 dagen. Deze bedenktijd gaat in op de dag na ontvangst van het product door de consument.</p>
                <p>2. Tijdens de bedenktijd zal de consument zorgvuldig omgaan met het product en de verpakking. Hij zal het product slechts uitpakken of gebruiken in de mate die nodig is om de aard, de kenmerken en de werking van het product vast te stellen.</p>
                <p>3. Indien de consument gebruik maakt van zijn herroepingsrecht, meldt hij dit binnen de bedenktermijn door middel van het modelformulier voor herroeping of op andere ondubbelzinnige wijze aan de ondernemer.</p>
                <p>4. De consument zendt het product zo spoedig mogelijk, doch binnen 14 dagen na de dag waarop hij zijn wens tot herroeping heeft gemeld, terug naar de ondernemer.</p>
                <p>5. De kosten van terugzending zijn voor rekening van de consument.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 7 - Verplichtingen van de consument bij herroeping</h2>
              <div className="space-y-3">
                <p>1. Tijdens de bedenktijd zal de consument zorgvuldig omgaan met het product en de verpakking.</p>
                <p>2. De consument is alleen aansprakelijk voor waardevermindering van het product die het gevolg is van een manier van omgaan met het product die verder gaat dan toegestaan in lid 1.</p>
                <p>3. De consument is niet aansprakelijk voor waardevermindering van het product als de ondernemer hem niet voor of bij het sluiten van de overeenkomst alle wettelijk verplichte informatie over het herroepingsrecht heeft verstrekt.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 8 - Uitoefening herroepingsrecht door consument en kosten daarvan</h2>
              <div className="space-y-3">
                <p>1. Als de consument gebruik maakt van zijn herroepingsrecht, meldt hij dit binnen de herroepingstermijn door middel van het modelformulier voor herroeping of op andere ondubbelzinnige wijze.</p>
                <p>2. Zo spoedig mogelijk, doch binnen 14 dagen vanaf de dag na de melding bedoeld in lid 1, zendt de consument het product terug, of overhandigt hij dit aan (een gemachtigde van) de ondernemer.</p>
                <p>3. De consument is verplicht de kosten van terugzending te dragen.</p>
                <p>4. Indien de consument een bedrag betaald heeft, zal de ondernemer dit bedrag zo spoedig mogelijk, doch binnen 14 dagen na herroeping, terugbetalen.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 9 - Prijs</h2>
              <div className="space-y-3">
                <p>1. Gedurende de in het aanbod vermelde geldigheidsduur worden de prijzen van de aangeboden producten niet verhoogd, behoudens prijswijzigingen als gevolg van veranderingen in BTW-tarieven.</p>
                <p>2. In afwijking van het vorige lid kan de ondernemer producten of diensten waarvan de prijzen gebonden zijn aan schommelingen op de financiële markt en waar de ondernemer geen invloed op heeft, met variabele prijzen aanbieden.</p>
                <p>3. Alle prijzen zijn inclusief BTW.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 10 - Conformiteit en garantie</h2>
              <div className="space-y-3">
                <p>1. De ondernemer staat er voor in dat de producten voldoen aan de overeenkomst, de in het aanbod vermelde specificaties, aan de redelijke eisen van deugdelijkheid en/of bruikbaarheid en de op de datum van de totstandkoming van de overeenkomst bestaande wettelijke bepalingen en/of overheidsvoorschriften.</p>
                <p>2. Een door de ondernemer, fabrikant of importeur verstrekte garantie doet niets af aan de wettelijke rechten en vorderingen die de consument op grond van de overeenkomst tegenover de ondernemer kan doen gelden.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 11 - Levering en uitvoering</h2>
              <div className="space-y-3">
                <p>1. De ondernemer zal de grootst mogelijke zorgvuldigheid in acht nemen bij het in ontvangst nemen en bij de uitvoering van bestellingen van producten.</p>
                <p>2. Als plaats van levering geldt het adres dat de consument aan het bedrijf kenbaar heeft gemaakt.</p>
                <p>3. Met inachtneming van hetgeen hierover in artikel 4 van deze algemene voorwaarden is vermeld, zal het bedrijf geaccepteerde bestellingen met bekwame spoed doch uiterlijk binnen 30 dagen uitvoeren.</p>
                <p>4. Indien de bezorging vertraging ondervindt, of indien een bestelling niet dan wel slechts gedeeltelijk kan worden uitgevoerd, ontvangt de consument hiervan uiterlijk 30 dagen nadat hij de bestelling geplaatst heeft bericht.</p>
                <p>5. In geval van vertraging heeft de consument het recht om de overeenkomst zonder kosten te ontbinden.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 12 - Betalingen</h2>
              <div className="space-y-3">
                <p>1. Voor zover niet anders is bepaald in de overeenkomst of aanvullende voorwaarden, dienen de door de consument verschuldigde bedragen te worden voldaan binnen 14 dagen na het ingaan van de bedenktermijn, of bij het ontbreken van een bedenktermijn binnen 14 dagen na het sluiten van de overeenkomst.</p>
                <p>2. Bij verkoop van producten aan consumenten mag in algemene voorwaarden nimmer een vooruitbetaling van meer dan 50% worden bedongen.</p>
                <p>3. De consument heeft de plicht om onjuistheden in verstrekte of vermelde betaalgegevens onverwijld aan de ondernemer te melden.</p>
                <p>4. Verde accepteert de volgende betaalmethoden: iDEAL, creditcard, PayPal en andere door Verde geaccepteerde betaalmethoden.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 13 - Klachtenregeling</h2>
              <div className="space-y-3">
                <p>1. De ondernemer beschikt over een voldoende bekendgemaakte klachtenprocedure en behandelt de klacht overeenkomstig deze klachtenprocedure.</p>
                <p>2. Klachten over de uitvoering van de overeenkomst moeten binnen bekwame tijd volledig en duidelijk omschreven worden ingediend bij de ondernemer, nadat de consument de gebreken heeft geconstateerd.</p>
                <p>3. Bij de ondernemer ingediende klachten worden binnen een termijn van 14 dagen gerekend vanaf de datum van ontvangst beantwoord.</p>
                <p>4. Indien een klacht een voorzienbaar langere verwerkingstijd vraagt, wordt door de ondernemer binnen de termijn van 14 dagen geantwoord met een ontvangstbevestiging en een indicatie wanneer de consument een meer uitvoerig antwoord kan verwachten.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 14 - Geschillen</h2>
              <div className="space-y-3">
                <p>1. Op overeenkomsten tussen de ondernemer en de consument waarop deze algemene voorwaarden betrekking hebben, is uitsluitend Nederlands recht van toepassing.</p>
                <p>2. Alle geschillen die voortvloeien uit of verband houden met overeenkomsten waarop deze algemene voorwaarden betrekking hebben, zullen worden voorgelegd aan de bevoegde Nederlandse rechter in het arrondissement waar de ondernemer is gevestigd.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">Artikel 15 - Aanvullende of afwijkende bepalingen</h2>
              <div className="space-y-3">
                <p>1. Aanvullende dan wel van deze algemene voorwaarden afwijkende bepalingen mogen niet ten nadele van de consument zijn en dienen schriftelijk te worden vastgelegd of op zodanige wijze dat deze door de consument op een toegankelijke manier kunnen worden opgeslagen op een duurzame gegevensdrager.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 16 - Privacy en gegevensbescherming</h2>
              <div className="space-y-3">
                <p>1. De ondernemer verwerkt persoonsgegevens van consumenten in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en andere toepasselijke privacywetgeving.</p>
                <p>2. Voor meer informatie over hoe Verde omgaat met persoonsgegevens, verwijzen wij naar ons privacybeleid dat beschikbaar is op onze website.</p>
                <p>3. De consument heeft het recht om zijn persoonsgegevens in te zien, te corrigeren of te laten verwijderen conform de AVG.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Artikel 17 - Duurzaamheid en milieu</h2>
              <div className="space-y-3">
                <p>1. Verde zet zich in voor duurzame mode en milieuvriendelijke praktijken.</p>
                <p>2. Alle producten worden geselecteerd op basis van duurzaamheidscriteria en ethische productiestandaarden.</p>
                <p>3. Verde streeft naar minimale verpakkingsmaterialen en gebruikt waar mogelijk gerecyclede en biologisch afbreekbare materialen.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-2">
                <p>Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:</p>
                <p><strong>Verde</strong></p>
                <p>E-mail: hello@verde.nl</p>
                <p>Website: www.verde-shop.vercel.app</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Belangrijke opmerking</h3>
              <p className="text-green-700 text-sm">
                Deze algemene voorwaarden zijn opgesteld conform Nederlandse wetgeving en EU-richtlijnen voor e-commerce. 
                Het wordt aanbevolen om deze voorwaarden te laten controleren door een juridisch adviseur voordat u ze in gebruik neemt. 
                Vergeet niet om de gemarkeerde velden [INVULLEN] aan te vullen met uw specifieke bedrijfsgegevens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

