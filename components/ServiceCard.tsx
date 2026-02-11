import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-t-full rounded-b-[2rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(236,148,174,0.15)] transition-all duration-500 border border-pink-50 h-full flex flex-col">
      {/* Image Container with unique shape */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-pink-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Price/Duration Badge */}
        <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-serif text-pink-900 text-sm tracking-wider shadow-lg">
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col bg-white/50 backdrop-blur-sm">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
          {service.name}
        </h3>
        <div className="w-12 h-1 bg-pink-100 mb-6 group-hover:w-20 group-hover:bg-pink-300 transition-all duration-300"></div>
        <p className="text-gray-500 leading-relaxed font-light mb-6 flex-1">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
