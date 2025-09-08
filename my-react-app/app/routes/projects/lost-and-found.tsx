import type { ReactElement } from "react";
import { useNavigate } from 'react-router-dom';

import FadeContent from 'app/welcome/FadeContent'
import CardSwap, { Card } from '../../welcome/CardSwap'
import ScrollReveal from '../../welcome/ScrollReveal';
import MagicBento from '../../welcome/MagicBento'
import ScrollVelocity from '../../welcome/ScrollVelocity'
import DecryptedText from '../../welcome/DecryptedText';
import PixelTransition from '../../welcome/PixelTransition';
import SpotlightCard from '../../welcome/SpotlightCard';
import BlurText from '../../welcome/BlurText'

import { FaReact, FaNodeJs, FaDocker, FaCss3Alt, FaJava, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMysql, SiJavascript, SiFirebase } from "react-icons/si";

export default function ProjectPage(): ReactElement {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const cardImages = [
  "/images/mobile/dycguide.PNG",
  "/images/mobile/dycguide.PNG",
  "/images/mobile/dycguide.PNG",
  "/images/mobile/dycguide.PNG",
  "/images/mobile/dycguide.PNG",
  "/images/mobile/dycguide.PNG",
];

  return (

    <div className="relative bg-slate-950 overflow-hidden">
      <FadeContent
        blur={false}
        duration={1000}
        easing="ease-in-out"
        initialOpacity={0}
      >
        {/* Hero Section */}
        <section>
          <div className="relative min-h-[100vh] sm:min-h-[screen] lg:min-h-[700px] mb-20">
            <CardSwap
              cardDistance={80}
              verticalDistance={150}
              delay={3000}
              pauseOnHover={false}
            >
              {cardImages.map((src, i) => (
                <Card key={i}>
                  <img
                    src={src}
                    alt={`Project Preview ${i + 1}`}
                    className="w-full sm:w-3/4 lg:w-[1080px] h-full object-cover rounded-xl shadow-lg mb-8 mx-auto"
                  />
                </Card>
              ))}
            </CardSwap>

            {/* Back Button */}
            <div className="absolute left-5 top-5 sm:left-10">
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

            {/* Hero Text */}
            <div className="absolute top-1/2 left-1/3 sm:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-right px-4">
              <h1 className="text-6xl sm:text-8xl lg:text-[8rem] leading-none bg-gradient-to-r 
              from-indigo-800 via-yellow-500 to-yellow-700 
              bg-clip-text text-transparent font-black">
                Findr.
              </h1>
              <h2 className="text-sm sm:text-lg lg:text-3xl italic font-light mt-2 text-white">
                claim what is once lost.
              </h2>

              {/* Explore Button */}
              <div className="relative group mt-6 flex flex-col items-end">
                <button
                  onClick={() => {
                    const currentSection = document.querySelector("section");
                    const nextSection = currentSection?.nextElementSibling;
                    nextSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative inline-block px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white bg-gray-800 shadow-2xl rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r 
                  from-blue-950 via-slate-700 to-yellow-800 
                  p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">Explore</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Title Section */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="w-full min-h-[60vh] py-10 sm:py-20 px-4 sm:px-6 bg-slate-950 mt-10 mb-5">
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <h1 className="text-6xl italic sm:text-8xl lg:text-[8rem] leading-none bg-gradient-to-r 
                from-indigo-800 via-yellow-500 to-yellow-700 
                bg-clip-text text-transparent font-black">
                  DYC-GUIDE
              </h1>
              </div>
              <h2 className="uppercase text-xl sm:text-2xl lg:text-3xl font-semibold my-6">Web Application</h2>
                <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200 mt-6">
                A web-based application designed to assist students and administrators during the academic pre-enrollment process. It streamlines the selection of courses by automatically validating prerequisites, displaying eligible subjects, and maintaining accurate academic records.
                This system aims to reduce the time and errors involved in manual advising while giving administrators control over student eligibility and subject management.
                </p>
            </div>
            <div className="flex justify-center mt-10">
              <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="255, 255, 255"
              />
            </div>
          </section>
        </ScrollReveal>

        {/* Objectives */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="w-full min-h-[60vh] py-10 px-4 sm:px-6 bg-slate-950 mt-10 mb-5">
            
            {/* Full-width ScrollVelocity */}
            <div className="w-full overflow-hidden">
              <ScrollVelocity
                texts={['Project Objectives', 'DYC-GUIDE', 'Pre-advising System']}
                velocity={20}
                className="custom-scroll-text w-full text-center"
              />
            </div>

            {/* Content Box */}
            <div className="max-w-4xl mx-auto">
              {/* Responsive Flex List */}
              <ul className="mt-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
                {[
                  "Provide students with a clear view of their eligible subjects based on course, year, and semester.",
                  "Automate prerequisite checking to prevent incorrect subject enrollment.",
                  "Allow administrators to manage users, courses, and subject offerings.",
                  "Maintain a reliable system of academic records and reports.",
                  "Increase efficiency and accuracy in the pre-advising process."
                ].map((line, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {/* Custom bullet */}
                    <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0"></span>

                    {/* Text */}
                    <DecryptedText
                      text={line}
                      animateOn="view"
                      sequential={true}
                      revealDirection="start"
                      speed={35}
                      className="text-gray-200 text-sm sm:text-base lg:text-2xl leading-relaxed lg:leading-loose"
                      encryptedClassName="text-green-500"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ScrollReveal>

        {/* Features */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="py-10 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl uppercase font-extrabold mb-12 text-center">Project Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
              
              {/* Users */}
              <SpotlightCard spotlightColor="rgba(255, 196, 0, 0.30)">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-white">👩‍🎓 Students</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 flex flex-col items-start justify-start">
                  <li>Secure login and registration using student ID + password.</li>
                  <li>View available subjects for their course, year, and semester.</li>
                  <li>Automatically see only eligible subjects (based on prerequisites).</li>
                  <li>Submit preferred subjects for pre-advising..</li>
                  <li>Access academic history and pre-advised subjects.</li>

                </ul>
              </SpotlightCard>

              {/* Faculty */}
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-white">👨‍💼 Administrators</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>Manage student accounts (add, update, or deactivate).</li>
                  <li>Add, edit, or delete subject records (code, units, prerequisites, semester, year level).</li>
                  <li>Oversee the pre-advising flow, including flagged issues with prerequisites.</li>
                  <li>Maintain accurate records of both active and past lost items.</li>
                  <li>Generate student reports for record-keeping and submission.</li>
                </ul>
              </SpotlightCard>

            </div>
          </section>
        </ScrollReveal>

        {/* Expected Impact Section */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="w-full min-h-[60vh] py-10 sm:py-20 px-4 sm:px-6 bg-slate-950 mt-10 mb-5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl uppercase font-extrabold mb-12 text-center">Expected Impact</h2>

              <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10 text-end">
                {[
                  "Students gain clarity on their academic paths, reducing confusion and errors.",
                  "","",
                  "Administrators save time with automated prerequisite checks and digital records.",
                  "The institution benefits from a scalable, organized, and efficient pre-advising process.",
                ].map((text, idx) => (
                  <div
                    key={idx}
                    className={idx % 2 === 0 ? "justify-self-start" : "justify-self-end"}
                  >
                    <BlurText
                      text={text}
                      delay={150}
                      animateBy="words"
                      direction="top"
                      onAnimationComplete={handleAnimationComplete}
                      className="text-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* My Roles */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="min-h-[60vh] py-10 flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl uppercase font-extrabold mb-4">My Roles</h2>
              <p className="font-bold opacity-40 mb-6">Hover over the cards!</p>
            </div>

            {/* Roles Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
              <PixelTransition
                firstContent={
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="text-white font-bold text-lg sm:text-xl text-center">
                      UI/UX Designer
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/designer.PNG"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
              />

              <PixelTransition
                firstContent={
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="text-white font-bold text-lg sm:text-xl text-center">
                      Frontend Developer
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/frontend.PNG"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
              />
            </div>
          </section>
        </ScrollReveal>

        {/* Technologies */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="py-10 flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl uppercase font-extrabold mb-10">Technologies Used</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {/* Tech Icons */}
              <div className="flex flex-col items-center"><FaHtml5 className="text-5xl text-orange-600" /><p>HTML5</p></div>
              <div className="flex flex-col items-center"><FaCss3Alt className="text-5xl text-blue-500" /><p>CSS3</p></div>
              <div className="flex flex-col items-center"><SiJavascript className="text-5xl text-yellow-400" /><p>JavaScript</p></div>
              <div className="flex flex-col items-center"><SiFirebase className="text-5xl text-orange-500" /><p>Firebase</p></div>


            </div>
          </section>
        </ScrollReveal>


        {/* Profile Card */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="flex flex-col items-center m-5">
            <div className="relative duration-300 hover:-rotate-0 -rotate-12 group border border-sky-900 border-4 overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
              
              {/* Name + Title */}
              <div className="text-gray-50">
                <span className="font-bold text-sm">Legaspi, John Clarence A.</span>
                <p className="text-xs mt-1">Web Developer</p>
              </div>

              {/* Download CV Button */}
              <div className="flex flex-col gap-1">
                {/* View CV Button */}
                <a
                  href="/ClarenceCV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-between duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3"
                >
                  View CV
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4.5C7.305 4.5 3.223 7.61 1.5 12c1.723 4.39 5.805 7.5 10.5 7.5s8.777-3.11 10.5-7.5C20.777 7.61 16.695 4.5 12 4.5zm0 11.25a 3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5z" />
                    <circle cx="12" cy="12" r="2.25" />
                  </svg>
                </a>


                {/* Download CV Button */}
                <a
                  href="/ClarenceCV.pdf"
                  download="Clarence_LegaspiCV.pdf"
                  className="justify-between duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3"
                >
                  Download CV
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
                    />
                  </svg>
                </a>
              </div>

              {/* Background Decoration */}
              <svg
                className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-900"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path
                  data-name="layer1"
                  d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                  strokeMiterlimit="10"
                  strokeWidth="5"
                ></path>
              </svg>

              <svg
                className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
              >
                <path
                  data-name="layer1"
                  d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
          </section>
        </ScrollReveal>

        {/* Make sure all sections are within this container */}
        <div className="relative w-full">
          {/* Footer - Update footer to ensure it's always at the bottom */}
          <footer className="relative w-full text-center py-6 text-gray-500 text-sm mt-auto">
            © {new Date().getFullYear()} John Clarence A. Legaspi
          </footer>
        </div>

      </FadeContent>
    </div>
  );
}