import React from 'react';
import NewsletterCTA from '../components/common/NewsletterCTA';

// ==========================================
// 1. UPDATED REUSABLE TEAM CARD COMPONENT
// ==========================================
const TeamCard = ({ name, qualifications, role, description, imageSrc, isTeal, isImageLeft, imgClass = "object-cover", customHeight = "xl:h-[874px]" }) => {
  // Dynamically set exact colors based on the theme (Teal vs White)
  const bgColor = isTeal ? "bg-[#09C5D0]" : "bg-white";
  const titleColor = isTeal ? "text-[#fff]" : "text-[#2a2a2a]";
  const qualColor = isTeal ? "text-white/90" : "text-[#67bcc1]";
  const roleColor = isTeal ? "text-white/95" : "text-[#04c4d0]";
  const descColor = isTeal ? "text-white/95" : "text-[#67bcc1]";

  return (
    <div className={`w-full max-w-[1400px] flex flex-col ${isImageLeft ? 'xl:flex-row-reverse' : 'xl:flex-row'} rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]`}>
      
      {/* 1. TEXT CONTENT SIDE */}
      {/* CHANGED: Replaced hardcoded xl:h-[874px] with the customHeight prop */}
      <div className={`w-full xl:w-[667px] ${customHeight} pt-[63px] px-12 pb-[63px] flex flex-col justify-start items-start ${bgColor}`}>
        
        {/* Title */}
        <h3 className={`font-juicy text-[64px] leading-[0.89] mb-[25px] ${titleColor}`}>
          {name}
        </h3>
        
        {/* Qualifications (Only renders if passed in) */}
        {qualifications && (
          <div className={`mb-[26px] ${qualColor}`}>
            {qualifications}
          </div>
        )}
        
        {/* Role */}
        <div className={`mb-[23px] ${roleColor}`}>
          {role}
        </div>
        
        {/* Description Container */}
        <div className={`font-inter flex flex-col ${descColor}`}>
          {description}
        </div>
      </div>

      {/* 2. IMAGE SIDE */}
      {/* CHANGED: Replaced hardcoded xl:h-[874px] with the customHeight prop */}
      <div className={`w-full xl:flex-1 h-[500px] ${customHeight} bg-white relative`}>
        <img 
          src={imageSrc} 
          alt={name} 
          className={`absolute inset-0 w-full h-full ${imgClass}`} 
        />
      </div>

    </div>
  );
};
// ==========================================
// 2. REUSABLE SECTION BADGE COMPONENT
// ==========================================
const SectionBadge = ({ title }) => (
  // CHANGED: Applied the exact shadow and padding from your HTML snippet, 
  // added `h-[89px]` and `w-fit mx-auto` so it centers and perfectly hugs the text.
  <div className="bg-[#fff] h-[89px] px-[45px] rounded-full shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[16px] my-[80px] z-10 relative w-fit mx-auto">
    
    {/* CHANGED: New double-user (team) icon in your teal color! */}
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00c2cb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
    
    {/* Text container */}
    <span className="font-juicy text-[48px] text-[#2a2a2a] leading-none translate-y-1 tracking-wider uppercase">
      {title}
    </span>
  </div>
);

// ==========================================
// 3. UPDATED MAIN TEAM PAGE
// ==========================================
export default function Team() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#fafcfc]">
      
      {/* --- HERO SECTION --- */}
      {/* CHANGED: Shifted padding (pt-[150px] pb-[240px]). This moves the text exactly 150px UPSIDE while keeping the overall section height and image sizing 100% identical! */}
      <section className="relative w-full max-w-[1928px] pt-[150px] pb-[240px] flex flex-col items-center overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute top-[-5%] left-[-10%] w-[900px] h-[900px] bg-[#C9E5E6] rounded-full blur-[150px] opacity-60 z-0 pointer-events-none"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[900px] h-[900px] bg-[#fdf5e6] rounded-full blur-[150px] opacity-80 z-0 pointer-events-none"></div>
        
        {/* Wrapper to hold text (centered) and the image (absolute right) */}
        <div className="relative w-full max-w-[1534px] flex justify-center z-10 px-[30px]">
          
          {/* Centered Text Content */}
          {/* CHANGED: Added lg:mr-[150px] to slightly nudge the text to the left so it perfectly clears the illustration and matches your Img 2 alignment! */}
          <div className="flex flex-col items-center text-center relative z-10 pb-[150px] lg:mr-[150px]">
            
            {/* Badge */}
            <div className="bg-white/80 backdrop-blur-sm px-[40px] py-[16px] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.06)] flex items-center gap-[12px] mb-[180px]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#67bcc1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span className="font-juicy text-[32px] text-[#67bcc1] leading-[0.75] translate-y-1">
                Children's Health Program
              </span>
            </div>

            {/* Titles */}
            <h1 className="font-juicy text-[160px] text-[#eb6890] leading-[0.7] mb-[30px] tracking-wide drop-shadow-md">
              The Team
            </h1>
            <p className="font-inter text-[28px] text-[#6b6b6b] leading-[1.4] mb-[10px]">
              Prevent and reverse diseases through
            </p>
            <p className="font-inter font-bold text-[28px] text-[#00c2cb] leading-[1.4] ">
              nutrition science and lifestyle transformation
            </p>
          </div>

          {/* Floating Illustration on the Right */}
          <img 
            src="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201800/heroteam_lcrr29.png" 
            alt="The Team Illustration" 
            className="absolute right-[-100px] bottom-[30px] h-[350px] lg:h-[500px] object-contain z-0 pointer-events-none hidden md:block"
          />

        </div>
      </section>

      {/* --- TEAM GRID SECTION --- */}
      <section className="relative z-20 w-full flex flex-col items-center px-[30px] pb-[100px]">
        
        {/* === FOUNDERS === */}
        <SectionBadge title="Founders" />
        <div className="flex flex-col gap-[60px] w-full items-center">
          {/* Mithra - Teal, Image Right */}
          {/* CHANGED: Removed `isImageLeft={false}` prop as it's no longer used */}
          <TeamCard 
            name="Mithra Prashik"
            qualifications="BS.Nsc., Psy., M.Ed"
            role="CEO & Co-Founder"
            description={
              <>
                <p className="font-inter text-xl leading-[1.5] mb-[7px]">
                  Mithra is a proud mom to her daughter and 2 dogs and is an entrepreneur who started her first company at 17. With a background in neuropsychology, she aims to make a positive global impact. As someone who had faced health challenges due to childhood trauma and overcame them naturally, she is a hardcore advocate of disease prevention and natural living.
                </p>
                <p className="font-inter text-xl leading-[1.65] mb-[7px]">
                  She specializes in women's and children's mental and physical health, including but not limited to fertility, chronic reproductive issues (ex: PCOS), pregnancy, postpartum, breastfeeding, and parenting/parent-child relationships.
                </p>
                <p className="font-inter text-xl leading-[1.55]">
                  You are likely to find her collecting life experiences by trying new things, spending her free time reading books, writing novels, spending time with her family, traveling to new places, or fiddling around with new innovative food recipes.
                </p>
              </>
            }
            imageSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201583/Mithra_sb9hju.png" 
            isTeal={true}
          />
          {/* Dr. Ved - White, Image Left */}
          <TeamCard 
            name="Dr. Ved Prashik"
            qualifications=""
            role="CSO & Co-Founder"
            description={
              <>
                <p className="text-[24px] font-semibold leading-[1.17] mb-[23px]">
                  Health Specialist for Stress & Weight Management
                </p>
                <p className="text-[20px] leading-[1.5] mb-[23px]">
                  Ved is an avid learner of life, a father, a scientist, and an entrepreneur, who has a passion for creating a society where people strive to live a stress-free and meaningful life and help others to do the same. While exploring the science world, he started his entrepreneurial journey. He used to suffer from migraine and bloating about 15 years ago but he healed it naturally through food and lifestyle changes.
                </p>
                <p className="text-[20px] leading-[1.4] mb-[23px]">
                  He started NutriDocs to help people lead healthy, natural lives - focusing on the prevention of diseases. He aims to explore tech commercialization soon. He has also co-founded GeniUs Universal to help up-and-coming entrepreneurs.
                </p>
                <p className="text-[20px] leading-[1.45] mb-[27px]">
                  He focuses his efforts on preventing lifestyle diseases with a specialization in stress and weight management.
                </p>
                <p className="text-[20px] leading-[1.55]">
                  You are likely to find him reading personal development books, blogging, spending quality time with his family, or at the gym - working out.
                </p>
              </>
            }
            imageSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201483/Ved_qrqgnq.png" 
            isTeal={false}
            isImageLeft={true} /* <--- This triggers the image on the left! */
          />
        </div>

        {/* === SENIOR PARTNERS === */}
        <SectionBadge title="Senior Partners" />
        <div className="flex flex-col gap-[60px] w-full items-center">
          {/* Dr. Shamal - Teal, Image Right */}
          <TeamCard 
            name="Dr. Shamal Gaikwad"
            qualifications="BDS"
            role="Senior Partner, NutriDocs Health Specialist for Oral Health"
            description={
              <>
                <p className="text-[20px] leading-[1.5] mb-[33px]">
                  Dr. Shamal is a dedicated dentist with 20 years of experience, driven by a passion for holistic healing. She believes that true health goes beyond just physical well-being—it encompasses emotional and mental balance as well. Through her practice, she has helped numerous patients not only achieve optimal oral health but also reverse chronic health conditions by addressing their root causes, including emotional factors.
                </p>
                <p className="text-[20px] leading-[1.55] mb-[33px]">
                  A meditator for the past 18 years, Dr. Shamal also conducts workshops on spiritual knowledge, helping individuals cultivate inner peace and clarity in their lives.
                </p>
                <p className="text-[20px] leading-[1.45]">
                  An environmental advocate at heart, she actively engages in sustainability efforts, from recycling waste and planting trees to cleaning water bodies. Her dedication to both health and the environment reflects her deep sense of responsibility toward a healthier, more sustainable world.
                </p>
              </>
            }
            imageSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201465/shamal_l5kmwc.png" 
            isTeal={true}
          />
          {/* Dr. Akhil - White, Image Left */}
          <TeamCard 
            name="Dr. Akhil Krishnan"
            qualifications=""
            role={
              <span className="text-base leading-[1.5] mt-[7px] mb-[9px] block">
                Senior Partner, Health Specialist for Inflammatory Diseases (Diabetes & Arthritis)
              </span>
            }
            description={
              <>
                <p className="text-[20px] leading-[1.45] mb-[36px]">
                  Akhil is an enthusiastic learner who is passionate about enriching people's lives with value based living. By training, he is a PhD in Green Technology and loves to create positive awareness on sustainable farming and holistic approaches to happy living.
                </p>
                <p className="text-[20px] leading-[1.5] mb-[40px]">
                  While he focuses his efforts to help reverse and prevent lifestyle diseases, he specializes in inflammatory diseases including but not limted to diabetes and arthritis.
                </p>
                <p className="text-[20px] leading-[1.45]">
                  More often, you are likely to find him studying food and lifestyle habits, enlivening kids and adults with life lessons from epics like Ramayana and Mahabaratha and traveling to historical places. Apart from this, he loves to explore cooking different, tasty and healthy recipes with his wonderful wife.
                </p>
              </>
            }
            imageSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201444/Akhil_neraxj.png" 
            isTeal={false}
            isImageLeft={true} /* <--- This forces the image to the left! */
          />
        </div>

        {/* === ADMINISTRATIVE TEAM === */}
        <SectionBadge title="Administrative Team" />
        <div className="flex flex-col gap-[60px] w-full items-center mb-[80px]">
          {/* Chinmayi - Teal, Image Right */}
          <TeamCard 
            name="Chinmayi Krishnan"
            qualifications={
              <span className="font-inter text-[20px] font-semibold leading-[1.2] block mt-[7px] mb-[8px]">
                MSTE
              </span>
            }
            role={
              <span className="font-inter text-[20px] font-semibold leading-[1.25] block mt-[7px] mb-[30px]">
                Creative Design Head, NutriDocs Diet Planner
              </span>
            }
            description={
              <>
                <p className="text-[20px] leading-[1.4] mb-[21px]">
                  Chinmayi is an enthusiastic and resilient content creator by passion and a software engineer by profession. She is a person who strongly believes that communication has the power to influence people and if done in a artistic way, it has immense potential to get message across. She is friendly, polite, kindhearted individual and open to learning new skills.
                </p>
                <p className="text-[20px] leading-[1.4] mb-[21px]">
                  In addition to spearheading art production, she also works to help individuals design tasty but healthy meals suited to the needs of their unique bodies.
                </p>
                <p className="text-[20px] leading-[1.35]">
                  She is ambitious in life with a deep interest in cooking and is vocal about a healthy lifestyle. In her free time, she prefers to spend quality time with her loving husband and explore the world with him.
                </p>
              </>
            }
            imageSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201443/chinmayi_p6nxvj.png" 
            isTeal={true}
            imgClass="object-cover" /* <--- This zooms the image out and matches the photo's wall background color! */
            customHeight="xl:h-[774px]"
          />
          {/* Karthika - White, Image Left */}
          <TeamCard 
            name="Karthika A.V"
            qualifications=""
            role={
              <span className="font-inter text-[20px] font-semibold leading-[1.2] block mt-[32px] mb-[33px]">
                Secretary, Creative Design Assistant
              </span>
            }
            description={
              <>
                <p className="text-[20px] leading-[1.45] mb-[33px]">
                  Karthika is an ardent reader, keen observer & an enthusiastic learner. She is being trained in the field of architecture. With a strong inclination to understand human behavior & psychology and with her organizational skills, she works with NutriDocs to contribute in the communication and coordination department.
                </p>
                <p className="text-[20px] leading-[1.65]">
                  You are likely to find her reading, writing, researching on ideas relevant to her interests, and collecting funky craft items for her creative journals.
                </p>
              </>
            }
            imageSrc="https://res.cloudinary.com/dbtfi1rbi/image/upload/v1772201443/karthika_ziwu7g.png" 
            isTeal={false}
            isImageLeft={true} /* <--- This forces the image to the left side! */
            customHeight="xl:h-[774px]"
          />
        </div>

      </section>

      {/* --- CTA BANNER --- (This section remains unchanged) --- */}
      <NewsletterCTA theme='team'/>

    </div>
  );
}