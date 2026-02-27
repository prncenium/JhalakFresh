import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterCTA from '../../../components/common/NewsletterCTA';
import PageHero from '../../../components/common/PageHero';

// ==========================================
// REUSABLE VIDEO CARD COMPONENT
// ==========================================
const VideoCard = ({ title, views, timeAgo, duration, isTrending, isPremium }) => {
  return (
    <div className="w-full bg-white rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden cursor-pointer group hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
      
      {/* --- Image/Video Container --- */}
      <div className="relative w-full h-[471px] bg-white overflow-hidden flex-shrink-0">
        
        {/* Dark gradient overlay at the bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent pointer-events-none z-10"></div>
        
        {/* Trending Badge */}
        {isTrending && (
          <div className="absolute top-6 left-6 z-20 bg-gradient-to-b from-[#ff6b6b] to-[#ff8e53] px-4 py-[6px] rounded-full flex items-center gap-2 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span className="font-inter text-[14px] font-bold text-white leading-none">Trending</span>
          </div>
        )}
        
        {/* Center Play / Premium Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          {isPremium ? (
            // Premium Icon
            <div className="w-[110px] h-[110px] bg-[#67bcc1] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center gap-1 group-hover:scale-105 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="font-inter text-[16px] font-semibold text-white">Premium</span>
            </div>
          ) : (
            // Standard Play Button
            <div className="w-[105px] h-[105px] bg-white/95 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 pl-2">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#4a5d4f" stroke="#4a5d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          )}
        </div>
        
        {/* Duration Pill */}
        <div className="absolute bottom-5 right-5 z-20 bg-black/80 px-[14px] py-[6px] rounded-md">
          <span className="font-inter text-[20px] font-semibold text-white leading-none">{duration}</span>
        </div>
      </div>
      
      {/* --- Text Content Container --- */}
      <div className="p-[32px] flex flex-col flex-1 bg-white min-h-[290px]">
        
        {/* CHANGED: Reduced margin-bottom from mb-[40px] to mb-[24px] */}
        <h3 className="font-inter text-[32px] font-medium text-[#2a2a2a] leading-[1.36] mb-[24px] line-clamp-2">
          {title}
        </h3>
        <div className="flex justify-between items-center mt-auto font-inter text-[22px] text-[#999999]">
          <span>{views}</span>
          <span>{timeAgo}</span>
        </div>
      </div>

    </div>
  );
};

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function VideoList() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      
      <PageHero />

      <section className="relative z-20 w-full max-w-[1728px] px-[30px] pb-[100px] flex flex-col items-center gap-[40px] -mt-[80px]">
        <div className="w-full max-w-[1534px]">
          
          {/* --- CATEGORY TABS --- */}
          <div className="w-full flex justify-start mb-[60px] mt-[110px]">
            <div className="w-[564px] h-[79px] bg-white rounded-full shadow-[0_20px_25px_0_rgba(0,0,0,0.1),0_8px_10px_0_rgba(0,0,0,0.1)] flex items-center justify-between px-[13px]">
              
              <Link 
                to="/blogs" 
                className="w-[154px] h-[51px] flex items-center justify-center rounded-full font-inter font-semibold text-[20px] text-[#6b6b6b] hover:text-gray-800 transition"
              >
                Blogs
              </Link>
              
              <div className="w-[154px] h-[51px] bg-[#67bcc1] rounded-full flex items-center justify-center shadow-sm">
                <span className="font-inter font-semibold text-[20px] text-white leading-[1.35]">Videos</span>
              </div>
              
              <Link 
                to="/documents" 
                className="w-[154px] h-[51px] flex items-center justify-center rounded-full font-inter font-semibold text-[20px] text-[#6b6b6b] hover:text-gray-800 transition"
              >
                Documents
              </Link>
            </div>
          </div>

          {/* ======================================= */}
          {/* 1. TRENDING NOW SECTION                 */}
          {/* ======================================= */}
          <div className="w-full mb-[80px]">
            <div className="flex items-center gap-[16px] mb-[40px] ml-[10px]">
              {/* Zig-Zag Trending Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4a5d4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <h2 className="font-juicy text-[64px] text-[#4a5d4f] leading-none translate-y-1">
                Trending Now
              </h2>
            </div>
            
            {/* Trending Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
              <VideoCard 
                title="Strong Immunity, Better Health: Everyday Habits to Stay Protected"
                views="12.5K views"
                timeAgo="2 days ago"
                duration="5:32"
                isTrending={true}
                isPremium={false}
              />
              <VideoCard 
                title="Lifestyle Secrets for Women – Your Path to a Fun, Healthy, Disease-Free Life"
                views="12.5K views"
                timeAgo="2 days ago"
                duration="5:32"
                isTrending={true}
                isPremium={false}
              />
            </div>
          </div>

          {/* ======================================= */}
          {/* 2. ALL VIDEOS SECTION                   */}
          {/* ======================================= */}
          <div className="w-full mb-[40px]">
            <h2 className="font-juicy text-[64px] text-[#4a5d4f] leading-none mb-[40px] ml-[10px]">
              All Videos
            </h2>
            
            {/* All Videos Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
              <VideoCard 
                title="Strong Immunity, Better Health: Everyday Habits to Stay Protected"
                views="12.5K views"
                timeAgo="2 days ago"
                duration="5:32"
                isTrending={true}
                isPremium={false}
              />
              <VideoCard 
                title="Lifestyle Secrets for Women – Your Path to a Fun, Healthy, Disease-Free Life"
                views="12.5K views"
                timeAgo="2 days ago"
                duration="5:32"
                isTrending={true}
                isPremium={false}
              />
              <VideoCard 
                title="Nutri Docs : Positive Parenting"
                views="12.5K views"
                timeAgo="2 days ago"
                duration="5:32"
                isTrending={true}
                isPremium={true} // Setting this to true triggers the Teal Lock icon!
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. Reusing your CTA and Pricing Modal! */}
      <NewsletterCTA />

    </div>
  );
}