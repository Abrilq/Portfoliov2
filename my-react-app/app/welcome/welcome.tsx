import { useState } from 'react';
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { ProjectCardDark } from './ProjectCard';
import { ProjectCardLight } from './ProjectCard';
import SplashCursor from './SplashCursor'
import DarkVeil from './DarkVeil';
import FadeContent from './FadeContent'
import BlurText from './BlurText';
import LightRays from './LightRays';
import ScrollReveal from './ScrollReveal';

export function Welcome() {
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
      imageUrl: "/images/psd/drinking.png",
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

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="min-h-screen">
      <main className="flex items-center justify-center pt-16 pb-4">
        <div className="flex flex flex-col gap-10 min-h-0">
          <section>
            <div className='w-full mt-16 mb-24'>
              <BlurText
                text="Hi, I'm Clarence."
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl h-screen font-extrabold justify-start dark:text-white"
              />
            </div>
            <div className='w-full mt-16 mb-24'>
              <BlurText
                text="A Software Developer."
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl h-screen font-extrabold justify-end dark:text-white"
              />
            </div>
            <div className='w-full mt-16 mb-24'>
              <BlurText
                text="I specialize in creating efficient and scalable web applications."
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl h-screen font-extrabold text-center dark:text-white"
              />
            </div>
            <div className='w-full mt-16 mb-24'>
              <BlurText
                text="But I focus more on the frontend."
                delay={300}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl h-screen font-extrabold justify-end dark:text-white [&_span:nth-child(7)]:bg-gradient-to-r [&_span:nth-child(7)]:from-blue-500 [&_span:nth-child(7)]:via-purple-500 [&_span:nth-child(7)]:to-pink-500 [&_span:nth-child(7)]:text-transparent [&_span:nth-child(7)]:bg-clip-text"
              />
            </div>
          </section>

          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
            <div className="w-full text-center mb-12">
              <hr className='w-full mb-10'/>
              <h2 className="text-2xl font-bold text-center dark:text-white mb-8">
                Professional Experience
              </h2>
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
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
            <div className="w-full text-center mb-12">
              <hr className='w-full mb-10'/>
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

            <div className="w-full inline-flex justify-center">
              <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                  Connect With Me
                </p>
                <ul>
                  {resources.map(({ href, text, icon }) => (
                    <li key={href}>
                      <a
                        className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {icon}
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
        </div>
      </main>
    </div>
  );
}

const resources = [
  {
    href: "https://github.com/yourusername",
    text: "GitHub Profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    text: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "mailto:your.email@example.com",
    text: "Contact Me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
