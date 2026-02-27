import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterCTA from '../../../components/common/NewsletterCTA';
import PageHero from '../../../components/common/PageHero';

// ==========================================
// REUSABLE DOCUMENT CARD COMPONENT
// ==========================================
const DocumentCard = ({ title, description, size, downloads, pages, isPaid }) => {
  return (
    // CHANGED: Outer padding set to p-[20px] to match your exact spacing
    <div className="w-full bg-white rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden cursor-pointer group hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 p-[20px]">
      
      {/* --- Image/File Container --- */}
      {/* CHANGED: Height increased to exactly h-[285px] */}
      <div className="relative w-full h-[285px] bg-[#e5e7eb] rounded-[24px] overflow-hidden flex-shrink-0 flex items-center justify-center">
        
        {/* Top-Center 'Paid' Badge */}
        {isPaid && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#ff8e53] to-[#ff6b6b] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span className="font-inter text-[12px] font-bold text-white leading-none tracking-wide">Paid</span>
          </div>
        )}

        {/* Center File Icon */}
        <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a5d4f" stroke="#4a5d4f" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8" fill="none" stroke="#4a5d4f" strokeWidth="2"></polyline>
          </svg>
        </div>

        {/* Bottom-Right File Size Pill */}
        <div className="absolute bottom-4 right-4 z-20 bg-black/70 px-[10px] py-[6px] rounded-md">
          <span className="font-inter text-[12px] font-bold text-white leading-none">{size}</span>
        </div>
      </div>
      
      {/* --- Text Content Container --- */}
      <div className="pt-[20px] pb-[10px] px-[10px] flex flex-col flex-1">
        
        {/* CHANGED: Increased text sizes to match the design (28px title, 20px description) */}
        <h3 className="font-inter text-[24px] font-bold text-[#2a2a2a] leading-[1.3] mb-[35px] line-clamp-2">
          {title}
        </h3>
        <p className="font-inter text-[20px] text-[#6b6b6b] leading-[1.45] mb-[24px] line-clamp-2">
          {description}
        </p>

        {/* Footer info (Downloads & Pages) and Button */}
        <div className="mt-auto">
          {/* CHANGED: Kept downloads and pages together directly above the button */}
          <div className="flex justify-between items-center font-inter text-[14px] text-[#999999] mb-[20px]">
            <span>{downloads} downloads</span>
            <span>{pages} pages</span>
          </div>
          
          {/* CHANGED: Rounded-full applied to the button to make it pill-shaped */}
          <button className="bg-[#67bcc1] text-white px-[24px] py-[10px] rounded-full font-inter text-[14px] font-bold flex items-center gap-2 hover:bg-[#5aa8ad] transition shadow-sm w-max">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download
          </button>
        </div>
      </div>

    </div>
  );
};


// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function DocumentList() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      
      {/* 1. Hero Section (Pink Title!) */}
      <PageHero titleColor="text-[#EB6890]" />

      <section className="relative z-20 w-full max-w-[1728px] px-[30px] pb-[100px] flex flex-col items-center gap-[40px] -mt-[80px]">
        <div className="w-full max-w-[1534px]">
          
          {/* --- CATEGORY TABS --- */}
          <div className="w-full flex justify-start mb-[60px] mt-[110px]">
            <div className="w-[564px] h-[79px] bg-white rounded-full shadow-[0_20px_25px_0_rgba(0,0,0,0.1),0_8px_10px_0_rgba(0,0,0,0.1)] flex items-center justify-between px-[13px]">
              
              {/* Link to Blogs */}
              <Link 
                to="/blogs" 
                className="w-[154px] h-[51px] flex items-center justify-center rounded-full font-inter font-semibold text-[20px] text-[#6b6b6b] hover:text-gray-800 transition"
              >
                Blogs
              </Link>
              
              {/* Link to Videos */}
              <Link 
                to="/videos" 
                className="w-[154px] h-[51px] flex items-center justify-center rounded-full font-inter font-semibold text-[20px] text-[#6b6b6b] hover:text-gray-800 transition"
              >
                Videos
              </Link>

              {/* ACTIVE Tab: Documents (Teal Pill) */}
              <div className="w-[154px] h-[51px] bg-[#67bcc1] rounded-full flex items-center justify-center shadow-sm">
                <span className="font-inter font-semibold text-[20px] text-white leading-[1.35]">Documents</span>
              </div>
            </div>
          </div>

          {/* ======================================= */}
          {/* ALL DOCUMENTS SECTION                   */}
          {/* ======================================= */}
          <div className="w-full mb-[80px]">
            <div className="flex items-center gap-[16px] mb-[40px] ml-[10px]">
              {/* Light Green Zig-Zag Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <h2 className="font-juicy text-[64px] text-[#4a5d4f] leading-none translate-y-1">
                All Documents
              </h2>
            </div>
            
            {/* Documents Grid (3 Columns on Large Screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              
              {/* Row 1 */}
              <DocumentCard 
                title="Complete Nutrition Guide 2026"
                description="Comprehensive 150-page guide covering macronutrients, meal planning, and evidence-base nutrition strategies."
                size="12.5 MB"
                downloads="2.3K"
                pages="150"
                isPaid={true}
              />
              <DocumentCard 
                title="30 Day Meal Plan with Recipes"
                description="Comprehensive 150-page guide covering macronutrients, meal planning, and evidence-base nutrition strategies."
                size="12.5 MB"
                downloads="2.3K"
                pages="150"
                isPaid={true}
              />
              <DocumentCard 
                title="Nutrient Density Chart"
                description="Comprehensive 150-page guide covering macronutrients, meal planning, and evidence-base nutrition strategies."
                size="12.5 MB"
                downloads="2.3K"
                pages="150"
                isPaid={true}
              />

              {/* Row 2 */}
              <DocumentCard 
                title="Supplement Guide & Recommendations"
                description="Comprehensive 150-page guide covering macronutrients, meal planning, and evidence-base nutrition strategies."
                size="12.5 MB"
                downloads="2.3K"
                pages="150"
                isPaid={true}
              />
              <DocumentCard 
                title="Food Journal Template"
                description="Comprehensive 150-page guide covering macronutrients, meal planning, and evidence-base nutrition strategies."
                size="12.5 MB"
                downloads="2.3K"
                pages="150"
                isPaid={true}
              />
              <DocumentCard 
                title="Grocery Shopping Checklist"
                description="Comprehensive 150-page guide covering macronutrients, meal planning, and evidence-base nutrition strategies."
                size="12.5 MB"
                downloads="2.3K"
                pages="150"
                isPaid={true}
              />

            </div>
          </div>

        </div>
      </section>

      {/* 3. Reusing your CTA - We pass the theme="documents" prop so the popup opens in GREEN! */}
      <NewsletterCTA theme="documents" />

    </div>
  );
}