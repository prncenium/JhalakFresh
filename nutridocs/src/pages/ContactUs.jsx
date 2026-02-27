import React from 'react';
import ContactHero from '../components/common/ContactHero'; // CHANGED: Imported the new hero
import NewsletterCTA from '../components/common/NewsletterCTA';

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fafcfc]">
      
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* --- MAIN CONTACT CONTENT --- */}
      {/* 1. CHANGED: Updated max-w-[1200px] to max-w-[1728px] so the container can finally stretch! */}
      <section className="relative z-20 w-full max-w-[1728px] px-[30px] pb-[100px] flex flex-col items-center mt-[60px]">
        
        {/* --- 2. FORM & SIDEBAR GRID --- */}
        {/* CHANGED: Adjusted grid to 1.3fr_1fr to make the location card wider relative to the form */}
        <div className="w-full max-w-[1534px] grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[60px] mx-auto">
          
          {/* LEFT: Contact Form */}
          <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-[60px] flex flex-col justify-between">
            <div>
              <h2 className="font-juicy text-[56px] text-[#2a2a2a] leading-none mb-[12px]">Send Us a Message</h2>
              <p className="font-inter text-[20px] text-[#6b6b6b] mb-[10px]">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <p className="font-inter text-[16px] text-red-500 mb-[40px]">
                * Indicates required question
              </p>

              <form className="flex flex-col gap-[30px]">
                {/* 2-Column Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  <div className="flex flex-col gap-[10px]">
                    <label className="font-inter font-bold text-[16px] text-[#2a2a2a]">Your Name <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="John Doe" className="w-full h-[64px] rounded-[12px] border border-gray-200 px-[20px] font-inter text-[18px] focus:outline-none focus:border-[#67bcc1] focus:ring-1 focus:ring-[#67bcc1] transition-all bg-[#fafcfc]" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label className="font-inter font-bold text-[16px] text-[#2a2a2a]">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" placeholder="john@example.com" className="w-full h-[64px] rounded-[12px] border border-gray-200 px-[20px] font-inter text-[18px] focus:outline-none focus:border-[#67bcc1] focus:ring-1 focus:ring-[#67bcc1] transition-all bg-[#fafcfc]" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label className="font-inter font-bold text-[16px] text-[#2a2a2a]">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full h-[64px] rounded-[12px] border border-gray-200 px-[20px] font-inter text-[18px] focus:outline-none focus:border-[#67bcc1] focus:ring-1 focus:ring-[#67bcc1] transition-all bg-[#fafcfc]" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label className="font-inter font-bold text-[16px] text-[#2a2a2a]">Subject <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="How can we help?" className="w-full h-[64px] rounded-[12px] border border-gray-200 px-[20px] font-inter text-[18px] focus:outline-none focus:border-[#67bcc1] focus:ring-1 focus:ring-[#67bcc1] transition-all bg-[#fafcfc]" />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-[10px]">
                  <label className="font-inter font-bold text-[16px] text-[#2a2a2a]">Message <span className="text-red-500">*</span></label>
                  <textarea placeholder="Tell us more about your inquiry..." className="w-full h-[200px] rounded-[12px] border border-gray-200 p-[20px] font-inter text-[18px] focus:outline-none focus:border-[#67bcc1] focus:ring-1 focus:ring-[#67bcc1] transition-all resize-none bg-[#fafcfc]"></textarea>
                </div>
              </form>
            </div>

            <div className="mt-[30px]">
              {/* Submit Button */}
              <button type="button" className="w-full h-[80px] bg-[#67bcc1] text-white rounded-full font-juicy text-[48px] leading-none flex items-center justify-center gap-[12px] hover:bg-[#5aa8ad] transition-colors shadow-md pb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Send Message
              </button>

              <div className="w-full bg-[#eaf5f5] rounded-[12px] p-[20px] mt-[100px]">
                <p className="font-inter text-[15px] text-[#4a5d4f] text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar (Locations & Contact) */}
          <div className="flex flex-col gap-[30px]">
            
            {/* Locations Card */}
            {/* CHANGED: Reduced padding from p-[60px] to p-[40px] so the card height becomes shorter */}
            <div className="w-full bg-[#eaf5f5] rounded-[32px] p-[40px] flex flex-col h-fit">
              
              <div>
                <div className="flex items-center gap-[16px] mb-[30px]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <h3 className="font-juicy text-[46px] text-[#2a2a2a] leading-none translate-y-1">Locations</h3>
                </div>
                <p className="font-inter text-[20px] text-[#6b6b6b] leading-[1.6] mb-[40px]">
                  Our virtual operations are based from various parts of the globe including:
                </p>
                
                <div className="flex flex-col gap-[28px] mb-[40px]">
                  <div>
                    <h4 className="flex items-center gap-[10px] font-inter font-bold text-[20px] text-[#4a5d4f] mb-[8px]">
                      <span className="w-[10px] h-[10px] rounded-full bg-[#67bcc1]"></span>
                      North America
                    </h4>
                    <p className="font-inter text-[18px] text-[#6b6b6b] ml-[24px]">• Austin, TX, USA</p>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-[10px] font-inter font-bold text-[20px] text-[#4a5d4f] mb-[8px]">
                      <span className="w-[10px] h-[10px] rounded-full bg-[#67bcc1]"></span>
                      Asia
                    </h4>
                    <p className="font-inter text-[18px] text-[#6b6b6b] ml-[24px]">• Bangalore, India<br/>• Pune, India</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full h-[1px] bg-gray-200/80 mb-[36px]"></div>

                <h3 className="font-inter font-bold text-[22px] text-[#2a2a2a] mb-[28px]">Other Ways to Connect</h3>
                
                <div className="flex flex-col gap-[28px]">
                  <div className="flex items-center gap-[20px]">
                    <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-juicy text-[28px] text-[#6b6b6b] leading-none mb-[6px] translate-y-1">Call Us</p>
                      <p className="font-inter text-[20px] font-semibold text-[#4a5d4f]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-juicy text-[28px] text-[#6b6b6b] leading-none mb-[6px] translate-y-1">Email Support</p>
                      <p className="font-inter text-[20px] font-semibold text-[#4a5d4f]">support@nutridocs.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* --- 3. FAQ SECTION --- */}
        {/* CHANGED: Wrapped in a white container with shadow and 40px padding matching your image markers */}
        <div className="w-full max-w-[1534px] mt-[100px] bg-white rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-[40px]">
          <h2 className="font-juicy text-[48px] text-[#2a2a2a] text-center mb-[40px]">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[54px]">
            {/* FAQ Card 1 */}
            <div className="bg-gradient-to-b from-[#f8f8f8] to-[#e5f9f8] rounded-[24px] p-[24px] flex flex-col gap-[28px]">
              <h3 className="font-juicy text-[32px] text-[#4a5d4f] leading-[1.2]">What is your response time*</h3>
              
              {/* CHANGED: Used <br /> instead of <br> */}
              <p className="font-juicy text-[24px] text-[#6b6b6b] leading-[1.3]">
                We typically respond to all inquiries within <br /> 24-48 hours during business days.
              </p>
              
            </div>
            {/* FAQ Card 2 */}
            <div className="bg-gradient-to-b from-[#f8f8f8] to-[#e5f9f8] rounded-[24px] p-[24px] flex flex-col gap-[28px]">
              <h3 className="font-juicy text-[32px] text-[#4a5d4f] leading-[1.2]">Do you offer virtual consultations*</h3>
              <p className="font-juicy text-[24px] text-[#6b6b6b] leading-[1.3]">Yes! All our consultations are conducted virtually,<br /> making them accessible from anywhere.</p>
            </div>
            {/* FAQ Card 3 */}
            <div className="bg-gradient-to-b from-[#f8f8f8] to-[#e5f9f8] rounded-[24px] p-[24px] flex flex-col gap-[28px]">
              <h3 className="font-juicy text-[32px] text-[#4a5d4f] leading-[1.2]">What services do you provide*</h3>
              <p className="font-juicy text-[24px] text-[#6b6b6b] leading-[1.3]">We offer gut health programs, disease reversal guidance,<br /> nutritional planning, and children's health programs (Nutrikids).</p>
            </div>
            {/* FAQ Card 4 */}
            <div className="bg-gradient-to-b from-[#f8f8f8] to-[#e5f9f8] rounded-[24px] p-[24px] flex flex-col gap-[28px]">
              <h3 className="font-juicy text-[32px] text-[#4a5d4f] leading-[1.2]">How do I book a consultation*</h3>
              <p className="font-juicy text-[24px] text-[#6b6b6b] leading-[1.3]">Click the 'Book Now' button in the navigation menu and<br /> choose between Nutrikids or Plans * Pricing options.</p>
            </div>
          </div>
        </div>

      </section>

      {/* 4. CTA BANNER */}
      <NewsletterCTA theme='contact' />

    </div>
  );
}