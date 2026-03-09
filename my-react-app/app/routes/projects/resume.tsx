import React, { type JSX } from "react";
import FadeContent from 'app/welcome/FadeContent'
import { useNavigate } from "react-router-dom";
import LetterGlitch from "~/welcome/LetterGlitch";

export default function ResumePage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={0}>
        <main className="min-h-screen bg-slate-950 text-gray-900 px-6 py-20 font-sans">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">

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

              <header className="p-8 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-extrabold text-center lg:text-left">John Clarence A. Legaspi</h1>
                    <p className="mt-1 text-sm opacity-90 text-center lg:text-left">Bachelor of Science in Information Technology (BSIT)</p>
                  </div>
                  <div className="mt-4 sm:mt-0 text-sm text-center lg:text-right">
                    <p>Bocaue, Bulacan, Philippines</p>
                    <p>(+63) 961 261 4463</p>
                    <p className="underline">clarence.legaspi.dev@gmail.com</p>
                  </div>
                </div>
              </header>

              <section className="p-4 lg:p-10">

                <div className="flex flex-col md:flex gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <section>
                      <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
                      <p className="text-gray-700 mx-6 sm:m-none">
                        Information Technology graduate with experience in web development, UI/UX design, and frontend engineering.
                        Proficient in JavaScript, React, and modern web development tools, with hands-on experience delivering academic and
                        freelance projects including e-commerce solutions and full-stack web applications.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3">Technical Skills</h2>
                      <ul className="space-y-2 text-gray-700">
                        <li className="mx-6 sm:mx-4"><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript, C#, PHP, MySQL</li>
                        <li className="mx-6 sm:mx-4"><strong>Tools:</strong> React, Vite, Klaviyo, Replo, Flutter, Unity, Blender, Figma, Git</li>
                      </ul>
                    </section>


                    <section>
                      <h2 className="text-lg font-bold mb-4">Experience</h2>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold">Shopify E-commerce Client — <span className="italic">Freelance Web Developer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Developed responsive Klaviyo email templates for e-commerce marketing campaigns</li>
                          <li>Implemented dynamic email content using Liquid variables</li>
                          <li>Built Shopify landing pages using Replo page builder</li>
                          <li>Collaborated with the client to translate design requirements into functional web components</li>
                          <li>Improved user experience through mobile-responsive design and structured UI layouts</li>
                        </ul>
                      </article>

                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-4">Projects</h2>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold">Lost and Found WebApp — <span className="italic">Team Leader, Full-Stack Developer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Led a 3-member team to develop a web application for lost-and-found web application.</li>
                          <li>Designed user, staff, and admin workflows for reporting and tracking items.</li>
                          <li>Built scalable Full-Stack architecture, improving accountability in schools and workplaces.</li>
                        </ul>
                      </article>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold"> Pre-advising System — <span className="italic">UI/UX Designer, Frontend Developer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Designed and developed a web-based pre-advising system to help students view, select, and manage subjects based on course, year level, and semester.</li>
                          <li>Focused on making the web pages clear and efficient for students and adviser’s navigation</li>
                        </ul>
                      </article>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold">E-Commerce Website — <span className="italic">Project Leader, Frontend Developer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Directed frontend development of an eyewear e-commerce site with different product variants.</li>
                          <li>Built intuitive browsing experience with responsive product displays.</li>
                          <li>Ensured project security by limiting backend exposure during development.</li>
                        </ul>
                      </article>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold">Ordering System Application — <span className="italic">UI/UX Designer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Designed and implemented UI/UX for a canteen ordering system using Flutter.</li>
                          <li>Optimized navigation flow for easy ordering and clear, user-friendly layouts.</li>
                        </ul>
                      </article>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold">DaMath Educational Game — <span className="italic">Frontend 3D Designer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Created interactive 3D chessboard and themed assets in Blender to enhance learning.</li>
                        </ul>
                      </article>

                      <article className="mb-4 mx-6 sm:mx-4">
                        <h3 className="font-bold">Augmented Reality Project — <span className="italic">3D Designer, Full-Stack Developer</span></h3>
                        <ul className="list-disc ml-5 text-gray-700">
                          <li>Developed an augmented reality mobile application using ARCore and C#</li>
                          <li>Designed and animated 3D models and assets in Blender to create an interactive computer history timeline.</li>
                          <li>Integrated ARCore functionalities to deliver a fully functional and engaging AR learning experience.</li>
                        </ul>
                      </article>

                    </section>

                  </div>

                  <aside className="space-y-6">

                    <section>
                      <h2 className="text-xl font-bold mb-3">Certifications</h2>
                      <div className="grid grid-cols-2 gap-4 mx-6 sm:mx-4">
                        <div className="text-gray-700">
                          <dt className="font-semibold">Networking Basics</dt>
                          <dd className="text-xs">Cisco</dd>
                          <dd className="text-xs mb-3">Issued May 2024</dd>
                        </div>
                        <div className="text-gray-700">
                          <dt className="font-semibold">Introduction to Cybersecurity</dt>
                          <dd className="text-xs">Cisco</dd>
                          <dd className="text-xs mb-3">Issued Dec 2023</dd>
                        </div>
                        <div className="text-gray-700">
                          <dt className="font-semibold">Predictive Project Management</dt>
                          <dd className="text-xs">PMI</dd>
                          <dd className="text-xs mb-3">Issued Sep 2023</dd>
                        </div>
                        <div className="text-gray-700">
                          <dt className="font-semibold">Microsoft Office Excel Associate</dt>
                          <dd className="text-xs">Microsoft</dd>
                          <dd className="text-xs mb-3">Issued June 2023</dd>
                        </div>
                      </div>
                    </section>

                    <section className="mt-6 font-semibold">
                      <h2 className="text-xl font-bold mb-3">Education</h2>
                      <p className="text-gray-700 mx-6 sm:mx-4">Dr. Yanga's Colleges Inc.</p>
                      <p className="text-gray-700 mx-6 sm:mx-4 font-normal">Bachelor of Science in Information Technology (BSIT)</p>
                      <p className="text-gray-700 mx-6 sm:mx-4">2021 – 2025</p>
                    </section>

                  </aside>
                </div>

                <footer className="px-8 pt-6 pb-none text-sm text-gray-600 text-center">
                  © {new Date().getFullYear()} John Clarence A. Legaspi. All rights reserved.
                </footer>
              </section>
            </div>

        </main>
    </FadeContent>
  );
}