import React, { useEffect, useRef } from "react";
import ImgCard from "../ImgCard/ImgCard";
import { CiSaveDown1 } from "react-icons/ci";
import { motion } from "framer-motion";
import gsap from "gsap";

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // gsap.from(imgRef.current, {
    //   opacity: 0,
    //   x: -80,
    //   duration: 1.2,
    //   ease: "power3.out",
    // });

    gsap.from(textRef.current, {
      opacity: 0,
      x: 80,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="about"
      className="bg-background-light dark:bg-background-dark antialiased font-sans"
    >
      <div className="w-11/12 md:w-10/12 mx-auto py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl font-bold">About Me</h2>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-400 mt-2">
            Here are the latest skills I have acquired for my career.
          </p>
        </motion.div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
          {/* GSAP Image */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <ImgCard />
          </motion.div>

          {/* GSAP Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed space-y-6"
          >
            <p>
              I am a passionate Full-Stack Web Developer skilled in building
              modern, responsive, and scalable web applications. I work
              confidently across both frontend and backend, focusing on clean
              code, performance, and real-world problem solving. I enjoy
              learning new technologies and continuously improving my
              development workflow.
            </p>

            {/* Button */}
            <motion.a
              href="https://drive.google.com/file/d/1ZyywTa6gleC17NRi-cJGwdC1cLf93Ccz/view?usp=sharing"
              download
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume <CiSaveDown1 size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
