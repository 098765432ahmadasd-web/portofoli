/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Copy, Check, Mail, Phone } from 'lucide-react';

interface InquiryFormProps {
  initialConfig?: {
    serviceName: string;
    location: string;
    addons: string[];
    estimatedNGN: number;
    estimatedUSD: number;
  } | null;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ initialConfig }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Portraiture & Personal Narrative');
  const [location, setLocation] = useState('Kaduna (GRA / Barnawa)');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialConfig) {
      setProjectType(initialConfig.serviceName);
      setLocation(initialConfig.location);
      setMessage(
        `Configured via Portfolio Estimator:\n- Package: ${initialConfig.serviceName}\n- Location: ${initialConfig.location}\n- Add-ons: ${initialConfig.addons.join(', ') || 'None'}\n- Estimated Quote: ₦${initialConfig.estimatedNGN.toLocaleString()} (~$${initialConfig.estimatedUSD})\n\nAdditional notes about our vision:\n`
      );
    }
  }, [initialConfig]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inquirySummary = `*Inquiry for asd Photography (Kaduna, Nigeria)*\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCommission: ${projectType}\nLocation: ${location}\nPreferred Date: ${date || 'Flexible'}\nNotes: ${message}`;

  const handleCopyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(inquirySummary);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      setCopiedSummary(true);
    }
  };

  const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(inquirySummary)}`;
  const mailtoUrl = `mailto:098765432ahmadasd@gmail.com?subject=${encodeURIComponent(`Photography Inquiry from ${name || 'Client'}: ${projectType}`)}&body=${encodeURIComponent(inquirySummary)}`;

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono tracking-wider uppercase text-amber-400 mb-3">
            06. Connect & Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-100 tracking-tight [text-wrap:balance]">
            Let&apos;s create something timeless together.
          </h2>
          <p className="mt-4 text-base text-stone-400">
            Tell me about your milestone celebration, personal portrait vision, or business in Kaduna. Every inquiry receives a personal response within 24 hours.
          </p>
        </div>

        <div className="mt-12 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="py-8 text-center space-y-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-emerald-950/60 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-100 font-medium">
                  Inquiry Received with Gratitude
                </h3>
                <p className="mt-2 text-sm text-stone-400 max-w-md mx-auto">
                  Thank you, <span className="text-stone-200 font-medium">{name}</span>. Ahmad will review your dates and project vision for <span className="text-stone-200">{location}</span> and reach out directly at <span className="text-stone-200">{email}</span>.
                </p>
              </div>

              {/* Quick dispatch buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Direct via WhatsApp</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-200 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-lg transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send as Email</span>
                </a>

                <button
                  onClick={handleCopyInquiry}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-stone-300 hover:text-white bg-stone-900 border border-stone-700 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Copied Summary</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-stone-400" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-6 border-t border-stone-800/80">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-stone-500 hover:text-stone-300 underline cursor-pointer"
                >
                  Submit another inquiry or adjust details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Amina Bello or Ibrahim Yusuf"
                    className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. amina@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Commission Type *
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-400 text-sm cursor-pointer"
                  >
                    <option value="Portraiture & Personal Narrative">Portraiture & Personal Narrative</option>
                    <option value="Cultural Celebration & Milestone">Cultural Celebration & Milestone</option>
                    <option value="Commercial & Brand Storytelling for Kaduna Business">Commercial & Brand Storytelling for Kaduna Business</option>
                    <option value="Fine Art Print Commission / Exhibition Inquiry">Fine Art Print Commission / Exhibition Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Shoot Location / Kaduna District *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Barnawa, Malali, GRA, Kasuwan Barci"
                    className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-2">
                    Preferred Date or Timeframe
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-400 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-2">
                  Tell Me About Your Story & Vision *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your gathering, personal portrait idea, or local Kaduna business needs..."
                  className="w-full px-4 py-2.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-100 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 text-sm"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-800">
                <div className="text-xs text-stone-500 font-mono">
                  Direct Response Guarantee: &lt; 24h
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Submit Commission Request</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
