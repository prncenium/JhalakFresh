import React, { useState } from 'react';

// ==========================================
// 1. ICONS MOVED HERE (OUTSIDE THE MAIN FUNCTION)
// ==========================================

const CheckMark = ({ isDocTheme }) => (
  <div className={`w-[20px] h-[20px] shrink-0 rounded-full flex items-center justify-center ${isDocTheme ? "bg-[#eaf4ea]" : "bg-[#eaf5f5]"}`}>
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6L5 9L10 3" stroke={isDocTheme ? "#67b15f" : "#67bcc1"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const CrossMark = () => (
  <div className="w-[20px] h-[20px] shrink-0 rounded-full flex items-center justify-center bg-gray-100">
    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L10 10M10 2L2 10" stroke="#99a1af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

// ==========================================
// 2. MAIN MODAL COMPONENT
// ==========================================

export default function PricingModal({ isOpen, onClose, theme = "default" }) {
  const [selectedPlan, setSelectedPlan] = useState("Premium");

  if (!isOpen) return null;

  // --- Dynamic Theme Colors ---
  const isDocTheme = theme === "documents";
  
  const headerBg = isDocTheme ? "bg-[#4a5d4f]" : "bg-[#67bcc1]";
  const accentBg = isDocTheme ? "bg-[#67b15f]" : "bg-[#67bcc1]";
  const accentText = isDocTheme ? "text-[#67b15f]" : "text-[#67bcc1]";
  const accentBorder = isDocTheme ? "border-[#67b15f]" : "border-[#67bcc1]";
  const accentHover = isDocTheme ? "hover:bg-[#569c4f]" : "hover:bg-[#5aa8ad]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[1000px] bg-[#f8fafc] rounded-[32px] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* --- Header Section (Dynamic Background) --- */}
        <div className={`${headerBg} px-10 py-10 text-white relative transition-colors duration-300`}>
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-[40px] h-[40px] bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition text-xl"
          >
            ✕
          </button>
          
          <div className="flex items-center gap-2 mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h20M2 4l3 16h14l3-16M2 4l4 4 6-4 6 4 4-4"/></svg>
            <span className="font-inter font-bold text-[16px]">Premium Access</span>
          </div>
          <h2 className="font-juicy text-[48px] leading-none mb-3">Choose Your Plan</h2>
          <p className="font-inter text-[16px] text-white/90 max-w-[600px]">
            Unlock exclusive content, premium videos, and downloadable resources to accelerate your wellness journey.
          </p>
        </div>

        {/* --- Pricing Cards Section --- */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative bg-white mt-4">
          
          {/* 1. Free Plan */}
          <div 
            onClick={() => setSelectedPlan("Free")}
            className={`bg-white rounded-[24px] p-6 flex flex-col cursor-pointer transition-all duration-300 ${selectedPlan === "Free" ? `border-[3px] ${accentBorder} shadow-lg transform -translate-y-4` : 'border border-gray-200 hover:border-gray-300'}`}
          >
            <h3 className="font-libre-baskerville text-[32px] text-[#2a2a2a] leading-none mb-2">Free</h3>
            <p className="font-inter text-[14px] text-gray-500 mb-4">Perfect for getting started</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-libre-baskerville text-[48px] leading-none text-[#6b6b6b]">$0</span>
              <span className="font-inter text-[14px] text-gray-500">/ <br/>forever</span>
            </div>
            <button className={`w-full py-3 rounded-full font-inter font-semibold mb-6 transition-colors duration-300 ${selectedPlan === 'Free' ? `${accentBg} text-white shadow-md` : 'bg-[#e5e7eb] text-[#6b6b6b]'}`}>
              {selectedPlan === 'Free' ? 'Current Plan' : 'Select Free'}
            </button>
            <ul className="flex flex-col gap-[14px] font-inter text-[15px] text-[#2a2a2a]">
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Access to free blogs</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Access to free videos</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Monthly newsletter</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Community access</span></li>
              
              <li className="flex items-start gap-3 text-[#99a1af] opacity-60"><CrossMark /> <span className="line-through">Premium videos</span></li>
              <li className="flex items-start gap-3 text-[#99a1af] opacity-60"><CrossMark /> <span className="line-through">Downloadable documents</span></li>
              <li className="flex items-start gap-3 text-[#99a1af] opacity-60"><CrossMark /> <span className="line-through">1-on-1 consultations</span></li>
              <li className="flex items-start gap-3 text-[#99a1af] opacity-60"><CrossMark /> <span className="line-through">Meal planning tools</span></li>
            </ul>
          </div>

          {/* 2. Premium Plan */}
          <div 
            onClick={() => setSelectedPlan("Premium")}
            className={`bg-white rounded-[24px] p-6 flex flex-col relative cursor-pointer transition-all duration-300 ${selectedPlan === "Premium" ? `border-[3px] ${accentBorder} shadow-lg transform -translate-y-4` : 'border border-gray-200 hover:border-gray-300'}`}
          >
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${accentBg} text-white px-4 py-1 rounded-full text-[12px] font-bold font-inter tracking-wide shadow-sm transition-colors duration-300 whitespace-nowrap`}>
              ✨ Most Popular
            </div>
            <h3 className="font-libre-baskerville text-[32px] text-[#2a2a2a] leading-none mb-2 mt-2">Premium</h3>
            <p className="font-inter text-[14px] text-gray-500 mb-4">For serious wellness enthusiasts</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className={`font-libre-baskerville text-[48px] leading-none ${accentText} transition-colors duration-300`}>$19</span>
              <span className="font-inter text-[14px] text-gray-500">/ per <br/>month</span>
            </div>
            <button className={`w-full py-3 rounded-full font-inter font-semibold mb-6 transition-colors duration-300 shadow-md ${selectedPlan === 'Premium' ? `${accentBg} text-white ${accentHover}` : 'bg-[#e5e7eb] text-[#6b6b6b]'}`}>
              {selectedPlan === 'Premium' ? 'Upgrade Now' : 'Select Premium'}
            </button>
            <ul className="flex flex-col gap-[14px] font-inter text-[15px] text-[#2a2a2a]">
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Everything in Free</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Access to all premium videos</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Download all documents & PDFs</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Priority email support</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Weekly live Q&A sessions</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Exclusive recipes & meal plans</span></li>
            </ul>
          </div>

          {/* 3. Pro Plan */}
          <div 
            onClick={() => setSelectedPlan("Pro")}
            className={`bg-white rounded-[24px] p-6 flex flex-col cursor-pointer transition-all duration-300 ${selectedPlan === "Pro" ? `border-[3px] ${accentBorder} shadow-lg transform -translate-y-4` : 'border border-gray-200 hover:border-gray-300'}`}
          >
            <h3 className="font-libre-baskerville text-[32px] text-[#2a2a2a] leading-none mb-2">Pro</h3>
            <p className="font-inter text-[14px] text-gray-500 mb-4">Complete wellness transformation</p>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-libre-baskerville text-[48px] leading-none text-[#2a2a2a]">$49</span>
              <span className="font-inter text-[14px] text-gray-500">/ per <br/>month</span>
            </div>
            <button className={`w-full py-3 rounded-full font-inter font-semibold mb-6 transition-colors duration-300 shadow-md ${selectedPlan === 'Pro' ? `bg-[#4a5d4f] text-white hover:bg-[#3c4b40]` : 'bg-[#e5e7eb] text-[#6b6b6b]'}`}>
              {selectedPlan === 'Pro' ? 'Go Pro' : 'Select Pro'}
            </button>
            <ul className="flex flex-col gap-[14px] font-inter text-[15px] text-[#2a2a2a]">
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Everything in Premium</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Monthly 1-on-1 consultation</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Personalized meal plans</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Custom nutrition analysis</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>24/7 priority support</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Early access to new content</span></li>
              <li className="flex items-start gap-3"><CheckMark isDocTheme={isDocTheme} /> <span>Private community access</span></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}