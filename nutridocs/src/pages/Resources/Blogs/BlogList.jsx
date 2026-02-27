import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import React from 'react';
import NewsletterCTA from '../../../components/common/NewsletterCTA';
import PageHero from '../../../components/common/PageHero';

export default function BlogList() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      
      {/* --- 1. HERO SECTION (Exactly 1728px x 860px) --- */}
      <PageHero />

      {/* --- 2. BLOG CONTENT AREA --- */}
      {/* Max width set to accommodate the 1655px content area + padding */}
      <section className="relative z-20 w-full max-w-[1728px] px-[30px] pb-[100px] flex flex-col items-center gap-[40px] -mt-[80px]">
        
        {/* Container to left-align the tabs and featured post perfectly with the grid */}
        <div className="w-full max-w-[1534px]">
          
          {/* --- CATEGORY TABS (Perfectly Aligned) --- */}
          <div className="w-full flex justify-start mb-[40px] mt-[110px]">
            {/* Added justify-between to perfectly space the 3 tabs */}
            <div className="w-[564px] h-[79px] bg-white rounded-full shadow-[0_20px_25px_0_rgba(0,0,0,0.1),0_8px_10px_0_rgba(0,0,0,0.1)] flex items-center justify-between px-[13px]">
              
              {/* Active Tab: Blogs (Teal Pill) */}
              <div className="w-[154px] h-[51px] bg-[#67bcc1] rounded-full flex items-center justify-center shadow-sm">
                <span className="font-inter font-semibold text-[20px] text-white leading-[1.35]">Blogs</span>
              </div>
              
              {/* Inactive Tab: Videos (Link to videos page) */}
              <Link 
                to="/videos" 
                className="w-[154px] h-[51px] flex items-center justify-center rounded-full font-inter font-semibold text-[20px] text-[#6b6b6b] hover:text-gray-800 transition"
              >
                Videos
              </Link>
              
              {/* Inactive Tab: Documents (Link to documents page) */}
              <Link 
                to="/documents" 
                className="w-[154px] h-[51px] flex items-center justify-center rounded-full font-inter font-semibold text-[20px] text-[#6b6b6b] hover:text-gray-800 transition"
              >
                Documents
              </Link>

            </div>
          </div>

          {/* A. FEATURED POST (Full Width within max-w-[1534px]) */}
          <div className="relative w-full h-[700px] bg-gray-300 rounded-[32px] overflow-hidden shadow-lg cursor-pointer group">
            
            {/* Background Image */}
            <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772112384/Blog1_oeztse.png" alt="Featured Blog" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            
            {/* Dark Overlay gradient - ADDED HOVER OPACITY 0 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

            {/* Top Right White Arrow Button */}
            <div className="absolute top-[40px] right-[40px] w-[93px] h-[85px] bg-white rounded-[16777200px] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 19L19 5M19 5v10M19 5H9"/>
              </svg>
            </div>

            {/* Content Block */}
            <div className="absolute bottom-[40px] left-[40px] z-10">
              
              {/* Tags Container */}
              <div className="flex gap-[16px] mb-[62px]">
                {/* Featured Pill */}
                <div className="w-[188px] h-[54px] bg-[#67bcc1] rounded-[16777200px] flex items-center justify-center gap-[8px]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="#fff" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-inter text-[20px] font-bold text-white leading-[1]">Featured</span>
                </div>
                {/* Nutrition Pill */}
                <div className="w-[188px] h-[54px] bg-white/20 backdrop-blur-sm rounded-[16777200px] flex items-center justify-center">
                  <span className="font-inter text-[20px] font-semibold text-white leading-[1]">Nutrition</span>
                </div>
              </div>

              {/* Title - ADDED HOVER TEXT COLOR */}
              <h2 className="font-juicy text-[96px] text-white group-hover:text-black transition-colors duration-500 leading-[0.68] max-w-[894px] mb-[100px]">
                Lectins: The Poisions We Eat Happily Every Day
              </h2>

              {/* Subtitle - ADDED HOVER TEXT COLOR */}
              <p className="font-inter text-[32px] text-white/90 group-hover:text-gray-800 transition-colors duration-500 leading-[1.16] max-w-[737px] mb-[90px]">
                How Most Diseases Are In Our Diet, NOT Our Genes!
              </p>

              {/* Meta Data - ADDED HOVER TEXT COLOR */}
              <div className="flex items-center gap-[24px] font-inter text-[16px] text-white/80 group-hover:text-gray-600 transition-colors duration-500">
                <span className="flex items-center gap-[6px]"><span className="text-[18px]">👨‍⚕️</span> Dr. Sarah Mitchell</span>
                <span className="flex items-center gap-[6px]"><span className="text-[18px]">⏱️</span> 5 min read</span>
                <span className="flex items-center gap-[6px]"><span className="text-[18px]">📅</span> Jan 2, 2026</span>
              </div>
              
            </div>
          </div>

          {/* ========================================================================= */}
          {/* B. MASONRY GRID (RESPONSIVE & ADJUSTABLE) */}
          {/* Changed to a 12-column grid. On small screens it's 1 column. On lg screens it splits 7/5. */}
          {/* ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] mt-[80px]">
            
            {/* --- Left Column: Tall Card (Blog 2) --- */}
            {/* lg:col-span-7 handles the responsive width. Adjust h-[850px] to change height. */}
            <div className="lg:col-span-7 h-[1050px] bg-white rounded-[32px] shadow-[0_20px_25px_0_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col cursor-pointer group hover:shadow-xl transition-all duration-300">
              
              {/* Image Container. Adjust h-[550px] to change image height. */}
              <div className="w-full h-[850px] bg-white rounded-t-[32px] overflow-hidden relative">
                 {/* CHANGED: Removed the hover and transition classes */}
<img 
  src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772114068/Blog2_debqgv.png" 
  alt="Blog 2" 
  className="w-full h-full object-cover translate-y-[30px] drop-shadow-2xl" 
/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Text Container: flex-1 ensures it fills the rest of the 850px height automatically */}
              <div className="w-full flex-1 px-[32px] py-[32px] flex flex-col justify-start">
                <h3 className="font-juicy text-[64px] text-[#2a2a2a] leading-[0.75] mb-[24px]">
                  Staying Away From Dangerous Lectins
                </h3>
                <p className="font-inter text-[20px] text-[#6b6b6b] leading-[1.5] mb-[32px]">
                  What to Eat & What NOT to Eat!
                </p>
                <div className="flex items-center justify-between w-full mt-auto mb-[24px]">
                  <span className="flex items-center gap-[6px] font-inter text-[16px] text-gray-400">
                    <span className="text-[18px]">⏱️</span> 7 min read
                  </span>
                  <div className="w-[54px] h-[54px] bg-[#f5f5f5] rounded-[16777200px] flex items-center justify-center group-hover:bg-[#67bcc1] transition-colors duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-[#67bcc1] group-hover:stroke-white transition-colors duration-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 19L19 5M19 5v10M19 5H9"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Right Column: Two Stacked Cards --- */}
            {/* lg:col-span-5 handles the responsive width. */}
            <div className="lg:col-span-5 flex flex-col gap-[40px]">
              
              {/* --- Small Card 1 (Blog 3) --- */}
              <div className="w-full flex-1 bg-white rounded-[32px] shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition">
                
                {/* Adjust h-[480px] to change image height. */}
                <div className="w-full h-[480px] bg-gray-100 rounded-t-[32px] overflow-hidden relative">
                  <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772114068/Blog3_k3e6yu.png" alt="Blog 3" className="w-full h-full object-cover object-top" />
                  {/* FIX: Deleted the black bg-gradient overlay from here! */}
                </div>
                
                <div className="w-full flex-1 px-[24px] py-[24px] flex flex-col justify-start">
                  <h3 className="font-juicy text-[50px] text-[#2a2a2a] leading-[0.9] mb-[12px]">
                    The Dangers of Lectins
                  </h3>
                  <p className="font-inter text-[20px] text-[#6b6b6b] leading-[1.35] mb-[16px]">
                    Allies of Plants, Enemies of Humans AND The Bringer of Diseases!
                  </p>
                  <span className="text-[14px] text-gray-400 mt-auto mb-[12px]">⏱️ 6 min read</span>
                </div>
              </div>

              {/* --- Small Card 2 (Blog 4) --- */}
              <div className="w-full flex-1 bg-white rounded-[32px] shadow-sm border border-gray-100 flex flex-col cursor-pointer hover:shadow-md transition">
                
                {/* FIX: Changed back to object-contain so the illustration isn't cropped. */}
                <div className="w-full h-[480px] bg-[#FEFBFE]] rounded-t-[32px] overflow-hidden relative">
                  <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772114068/Blog4Img_wjqg8h.png" alt="Blog 4" className="w-full h-full object-contain object-center" />
                  {/* FIX: Deleted the black bg-gradient overlay from here! */}
                </div>
                
                <div className="w-full flex-1 px-[24px] py-[24px] flex flex-col justify-start">
                  <h3 className="font-juicy text-[50px] text-[#2a2a2a] leading-[0.9] mb-[12px]">
                    Why We Get Diseases From Lectins...Eventually!
                  </h3>
                  <p className="font-inter text-[20px] text-[#6b6b6b] leading-[1.5] mb-[16px]">
                    How Lectins Destroy Our Gut (Intestinal Health) Slowly Over Time
                  </p>
                  <span className="text-[14px] text-gray-400 mt-auto mb-[12px]">⏱️ 8 min read</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- 3. BOTTOM CTA BANNER --- */}
      {/* <NewsletterCTA theme="documents" /> */}
      <NewsletterCTA />

    </div>
  );
}