"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MobileContactDropdown from "../components/MobileContactDropdown";
import MobileMenu from "../components/MobileMenu";

export default function ZandweerdPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [parallaxStates, setParallaxStates] = useState<Record<string, { x: number; y: number }>>({});

  // Handle parallax hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // Max 5px movement
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10; // Max 5px movement
    setParallaxStates(prev => ({ ...prev, [id]: { x, y } }));
  };

  const handleMouseLeave = (id: string) => {
    setParallaxStates(prev => ({ ...prev, [id]: { x: 0, y: 0 } }));
  };

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent body scroll when lightbox is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxImage]);
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

      {/* SECTION 1 — Hero */}
      <section className="relative w-full h-[45vh] flex items-center overflow-hidden py-8 md:py-12">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A86A] via-[#CCA46E] to-[#B89560]"></div>
        {/* Shadow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 shadow-[0_0_100px_rgba(200,155,94,0.3)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full max-w-[1200px]">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight drop-shadow-2xl">
              Sunhof Zandweerd
            </h1>
            
            <p className="text-xl md:text-2xl text-white/95 mb-8 md:mb-10 leading-relaxed drop-shadow-lg">
              Zonnestudio in Deventer Zandweerd met moderne zonnebanken en professionele apparatuur.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pieter+de+Hooghstraat+29+Deventer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span>Route via Google Maps</span>
              </a>
              
              <a
                href="tel:0570745985"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Bel deze locatie</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Over deze studio */}
      <section className="py-16 md:py-24 bg-[#F6F3EE]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-6">
                Over deze locatie
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Onze studio in Zandweerd biedt moderne zonnebanken in een rustige en hygiënische omgeving. 
                Onze medewerkers helpen je graag bij het kiezen van de juiste zonnebank en sessieduur.
              </p>
            </div>
            
            {/* Right side image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/zandweerd/sunhof-zandweerd.jpg" 
                alt="Interieur Sunhof Zandweerd" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Fotogalerij */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-12 text-center">
            Onze studio
          </h2>
          
          {/* Luxury gallery layout for 4 photos */}
          <div className="space-y-6">
            {/* First row: Large featured image left, medium image right */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Large featured image (66% width) */}
              <div 
                className="md:col-span-2 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-white/50"
                onClick={() => setLightboxImage("/zandweerd/sunhof-zandweerd2.jpg")}
                onMouseMove={(e) => handleMouseMove(e, "photo1")}
                onMouseLeave={() => handleMouseLeave("photo1")}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/zandweerd/sunhof-zandweerd2.jpg" 
                    alt="Studio foto 1" 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    style={{
                      transform: `translate(${parallaxStates.photo1?.x || 0}px, ${parallaxStates.photo1?.y || 0}px) scale(${parallaxStates.photo1 ? 1.1 : 1})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Medium image (33% width) - fills full height */}
              <div 
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-white/50 bg-gray-50 h-full"
                onClick={() => setLightboxImage("/zandweerd/sunhof-zandweerd3.jpg")}
                onMouseMove={(e) => handleMouseMove(e, "photo2")}
                onMouseLeave={() => handleMouseLeave("photo2")}
              >
                <div className="relative overflow-hidden h-full w-full bg-gray-50">
                  <img 
                    src="/zandweerd/sunhof-zandweerd3.jpg" 
                    alt="Studio foto 2" 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    style={{
                      transform: `translate(${parallaxStates.photo2?.x || 0}px, ${parallaxStates.photo2?.y || 0}px) scale(${parallaxStates.photo2 ? 1.15 : 1})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            {/* Second row: Two equal images side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-white/50"
                onClick={() => setLightboxImage("/zandweerd/sunhof-zandweerd 4.jpg")}
                onMouseMove={(e) => handleMouseMove(e, "photo4")}
                onMouseLeave={() => handleMouseLeave("photo4")}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/zandweerd/sunhof-zandweerd 4.jpg" 
                    alt="Studio foto 4" 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    style={{
                      transform: `translate(${parallaxStates.photo4?.x || 0}px, ${parallaxStates.photo4?.y || 0}px) scale(${parallaxStates.photo4 ? 1.1 : 1})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div 
                className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-white/50"
                onClick={() => setLightboxImage("/zandweerd/sunhof-zandweerd.jpg")}
                onMouseMove={(e) => handleMouseMove(e, "photo3")}
                onMouseLeave={() => handleMouseLeave("photo3")}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src="/zandweerd/sunhof-zandweerd.jpg" 
                    alt="Studio foto 3" 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    style={{
                      transform: `translate(${parallaxStates.photo3?.x || 0}px, ${parallaxStates.photo3?.y || 0}px) scale(${parallaxStates.photo3 ? 1.1 : 1})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Sluit lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={lightboxImage} 
              alt="Studio foto" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* SECTION 4 — Zonnebanken op deze locatie */}
      <section className="py-16 md:py-24 bg-[#F6F3EE]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F1F1F] mb-4">
              Onze zonnebanken in Zandweerd
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Professionele apparatuur voor een comfortabele en veilige tanning sessie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
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

            {/* Prestige 1400 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                <img 
                  src="/zonnebanken/sunhof-prestige1400.jpg" 
                  alt="Prestige 1400" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4">
                  Prestige 1400
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

            {/* Last 2 items - samen even breed als de 3 erboven */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Prestige 1100 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                  <img 
                    src="/zonnebanken/sunhof-prestige1100.png" 
                    alt="Prestige 1100" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4">
                    Prestige 1100
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

              {/* Excellence 800 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-100">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                  <img 
                    src="/zonnebanken/sunhof-excellence800.png" 
                    alt="Excellence 800" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F1F1F] mb-4">
                    Excellence 800
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

          </div>
        </div>
      </section>

      {/* SECTION 5 — Openingstijden & contact */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left side - Openingstijden */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-8">
                Openingstijden
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Maandag</span>
                    <span className="font-medium text-[#1F1F1F]">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Dinsdag</span>
                    <span className="font-medium text-[#1F1F1F]">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Woensdag</span>
                    <span className="font-medium text-[#1F1F1F]">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Donderdag</span>
                    <span className="font-medium text-[#1F1F1F]">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Vrijdag</span>
                    <span className="font-medium text-[#1F1F1F]">09:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Zaterdag</span>
                    <span className="font-medium text-[#1F1F1F]">11:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Zondag</span>
                    <span className="font-medium text-[#1F1F1F]">11:00 - 21:00</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Contact */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-8">
                Contact
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">Adres</h3>
                  <p className="text-gray-700">
                    Pieter de Hooghstraat 29<br />
                    7412 RV Deventer
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">Telefoon</h3>
                  <p className="text-gray-700">0570 745 985</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="tel:0570745985"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D4A86A] text-white font-semibold rounded-lg hover:bg-[#B89560] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Bel deze locatie</span>
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
                    <span>Route via Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Google Maps */}
      <section className="py-16 md:py-24 bg-[#F6F3EE]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-8 text-center">
            Route
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '350px' }}>
            <iframe
              src="https://www.google.com/maps?q=Pieter+de+Hooghstraat+29+Deventer&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sunhof Zandweerd locatie"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
