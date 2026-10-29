/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Camera, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-800/80 bg-[#0b0c0e]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-stone-100 transition-colors hover:text-amber-400 whitespace-nowrap shrink-0"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 border border-stone-700/60 text-amber-400">
            <Camera className="h-4 w-4" />
          </span>
          <span className="font-serif tracking-wide text-2xl font-semibold">asd</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-400">
          <a
            href="#story"
            className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Portfolio Story
          </a>
          <a
            href="#services"
            className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Curated Gallery
          </a>
          <a
            href="#kaduna"
            className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Kaduna Roots
          </a>
          <a
            href="#pricing"
            className="hover:text-stone-100 transition-colors whitespace-nowrap shrink-0"
          >
            Investment
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-amber-400/10 cursor-pointer"
          >
            <span>Book a Session</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-800 bg-[#0e1013] px-6 py-4 space-y-3">
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-stone-300 hover:text-amber-400"
          >
            Portfolio Story
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-stone-300 hover:text-amber-400"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-stone-300 hover:text-amber-400"
          >
            Curated Gallery
          </a>
          <a
            href="#kaduna"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-stone-300 hover:text-amber-400"
          >
            Kaduna Roots
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-stone-300 hover:text-amber-400"
          >
            Investment
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 rounded-lg text-center cursor-pointer"
          >
            Book a Session
          </button>
        </div>
      )}
    </header>
  );
};
