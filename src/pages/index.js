import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from '../utils/variants'
const Home = () => {
  return (
    <div className="bg-[#100F0F] h-full">
      {/* text */}

      
      <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1 
            variants={fadeIn('down', 0,2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h1">
            Imagination <br/> Into {'  '}
            <span className="text-[#3282B8]">Code <span className="h1 text-white">and </span>Desing.</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
            variants={fadeIn('down', 0,3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I&apos;m Erick Millan, a self-taught programmer who learned to write code through online courses. I also have experience developing applications for android and ios. I love writing code while listening to any type of music, depending on what my mood requires at that moment.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0,4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
            >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0,5)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"> 
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;