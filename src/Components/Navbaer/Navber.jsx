import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../../../public/h-logo.png";
import hero from "../../../public/hero.png";
import { CiSaveDown1 } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const Navber = () => {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const socialIconsRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Hero Title Animation
    const heroTitle = heroTextRef.current;
    if (heroTitle) {
      gsap.fromTo(
        heroTitle.querySelectorAll("p, h1, h2"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }

    // Social Icons Animation
    const socialIcons = socialIconsRef.current;
    if (socialIcons) {
      gsap.fromTo(
        socialIcons.querySelectorAll("a"),
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out",
          delay: 0.5,
        }
      );
    }

    // Buttons Animation
    const buttons = buttonsRef.current;
    if (buttons) {
      gsap.fromTo(
        buttons.querySelectorAll("a"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.8,
        }
      );
    }

    // Stats Animation
    const stats = statsRef.current;
    if (stats) {
      gsap.fromTo(
        stats,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1,
        }
      );

      const statNumbers = stats.querySelectorAll(".stat-number");
      statNumbers.forEach((stat) => {
        const finalValue = parseInt(stat.textContent);
        gsap.fromTo(
          { value: 0 },
          { value: finalValue },
          {
            onUpdate: function () {
              stat.textContent = Math.ceil(this.targets()[0].value);
            },
            duration: 2,
            ease: "power2.out",
            delay: 1.2,
          }
        );
      });
    }

    // Hero Image Animation
    const heroImage = heroImageRef.current;
    if (heroImage) {
      gsap.fromTo(
        heroImage,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out",
          delay: 0.3,
        }
      );

      // Continuous floating animation
      gsap.to(heroImage, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  // Hover effect on social icons
  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleSocialHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Hover effect on buttons
  const handleButtonHover = (e) => {
    gsap.to(e.currentTarget, {
      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)",
      y: -5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      boxShadow: "none",
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const AnimatedNumber = ({ value, className }) => {
    const numberRef = useRef(null);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (numberRef.current) {
        gsap.fromTo(
          { val: 0 },
          {
            val: value,
            duration: 2,
            ease: "power1.out",
            onUpdate: function () {
              setDisplayValue(Math.ceil(this.targets()[0].val));
            },
          }
        );
      }
    }, [value]);
  };

  const links = (
    <>
      <li>
        <a
          href="#home"
          className="text-font font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-font font-medium hover:text-primary/80 transition-colors"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#my-skills"
          className="text-font font-medium hover:text-primary/80 transition-colors"
        >
          My Skills
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className="text-font font-medium hover:text-primary/80 transition-colors"
        >
          My Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-font font-medium hover:text-primary/80 transition-colors"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="min-h-screen  flex flex-col">
        {/* Header */}
        {/* sticky top-0 z-50 */}
        <header className="w-11/12 mx-auto py-6">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <a href="#" className="">
                {/* Hamidur <span className="text-[#ff6900]">.</span> */}
                <img src={logo} alt="" className="h-11 w-11" />
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
              <a
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverOut}
                className="bg-primary text-white font-medium py-3 px-8 rounded-lg text-sm hover:bg-primary/90 transition-colors cursor-pointer"
                href="https://wa.me/8801650053800"
                target="_blank"
              >
                Hire Me
              </a>
            </div>
          </div>
        </header>

        {/* Main Section */}
        <div className="flex-grow w-11/12 mx-auto px-4 flex items-center">
          <div className="grid justify-between items-center mx-auto grid-cols-1 gap-8 md:grid-cols-2 md:gap-52 md:py-0">
            {/* Left Text Section */}
            <div
              ref={heroTextRef}
              className="flex flex-col space-y-8 text-center md:text-left"
            >
              <div>
                <p className="text-xl">Hi I am</p>
                <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mt-1">
                  MD HAMIDUR RAHMAN
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mt-2">
                  Full Stack Web Developer
                </h2>
              </div>

              {/* Social Icons */}
              <div
                ref={socialIconsRef}
                className="flex justify-center md:justify-start items-center space-x-4"
              >
                {/* Instagram */}
                <a
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialHoverOut}
                  className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  href="https://www.facebook.com/hamidur.800"
                  target="_blank"
                >
                  <FaFacebook className="text-blue-500" />
                </a>

                {/* LinkedIn */}
                <a
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialHoverOut}
                  className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  href="https://www.linkedin.com/in/hamidur800t"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-[#0a66c2]" />
                </a>

                {/* Dribbble */}
                <a
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialHoverOut}
                  className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  href="https://github.com/hamidur800"
                  target="_blank"
                >
                  <FaGithub className="text-black" />
                </a>

                {/* Behance */}
                <a
                  onMouseEnter={handleSocialHover}
                  onMouseLeave={handleSocialHoverOut}
                  className="w-10 h-10 border border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  href="https://wa.me/8801650053800"
                  target="_blank"
                >
                  <IoLogoWhatsapp className="text-[#1daa61]" />
                </a>
              </div>

              {/* Buttons */}
              <div
                ref={buttonsRef}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <a
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonHoverOut}
                  className="bg-primary text-white font-medium py-3 px-8 rounded-lg text-sm hover:bg-primary/90 transition-colors cursor-pointer"
                  href="https://wa.me/8801650053800"
                  target="_blank"
                >
                  Hire Me
                </a>
                <a
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonHoverOut}
                  className="bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 font-medium py-3 px-8 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  href="https://drive.google.com/file/d/19Bun38e5965X24VbV0f502BxBgmmQtGZ/view?usp=sharing"
                  target="_blank"
                >
                  <div className="flex justify-between items-center flex-wrap gap-0.5">
                    <div className="">Resume</div>
                    <div className="">
                      <CiSaveDown1 />
                    </div>
                  </div>
                </a>
              </div>

              {/* Stats */}
              <div
                ref={statsRef}
                className="bg-gray-200 dark:bg-gray-900/50 rounded-lg p-6 max-w-lg mx-auto md:mx-0"
              >
                <div className="flex justify-around p-10 rounded-xl">
                  <div className="text-center">
                    {/* <AnimatedNumber
                      value={5}
                      className="text-2xl font-bold text-primary"
                    /> */}
                    <p className="text-2xl font-bold text-primary ">2+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Experiences
                    </p>
                  </div>

                  <div className="text-center">
                    {/* <AnimatedNumber
                      value={20}
                      className="text-2xl font-bold text-primary"
                    /> */}

                    <p className="text-2xl font-bold text-primary ">15+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Projects Done
                    </p>
                  </div>

                  <div className="text-center">
                    {/* <AnimatedNumber
                      value={80}
                      className="text-2xl font-bold text-primary"
                    /> */}
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[80%] h-[80%] bg-gray-200/50 dark:bg-gray-800/50 rounded-full blur-3xl"></div>

              <div className="absolute w-full h-full max-w-md max-h-md rounded-full"></div>

              <img
                ref={heroImageRef}
                alt="Portrait of Hamidur"
                className="relative w-full max-w-md z-10 shadow-lg shadow-blue-600 rounded-full"
                src={hero}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
