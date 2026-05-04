import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";
import MobileMenu from "../components/MobileMenu";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">
      {/* Header */}
      <header className="bg-[#F6F3EE] border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
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

      {/* SECTION 1 — Page Header */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F1F1F] mb-6">
              Contact & Locaties
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Bezoek onze zonnestudio op een van onze twee locaties in Deventer.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Location Cards */}
      <section id="locaties" className="pt-0 pb-12 md:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* Card 1: Sunhof Colmschate */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-6">
                  Sunhof Colmschate
                </h2>
                
                <div className="space-y-6">
                  {/* Two-column layout: Address/Buttons left, Opening hours right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side: Address and Buttons */}
                    <div className="space-y-6">
                      {/* Address */}
                      <div>
                        <p className="text-gray-700 font-medium mb-1">Koggeschip 216</p>
                        <p className="text-gray-700">7429 BG Colmschate</p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=Koggeschip+216,+7429+BG+Colmschate"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          <span>Route via Google Maps</span>
                        </a>
                        <a
                          href="tel:0570752247"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Bel ons</span>
                        </a>
                      </div>
                    </div>

                    {/* Right side: Opening Hours */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#1F1F1F] mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Openingstijden
                      </h3>
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
                  </div>

                  {/* Google Maps Embed */}
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.5!2d6.15!3d52.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE1JzAwLjAiTiA2wrAwOScwMC4wIkU!5e0!3m2!1snl!2snl!4v1234567890!5m2!1snl!2snl&q=Koggeschip+216,+7429+BG+Colmschate"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title="Sunhof Colmschate locatie"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Card 2: Sunhof Zandweerd */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-6">
                  Sunhof Zandweerd
                </h2>
                
                <div className="space-y-6">
                  {/* Two-column layout: Address/Buttons left, Opening hours right */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side: Address and Buttons */}
                    <div className="space-y-6">
                      {/* Address */}
                      <div>
                        <p className="text-gray-700 font-medium mb-1">Pieter de Hooghstraat 29</p>
                        <p className="text-gray-700">7412 RV Deventer</p>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=Pieter+de+Hooghstraat+29,+7412+RV+Deventer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          <span>Route via Google Maps</span>
                        </a>
                        <a
                          href="tel:0570745985"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Bel ons</span>
                        </a>
                      </div>
                    </div>

                    {/* Right side: Opening Hours */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#1F1F1F] mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#D4A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Openingstijden
                      </h3>
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
                  </div>

                  {/* Google Maps Embed */}
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.5!2d6.15!3d52.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE1JzAwLjAiTiA2wrAwOScwMC4wIkU!5e0!3m2!1snl!2snl!4v1234567890!5m2!1snl!2snl&q=Pieter+de+Hooghstraat+29,+7412+RV+Deventer"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title="Sunhof Zandweerd locatie"
                    ></iframe>
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
