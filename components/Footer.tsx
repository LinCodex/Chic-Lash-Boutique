import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 pb-32 md:pb-20 px-6 bg-pink-50/50 border-t border-pink-100">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">Chic Lash Boutique</h2>
        <p className="text-[10px] uppercase tracking-widest text-pink-500 font-bold mb-10">Port Washington, New York</p>

        <div className="flex justify-center gap-10 mb-12">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-xs font-bold uppercase tracking-widest">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors text-xs font-bold uppercase tracking-widest">Facebook</a>
        </div>

        <div className="max-w-xs mx-auto text-[10px] uppercase tracking-widest text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Chic Lash Boutique</p>
          <p className="mt-2 text-pink-200">Made with love for our clients</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;