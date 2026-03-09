import React from 'react';
import { Link } from 'react-router-dom'; // CHANGED: Imported Link for routing

export default function PlansPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fff]">
      
      {/* --- HERO SECTION --- */}
      <section className="w-full max-w-[1928px] h-[334px] flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,_#6dc3c8,_#85eaf1)] px-[30px]">
        <h1 className="font-juicy text-[96px] text-[#fff] leading-[0.58] mb-[33.5px] text-center drop-shadow-sm">
          Book a Consult
        </h1>
        <p className="font-inter text-[32px] text-white/90 leading-[0.88] text-center max-w-[817px]">
          Choose the program that best fits your wellness goals
        </p>
      </section>

      {/* --- PLANS GRID SECTION --- */}
      <section className="relative w-full max-w-[1400px] flex flex-col xl:flex-row gap-[40px] px-[30px] mt-[60px] mb-[60px] justify-center items-stretch">
        
        {/* CARD 1: Nutri Adults */}
        <div className="w-full xl:w-[673px] flex flex-col pt-[34px] pr-[48px] pb-[43px] pl-[34px] rounded-2xl bg-[linear-gradient(to_bottom,_#e5f9f8,_#fff)] border-2 border-transparent hover:border-[#6ec6cc]/30 transition-colors duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          
          {/* Top Icon */}
          <div className="w-[80px] h-[80px] flex items-center justify-center mb-[24px] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[linear-gradient(to_bottom,_#6ec5ca,_#85ebf2)] overflow-hidden">
            {/* CHANGED: Replaced SVG with an image tag. Paste your image URL in the src! */}
            <img 
              src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772786932/Kid_lmpcbt.png" 
              alt="Adults Program Icon" 
              className="w-[50px] h-[50px] object-cover" 
            />
          </div>

          {/* Titles */}
          <h2 className="font-juicy text-[48px] text-[#2a2a2a] leading-[1] mb-[6px]">
            Nutri Adults
          </h2>
          <p className="font-juicy text-[32px] text-[#6b6b6b] leading-[1.03] mb-[24px]">
            Comprehensive wellness programs for gut health, disease reversal, and lifestyle transformation
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-[20px] mb-[40px] flex-grow">
            {[
              "Disease prevention & healthy living",
              "Physical well-being focus",
              "Nutritional meal planning",
              "Custom curated recipes"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ec6cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="font-juicy text-[30px] text-[#4a5d4f] leading-[0.67] pt-2">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Area */}
          {/* CHANGED: Wrapped in a Link component targeting '/adult-plans' (change 'to' prop if needed) */}
          <Link to="/adult-plans" className="w-full flex items-center justify-between mt-auto group">
            <span className="font-juicy text-[36px] text-[#6ec6cc] leading-[0.67] group-hover:opacity-80 transition">
              Learn More
            </span>
            <button className="w-[48px] h-[48px] rounded-full bg-[#6ec6cc] flex items-center justify-center group-hover:bg-[#5bb0b6] transition group-hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </Link>
        </div>

        {/* CARD 2: Nutri Kids */}
        <div className="relative w-full xl:w-[673px] flex flex-col pt-[34px] pr-[46px] pb-[42px] pl-[34px] rounded-2xl bg-[linear-gradient(to_bottom,_#fff,_#e5f9f8)] border-2 border-transparent hover:border-[#6ec6cc]/30 transition-colors duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          
          {/* Floating 'Most Popular' Badge */}
          <div className="absolute top-[-18px] right-[40px] md:right-[80px] px-[23px] py-[8px] rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[linear-gradient(to_bottom,_#6ec5ca,_#85ebf2)] z-10">
            <span className="font-inter text-base font-bold text-[#fff] leading-[1.25]">
              Most Popular
            </span>
          </div>

          {/* Top Icon */}
          <div className="w-[80px] h-[80px] flex items-center justify-center mb-[24px] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[linear-gradient(to_bottom,_#6ec5ca,_#85ebf2)]">
            <span className="font-inter text-[40px] font-bold text-white leading-none">$</span>
          </div>

          {/* Titles */}
          <h2 className="font-juicy text-[48px] text-[#2a2a2a] leading-[1] mb-[6px]">
            Nutri Kids
          </h2>
          <p className="font-juicy text-[32px] text-[#6b6b6b] leading-[1.03] mb-[24px]">
            Children's health and development program focusing on physical and mental well-being
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-[20px] mb-[40px] flex-grow">
            {[
              "Gut cleanse & healing programs",
              "Guided disease reversal",
              "Mental abilities development",
              "Parenting coaching included"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6ec6cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span className="font-juicy text-[30px] text-[#4a5d4f] leading-[0.67] pt-2">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Action Area */}
          {/* CHANGED: Wrapped in a Link component targeting '/kids-plans' (change 'to' prop if needed) */}
          <Link to="/kids-plans" className="w-full flex items-center justify-between mt-auto group">
            <span className="font-juicy text-[36px] text-[#6ec6cc] leading-[0.67] group-hover:opacity-80 transition">
              View Plans
            </span>
            <button className="w-[48px] h-[48px] rounded-full bg-[#6ec6cc] flex items-center justify-center group-hover:bg-[#5bb0b6] transition group-hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </Link>
        </div>

      </section>

      {/* --- FOOTER CTA SECTION --- */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mb-[100px] px-[20px]">
        <p className="font-inter text-2xl text-[#6b6b6b] leading-[0.83] text-center">
          Not sure which option is right for you?
        </p>
        {/* Swapped standard anchor tag for a React Router Link here as well for performance! */}
        <Link to="/contact" className="font-inter text-2xl font-semibold text-[#00a5af] leading-[1] hover:underline transition">
          Contact us for guidance
        </Link>
      </div>

    </div>
  );
}