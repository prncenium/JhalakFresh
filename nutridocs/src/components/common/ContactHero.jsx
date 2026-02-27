import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative w-full max-w-[1928px] flex flex-col items-center justify-center overflow-hidden bg-white pt-[140px] pb-[80px]">
      
      {/* --- Soft Background Glows --- */}
      {/* Left Teal Glow */}
      <div className="absolute top-[-5%] left-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>
      {/* Right Yellow/Orange Glow (Matches your image!) */}
      <div className="absolute top-[-5%] right-[-10%] w-[900px] h-[900px] bg-[#fdf5e6] rounded-full blur-[150px] opacity-80 z-0 pointer-events-none"></div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* 'Get in Touch' Badge */}
        <div className="bg-white/80 backdrop-blur-sm px-[92px] py-[22px] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center justify-center gap-[12px] mb-[120px] mt-[-90px]">
          {/* Chat Bubble Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="font-juicy text-[24px] text-[#4a5d4f] leading-[1] translate-y-1">
            Get in Touch
          </span>
        </div>

        {/* Title with exact text-shadow from your snippet */}
        <h1 className="font-juicy text-[180px] text-[#eb6890] leading-[0.67] mb-[43px] tracking-wide [text-shadow:9px_4px_4px_rgba(0,0,0,0.25)]">
          Contact US
        </h1>

        {/* Subtexts */}
        <div className="flex flex-col items-center mb-[80px]">
          <p className="font-inter text-[28px] text-[#6b6b6b] leading-[1.32] mb-[18px]">
            We’re here to help you on your wellness journey.
          </p>
          <p className="font-inter font-semibold text-[28px] text-[#009da6] leading-[1.32]">
            Reach out and let’s start the conversational
          </p>
        </div>

        {/* --- Quick Info Cards (Moved here to match your design!) --- */}
        <div className="w-full max-w-[1700px] flex flex-wrap items-center justify-center gap-[40px] lg:gap-[300px] px-[20px]">
          
          {/* Email Card */}
          <div className="w-full md:w-[650px] h-[98px] flex items-center gap-[24px] pl-[20px] rounded-2xl bg-white/60 backdrop-blur-md shadow-[7px_4px_21.4px_0_rgba(0,0,0,0.15)] border border-white/40">
            <div className="w-12 h-12 rounded-[14px] bg-[#6dc5ca] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center h-full pt-2">
              <h4 className="font-juicy text-[32px] text-[#6b6b6b] leading-[0.8] mb-[6px]">Email Us</h4>
              <p className="font-inter text-[24px] font-semibold text-[#4a5d4f] leading-none">contact@nutridocs.com</p>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="w-full md:w-[650px] h-[98px] flex items-center gap-[24px] pl-[20px] rounded-2xl bg-white/60 backdrop-blur-md shadow-[7px_4px_21.4px_0_rgba(0,0,0,0.15)] border border-white/40">
            <div className="w-12 h-12 rounded-[14px] bg-[#6cc4c9] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="flex flex-col items-start justify-center h-full pt-2">
              <h4 className="font-juicy text-[32px] text-[#6b6b6b] leading-[0.8] mb-[6px]">Response Time</h4>
              <p className="font-inter text-[24px] font-semibold text-[#4a5d4f] leading-none">Within 24-48 hours</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}