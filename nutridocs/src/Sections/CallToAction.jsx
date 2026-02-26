import { motion } from 'framer-motion';

// Continuous, slow, hovering animation strictly for the badge
const continuousHover = {
  y: [0, -15, 0],
  x: [0, 8, 0, -5, 0], 
  rotate: [0, 2, -1, 0], 
  transition: { 
    repeat: Infinity, 
    duration: 6, 
    ease: "easeInOut" 
  }
};

// Reusable Star SVG
const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#5E9C65"/>
  </svg>
);

export default function CallToAction() {
  return (
    // Exact Zeplin dimensions: 1728px width, 1117px height
    <section className="relative w-full min-h-[1117px] overflow-hidden bg-white flex flex-col items-center">
      
      {/* --- TOP WAVE BACKGROUND (#E5F9F8) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg className="relative block w-full h-[250px]" viewBox="0 0 1000 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L1000,0 L1000,100 C850,130 800,40 650,40 C450,40 400,220 250,220 C100,220 50,80 0,80 Z" fill="#E5F9F8" />
        </svg>
      </div>

      {/* --- CONTENT WRAPPER (Static - No Motion) --- */}
      <div className="relative z-10 w-full max-w-[1728px] mx-auto h-full px-[120px] pt-[250px]">
        
        {/* HEADING (Static) */}
        <h1 className="font-juicy text-[128px] text-[#000] leading-[0.85] w-[925px] m-0">
          Your health deserves attention.
        </h1>

        {/* SUBTEXT (Static) */}
        <p className="font-inter text-[32px] text-[rgba(0,0,0,0.8)] leading-[1.88] w-[865px] mt-[60px] mb-[82px]">
          Take the first step toward a life where wellness feels effortless, not overwhelming.
        </p>

        {/* RATING & SUCCESS RATE (Static) */}
        <div className="flex items-center gap-[24px]">
          {/* 5 Stars */}
          <div className="flex items-center gap-[8px]">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          {/* Success Rate Text */}
          <span className="font-inter text-[24px] text-[#4a5565] leading-[0.83] tracking-[-0.15px]">
            95% Success Rate
          </span>
        </div>

        {/* LEARN MORE BUTTON (Static) */}
        <button className="mt-[53px] w-[266px] h-[87px] rounded-full bg-[rgba(255,255,255,0.8)] border-[2px] border-[rgba(107,144,128,0.3)] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer">
          <span className="font-inter font-medium text-[32px] text-[#4a5d4f] leading-[0.88] tracking-[-0.45px]">
            Learn More
          </span>
        </button>

        {/* --- FLOATING BADGE ("Certified Professional") --- */}
        {/* THIS is the only element that still has scroll entrance and hover animations */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} // Triggers when scrolled into view
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: 0.2 }}
          className="absolute right-[200px] top-[300px] z-20"
        >
          {/* This inner div handles the continuous slow hovering effect */}
          <motion.div 
            animate={continuousHover}
            className="w-[190px] h-[80px] bg-white rounded-[16px] flex items-center pl-[16px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] cursor-default"
          >
            {/* Green Check Circle */}
            <div className="w-[32px] h-[32px] rounded-full bg-[#5E9C65] flex items-center justify-center flex-shrink-0">
              <span className="font-inter text-[18px] text-white leading-none mb-[2px]">✓</span>
            </div>
            
            {/* Text Stack */}
            <div className="flex flex-col ml-[12px]">
              <span className="font-inter text-[14px] text-[#6a7282] leading-[1.43] tracking-[-0.15px]">
                Certified
              </span>
              <span className="font-inter text-[18px] text-[#101828] leading-[1.56] tracking-[-0.44px]">
                Professional
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>

    </section>
  );
}