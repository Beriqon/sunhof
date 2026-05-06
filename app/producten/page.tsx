import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";
import MobileMenu from "../components/MobileMenu";

export default function ProductenPage() {
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
      <section className="relative w-full h-[45vh] flex items-center overflow-hidden py-8 md:py-12">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A86A] via-[#CCA46E] to-[#B89560]"></div>
        {/* Shadow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 shadow-[0_0_100px_rgba(200,155,94,0.3)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Zonnebank producten
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
              Professionele bruiningsversnellers en verzorgingsproducten voor tijdens en na het zonnen. Verkrijgbaar in onze studio's met persoonlijk advies.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Why use products */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 md:mb-20 text-center text-[#1F1F1F] leading-tight">
            Waarom zonnebank producten?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {/* Point 1 */}
            <div className="text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F]">Beter resultaat</h3>
              <p className="text-base md:text-lg text-[#1F1F1F]/70 leading-relaxed">
                Ondersteunt een egalere teint
              </p>
            </div>
            {/* Point 2 */}
            <div className="text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F]">Huidverzorging</h3>
              <p className="text-base md:text-lg text-[#1F1F1F]/70 leading-relaxed">
                Hydrateert en verzorgt
              </p>
            </div>
            {/* Point 3 */}
            <div className="text-center space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F]">After-sun herstel</h3>
              <p className="text-base md:text-lg text-[#1F1F1F]/70 leading-relaxed">
                Kalmeert na het zonnen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Ons assortiment in de studio */}
      <section className="py-16 md:py-24 bg-[#F6F3EE] border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-16 lg:gap-20 mb-12 md:mb-16">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] leading-tight">
                Ons assortiment in de studio
              </h2>
              <p className="text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed">
                Sunhof biedt meerdere professionele collecties voor tanning, herstel en verzorging. In de studio krijg je persoonlijk advies op basis van je huidtype en voorkeur.
              </p>
            </div>
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/producten/sunhof-zonneproducten.jpg" 
                  alt="Productwand in Sunhof studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* 4 Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F1F1F]">Tijdens het zonnen</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F1F1F]">Na het zonnen</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F1F1F]">Hydratatie & verzorging</h3>
            </div>
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1F1F1F]">Professionele collecties</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Voor tijdens het zonnen */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
              {/* Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight">
                  Voor tijdens het zonnen
                </h2>
                <p className="text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed">
                  Bruiningsversnellers afgestemd op huidtype en gewenste intensiteit. Keuze uit verschillende formules voor optimaal resultaat.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Bronzers</span>
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Intensifiers</span>
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Verzorgende bruiningsversnellers</span>
                </div>
                <div className="pt-6 space-y-2">
                  <p className="text-sm font-semibold text-[#1F1F1F] mb-3">Beschikbare collecties:</p>
                  <ul className="space-y-2 text-[#1F1F1F]/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                      Devoted Creations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                      Intensity Collection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                      DC Soho Collection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                      HIM Collection
                    </li>
                  </ul>
                </div>
              </div>
              {/* Optional small image */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/productsunhof.jpg" 
                    alt="Zonnebank producten Sunhof"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Herstel & Verzorging */}
      <section className="py-16 md:py-20 bg-[#F6F3EE] border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight">
                  Herstel & Verzorging
                </h2>
                <p className="text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed">
                  Verzorging voor na de sessie en tussen sessies door. After-sun herstel, hydratatie en glow-behoud voor een gezonde huid.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Verkoelend</span>
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Herstellend</span>
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Hydraterend</span>
                  <span className="px-4 py-2 bg-[#D4A86A]/10 text-[#1F1F1F] rounded-full text-sm font-medium">Verzorgend</span>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm font-semibold text-[#1F1F1F] mb-3">Beschikbare producten:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#1F1F1F]/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                    Verkoelende after-sun
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                    Herstellende verzorgingsproducten
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                    Hydraterende verzorging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                    Glow-ondersteunende producten
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Speciale collecties */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] leading-tight">
                Speciale collecties
              </h2>
              <p className="text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed max-w-2xl mx-auto">
                Sunhof biedt meerdere professionele productlijnen. Het assortiment kan per locatie of beschikbaarheid verschillen. Vraag in de studio naar de beschikbare collecties.
              </p>
            </div>
            <div className="pt-6">
              <ul className="inline-flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center text-[#1F1F1F]/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                  Color Rush Collection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                  Collagenetics Collection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                  Face Care Collection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A86A]"></span>
                  Premium collecties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Advice section */}
      <section className="py-16 md:py-24 bg-[#F6F3EE] border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] leading-tight">
                Welke bruiningsversneller past bij jou?
              </h2>
              <p className="text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed">
                In de studio krijg je persoonlijk advies op basis van je huidtype en voorkeur.
              </p>
            </div>
            <div className="space-y-8 md:space-y-10">
              {/* Advice 1 */}
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F]">Nieuw met zonnen</h3>
                  <p className="text-[#1F1F1F]/70 leading-relaxed">
                    Kies een verzorgende en toegankelijke bruiningsversneller die geschikt is voor beginnende zonners.
                  </p>
                </div>
              </div>
              {/* Advice 2 */}
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F]">Sneller een diepere teint</h3>
                  <p className="text-[#1F1F1F]/70 leading-relaxed">
                    Bekijk bronzers of intensievere bruiningsversnellers voor een sneller en dieper resultaat.
                  </p>
                </div>
              </div>
              {/* Advice 3 */}
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F]">Gevoelige huid</h3>
                  <p className="text-[#1F1F1F]/70 leading-relaxed">
                    Milde en verzorgende producten die geschikt zijn voor gevoelige huidtypes.
                  </p>
                </div>
              </div>
              {/* Advice 4 */}
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F]">Herstel na de sessie</h3>
                  <p className="text-[#1F1F1F]/70 leading-relaxed">
                    After-sun en hydraterende verzorging voor optimaal herstel en behoud van je teint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#D4A86A]/10 via-[#D4A86A]/5 to-transparent border-t border-gray-200/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] leading-tight">
              Wil je advies?
            </h2>
            <p className="text-xl md:text-2xl text-[#1F1F1F]/70 leading-relaxed">
              Kom langs in één van onze locaties. We adviseren op huidtype en voorkeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#C89B5E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bekijk locaties</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1F1F1F] font-semibold rounded-lg border-2 border-[#D4A86A] hover:bg-[#D4A86A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Bel ons</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
