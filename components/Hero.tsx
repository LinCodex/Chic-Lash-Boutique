import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden">
      {/* Background: Solid Pink (Reverted from gradient) */}
      <div className="absolute inset-0 bg-pink-200" />

      {/* Main Image Container - Below Header, Centered Bottom */}
      <div className="absolute top-20 md:top-32 lg:top-40 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
        <img
          src="/hero3.webp"
          alt="Lash Artistry Showcase"
          className="h-full w-full object-cover md:object-contain object-center relative z-10"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* Content Overlay - Positioned tight in bottom left corner */}
      <div className="absolute bottom-0 left-0 z-20 w-full px-6 md:px-12 pb-20 md:pb-10 pointer-events-none">
        <h1 className="text-white font-sans font-bold text-6xl md:text-9xl leading-none tracking-tighter opacity-95 drop-shadow-xl -ml-[0.05em] reveal-up">
          LASH ARTISTRY
        </h1>

        {/* Description Text */}
        <div className="max-w-md text-white/95 reveal-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm md:text-base font-medium leading-snug tracking-wide text-left drop-shadow-md">
            Elevate your gaze with our premium lash services. From natural lifts to dramatic volume, we craft the perfect look for your eyes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;