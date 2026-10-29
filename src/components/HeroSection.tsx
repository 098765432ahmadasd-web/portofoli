/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Copy, Check, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onCopyDescription: () => void;
  copied: boolean;
  onExploreGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCopyDescription,
  copied,
  onExploreGallery
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-800/60">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed clean metadata kicker */}
              <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-amber-400/90 mb-5">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>Kaduna, Nigeria</span>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span>Visual Storytelling & Documentary Brand</span>
              </div>

              {/* Display Headline with text-wrap: balance */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-stone-100 leading-[1.12] [text-wrap:balance]">
                Honoring human connection through authentic visual narratives.
              </h1>

              {/* Refined lead paragraph */}
              <p className="mt-6 text-base sm:text-lg text-stone-300/90 leading-relaxed max-w-2xl font-light">
                Every photograph begins with an invitation to slow down and truly look. Rooted in Kaduna, 
                <strong className="font-semibold text-amber-200"> asd</strong> creates soulful portraiture, cultural celebration chronicles, and commercial brand imagery that captures genuine human emotion and community resonance without stiff poses or generic clichés.
              </p>

              {/* Interactive Action Points */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Explore Portfolio Story</span>
                  <ArrowDown className="h-4 w-4" />
                </a>

                <button
                  onClick={onCopyDescription}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-stone-300 hover:text-white bg-stone-900/90 hover:bg-stone-800/90 border border-stone-700/70 rounded-lg transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-amber-400" />
                      <span>Copy 400-Word Bio</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onExploreGallery}
                  className="text-sm font-medium text-stone-400 hover:text-stone-200 underline underline-offset-4 transition-colors cursor-pointer ml-1"
                >
                  View Curated Gallery
                </button>
              </div>
            </div>

            {/* Quiet artistic guarantee snippet */}
            <div className="mt-10 pt-6 border-t border-stone-800/80 flex items-center gap-3 text-xs text-stone-400">
              <span className="text-amber-400">✦</span>
              <span>Available for commissions across Kaduna State, Abuja, and northern Nigeria.</span>
            </div>
          </div>

          {/* Right Column: Large Visual Media Container with resilient fallback */}
          <div className="lg:col-span-5 flex">
            <div className="group relative w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl flex flex-col justify-end">
              <img
                src="/src/assets/images/hero_kaduna_portrait_1793264939887.jpg"
                alt="Portrait of a young northern Nigerian woman in warm Sahelian golden hour light"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback styling if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              {/* Scrim overlay for high contrast typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

              {/* Image Context & Story caption */}
              <div className="relative z-10 p-6 sm:p-7 text-stone-100">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400/90 mb-1">
                  <span>Malali Outskirts, Kaduna</span>
                  <span aria-hidden="true">·</span>
                  <span>Golden Hour Study</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-white">
                  The Golden Hour on Malali Ridge
                </h3>
                <p className="mt-1.5 text-xs text-stone-300/80 line-clamp-2">
                  Sahelian twilight light interacting with hand-dyed indigo textile, celebrating unforced serenity and northern Nigerian identity.
                </p>
                <div className="mt-3 flex items-center gap-4 text-[11px] font-mono text-stone-400 border-t border-stone-700/50 pt-2">
                  <span>85mm Prime</span>
                  <span>·</span>
                  <span>f/2.0</span>
                  <span>·</span>
                  <span>Sahelian Ambient Backlight</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Proof & Metrics Strip below the split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-stone-800/80">
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 tabular-nums">
              8+
            </div>
            <div className="mt-1 text-xs text-stone-400">
              Years documenting northern Nigerian stories
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tabular-nums">
              140+
            </div>
            <div className="mt-1 text-xs text-stone-400">
              Milestone celebrations & traditional weddings
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-100 tabular-nums">
              40+
            </div>
            <div className="mt-1 text-xs text-stone-400">
              Kaduna local enterprises & artisans elevated
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 tabular-nums">
              100%
            </div>
            <div className="mt-1 text-xs text-stone-400">
              Documentary warmth without generic clichés
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
