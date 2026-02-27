import React, { useState } from 'react';
import PricingModal from './PricingModal';

export default function NewsletterCTA({ theme = "default" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Background color updated to #76C7CB and padding increased for more height */}
      <section className="w-full bg-[#76C7CB] flex justify-center py-[100px]">
        <div className="max-w-[800px] flex flex-col items-center text-center text-white">
          
          {/* Increased size of heading to match the design scale */}
          <h2 className="font-juicy text-[96px] leading-[0.9] mb-[12px]">Want More*</h2>
          
          {/* Exact typography matching your CSS: 24px size, 1.58 line-height, 626px width */}
          <p className="font-inter text-[24px] text-white/90 leading-[1.58] max-w-[626px] mb-[45px]">
            Subscribe to our newsletter for weekly wellness tips and exclusive content
          </p>
          
          <div className="flex gap-[20px]">
            {/* Added the drop shadow to the button and updated text color to match new bg */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-[32px] py-[16px] bg-white text-[#76C7CB] rounded-full font-inter font-bold hover:bg-gray-50 transition shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
            >
              Subscribe Now
            </button>
            <button className="px-[32px] py-[16px] bg-transparent border-[2px] border-white text-white rounded-full font-inter font-bold hover:bg-white/10 transition">
              Explore More
            </button>
          </div>
          
        </div>
      </section>

      {/* Pass the theme down to the Modal! */}
      <PricingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        theme={theme}
      />
    </>
  );
}