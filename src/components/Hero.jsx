import { motion } from 'framer-motion';
import { isMobile } from "react-device-detect";


import {styles } from '../style'
import { ComputersCanvas } from './canvas';
import { pc } from "../assets";


const Hero = () => {
  console.log("is mobile:", isMobile)
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          {/* line */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff]'>Shivani</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am an aspiring software engineer <br className='sm:block hidden' /> with an interest in UI/UX design <br className='sm:block hidden' />and ML.
            </p>
            {
              isMobile
              ? <img src={pc} alt='pc' className='mt-12'/>
              : null
            }
            {/* <p className='mt-40 flex flex-row font-medium justify-center'>Best viewed on desktop!</p> */}
        </div>
      </div>

      {/* 3D computer model, underneath text */}
      {
        !isMobile
        ? <ComputersCanvas />
        : null
      }
      {/* 
        scrolling widget
          xs = extra small devices
          on extra small devices it'll have bottom 10
          else bottom 32
      */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'> 
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* create framer motion */}
            <motion.div
              animate={{
                y: [0, 24, 0] // moves 24 px up and down
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero