import React from 'react';

// CHANGED: Added titleColor prop with a default value of your original dark green
export default function PageHero({ titleColor = "text-[#4a5d4f]" }) {
  return (
    <section className="relative w-full max-w-[1928px] h-[860px] flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* --- Soft Background Glows (#C9E5E6) --- */}
      <div className="absolute top-[-5%] left-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[40px]">
        
        {/* Knowledge Hub Badge */}
        <div className="bg-white px-[32px] py-[12px] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center justify-center gap-[12px] mb-[90px]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="#67bcc1" strokeWidth="1.7" strokeLinejoin="round"/>
          </svg>
          <span className="font-inter font-semibold text-[24px] text-[#4a5d4f] leading-[1]">
            Knowledge Hub
          </span>
        </div>

        {/* Title */}
        {/* CHANGED: Swapped the hardcoded text-[#4a5d4f] for the dynamic ${titleColor} */}
        <h1 className={`font-juicy text-[180px] ${titleColor} leading-[0.67] mb-[106px] tracking-wide transition-colors duration-300`}>
          Resources
        </h1>

        {/* Subtexts */}
        <div className="flex flex-col items-center">
          <p className="font-inter text-[32px] text-[#6b6b6b] leading-[1.32] max-w-[858px] mb-[36px]">
            Dive into expert insights, practical tips, and visual guides
          </p>
          <p className="font-inter font-semibold text-[32px] text-[#67bcc1] leading-[1.32]">
            crafted for your wellness journey
          </p>
        </div>

      </div>
    </section>
  );
}