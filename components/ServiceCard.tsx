
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Logic to simulate the overlapping cards from the screenshot
  const offsetClasses = [
    "translate-y-0 z-[40]",
    "-translate-y-24 translate-x-12 z-[30] opacity-80",
    "-translate-y-48 translate-x-24 z-[20] opacity-60",
    "-translate-y-72 translate-x-36 z-[10] opacity-40",
  ];

  return (
    <div
      className={`relative bg-[#111] w-full max-w-4xl p-1 md:p-2 border border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:z-50 hover:opacity-100`}
    >
      <div className="flex flex-col md:flex-row h-full md:h-56">
        <div className="w-full md:w-1/3 h-48 md:h-full overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
            loading="lazy"
          />
        </div>
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-xl md:text-2xl font-semibold tracking-widest">{service.name}</h3>
            <span className="text-sm tracking-widest text-gray-400">{service.duration} — {service.price}</span>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mt-4 leading-relaxed max-w-xl font-light italic">
            {service.description}
          </p>
          <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
            <span className="text-[10px] uppercase tracking-[0.3em] text-rose-300">Experience Excellence</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
