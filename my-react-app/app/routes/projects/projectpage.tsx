import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProjectCardDark } from 'app/welcome/ProjectCard';
import { ProjectCardLight } from 'app/welcome/ProjectCard';

import FadeContent from 'app/welcome/FadeContent';
import TextType from 'app/components/TextType';


export default function ARProject(): ReactElement {
  const navigate = useNavigate();

  const professionalProjects = [
    {
      title: "Lost and Found WebApp",
      roles: ["Full-Stack Developer", "Team Leader", "UI/UX Designer"],
      technologies: ["React", "CSS3", "JavaScript (ES6+)", "MySQL"],
      imageUrl: "/images/psd/lnf.png",
      route: "/projects/lost-and-found"
    },
    {
      title: "Pre-advising System",
      roles: ["UI/UX Designer", "Frontend Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Firebase"],
      imageUrl: "/images/psd/dycguide.png",
      route: "/projects/pre-advising"
    },
    {
      title: "E-commerce Website",
      roles: ["Team Leader", "Frontend Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      imageUrl: "/images/psd/catpeas.png",
      route: "/projects/ecommerce"
    },
    {
      title: "DaMath Educational Game",
      roles: ["3D Designer"],
      technologies: ["Unity", "C#", "Blender"],
      imageUrl: "/images/psd/damath2.png",
      route: "/projects/damath"
    },
    {
      title: "AR Project",
      roles: ["3D Designer", "Full-Stack Developer"],
      technologies: ["Unity", "C#", "Blender", "AR Core"],
      imageUrl: "/images/psd/evoar.png",
      route: "/projects/ar-project"
    },
    {
      title: "Ordering System Mobile Application",
      roles: ["UI/UX Designer"],
      technologies: ["Flutter", "Dart", "Blender"],
      imageUrl: "/images/psd/orderingsystem1.png",
      route: "/projects/ordering-system"
    }
  ];

  const personalProjects = [
    {
      title: "Drinking Session",
      roles: ["Full-Stack Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      imageUrl: "/images/psd/drinking1.png",
      route: "/projects/drinking-session"
    },
    {
      title: "SRT Renamer",
      roles: ["Full-Stack Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      imageUrl: "/images/psd/srt.png",
      route: "/projects/srt-renamer"
    },
    {
      title: "Coming Soon...",
      roles: ["Full-Stack Developer"],
      technologies: ["???"],
      imageUrl: "/images/psd/comingsoon.png",
      route: null,
    }
  ];

  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={0}>
      
      <main className="relative min-h-screen bg-slate-950 px-6 py-10">
        {/* Back Button */}
        <div className="absolute left-5 top-5 sm:left-10 ">
        <button 
            onClick={() => navigate(-1)}
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100" 
            title="Go Back"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="stroke-white">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
            </svg>
        </button>
        </div>

        {/* Header Section */}
        <section className="w-full text-center mb-12 relative px-4 sm:px-6">
          <div className="flex justify-center mt-10 mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white">
            <TextType 
              text={["Welcome to my projects!", "Good to see you here!"]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              deletingSpeed={50}
              cursorBlinkDuration={0.4}
            />
          </div>
          <div className="flex justify-center mb-8">
            <hr className="w-60 sm:w-80 border-t-2 border-gray-600" />
          </div>
        </section>

        {/* Professional Projects Section */}
        <section className="w-full text-center mb-12 px-4 sm:px-6 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white">
              Academic Experience
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            {professionalProjects.map((project, index) => (
              <ProjectCardDark
                key={index}
                title={project.title}
                roles={project.roles}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                route={project.route}
              />
            ))}
          </div>
        </section>

        {/* Divider */}
        <section className="flex justify-center mb-12 px-4 sm:px-6">
          <hr className="w-60 sm:w-80 border-t-2 border-gray-600" />
        </section>

        {/* Personal Projects Section */}
        <section className="w-full text-center mb-12 px-4 sm:px-6 z-index-10">

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white">
              Personal Projects
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">
            {personalProjects.map((project, index) => (
              <ProjectCardLight
                key={index}
                title={project.title}
                roles={project.roles}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                route={project.route}
              />
            ))}
          </div>
        </section>

        <footer className="relative w-full text-center py-6 text-gray-500 text-sm mt-auto">
          © {new Date().getFullYear()} John Clarence A. Legaspi
        </footer>
      </main>
    </FadeContent>
  );
}
