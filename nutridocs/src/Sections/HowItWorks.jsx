import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Reusable Component for the Steps - REMOVED ANIMATION VARIANTS
const Step = ({ number, title, description, iconSrc, iconBg, iconSize = "w-[32px] h-[32px]" }) => (
  <div className="flex items-start w-full">
    
    {/* Number & Underline */}
    <div className="flex flex-col items-center w-[111px] flex-shrink-0 mr-[110px] mt-[45px]">
      <span className="font-['Libre_Baskerville'] text-[96px] text-[rgba(74,93,79,0.2)] leading-[1]">
        {number}
      </span>
      <div className="w-[111px] h-[4px] bg-[rgba(74,93,79,0.3)] mt-[5px]"></div>
    </div>

    {/* Text Content */}
    <div className="flex flex-col w-[601px] flex-shrink-0 pt-[10px] mr-[40px]">
      <h3 className="font-['Libre_Baskerville'] text-[48px] text-[#2a2a2a] leading-[0.83] mb-[24px]">
        {title}
      </h3>
      <p className="font-inter text-[32px] text-[#6b6b6b] leading-[1.31]">
        {description}
      </p>
    </div>

    {/* Icon Container with the Image */}
    <div className={`w-[80px] h-[96px] rounded-full flex flex-col justify-start items-center pt-[24px] flex-shrink-0 mt-[10px] ${iconBg}`}>
      <img src={iconSrc} alt={`${title} icon`} className={`${iconSize} object-contain drop-shadow-sm`} />
    </div>

  </div>
);

export default function HowItWorks() {
  // 1. Create a reference to track this specific section in the viewport
  const sectionRef = useRef(null);

  // 2. Track the scroll progress while this section is visible on screen
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Animates from when the top enters to when the bottom leaves
  });

  // 3. Map the scroll progress (0 to 1) to a horizontal pixel movement
  // Starts at 0px offset, smoothly slides to -150px (left) as you scroll down
  const imageSlideLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[1117px] overflow-hidden bg-white">
      
      {/* --- CUSTOM WAVY BACKGROUND PATTERNS (#E5F9F8) --- */}
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg className="relative block w-full h-[250px]" viewBox="0 0 1000 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L1000,0 L1000,100 C850,130 800,40 650,40 C450,40 400,220 250,220 C100,220 50,80 0,80 Z" fill="#E5F9F8" />
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg className="relative block w-full h-[300px]" viewBox="0 0 1000 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,300 L1000,300 L1000,180 C850,180 750,280 600,280 C400,280 300,120 200,120 C100,120 50,260 30,260 C10,260 0,130 0,130 Z" fill="#E5F9F8" />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1728px] mx-auto h-full flex flex-col items-center pt-[80px]">
        
        {/* --- HEADING - Motion Removed --- */}
        <h2 className="font-juicy text-[75px] text-[#2a2a2a] leading-[0.96] mb-[120px]">
          How It Works
        </h2>

        <div className="flex w-full px-[120px] justify-between relative">
          
          {/* --- LEFT SIDE: STEPS - Motion Removed --- */}
          <div className="flex flex-col gap-[90px] w-[65%] z-20">
            <Step 
              number="01" 
              title="Connect" 
              description={<>Book your first consultation and share <br /> your health story.</>} 
              iconSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772050027/phone_blplua.png"
              iconBg="bg-[rgba(191,215,153,0.2)]"
              iconSize="w-[40px] h-[40px]" 
            />
            <Step 
              number="02" 
              title="Discover" 
              description={<>We analyze your lifestyle, habits, and <br /> unique health profile.</>} 
              iconSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772050026/z0nrlioiothszngvwuzk.png"
              iconBg="bg-[rgba(103,177,95,0.2)]" 
              iconSize="w-[40px] h-[40px]" 
            />
            <Step 
              number="03" 
              title="Design" 
              description={<>Receive a personalized nutrition and <br /> wellness plan.</>} 
              iconSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772050041/x0p6ix599puj10bul1zg.png"
              iconBg="bg-[rgba(74,93,79,0.2)]" 
              iconSize="w-[32px] h-[32px]" 
            />
          </div>

          {/* --- RIGHT SIDE: 3D ILLUSTRATION --- */}
          {/* ONLY this container has motion, mapped to the scroll progress */}
          <motion.div 
            style={{ x: imageSlideLeft }}
            className="absolute right-[-340px] top-[235px] w-[951px] h-[717px] z-10 pr-[40px]"
          >
            <img 
              src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772047477/IMG_6595_1_afxofa.png" 
              alt="Health Report Illustration" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}