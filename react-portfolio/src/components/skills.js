import React from "react";
import { skills } from "./project-list";

function Skills() {
  return (
    <div>
      <section id="skills">
        <div className="container px-4 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              ipsa delectus eum quo voluptas aspernatur accusantium distinctio
              possimus est.
            </p>
          </div>
          <div className="flex flex-wrap">
            {skills.map((skills) => (
              <div key={skills} className="p-2 sm:w-1/4 w-full">
                <div className="bg-gray-800 rounded flex p-3 h-full items-center">
                  <span className="title-font font-medium text-white text-center">
                    {skills}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
