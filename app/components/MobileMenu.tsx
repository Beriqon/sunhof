'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const linkBase =
  'block rounded-lg px-4 py-3 text-[#1F1F1F] font-medium transition-colors hover:bg-[#D4A86A] hover:text-white';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="relative z-[60] inline-flex h-11 min-w-[44px] shrink-0 items-center justify-center rounded-lg text-gray-700 outline-offset-2 hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D4A86A]"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label={open ? 'Menu sluiten' : 'Menu openen'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-[200]" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Menu sluiten"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-navigation-panel"
            className="absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col border-l border-gray-200 bg-[#F6F3EE] shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Hoofdmenu"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <span className="text-lg font-bold text-[#1F1F1F]">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-gray-600 hover:bg-black/5"
                aria-label="Menu sluiten"
                onClick={() => setOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
              <p className="px-4 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Locaties</p>
              <Link href="/colmschate" className={linkBase} onClick={() => setOpen(false)}>
                Colmschate
              </Link>
              <Link href="/zandweerd" className={linkBase} onClick={() => setOpen(false)}>
                Zandweerd
              </Link>
              <div className="my-2 border-t border-gray-200" />
              <Link href="/prijzen" className={linkBase} onClick={() => setOpen(false)}>
                Prijzen
              </Link>
              <Link href="/zonnebanken" className={linkBase} onClick={() => setOpen(false)}>
                Zonnebanken
              </Link>
              <Link href="/producten" className={linkBase} onClick={() => setOpen(false)}>
                Producten
              </Link>
              <Link href="/contact" className={linkBase} onClick={() => setOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
