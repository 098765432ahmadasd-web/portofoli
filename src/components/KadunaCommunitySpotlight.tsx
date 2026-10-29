/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Sun, Building2, HeartHandshake, MapPin, Quote } from 'lucide-react';

export const KadunaCommunitySpotlight: React.FC = () => {
  return (
    <section id="kaduna" className="py-20 lg:py-28 border-b border-stone-800/60">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono tracking-wider uppercase text-amber-400 mb-3">
            04. Community Engagement & Northern Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-100 tracking-tight [text-wrap:balance]">
            Rooted in Kaduna. Inspired by our people, light, and enterprise.
          </h2>
          <p className="mt-4 text-base text-stone-400">
            Why Kaduna matters to the &quot;asd&quot; aesthetic: from the warm Sahelian Harmattan air to the ambitious local businesses shaping the future of northern Nigeria.
          </p>
        </div>

        {/* 3 Pillars of Community Connection */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 mb-5">
                <Sun className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-100 mb-3">
                The Sahelian & Harmattan Light
              </h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed">
                Kaduna offers a singular atmosphere. The diffused amber light of dry season afternoons and the soft winter Harmattan dust create a natural cinematic palette that artificial studio strobes can never replicate.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800/80 text-xs font-mono text-amber-400/90">
              Natural Lighting Philosophy
            </div>
          </div>

          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 mb-5">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-100 mb-3">
                Promoting Local Enterprise
              </h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed">
                Whether photographing ceramic studios in Barnawa, textile weavers in Kasuwan Barci, or modern coffee bars, &quot;asd&quot; offers special collaborative rates to help Kaduna founders compete on a global visual standard.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800/80 text-xs font-mono text-amber-400/90">
              Local Business Partnership
            </div>
          </div>

          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 mb-5">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-100 mb-3">
                Cultural Reverence & Respect
              </h3>
              <p className="text-sm text-stone-400 font-light leading-relaxed">
                We know how to navigate the social etiquette of northern Nigerian celebrations. We treat family elders with utmost honor and document sacred moments without intruding upon solemn traditions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-800/80 text-xs font-mono text-amber-400/90">
              Ethical Documentary Practice
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Attributable Testimonials from Kaduna Clients */}
        <div className="mt-16 pt-12 border-t border-stone-800/80">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-8">
            Voices from Our Community:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-stone-950 border border-stone-800/90 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-6 w-6 text-amber-400/40 mb-4" />
                  <p className="text-sm text-stone-300 font-light leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-800/80">
                  <div className="font-medium text-stone-200 text-sm">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    {t.role} · {t.organizationOrContext}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono text-amber-400/80">
                    <MapPin className="h-3 w-3" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
