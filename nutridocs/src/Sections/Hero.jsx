import { motion } from 'framer-motion';

// Reusable component for the floating badges
// Added 'pointer-events-auto' so they remain interactive even inside a non-interactive overlay
const FloatingBadge = ({ text, delay, positionClasses }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} 
    transition={{ 
      duration: 0.8, 
      delay: delay, 
      y: { repeat: Infinity, duration: 3, ease: "easeInOut" } 
    }}
    className={`absolute flex items-center justify-center px-6 py-3 rounded-[16777200px] bg-white/80 border border-brand-light/30 shadow-md font-inter font-semibold text-[18px] text-brand-green pointer-events-auto ${positionClasses}`}
  >
    {text}
  </motion.div>
);

// Reusable component for popping food images - SLOW, SMOOTH, 45-DEGREE SWEEP
const FoodItem = ({ src, alt, delay, positionClasses }) => {
  
  // Smarter detection: Treats "right-" and "left-[75%]" (the cabbage) as right-side items
  const isRightSide = positionClasses.includes('right-') || positionClasses.includes('left-[75%]');
  const isLeftSide = positionClasses.includes('left-') && !isRightSide;
  
  // Increased horizontal slide distance for an even wider inward sweep
  const startX = isLeftSide ? -400 : isRightSide ? 400 : 0;

  return (
    <motion.img
      src={src}
      alt={alt}
      // y: 300 for a much longer upward slide, rotate: -45 for that subtle, gentle twist
      initial={{ opacity: 0, scale: 0.5, y: 300, x: startX, rotate: -45 }} 
      animate={{ opacity: 1, scale: 1, y: 0, x: 0, rotate: 0 }}   
      transition={{ 
        type: "spring", 
        stiffness: 45,  // Dropped low for a much slower, relaxed entrance
        damping: 18,    // High damping ensures it glides to a smooth stop with almost zero bounce
        delay: delay 
      }}
      className={`absolute object-contain drop-shadow-xl pointer-events-none ${positionClasses}`}
    />
  );
};
export default function Hero() {
  return (
    // Set a minimum height to ensure it fits the 1110px canvas appropriately
    <section className="relative w-full min-h-[90vh] lg:h-[1110px] flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden">
      
      {/* Background shape placeholder */}
      <div className="absolute inset-0 z-0 bg-cover bg-bottom " style={{ backgroundImage: "url('https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772046687/ChatGPT_Image_Jan_4_2026_07_09_32_PM_1_yrku6o.png')" }}></div>
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none leading-[0]">
        <img 
          // Replace this with your actual Cloudinary link or local path where you saved Vector 1.png
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772046545/Vector_1_ai1pw3.png" 
          alt="Bottom Wave" 
          className="w-full h-auto object-cover object-top"
        />
      </div>

      {/* Floating Badges Container
        Changed to absolute full-width (max 1728px) so the right-[px] values perfectly match your Zeplin screen.
        pointer-events-none ensures this transparent layer doesn't block text highlighting.
      */}
      <div className="absolute inset-0 z-20 w-full max-w-[1728px] mx-auto pointer-events-none">
        <FloatingBadge 
          text="🌿 100% Natural" 
          delay={0.2} 
          positionClasses="top-[225px] right-[210px]" 
        />
        <FloatingBadge 
          text="✨ Science-Backed" 
          delay={0.4} 
          positionClasses="top-[345px] right-[97px]" 
        />
        <FloatingBadge 
          text="💚 Personalized" 
          delay={0.6} 
          positionClasses="top-[465px] right-[97px]" 
        />
        
        {/* Explore Button */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-[200px] right-[380px] flex items-center justify-center px-8 py-6 rounded-full bg-[#4a5d4f]/20 shadow-[0_4px_17.7px_0_#4a5d4f] backdrop-blur-sm pointer-events-auto hover:bg-[#4a5d4f]/40 transition-colors"
        >
          <span className="font-inter text-[32px] font-semibold text-white leading-[0.75]">Explore</span>
        </motion.button>
      </div>

      {/* Main Center Text */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[-50px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-juicy text-[150px] leading-[1.1] tracking-[-2.2px] text-black m-0"
        >
          Nourish your body.<br />Elevate your life.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-inter text-[36px] font-light leading-[2.69] tracking-[-2.2px] text-black"
        >
          Stop guessing. Start eating for your body.
        </motion.p>
      </div>

      {/* All Food Items - Precisely scaled and mapped to 1728px Canvas */}
      <div className="absolute inset-0 z-10 w-full max-w-[1728px] mx-auto pointer-events-none">
        
        {/* --- LEFT SIDE VEGGIES --- */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010420/palak_rykrar.png" 
          alt="Small Leaf" 
          delay={0.2} 
          positionClasses="w-[380px] top-[-120px] left-[80px]" 
        />
        
        {/* Top Left Sliced Peppers & Beans (Capsicum) */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010412/capsicum_wwhcti.png" 
          alt="Peppers and Beans" 
          delay={0.2} 
          positionClasses="w-[380px] top-[-30px] left-[-180px]" 
        />
        
        {/* Top Left Carrot */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010413/carrot_v8lxc8.png" 
          alt="Top Left Carrot" 
          delay={0.3} 
          positionClasses="w-[380px] top-[-90px] left-[250px]" 
        />

        {/* Mid Left Fries Cup */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010422/fries_zugsdh.png" 
          alt="Fries Cup" 
          delay={0.4} 
          positionClasses="w-[420px] top-[180px] left-[-250px]" 
        />
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010418/dhaniya_bhs5mq.png" 
          alt="Dhaniya" 
          delay={0.4} 
          positionClasses="w-[280px] top-[350px] left-[-50px]" 
        />
        
        {/* Mid Left Small Leaf (Palak - near 'Stop guessing') */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010420/palak_rykrar.png" 
          alt="Small Leaf" 
          delay={0.5} 
          positionClasses="w-[350px] top-[390px] left-[10px]" 
        />
        
        {/* Bottom Left Sprout Bowl */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010421/sprouts_wtoepe.png" 
          alt="Sprout Bowl" 
          delay={0.6} 
          positionClasses="w-[650px] bottom-[-40px] left-[-400px]" 
        />

        {/* Bottom Left Carrot */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010413/carrot2_qv5oya.png" 
          alt="Bottom Left Carrot" 
          delay={0.7} 
          positionClasses="w-[420px] bottom-[-120px] left-[260px]" 
        />
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010420/palak_rykrar.png" 
          alt="Small Leaf" 
          delay={0.2} 
          positionClasses="w-[250px] bottom-[50px] left-[250px]" 
        />

        {/* Bottom Left Tomato Half */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010412/tomato_bbe802.png" 
          alt="Bottom Left Tomato Half" 
          delay={0.8} 
          positionClasses="w-[240px] bottom-[-170px] left-[40px]" 
        />

        {/* --- CENTER BOTTOM VEGGIES --- */}
        
        {/* Center Bottom Rosemary/Herb */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010415/bottomBowlGroup_wjiivb.png" 
          alt="Center Herb" 
          delay={0.4} 
          positionClasses="w-[650px] bottom-[-300px] left-[32%]" 
        />
        
        {/* Cabbage */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010412/pattaGobhi_alenyv.png" 
          alt="Cabbage" 
          delay={0.5} 
          positionClasses="w-[300px] bottom-[-150px] left-[75%] -translate-x-1/2" 
        />
        
        

        {/* --- RIGHT SIDE VEGGIES --- */}
        
        {/* Top Right Broccoli Bowl */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010413/broculi_yknuwr.png" 
          alt="Broccoli Bowl" 
          delay={0.3} 
          positionClasses="w-[350px] top-[-50px] right-[-180px]" 
        />

        {/* Top Right Herb (Under broccoli, Needs Upload) */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010415/bottomBowlGroup_wjiivb.png" 
          alt="Top Right Herb" 
          delay={0.4} 
          // Added 'rotate-180' at the end below
          positionClasses="w-[580px] top-[-300px] right-[160px] rotate-180" 
        />
        
        {/* Mid Right Small Carrot (Right edge, above tomato) */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010414/carrot3_pyg74r.png" 
          alt="Right Edge Carrot" 
          delay={0.4} 
          positionClasses="w-[390px] top-[220px] right-[-300px]" 
        />
        
        {/* Large Tomato Slice */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010412/tomato2_veosyl.png" 
          alt="Large Tomato Slice" 
          delay={0.5} 
          positionClasses="w-[250px] top-[340px] right-[120px]" 
        />
        
        {/* Mid Right Leafy Green (Dhaniya / Cilantro) */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010412/dhaniya2_pzz4tw.png" 
          alt="Leafy Green" 
          delay={0.6} 
          positionClasses="w-[550px] bottom-[120px] right-[-350px]" 
        />
        
        {/* Bottom Right Eggs/Chicken/Avocado Plate */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010417/eggs_kb3zzl.png" 
          alt="Eggs Plate" 
          delay={0.7} 
          positionClasses="w-[300px] bottom-[240px] right-[150px]" 
        />
        
        {/* Bottom Right Cucumbers */}
        <FoodItem 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772010416/cucumber_kwvfkc.png" 
          alt="Cucumbers" 
          delay={0.8} 
          positionClasses="w-[440px] bottom-[-140px] right-[-260px]" 
        />

      </div>
      
    </section>
  );
}