import React, { useState } from 'react';
import PricingModal from './PricingModal';

export default function NewsletterCTA({ theme = "default" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isContact = theme === "contact";
  const isTeam = theme === "team";

  // ==========================================
  // 1. TEAM PAGE DESIGN (Join Our Team)
  // ==========================================
  if (isTeam) {
    return (
      <>
        {/* CHANGED: Increased py-[100px] to py-[140px] to make the section taller */}
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
                onClick={() => setIsModalOpen(true)} // Or change to a link to your careers page
                className="px-[40px] py-[16px] bg-white text-[#67bcc1] rounded-full font-inter font-bold text-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:bg-gray-50 transition-colors"
              >
                View Open Positions
              </button>
            </div>

            {/* Floating Illustration on the Right */}
            {/* CHANGED: I added a `style` object here. 
                You can now freely change the `right` and `bottom` numbers (e.g., right: '-50px', bottom: '20px') 
                to push the image exactly where you want it! 
                I also increased the height classes to make the image bigger.
            */}
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
  // 2. CONTACT & DEFAULT DESIGNS
  // ==========================================
  return (
    <>
      <section className="w-full bg-[#76C7CB] flex justify-center py-[100px]">
        <div className="max-w-[900px] flex flex-col items-center text-center text-white px-4">
          
          {isContact ? (
            /* CONTACT PAGE DESIGN */
            <>
              <h2 className="font-juicy text-[96px] leading-[0.9] mb-[30px]">
                Ready to Start *
              </h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-[48px] pt-[20px] pb-[14px] bg-white text-[#4a5d4f] rounded-full font-juicy text-[36px] hover:bg-gray-50 transition shadow-[0_15px_30px_rgba(0,0,0,0.15)] mb-[24px] leading-none"
              >
                Book Your First Consult Now
              </button>
              <p className="font-inter text-[20px] text-white/90 leading-[1.58] max-w-[700px]">
                Book a consultation today and take the first step towards optimal health
              </p>
            </>
          ) : (
            /* DEFAULT DESIGN */
            <>
              <h2 className="font-juicy text-[96px] leading-[0.9] mb-[12px]">
                Want More*
              </h2>
              <p className="font-inter text-[24px] text-white/90 leading-[1.58] max-w-[626px] mb-[45px]">
                Subscribe to our newsletter for weekly wellness tips and exclusive content
              </p>
              <div className="flex gap-[20px]">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-[32px] py-[16px] bg-white text-[#76C7CB] rounded-full font-inter font-bold hover:bg-gray-50 transition shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
                >
                  Subscribe Now
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