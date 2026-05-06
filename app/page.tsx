import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MobileContactDropdown from './components/MobileContactDropdown';
import MobileMenu from './components/MobileMenu';
import ZontegoedCards from './components/ZontegoedCards';
import Link from 'next/link';

export default function Home() {
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

      {/* Main Hero Section - Modern Premium Design */}
      <section 
        className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: 'url(/hero/sunhofbinnen.jpg)' }}
      >
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-[600px] ml-8 md:ml-12 lg:ml-16 animate-fade-in">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight drop-shadow-2xl">
              Zonnestudio Sunhof
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-white/95 leading-relaxed drop-shadow-lg">
              Professionele zonnebanken op twee locaties in Deventer – Colmschate en Zandweerd.
            </h2>
            
            {/* Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed drop-shadow-md">
              Ontspan, laad vitamine D op en geniet van moderne zonnebanken in een hygiënische en rustige omgeving.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <Link
                href="/prijzen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Bekijk prijzen</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              {/* Secondary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Onze locaties</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Locaties Section */}
      <section id="locaties" className="py-16 md:py-24 bg-[#F6F3EE]">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4">
              Onze locaties in Deventer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Kies de studio die het dichtst bij jou in de buurt is.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Locatie Colmschate */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="mb-6">
                <svg className="w-14 h-14 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                Locatie Colmschate
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Koggeschip 216, Deventer
              </p>
              
              {/* Openingstijden */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#1F1F1F] mb-3">Openingstijden</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Maandag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinsdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Woensdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Donderdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vrijdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zaterdag</span>
                    <span className="font-medium">11:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zondag</span>
                    <span className="font-medium">11:00 - 21:00</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="/colmschate"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Bekijk locatie</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Koggeschip+216+Deventer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#D4A86A] hover:text-[#D4A86A] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Route</span>
                </a>
                <a
                  href="tel:0570752247"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#D4A86A] hover:text-[#D4A86A] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Bel ons</span>
                </a>
              </div>
            </div>

            {/* Locatie Zandweerd */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="mb-6">
                <svg className="w-14 h-14 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-3">
                Locatie Zandweerd
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Pieter de Hooghstraat 29, Deventer
              </p>
              
              {/* Openingstijden */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#1F1F1F] mb-3">Openingstijden</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Maandag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dinsdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Woensdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Donderdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vrijdag</span>
                    <span className="font-medium">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zaterdag</span>
                    <span className="font-medium">11:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zondag</span>
                    <span className="font-medium">11:00 - 21:00</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href="/zandweerd"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span>Bekijk locatie</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pieter+de+Hooghstraat+29+Deventer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#D4A86A] hover:text-[#D4A86A] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Route</span>
                </a>
                <a
                  href="tel:0570745985"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#D4A86A] hover:text-[#D4A86A] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Bel ons</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarieven Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4">
              Tarieven
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Vanaf prijzen per zonnebank (tot 20 minuten). De 'tot 20 minuten' is de vanaf prijs per bank.
            </p>
          </div>

          {/* Pricing Grid - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
            {/* Lightvision */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-2">
                  Lightvision
                </h3>
                <p className="text-sm text-gray-500 mb-4">Tot 20 minuten</p>
              </div>
              <div className="mb-4 flex-grow">
                <div className="text-3xl md:text-4xl font-bold text-[#D4A86A] mb-2">
                  €18,50
                </div>
                <p className="text-sm text-gray-600">Vanaf prijs</p>
              </div>
            </div>

            {/* Sunpilot */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-2">
                  Sunpilot
                </h3>
                <p className="text-sm text-gray-500 mb-4">Tot 20 minuten</p>
              </div>
              <div className="mb-4 flex-grow">
                <div className="text-3xl md:text-4xl font-bold text-[#D4A86A] mb-2">
                  €12,50
                </div>
                <p className="text-sm text-gray-600">Vanaf prijs</p>
              </div>
            </div>

            {/* Excellence 800 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-2">
                  Excellence 800
                </h3>
                <p className="text-sm text-gray-500 mb-4">Tot 20 minuten</p>
              </div>
              <div className="mb-4 flex-grow">
                <div className="text-3xl md:text-4xl font-bold text-[#D4A86A] mb-2">
                  €14,50
                </div>
                <p className="text-sm text-gray-600">Vanaf prijs</p>
              </div>
            </div>
          </div>

          {/* Zontegoed — standaard + welkom nieuwe klanten */}
          <ZontegoedCards className="mb-10" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/prijzen"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#C89B5E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Bekijk alle prijzen</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#D4A86A] font-semibold rounded-lg border-2 border-[#D4A86A] hover:bg-[#D4A86A] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Bel voor advies</span>
            </Link>
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600 italic">
              Voor actuele deals en acties: volg ons op social media.
            </p>
          </div>
        </div>
      </section>

      {/* Tijdelijke acties Highlight Section */}
      <section className="py-6 md:py-8 bg-[#F6F3EE] border-t border-b border-[#D4A86A]/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Left: Title and Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-1">
                Tijdelijke acties?
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We delen deals en updates via Instagram en Facebook.
              </p>
            </div>

            {/* Right: Social Media Buttons */}
            <div className="flex flex-row gap-3">
              <a
                href="https://www.instagram.com/sunhofzonnestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/zonnestudiocolmschate/?locale=nl_NL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Onze zonnebanken Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4">
              Moderne zonnebanken voor elk huidtype
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comfort, hygiëne en professionele apparatuur.
            </p>
          </div>

          {/* Zonnebanken Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {/* Lightvision */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                <img 
                  src="/zonnebanken/sunhof-lightvision.jpg" 
                  alt="Lightvision" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4">
                  Lightvision
                </h3>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Comfort tanning
                  </span>
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Moderne technologie
                  </span>
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Geschikt voor verschillende huidtypes
                  </span>
                </div>
                
                {/* Button */}
                <Link href="/zonnebanken" className="mt-auto px-6 py-3 bg-gray-100 hover:bg-[#D4A86A] text-gray-700 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm text-center">
                  Meer info
                </Link>
              </div>
            </div>

            {/* Prestige 1600 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                <img 
                  src="/zonnebanken/sunhof-prestige1600.jpg" 
                  alt="Prestige 1600" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4">
                  Prestige 1600
                </h3>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Comfort tanning
                  </span>
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Moderne technologie
                  </span>
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Geschikt voor verschillende huidtypes
                  </span>
                </div>
                
                {/* Button */}
                <Link href="/zonnebanken" className="mt-auto px-6 py-3 bg-gray-100 hover:bg-[#D4A86A] text-gray-700 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm text-center">
                  Meer info
                </Link>
              </div>
            </div>

            {/* Sunpilot */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                <img 
                  src="/zonnebanken/sunhof-sunpilot.jpg" 
                  alt="Sunpilot" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4">
                  Sunpilot
                </h3>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Comfort tanning
                  </span>
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Moderne technologie
                  </span>
                  <span className="px-3 py-1 bg-[#D4A86A]/10 text-[#D4A86A] text-xs font-semibold rounded-full">
                    Geschikt voor verschillende huidtypes
                  </span>
                </div>
                
                {/* Button */}
                <Link href="/zonnebanken" className="mt-auto px-6 py-3 bg-gray-100 hover:bg-[#D4A86A] text-gray-700 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm text-center">
                  Meer info
                </Link>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center">
            <Link
              href="/zonnebanken"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>Bekijk alle zonnebanken</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom Sunhof Section */}
      <section className="py-16 md:py-24 bg-[#F6F3EE]">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4">
              Waarom Sunhof
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature 1 - Hygiënisch en schoon */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A86A]/20 to-[#D4A86A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                Hygiënisch en schoon
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alle zonnebanken worden na elke sessie gereinigd.
              </p>
            </div>

            {/* Feature 2 - Professioneel advies */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A86A]/20 to-[#D4A86A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                Professioneel advies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wij helpen je met het juiste huidtype programma.
              </p>
            </div>

            {/* Feature 3 - Moderne apparatuur */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A86A]/20 to-[#D4A86A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                Moderne apparatuur
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Topklasse zonnebanken voor optimaal resultaat.
              </p>
            </div>

            {/* Feature 4 - 2 locaties in Deventer */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4A86A]/20 to-[#D4A86A]/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                2 locaties in Deventer
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Altijd een studio dichtbij.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Two Column Layout */}
      <section id="contact" className="py-16 md:py-24 bg-[#F6F3EE]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Studio Information */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F1F1F]">
                Bezoek onze studio
              </h3>
              
              {/* Location 1 - Colmschate */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4A86A]/20 to-[#D4A86A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">
                      Colmschate
                    </h4>
                    <p className="text-gray-700 mb-1">Koggeschip 216</p>
                    <p className="text-gray-700">Deventer</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 ml-16">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Koggeschip+216+Deventer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>Route via Google Maps</span>
                  </a>
                  <a
                    href="tel:+31123456789"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#D4A86A] hover:text-[#D4A86A] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Bel ons</span>
                  </a>
                </div>
              </div>

              {/* Location 2 - Zandweerd */}
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4A86A]/20 to-[#D4A86A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">
                      Zandweerd
                    </h4>
                    <p className="text-gray-700 mb-1">Pieter de Hooghstraat 29</p>
                    <p className="text-gray-700">Deventer</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 ml-16">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pieter+de+Hooghstraat+29+Deventer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>Route via Google Maps</span>
                  </a>
                  <a
                    href="tel:+31123456789"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#D4A86A] hover:text-[#D4A86A] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Bel ons</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Google Maps */}
            <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.5!2d6.15!3d52.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8135b5e0b0b0b%3A0x0!2zRGV2ZW50ZXI!5e0!3m2!1snl!2snl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
