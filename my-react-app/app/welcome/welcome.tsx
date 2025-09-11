import { useState, useEffect } from 'react';
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { ProjectCardDark } from './ProjectCard';
import { ProjectCardLight } from './ProjectCard';
import SplashCursor from './SplashCursor'
import DarkVeil from './DarkVeil';
import FadeContent from './FadeContent'
import LightRays from './LightRays';
import ScrollReveal from './ScrollReveal';
import FlowingMenu from './FlowingMenu';
import BlurText from './BlurText';

export function Welcome() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem('scrollPosition');
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  const demoItems = [
    { link: '/projects/resume', text: 'Resume', image: './images/flowingmenu/Resume-nobg.PNG' },
    { link: '#', text: 'Certifications', image: './images/flowingmenu/Certifications-nobg.PNG' },
    { link: '/projects/projectpage', text: 'Projects', image: './images/flowingmenu/Projects-nobg.PNG' }, // Fixed path
    { link: '/projects/links', text: 'My Links', image: './images/flowingmenu/Links-nobg.PNG' }
  ];

  return (
    <div className="min-h-screen m-5">
      <main className="flex items-center justify-center pt-16 pb-4 text-white">
        <div className="">
          <section>
            <div className='flex justify-start'>
              <BlurText
                text="Hi, I'm Clarence."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="sm:text-lg md:text-3xl lg:text-5xl h-screen font-extrabold justify-start dark:text-white"
              />
            </div>
            <div className='flex justify-end'>
              <BlurText
                text="A Web Developer."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="sm:text-lg md:text-3xl lg:text-5xl h-screen font-extrabold dark:text-white"
              />
            </div>
            <div className=''>
              <BlurText
                text="I specialize in creating efficient and scalable web applications."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="sm:text-xs md:text-3xl lg:text-5xl h-screen font-extrabold text-center dark:text-white text-center"
              />
            </div>
            <div className='flex justify-end'>
              <BlurText
                text="But I focus more on the frontend."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="sm:text-lg md:text-3xl lg:text-5xl h-90 font-extrabold justify-end dark:text-white [&_span:nth-child(7)]:bg-gradient-to-r [&_span:nth-child(7)]:from-blue-500 [&_span:nth-child(7)]:via-purple-500 [&_span:nth-child(7)]:to-pink-500 [&_span:nth-child(7)]:text-transparent [&_span:nth-child(7)]:bg-clip-text"
              />
            </div>
          </section>
          
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
            <div style={{ height: '600px', position: 'relative' }}>
              <FlowingMenu items={demoItems} />
            </div>
          </ScrollReveal>

          <footer className="relative w-full text-center py-6 text-gray-500 text-sm mt-auto">
              © {new Date().getFullYear()} John Clarence A. Legaspi
          </footer>
        </div>
      </main>
    </div>
  );
}