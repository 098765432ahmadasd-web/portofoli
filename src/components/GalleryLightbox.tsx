/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Maximize2, MapPin, Camera, Info } from 'lucide-react';

export const GalleryLightbox: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'portraits' | 'cultural' | 'commercial'>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const closeLightbox = () => {
    setActiveItemIndex(null);
  };

  const nextImage = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  const currentModalItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 border-b border-stone-800/60 bg-[#0e1013]/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-amber-400 mb-3">
              03. Curated Visual Proof
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-100 tracking-tight [text-wrap:balance]">
              Kaduna light, cultural memory, and everyday grandeur.
            </h2>
          </div>

          {/* Functional filter segmented buttons */}
          <div className="flex items-center gap-1 p-1 bg-stone-900 border border-stone-800 rounded-lg shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter('portraits')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'portraits'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Portraits
            </button>
            <button
              onClick={() => setFilter('cultural')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'cultural'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Cultural Events
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filter === 'commercial'
                  ? 'bg-amber-400 text-stone-950 font-semibold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Kaduna Enterprise
            </button>
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 hover:border-stone-700 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 sm:h-96 overflow-hidden bg-stone-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                
                {/* Expand overlay button */}
                <div className="absolute top-4 right-4 h-9 w-9 rounded-lg bg-stone-900/80 backdrop-blur-sm border border-stone-700/60 flex items-center justify-center text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                  <span className="font-mono text-amber-400">{item.categoryLabel}</span>
                  <div className="flex items-center gap-1 text-stone-400">
                    <MapPin className="h-3 w-3 text-stone-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-stone-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-400 font-light leading-relaxed line-clamp-2">
                  {item.story}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>{item.technicalExif.lens}</span>
                  <span>{item.technicalExif.aperture}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Fullscreen Lightbox Modal */}
        {currentModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Modal Body container */}
            <div
              className="relative w-full max-w-5xl max-h-[90vh] bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-stone-900/90 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next navigation */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-stone-900/80 border border-stone-700 text-stone-200 hover:text-white hover:bg-stone-800 flex items-center justify-center transition-colors cursor-pointer md:right-[calc(380px+12px)]"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Left/Main: Full Image View */}
              <div className="flex-1 min-h-[300px] sm:min-h-[460px] max-h-[60vh] md:max-h-[85vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={currentModalItem.image}
                  alt={currentModalItem.title}
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Right: Curatorial & Technical Sidebar */}
              <div className="w-full md:w-[380px] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-800 overflow-y-auto max-h-[40vh] md:max-h-[85vh] bg-stone-950">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span>{currentModalItem.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {currentModalItem.title}
                  </h3>
                  <div className="text-xs text-stone-400 mt-1">
                    asd Photography Archive · Kaduna Series
                  </div>

                  <div className="mt-5 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                    {currentModalItem.story}
                  </div>

                  {/* Technical EXIF specifications */}
                  <div className="mt-6 pt-5 border-t border-stone-800">
                    <div className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-3 flex items-center gap-1.5">
                      <Camera className="h-3.5 w-3.5 text-amber-400" />
                      <span>Technical Camera & Light EXIF:</span>
                    </div>
                    <div className="space-y-2 text-xs font-mono text-stone-400">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Lens:</span>
                        <span className="text-stone-300">{currentModalItem.technicalExif.lens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Focal Length:</span>
                        <span className="text-stone-300">{currentModalItem.technicalExif.focalLength}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Aperture:</span>
                        <span className="text-stone-300">{currentModalItem.technicalExif.aperture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Lighting Setup:</span>
                        <span className="text-stone-300 text-right">{currentModalItem.technicalExif.lighting}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 text-[11px] font-mono text-stone-500 flex justify-between">
                  <span>Image {activeItemIndex !== null ? activeItemIndex + 1 : 1} of {filteredItems.length}</span>
                  <span>Use ← → to navigate</span>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};
