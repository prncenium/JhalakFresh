import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterCTA from '../components/common/NewsletterCTA';
import PageHero from '../components/common/PageHero'; // Ensure this path matches your folder structure

export default function RealAdultPlans() {
  return (
    <div className="w-full min-h-screen bg-[#fafcfc] flex flex-col items-center">
      
      {/* --- HERO SECTION --- */}
      <PageHero 
        title="Nutri Adults"
        titleColor="text-[#eb6890]"
        titleShadow={true}
        badgeType="lightning"
        badgeText="Wellness Programs"
        subtitle1="Choose the perfect program for your"
        subtitle2="health transformation journey"
        subtitle2Color="text-[#00c7d3]"
      />
      
      {/* --- WELLNESS PROGRAMS HEADING --- */}
      <div className="w-full max-w-[1700px] px-[20px] md:px-[40px] mt-[80px] mb-[40px] flex items-center justify-start gap-[16px]">
        {/* Heart Icon (52x53 with 2.7px stroke) */}
        <svg width="52" height="53" viewBox="0 0 24 24" fill="none" stroke="#eb6890" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        {/* Heading Text */}
        <h2 className="font-juicy text-[50px] md:text-[78px] text-[#eb6890] leading-[0.77] pt-[10px]">
          Wellness Programs
        </h2>
      </div>

      {/* --- PRICING CARDS SECTION --- */}
      <section className="relative w-full max-w-[1700px] flex flex-col xl:flex-row gap-[160px] px-[20px] xl:px-[40px] mb-[120px] justify-center items-stretch">
        
        {/* CARD 1: 15 Day Gut Cleanse */}
        <div className="w-full xl:w-[30%] bg-white rounded-[32px] shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] p-[35px] md:p-[40px] flex flex-col border border-gray-100">
          <span className="font-inter text-[20px] font-semibold text-[#67bcc1] mb-[8px]">
            Quick Reset
          </span>
          <h2 className="font-juicy text-[36px] text-[#2a2a2a] leading-[1] mb-[16px]">
            15 Day Gut Cleanse
          </h2>
          <div className="font-juicy text-[48px] text-[#5fd6dd] mb-[24px]">
            $150
          </div>
          <p className="font-inter text-[16px] text-[#6b6b6b] leading-[1.75] mb-[30px] min-h-[85px]">
            The 15 Day Gut Cleanse is a classic cleanse which won't work on any disease. It is guided with video recipe and simple recipes provided.
          </p>
          <div className="flex flex-col gap-[16px] mb-[40px] flex-grow">
            {[
              "7 Day Transition",
              "1 Day Cleanse",
              "7 Day Restoration",
              "12 Day + Additional 12 Day Gut Supplementation",
              "Access to your own chef to ask questions & share progress",
              "Specific supplements to ask will be curated to your current health"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-[12px]">
                <div className="w-[20px] h-[20px] rounded-full bg-[#61d1d7]/20 flex items-center justify-center shrink-0 mt-[4px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-inter text-[14px] text-[#4a5d4f] leading-[1.43]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <Link 
  to="/adult-plans" 
  className="w-full h-[48px] rounded-full bg-[linear-gradient(to_bottom,_#6cc7cd,_#a3f2f7)] flex items-center justify-center gap-[8px] hover:scale-[1.02] transition-transform shadow-md mt-auto"
>
  <span className="font-inter text-[20px] font-semibold text-white">Get Started</span>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</Link>
        </div>

        {/* CARD 2: 30 Day Gut Healing (MOST POPULAR) */}
        <div className="relative w-full xl:w-[34%] bg-[linear-gradient(to_bottom,_#67bcc1,_#5ed9e0)] rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-[4px] border-[#66c1c6] p-[35px] md:p-[40px] flex flex-col z-10 xl:scale-105">
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-white px-[20px] py-[8px] rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center gap-[8px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path></svg>
            <span className="font-inter text-[14px] font-bold text-[#67bcc1]">Most Popular</span>
          </div>
          <span className="font-inter text-[20px] font-semibold text-white/90 mb-[8px] mt-[10px]">
            Deep Restoration
          </span>
          <h2 className="font-juicy text-[36px] text-white leading-[1] mb-[16px]">
            30 Day Gut Healing
          </h2>
          <div className="font-juicy text-[48px] text-white mb-[24px]">
            $300
          </div>
          <p className="font-inter text-[16px] text-white/90 leading-[1.88] mb-[30px] min-h-[85px]">
            The 30 Day Gut Cleanse is the client favorite, where you do actually eat and holistically get you back on track baby gut syndrome to repair it and gut links.
          </p>
          <div className="flex flex-col gap-[16px] mb-[40px] flex-grow">
            {[
              "3 Day Transition",
              "3 Day Cleanse",
              "3 Phases (9 days each)",
              "12 Day Gut Healing",
              "Supports 30 day Gut Aid supplementation",
              "Access to your own chef to ask questions & share progress",
              "Blood tests if essential will be provided by you. Blood report review & results will be sent. If available can be provided to you. Additional cost will be needed depending upon condition"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-[12px]">
                <div className="w-[20px] h-[20px] rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-[4px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-inter text-[14px] text-white/90 leading-[1.43]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <Link 
  to="/adult-plans" 
  className="w-full h-[48px] rounded-full bg-[linear-gradient(to_bottom,_#6cc7cd,_#a3f2f7)] flex items-center justify-center gap-[8px] hover:scale-[1.02] transition-transform shadow-md mt-auto"
>
  <span className="font-inter text-[20px] font-semibold text-white">Get Started</span>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</Link>
        </div>

        {/* CARD 3: Guided Disease Reversal */}
        <div className="w-full xl:w-[30%] bg-white rounded-[32px] shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] p-[35px] md:p-[40px] flex flex-col border border-gray-100">
          <span className="font-inter text-[20px] font-semibold text-[#5fd6dd] mb-[8px]">
            Complete Transformation
          </span>
          <h2 className="font-juicy text-[36px] text-[#2a2a2a] leading-[1] mb-[16px]">
            Guided Disease Reversal
          </h2>
          <div className="font-juicy text-[48px] text-[#5fd6dd] mb-[24px]">
            $400-$1000
          </div>
          <p className="font-inter text-[16px] text-[#6b6b6b] leading-[1.75] mb-[30px] min-h-[85px]">
            The guided disease reversal applies primarily to lifestyle diseases and chronic conditions. If you are someone who is important to discuss this with your consultant is advised.
          </p>
          <div className="flex flex-col gap-[16px] mb-[40px] flex-grow">
            {[
              "3 month program",
              "The average timeline for recovery is 3 months, however this is dependent upon the condition of each person and will be discussed during your first consult",
              "3 Day Transition",
              "12 Day Gut Healing",
              "Guided Disease Reversal w/ Progress tracking throughout",
              "Any Additional cost will be needed depending upon condition and what is needed throughout"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-[12px]">
                <div className="w-[20px] h-[20px] rounded-full bg-[#61d1d7]/20 flex items-center justify-center shrink-0 mt-[4px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-inter text-[14px] text-[#4a5d4f] leading-[1.43]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          <Link 
  to="/adult-plans" 
  className="w-full h-[48px] rounded-full bg-[linear-gradient(to_bottom,_#6cc7cd,_#a3f2f7)] flex items-center justify-center gap-[8px] hover:scale-[1.02] transition-transform shadow-md mt-auto"
>
  <span className="font-inter text-[20px] font-semibold text-white">Get Started</span>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</Link>
        </div>

      </section>


      {/* ========================================== */}
      {/* --- NEW: SUPPORT SERVICES SECTION ---        */}
      {/* ========================================== */}
      
      {/* Support Services Heading */}
      <div className="w-full max-w-[1700px] px-[20px] md:px-[40px] mb-[40px] flex items-center justify-start gap-[16px]">
        {/* Users/Group Icon */}
        <svg width="62" height="60" viewBox="0 0 24 24" fill="none" stroke="#eb6890" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <h2 className="font-juicy text-[50px] md:text-[78px] text-[#eb6890] leading-[0.77] pt-[10px]">
          Support Services
        </h2>
      </div>

      {/* Support Services 4-Column Grid 
        CHANGED: Uses small gaps (gap-[20px] md:gap-[30px]) and wide max-w to minimize empty space on left/right as requested!
      */}
      <section className="w-full max-w-[1700px] px-[20px] md:px-[40px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[20px] md:gap-[30px] items-stretch">
        
        {[
          {
            category: "Personalized Nutrition",
            title: "Nutritional Meal Planning",
            price: "$50",
            desc: "Schedule a 45 min. session to sit down and plan with a NutriDocs consultant to go over the science that you need to know about supplements and how to restore.",
            features: [
              "If you have a current disease that would need reversing, your NutriDocs consultant will let you know if you choose any of the plans above"
            ]
          },
          {
            category: "Expert Guidance",
            title: "Supplementation Consult",
            price: "$50",
            desc: "Schedule a 45 min. session with a NutriDocs consultant to go over the science that you need to know.",
            features: [
              "Receive a list of supplements as well as why you're taking each",
              "If you have a current disease that would need reversing, your consultant for this will let you know if you choose any of the plans above"
            ]
          },
          {
            category: "Holistic Changes",
            title: "Lifestyle Modifications",
            price: "$60",
            desc: "Schedule a 45 min. session to sit down with a NutriDocs consultant to go over the lifestyle changes needed to be made from your current lifestyle to the lifestyle you want to lead.",
            features: [
              "If you have a current disease that would need reversing, your NutriDocs consultant will let you know",
              "If you choose any of the plans above"
            ]
          },
          {
            category: "Tailored Meals",
            title: "Custom Curated Recipes",
            price: "$40",
            desc: "Schedule a 30 min. session with a NutriDocs consultant to go through your current dietary preferences and create recipes that are anti-inflammatory, promote gut health and what you love to eat!",
            features: [
              "If you have a current disease that would need reversing, your consultant will advise",
              "Choose any of the plans above"
            ]
          }
        ].map((card, index) => (
          <div key={index} className="w-full min-h-[850px] bg-white rounded-2xl border-2 border-[#e5e7eb] p-[26px] flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-shadow duration-300">
            
            {/* Shield Icon Top */}
            <div className="w-[48px] h-[48px] rounded-[14px] bg-[linear-gradient(to_bottom,_#60d4db,_#d1fcff)] flex items-center justify-center mb-[16px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>

            <span className="font-inter text-[20px] font-semibold text-[#008b93] leading-[1.2] mb-[13px]">
              {card.category}
            </span>
            
            <h3 className="font-juicy text-[36px] text-[#2a2a2a] leading-[0.86] mb-[16px] min-h-[62px]">
              {card.title}
            </h3>
            
            <div className="font-juicy text-[40px] text-[#5fd7de] leading-[1.2] mb-[20px]">
              {card.price}
            </div>

            <p className="font-inter text-[15px] text-[#6b6b6b] leading-[1.6] mb-[24px]">
              {card.desc}
            </p>

            <div className="flex flex-col gap-[16px] mb-[30px] flex-grow">
              {card.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-[12px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#67b15f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[4px]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span className="font-inter text-[15px] text-[#4a5d4f] leading-[1.6]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Book Consult Button */}
            <Link 
  to="/adult-plans" 
  className="w-full max-w-[231px] mx-auto h-[48px] rounded-full bg-[linear-gradient(to_bottom,_#60d4db,_#d1fcff)] shadow-[0_4px_6px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 transition-transform mt-auto mb-[210px]"
>
  <span className="font-inter text-[20px] font-semibold text-white leading-[1.05]">
    Book Consult
  </span>
</Link>

          </div>
        ))}
      </section>

      {/* ========================================== */}
      {/* --- IMPORTANT INFORMATION SECTION ---      */}
      {/* ========================================== */}
      <section className="w-full max-w-[1700px] px-[20px] md:px-[40px] mt-[60px] flex justify-center">
        <div className="w-full bg-[linear-gradient(to_bottom,_#6fc2c8,_#8af4fb)] rounded-[24px] p-[40px] md:p-[60px] lg:py-[60px] lg:px-[120px] shadow-[6px_8px_24.4px_0_rgba(0,0,0,0.25),_-7px_7px_21.1px_0_rgba(0,0,0,0.25)] flex flex-col items-center">
          
          {/* Heading */}
          <h2 className="font-juicy text-[48px] md:text-[64px] text-[#fffcfc] leading-[0.66] mb-[50px] text-center [text-shadow:10px_4px_4px_rgba(0,0,0,0.25)] tracking-wide">
            Important Information
          </h2>

          {/* Content List */}
          <div className="w-full max-w-[1200px] flex flex-col gap-[35px] text-left">
            
            {/* Item 1 */}
            <div className="flex items-start gap-[16px]">
              {/* Teal Checkmark */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a4ae" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="font-inter text-[18px] md:text-[20px] text-[#000] leading-[1.4]">
                <span className="font-bold">Accountability: </span> 
                Showing up and following through each step is directed as required as it will be key to your success in any of our NutriDocs wellness programs.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-[16px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a4ae" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="font-inter text-[18px] md:text-[20px] text-[#000] leading-[1.4]">
                <span className="font-bold">Blood Costs: </span> 
                If needed, blood tests if available can be provided by you. Blood report review & results will be sent. If available can be provided by you. Additional cost will be needed depending upon condition.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-[16px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a4ae" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p className="font-inter text-[18px] md:text-[20px] text-[#000] leading-[1.4]">
                <span className="font-bold">Specific Supplements: </span> 
                Supplements to ask will be curated to your current health state and are sourced if you choose any of the plans above. Each 30 days of the programs will range from $125-$300/₹7030-additional cost to the cleanse program fees.
              </p>
            </div>

          </div>
          
        </div>
        
      </section>

      {/* CHANGED: Moved the Back Arrow below the grid and aligned it to the left */}
              <div className="w-full flex justify-start mt-[50px] mb-[50px] px-[20px] md:px-[80px]">
                <Link 
                  to="/pricing" 
                  className="flex items-center justify-center w-[60px] h-[60px] rounded-full hover:bg-gray-200 transition-colors -ml-[10px]"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4a5d4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </Link>
              </div>

              <NewsletterCTA 
  theme="ready" 
  title="Ready to Transform*"
  subtitle="Take the first step towards optimal health with our evidence-based wellness programs"
  buttonText="Schedule Consultation"
  showContactLink={true}
/>

    </div>

    
  );
}