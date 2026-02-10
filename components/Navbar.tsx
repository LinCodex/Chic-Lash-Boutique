import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate threshold based on viewport height (Hero section)
      // Switch shortly before the hero is fully scrolled out for a smooth transition
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    // Check initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Approx fixed header height
      const elementRect = element.getBoundingClientRect();
      const elementHeight = elementRect.height;
      const viewportHeight = window.innerHeight;

      // Get absolute position relative to document
      const absoluteElementTop = elementRect.top + window.pageYOffset;

      let targetPosition;

      // Mobile Optimization:
      // If element is taller than viewport (common for Services/Contact on mobile),
      // align to top (with offset) so the user sees the start of the section.
      // Otherwise, center it in the viewport for a dramatic effect.
      if (elementHeight > viewportHeight) {
        targetPosition = absoluteElementTop - headerOffset;
      } else {
        targetPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);
      }

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'About us', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contacts', href: 'contact' },
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 transition-all duration-500 ${scrolled && !isMenuOpen ? 'bg-white shadow-sm py-4' : 'bg-pink-200/90 backdrop-blur-sm py-6'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Left Links (Desktop) */}
          <div className={`flex-1 items-center gap-8 hidden lg:flex transition-colors duration-300 ${scrolled ? 'text-gray-600' : 'text-pink-900'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] uppercase tracking-widest hover:text-pink-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center Logo - Left aligned on Mobile, Centered on Desktop */}
          <div className="flex lg:flex-1 justify-start lg:justify-center z-[110]">
            <a href="#" onClick={scrollToTop} className="group text-left md:text-center">
              <h1 className={`font-serif text-xl lg:text-3xl tracking-wide transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-gray-900' : 'text-pink-950'}`}>
                chic lash <span className="font-light italic opacity-80">boutique</span>
              </h1>
            </a>
          </div>

          {/* Right Contact & Mobile Toggle */}
          <div className={`flex-1 flex items-center justify-end gap-3 md:gap-8 transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-pink-900'}`}>

            {/* Desktop Phone */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-[10px] uppercase tracking-widest hidden lg:block hover:text-pink-600 transition-colors"
            >
              {CONTACT_INFO.displayPhone}
            </a>

            {/* Mobile Actions (Integrated Header Buttons) */}
            <div className={`flex lg:hidden items-center gap-4 ${isMenuOpen ? 'hidden' : 'flex'}`}>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label="Call Us"
                className="p-1 hover:text-pink-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </a>
              <a
                href={`sms:${CONTACT_INFO.phone}`}
                aria-label="Text Us"
                className="p-1 hover:text-pink-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Navigate"
                className="p-1 hover:text-pink-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </a>
              {/* Divider */}
              <div className="w-[1px] h-4 bg-current opacity-20 mx-1"></div>
            </div>

            {/* Mobile Menu Toggle (Hamburger) - Hidden when menu is open */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden p-1 z-[110] transition-colors duration-300 ${isMenuOpen ? 'hidden' : 'block'}`}
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[120] transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Dedicated Exit Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-4 text-gray-800 hover:text-pink-500 transition-colors rounded-full hover:bg-gray-50"
          aria-label="Close Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-3xl font-serif text-gray-900 hover:text-pink-500 hover:italic transition-all duration-300"
            >
              {link.name}
            </a>
          ))}

          <div className="w-12 h-[1px] bg-gray-200 my-4"></div>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="text-sm uppercase tracking-widest text-gray-500 hover:text-pink-500 transition-colors"
          >
            {CONTACT_INFO.displayPhone}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;