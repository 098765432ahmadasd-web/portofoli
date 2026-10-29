/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioDescriptionReader } from './components/PortfolioDescriptionReader';
import { ServicesShowcase } from './components/ServicesShowcase';
import { GalleryLightbox } from './components/GalleryLightbox';
import { KadunaCommunitySpotlight } from './components/KadunaCommunitySpotlight';
import { InvestmentCalculator } from './components/InvestmentCalculator';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';
import { PORTFOLIO_VERSIONS, ServiceItem } from './data/portfolioData';

export default function App() {
  const [heroCopied, setHeroCopied] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('portraiture');
  const [inquiryConfig, setInquiryConfig] = useState<{
    serviceName: string;
    location: string;
    addons: string[];
    estimatedNGN: number;
    estimatedUSD: number;
  } | null>(null);

  const handleCopyMasterBio = async () => {
    const master = PORTFOLIO_VERSIONS.find((v) => v.id === 'master') || PORTFOLIO_VERSIONS[0];
    const text = master.paragraphs
      .map((p) => (p.heading ? `${p.heading}\n${p.text}` : p.text))
      .join('\n\n');

    try {
      await navigator.clipboard.writeText(text);
      setHeroCopied(true);
      setTimeout(() => setHeroCopied(false), 2500);
    } catch {
      setHeroCopied(true);
      setTimeout(() => setHeroCopied(false), 2500);
    }
  };

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromAnywhere = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookServiceDirect = (service: ServiceItem) => {
    setInquiryConfig({
      serviceName: service.title,
      location: 'Kaduna, Nigeria',
      addons: [],
      estimatedNGN: service.id === 'portraiture' ? 85000 : service.id === 'cultural-events' ? 250000 : 180000,
      estimatedUSD: service.id === 'portraiture' ? 60 : service.id === 'cultural-events' ? 180 : 130
    });
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-stone-100 flex flex-col selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onCopyDescription={handleCopyMasterBio}
          copied={heroCopied}
          onExploreGallery={() => {
            const galleryElem = document.getElementById('gallery');
            if (galleryElem) galleryElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* The 400-Word Portfolio Description Core Showcase */}
        <PortfolioDescriptionReader
          onSelectService={handleSelectServiceFromAnywhere}
        />

        {/* 3 Core Services Spotlight */}
        <ServicesShowcase
          selectedServiceId={selectedServiceId}
          onSelectService={setSelectedServiceId}
          onBookService={handleBookServiceDirect}
        />

        {/* Curated Gallery with Lightbox and EXIF Details */}
        <GalleryLightbox />

        {/* Kaduna Connection & Testimonials */}
        <KadunaCommunitySpotlight />

        {/* Interactive Investment Estimator */}
        <InvestmentCalculator
          onConfigureInquiry={(cfg) => setInquiryConfig(cfg)}
        />

        {/* Booking & Inquiry Form */}
        <InquiryForm initialConfig={inquiryConfig} />
      </main>

      {/* Clean quiet Footer */}
      <Footer />
    </div>
  );
}
