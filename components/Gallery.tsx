import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Create 3 sets of items for seamless infinite scroll
  const extendedItems = [
    ...GALLERY_ITEMS.map(item => ({ ...item, uniqueKey: `${item.id}-set1` })),
    ...GALLERY_ITEMS.map(item => ({ ...item, uniqueKey: `${item.id}-set2` })),
    ...GALLERY_ITEMS.map(item => ({ ...item, uniqueKey: `${item.id}-set3` })),
  ];

  // Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Initialize scroll position to the middle (second) set
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const timer = setTimeout(() => {
        const oneThird = container.scrollWidth / 3;
        if (container.scrollLeft < 50) {
          container.scrollLeft = oneThird;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  // Debounced boundary check — only repositions when scrolling has STOPPED
  // This prevents jumping during smooth scroll animations
  const handleScrollEvent = () => {
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth;
      const oneSetWidth = totalWidth / 3;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= oneSetWidth * 2) {
        container.scrollLeft = currentScroll - oneSetWidth;
      } else if (currentScroll <= 10) {
        container.scrollLeft = currentScroll + oneSetWidth;
      }
    }, 150);
  };

  const openLightbox = (extendedIndex: number) => {
    // Map extended index back to original 0...N range
    const originalIndex = extendedIndex % GALLERY_ITEMS.length;
    setLightboxIndex(originalIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'next' | 'prev', e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      // Circular navigation logic
      if (direction === 'next') {
        return (prev + 1) % GALLERY_ITEMS.length;
      } else {
        return (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      }
    });
  };

  // Handle Swipe Gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    // Inverted logic per user request:
    // Swipe Left (positive distance) -> Previous Image
    if (distance > minSwipeDistance) {
      navigateLightbox('prev');
    }
    // Swipe Right (negative distance) -> Next Image
    if (distance < -minSwipeDistance) {
      navigateLightbox('next');
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;

      if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="min-h-[60vh] flex flex-col justify-center pt-24 pb-20 bg-pink-50/30 border-y border-pink-100/50">
      <div className="container mx-auto px-6 md:px-12 relative">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-16">
          <span className="text-pink-500 text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">Showcase</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-pink-200 rounded-full"></div>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest md:hidden animate-pulse mt-6">
            Swipe to explore →
          </p>
        </div>

        {/* Gallery Container - px padding creates room for nav buttons */}
        <div className="relative group/gallery mx-auto max-w-6xl px-10 md:px-14 lg:px-0">

          {/* Desktop Navigation Buttons - outside carousel */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-1 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white text-gray-800 shadow-xl border border-pink-100 opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 hover:scale-110 hover:text-pink-600 hover:border-pink-200"
            aria-label="Scroll Left"
          >
            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-1 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white text-gray-800 shadow-xl border border-pink-100 opacity-0 group-hover/gallery:opacity-100 transition-all duration-300 hover:scale-110 hover:text-pink-600 hover:border-pink-200"
            aria-label="Scroll Right"
          >
            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Content Area: Horizontal Scroll on Mobile (-mx-6 px-6 to bleed to edge) */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScrollEvent}
            className="flex overflow-x-auto gap-3 pb-6 md:gap-6 md:pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {extendedItems.map((item, index) => (
              <div
                key={item.uniqueKey}
                className="
                          relative group overflow-hidden rounded-sm shadow-sm cursor-zoom-in aspect-[3/4] md:shadow-md
                          shrink-0 snap-center
                          w-[65vw] sm:w-[45vw] md:w-[calc(33.333%-16px)]
                        "
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay (Visible on Hover for Desktop, always slightly visible gradient for mobile text contrast) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0" />

                {/* Mobile: Simple gradient always on */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 md:hidden" />

                <div className="absolute bottom-0 left-0 w-full p-3 md:p-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-pink-200 md:text-pink-300 text-[8px] md:text-[10px] uppercase tracking-widest font-bold block mb-0.5 md:mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-sm md:text-xl italic truncate">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Lightbox Overlay */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center backdrop-blur-sm animate-fade-in touch-none"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[160] text-white/70 hover:text-white transition-colors p-2 bg-black/40 rounded-full backdrop-blur-md"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Previous Button (Hidden on small mobile to encourage swipe, visible on larger screens) */}
            <button
              onClick={(e) => navigateLightbox('prev', e)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full group z-[160] hidden xs:block"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Main Image */}
            <div
              className="w-full max-w-[95vw] md:max-w-5xl px-2 relative flex flex-col items-center pointer-events-none"
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-h-[70vh] md:max-h-[85vh] w-auto object-contain shadow-2xl rounded-sm pointer-events-auto select-none"
                onClick={(e) => e.stopPropagation()}
                draggable="false"
                loading="lazy"
              />
              <div className="mt-4 text-center text-white pointer-events-auto">
                <span className="text-pink-400 text-xs uppercase tracking-widest block mb-1">{GALLERY_ITEMS[lightboxIndex].category}</span>
                <p className="text-xl font-serif italic">{GALLERY_ITEMS[lightboxIndex].title}</p>
                <p className="text-white/40 text-[10px] mt-2 md:hidden">Swipe to navigate</p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => navigateLightbox('next', e)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full group z-[160] hidden xs:block"
              aria-label="Next image"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 text-white/50 text-xs tracking-widest uppercase">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;