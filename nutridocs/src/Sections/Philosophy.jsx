import { motion } from 'framer-motion';

// 1. Master container for staggering the entire section (Header -> Text -> Cards)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each section element
  },
};

// 2. Sub-container just for staggering the 3 individual cards
const cardsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each card popping up
  },
};

// 3. Smooth, elastic bouncy entrance (used for the heading and cards)
const bouncyPop = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 } // Low damping = smooth bounce
  },
};
const simpleSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// 4. Left-to-right sliding bounce (specifically for the text paragraph)
const slideRightBouncy = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 } 
  },
};

// Reusable Card Component
const PhilosophyCard = ({ line1, line2, line3, bgImage }) => (
  <motion.div 
    variants={bouncyPop} // Applies the smooth bounce here
    // Keep this bounce, it affects the whole card container
    whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
    className="relative w-[462px] h-[523px] rounded-[32px] overflow-hidden shadow-xl group cursor-pointer z-10"
  >
    {/* Background Image - REMOVED zoom classes (transition-transform duration-500 group-hover:scale-110) */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
    
    {/* Dark Gradient Overlay - Kept this so it still gets darker on hover */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

    {/* Card Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
      <h3 className="font-['Bebas_Neue'] text-white text-[96px] leading-[1.15] uppercase [text-shadow:6px_4px_4px_rgba(0,0,0,0.45)]">
        {line1} <br />
        {line2} {line3 && <><br />{line3}</>}
      </h3>
    </div>
  </motion.div>
);

export default function Philosophy() {
  return (
    // Updated padding based exactly on the redlines: pt-[194px] and pb-[192px]
    <section id="about" className="relative w-full pt-[194px] pb-[300px] bg-white flex flex-col items-center overflow-hidden">
      
      {/* Top Wave Background (#E5F9F8) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg className="relative block w-full h-[150px] lg:h-[200px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#E5F9F8"></path>
        </svg>
      </div>

      {/* Bottom Wave Background (#E5F9F8) - Flipped */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 rotate-180">
        <svg className="relative block w-full h-[150px] lg:h-[200px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#E5F9F8"></path>
        </svg>
      </div>

      {/* MASTER MOTION WRAPPER: Controls the sequence of the entire page */}
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1728px] flex flex-col items-center relative z-10"
      >

        {/* Section Header - Simple Smooth Slide */}
        <motion.h2 
          variants={simpleSlide}
          className="font-juicy text-[72px] text-[#2a2a2a] leading-[1] mb-[17px] tracking-wide text-center"
        >
          OUR PHILOSOPHY
        </motion.h2>
        
        {/* Subtext - Slides from Left */}
        <motion.p 
          variants={slideRightBouncy}
          className="font-juicy text-[32px] text-[#6B6B6B] leading-[1.02] max-w-[925px] mb-[110px] tracking-wide text-center"
        >
          Wellness is deeply personal. We believe in treating the whole person, not just the condition.
        </motion.p>

        {/* The 3 Animated Cards Container - Added exactly 91px padding on the sides */}
        <motion.div 
          variants={cardsContainerVariants}
          className="flex flex-wrap justify-center gap-[80px] w-full px-[91px]"
        >
          <PhilosophyCard 
            line1="FOOD AS" 
            line2="MEDICINE" 
            bgImage="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772029856/FoodAsMedicine_sdbzci.png" 
          />
          <PhilosophyCard 
            line1="SUSTAINABLE" 
            line2="LIFE" 
            bgImage="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772029856/Sustainable_ded5cv.png" 
          />
          <PhilosophyCard 
            line1="MIND -" 
            line2="BODY" 
            line3="BALANCE"
            bgImage="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772029857/MindBodyBalance_jgijce.png" 
          />
        </motion.div>

      </motion.div>

    </section>
  );
}