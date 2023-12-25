import { BallCanvas } from "./canvas"; // the actual balls
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    // flex-wrap: full length of line if screen is too tight
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        // for each technology we want to return a div
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");