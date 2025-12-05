import React from "react";
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const MySkills = () => {
  return (
    <div>
      <div id="my-skills">
        <section className="bg-background-light dark:bg-background-dark font-display">
          <div className="w-11/12 mx-auto py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
                My Skills
              </h1>
            </div>
          </div>
          <div className="w-11/12 mx-auto grid grid-cols-1 pb-16  lg:grid-cols-4 gap-8">
            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <DiHtml5 size={80} color="#E34F26" />
                  <h2 className="text-center text-xl">HTML5</h2>
                  <h2 className="text-center text-xl">96%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <IoLogoCss3 size={80} color="#2d53e5" />
                  <h2 className="text-center text-xl">HTML5</h2>
                  <h2 className="text-center text-xl">90%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <FaJsSquare size={80} color="#f7e024" />
                  <h2 className="text-center text-xl">JavaScript</h2>
                  <h2 className="text-center text-xl">54%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <SiNextdotjs size={80} color="#fff" />
                  <h2 className="text-center text-xl">Next.js</h2>
                  <h2 className="text-center text-xl">46%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <FaReact size={80} color="#08ddff" />
                  <h2 className="text-center text-xl">React.js</h2>
                  <h2 className="text-center text-xl">67%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <RiTailwindCssFill size={80} color="#3ebff8" />
                  <h2 className="text-center text-xl">Tailwind CSS</h2>
                  <h2 className="text-center text-xl">89%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <SiExpress size={80} color="#fff" />
                  <h2 className="text-center text-xl">Express.js</h2>
                  <h2 className="text-center text-xl">42%</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div class="card">
                <div className="flex flex-col justify-center items-center gap-4">
                  <FaNodeJs size={80} color="#84bf08" />
                  <h2 className="text-center text-xl">Node.js</h2>
                  <h2 className="text-center text-xl">45%</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MySkills;
