import React from 'react'
import { Tilt} from 'react-tilt'
import { motion } from 'framer-motion';

import { styles  } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      {/* create card */}
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        // tilt options
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-20 h-20 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        // fadeIn paras: direction, type, delay, duration of animation
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Open to diverse roles within the software engineering field, I am eager to leverage my versatile skill set and collaborate with teams to deliver innovative solutions. I am a passionate software developer with experience in building robust C/C++ programs, dynamic websites using React.js, Three.js, and Flask Python, and creating graphical applications using Java.
      </motion.p>
      <motion.p
        // fadeIn paras: direction, type, delay, duration of animation
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        However, in addition to programming I also love to:
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")