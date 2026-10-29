/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CORE_SERVICES, ServiceItem } from '../data/portfolioData';
import { Check, Clock, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface ServicesShowcaseProps {
  selectedServiceId: string;
  onSelectService: (id: string) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  selectedServiceId,
  onSelectService,
  onBookService
}) => {
  const [activeTabId, setActiveTabId] = useState<string>(selectedServiceId || CORE_SERVICES[0].id);

  const currentService =
    CORE_SERVICES.find((s) => s.id === activeTabId) || CORE_SERVICES[0];

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-stone-800/60">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono tracking-wider uppercase text-amber-400 mb-3">
            02. Core Service Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-100 tracking-tight [text-wrap:balance]">
            Tailored visual storytelling for people, celebrations, and enterprise.
          </h2>
          <p className="mt-4 text-base text-stone-400 max-w-2xl">
            Each commission is approached with an unhurried artistic vision, deep technical command of natural light, and genuine respect for Kaduna&apos;s cultural nuances.
          </p>
        </div>

        {/* 3-Tab Segmented Selector (Buttons with click handlers) */}
        <div className="mt-10 flex flex-wrap gap-2 p-1 bg-stone-900 border border-stone-800 rounded-xl max-w-3xl">
          {CORE_SERVICES.map((s, idx) => {
            const isActive = s.id === activeTabId;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveTabId(s.id);
                  onSelectService(s.id);
                }}
                className={`flex-1 min-w-[200px] text-left px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-800 text-stone-100 shadow-sm border border-stone-700/60'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
                }`}
              >
                <div className="text-[11px] font-mono text-amber-400/90 mb-0.5">
                  0{idx + 1}. Pillar
                </div>
                <div className="text-sm font-semibold truncate">{s.title.split('&')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Feature Container (2-Column Balanced Card) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-10 items-stretch">
          {/* Left Column: Media & Story Anchor */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="group relative w-full h-[340px] sm:h-[400px] rounded-xl overflow-hidden bg-stone-900 border border-stone-800/80">
              <img
                src={currentService.image}
                alt={currentService.alt}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-stone-300">
                <span className="text-amber-400">asd portfolio capture</span>
                <span className="mx-2">·</span>
                <span>{currentService.title}</span>
              </div>
            </div>

            {/* Quick Context Quote */}
            <div className="mt-6 p-4 rounded-xl bg-stone-900/40 border border-stone-800/60 text-xs text-stone-300 leading-relaxed font-light">
              <span className="text-amber-400 font-serif text-lg leading-none mr-1.5">“</span>
              {currentService.overview}
            </div>
          </div>

          {/* Right Column: Specifications & Deliverables */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                Service Overview
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-100">
                {currentService.title}
              </h3>
              <p className="mt-2 text-sm text-stone-400 font-light leading-relaxed">
                {currentService.subtitle}
              </p>

              {/* Technical approach & Kaduna relevance */}
              <div className="mt-6 space-y-4 text-xs sm:text-sm text-stone-300">
                <div>
                  <div className="font-medium text-stone-200 mb-1 flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    <span>Lighting & Narrative Approach:</span>
                  </div>
                  <p className="text-stone-400 pl-5.5 leading-relaxed font-light">
                    {currentService.approach}
                  </p>
                </div>

                <div>
                  <div className="font-medium text-stone-200 mb-1 flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" />
                    <span>Kaduna Community Context:</span>
                  </div>
                  <p className="text-stone-400 pl-5.5 leading-relaxed font-light">
                    {currentService.kadunaRelevance}
                  </p>
                </div>
              </div>

              {/* Deliverables checklist */}
              <div className="mt-6 pt-6 border-t border-stone-800">
                <div className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-3">
                  Included in Every Commission:
                </div>
                <div className="space-y-2">
                  {currentService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Turnaround & Action CTA */}
            <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>Turnaround: {currentService.turnaround}</span>
              </div>

              <button
                onClick={() => onBookService(currentService)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Request {currentService.title.split(' ')[0]} Shoot</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
