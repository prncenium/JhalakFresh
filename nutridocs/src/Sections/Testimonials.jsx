import { motion } from 'framer-motion';

// Animation variants for smooth entrances for the text
const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// Much slower, smoother entrance for the avatars
const avatarEntrance = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.2 }, 
  visible: (custom) => ({
    opacity: 1,
    x: custom.x,
    y: custom.y,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 35,  // Lowered significantly for a slower, relaxed travel speed
      damping: 12,    // Softened so it glides to a smooth stop
      delay: custom.delay 
    }
  })
};

// Subtle continuous floating animation for the avatars
const floatAnimation = {
  y: [0, -10, 0],
  transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
};

// Button interactions for the avatars
const avatarButtonInteraction = {
  hover: { scale: 1.15, borderColor: "#4a5d4f" },
  tap: { scale: 0.95 }
};

export default function Testimonials() {
  const handleAvatarClick = (id) => {
    console.log(`Avatar ${id} clicked!`);
  };

  return (
    <section className="relative w-full min-h-[1117px] bg-white flex flex-col items-center pt-[120px] overflow-hidden">
      
      {/* --- TOP WAVE BACKGROUND (#E5F9F8) --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg className="relative block w-full h-[150px] lg:h-[200px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#E5F9F8"></path>
        </svg>
      </div>

      {/* --- BOTTOM WAVE BACKGROUND (#E5F9F8) - Flipped --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg className="relative block w-full h-[300px]" viewBox="0 0 1000 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,300 L1000,300 L1000,180 C850,180 750,280 600,280 C400,280 300,120 200,120 C100,120 50,260 30,260 C10,260 0,130 0,130 Z" fill="#E5F9F8" />
        </svg>
      </div>

      <div className="w-full max-w-[1728px] mx-auto flex flex-col items-center relative z-10">
        
        {/* --- HEADER TEXT --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center z-20"
        >
          <motion.h2 
            variants={fadeSlideUp}
            className="font-juicy text-[72px] text-[#2a2a2a] leading-[1] mb-[24px] tracking-wide"
          >
            Real Stories, Real Results
          </motion.h2>
          
          <motion.p 
            variants={fadeSlideUp}
            className="font-inter text-[24px] text-[#6b6b6b] leading-[1.35] max-w-[753px] mb-[80px]"
          >
            Hear from those who've transformed their relationship with health.
          </motion.p>
        </motion.div>

        {/* --- ORBIT AREA & CENTER CARD --- */}
        <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[800px] mt-[-40px]">
          
          {/* Dashed Orbit Rings - Explicitly centered perfectly */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-dashed border-[#4a5d4f]/30 z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-[#4a5d4f]/30 z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] rounded-full border border-dashed border-[#4a5d4f]/30 z-0"></div>

          {/* --- ORBITING AVATARS --- */}
          {/* Avatar 1 (Top Left) - Increased to 110px */}
          <motion.div
            custom={{ x: -460, y: -253, delay: 0.4 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={avatarEntrance}
            className="absolute top-1/2 left-1/2 -mt-[55px] -ml-[55px] z-10" 
          >
            <motion.img animate={floatAnimation} whileHover={avatarButtonInteraction.hover} whileTap={avatarButtonInteraction.tap} onClick={() => handleAvatarClick(1)}
              src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 1"
              className="w-[120px] h-[120px] rounded-full object-cover border-[4px] border-white shadow-lg cursor-pointer pointer-events-auto"
            />
          </motion.div>

          {/* Avatar 2 (Top Right) - Increased to 100px */}
          <motion.div
            custom={{ x: 346, y: -200, delay: 0.6 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={avatarEntrance}
            className="absolute top-1/2 left-1/2 -mt-[50px] -ml-[50px] z-10" 
          >
            <motion.img animate={floatAnimation} style={{ animationDelay: "1s" }} whileHover={avatarButtonInteraction.hover} whileTap={avatarButtonInteraction.tap} onClick={() => handleAvatarClick(2)}
              src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client 2"
              className="w-[120px] h-[120px] rounded-full object-cover border-[4px] border-white shadow-lg cursor-pointer pointer-events-auto"
            />
          </motion.div>

          {/* Avatar 3 (Bottom Right) - Increased to 120px */}
          <motion.div
            custom={{ x: 371, y: 371, delay: 0.8 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={avatarEntrance}
            className="absolute top-1/2 left-1/2 -mt-[60px] -ml-[60px] z-10"
          >
            <motion.img animate={floatAnimation} style={{ animationDelay: "2s" }} whileHover={avatarButtonInteraction.hover} whileTap={avatarButtonInteraction.tap} onClick={() => handleAvatarClick(3)}
              src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client 3"
              className="w-[120px] h-[120px] rounded-full object-cover border-[4px] border-white shadow-lg cursor-pointer pointer-events-auto"
            />
          </motion.div>

          {/* Avatar 4 (Bottom Left) - Increased to 130px */}
          <motion.div
            custom={{ x: -283, y: 283, delay: 1.0 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={avatarEntrance}
            className="absolute top-1/2 left-1/2 -mt-[65px] -ml-[65px] z-10"
          >
            <motion.img animate={floatAnimation} style={{ animationDelay: "0.5s" }} whileHover={avatarButtonInteraction.hover} whileTap={avatarButtonInteraction.tap} onClick={() => handleAvatarClick(4)}
              src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client 4" 
              className="w-[130px] h-[130px] rounded-full object-cover border-[4px] border-white shadow-lg cursor-pointer pointer-events-auto"
            />
          </motion.div>

          {/* --- CENTRAL TESTIMONIAL CARD --- */}
          {/* UPDATED: Changed from motion.div to standard div, removed all animation variants */}
          <div className="relative z-20 w-[540px] h-[434px] bg-white rounded-[24px] pt-[41px] pr-[48px] pb-[53px] pl-[41px] shadow-[0_25px_50px_-12px_rgba(74,93,79,0.6)] border border-[rgba(74,93,79,0.1)] flex flex-col">
            
            {/* Quote SVG Icon */}
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[24px]">
              <path d="M9.6 28H0L6.4 0H16L9.6 28ZM25.6 28H16L22.4 0H32L25.6 28Z" fill="#E5E7EB"/>
            </svg>

            {/* Quote Text */}
            <p className="font-['Libre_Baskerville'] italic text-[24px] text-[#2a2a2a] leading-[1.63] max-w-[335px] mt-[10px]">
              "I finally understand my body. NutriDocs gave me the tools to heal, not just manage."
            </p>

            {/* Bottom Profile Container */}
            <div className="mt-auto border-t border-[rgba(74,93,79,0.1)] pt-[20px] flex items-center gap-[16px]">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya M." className="w-[48px] h-[48px] rounded-full object-cover border border-gray-200 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-inter text-[16px] text-[#2a2a2a] leading-[1.5]">Priya M.</span>
                <span className="font-inter text-[14px] text-[#9b8b7e] leading-[1.43]">Reversed PCOS naturally</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}