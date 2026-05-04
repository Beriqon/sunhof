import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <header className="bg-[#F6F3EE] border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 ml-8 md:ml-12 lg:ml-16">
              <img 
                src="/logo/sunhoflogo2.png" 
                alt="Sunhof Logo" 
                className="w-[60px] h-[60px] rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-bold text-[#1F1F1F]">Sunhof</div>
                <div className="text-xs text-gray-600">Zonnebank Studio</div>
              </div>
            </Link>
            <Navigation />
            <div className="md:hidden flex items-center gap-3">
              <MobileContactDropdown />
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1 — Hero */}
      <section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-[#F6F3EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] mb-4">
              Privacyverklaring
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Sunhof respecteert de privacy van alle bezoekers van onze website en zorgt ervoor dat persoonlijke informatie vertrouwelijk wordt behandeld.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Content */}
      <section className="py-8 md:py-12 bg-[#F6F3EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-6">
                  Privacyverklaring – Sunhof
                </h2>
                <p className="text-lg text-[#1F1F1F]/80 leading-relaxed mb-8">
                  Sunhof hecht waarde aan de bescherming van jouw persoonsgegevens. In deze privacyverklaring leggen wij uit welke gegevens wij verzamelen, waarom wij deze verzamelen en hoe wij hiermee omgaan.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      1. Bedrijfsgegevens
                    </h2>
                    <div className="space-y-3 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        <strong>Sunhof</strong><br />
                        Zonnestudio
                      </p>
                      <p className="mt-4"><strong>Locaties:</strong></p>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-semibold">Sunhof Colmschate</p>
                          <p>Koggeschip 216</p>
                          <p>7429 BG Colmschate</p>
                          <p>Telefoon: <a href="tel:0570752247" className="text-[#D4A86A] hover:underline">0570 752 247</a></p>
                        </div>
                        <div>
                          <p className="font-semibold">Sunhof Zandweerd</p>
                          <p>Pieter de Hooghstraat 29</p>
                          <p>7412 RV Deventer</p>
                          <p>Telefoon: <a href="tel:0570745985" className="text-[#D4A86A] hover:underline">0570 745 985</a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      2. Persoonsgegevens die wij verwerken
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Sunhof verwerkt alleen persoonsgegevens wanneer je zelf contact met ons opneemt.
                      </p>
                      <p>
                        Dit kan bijvoorbeeld wanneer je ons een e-mail stuurt of telefonisch contact opneemt.
                      </p>
                      <p>
                        Wij kunnen dan de volgende gegevens ontvangen:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>naam</li>
                        <li>e-mailadres</li>
                        <li>telefoonnummer</li>
                        <li>informatie die je zelf in een bericht vermeldt</li>
                      </ul>
                      <p>
                        Deze gegevens worden uitsluitend gebruikt om je vraag te beantwoorden of om contact met je op te nemen.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      3. Doel van de verwerking
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Sunhof gebruikt jouw gegevens uitsluitend voor de volgende doeleinden:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>het beantwoorden van vragen via e-mail of telefoon</li>
                        <li>het verlenen van klantenservice</li>
                        <li>het verbeteren van onze dienstverlening</li>
                      </ul>
                      <p>
                        Wij gebruiken jouw gegevens niet voor marketingdoeleinden zonder jouw toestemming.
                      </p>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      4. Bewaartermijn
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Sunhof bewaart persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor deze zijn verstrekt.
                      </p>
                      <p>
                        E-mails of berichten worden alleen bewaard zolang dat nodig is om de vraag of het verzoek af te handelen.
                      </p>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      5. Delen van gegevens met derden
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Sunhof verkoopt jouw gegevens niet aan derden.
                      </p>
                      <p>
                        Wij verstrekken persoonsgegevens alleen aan derden wanneer dit noodzakelijk is om onze diensten uit te voeren of wanneer wij hier wettelijk toe verplicht zijn.
                      </p>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      6. Beveiliging van persoonsgegevens
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Sunhof neemt passende maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik of onbevoegde toegang.
                      </p>
                      <p>
                        Onze website maakt gebruik van beveiligde verbindingen (SSL) zodat gegevens veilig worden verzonden.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      7. Cookies
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        De website van Sunhof gebruikt geen trackingcookies voor marketing of advertentiedoeleinden.
                      </p>
                      <p>
                        Er kunnen wel technische cookies worden gebruikt die noodzakelijk zijn voor het functioneren van de website.
                      </p>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      8. Links naar andere websites
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Onze website kan links bevatten naar externe websites, zoals Instagram of Facebook.
                      </p>
                      <p>
                        Sunhof is niet verantwoordelijk voor het privacybeleid van deze externe websites.
                      </p>
                      <p>
                        Wij adviseren om altijd de privacyverklaring van deze websites te raadplegen.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      9. Jouw rechten
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Je hebt het recht om:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>inzage te krijgen in jouw persoonsgegevens</li>
                        <li>jouw gegevens te laten corrigeren</li>
                        <li>jouw gegevens te laten verwijderen</li>
                      </ul>
                      <p>
                        Wil je gebruik maken van één van deze rechten? Neem dan contact met ons op.
                      </p>
                    </div>
                  </div>

                  {/* Section 10 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      10. Contact
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Heb je vragen over deze privacyverklaring of over de verwerking van jouw persoonsgegevens?
                      </p>
                      <p>
                        Neem dan contact met ons op via één van onze locaties:
                      </p>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-semibold">Sunhof Colmschate</p>
                          <p><a href="tel:0570752247" className="text-[#D4A86A] hover:underline">0570 752 247</a></p>
                        </div>
                        <div>
                          <p className="font-semibold">Sunhof Zandweerd</p>
                          <p><a href="tel:0570745985" className="text-[#D4A86A] hover:underline">0570 745 985</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
