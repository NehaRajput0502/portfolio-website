import React from 'react';
import { FaGithub } from 'react-icons/fa';
import JWImage from '../assets/jw.png';
import QWImage from '../assets/qw.png';

const projects = [
  {
    title: 'Jewellery E-Commerce Website',
    description:
      'A responsive web application for buying and selling jewellery, featuring user authentication, product listings, and a shopping cart.',
    status: 'Completed Project',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://neharajput0502.github.io/Jewellery-Website/Jewellery_Website/JEWELLERY.HTML#',
    image: JWImage ,
    direction: 'left',
  },
  {
    title: 'Quiz System',
    description:
      'The website is designed to be mobile-friendly and works on both desktop & mobile devices.',
    status: 'In Progress',
    tech: ['HTML', 'CSS(Bootstrap)', 'JavaScript'],
    github: 'https://neharajput0502.github.io/Quiz-System/',
    image: QWImage,
    direction: 'right',
  },
];

const Project = () => {
  return (
    <div
      className="py-16 px-4 md:px-20 bg-transparent font-extrabold scroll-mt-24"
      id="projects"
    >
      <h2 className="text-center text-5xl font-bold uppercase bg-gradient-to-r from-indigo-700 via-violet-600 to-rose-500 bg-clip-text text-transparent">
        My Projects
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-4 font-bold text-pink-600">
        Some of my best projects with technologies used and links.
      </p>

      <div className="mt-16 space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              project.direction === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Hanging Card Section */}
            <div className="md:w-1/2 flex flex-col items-center  relative group transform rotate-[-3deg] hover:rotate-0 transition duration-500">
              {/* Kill + Threads */}
              <div className="absolute -top-9 z-20 flex flex-col  items-center">
                <div className="w-5 h-5 bg-pink-700 rounded-full z-10 mb-0"></div>
                <div className="relative w-0 h-0">
                  <div className="absolute -left-15 top-4 w-15 h-[1.5px] bg-indigo-600 -rotate-[30deg] origin-top-left" />
                  <div className="absolute -right-15 top-4 w-15 h-[1.5px] bg-indigo-600 rotate-[30deg] origin-top-right" />
                </div>
              </div>

              {/* Card (Image + White Box Together) */}
              <div className="bg-white border-2 border-indigo-600 shadow-lg  rounded-2xl  p-3 w-full">
                <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  >
                    <FaGithub className="text-white text-6xl" />
                  </a>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-pink-500 text-m font-semibold mb-2">{project.status}</p>
                  <h3 className="text-lg font-bold text-amber-600 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm font-semibold text-blue-700 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Side */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">{project.title}</h3>
              <p className="text-red-900 mb-4 font-bold">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-br from-pink-200 via-pink-400 to-purple-600 text-gray-700 text-m font-semibold px-4 py-2 rounded-md hover:bg-red-200 shadow transform hover:scale-95 transition duration-200"
              >
                🔗 Click Me
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;