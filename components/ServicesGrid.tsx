import React, { useState, useRef, useCallback, useEffect } from 'react';
import { SERVICES } from '../constants';

const ServicesGrid: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const isSliderDragging = useRef(false);
  const rafId = useRef<number>(0);

  // Direct DOM update for slider position (no React state = no re-render = no jitter)
  const updateSliderDOM = useCallback((progress: number) => {
    const pct = `${progress * 100}%`;
    if (thumbRef.current) thumbRef.current.style.left = pct;
    if (fillRef.current) fillRef.current.style.width = pct;
  }, []);

  // Sync slider with carousel scroll position
  const updateSliderFromScroll = useCallback(() => {
    if (isSliderDragging.current || !carouselRef.current) return;
    const el = carouselRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      updateSliderDOM(el.scrollLeft / maxScroll);
    });
  }, [updateSliderDOM]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateSliderFromScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', updateSliderFromScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [updateSliderFromScroll]);

  // Slider drag handlers
  const getProgressFromEvent = useCallback((clientX: number) => {
    if (!sliderTrackRef.current) return 0;
    const rect = sliderTrackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(0, Math.min(1, x / rect.width));
  }, []);

  const scrollToProgress = useCallback((progress: number) => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = progress * maxScroll;
    updateSliderDOM(progress);
  }, [updateSliderDOM]);

  const handleSliderMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isSliderDragging.current = true;
    // Disable snap during drag for smooth scrolling
    if (carouselRef.current) carouselRef.current.style.scrollSnapType = 'none';
    const progress = getProgressFromEvent(e.clientX);
    scrollToProgress(progress);

    const handleMouseMove = (ev: MouseEvent) => {
      if (!isSliderDragging.current) return;
      ev.preventDefault();
      const p = getProgressFromEvent(ev.clientX);
      scrollToProgress(p);
    };

    const handleMouseUp = () => {
      isSliderDragging.current = false;
      // Re-enable snap after drag
      if (carouselRef.current) carouselRef.current.style.scrollSnapType = 'x mandatory';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [getProgressFromEvent, scrollToProgress]);

  // Touch support for slider
  const handleSliderTouchStart = useCallback((e: React.TouchEvent) => {
    isSliderDragging.current = true;
    if (carouselRef.current) carouselRef.current.style.scrollSnapType = 'none';
    const touch = e.touches[0];
    const progress = getProgressFromEvent(touch.clientX);
    scrollToProgress(progress);

    const handleTouchMove = (ev: TouchEvent) => {
      if (!isSliderDragging.current) return;
      const t = ev.touches[0];
      const p = getProgressFromEvent(t.clientX);
      scrollToProgress(p);
    };

    const handleTouchEnd = () => {
      isSliderDragging.current = false;
      if (carouselRef.current) carouselRef.current.style.scrollSnapType = 'x mandatory';
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
  }, [getProgressFromEvent, scrollToProgress]);

  return (
    <section id="services" className="min-h-[70vh] flex flex-col justify-center pt-24 pb-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 shrink-0">
          <div className="max-w-xl">
            <span className="text-pink-500 text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Signature Treatments
            </h2>
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-widest hidden lg:block pb-2 border-b border-gray-100">
            Select a service to view details
          </p>
          <p className="text-gray-400 text-[10px] uppercase tracking-widest lg:hidden">
            Drag slider to browse
          </p>
        </div>

        {/* Desktop: Interactive Split Layout */}
        <div className="hidden lg:flex gap-8 xl:gap-16 items-stretch h-[500px] grow-0">
          {/* Left: Service Menu */}
          <div className="w-5/12 flex flex-col justify-start h-full space-y-1 overflow-y-auto pr-2">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`group cursor-pointer border-b border-gray-100 py-5 transition-all duration-300 ${activeServiceId === service.id ? 'pl-4 border-pink-200' : 'hover:pl-2'
                  }`}
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={`text-2xl font-serif transition-colors duration-300 ${activeServiceId === service.id ? 'text-pink-600 italic' : 'text-gray-900 group-hover:text-pink-400'
                    }`}>
                    {service.name}
                  </h3>
                  <span className={`text-sm font-medium transition-colors duration-300 ${activeServiceId === service.id ? 'text-pink-600' : 'text-gray-400'
                    }`}>
                    {service.price}
                  </span>
                </div>

                <div className={`grid transition-all duration-500 ease-in-out ${activeServiceId === service.id ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                  <div className="overflow-hidden">
                    <p className="text-gray-500 font-light text-sm leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-wider text-gray-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {service.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image Showcase */}
          <div className="w-7/12 h-full relative rounded-sm overflow-hidden bg-gray-50 shadow-lg">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${activeServiceId === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel View (shown below lg breakpoint) */}
        <div className="lg:hidden relative">
          {/* Cards Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[45vw] flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Image Header */}
                <div className="h-56 sm:h-64 relative w-full">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" draggable={false} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif italic">{service.name}</h3>
                  </div>
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-bold tracking-wider rounded-sm shadow-sm">
                    {service.price}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 flex flex-col gap-3 flex-grow justify-between">
                  <p className="text-gray-600 text-sm font-light leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-pink-500 font-bold pt-2 border-t border-gray-50">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {service.duration}
                  </div>
                </div>
              </div>
            ))}
            {/* Peeking spacer */}
            <div className="w-2 shrink-0"></div>
          </div>

          {/* Physical Slider Bar */}
          <div className="mt-2 px-4">
            <div
              ref={sliderTrackRef}
              onMouseDown={handleSliderMouseDown}
              onTouchStart={handleSliderTouchStart}
              className="relative w-full h-8 flex items-center cursor-pointer group"
              role="slider"
              aria-label="Service carousel slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
            >
              {/* Track background */}
              <div className="absolute inset-x-0 h-1.5 bg-pink-100 rounded-full overflow-hidden">
                {/* Filled portion - no transitions, direct DOM updates */}
                <div
                  ref={fillRef}
                  className="h-full bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"
                  style={{ width: '0%' }}
                />
              </div>
              {/* Draggable Thumb - no transitions on left, only scale hover */}
              <div
                ref={thumbRef}
                className="absolute h-6 w-6 bg-white border-2 border-pink-400 rounded-full shadow-lg -translate-x-1/2 hover:scale-125 active:scale-110"
                style={{ left: '0%' }}
              >
                <div className="absolute inset-1 bg-pink-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;