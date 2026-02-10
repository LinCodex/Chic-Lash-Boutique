import React from 'react';
import { CONTACT_INFO, BUSINESS_HOURS } from '../constants';

const Contact: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`;
  const smsUrl = `sms:${CONTACT_INFO.phone}`;
  const telUrl = `tel:${CONTACT_INFO.phone}`;

  return (
    <section id="contact" className="flex flex-col justify-center pt-24 pb-20 bg-white min-h-[60vh]">
      <div className="container mx-auto px-6 md:px-20 h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

          <div className="space-y-8 lg:space-y-12">
            <div className="relative">
              <h4 className="text-pink-500 uppercase tracking-widest text-xs mb-4 font-bold">Come Say Hi</h4>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Find Us & <br />
                <span className="italic font-light text-pink-400">Get in Touch</span>
              </h2>
            </div>

            <div className="space-y-6 lg:space-y-8 pl-2">
              {/* Address */}
              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pink-50 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-pink-100 transition-all duration-300">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-bold">Address</p>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg text-gray-700 group-hover:text-pink-600 transition-colors block max-w-xs leading-relaxed">
                    {CONTACT_INFO.address}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 items-start group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pink-50 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-pink-100 transition-all duration-300">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-bold">Phone</p>
                  <a href={telUrl} className="text-base lg:text-lg text-gray-700 group-hover:text-pink-600 transition-colors">
                    {CONTACT_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-pink-50 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-bold">Opening Hours</p>
                  <div className="grid grid-cols-1 gap-1">
                    {BUSINESS_HOURS.map((item) => (
                      <div key={item.day} className="flex justify-between items-center text-sm max-w-xs border-b border-gray-50 last:border-0 pb-1 last:pb-0">
                        <span className="font-medium text-gray-900 w-24">{item.day}</span>
                        <span className={`text-gray-600 ${item.hours === 'Closed' ? 'text-pink-400 italic' : ''}`}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Polished Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 text-gray-400 group-hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-900">Navigate</span>
                <span className="text-[10px] text-gray-400 mt-1">Get Directions</span>
              </a>

              <a
                href={telUrl}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 text-gray-400 group-hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-900">Call Us</span>
                <span className="text-[10px] text-gray-400 mt-1">Book Now</span>
              </a>

              <a
                href={smsUrl}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-pink-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-3 text-gray-400 group-hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                </div>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-900">Text Us</span>
                <span className="text-[10px] text-gray-400 mt-1">Questions?</span>
              </a>
            </div>
          </div>

          <div className="h-[300px] lg:h-[500px] rounded-[30px] overflow-hidden shadow-2xl order-first lg:order-last relative group">
            <div className="absolute inset-0 border-[10px] border-white/30 z-10 rounded-[30px] pointer-events-none"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.299558913346!2d-73.68723382404395!3d40.83292412952522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28859424859f7%3A0x633d7dfbe81966a3!2s20A%20Main%20St%2C%20Port%20Washington%2C%20NY%2011050!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus"
              className="w-full h-full border-0 transition-all duration-700"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts"
              title="Location Map"
            />
            {/* Map Overlay Label */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-900">Port Washington</p>
              <p className="text-[10px] text-gray-500">New York</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;