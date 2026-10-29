/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Camera, MapPin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-800 bg-[#090a0c] text-stone-400 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Lockup */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-stone-100 font-serif text-2xl font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-stone-900 border border-stone-800 text-amber-400 text-sm">
              <Camera className="h-3.5 w-3.5" />
            </span>
            <span>asd</span>
          </div>
          <p className="text-xs text-stone-500 font-light max-w-sm text-center md:text-left">
            Visual storytelling, documentary portraiture, and commercial brand narratives rooted in Kaduna, Nigeria.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-stone-400">
          <a href="#story" className="hover:text-stone-200 transition-colors">
            Portfolio Story
          </a>
          <a href="#services" className="hover:text-stone-200 transition-colors">
            Services
          </a>
          <a href="#gallery" className="hover:text-stone-200 transition-colors">
            Curated Gallery
          </a>
          <a href="#kaduna" className="hover:text-stone-200 transition-colors">
            Kaduna Roots
          </a>
          <a href="#pricing" className="hover:text-stone-200 transition-colors">
            Investment
          </a>
          <a href="#contact" className="hover:text-stone-200 transition-colors">
            Inquire
          </a>
        </div>

        {/* Back to Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-stone-500 font-mono">
            Kaduna · Nigeria
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-stone-900/90 text-center text-[11px] text-stone-600 font-mono">
        © {new Date().getFullYear()} asd Photography. All rights reserved. Crafted with authentic visual care.
      </div>
    </footer>
  );
};
