import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // default empty
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      // class name is a dynamic template string
      /*
      py-5: padding of 5, fixed top-0: stay on top, z-20: make it appear above other elements
      max-w-7xl: want a lot of width in nav bar
      tailwind commentation for more info
      sm: small devices
      */
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
      ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/" // to home
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // keeps track of where we are on the pg currently
            window.scrollTo(0,0); // when clicked on, scroll to top of pg
          }}
        >
          <img src={logo} alt='logo' className='w-12 h-12 object-contain'/>
          {/* <p> Shivani <span className='sm:block hidden'>| JavaScript Mastery</span></p> */}
          {/* &nbsp; is a unicode char for space */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex sm:block hidden'>&nbsp; Shivani Hukkeri</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title && active != 'resume'
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
              {/* { active === 'Resume'
                ? <a href={Link.id} target="_blank" rel="noopener noreferrer">{Link.title}</a>
                : <a href={`#${Link.id}`}>{Link.title}</a>
              } */}
            </li>
          ))}
        </ul>

        {/* MOBILE NAVBAR */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]
                  ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar