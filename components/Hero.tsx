import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden">
      {/* Background: Solid Pink (Reverted from gradient) */}
      <div className="absolute inset-0 bg-pink-200" />

      {/* Main Image Container - Below Header, Centered Bottom */}
      <div className="absolute top-16 md:top-20 lg:top-28 left-0 right-0 bottom-0 flex items-end justify-center pointer-events-none">
        <img
          src="/Adobe Express - file.webp"
          alt="Manicure Showcase"
          className="h-full w-full object-cover lg:object-contain object-bottom relative z-10"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* Content Overlay - Positioned tight in bottom left corner */}
      <div className="absolute bottom-0 left-0 z-20 w-full px-6 md:px-12 pb-20 md:pb-10 pointer-events-none">
        <div className="flex flex-col gap-1 md:gap-2 items-start text-left max-w-lg pointer-events-auto">
          {/* Typography */}
          <h1 className="text-white font-sans font-bold text-6xl md:text-9xl leading-none tracking-tighter opacity-95 drop-shadow-xl -ml-[0.05em] reveal-up">
            MANICURE
          </h1>

          {/* Description Text */}
          <div className="max-w-md text-white/95 reveal-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm md:text-base font-medium leading-snug tracking-wide text-left drop-shadow-md">
              Treat your nails to the ultimate care with our professional manicure service.
              We nourish and shape your nails, leaving them smooth, healthy, and beautifully polished.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;