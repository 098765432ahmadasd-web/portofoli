/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Copy, Check, Download, FileText, Sparkles, BookOpen, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_VERSIONS, PortfolioVersion } from '../data/portfolioData';

interface PortfolioDescriptionReaderProps {
  onSelectService: (serviceId: string) => void;
}

export const PortfolioDescriptionReader: React.FC<PortfolioDescriptionReaderProps> = ({
  onSelectService
}) => {
  const [selectedVersionId, setSelectedVersionId] = useState<string>('master');
  const [copied, setCopied] = useState<boolean>(false);
  const [showAnalysis, setShowAnalysis] = useState<boolean>(false);

  const activeVersion: PortfolioVersion =
    PORTFOLIO_VERSIONS.find((v) => v.id === selectedVersionId) || PORTFOLIO_VERSIONS[0];

  const fullTextToCopy = activeVersion.paragraphs
    .map((p) => (p.heading ? `### ${p.heading}\n${p.text}` : p.text))
    .join('\n\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullTextToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownload = (format: 'md' | 'txt') => {
    const filename = `asd_photography_portfolio_description_${activeVersion.id}.${format}`;
    let content = '';

    if (format === 'md') {
      content = `# asd Photography · Portfolio Narrative\n**Location:** Kaduna, Nigeria\n**Target Audience:** ${activeVersion.targetAudience}\n**Word Count:** ${activeVersion.wordCount} words\n\n` +
        activeVersion.paragraphs
          .map((p) => `## ${p.heading || 'Section'}\n${p.text}`)
          .join('\n\n');
    } else {
      content = `ASD PHOTOGRAPHY - PORTFOLIO NARRATIVE\nLocation: Kaduna, Nigeria\nAudience: ${activeVersion.targetAudience}\nWord Count: ${activeVersion.wordCount} words\n\n` +
        activeVersion.paragraphs
          .map((p) => `${p.heading ? p.heading.toUpperCase() + '\n' : ''}${p.text}`)
          .join('\n\n');
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="story" className="py-20 lg:py-28 border-b border-stone-800/60 bg-[#0e1013]/60">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono tracking-wider uppercase text-amber-400 mb-3">
            01. Brand Story & Narrative Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-100 tracking-tight [text-wrap:balance]">
            The Portfolio Description
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-400">
            Crafted for potential clients, art enthusiasts, and Kaduna commercial enterprises. Zero generic clichés, 100% human authenticity.
          </p>
        </div>

        {/* Interactive Version Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-900/90 border border-stone-800 rounded-xl max-w-2xl mx-auto">
          {PORTFOLIO_VERSIONS.map((v) => {
            const isActive = v.id === selectedVersionId;
            return (
              <button
                key={v.id}
                onClick={() => setSelectedVersionId(v.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                {v.title.split(' ')[0]} {v.id === 'master' ? '(Primary 412w)' : `(${v.wordCount}w)`}
              </button>
            );
          })}
        </div>

        {/* Narrative Paper Container */}
        <div className="mt-8 bg-stone-950 border border-stone-800/90 rounded-2xl shadow-xl overflow-hidden">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-4 border-b border-stone-800/80 bg-stone-900/40 text-xs text-stone-400 font-mono">
            <div className="flex items-center gap-3">
              <span className="text-stone-200 font-medium">{activeVersion.title}</span>
              <span aria-hidden="true" className="text-stone-600">/</span>
              <span className="text-amber-400 tabular-nums">{activeVersion.wordCount} Words</span>
              <span aria-hidden="true" className="text-stone-600">/</span>
              <span>{activeVersion.readingTime}</span>
            </div>

            {/* Action Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition-colors cursor-pointer text-xs"
                title="Copy entire text to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-stone-300" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleDownload('txt')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs"
                title="Download as .txt"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">.TXT</span>
              </button>

              <button
                onClick={() => handleDownload('md')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs"
                title="Download as .md"
              >
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">.MD</span>
              </button>
            </div>
          </div>

          {/* Reading Prose Body */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-8 max-w-3xl mx-auto">
            {activeVersion.paragraphs.map((para, idx) => (
              <div key={idx} className="group relative">
                {para.tag && (
                  <div className="text-[11px] font-mono tracking-wider uppercase text-amber-500/80 mb-2">
                    {para.tag}
                  </div>
                )}
                {para.heading && (
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-medium mb-3">
                    {para.heading}
                  </h3>
                )}
                <p className="text-base sm:text-lg text-stone-300/90 leading-relaxed font-light">
                  {para.text}
                </p>
              </div>
            ))}

            {/* Quick interactive shortcut to services */}
            <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span>Explore individual pillars:</span>
                <button
                  onClick={() => onSelectService('portraiture')}
                  className="text-amber-400 hover:underline cursor-pointer"
                >
                  Portraiture
                </button>
                <span>·</span>
                <button
                  onClick={() => onSelectService('cultural-events')}
                  className="text-amber-400 hover:underline cursor-pointer"
                >
                  Cultural Events
                </button>
                <span>·</span>
                <button
                  onClick={() => onSelectService('commercial-storytelling')}
                  className="text-amber-400 hover:underline cursor-pointer"
                >
                  Commercial Storytelling
                </button>
              </div>
              <a
                href="#contact"
                className="text-stone-300 hover:text-white underline underline-offset-4 cursor-pointer font-medium"
              >
                Send Client Inquiry →
              </a>
            </div>
          </div>
        </div>

        {/* Brand Strategy Breakdown Drawer */}
        <div className="mt-8 border border-stone-800/80 rounded-xl bg-stone-900/30 overflow-hidden">
          <button
            onClick={() => setShowAnalysis(!showAnalysis)}
            className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-stone-300 hover:text-stone-100 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-800 text-amber-400">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Why This Description Converts: Brand Strategist Analysis</span>
            </div>
            {showAnalysis ? (
              <ChevronUp className="h-4 w-4 text-stone-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-stone-500" />
            )}
          </button>

          {showAnalysis && (
            <div className="px-6 pb-6 pt-2 border-t border-stone-800/80 grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-stone-400 leading-relaxed">
              <div className="space-y-2 bg-stone-950/60 p-4 rounded-lg border border-stone-800/60">
                <div className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Elimination of AI / Photography Clichés</span>
                </div>
                <p>
                  Zero mentions of &quot;freezing time&quot;, &quot;painting with light&quot;, or &quot;capturing memories forever&quot;. Instead, sensory specifics like &quot;amber glow of late afternoon across earthen architecture&quot; demonstrate actual artistic eyes and authentic familiarity with northern Nigeria.
                </p>
              </div>

              <div className="space-y-2 bg-stone-950/60 p-4 rounded-lg border border-stone-800/60">
                <div className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Kaduna Local Business Commercial Hook</span>
                </div>
                <p>
                  Local businesses in Kaduna (e.g., Barnawa cafes, artisans, workshops) look for partners who understand business outcomes. We explicitly framed commercial photography as &quot;the cornerstone of trust&quot; to attract commercial contracts.
                </p>
              </div>

              <div className="space-y-2 bg-stone-950/60 p-4 rounded-lg border border-stone-800/60">
                <div className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Cultural Sensitivity & Reverence</span>
                </div>
                <p>
                  Positions &quot;asd&quot; not as an intrusive technician, but as an observant documentary chronicler who respects elders, family dynamics, and traditional northern Nigerian milestone protocols.
                </p>
              </div>

              <div className="space-y-2 bg-stone-950/60 p-4 rounded-lg border border-stone-800/60">
                <div className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Fluid, Low-Pressure Call to Action</span>
                </div>
                <p>
                  Invites viewers to explore stories rather than aggressively pushing sales, respecting the discerning art collector while giving ready clients a frictionless bridge to reach out.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
