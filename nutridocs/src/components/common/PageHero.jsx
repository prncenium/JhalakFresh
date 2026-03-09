import React from 'react';

// CHANGED: Added 'lightning' to the badgeType options
export default function PageHero({ 
  title = "Resources",
  titleColor = "text-[#4a5d4f]", 
  titleShadow = false, // Boolean to toggle the deep drop shadow
  badgeText = "Knowledge Hub",
  badgeType = "star", // 'star', 'heart', or 'lightning'
  subtitle1 = "Dive into expert insights, practical tips, and visual guides",
  subtitle2 = "crafted for your wellness journey",
  subtitle2Color = "text-[#67bcc1]"
}) {
  return (
    <section className="relative w-full max-w-[1928px] h-[860px] flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* --- Soft Background Glows (#C9E5E6) --- */}
      <div className="absolute top-[-5%] left-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[40px]">
        
        {/* Dynamic Badge */}
        <div className="bg-white/80 backdrop-blur-sm px-[32px] py-[12px] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center justify-center gap-[12px] mb-[90px]">
          {/* Conditionally render the icon based on the badgeType prop */}
          {badgeType === 'heart' ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          ) : badgeType === 'lightning' ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="#67bcc1" strokeWidth="1.7" strokeLinejoin="round"/>
            </svg>
          )}
          {/* The font changes depending on if it's the standard badge or the new juicy ones */}
          <span className={`${(badgeType === 'heart' || badgeType === 'lightning') ? 'font-juicy text-[32px] pt-1' : 'font-inter font-semibold text-[24px]'} text-[#4a5d4f] leading-[0.75]`}>
            {badgeText}
          </span>
        </div>

        {/* Title */}
        <h1 className={`font-juicy text-[180px] ${titleColor} ${titleShadow ? '[text-shadow:12px_4px_4px_rgba(0,0,0,0.25)]' : ''} leading-[0.67] mb-[106px] tracking-wide transition-all duration-300`}>
          {title}
        </h1>

        {/* Subtexts */}
        <div className="flex flex-col items-center">
          <p className="font-inter text-[32px] text-[#6b6b6b] leading-[1.32] max-w-[858px] mb-[16px]">
            {subtitle1}
          </p>
          <p className={`font-inter font-semibold text-[32px] ${subtitle2Color} leading-[1.32]`}>
            {subtitle2}
          </p>
        </div>

      </div>
    </section>
  );
}