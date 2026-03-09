import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ADDED: Imported Link for the Contact Us route
import PricingModal from './PricingModal';

export default function NewsletterCTA({ 
  theme = "default", 
  title, 
  subtitle, 
  buttonText,
  showContactLink = false // NEW PROP: Toggles the "Contact Us" link on/off
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isContact = theme === "contact";
  const isTeam = theme === "team";
  const isReady = theme === "ready";

  // ==========================================
  // 1. TEAM PAGE DESIGN (Join Our Team)
  // ==========================================
  if (isTeam) {
    return (
      <>
        <section className="relative w-full bg-[#e6f7f8] flex justify-center py-[140px] overflow-hidden">
          <div className="relative w-full max-w-[1534px] flex justify-center items-center z-10 px-[30px]">
            
            {/* Centered Content */}
            <div className="flex flex-col items-center text-center max-w-[750px] z-10 relative">
              <h2 className="font-juicy text-[64px] md:text-[80px] text-[#111] leading-none mb-[20px] tracking-wide uppercase">
                JOIN OUR TEAM
              </h2>
              <p className="font-inter text-[20px] md:text-[22px] text-[#4a4a4a] leading-[1.5] mb-[40px]">
                We're always looking for passionate healthcare professionals to join our mission of transforming lives through nutrition and wellness
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-[40px] py-[16px] bg-white text-[#67bcc1] rounded-full font-inter font-bold text-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-gray-50 transition-colors"
              >
                View Open Positions
              </button>
            </div>

            {/* Floating Illustration on the Right */}
            <img 
              src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201443/bottomteam_hvb9av.png" 
              alt="Join Our Team Illustration" 
              className="absolute h-[300px] lg:h-[450px] xl:h-[550px] object-contain pointer-events-none hidden lg:block"
              style={{ right: '-140px', bottom: '-140px' }} 
            />
          </div>
        </section>

        <PricingModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          theme={theme}
        />
      </>
    );
  }

  // ==========================================
  // 2. CONTACT, READY, & DEFAULT DESIGNS
  // ==========================================
  
  // Dynamically apply the exact horizontal gradient from your image for the 'ready' theme
  const sectionBgClass = isReady 
    ? "bg-[linear-gradient(to_right,_#009299,_#70E0E6)]" 
    : "bg-[#76C7CB]";

  return (
    <>
      <section className={`w-full flex justify-center py-[100px] ${sectionBgClass}`}>
        <div className="max-w-[1100px] flex flex-col items-center text-center text-white px-4">
          
          {isContact ? (
            /* CONTACT PAGE DESIGN */
            <>
              <h2 className="font-juicy text-[96px] leading-[0.9] mb-[30px]">
                {title || "Ready to Start *"}
              </h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-[48px] pt-[20px] pb-[14px] bg-white text-[#4a5d4f] rounded-full font-juicy text-[36px] hover:bg-gray-50 transition shadow-[0_15px_30px_rgba(0,0,0,0.15)] mb-[24px] leading-none"
              >
                {buttonText || "Book Your First Consult Now"}
              </button>
              <p className="font-inter text-[20px] text-white/90 leading-[1.58] max-w-[700px]">
                {subtitle || "Book a consultation today and take the first step towards optimal health"}
              </p>
            </>

          ) : isReady ? (
            /* READY PAGE DESIGN (For Plans Pages) */
            <>
              <h2 className="font-juicy text-[64px] md:text-[110px] lg:text-[128px] leading-[0.84] mb-[40px] drop-shadow-sm">
                {title || "Ready to Get Started*"}
              </h2>
              <p className="font-inter text-[20px] md:text-[24px] text-white/90 leading-[1.5] max-w-[650px] mb-[50px]">
                {subtitle || "Take the first step towards optimal health with our evidence-based wellness programs"}
              </p>
              
              {/* Main CTA Button */}
              {/* CHANGED: Text color updated to #000 to perfectly match the CSS snippet */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full max-w-[430px] h-[63px] bg-white text-[#000] rounded-full flex items-center justify-center gap-[12px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),_0_20px_25px_-5px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="font-inter text-xl font-bold pt-[2px]">
                  {buttonText || "Schedule Consultation"}
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              {/* NEW: Optional Secondary Contact Link */}
              {showContactLink && (
                <div className="mt-[42px]">
                  <Link to="/contact" className="font-inter text-2xl font-bold text-white hover:opacity-80 transition-opacity">
                    Contact Us
                  </Link>
                </div>
              )}
            </>

          ) : (
            /* DEFAULT DESIGN */
            <>
              <h2 className="font-juicy text-[96px] leading-[0.9] mb-[12px]">
                {title || "Want More*"}
              </h2>
              <p className="font-inter text-[24px] text-white/90 leading-[1.58] max-w-[626px] mb-[45px]">
                {subtitle || "Subscribe to our newsletter for weekly wellness tips and exclusive content"}
              </p>
              <div className="flex gap-[20px]">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-[32px] py-[16px] bg-white text-[#76C7CB] rounded-full font-inter font-bold hover:bg-gray-50 transition shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                >
                  {buttonText || "Subscribe Now"}
                </button>
                <button className="px-[32px] py-[16px] bg-transparent border-[2px] border-white text-white rounded-full font-inter font-bold hover:bg-white/10 transition">
                  Explore More
                </button>
              </div>
            </>
          )}
          
        </div>
      </section>

      <PricingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        theme={theme}
      />
    </>
  );
}