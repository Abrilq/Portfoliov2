import type { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProjectCardDark } from 'app/welcome/ProjectCard';
import { ProjectCardLight } from 'app/welcome/ProjectCard';

import FadeContent from 'app/welcome/FadeContent'
import ScrollReveal from 'app/welcome/ScrollReveal';
import FlowingMenu from 'app/welcome/FlowingMenu';
import BlurText from 'app/welcome/BlurText';
import TextPressure from 'app/welcome/TextPressure';

export default function ARProject(): ReactElement {
  const navigate = useNavigate();

  const professionalProjects = [
    {
      title: "Lost and Found WebApp",
      roles: ["Team Leader", "Full-stack Developer"],
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
    <FadeContent
        blur={true}
        duration={500}
        easing="ease-in-out"
        initialOpacity={1}
    >
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={0}
      >
        <div className="w-full text-center mb-12">

          <div style={{position: 'relative', height: '300px', margin: '20px'}}>
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

          <div className='relative flex justify-center'>
            <hr className='w-250 mb-10 mt-10'/>
          </div>

          <div className='absolute left-25'>
            <button 
              onClick={() => navigate(-1)}
              className="cursor-pointer duration-200 hover:scale-125 active:scale-100" 
              title="Go Back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
                <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
              </svg>
            </button>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-center dark:text-white mb-8">
              Professional Experience
            </h2>
          </div>

          <div className="flex gap-10 inline-flex flex-wrap justify-center">
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
        </div>

        <div className="w-full text-center mb-12">

          <div className='relative flex justify-center'>
            <hr className='w-250 mb-10 mt-10'/>
          </div>
          
          <h2 className="text-2xl font-bold text-center dark:text-white mb-8">
            Personal Projects
          </h2>
          <div className="flex gap-10 inline-flex flex-wrap justify-center">
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
        </div>
      </ScrollReveal> 
    </FadeContent>
  );
}
