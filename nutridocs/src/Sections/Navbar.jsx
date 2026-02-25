import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full h-[138px] flex items-center justify-between px-16 bg-white shadow-[0_10px_23.8px_0_rgba(0,0,0,0.05)] relative z-50">
      
      {/* Logo Placeholder */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-juicy text-[32px] pt-1">N</div>
        <span className="font-juicy text-[48px] text-black leading-none pt-2">NutriDocs</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-juicy text-[36px] text-black">
        <a href="#science" className="hover:text-brand-green transition-colors">Science Simplified</a>
        <a href="#pricing" className="hover:text-brand-green transition-colors">Pricing</a>
        <a href="#testimonials" className="hover:text-brand-green transition-colors">Testimonials</a>
        
        {/* Dropdown Menu */}
        <div 
          className="relative flex items-center gap-1 cursor-pointer hover:text-brand-green transition-colors"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span>Resources</span>
          <ChevronDown size={20} className="mt-2" />
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-xl py-4 px-6 flex flex-col gap-4 font-juicy text-[28px] text-black w-48"
              >
                <a href="#blogs" className="hover:text-brand-green">Blogs</a>
                <a href="#videos" className="hover:text-brand-green">Videos</a>
                <a href="#documents" className="hover:text-brand-green">Documents</a>
                <a href="#books" className="hover:text-brand-green">Books</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="#about" className="hover:text-brand-green transition-colors flex items-center gap-1">
          About <ChevronDown size={20} className="mt-2" />
        </a>
      </div>

      {/* Book Now Button */}
      <button className="bg-brand-green text-white font-inter font-semibold text-[20px] px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
        Book Now
      </button>
    </nav>
  );
}