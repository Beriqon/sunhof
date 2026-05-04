'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function Navigation() {
  const [isLocatiesOpen, setIsLocatiesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contactTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactDropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsLocatiesOpen(true);
  };

  const handleMouseLeave = () => {
    // Delay het sluiten met 300ms om tijd te geven om naar het menu te bewegen
    timeoutRef.current = setTimeout(() => {
      setIsLocatiesOpen(false);
    }, 300);
  };

  const handleContactMouseEnter = () => {
    if (contactTimeoutRef.current) {
      clearTimeout(contactTimeoutRef.current);
    }
    setIsContactOpen(true);
  };

  const handleContactMouseLeave = () => {
    // Delay het sluiten met 300ms om tijd te geven om naar het menu te bewegen
    contactTimeoutRef.current = setTimeout(() => {
      setIsContactOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (contactTimeoutRef.current) {
        clearTimeout(contactTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-4">
      <div 
        ref={dropdownRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className="text-gray-700 hover:text-[#D4A86A] transition-colors flex items-center gap-1 text-sm"
          onClick={() => setIsLocatiesOpen(!isLocatiesOpen)}
        >
          Locaties
          <svg 
            className={`w-3 h-3 transition-transform ${isLocatiesOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isLocatiesOpen && (
          <div 
            className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              href="/colmschate" 
              className="block px-4 py-2 text-gray-700 hover:bg-[#D4A86A] hover:text-white transition-colors"
              onClick={() => setIsLocatiesOpen(false)}
            >
              Colmschate
            </Link>
            <Link 
              href="/zandweerd" 
              className="block px-4 py-2 text-gray-700 hover:bg-[#D4A86A] hover:text-white transition-colors"
              onClick={() => setIsLocatiesOpen(false)}
            >
              Zandweerd
            </Link>
          </div>
        )}
      </div>
      
      <Link href="/prijzen" className="text-gray-700 hover:text-[#D4A86A] transition-colors text-sm">Prijzen</Link>
      <Link href="/zonnebanken" className="text-gray-700 hover:text-[#D4A86A] transition-colors text-sm">Zonnebanken</Link>
      <Link href="/producten" className="text-gray-700 hover:text-[#D4A86A] transition-colors text-sm">Producten</Link>
      <Link href="/contact" className="text-gray-700 hover:text-[#D4A86A] transition-colors text-sm">Contact</Link>
      
      <div 
        ref={contactDropdownRef}
        className="relative"
        onMouseEnter={handleContactMouseEnter}
        onMouseLeave={handleContactMouseLeave}
      >
        <button 
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D4A86A] text-white text-sm font-semibold rounded-lg hover:bg-[#7C6CF3] transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Bel ons</span>
          <svg 
            className={`w-3 h-3 transition-transform ${isContactOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isContactOpen && (
          <div 
            className="absolute top-full right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
            onMouseEnter={handleContactMouseEnter}
            onMouseLeave={handleContactMouseLeave}
          >
            <a 
              href="tel:0570752247" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#D4A86A] hover:text-white transition-colors"
              onClick={() => setIsContactOpen(false)}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Bel Colmschate</span>
            </a>
            <a 
              href="tel:0570745985" 
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#D4A86A] hover:text-white transition-colors"
              onClick={() => setIsContactOpen(false)}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Bel Zandweerd</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
