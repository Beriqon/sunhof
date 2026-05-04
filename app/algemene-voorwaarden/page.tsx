import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";
import MobileMenu from "../components/MobileMenu";

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <header className="bg-[#F6F3EE] border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 ml-8 md:ml-12 lg:ml-16">
              <img 
                src="/logo/sunhoflogodef.jpg" 
                alt="Sunhof Logo" 
                className="w-[60px] h-[60px] rounded-full object-cover"
              />
              <div>
                <div className="text-lg font-bold text-[#1F1F1F]">Sunhof</div>
                <div className="text-xs text-gray-600">Zonnebank Studio</div>
              </div>
            </Link>
            <Navigation />
            <div className="relative z-20 flex items-center gap-3 lg:hidden">
              <MobileContactDropdown />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1 — Hero */}
      <section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-[#F6F3EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] mb-4">
              Algemene voorwaarden
            </h1>
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
                  Algemene voorwaarden – Sunhof Zonnestudio
                </h2>
                <p className="text-lg text-[#1F1F1F]/80 leading-relaxed mb-8">
                  Deze algemene voorwaarden zijn van toepassing op het gebruik van de diensten van Sunhof Zonnestudio en op alle bezoeken aan de zonnestudio.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      1. Bedrijfsgegevens
                    </h2>
                    <div className="space-y-3 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        <strong>Handelsnaam:</strong> Sunhof<br />
                        <strong>Statutaire naam:</strong> Exploitatiemaatschappij Reigershof B.V.
                      </p>
                      <p>
                        <strong>KvK-nummer:</strong> 06062169<br />
                        <strong>Vestigingsnummer:</strong> 000056163185
                      </p>
                      <p className="mt-4"><strong>Locaties:</strong></p>
                      <div className="ml-4 space-y-3">
                        <div>
                          <p className="font-semibold">Sunhof Zandweerd</p>
                          <p>Pieter de Hooghstraat 29</p>
                          <p>7412 RV Deventer</p>
                        </div>
                        <div>
                          <p className="font-semibold">Sunhof Colmschate</p>
                          <p>Koggeschip 216</p>
                          <p>7429 BG Colmschate</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      2. Toepasselijkheid
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Deze algemene voorwaarden zijn van toepassing op alle diensten, producten en bezoeken aan Sunhof Zonnestudio.
                      </p>
                      <p>
                        Door gebruik te maken van de faciliteiten van Sunhof gaat de bezoeker akkoord met deze algemene voorwaarden.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      3. Leeftijd en gebruik zonnebank
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Gebruik van de zonnebank is uitsluitend toegestaan voor personen van 18 jaar en ouder.
                      </p>
                      <p>
                        Bezoekers dienen altijd de instructies van het personeel op te volgen en worden geacht eerlijk informatie te geven over hun huidtype en zonervaring.
                      </p>
                      <p>
                        Sunhof adviseert bezoekers altijd over verantwoord gebruik van de zonnebank.
                      </p>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      4. Eigen verantwoordelijkheid
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Gebruik van de zonnebank gebeurt altijd op eigen verantwoordelijkheid.
                      </p>
                      <p>
                        Bezoekers zijn zelf verantwoordelijk voor het volgen van de aanbevolen zontijden en het advies van het personeel.
                      </p>
                      <p>
                        Sunhof is niet aansprakelijk voor schade of gezondheidsklachten die ontstaan door onjuist of overmatig gebruik van de zonnebank.
                      </p>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      5. Betaling
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Betaling voor zonnebankgebruik kan plaatsvinden via:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>pinbetaling</li>
                        <li>contante betaling</li>
                        <li>het opwaarderen van een persoonlijk account</li>
                      </ul>
                      <p>
                        Betaling dient voorafgaand aan het gebruik van de zonnebank te worden voldaan.
                      </p>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      6. Schade en aansprakelijkheid
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Bezoekers zijn verantwoordelijk voor schade die zij veroorzaken aan apparatuur, faciliteiten of eigendommen van Sunhof.
                      </p>
                      <p>
                        Indien schade ontstaat door onjuist gebruik of nalatigheid van de bezoeker, kan Sunhof de kosten van reparatie of vervanging op de bezoeker verhalen.
                      </p>
                      <p>
                        Sunhof is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke eigendommen van bezoekers.
                      </p>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      7. Hygiëne en huisregels
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Bezoekers dienen zich te houden aan de hygiëneregels van de studio.
                      </p>
                      <p>
                        Het is verplicht om de zonnebank op een hygiënische manier te gebruiken en de instructies van het personeel op te volgen.
                      </p>
                      <p>
                        Alleen zonnecosmetica die door de studio wordt aangeboden of toegestaan mag in de zonnebank worden gebruikt.
                      </p>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      8. Gedrag in de studio
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Bezoekers dienen zich respectvol te gedragen tegenover personeel en andere bezoekers.
                      </p>
                      <p>
                        Sunhof behoudt zich het recht voor om bezoekers die zich niet aan de regels houden de toegang tot de studio te weigeren.
                      </p>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      9. Wijziging van voorwaarden
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Sunhof behoudt zich het recht voor om deze algemene voorwaarden te wijzigen.
                      </p>
                      <p>
                        De meest recente versie van de voorwaarden is altijd beschikbaar via de website.
                      </p>
                    </div>
                  </div>

                  {/* Section 10 */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-4">
                      10. Toepasselijk recht
                    </h2>
                    <div className="space-y-4 text-[#1F1F1F]/80 leading-relaxed">
                      <p>
                        Op deze algemene voorwaarden is het Nederlands recht van toepassing.
                      </p>
                      <p>
                        Geschillen die voortvloeien uit het gebruik van de diensten van Sunhof worden voorgelegd aan de bevoegde rechter in Nederland.
                      </p>
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
