/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PACKAGES } from '../data/portfolioData';
import { Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface InvestmentCalculatorProps {
  onConfigureInquiry: (config: {
    serviceName: string;
    location: string;
    addons: string[];
    estimatedNGN: number;
    estimatedUSD: number;
  }) => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({
  onConfigureInquiry
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('portrait');
  const [selectedLocation, setSelectedLocation] = useState<string>('Barnawa / GRA');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');

  const selectedPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];

  const locationFees: Record<string, { ngn: number; usd: number }> = {
    'Barnawa / GRA': { ngn: 0, usd: 0 },
    'Malali / Millennium City': { ngn: 5000, usd: 4 },
    'Kaduna Central / Kasuwan Barci': { ngn: 0, usd: 0 },
    'Outside Kaduna (Abuja / Zaria / Kano)': { ngn: 45000, usd: 35 }
  };

  const addonOptions = [
    {
      id: 'fine-art-prints',
      name: 'Custom Archival Fine-Art Print Box (10 prints)',
      ngn: 35000,
      usd: 25
    },
    {
      id: 'second-shooter',
      name: 'Second Documentary Shooter (Wider Coverage)',
      ngn: 60000,
      usd: 45
    },
    {
      id: 'express-delivery',
      name: 'Expedited 48-Hour Highlight Delivery',
      ngn: 25000,
      usd: 18
    }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let ngn = selectedPackage.priceNGN + (locationFees[selectedLocation]?.ngn || 0);
    let usd = selectedPackage.priceUSD + (locationFees[selectedLocation]?.usd || 0);

    selectedAddons.forEach((addonId) => {
      const addon = addonOptions.find((a) => a.id === addonId);
      if (addon) {
        ngn += addon.ngn;
        usd += addon.usd;
      }
    });

    return { ngn, usd };
  };

  const total = calculateTotal();

  const handleApplyToBooking = () => {
    onConfigureInquiry({
      serviceName: selectedPackage.name,
      location: selectedLocation,
      addons: selectedAddons.map(
        (id) => addonOptions.find((a) => a.id === id)?.name || id
      ),
      estimatedNGN: total.ngn,
      estimatedUSD: total.usd
    });

    // Scroll to contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 border-b border-stone-800/60 bg-[#0e1013]/50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono tracking-wider uppercase text-amber-400 mb-3">
            05. Transparent Investment Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-100 tracking-tight [text-wrap:balance]">
            Simple, honest pricing for individuals and businesses.
          </h2>
          <p className="mt-4 text-base text-stone-400">
            Tailor a photography package to your needs in Kaduna or beyond. No hidden fees, clear deliverables, and commercial usage rights included for business commissions.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="mt-8 flex items-center justify-end gap-2 text-xs font-mono text-stone-400">
          <span>Display Currency:</span>
          <div className="flex p-0.5 bg-stone-900 border border-stone-800 rounded-md">
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                currency === 'NGN' ? 'bg-amber-400 text-stone-950 font-bold' : 'hover:text-stone-200'
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                currency === 'USD' ? 'bg-amber-400 text-stone-950 font-bold' : 'hover:text-stone-200'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-8">
            {/* Step 1: Package Selection */}
            <div>
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-3">
                1. Select Commission Type
              </div>
              <div className="space-y-3">
                {PACKAGES.map((pkg) => {
                  const isSelected = pkg.id === selectedPackageId;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-amber-400 bg-stone-900/90'
                          : 'border-stone-800 hover:border-stone-700 bg-stone-900/30'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-stone-200 text-sm">{pkg.name}</div>
                        <div className="text-xs text-stone-400 mt-0.5">{pkg.duration} · {pkg.idealFor}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-sm font-semibold text-amber-400 font-mono tabular-nums">
                          {currency === 'NGN'
                            ? `₦${pkg.priceNGN.toLocaleString()}`
                            : `$${pkg.priceUSD.toLocaleString()}`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Location */}
            <div>
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-3">
                2. Shoot Location
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Object.keys(locationFees).map((loc) => {
                  const isSelected = selectedLocation === loc;
                  const fee = locationFees[loc];
                  return (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`text-left p-3 rounded-lg border text-xs transition-colors cursor-pointer ${
                        isSelected
                          ? 'border-amber-400 bg-stone-900 text-stone-100 font-medium'
                          : 'border-stone-800 bg-stone-900/30 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      <div className="truncate">{loc}</div>
                      <div className="text-[11px] font-mono text-stone-500 mt-1">
                        {fee.ngn === 0
                          ? 'Standard local coverage'
                          : currency === 'NGN'
                          ? `+₦${fee.ngn.toLocaleString()} travel`
                          : `+$${fee.usd} travel`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <div className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-3">
                3. Optional Fine-Art & Production Add-ons
              </div>
              <div className="space-y-2">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border flex items-center justify-between text-xs cursor-pointer transition-colors ${
                        isChecked
                          ? 'border-amber-400/80 bg-stone-900/80 text-stone-200'
                          : 'border-stone-800 bg-stone-900/20 text-stone-400 hover:text-stone-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-amber-400 border-amber-400 text-stone-950'
                              : 'border-stone-700'
                          }`}
                        >
                          {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span>{addon.name}</span>
                      </div>
                      <span className="font-mono text-stone-400 tabular-nums shrink-0">
                        {currency === 'NGN'
                          ? `+₦${addon.ngn.toLocaleString()}`
                          : `+$${addon.usd}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Summary Column */}
          <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="text-xs font-mono uppercase text-amber-400 tracking-wider flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              <span>Investment Breakdown</span>
            </div>

            <div className="space-y-4 text-xs text-stone-300 border-b border-stone-800 pb-6">
              <div className="flex justify-between">
                <span className="text-stone-400">Selected Package:</span>
                <span className="font-medium text-stone-200 text-right">{selectedPackage.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Location:</span>
                <span className="text-stone-200 text-right">{selectedLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Deliverables:</span>
                <span className="text-stone-300 text-right max-w-[200px]">{selectedPackage.deliverables}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-stone-400">Add-ons ({selectedAddons.length}):</span>
                  <span className="text-amber-400/90 text-right">Included</span>
                </div>
              )}
            </div>

            {/* Total Price Display */}
            <div>
              <div className="text-xs text-stone-500 font-mono">Estimated Investment</div>
              <div className="mt-1 text-3xl sm:text-4xl font-serif font-bold text-amber-400 font-mono tabular-nums">
                {currency === 'NGN'
                  ? `₦${total.ngn.toLocaleString()}`
                  : `$${total.usd.toLocaleString()}`}
              </div>
              <p className="mt-1.5 text-[11px] text-stone-400">
                Includes full post-processing, color grading, and secure high-res cloud gallery download.
              </p>
            </div>

            {/* Apply Button */}
            <button
              onClick={handleApplyToBooking}
              className="w-full py-3 px-4 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Transfer to Booking Inquiry Form</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Quiet Guarantee */}
            <div className="flex items-center gap-2 text-[11px] text-stone-400 pt-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Transparent agreement · 50% deposit secures session date in Kaduna.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
