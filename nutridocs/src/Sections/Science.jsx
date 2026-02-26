import { motion } from 'framer-motion';

export default function ScienceSimplified() {
  return (
    // Section wrapper with the light grey background
    <section className="relative w-full min-h-[1117px] bg-[#ffffff] overflow-hidden flex flex-col items-center pt-[100px] pb-[80px]">
      
      {/* --- HEADING AREA --- */}
      <div className="relative z-20 flex flex-col items-center text-center">
        <h2 className="font-juicy text-[72px] text-[#000] leading-[0.9] m-0 uppercase tracking-wide">
          Science Simplified
        </h2>
        
        {/* ANIMATION: Subtitle slides in slowly from left to right */}
        <motion.p 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-inter font-light text-[24px] text-[#000] leading-[1.58] max-w-[530px] mt-[20px]"
        >
          Our symptoms are connected — your nutrition should be too.
        </motion.p>
      </div>

      {/* --- MAIN VISUAL AREA --- */}
      <div className="relative w-full max-w-[1728px] flex-1 mt-[40px] flex justify-center">
        
        {/* ANIMATION: Green Texture Circle scales up smoothly */}
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0">
          <motion.img 
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090343/Ellipse_1_pfsrnh.png" 
            alt="Green Background Texture" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* 1. CENTRAL HUMAN BODY IMAGE (Static) */}
        <img 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090343/body_ypmih9.png" 
          alt="Human Anatomy" 
          className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 h-[1000px] w-[950px] object-contain z-10"
        />

        {/* --- LEFT SIDE: TRIGGERS (Static) --- */}
        
        {/* Sun/UV Elements */}
        <img 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090544/Sun_cwgkns.png" 
          alt="UV Rays" 
          className="absolute top-[-60px] left-[300px] w-[180px] object-contain z-20"
        />

        {/* Unhealthy Food 1 (Pizza/Meat) */}
        <img 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090544/pizza_zhemum.png" 
          alt="Processed Food" 
          className="absolute top-[32%] left-[12%] w-[240px] object-contain z-20"
        />

        {/* Unhealthy Food 2 (Burger/Donut/Drink) */}
        <img 
          src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090544/pizza_1_ufmcxa.png" 
          alt="Junk Food" 
          className="absolute top-[55%] left-[6%] w-[250px] object-contain z-20"
        />

        {/* Smoking */}
        <div className="absolute bottom-[14%] left-[20%] z-20 flex flex-col items-center gap-[5px]">
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090466/ciggi_pslxsr.png" 
            alt="Smoking" 
            className="w-[170px] object-contain"
          />
        </div>


        {/* --- RIGHT SIDE: DISEASES --- */}
        {/* CHANGED: The container and image are now static. ONLY the text animates from left to right. */}
        
        {/* Skin Disorder */}
        <div className="absolute top-[0px] right-[23%] w-[160px] z-20 flex flex-col items-center gap-[12px]">
          <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090379/cake_i7lwkj.png" alt="Skin Disorder" className="w-full h-full object-contain rounded-full" />
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-inter font-light text-[24px] text-[#000]"
          >
            Skin Disorder
          </motion.span>
        </div>

        {/* Gut Disease */}
        <div className="absolute top-[28%] right-[14%] w-[160px] z-20 flex flex-col items-center gap-[12px]">
          <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090343/intestine_t8tept.png" alt="Gut Disease" className="w-full h-full object-contain" />
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="font-inter font-light text-[24px] text-[#000]"
          >
            Gut Disease
          </motion.span>
        </div>

        {/* Diabetes */}
        <div className="absolute top-[57%] right-[7%] z-20 flex flex-col items-center gap-[12px]">
          <img src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090342/blood_iutc6q.png" alt="Diabetes" className="w-full h-full object-contain" />
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="font-inter font-light text-[24px] text-[#000]"
          >
            Diabetes
          </motion.span>
        </div>


        {/* --- BOTTOM STAT CARDS --- */}
        {/* ANIMATION: Sliding slightly inward towards the center */}
        
        {/* Left Card: Happy Clients (Slides in from the left) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-[-40px] left-[11%] z-30 w-[185px] h-[148px] bg-[rgba(255,255,255,0.9)] border border-[rgba(191,215,153,0.4)] rounded-[16px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-start pt-[25px] pl-[33px]"
        >
          <span className="font-['Libre_Baskerville'] font-bold text-[42px] text-[#67b15f] leading-[1]">
            500+
          </span>
          <span className="font-inter text-[18px] text-[#6b6b6b] mt-[8px]">
            Happy Clients
          </span>
        </motion.div>

        {/* Right Card: Success Rate (Slides in from the right) */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="absolute bottom-[-35px] right-[10%] z-30 w-[185px] h-[148px] bg-[rgba(255,255,255,0.9)] border border-[rgba(191,215,153,0.4)] rounded-[16px] shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1)] flex flex-col justify-start pt-[25px] pl-[33px]"
        >
          <span className="font-['Libre_Baskerville'] font-bold text-[42px] text-[#67b15f] leading-[1]">
            95%
          </span>
          <span className="font-inter text-[18px] text-[#6b6b6b] mt-[8px]">
            Success Rate
          </span>
          
          {/* Small decorative leaf icon attached to the right card */}
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772090342/tsktviuycedqkknwtzow.png" 
            alt="Leaf" 
            className="absolute bottom-[10px] right-[-60px] w-[40px] object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}