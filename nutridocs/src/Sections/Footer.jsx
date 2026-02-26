export default function Footer() {
  return (
    // Exact Zeplin background color and dimensions
    <footer className="w-full bg-[#2a2a2a] flex justify-center">
      <div className="w-full max-w-[1728px] h-[449px] pt-[80px] px-[120px] flex flex-col justify-between">
        
        {/* --- TOP ROW: MAIN CONTENT --- */}
        <div className="flex justify-between w-full">
          
          {/* COLUMN 1: Logo & Description */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-[16px]">
              <div className="w-[48px] h-[48px] rounded-full bg-[#4a5d4f] flex items-center justify-center">
                <span className="font-inter text-white text-[24px] leading-none">N</span>
              </div>
              <span className="font-['Libre_Baskerville'] text-[32px] text-white leading-none tracking-wide">
                NutriDocs
              </span>
            </div>
            
            {/* Description - Exact Zeplin specs applied here */}
            <p className="w-[497px] mt-[23px] mb-[15px] font-inter text-[24px] text-[rgba(255,255,255,0.7)] leading-[1.29]">
              Personalized wellness rooted in science, designed for how you actually live.
            </p>

            {/* Social Icons */}
            <div className="flex gap-[16px] mt-[10px]">
              {/* Instagram */}
              <a href="#" className="w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* WhatsApp */}
<a href="#" className="w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.2)] transition-colors">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* This is the outer bubble - it keeps the stroke from the parent SVG */}
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    
    {/* This is the inner phone - we removed the stroke and added a solid fill */}
    <path stroke="none" fill="rgba(255,255,255,0.7)" d="M16.5 14c-1.5 1.5-3.5 2-5.5 0s-1.5-4 0-5.5c.5-.5 1.2-.5 1.7 0l1 1c.3.3.3.8 0 1.1l-.8.8c-.2.2-.2.6 0 .8 1.2 1.2 2.7 1.2 3.9 0 .2-.2.6-.2.8 0l.8-.8c.3-.3.8-.3 1.1 0l1 1c.5.5.5 1.2 0 1.7z" />
  </svg>
</a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="flex flex-col gap-[20px] ml-[100px]">
            <h4 className="font-inter font-medium text-[24px] text-white leading-[1] mb-[4px]">
              Quick Links
            </h4>
            <a href="#" className="font-inter text-[16px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">Philosophy</a>
            <a href="#" className="font-inter text-[16px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">Programs</a>
            <a href="#" className="font-inter text-[16px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">How It Works</a>
            <a href="#" className="font-inter text-[16px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">Insights</a>
          </div>

          {/* COLUMN 3: Contact */}
          <div className="flex flex-col gap-[20px]">
            <h4 className="font-inter font-medium text-[24px] text-white leading-[1] mb-[4px]">
              Contact
            </h4>
            <a href="mailto:hello@nutridocs.net" className="font-inter text-[16px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
              hello@nutridocs.net
            </a>
            <a href="tel:+919876543210" className="font-inter text-[16px] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors">
              +91 98765 43210
            </a>
            <div className="flex flex-col gap-[4px] mt-[12px]">
              <span className="font-inter text-[14px] text-[rgba(255,255,255,0.5)]">Available Mon-Sat</span>
              <span className="font-inter text-[14px] text-[rgba(255,255,255,0.5)]">9:00 AM - 6:00 PM IST</span>
            </div>
          </div>

        </div>

        {/* --- BOTTOM ROW: COPYRIGHT & LEGAL --- */}
        <div className="w-full border-t border-[rgba(255,255,255,0.1)] py-[40px] flex justify-between items-center">
          <span className="font-inter text-[16px] text-[rgba(255,255,255,0.5)]">
            © 2026 NutriDocs. All rights reserved.
          </span>
          <div className="flex gap-[40px]">
            <a href="#" className="font-inter text-[16px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-[16px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}