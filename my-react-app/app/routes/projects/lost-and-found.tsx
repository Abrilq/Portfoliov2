import type { ReactElement } from "react";
import { useNavigate } from 'react-router-dom';

import FadeContent from "app/welcome/FadeContent";
import CardSwap, { Card } from '../../welcome/CardSwap'
import ScrollReveal from '../../welcome/ScrollReveal';
import MagicBento from '../../welcome/MagicBento'
import ScrollVelocity from '../../welcome/ScrollVelocity'
import DecryptedText from '../../welcome/DecryptedText';
import PixelTransition from '../../welcome/PixelTransition';
import SpotlightCard from '../../welcome/SpotlightCard';
import BlurText from '../../welcome/BlurText'

import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { FaCss3Alt, FaJava, FaHtml5 } from "react-icons/fa";

export default function ProjectPage(): ReactElement {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={1}>
      <div className="overflow-hidden bg-slate-950">

        {/* Hero Section */}
        <section>
          <div className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[700px] mb-20">
            <CardSwap
              cardDistance={40}
              verticalDistance={100}
              delay={3000}
              pauseOnHover={false}
            >
              {[1, 2, 3, 4, 5].map((n, i) => (
                <Card key={i}>
                  <img
                    src={`/images/heroes/lnf.PNG`}
                    alt="Project Preview"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="stroke-blue-300">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                </svg>
              </button>
            </div>

            {/* Hero Text */}
            <div className="absolute top-1/2 left-1/3 sm:left-1/4 transform -translate-y-1/2 text-left px-4">
              <h1 className="text-6xl sm:text-8xl lg:text-[14rem] leading-none bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent font-black">
                Findr.
              </h1>
              <h2 className="text-sm sm:text-lg lg:text-3xl italic font-light mt-2 text-white">
                claim what is once lost.
              </h2>

            {/* Explore Button */}
            <div className="relative group mt-6 flex">
              <button
                onClick={() => {
                  // Select the current hero section
                  const currentSection = document.querySelector('section');
                  // Scroll to the next section sibling
                  const nextSection = currentSection?.nextElementSibling;
                  nextSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative inline-block px-6 py-3 sm:px-8 sm:py-4 font-semibold text-white bg-gray-800 shadow-2xl rounded-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
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
                <h2 className="uppercase text-4xl sm:text-6xl lg:text-9xl font-extrabold italic bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">Lost</h2>
                <span className="text-4xl sm:text-6xl lg:text-9xl font-extrabold italic">&</span>
                <h2 className="uppercase text-4xl sm:text-6xl lg:text-9xl font-extrabold italic bg-gradient-to-l from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">Found</h2>
              </div>
              <h2 className="uppercase text-xl sm:text-2xl lg:text-3xl font-semibold my-6">Web Application</h2>
                <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200 mt-6">
                  A service-focused platform designed to help students, faculty, and administrators manage lost and found items within a school or institution. The system ensures that lost items are efficiently tracked, securely stored, and properly claimed by rightful owners. It provides real-time visibility of lost items to users while allowing faculty and administrators to manage reports, claims, and item archiving in a streamlined and structured way.
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
                glowColor="132, 0, 255"
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
                texts={['Project Objectives', 'Lost & Found WebApp']}
                velocity={20}
                className="custom-scroll-text w-full text-center"
              />
            </div>

            {/* Content Box */}
            <div className="max-w-4xl mx-auto">
              {/* Responsive Flex List */}
              <ul className="mt-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
                {[
                  "Provide students with a simple way to view lost items online.",
                  "Allow faculty to record, update, and manage lost items.",
                  "Enable administrators to oversee the entire process, including account and item management.",
                  "Maintain a clear item lifecycle: Reported → Verified → Claimed → Archived.",
                  "Reduce manual paperwork and increase efficiency in handling lost and found items."
                ].map((line, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {/* Custom bullet */}
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shrink-0"></span>

                    {/* Text */}
                    <DecryptedText
                      text={line}
                      animateOn="view"
                      sequential={true}
                      revealDirection="start"
                      speed={35}
                      className="text-gray-200 text-sm sm:text-base lg:text-2xl leading-relaxed lg:leading-loose"
                      encryptedClassName="text-purple-400"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Users */}
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-white">👩‍🎓 Users (Students)</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 flex flex-col items-start justify-start">
                  <li>View a list of currently lost items that have been reported.</li>
                  <li>Check item details such as item name, date found, location where it was found, and the faculty in charge.</li>
                  <li>Confirm whether the item belongs to them by reviewing the item’s image.</li>
                </ul>
              </SpotlightCard>

              {/* Faculty */}
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-white">👩‍🏫 Faculty</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>Report newly found items into the system with details (item name, person who surrendered it, and found location).</li>
                  <li>Update item information, such as owner’s name when the item is claimed.</li>
                  <li>Move items between statuses: from “Lost” to “Claimed” or “Archived.”</li>
                  <li>Maintain accurate records of both active and past lost items.</li>
                </ul>
              </SpotlightCard>

              {/* Admin */}
              <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-white">🛠️ Admin</h3>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>Manage user and faculty accounts to ensure secure access.</li>
                  <li>Oversee the entire system by monitoring lost, claimed, and archived items.</li>
                  <li>Access dashboards with a comprehensive view of system activity.</li>
                  <li>Perform bulk actions such as editing records, marking items as claimed, archiving old records, and deleting entries if necessary.</li>
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
                  "Faster and more reliable lost item recovery.",
                  "","",
                  "Reduced manual errors in recording/claiming items.",
                  "Increased student confidence in the institution’s handling of lost property.",
                  "","",
                  "A scalable digital solution that can be extended to multiple campuses."
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
              <PixelTransition
                firstContent={
                  <div className="flex items-center justify-center w-full h-full">
                    <p className="text-white font-bold text-lg sm:text-xl text-center">
                      Full-Stack Developer
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/fullstack.PNG"
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
                      Team Leader
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/teamleader.PNG"
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
            </div>
          </section>
        </ScrollReveal>

        {/* Technologies */}
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={2}>
          <section className="py-10 flex flex-col justify-center items-center">
            <h2 className="text-2xl sm:text-3xl uppercase font-extrabold mb-10">Technologies Used</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 px-4">
              {/* Tech Icons */}
              <div className="flex flex-col items-center"><FaHtml5 className="text-5xl text-orange-600" /><p>HTML5</p></div>
              <div className="flex flex-col items-center"><FaCss3Alt className="text-5xl text-blue-500" /><p>CSS3</p></div>
              <div className="flex flex-col items-center"><FaJava className="text-5xl text-orange-500" /><p>Java</p></div>
              <div className="flex flex-col items-center"><FaReact className="text-5xl text-cyan-400" /><p>React</p></div>
              <div className="flex flex-col items-center"><SiMysql className="text-5xl text-blue-500" /><p>MySQL</p></div>
              <div className="flex flex-col items-center"><FaNodeJs className="text-5xl text-green-500" /><p>NodeJS</p></div>
              <div className="flex flex-col items-center"><SiExpress className="text-5xl text-gray-800" /><p>Express</p></div>
            </div>
          </section>
        </ScrollReveal>

        {/* Links */}
        <section className="py-10 px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">Explore More</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">GitHub Repo</a>
            <a href="https://your-live-demo.com" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">Live Demo</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Name
        </footer>
      </div>
    </FadeContent>
  );
}
