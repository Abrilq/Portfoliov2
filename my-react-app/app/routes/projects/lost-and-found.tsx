import type { ReactElement } from "react";
import { useNavigate } from 'react-router-dom';

import FadeContent from "app/welcome/FadeContent";
import CardSwap, { Card } from '../../welcome/CardSwap'
import ScrollReveal from '../../welcome/ScrollReveal';
import MagicBento from '../../welcome/MagicBento'
import ScrollVelocity from '../../welcome/ScrollVelocity'
import DecryptedText from '../../welcome/DecryptedText';
import PixelTransition from '../../welcome/PixelTransition';

import { div } from "motion/react-client";

export default function ProjectPage(): ReactElement {
  const navigate = useNavigate();
  
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={1}>

      <div className="overflow-hidden bg-slate-950">
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

        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
          {/* What the project is about */}
          <section className="w-screen h-screen py-20 px-6 bg-slate-950 mt-25 mb-5">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Lost and Found Web Application</h2>
              <p className="pl-30 pr-30 mt-10 mb-5 text-md/1">
                The Lost and Found Web Application is a service-focused platform designed to help
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

        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
          >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl uppercase font-extrabold mb-6 mt-20">My Roles</h2>
            <p className=" font-extrabold mb-6 opacity-20">Hover over the cards!</p>
          </div>
        </ScrollReveal>


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

        {/* Features */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-600 text-sm">
                Short explanation of the feature.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-600 text-sm">
                Short explanation of the feature.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-600 text-sm">
                Short explanation of the feature.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-6 bg-gray-50 text-center">
          <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Tailwind CSS", "Express", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

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
