import React from 'react';
import NewsletterCTA from '../components/common/NewsletterCTA'; 

export default function WorkWithUs() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fafcfc]">
      
      {/* ========================================== */}
      {/* 1. HERO SECTION                            */}
      {/* ========================================== */}
      <section className="relative w-full max-w-[1928px] min-h-[1000px] pt-[50px] pb-[100px] flex flex-col items-center overflow-hidden">
        
        {/* Soft Background Glows */}
        <div className="absolute top-[-5%] left-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[900px] h-[900px] bg-[#fdf5e6] rounded-full blur-[150px] opacity-80 z-0 pointer-events-none"></div>
        
        {/* Main Content Wrapper */}
        <div className="relative w-full max-w-[1534px] flex flex-col items-center z-10 px-[30px]">
          
          {/* Badge: "Join Our Mission" */}
          <div className="bg-white/80 backdrop-blur-sm h-[69px] px-[54px] rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[12px] mb-[161px] z-20">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a5d4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span className="font-juicy text-[32px] text-[#4a5d4f] leading-[0.75] translate-y-1">
              Join Our Mission
            </span>
          </div>

          {/* Title: "Work With Us" */}
          <h1 
            className="font-juicy text-[180px] text-[#eb6890] leading-[0.67] mb-[71px] text-center z-20 relative"
            style={{ textShadow: '9px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Work With Us
          </h1>

          {/* Subtitles Container */}
          <div className="flex flex-col items-center text-center z-20 relative mb-[400px]">
            <p className="font-inter text-[32px] text-[#6b6b6b] leading-[1.32] max-w-[822px] mb-[8px]">
              We welcome like minded individuals to work with us to
            </p>
            <p className="font-inter font-semibold text-[32px] text-[#008991] leading-[1.32]">
              spread the word of wellness
            </p>
          </div>

          {/* FLOATING CENTER IMAGE */}
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772229327/HeroWorkWithUs_pq3xuj.png" 
            alt="Work With Us Team Illustration" 
            className="absolute object-contain pointer-events-none"
            style={{
              width: '1800px',                 
              height: 'auto',                  
              top: '-130px',                    
              left: '50%',                     
              transform: 'translateX(-50%)',   
              zIndex: 10                       
            }}
          />
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. ROLE CARDS SECTION                        */}
      {/* ========================================== */}
      {/* CHANGED: max-w-[1200px] increased to max-w-[1400px] for wider cards */}
      <section className="relative z-20 w-full max-w-[1600px] px-[30px] flex flex-col gap-[80px] pb-[100px] mt-[-180px]">
        
        {/* --- CARD 1: PARTICIPANT (Image Right) --- */}
        <div className="relative w-full bg-[#f8fdfd] border-2 border-[#e0f2f3] rounded-[32px] p-[80px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] overflow-visible">
          {/* Content Space (pushed left to avoid right image) */}
          <div className="w-full md:pr-[350px] relative z-10">
            <div className="flex items-center gap-[20px] mb-[24px] mt-[-30px]">
              <div className="w-[60px] h-[60px] bg-[#67bcc1] rounded-2xl flex items-center justify-center text-white shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              {/* CHANGED: Exact sizes and fonts from your HTML snippet */}
              <h3 className="font-juicy text-[64px] text-[#2a2a2a] leading-[0.84]  ">NutriDocs Participant</h3>
              <span className="bg-[#67bcc1] text-[#fff] font-juicy text-[24px] px-[20px] py-[8px] rounded-full leading-[0.83] mt-2">Small Impact</span>
            </div>
            
            {/* CHANGED: Text updated to 24px, #4a5d4f, and line-height 1.54 */}
            <p className="font-inter text-[22px] text-[#4a5d4f] leading-[1.54] mb-[32px] max-w-[1050px]">
              If you are someone who is interested in learning about optimal health practices and wants to share wisdom with others, we welcome you to our open access <span className="text-[#67b15f] font-semibold">WhatsApp community</span>
            </p>
            
            {/* CHANGED: Button updated to Juicy font, black text, and exact shadow values */}
            <button className="flex items-center gap-[12px] px-[49px] py-[21px] bg-[#67bcc1] text-[#000] rounded-full font-juicy text-[32px] leading-[0.75] hover:bg-[#52a5aa] transition shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Join WhatsApp Community
            </button>
          </div>
          {/* IMAGE PLACEHOLDER (Right aligned) */}
          <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772230501/Participant1_lk8h1g.png" alt="Participant Illustration" className="absolute right-[-90px] bottom-[-90px] w-[320px] h-auto object-contain z-20 pointer-events-none"  />
        </div>

        {/* --- CARD 2: CONSULTANT (Image Left) --- */}
        <div className="relative w-full bg-white border-2 border-[#e0f2f3] rounded-[32px] p-[50px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] overflow-visible">
          {/* Content Space (pushed right to avoid left image) */}
          <div className="w-full md:pl-[240px] relative z-10">
            <div className="flex items-center gap-[20px] mb-[20px]">
              <div className="w-[60px] h-[60px] bg-[#52a5aa] rounded-2xl flex items-center justify-center text-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <h3 className="font-juicy text-[48px] text-[#2a2a2a] leading-none">NutriDocs Consultant</h3>
              <span className="bg-[#52a5aa] text-white font-juicy  text-[20px] px-[16px] py-[6px] rounded-full uppercase tracking-wider">Medium Impact</span>
            </div>
            
            <p className="font-inter text-[22px] text-[#6b6b6b] leading-[1.6] mb-[30px]">
              If you are someone who is at an advanced stage of career in the health profession and want to use our environment to positively impact people at one on one level as a NutriDocs consultant, we can select and train you to do so. <br/><strong className="text-[#4a4a4a]">It is not a salaried position.</strong> It is part-time commission based consultant position.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-[16px] mb-[30px]">
              <div className="flex flex-col items-start gap-[8px] w-[264px] h-[100px] border border-gray-200 rounded-[12px] px-[16px] py-[10px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="font-juicy  text-[20px] text-[#2a2a2a]">One-on-One Impact</span>
              </div>
              <div className="flex flex-col items-start gap-[8px] w-[264px] border border-gray-200 rounded-[12px] px-[16px] py-[10px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="font-juicy  text-[20px] text-[#2a2a2a]">Commission Based</span>
              </div>
              <div className="flex flex-col items-start gap-[8px] w-[264px] border border-gray-200 rounded-[12px] px-[16px] py-[10px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span className="font-juicy  text-[20px] text-[#2a2a2a]">Part-Time Flexible</span>
              </div>
            </div>
            
            <button className="flex items-center gap-[10px] px-[32px] py-[16px] bg-[#67bcc1] text-black rounded-full font-juicy  hover:bg-[#52a5aa] transition shadow-lg">
              <svg width="39" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span className='text-[25px]'>Apply as Consultant</span>
            </button>
          </div>
          {/* IMAGE PLACEHOLDER (Left aligned) */}
          <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772229326/Consultant_s4a7q9.png" alt="Consultant Illustration" className="absolute left-[-80px] bottom-[-60px] w-[300px] h-auto object-contain z-20 pointer-events-none"  />
        </div>
        {/* --- CARD 3: PARTNER (Image Right) --- */}
        <div className="relative w-full bg-[linear-gradient(to_bottom,_#fff,_#e8faf9)] border-2 border-[rgba(0,147,156,0.62)] rounded-[32px] p-[50px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] overflow-visible">
          {/* Featured Badge */}
          <div className="absolute top-[-20px] right-[40px] bg-[#67bcc1] text-white font-juicy text-[24px] px-[24px] py-[8px] rounded-[12px] shadow-md rotate-3 flex items-center gap-[8px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            Featured
          </div>

          {/* Content Space (pushed left) */}
          <div className="w-full md:pr-[350px] relative z-10">
            <div className="flex items-center gap-[20px] mb-[20px]">
              <div className="w-[60px] h-[60px] bg-[#67bcc1] rounded-2xl flex items-center justify-center text-white shrink-0">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="font-juicy text-[64px] text-[#2a2a2a] leading-[0.84]">NutriDocs Partner</h3>
              <span className="bg-[#67bcc1] text-white font-juicy text-[32px] px-[20px] py-[8px] rounded-full leading-[0.63] mt-2">Large Impact</span>
            </div>
            
            <p className="font-inter text-[22px] text-[#4a5d4f] leading-[1.54] mb-[20px]">
              If you want to be a visionary leader who aspires to create a positive global impact, then we can train you to be NutriDocs partner and help you master the necessary technical skills (15% of success) and leadership/people skills (85% of success). The selection process takes close to 2 months and after that you get an access to ongoing training to continuously improve yourself.
            </p>
            <p className="font-inter text-[24px] text-[#4a5d4f] leading-[1.54] mb-[20px]">
              It is not a salaried position. It is a relatively tough journey because it requires lots of patience, grit, hard work and dedication. But the fruits are also equally sweet as there is no limit for growth on this journey and most people who take this path start it on a part time basis in parallel to their full time career and eventually some of them choose to work with us full time or take an early retirement.
            </p>
            <p className="font-inter text-[24px] text-[#4a5d4f] leading-[1.54] mb-[30px]">
              This book is a good summary of our story, what it takes to work with us and produce growth for yourself as well as people you serve at the highest levels. You can consider it to be constitution/blue-print of our organization and it's vision.
            </p>

            {/* Book Link */}
            <div className="bg-[#fff] rounded-[14px] py-[35px] px-[30px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] mb-[30px] w-full max-w-[900px]">
              <div className="flex items-center gap-[10px] text-[#2a2a2a] font-juicy text-[40px] leading-[0.75]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00858d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                Learn More About Our Vision
              </div>
              <a href="https://www.nutridocs.net/books" className="text-[#00858d] font-juicy text-[32px] leading-[0.7] hover:underline pl-[42px]">https://www.nutridocs.net/books</a>
            </div>

            {/* Grid Badges */}
            {/* CHANGED: Unpacked inner divs so icon, title, and desc stack perfectly vertically. Increased padding to p-[24px]. */}
            <div className="grid grid-cols-2 gap-[24px] mb-[40px] max-w-[900px]">
              <div className="bg-[#fff] rounded-[14px] p-[24px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col items-start gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span className="font-juicy text-[32px] text-[#2a2a2a] leading-[0.63]">Global Impact</span>
                <p className="font-inter text-xl text-[#6b6b6b] leading-[1]">Create positive change worldwide</p>
              </div>
              <div className="bg-[#fff] rounded-[14px] p-[24px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col items-start gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                <span className="font-juicy text-[32px] text-[#2a2a2a] leading-[0.63]">2-Month Selection</span>
                <p className="font-inter text-xl text-[#6b6b6b] leading-[1]">Comprehensive training process</p>
              </div>
              <div className="bg-[#fff] rounded-[14px] p-[24px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col items-start gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                <span className="font-juicy text-[32px] text-[#2a2a2a] leading-[0.63]">Unlimited Growth</span>
                <p className="font-inter text-xl text-[#6b6b6b] leading-[1]">No ceiling on your potential</p>
              </div>
              <div className="bg-[#fff] rounded-[14px] p-[24px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),_0_4px_6px_-1px_rgba(0,0,0,0.1)] flex flex-col items-start gap-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span className="font-juicy text-[32px] text-[#2a2a2a] leading-[0.63]">Leadership Focus</span>
                <p className="font-inter text-xl text-[#6b6b6b] leading-[1]">85% people skills mastery</p>
              </div>
            </div>
            
            <button className="flex items-center gap-[12px] px-[29px] py-[12px] bg-[linear-gradient(to_bottom,_#67bcc1,_#c0fbff)] text-[#fff] rounded-full font-juicy text-[32px] leading-[0.75] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:opacity-90 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Apply as Partner
            </button>
          </div>
          {/* IMAGE PLACEHOLDER (Right aligned) */}
          <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772229327/Partner_j4jqyr.png" alt="Partner Illustration" className="absolute right-[-40px] bottom-[20px] w-[450px] h-auto object-contain z-20 pointer-events-none"  />
        </div>

        </section>
      {/* ========================================== */}
      {/* 3. CONTACT US BLOCK (Gradient)               */}
      {/* ========================================== */}
      {/* CHANGED: Increased max-w to 1144px, applied the exact 3-stop gradient, and added the heavy drop shadow */}
      <section className="relative w-full max-w-[1144px] bg-[linear-gradient(to_bottom,_#67bcc1,_#c4fcff_50%,_#009098)] rounded-[32px] p-[80px] flex flex-col items-center mb-[100px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-20">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-[20px]"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        
        <h2 className="font-juicy text-[64px] text-white leading-none mb-[50px] text-center drop-shadow-md">
          Contact us to get Started!
        </h2>

        {/* Box 1 */}
        {/* CHANGED: Increased padding and font sizes slightly to fill the wider space */}
        <div className="w-full bg-white/20 backdrop-blur-md border border-white/40 rounded-[16px] p-[40px] flex flex-col items-center text-center mb-[24px] shadow-sm">
          <div className="flex items-center gap-[10px] mb-[12px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <h3 className="font-juicy text-[32px] text-white leading-none">Fill the Online Form</h3>
          </div>
          <p className="font-inter text-[18px] text-white/95 mb-[12px]">Please be as descriptive as possible about your background and interests</p>
          <a href="https://www.nutridocs.net/contact-us" className="font-inter font-semibold text-[20px] text-white underline hover:text-[#009098] transition">https://www.nutridocs.net/contact-us</a>
        </div>

        {/* Box 2 */}
        <div className="w-full bg-white/20 backdrop-blur-md border border-white/40 rounded-[16px] p-[40px] flex flex-col items-center text-center mb-[50px] shadow-sm">
          <div className="flex items-center gap-[10px] mb-[12px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <h3 className="font-juicy text-[32px] text-white leading-none">Or Contact Us Directly</h3>
          </div>
          <p className="font-inter text-[18px] text-white/95 mb-[16px]">In case you don't hear back within 24 hours, please send a WhatsApp text:</p>
          <p className="font-inter font-bold text-[20px] text-white">Dr. Ved: +91 7350918335</p>
          <p className="font-inter font-bold text-[20px] text-white">Mithra: +1 7372637378</p>
        </div>

        {/* CHANGED: Button updated to Juicy font and #009098 text color for better contrast against the new background */}
        <button className="flex items-center gap-[12px] px-[48px] py-[20px] bg-white text-[#009098] rounded-full font-juicy text-[32px] leading-none hover:bg-gray-100 transition shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          Get Started Now
        </button>
      </section>

      {/* --- CTA BANNER --- */}
      <NewsletterCTA theme="team" />

    </div>
  );
}