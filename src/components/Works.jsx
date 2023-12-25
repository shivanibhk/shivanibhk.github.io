import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants"; // actual data about projects we've created
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard =({index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
      // fade in from up, with type spring
      // index*.5: each card fades in one by one
      // for a duration of 0.75 seconds
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* github icon on the top right corner of card */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"
          // absolute allows it to move freely from flow of document
          // inset-0: place it on top of the underlying image
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")} // open pg in new tab
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              // rounded-full makes it a circle
            >
              <img
                src={github}
                alt='github'
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* name and descrp of project */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-24px">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      {/* headers */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>my work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          // margin top, color, size, readable on larger devices, change line height
        >
          The following projects demonstrate my skills and experience through real-world examples of my work. Each project is provided with a brief description with links to its code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* wrapper for project cards */}
      <div className="mt-20 flex flex-wrap gap-7"
      // flex-wrap: cards are going to wrap if screen size decreases
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");