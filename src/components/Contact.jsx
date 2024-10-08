import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


// QX3PODBm52dvD7z4S
// template_sy3yvon 
// service_x6ou2x7

const Contact = () => {
  const formRef = useRef() 
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents default refresh
    setLoading(true);

    emailjs.send(
      'service_x6ou2x7',
      'template_sy3yvon',
      {
        from_name: form.name,
        to_name: 'Shivani',
        from_email: form.email,
        to_email: 'shivanihukkeri@gmail.com',
        message: form.message,
      },
      'QX3PODBm52dvD7z4S'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('something went wrong.')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <p
          className="mt-12 mb-12 flex flex-row font-medium"
        >
        I am currently looking for Summer 2025 internship opportunities related to software engineering or artificial intelligence. Feel free to connect with me on LinkedIn or drop me an email at shivanihukkeri@gmail.com!
        </p>

        <div className='flex flex-row justify-normal gap-4'>
          <a href="https://www.linkedin.com/in/shivani-hukkeri/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin 
              className="icons w-12 h-12"
            />
          </a>
          <a href="mailto:shivanihukkeri@gmail.com">
            <MdEmail
              className="icons w-12 h-12"
            />
          </a>
        </div>

        {/* <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        > */}
          {/* name field */}
          {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium"
            />
          </label> */}

          {/* email field */}
          {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium"
            />
          </label> */}

          {/* message field */}
          {/* <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-non border-none font-medium"
            />
          </label> */}

          {/* <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form> */}
      </motion.div>

      {/* handle's earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")