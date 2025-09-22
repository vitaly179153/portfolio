import { useState } from "react";
import type { ProjectData } from "../types";
import projectsData from "../data/db.json";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const projects: ProjectData[] = projectsData;
  const total = projects.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <section
      id="projects"
      className="w-full py-20 flex flex-col items-center bg-gray-200"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
        My Projects
      </h2>

      <div className="relative w-full max-w-5xl flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-blue-500 transition"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full px-4"
              >
                <div className="bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
                  <div className="w-full aspect-[16/9] bg-gray-700 flex items-center justify-center">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-gray-400">No thumbnail</span>
                    )}
                  </div>
                  <div className="p-6 text-center text-gray-100">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full hover:bg-blue-500 transition"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
}
