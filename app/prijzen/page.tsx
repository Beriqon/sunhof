import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";
import ZontegoedCards from "../components/ZontegoedCards";

export default function PrijzenPage() {
  // Starting prices per bed (tot 20 minuten)
  const startingPrices = [
    { bed: "Lightvision", price: "€17,50" },
    { bed: "Prestige 1600", price: "€16,50" },
    { bed: "Prestige 1400", price: "€15,50" },
    { bed: "Prestige 1100", price: "€14,50" },
    { bed: "Excellence 800", price: "€13,50" },
    { bed: "Affinity 600", price: "€12,50" },
    { bed: "Sunpilot", price: "€11,50" },
  ];

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
              Prijzen
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Tarieven per zonnebank. De 'tot 20 minuten' is de vanaf prijs per bank.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Starting Prices */}
      <section className="pt-0 pb-8 md:pb-12 bg-[#F6F3EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#CCA46E] to-[#E6C896] px-6 py-4">
                <h2 className="text-xl md:text-2xl font-bold text-white text-center">
                  Vanaf prijzen (tot 20 minuten)
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {startingPrices.map((item, index) => (
                  <div 
                    key={item.bed}
                    className={`px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-150 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <span className="text-lg md:text-xl font-semibold text-[#1F1F1F]">
                      {item.bed}
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-[#D4A86A]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5 — Zontegoed (zelfde als homepage) */}
      <section className="pt-0 pb-8 md:pb-12 bg-[#F6F3EE]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] text-center mb-6 md:mb-8">
              Zontegoed
            </h2>
            <ZontegoedCards />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Information */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-8 text-center">
              Goed om te weten
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-[#F6F3EE] rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A86A] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    De prijs kan variëren afhankelijk van sessieduur.
                  </p>
                </div>
              </div>
              <div className="bg-[#F6F3EE] rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A86A] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ons personeel helpt je graag bij het kiezen van de juiste zonnebank.
                  </p>
                </div>
              </div>
              <div className="bg-[#F6F3EE] rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4A86A] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Voor tijdelijke acties kun je onze social media volgen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F6F3EE] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4">
              Kom langs bij Sunhof
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Bezoek een van onze zonnestudio's in Deventer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#C89B5E] transition-all duration-300 shadow-md hover:shadow-lg text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Bekijk locaties</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1F1F1F] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-gray-200 text-lg"
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
