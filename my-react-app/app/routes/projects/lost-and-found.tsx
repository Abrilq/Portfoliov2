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
import GlareHover from '../../welcome/GlareHover'

import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { FaCss3Alt, FaJava, FaHtml5 } from "react-icons/fa";


import { div } from "motion/react-client";

export default function ProjectPage(): ReactElement {
  const navigate = useNavigate();
  
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={1}>

      <div className="overflow-hidden bg-slate-950">

        {/* Hero Section */}
        <section>
          <div style={{ height: '700px', position: 'relative', marginBottom: '20vh' }}>
            <CardSwap
              cardDistance={40}
              verticalDistance={100}
              delay={3000}
              pauseOnHover={false}
            >
              <Card>
                <img
                  src="/images/heroes/lnf.PNG"
                  alt="Project Preview"
                  className="w-1080 h-full rounded-xl shadow-lg mb-8"
                />
              </Card>
              <Card>
                <img
                  src="/images/lnf.PNG"
                  alt="Project Preview"
                  className="w-1080 h-full rounded-xl shadow-lg mb-8"
                />
              </Card>
              <Card>
                <img
                  src="/images/psd/lnf.png"
                  alt="Project Preview"
                  className="w-1080 h-full rounded-xl shadow-lg mb-8"
                />
              </Card>
              <Card>
                <img
                  src="/images/heroes/lnf.PNG"
                  alt="Project Preview"
                  className="w-1080 h-full rounded-xl shadow-lg mb-8"
                />
              </Card>
              <Card>
                <img
                  src="/images/heroes/lnf.PNG"
                  alt="Project Preview"
                  className="w-1080 h-full rounded-xl shadow-lg mb-8"
                />
              </Card>

            </CardSwap>

            <div className='absolute left-20 mt-10'>
              {/* Back Button */}
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

            <div className="flex-col absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div>
                <h1 className="text-9xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent font-black z-40">Findr.</h1>
              </div>
              <div>
                <h1 className="text-lg flex justify-end italic font-light">claim what is once lost.</h1>
              </div>
              {/* Continue Exploring Button */}
              <div className="relative group mt-10 flex justify-end">
                <button
                  onClick={() => {
                    const nextSection = document.querySelector("section");
                    nextSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                    <span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  ></span>

                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">Explore</span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Title Section */}
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
          <section className="w-screen h-240 py-20 px-6 bg-slate-950 mt-25 mb-5">
            <div className="text-center">
              <div className="flex flex-row justify-center">                
                <div className="flex flex-row justify-center items-center">
                  <h2 className="uppercase text-9xl font-extrabold italic bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                    Lost
                  </h2>
                </div>
                <div>
                  <span className="text-9xl font-extrabold mb-none italic"> & </span>
                </div>
                <div>
                <h2 className="uppercase text-9xl font-extrabold italic bg-gradient-to-l from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  Found
                  </h2>
                </div>
              </div>
             
              <h2 className="uppercase text-3xl font-semibold mb-6 mt-none">Web Application</h2>
              <p className="pl-30 pr-30 mt-10 mb-5 text-md/1">
                A service-focused platform designed to help
                students, faculty, and administrators manage lost and found items within a school or institution.
                The system ensures that lost items are efficiently tracked, securely stored, and properly claimed by rightful owners.
                It provides real-time visibility of lost items to users while allowing faculty and administrators
                to manage reports, claims, and item archiving in a streamlined and structured way.
              </p>
            </div>
            <div className="flex justify-center">
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
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
          <section className="w-screen h-screen py-5 px-6 bg-slate-950 mt-10 mb-5">

            <div className="mt-20 mb-20 text-sm/8">
              <ScrollVelocity
                texts={['Project Objectives', 'Lost and Found WebApp']} 
                velocity={10} 
                className="custom-scroll-text"
              />
            <ul className="flex flex-col justify-center list-disc list-inside space-y-4 text-2xl max-w-6xl mx-auto my-10 text-justify">
              {[
                "Provide students with a simple way to view lost items online.",
                "Allow faculty to record, update, and manage lost items.",
                "Enable administrators to oversee the entire process, including account and item management.",
                "Maintain a clear item lifecycle: Reported → Verified → Claimed → Archived.",
                "Reduce manual paperwork and increase efficiency in handling lost and found items."
              ].map((line, idx) => (
                <li key={idx}>
                  <DecryptedText
                    text={line}
                    animateOn="view"
                    sequential={true}
                    revealDirection="start"
                    speed={40}
                    className="text-gray-200"
                    encryptedClassName="text-purple-400"
                  />
                </li>
              ))}
            </ul>
            </div>
            <div className="flex justify-center items-center opacity-10 text-6xl font-extrabold italic uppercase">
              <h1 className="">Scroll Down For More</h1>
            </div>
          </section>
        </ScrollReveal>

        {/* Features */}
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
            <section className="py-20 px-6 max-w-6xl mx-auto text-center">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl uppercase font-extrabold mb-12 mt-20">
                  Project Key Features
                </h2>
                <div className="flex flex-row justify-center gap-10">
                  <div className="flex justify-center text-start">
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          👩‍🎓 Users (Students)
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                          <li>View a list of currently reported lost items.</li>
                          <li>Check item details (name, location found, date reported, etc.).</li>
                          <li>See uploaded images of lost items to confirm ownership.</li>
                          <li>View claim location/instructions provided by faculty.</li>
                        </ul>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div className="flex justify-center text-start">
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          👩‍🏫 Faculty
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                          <li>Add newly reported lost items into the system.</li>
                          <li>Update item details (e.g., name, surrenderer, found location).</li>
                          <li>
                            Manage item claims:
                            <ul className="list-none list-inside ml-6 mt-1 space-y-1">
                              <li>- Record the owner’s details once claimed.</li>
                              <li>- Move items from <b>Currently Lost → Claimed</b>.</li>
                              <li>- Archive items that remain unclaimed after a set period.</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div className="flex justify-center text-start">
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div className="">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          🛠️ Admin
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                          <li>Manage user and faculty accounts (add, edit, delete).</li>
                          <li>
                            Access an <b>Admin Dashboard</b> with three main views:
                            <ul className="list-none list-inside ml-6 mt-1 space-y-1">
                              <li>- Currently Lost Items Table</li>
                              <li>- Claimed Items Table</li>
                              <li>- Archived Items Table</li>
                            </ul>
                          </li>
                          <li>
                            Perform bulk actions on items:
                            <ul className="list-none list-inside ml-6 mt-1 space-y-1">
                              <li>- Edit details</li>
                              <li>- Mark as Claimed</li>
                              <li>- Move to Archive</li>
                              <li>- Delete</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            </section>
        </ScrollReveal>

        {/* My Roles */}
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
          <section className="h-screen">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl uppercase font-extrabold mb-6 mt-20">My Roles for this project</h2>
                <p className=" font-extrabold mb-6 opacity-20">Hover over the cards!</p>
              </div>        
            <div className="flex justify-center items-center gap-5">
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "1rem", color: "#ffffff" }}>
                      Full-Stack Developer
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/fullstack.PNG"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "1rem", color: "#ffffff" }}>
                      Team Leader
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/teamleader.PNG"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <PixelTransition
                firstContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                    }}
                  >
                    <p style={{ fontWeight: 900, fontSize: "1rem", color: "#ffffff" }}>
                      UI/UX Designer
                    </p>
                  </div>
                }
                secondContent={
                  <img
                    src="/images/roles/designer.PNG"
                    alt=""
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                }
                gridSize={12}
                pixelColor="#ffffff"
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </div>
          </section>

        </ScrollReveal>

        {/* Technologies */}
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
          <section className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-3xl uppercase font-extrabold mb-6 mt-20">Technologies Used</h2>
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
              {/* HTML5 */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                          <FaHtml5 className="text-5xl text-orange-600" />
                        <p className="text-gray-700 font-medium">HTML5</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
              {/* CSS3 */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                        <FaCss3Alt className="text-5xl text-blue-500" />
                        <p className="text-gray-700 font-medium">CCS3</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
              {/* JavaScript */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                        <FaJava className="text-5xl text-orange-500" />
                        <p className="text-gray-700 font-medium">JavaScript</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
              {/* React */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                          <FaReact className="text-5xl text-cyan-400" />
                        <p className="mt-3 text-gray-700 font-medium">React</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
              {/* MySQL */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                          <SiMysql className="text-5xl text-blue-500" />
                        <p className="mt-3 text-gray-700 font-medium">MySQL</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
              {/* NodeJS */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                        <FaNodeJs className="text-5xl text-green-500" />
                        <p className="mt-3 text-gray-700 font-medium">NodeJS</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
              {/* ExpressJS */}
              <div>
                <div style={{ height: '600px', position: 'relative' }}>
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <h2 style={{ fontSize: '1rem', fontWeight: '900', color: '#333', margin: 0 }}>
                      <div className="flex flex-col items-center">
                          <SiExpress className="text-5xl text-gray-800" />
                        <p className="mt-3 text-gray-700 font-medium">ExpressJs</p>
                      </div>
                    </h2>
                  </GlareHover>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Links */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Explore More</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              GitHub Repo
            </a>
            <a
              href="https://your-live-demo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              Live Demo
            </a>
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
