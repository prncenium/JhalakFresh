import React, { useState } from 'react';
import ContactHero from '../components/common/ContactHero';
import NewsletterCTA from '../components/common/NewsletterCTA';

export default function BooksPage() {
  // State to track which format is selected (defaults to 'Paperback')
  const [selectedFormat, setSelectedFormat] = useState('Paperback');
  // State to track which region is selected (defaults to 'India')
  const [selectedRegion, setSelectedRegion] = useState('India');

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fafcfc]">
       
       {/* 1. HERO SECTION */}
       <ContactHero type="books" />
       
       {/* 2. STORY BANNER */}
       <section className="relative z-20 w-full max-w-[1285px] px-[30px] mt-[-60px] lg:mt-[-80px] mb-[80px]">
         <div className="w-full bg-[#fff] rounded-3xl shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] py-[48px] px-[40px] flex flex-col items-center justify-center">
           <h2 className="font-juicy text-[64px] md:text-[96px] text-[#2a2a2a] leading-[0.63] text-center mb-[32px]">
             The Story Behind Nutri Docs
           </h2>
           {/* Underline Gradient */}
           <div className="w-full max-w-[519px] h-[4px] rounded-full bg-[linear-gradient(to_right,_#67b15f,_#4a5d4f)]"></div>
         </div>
       </section>

       {/* 3. BOOK DETAILS SECTION */}
       <section className="w-full max-w-[1500px] px-[30px] flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] mb-[100px]">
         
         {/* LEFT COLUMN: Book Image */}
         <div className="w-full lg:w-[450px] flex justify-center lg:justify-end items-start shrink-0 pt-[20px]">
           <img 
             src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772265027/book_dfa49i.png" 
             alt="Driving to Flying Book" 
             className="w-[350px] xl:w-[450px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105" 
           />
         </div>

         {/* RIGHT COLUMN: Book Information & Formats */}
         <div className="flex-1 flex flex-col items-start pt-[10px] pb-[40px]">
           
           {/* Pill Badge */}
           <div className="bg-[#67bcc1] px-[42px] py-[21px] rounded-full shadow-[4px_4px_16.1px_0_rgba(74,93,79,0.42)] mb-[28px]">
             <span className="font-juicy text-[32px] text-[#fff] leading-[0.63]">
               NEW BOOK RELEASE!
             </span>
           </div>

           {/* Title */}
           <h3 className="font-inter font-bold text-[48px] text-[#2a2a2a] leading-[1.09] mb-[28px]">
             Driving to Flying
           </h3>
           
           {/* Subtitle */}
           <p className="font-inter text-[36px] text-[#00a5af] leading-[1] mb-[28px]">
             The Secret to Becoming the Pilot of Your Life
           </p>

           {/* Author Line */}
           <div className="flex items-center gap-[11px] mb-[52px] font-inter text-[32px] leading-[0.63]">
             <span className="text-[#6b6b6b]">By</span>
             <span className="text-[#4a5d4f] font-semibold">Dr. Ved Prashik & Mithra Prashik</span>
           </div>

           {/* Description Paragraphs */}
           <div className="font-inter text-[24px] text-[#2a2a2a] leading-[2.3] flex flex-col gap-[28px] max-w-[950px] mb-[60px]">
             <p>
               NutriDocs was founded after an epiphany behind the research field and the real time impact timeline. We believe that we are not in a competition with other healthcare providers, instead we are on a collaborative mission to help everyone have optimal health. This is why we decided to publicly release our "secrets" in the form of this book for the greater good.
             </p>
             <p>
               NutriDocs was not simply just a dream but also a way to start an entrepreneurial journey. If you're looking to create impact in the health field, start a business, or just know the journey behind NutriDocs, start reading!
             </p>
             <p>
               If you find yourself thinking that Fridays are way more exciting than the dreaded Mondays, then it's time to rethink your life and career decisions! Imagine if every day of the week was a great day, doing what you love. That can be a reality if you apply what you learn in this book.
             </p>
           </div>

           {/* ========================================== */}
           {/* CHOOSE YOUR FORMAT SECTION                   */}
           {/* ========================================== */}
           <div className="w-full max-w-[950px]">
             <h4 className="font-inter text-2xl font-semibold text-[#2a2a2a] mb-[36px]">
               Choose Your Format
             </h4>

             {/* Grid of Format Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[40px] mb-[60px]">
               
               {/* Card 1: Paperback */}
               <button 
                 onClick={() => setSelectedFormat('Paperback')}
                 className={`relative w-full rounded-[14px] pt-[32px] pb-[32px] px-[24px] flex gap-[20px] text-left cursor-pointer transition ${selectedFormat === 'Paperback' ? 'border-[2.5px] border-[#67bcc1] bg-[#fff] shadow-sm' : 'border border-gray-200 bg-[#fff] opacity-90 hover:border-[#67bcc1]'}`}
               >
                 <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-[#67bcc1] rounded-full px-[20px] py-[6px] z-10">
                   <span className="font-inter text-xl font-bold text-[#67bcc1] leading-none whitespace-nowrap">Most Popular</span>
                 </div>
                 {/* Checkmark conditional rendering */}
                 {selectedFormat === 'Paperback' && (
                   <div className="absolute top-[16px] right-[16px]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="#67bcc1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                   </div>
                 )}
                 <div className={`w-[68px] h-[68px] rounded-[14px] flex items-center justify-center shrink-0 mt-[8px] ${selectedFormat === 'Paperback' ? 'bg-[#67bcc1]' : 'bg-[#f8f9f9] border border-gray-100'}`}>
                   {/* Book SVG restored */}
                   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={selectedFormat === 'Paperback' ? 'white' : '#888'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                   </svg>
                 </div>
                 <div className="flex flex-col mt-[8px]">
                   <span className="font-inter text-xl font-semibold text-[#2a2a2a] leading-[1.2] mb-[8px]">Paperback</span>
                   <span className="font-inter text-xl text-[#6b6b6b] leading-[1.25] mb-[16px] max-w-[160px]">Physical book shipped to you</span>
                   <span className="font-serif text-[28px] text-[#67bcc1] leading-none mt-auto">$14.99</span>
                 </div>
               </button>

               {/* Card 2: Hardcover */}
               <button 
                 onClick={() => setSelectedFormat('Hardcover')}
                 className={`relative w-full rounded-[14px] pt-[32px] pb-[32px] px-[24px] flex gap-[20px] text-left cursor-pointer transition ${selectedFormat === 'Hardcover' ? 'border-[2.5px] border-[#67bcc1] bg-[#fff] shadow-sm' : 'border border-gray-200 bg-[#fff] opacity-90 hover:border-[#67bcc1]'}`}
               >
                 <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border border-[#67bcc1] rounded-full px-[20px] py-[6px] z-10">
                   <span className="font-inter text-xl font-bold text-[#67bcc1] leading-none whitespace-nowrap">Premium</span>
                 </div>
                 {selectedFormat === 'Hardcover' && (
                   <div className="absolute top-[16px] right-[16px]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="#67bcc1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                   </div>
                 )}
                 <div className={`w-[68px] h-[68px] rounded-[14px] flex items-center justify-center shrink-0 mt-[8px] ${selectedFormat === 'Hardcover' ? 'bg-[#67bcc1]' : 'bg-[#f8f9f9] border border-gray-100'}`}>
                   {/* Box SVG restored */}
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={selectedFormat === 'Hardcover' ? 'white' : '#888'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                 </div>
                 <div className="flex flex-col mt-[8px]">
                   <span className="font-inter text-xl font-semibold text-[#2a2a2a] leading-[1.2] mb-[8px]">Hardcover</span>
                   <span className="font-inter text-xl text-[#6b6b6b] leading-[1.25] mb-[16px] max-w-[160px]">Premium edition with dust jacket</span>
                   <span className="font-serif text-[28px] text-[#67bcc1] leading-none mt-auto">$24.99</span>
                 </div>
               </button>

               {/* Card 3: E-Book */}
               <button 
                 onClick={() => setSelectedFormat('E-Book')}
                 className={`relative w-full rounded-[14px] pt-[32px] pb-[32px] px-[24px] mt-[10px] flex gap-[20px] text-left cursor-pointer transition ${selectedFormat === 'E-Book' ? 'border-[2.5px] border-[#67bcc1] bg-[#fff] shadow-sm' : 'border border-gray-200 bg-[#fff] opacity-90 hover:border-[#67bcc1]'}`}
               >
                 <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white border border-[#67bcc1] rounded-full px-[20px] py-[6px] z-10">
                   <span className="font-inter text-xl font-bold text-[#67bcc1] leading-none whitespace-nowrap">Instant Access</span>
                 </div>
                 {selectedFormat === 'E-Book' && (
                   <div className="absolute top-[16px] right-[16px]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="#67bcc1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                   </div>
                 )}
                 <div className={`w-[68px] h-[68px] rounded-[14px] flex items-center justify-center shrink-0 mt-[8px] ${selectedFormat === 'E-Book' ? 'bg-[#67bcc1]' : 'bg-[#f8f9f9] border border-gray-100'}`}>
                   {/* Book SVG restored */}
                   <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={selectedFormat === 'E-Book' ? 'white' : '#888'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                   </svg>
                 </div>
                 <div className="flex flex-col mt-[8px]">
                   <span className="font-inter text-xl font-semibold text-[#2a2a2a] leading-[1.2] mb-[8px]">E-Book</span>
                   <span className="font-inter text-xl text-[#6b6b6b] leading-[1.25] mb-[16px] max-w-[160px]">Instant digital download</span>
                   <span className="font-serif text-[28px] text-[#67bcc1] leading-none mt-auto">$9.99</span>
                 </div>
               </button>

               {/* Card 4: Audiobook */}
               <button 
                 onClick={() => setSelectedFormat('Audiobook')}
                 className={`relative w-full rounded-[14px] pt-[32px] pb-[32px] px-[24px] mt-[10px] flex gap-[20px] text-left cursor-pointer transition ${selectedFormat === 'Audiobook' ? 'border-[2.5px] border-[#67bcc1] bg-[#fff] shadow-sm' : 'border border-gray-200 bg-[#fff] opacity-90 hover:border-[#67bcc1]'}`}
               >
                 <div className="absolute top-0 left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#67bcc1] rounded-full px-[20px] py-[6px] z-10">
                   <span className="font-inter text-xl font-bold text-[#fff] leading-none whitespace-nowrap">FREE</span>
                 </div>
                 {selectedFormat === 'Audiobook' && (
                   <div className="absolute top-[16px] right-[16px]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="#67bcc1"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                   </div>
                 )}
                 <div className={`w-[68px] h-[68px] rounded-[14px] flex items-center justify-center shrink-0 mt-[8px] ${selectedFormat === 'Audiobook' ? 'bg-[#67bcc1]' : 'bg-[#f8f9f9] border border-gray-100'}`}>
                   {/* Headphones SVG restored */}
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={selectedFormat === 'Audiobook' ? 'white' : '#888'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                 </div>
                 <div className="flex flex-col mt-[8px]">
                   <span className="font-inter text-xl font-semibold text-[#2a2a2a] leading-[1.2] mb-[8px]">Audiobook</span>
                   <span className="font-inter text-xl text-[#6b6b6b] leading-[1.25] mb-[16px] max-w-[160px]">Free on YouTube</span>
                   <span className="font-serif text-[28px] text-[#67bcc1] leading-none mt-auto uppercase">Free</span>
                 </div>
               </button>
             </div>

             {/* Region Selectors */}
             <div className="flex flex-col sm:flex-row gap-[24px] mb-[60px] w-full">
               <button 
                 onClick={() => setSelectedRegion('India')}
                 className={`flex-1 flex justify-center items-center gap-[10px] py-[16px] rounded-full border-2 transition ${selectedRegion === 'India' ? 'border-[#67bcc1] bg-[#f4fafa] transition' : 'border-gray-200 bg-white hover:border-[#67bcc1]'}`}
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                 <span className="font-inter text-[32px] font-semibold text-[#67bcc1] leading-[0.75] mt-1">India</span>
               </button>
               <button 
                 onClick={() => setSelectedRegion('USA')}
                 className={`flex-1 flex justify-center items-center gap-[10px] py-[16px] rounded-full border-2 transition ${selectedRegion === 'USA' ? 'border-[#67bcc1] bg-[#f4fafa]' : 'border-gray-200 bg-white hover:border-[#67bcc1]'}`}
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                 <span className="font-inter text-[32px] font-semibold text-[#67bcc1] leading-[0.75] mt-1">USA</span>
               </button>
             </div>

             {/* Perks Icons */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] mb-[50px] w-full pl-[10px]">
               <div className="flex items-center gap-[15px]">
                 <div className="w-[50px] h-[50px] rounded-full bg-[rgba(103,177,95,0.1)] flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                 </div>
                 <span className="font-inter text-2xl text-[#6b6b6b] leading-[0.83]">Free shipping</span>
               </div>
               <div className="flex items-center gap-[15px]">
                 <div className="w-[50px] h-[50px] rounded-full bg-[rgba(103,177,95,0.1)] flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                 </div>
                 <span className="font-inter text-2xl text-[#6b6b6b] leading-[0.83]">Secure checkout</span>
               </div>
               <div className="flex items-center gap-[15px]">
                 <div className="w-[50px] h-[50px] rounded-full bg-[rgba(103,177,95,0.1)] flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                 </div>
                 <span className="font-inter text-2xl text-[#6b6b6b] leading-[0.83]">Easy returns</span>
               </div>
               <div className="flex items-center gap-[15px]">
                 <div className="w-[50px] h-[50px] rounded-full bg-[rgba(103,177,95,0.1)] flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                 </div>
                 <span className="font-inter text-2xl text-[#6b6b6b] leading-[0.83]">Email support</span>
               </div>
             </div>

             {/* Help Banner */}
<div className="w-full bg-[#e5f9f8] rounded-2xl py-[24px] px-[32px] flex flex-col xl:flex-row items-start xl:items-center justify-between gap-[20px]">
  <p className="font-inter text-2xl text-[#4a5d4f] leading-[1.58] m-0">
    <strong className="font-bold">Need help?</strong> If you face technical issues accessing the book, we'd be happy to share a complimentary copy.
  </p>
  {/* The call-to-action link, now positioned slightly lower in the vertical stack on small screens with 'mt-4', and resets on 'xl:' screens with 'xl:mt-0'. This separation creates a clear space between the text at the top and the link below it in the stacked layout, effectively moving them apart vertically as shown in img2. */}
  <a href="#" className="font-inter text-2xl font-semibold text-[#67bcc1] leading-[1] underline whitespace-nowrap shrink-0 hover:text-[#4a5d4f] transition mt-4 xl:mt-0">
    Let us know
  </a>
</div>

           </div>
           
         </div>
       </section>

       <NewsletterCTA />

    </div>
  );
}