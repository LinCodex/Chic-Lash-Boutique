import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid'; // Keep for treatment-menu page logic if needed, but App uses CustomerReviews now
import CustomerReviews from './components/CustomerReviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TreatmentMenu from './pages/TreatmentMenu';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />

        {/* About Section - snap-start added here for the specific hero-to-about scroll behavior */}
        <section id="about" className="min-h-screen flex items-center justify-center pt-32 pb-32 bg-gradient-to-b from-pink-200 via-pink-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-20 relative z-10 text-center">
            <div className="max-w-3xl mx-auto space-y-16">
              <span className="text-pink-600 text-[12px] uppercase tracking-widest font-bold block">Why Choose Us</span>
              <p className="text-3xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
                We believe that <span className="text-pink-500 italic font-light">getting your lashes done</span> should be the best part of your day.
              </p>
              <div className="flex flex-col items-center gap-8">
                <div className="w-16 h-1 bg-pink-300/50 rounded-full"></div>
                <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed font-medium">
                  Our specialists are true artists. We use safe, premium products to ensure your lashes look stunning, feel weightless, and last longer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        <CustomerReviews />

        <div>
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-pink-900 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatment-menu" element={<TreatmentMenu />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;