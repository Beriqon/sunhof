import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";
import MobileMenu from "../components/MobileMenu";

export default function ZonnebankenPage() {
  const tanningBeds = [
    {
      name: "Lightvision",
      badge: "Maximale intensiteit",
      image: "/zonnebanken/sunhof-lightvision.jpg",
      description: "Onze meest geavanceerde zonnebank met Lightvision technologie voor optimale resultaten.",
      features: [
        "Hoogste intensiteit",
        "Maximale tanning",
        "Geavanceerde technologie"
      ]
    },
    {
      name: "Prestige 1600",
      badge: "Diepe tanning",
      image: "/zonnebanken/sunhof-prestige1600.jpg",
      description: "Sterke zonnebank voor diepe tanning en ervaren zonners.",
      features: [
        "Sterke intensiteit",
        "Diepe tanning",
        "Comfortabele ligging"
      ]
    },
    {
      name: "Prestige 1400",
      badge: "Sterke tanning",
      image: "/zonnebanken/sunhof-prestige1400.jpg",
      description: "Professionele zonnebank met sterke prestaties voor ervaren zonners.",
      features: [
        "Sterke intensiteit",
        "Ervaren zonners",
        "Moderne technologie"
      ]
    },
    {
      name: "Prestige 1100",
      badge: "Comfort tanning",
      image: "/zonnebanken/sunhof-prestige1100.png",
      description: "Betrouwbare zonnebank met een perfecte balans tussen intensiteit en comfort.",
      features: [
        "Gemiddelde intensiteit",
        "Regelmatige zonners",
        "Comfortabele ligging"
      ]
    },
    {
      name: "Excellence 800",
      badge: "Beginner vriendelijk",
      image: "/zonnebanken/sunhof-excellence800.png",
      description: "Ideale zonnebank voor beginnende zonners en lichtere huidtypes.",
      features: [
        "Lichte intensiteit",
        "Beginners",
        "Zachte tanning"
      ]
    },
    {
      name: "Sunpilot",
      badge: "Snelle sessie",
      image: "/zonnebanken/sunhof-sunpilot.jpg",
      description: "Moderne zonnebankstoel voor een snelle en gerichte tanning sessie.",
      features: [
        "Lage intensiteit",
        "Snelle sessie",
        "Gerichte tanning"
      ]
    },
    {
      name: "Affinity 600",
      badge: "Beginner vriendelijk",
      image: "/zonnebanken/Affinity600.png",
      description: "Toegankelijke zonnebank voor een rustige en comfortabele tanning ervaring.",
      features: [
        "Lage tot gemiddelde intensiteit",
        "Geschikt voor beginners en lichtere huidtypes",
        "Comfortabele en gelijkmatige tanning"
      ]
    }
  ];

  const comparisonTable = [
    { name: "Sunpilot", intensity: "Laag", target: "Snelle sessies" },
    { name: "Affinity 600", intensity: "Laag – licht", target: "Beginners en lichte huidtypes" },
    { name: "Excellence 800", intensity: "Licht", target: "Beginners" },
    { name: "Prestige 1100", intensity: "Gemiddeld", target: "Regelmatige zonners" },
    { name: "Prestige 1400", intensity: "Sterk", target: "Ervaren zonners" },
    { name: "Prestige 1600", intensity: "Zeer sterk", target: "Diepe tanning" },
    { name: "Lightvision", intensity: "Maximaal", target: "Intensieve tanning" }
  ];

  const categories = [
    {
      name: "Beginner",
      icon: (
        <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      description: "Rustige tanning voor lichtere huidtypes.",
      beds: ["Excellence 800"]
    },
    {
      name: "Regelmatige zonner",
      icon: (
        <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Comfortabele tanning voor bezoekers die vaker zonnen.",
      beds: ["Prestige 1100"]
    },
    {
      name: "Intensieve tanning",
      icon: (
        <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      description: "Sterkere zonnebanken voor ervaren zonners.",
      beds: ["Prestige 1400", "Prestige 1600", "Lightvision"]
    },
    {
      name: "Snelle sessie",
      icon: (
        <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Gerichte tanning in korte tijd.",
      beds: ["Sunpilot"]
    }
  ];

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
          <div className="max-w-[1100px] mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight drop-shadow-2xl">
              Onze zonnebanken
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-lg">
              Moderne zonnebanken voor comfort, hygiëne en optimale tanning.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Onze zonnebanken */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* First row: 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {tanningBeds.slice(0, 4).map((bed) => (
              <div 
                key={bed.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                  <img 
                    src={bed.image} 
                    alt={bed.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  {/* Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#F6F3EE] text-[#D4A86A] text-xs font-semibold uppercase tracking-wide rounded-full">
                      {bed.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                    {bed.name}
                  </h3>
                  <p className="text-base text-[#1F1F1F]/70 mb-6 leading-relaxed flex-grow">
                    {bed.description}
                  </p>
                  <ul className="space-y-3">
                    {bed.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg 
                          className="w-5 h-5 text-[#D4A86A] mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-[#1F1F1F]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tanningBeds.slice(4).map((bed) => (
              <div 
                key={bed.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                  <img 
                    src={bed.image} 
                    alt={bed.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  {/* Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-[#F6F3EE] text-[#D4A86A] text-xs font-semibold uppercase tracking-wide rounded-full">
                      {bed.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                    {bed.name}
                  </h3>
                  <p className="text-base text-[#1F1F1F]/70 mb-6 leading-relaxed flex-grow">
                    {bed.description}
                  </p>
                  <ul className="space-y-3">
                    {bed.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg 
                          className="w-5 h-5 text-[#D4A86A] mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-[#1F1F1F]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Advice Block */}
          <div className="mt-16 pt-12 border-t border-gray-200/50">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F]">
                Twijfel je welke zonnebank geschikt is?
              </h3>
              <p className="text-lg text-[#1F1F1F]/70 leading-relaxed">
                Kom langs in de studio. We adviseren je op basis van huidtype en ervaring.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1F1F1F] font-semibold rounded-lg border-2 border-[#D4A86A] hover:bg-[#D4A86A] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Bekijk locaties</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Verschillen tussen de zonnebanken */}
      <section className="py-12 md:py-16 bg-[#F6F3EE] border-t border-gray-200/50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#1F1F1F]">
            Verschillen tussen de zonnebanken
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#CCA46E] to-[#E6C896]">
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Zonnebank</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Intensiteit</th>
                    <th className="px-6 py-4 text-left text-white font-bold text-lg">Ideaal voor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr 
                      key={row.name}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                    >
                      <td className="px-6 py-4 text-lg font-semibold text-[#1F1F1F]">{row.name}</td>
                      <td className="px-6 py-4 text-base text-[#1F1F1F]/80">{row.intensity}</td>
                      <td className="px-6 py-4 text-base text-[#1F1F1F]/80">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Welke zonnebank past bij jou */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200/50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#1F1F1F]">
            Welke zonnebank past bij jou?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4A86A]/10 flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-2">
                      {category.name}
                    </h3>
                    <p className="text-base text-[#1F1F1F]/70 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.beds.map((bed) => (
                        <span 
                          key={bed}
                          className="inline-block px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] font-semibold rounded-lg text-sm"
                        >
                          {bed}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Hygiëne en veiligheid */}
      <section className="py-12 md:py-16 bg-[#F6F3EE] border-t border-gray-200/50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#1F1F1F]">
            Hygiëne en veiligheid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#1F1F1F]">
                Hygiënisch gereinigd
              </h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#1F1F1F]">
                Professioneel huidtype advies
              </h3>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4A86A]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#1F1F1F]">
                Moderne apparatuur
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Call to action */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#D4A86A]/10 via-[#D4A86A]/5 to-transparent border-t border-gray-200/50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
              Kom langs bij Sunhof
            </h2>
            <p className="text-xl md:text-2xl text-[#1F1F1F]/70 leading-relaxed">
              Bezoek een van onze studio's in Deventer.
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
