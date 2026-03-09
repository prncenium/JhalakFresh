import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterCTA from '../components/common/NewsletterCTA';
import PageHero from '../components/common/PageHero'; // Ensure this path matches your folder structure

export default function KidsPlans() {
  return (
    <div className="w-full flex flex-col items-center bg-[#e5f9f8]/30 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <PageHero 
        title="NutriKids"
        titleColor="text-[#eb6890]"
        titleShadow={true}
        badgeType="heart"
        badgeText="Children’s Health Program"
        subtitle1="Empowering children through healthy living and"
        subtitle2="mindful development"
        subtitle2Color="text-[#00c7d3]"
      />
      
      {/* --- CARDS SECTION WRAPPER --- */}
      {/* Increased gap to 180px to push the second card further down, away from the button */}
      <section className="w-full max-w-[1600px] px-[20px] md:px-[40px] mt-[80px] relative flex flex-col items-center gap-[180px]">
        
        {/* ========================================== */}
        {/* CARD 1: OUR GOAL & PHYSICAL WELL-BEING     */}
        {/* ========================================== */}
        {/* Increased pb to 180px to push the text further up, away from the button */}
        <div className="relative w-full max-w-[1549px] bg-white rounded-[32px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] pt-[50px] px-[30px] md:px-[80px] pb-[180px] flex flex-col">
          
          {/* --- TOP PART: Our Goal --- */}
          <div className="flex flex-col w-full">
            <h2 className="font-juicy text-[40px] md:text-[48px] text-[#2a2a2a] leading-[1.13] mb-[30px]">
              Our Goal at NutriDocs
            </h2>
            
            <p className="font-inter text-[22px] md:text-[32px] text-[#4a5d4f] leading-[1.34] mb-[30px]">
              Our goal at NutriDocs is primarily <strong className="font-bold">disease prevention and healthy living</strong>
            </p>
            
            <p className="font-inter text-[22px] md:text-[32px] text-[#4a5d4f] leading-[1.34] max-w-[1374px]">
              For kids, this means that we can help them learn why we should be healthy, how to lead a healthy lifestyle, and guide them with their parents to utilize their full potential and develop their minds well.
            </p>
          </div>

          {/* --- GREEN SEPARATOR LINE --- */}
          <div className="w-[150px] h-[3px] bg-[#67b15f] my-[50px] md:my-[60px]"></div>

          {/* --- BOTTOM PART: Physical Well-Being Focus --- */}
          <div className="flex flex-col w-full">
            <h2 className="font-juicy text-[40px] md:text-[48px] text-[#2a2a2a] leading-[0.75] mb-[40px]">
              Physical Well-Being Focus
            </h2>
            
            <p className="font-inter text-[22px] md:text-[32px] text-[#4a5d4f] leading-[1.38] max-w-[1374px]">
              Focusing on their <strong className="font-bold">physical well being</strong> we have the NutriKids Vitality Program which teaches them through the support of their parents to lead a healthy life, from eating healthy, sleeping on time, staying hygienic, and more - all the while keeping it fun in the process! If children already do have a disease, we do help to reverse and delete diseases through this program.
            </p>
          </div>

          {/* --- FLOATING BOTTOM BUTTON --- */}
          <button className="absolute bottom-[-123px] left-1/2 transform -translate-x-1/2 w-[280px] md:w-[630px] h-[66px] flex justify-center items-center rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#98f9ff)] shadow-[9px_9px_21.7px_0_rgba(0,0,0,0.25),_-11px_8px_28.3px_0_rgba(0,0,0,0.25)] hover:scale-[1.02] transition-transform duration-300 z-10">
            <span className="font-juicy text-[36px] md:text-[48px] text-white leading-[0.88] pt-[4px]">
              Book a Consult
            </span>
          </button>

        </div>

        {/* ========================================== */}
        {/* CARD 2: MENTAL ABILITIES DEVELOPMENT       */}
        {/* ========================================== */}
        <div className="w-full max-w-[1549px] bg-white rounded-[32px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] pt-[50px] px-[30px] md:px-[80px] pb-[60px] flex flex-col">
          
          <h2 className="font-juicy text-[40px] md:text-[48px] text-[#2a2a2a] leading-[0.75] mb-[40px]">
            Mental Abilities Development
          </h2>
          
          <div className="flex flex-col gap-[30px]">
            <p className="font-inter text-[22px] md:text-[32px] text-[#4a5d4f] leading-[1.53]">
              Focusing on their <strong className="font-bold">mental abilities</strong>, NutriKids Monti + Parenting Program which allows parents to learn the whys and hows to best support and raise their child in a way that toddler tantrums or teenage turmoil are not overwhelming for both parent or child, the child learns to become independent and interdependent, and prepares them for a life of success ahead with the right set of character, principles, mindset and attitude.
            </p>
            
            <p className="font-inter text-[22px] md:text-[32px] text-[#4a5d4f] leading-[1.41]">
              Individual parenting coaching and counseling sessions to deal with certain one off challenges are also available.
            </p>
          </div>

        </div>

      </section>

      {/* --- INTAKE FORM SECTION --- */}
      <section className="w-full max-w-[1600px] px-[20px] md:px-[40px] mt-[150px] flex justify-center">
        
        {/* Form Container */}
        <div className="relative w-full max-w-[1105px] border border-[rgba(103,177,95,0.2)] rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-[linear-gradient(to_bottom,_#fff,_#e5f9f8)] pt-[41px] px-[20px] md:px-[41px] pb-[40px] flex flex-col items-center">
          
          {/* Top Banner */}
          <div className="w-full h-[66px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#98f9ff)] flex items-center justify-center mb-[37px] shadow-sm">
            <span className="font-juicy text-[36px] md:text-[48px] text-white leading-[0.88]">
              Book a Consult
            </span>
          </div>

          {/* Form Title */}
          <h2 className="font-juicy text-[32px] md:text-[40px] text-[#2a2a2a] leading-[0.97] text-center max-w-[600px] mb-[40px]">
            NutriDocs: Children's Health + Development Intake
          </h2>

          {/* The Actual Form */}
          <form className="w-full flex flex-col gap-[24px] max-w-[900px]">
            
            {/* Input Group: Parent/Guardian Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Parent/Guardian Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Your full name" 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
                required
              />
            </div>

            {/* Input Group: Child's Name */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Child's Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Child's full name" 
                className="w-full h-[50px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-white px-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors"
                required
              />
            </div>

            {/* Input Group: Child's Age */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                Child's Age <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                placeholder="Age in years" 
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
                placeholder="your.email@example.com" 
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

            {/* Textarea: Main Concerns */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-inter text-xl font-semibold text-[#4a5d4f] leading-[1.05]">
                What are your main concerns?
              </label>
              <textarea 
                placeholder="Please describe any health concerns or goals..." 
                className="w-full min-h-[120px] rounded-xl border border-[rgba(103,177,95,0.2)] bg-[#e5f9f8]/30 p-[20px] font-inter text-lg text-[#2a2a2a] placeholder-[rgba(10,10,10,0.4)] focus:outline-none focus:border-[#67bcc1] transition-colors resize-y"
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
              className="w-full h-[60px] mt-[20px] rounded-full bg-[linear-gradient(to_bottom,_#67bcc1,_#98f9ff)] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[10px] hover:scale-[1.01] transition-transform duration-300"
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

      {/* --- WHAT'S INCLUDED SECTION (NutriKids) --- */}
      {/* ADDED mb-[100px] to give space between this section and the CTA below it */}
      <section className="w-full max-w-[1600px] px-[20px] md:px-[40px] mt-[150px] mb-[100px] flex flex-col items-center relative">
        
        {/* Section Title */}
        <h2 className="font-juicy text-[48px] md:text-[64px] text-[#2a2a2a] leading-[0.94] text-center max-w-[750px] mb-[70px]">
          What's Included in NutriKids
        </h2>

        {/* 3-Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[30px] xl:gap-[135px]">
          
          {/* Card 1: Vitality Program */}
          <div className="w-full bg-[#fff] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] p-[20px] md:p-[32px] flex flex-col">
            <div className="w-[64px] h-[64px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#98f9ff)] flex items-center justify-center mb-[24px]">
              {/* Heart Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 className="font-juicy text-[28px] xl:text-[32px] text-[#2a2a2a] leading-[1.13] mb-[16px]">
              Vitality Program
            </h3>
            <p className="font-inter text-[18px] xl:text-[20px] text-[#6b6b6b] leading-[1.7]">
              Comprehensive health education for eating healthy, sleeping well, and staying hygienic - all while keeping it fun!
            </p>
          </div>

          {/* Card 2: Mental Development */}
          <div className="w-full bg-[#fff] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] p-[20px] md:p-[32px] flex flex-col">
            <div className="w-[64px] h-[64px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#98f9ff)] flex items-center justify-center mb-[24px]">
              {/* Brain Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.002 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
            </div>
            <h3 className="font-juicy text-[28px] xl:text-[32px] text-[#2a2a2a] leading-[1.13] mb-[16px]">
              Mental Development
            </h3>
            <p className="font-inter text-[18px] xl:text-[20px] text-[#6b6b6b] leading-[1.7]">
              Montessori-inspired parenting program to develop independence, character, and life skills
            </p>
          </div>

          {/* Card 3: Family Support */}
          <div className="w-full bg-[#fff] rounded-2xl shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] p-[20px] md:p-[32px] flex flex-col">
            <div className="w-[64px] h-[64px] rounded-2xl bg-[linear-gradient(to_bottom,_#67bcc1,_#98f9ff)] flex items-center justify-center mb-[24px]">
              {/* Users/Family Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="font-juicy text-[28px] xl:text-[32px] text-[#2a2a2a] leading-[1.13] mb-[16px]">
              Family Support
            </h3>
            <p className="font-inter text-[18px] xl:text-[20px] text-[#6b6b6b] leading-[1.7]">
              Individual coaching sessions for parents to navigate challenges and strengthen family bonds
            </p>
          </div>

        </div>

        {/* 2-Image Grid Bottom Area */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[60px] mt-[80px]">
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772962598/Blueberry_ephqvn.png" 
            alt="Child picking berries" 
            className="w-full h-[400px] object-cover rounded-[32px] shadow-sm"
          />
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772962598/Child_bda0nk.png" 
            alt="Child looking down" 
            className="w-full h-[400px] object-cover rounded-[32px] shadow-sm"
          />
        </div>

        {/* Back Arrow to Plans Page */}
        <div className="w-full flex justify-start mt-[50px]">
          <Link 
            to="/plans" 
            className="flex items-center justify-center w-[60px] h-[60px] rounded-full hover:bg-gray-200/50 transition-colors -ml-[10px]"
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
        subtitle="Join our NutriKids program and give your child the foundation for a healthy, successful life"
        buttonText="Book Your Consultation"
      />

    </div>
  );
}