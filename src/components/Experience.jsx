import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

// allows us to have animated timeline
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

// with curly braces it expects a return () stment within body
// else you can open and close the fnc with () to denote an instant return
const ExperienceCard = ({ experience }) => (
  // creates and returns the vertical timeline cards (elements)
  <VerticalTimelineElement
    // styling the cards
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      {/* render work title */}
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      {/* render company name */}
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
    </div>

    {/* render work description */}
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {/* render each indiv point */}
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      {/* headers */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      {/* vertical timeline */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {/* loop over experiences */}
          {experiences.map((experience, index) => (
            // return an experience card
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")