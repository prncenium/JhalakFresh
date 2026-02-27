import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // CHANGED: Created separate states for each dropdown so they open independently
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <nav className="w-full h-[138px] flex items-center justify-between px-16 bg-white shadow-[0_10px_23.8px_0_rgba(0,0,0,0.05)] relative z-50">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-juicy text-[32px] pt-1">N</div>
        <span className="font-juicy text-[48px] text-black leading-none pt-2">NutriDocs</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-juicy text-[36px] text-black">
        <a href="/#science" className="hover:text-brand-green transition-colors">Science Simplified</a>
        <a href="/#pricing" className="hover:text-brand-green transition-colors">Pricing</a>
        <a href="/#testimonials" className="hover:text-brand-green transition-colors">Testimonials</a>
        
        {/* --- Resources Dropdown Menu --- */}
        <div 
          className="relative flex items-center gap-1 cursor-pointer hover:text-brand-green transition-colors"
          onMouseEnter={() => setIsResourcesOpen(true)}
          onMouseLeave={() => setIsResourcesOpen(false)}
        >
          <span>Resources</span>
          <ChevronDown 
            size={20} 
            className={`mt-2 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} 
          />
          
          <AnimatePresence>
            {isResourcesOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-xl py-4 px-6 flex flex-col gap-4 font-juicy text-[28px] text-black w-48"
              >
                <Link to="/blogs" className="hover:text-brand-green transition-colors">Blogs</Link>
                <Link to="/videos" className="hover:text-brand-green transition-colors">Videos</Link>
                <Link to="/documents" className="hover:text-brand-green transition-colors">Documents</Link>
                <Link to="/books" className="hover:text-brand-green transition-colors">Books</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- NEW: About Dropdown Menu --- */}
        <div 
          className="relative flex items-center gap-1 cursor-pointer hover:text-brand-green transition-colors"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <span>About</span>
          <ChevronDown 
            size={20} 
            className={`mt-2 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} 
          />
          
          <AnimatePresence>
            {isAboutOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                // Added items-center and centered the box to match your design image
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-xl rounded-xl py-5 px-8 flex flex-col items-center gap-4 font-juicy text-[28px] text-black w-max"
              >
                <Link to="/contact" className="hover:text-brand-green transition-colors whitespace-nowrap">Contact Us</Link>
                <Link to="/team" className="hover:text-brand-green transition-colors whitespace-nowrap">The Team</Link>
                <Link to="/work-with-us" className="hover:text-brand-green transition-colors whitespace-nowrap">Work With Us</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Book Now Button */}
      <button className="bg-brand-green text-white font-inter font-semibold text-[20px] px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
        Book Now
      </button>
    </nav>
  );
}