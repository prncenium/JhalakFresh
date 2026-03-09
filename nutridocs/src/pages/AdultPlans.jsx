import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero'; // Ensure this path matches your folder structure
import NewsletterCTA from '../components/common/NewsletterCTA';

export default function AdultPlans() {
  return (
    <div className="w-full flex flex-col items-center bg-[#fafcfc]">
      
      {/* --- HERO SECTION --- */}
      <PageHero 
        title="Nutri Adults"
        titleColor="text-[#eb6890]"
        titleShadow={true}
        badgeType="heart"
        badgeText="Children’s Health Program"
        subtitle1="Prevent and reverse diseases through"
        subtitle2="nutrition science and lifestyle transformation"
        subtitle2Color="text-[#00c7d3]"
      />
      
      {/* --- THE SECRET TO GOOD HEALTH SECTION --- */}
      <section className="w-full max-w-[1589px] px-[20px] md:px-[40px] mt-[80px] relative flex justify-center">
        
        {/* Main Container */}
        <div className="relative w-full border border-[rgba(103,177,95,0.2)] rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[linear-gradient(to_bottom,_#fff,_#e5f9f8)] pt-[60px] px-[30px] md:px-[60px] pb-[80px] flex flex-col items-center">
          
          {/* Section Heading */}
          <h2 className="font-juicy text-[50px] md:text-[80px] text-[#4a5d4f] leading-[1.05] text-center mb-[10px]">
            The Secret to Good Health
          </h2>
          
          {/* Gradient Underline */}
          <div className="w-[200px] md:w-[345px] h-[8px] rounded-full bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] mb-[69px]"></div>

          {/* Cards Wrapper */}
          <div className="w-full flex flex-col gap-[59px] max-w-[1300px]">
            
            {/* Card 1: Kitchen / Teal Gradient */}
            <div className="w-full rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] p-[32px] md:p-[40px] flex flex-col md:flex-row gap-[24px] items-start shadow-sm">
              <div className="shrink-0 mt-1">
                {/* Apple Icon */}
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M10 2c1 .5 2 2 2 5"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-juicy text-[36px] md:text-[48px] text-white leading-[0.88] mb-[16px]">
                  Does Not Lie in the Hospital, But Lies in Your Kitchen!
                </h3>
                <p className="font-inter text-[20px] md:text-[24px] text-white/95 leading-[1.4]">
                  Instead of managing symptoms with medication, <strong className="font-bold">prevent or reverse your diseases</strong> <br/> with NutriDocs!
                </p>
              </div>
            </div>

            {/* Card 2: Misinformation / White */}
            <div className="w-full rounded-2xl bg-[#fff] p-[32px] md:p-[40px] flex flex-col md:flex-row gap-[24px] items-start shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)]">
              <div className="shrink-0 mt-1">
                {/* Exclamation Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a] leading-[0.9] mb-[20px]">
                  The Misinformation Problem
                </h3>
                <div className="font-inter text-[18px] md:text-[22px] text-[#4a5d4f] leading-[1.4] flex flex-col gap-[20px]">
                  <p>
                    Our diseases are <strong className="font-bold">not due to poor healthy choices</strong> most often, but the choices we make <strong className="font-bold">thinking they are healthy</strong> when the misinformation is the issue.
                  </p>
                  <p>
                    Think about this: if the foods we thought and the amounts of exercise we thought is truly healthy, then <strong className="font-bold"><br/> why are there most diseased and sick individuals today than before?</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Genetics / Light Cyan */}
            <div className="w-full rounded-2xl bg-[linear-gradient(to_bottom,_#d1fcff,_#fff)] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] p-[32px] md:p-[40px] flex flex-col md:flex-row gap-[24px] items-start">
              <div className="shrink-0 mt-1">
                {/* Heart Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a] leading-[0.83] mb-[20px]">
                  It's Not Just Genetics
                </h3>
                <div className="font-inter text-[18px] md:text-[22px] text-[#4a5d4f] leading-[1.4] flex flex-col gap-[20px]">
                  <p>
                    If the disease runs in your family, it is most likely because <strong className="font-bold">our diet/lifestyle is very similar to our family.</strong> Lifestyle gets passed on from generation to generation, after all!
                  </p>
                  <p className="text-[#67b15f] font-semibold">
                    In fact, only about 10% of breast cancer cases are genetic in nature!
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Bottom Button */}
          <button className="absolute bottom-[-145px] left-1/2 transform -translate-x-1/2 w-[280px] md:w-[630px] h-[80px] md:h-[97px] flex justify-center items-center rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] shadow-[9px_9px_21.7px_0_rgba(0,0,0,0.25),_-11px_8px_28.3px_0_rgba(0,0,0,0.15)] hover:scale-105 transition-transform duration-300 z-10">
            <span className="font-juicy text-[40px] md:text-[48px] text-white leading-[0.88]">
              Book a Consult
            </span>
          </button>

        </div>
      </section>

      {/* --- WHAT YOU'LL LEARN SECTION --- */}
      {/* Note: mt-[200px] ensures it clears the absolute positioned button from above */}
      <section className="w-full max-w-[1600px] px-[20px] md:px-[40px] mt-[200px] flex flex-col xl:flex-row gap-[45px] justify-center items-stretch">
        
        {/* Left Column: Text Card */}
        <div className="w-full xl:max-w-[945px] xl:h-[726px] bg-[#fff] rounded-3xl shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] p-[30px] md:p-[50px] flex flex-col justify-center">
          
          <h2 className="font-juicy text-[48px] md:text-[64px] text-[#2a2a2a] leading-[0.84] mb-[45px]">
            What You'll Learn
          </h2>

          <div className="flex flex-col gap-[35px]">
            
            {/* Item 1 */}
            <div className="flex gap-[16px] items-start">
              {/* Check Icon */}
              <div className="shrink-0 mt-[6px] w-[24px] h-[24px] rounded-full border-2 border-[#67b15f] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a]/90 leading-[0.68] mb-[16px]">
                  Identify Hidden Dangers
                </h4>
                <p className="font-inter text-[24px] md:text-[32px] text-[#6b6b6b] leading-[1.2]">
                  Discover the hidden fructose and lectins/gluten in your everyday foods
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-[16px] items-start">
              <div className="shrink-0 mt-[6px] w-[24px] h-[24px] rounded-full border-2 border-[#67b15f] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a]/90 leading-[0.68] mb-[16px]">
                  Reverse Diseases Naturally
                </h4>
                <p className="font-inter text-[24px] md:text-[32px] text-[#6b6b6b] leading-[1.2]">
                  Learn evidence-based methods to reverse chronic conditions without medication
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-[16px] items-start">
              <div className="shrink-0 mt-[6px] w-[24px] h-[24px] rounded-full border-2 border-[#67b15f] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a]/90 leading-[0.68] mb-[16px]">
                  Sustainable Lifestyle
                </h4>
                <p className="font-inter text-[24px] md:text-[32px] text-[#6b6b6b] leading-[1.2]">
                  Simple, affordable modifications that fit into your daily routine
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-[16px] items-start">
              <div className="shrink-0 mt-[6px] w-[24px] h-[24px] rounded-full border-2 border-[#67b15f] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a]/90 leading-[0.68] mb-[16px]">
                  Personalized Guidance
                </h4>
                <p className="font-inter text-[24px] md:text-[32px] text-[#6b6b6b] leading-[1.2]">
                  One-on-one support tailored to your specific health goals and challenges
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Images */}
        <div className="w-full xl:w-[581px] flex flex-col gap-[25px]">
          
          {/* Top Image */}
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772953672/BookFruit_enjmom.png" 
            alt="Nutrition and Health" 
            className="w-full h-[377px] rounded-3xl object-cover shadow-sm transition-transform hover:scale-[1.02] duration-300"
          />

          {/* Bottom Image */}
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772953672/BookFruit2_mh8dp8.png" 
            alt="Healthy Ingredients" 
            className="w-full h-[324px] rounded-3xl object-cover shadow-sm transition-transform hover:scale-[1.02] duration-300"
          />

        </div>

      </section>

      {/* --- INTAKE FORM SECTION --- */}
      <section className="w-full max-w-[1600px] px-[20px] md:px-[40px] mt-[150px] flex justify-center">
        
        {/* Form Container */}
        <div className="relative w-full max-w-[1105px] border border-[rgba(103,177,95,0.2)] rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[linear-gradient(to_bottom,_#fff,_#e5f9f8)] pt-[41px] px-[20px] md:px-[41px] pb-[40px] flex flex-col items-center">
          
          {/* Top Banner */}
          <div className="w-full h-[66px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] flex items-center justify-center mb-[37px] shadow-sm">
            <span className="font-juicy text-[36px] md:text-[48px] text-white leading-[0.88]">
              Book a Consult
            </span>
          </div>

          {/* Form Title */}
          <h2 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a] leading-[0.88] text-center max-w-[500px] mb-[40px]">
            NutriDocs: Adult Health + Wellness Intake
          </h2>

          {/* The Actual Form */}
          <form className="w-full flex flex-col gap-[24px] max-w-[900px]">
            
            {/* Input Group: Full Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Your full name" 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
                required
              />
            </div>

            {/* Input Group: Age */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Age <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                placeholder="Your age" 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
                required
              />
            </div>

            {/* Input Group: Email */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                placeholder="your.email@gmail.com" 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
                required
              />
            </div>

            {/* Input Group: Phone */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
                required
              />
            </div>

            {/* Input Group: Health Conditions */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Current Health Conditions
              </label>
              <input 
                type="text" 
                placeholder="e.g., Diabetes, High BP, PCOS, etc." 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
              />
            </div>

            {/* Textarea: Health Goals */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                What are your health goals?
              </label>
              <textarea 
                placeholder="Please describe any health concerns or goals..." 
                className="w-full min-h-[120px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white p-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors resize-y"
              ></textarea>
            </div>

            {/* Checkbox & Fee Info */}
            <div className="flex flex-col gap-[20px] mt-[10px]">
              <label className="flex items-center gap-[12px] cursor-pointer group">
                <div className="relative flex items-center justify-center w-[24px] h-[24px] rounded bg-white border border-[rgba(103,177,95,0.5)] group-hover:border-[#67bcc1] transition-colors">
                  <input type="checkbox" className="peer appearance-none absolute w-full h-full cursor-pointer" required />
                  <svg className="hidden peer-checked:block w-[14px] h-[14px] text-[#67bcc1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-inter text-lg text-[#6b6b6b]">
                  I agree to pay the consultation fee to confirm my booking.
                </span>
              </label>

              <span className="font-juicy text-[32px] md:text-[36px] text-[rgba(10,10,10,0.62)] leading-[0.67]">
                $5 per consultation
              </span>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full h-[60px] mt-[20px] rounded-full bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[10px] hover:scale-[1.01] transition-transform duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span className="font-inter text-xl font-bold text-white tracking-wide">
                Schedule And Pay
              </span>
            </button>

            {/* Required Field Text */}
            <p className="font-inter text-sm text-[#6b6b6b] mt-2">
              <span className="text-red-500">*</span> Indicates required question
            </p>

          </form>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED SECTION --- */}
      <section className="w-full max-w-[1600px] px-[20px] md:px-[40px] mt-[150px] flex flex-col items-center relative">
        
        {/* Section Title */}
        <h2 className="font-juicy text-[48px] md:text-[64px] text-[#2a2a2a] leading-[0.94] text-center max-w-[750px] mb-[70px]">
          What's Included in Nutri Adults
        </h2>

        {/* 3-Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px] xl:gap-[135px]">
          
          {/* Card 1: Vitality Program */}
          <div className="w-full bg-[#fff] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] pt-[32px] pr-[30px] xl:pr-[46px] pb-[35px] pl-[32px] flex flex-col">
            <div className="w-[64px] h-[64px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] flex items-center justify-center mb-[33px]">
              {/* Heart Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 className="font-juicy text-[28px] xl:text-[32px] text-[#2a2a2a] leading-[1.13] mb-[32px]">
              Vitality Program
            </h3>
            <p className="font-inter text-[18px] xl:text-[20px] text-[#6b6b6b] leading-[1.7]">
              Comprehensive health education for eating healthy, sleeping well, and staying hygienic - all while keeping it fun!
            </p>
          </div>

          {/* Card 2: Mental Development */}
          <div className="w-full bg-[#fff] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] pt-[32px] pr-[30px] xl:pr-[46px] pb-[35px] pl-[32px] flex flex-col">
            <div className="w-[64px] h-[64px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] flex items-center justify-center mb-[33px]">
              {/* Brain Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
            </div>
            <h3 className="font-juicy text-[28px] xl:text-[32px] text-[#2a2a2a] leading-[1.13] mb-[32px]">
              Mental Development
            </h3>
            <p className="font-inter text-[18px] xl:text-[20px] text-[#6b6b6b] leading-[1.7]">
              Montessori-inspired parenting program to develop independence, character, and life skills
            </p>
          </div>

          {/* Card 3: Prevention Strategy */}
          <div className="w-full bg-[#fff] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] pt-[32px] pr-[30px] xl:pr-[46px] pb-[35px] pl-[32px] flex flex-col">
            <div className="w-[64px] h-[64px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#a5faff)] flex items-center justify-center mb-[33px]">
              {/* Shield Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="font-juicy text-[28px] xl:text-[32px] text-[#2a2a2a] leading-[1.13] mb-[32px]">
              Prevention Strategy
            </h3>
            <p className="font-inter text-[18px] xl:text-[20px] text-[#6b6b6b] leading-[1.7]">
              Long-term affordable health strategies to prevent future diseases and maintain optimal wellness
            </p>
          </div>

        </div>

        {/* CHANGED: Moved the Back Arrow below the grid and aligned it to the left */}
        <div className="w-full flex justify-start mt-[50px] mb-[50px]">
          <Link 
            to="/plans" 
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full hover:bg-gray-200 transition-colors -ml-[10px]"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a5d4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        </div>

      </section>

      

      <NewsletterCTA 
  theme="ready" 
  title="Ready to Get Started*"
  subtitle="Join our NutriAdults program and build the foundation for a healthy, successful life"
  buttonText="Book Your Consultation"
/>
    </div>

    
  );
}