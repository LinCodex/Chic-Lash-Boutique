import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';

const TreatmentMenu: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="min-h-screen bg-white selection:bg-pink-900 selection:text-white">
            <Navbar />

            {/* Elegant Hero Section */}
            <div className="pt-32 pb-20 bg-[#fdf2f8] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-100/50 skew-x-12 translate-x-12"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-pink-600 text-sm uppercase tracking-[0.2em] font-bold block mb-4 animate-fade-in">Our Services</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                            The <span className="italic text-pink-500 font-light">Treatment</span> Menu
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                            Experience the epitome of luxury with our premium lash treatments.
                            Each service is designed to enhance your natural beauty.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="relative">
                {/* Decorative Background Flower/Shape */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2"></div>

                <div className="container mx-auto px-6 py-20 relative z-10">

                    {/* Extensions Section */}
                    {(() => {
                        const extensionServices = SERVICES.filter(s => ['classic-set', 'hybrid-set', 'volume-set', 'mega-volume-set'].includes(s.id));
                        return extensionServices.length > 0 && (
                            <div className="mb-24">
                                <div className="flex items-end gap-4 mb-12 border-b border-pink-100 pb-4">
                                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Lash Extensions</h2>
                                    <span className="text-pink-400 italic font-serif text-xl mb-1">Full Sets</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {extensionServices.map((service, index) => (
                                        <ServiceCard key={service.id} service={service} index={index} />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

                    {/* Lifts & Tints Section */}
                    {(() => {
                        const liftServices = SERVICES.filter(s => ['lash-lift', 'lash-lift-tint', 'lash-tint'].includes(s.id));
                        return liftServices.length > 0 && (
                            <div className="mb-24">
                                <div className="flex items-end gap-4 mb-12 border-b border-pink-100 pb-4">
                                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Lifts & Tints</h2>
                                    <span className="text-pink-400 italic font-serif text-xl mb-1">Natural Enhancement</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {liftServices.map((service, index) => (
                                        <ServiceCard key={service.id} service={service} index={index} />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}

                    {/* Maintenance Section */}
                    {(() => {
                        const maintenanceServices = SERVICES.filter(s => ['classic-refill', 'volume-refill', 'lash-removal'].includes(s.id));
                        return maintenanceServices.length > 0 && (
                            <div className="mb-24">
                                <div className="flex items-end gap-4 mb-12 border-b border-pink-100 pb-4">
                                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Maintenance</h2>
                                    <span className="text-pink-400 italic font-serif text-xl mb-1">Refills & Care</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {maintenanceServices.map((service, index) => (
                                        <ServiceCard key={service.id} service={service} index={index} />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}


                </div>
            </div>

            {/* Call to Action Divider */}
            <div className="bg-pink-900 text-white py-16 text-center">
                <div className="container mx-auto px-6">
                    <p className="font-serif text-2xl md:text-3xl italic mb-6">"Beauty is being the best possible version of yourself."</p>
                    <a href="#contact" className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-pink-900 transition-all duration-300">
                        Book Your Appointment
                    </a>
                </div>
            </div>

            <div className="bg-white">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default TreatmentMenu;
