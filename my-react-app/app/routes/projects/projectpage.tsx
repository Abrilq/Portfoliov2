import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProjectCardDark } from 'app/welcome/ProjectCard';
import { ProjectCardLight } from 'app/welcome/ProjectCard';

import FadeContent from 'app/welcome/FadeContent';
import ScrollReveal from 'app/welcome/ScrollReveal';
import TextPressure from 'app/welcome/TextPressure';

export default function ARProject(): ReactElement {
  const navigate = useNavigate();

  const professionalProjects = [
    {
      title: "Lost and Found WebApp",
      roles: ["Full-stack Developer", "Team Leader", "UI/UX Designer"],
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
      roles: ["Project Leader", "Frontend Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      imageUrl: "/images/psd/catpeas.png",
      route: "/projects/ecommerce"
    },
    {
      title: "Ordering System Mobile Application",
      roles: ["UI/UX Designer"],
      technologies: ["Flutter (Dart)"],
      imageUrl: "/images/psd/orderingsystem1.png",
      route: "/projects/ordering-system"
    },
    {
      title: "DaMath Educational Game",
      roles: ["Frontend 3D Designer"],
      technologies: ["Unity", "C#", "Blender3D"],
      imageUrl: "/images/psd/damath2.png",
      route: "/projects/damath"
    },
    {
      title: "AR Project",
      roles: ["Frontend 3D Designer"],
      technologies: ["Unity", "C#", "Blender3D"],
      imageUrl: "/images/psd/evoar.png",
      route: "/projects/ar-project"
    }
  ];

  const personalProjects = [
    {
      title: "Drinking Session",
      roles: ["Full-stack Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      imageUrl: "/images/psd/drinking1.png",
      route: "/projects/drinking-session"
    },
    {
      title: "SRT Renamer",
      roles: ["Full-stack Developer"],
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      imageUrl: "/images/psd/srt.png",
      route: "/projects/srt-renamer"
    },
  ];

  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={1}>
      <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={0}>

        {/* Header Section */}
        <section className="w-full text-center mb-12 relative px-4 sm:px-6">
          <div className="flex justify-center mt-10 mb-6">
            <TextPressure
              text="Hello there!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <div className="flex justify-center mb-8">
            <hr className="w-60 sm:w-80 border-t-2 border-gray-600" />
          </div>
        </section>

        {/* Professional Projects Section */}
        <section className="w-full text-center mb-12 px-4 sm:px-6 relative">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="cursor-pointer duration-200 hover:scale-110 active:scale-95"
              title="Go Back"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                className="stroke-blue-300"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                ></path>
              </svg>
            </button>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white">
              Professional Experience
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
        <section className="w-full text-center mb-12 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-white mb-8">
            Personal Projects
          </h2>

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

      </ScrollReveal>
    </FadeContent>
  );
}
