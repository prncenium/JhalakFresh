import { motion } from 'framer-motion';

// Animation variants for smooth entrances
const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const bouncyCard = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.2 } 
  },
};

// Subtle continuous floating animation for the avatars
const floatAnimation = {
  y: [0, -10, 0],
  transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
};

// NEW: Button interactions for the avatars
const avatarButtonInteraction = {
  hover: { scale: 1.15, borderColor: "#4a5d4f", zIndex: 40 },
  tap: { scale: 0.95 }
};

export default function Testimonials() {
  // Placeholder function for handling clicks
  const handleAvatarClick = (id) => {
    console.log(`Avatar ${id} clicked!`);
    // You can add logic here later to change the central testimonial content
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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 rotate-180">
        <svg className="relative block w-full h-[150px] lg:h-[200px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#E5F9F8"></path>
        </svg>
      </div>

      {/* Wrapping the content in a max-w container to maintain alignment */}
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
          
          {/* Dashed Orbit Rings (Background) */}
          <div className="absolute w-[580px] h-[580px] rounded-full border border-dashed border-[#4a5d4f]/30 z-0"></div>
          <div className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-[#4a5d4f]/30 z-0"></div>
          <div className="absolute w-[1050px] h-[1050px] rounded-full border border-dashed border-[#4a5d4f]/30 z-0"></div>

         {/* Orbiting Avatars - NOW INTERACTIVE BUTTONS WITH WORKING IMAGES */}
          
          {/* Avatar 1 (Top Right) - Smiling Woman */}
          <motion.img 
            animate={floatAnimation}
            whileHover={avatarButtonInteraction.hover}
            whileTap={avatarButtonInteraction.tap}
            onClick={() => handleAvatarClick(1)}
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Smiling Woman"
            className="absolute top-[18%] right-[10%] w-[90px] h-[90px] rounded-full object-cover border-[4px] border-white shadow-lg z-30 cursor-pointer"
          />
          
          {/* Avatar 2 (Bottom Right) - Man with Beard */}
          <motion.img 
            animate={floatAnimation}
            style={{ animationDelay: "1s" }}
            whileHover={avatarButtonInteraction.hover}
            whileTap={avatarButtonInteraction.tap}
            onClick={() => handleAvatarClick(2)}
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Man with Beard"
            className="absolute bottom-[20%] right-[22%] w-[80px] h-[80px] rounded-full object-cover border-[4px] border-white shadow-lg z-30 cursor-pointer"
          />
          
          {/* Avatar 3 (Bottom Left) - Mature Woman */}
          <motion.img 
            animate={floatAnimation}
            style={{ animationDelay: "2s" }}
            whileHover={avatarButtonInteraction.hover}
            whileTap={avatarButtonInteraction.tap}
            onClick={() => handleAvatarClick(3)}
            src="https://randomuser.me/api/portraits/women/68.jpg" 
            alt="Mature Woman"
            className="absolute bottom-[28%] left-[18%] w-[100px] h-[100px] rounded-full object-cover border-[4px] border-white shadow-lg z-30 cursor-pointer"
          />
          
          {/* Avatar 4 (Top Left) - Young Man */}
          <motion.img 
            animate={floatAnimation}
            style={{ animationDelay: "0.5s" }}
            whileHover={avatarButtonInteraction.hover}
            whileTap={avatarButtonInteraction.tap}
            onClick={() => handleAvatarClick(4)}
            src="https://randomuser.me/api/portraits/men/46.jpg" 
            alt="Young Man"
            className="absolute top-[35%] left-[5%] w-[85px] h-[85px] rounded-full object-cover border-[4px] border-white shadow-lg z-30 cursor-pointer"
          />

          {/* --- CENTRAL TESTIMONIAL CARD --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={bouncyCard}
            className="relative z-20 w-[540px] h-[434px] bg-white rounded-[24px] pt-[41px] pr-[48px] pb-[53px] pl-[41px] shadow-[0_25px_50px_-12px_rgba(74,93,79,0.6)] border border-[rgba(74,93,79,0.1)] flex flex-col"
          >
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
              {/* Used Avatar 1's working image here as well */}
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya M." className="w-[48px] h-[48px] rounded-full object-cover border border-gray-200 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-inter text-[16px] text-[#2a2a2a] leading-[1.5]">Priya M.</span>
                <span className="font-inter text-[14px] text-[#9b8b7e] leading-[1.43]">Reversed PCOS naturally</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}