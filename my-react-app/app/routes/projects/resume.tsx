import React, { type JSX } from "react";
import FadeContent from 'app/welcome/FadeContent'
import { useNavigate } from "react-router-dom";

export default function ResumePage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={0}>

      {/* Back Button */}
      <div className="relative left-5 top-5 sm:left-10">
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

      <main className="min-h-screen bg-slate-950 text-gray-900 px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <header className="p-8 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-extrabold">John Clarence A. Legaspi</h1>
                <p className="mt-1 text-sm opacity-90">Bachelor of Science in Information Technology (BSIT)</p>
              </div>
              <div className="mt-4 sm:mt-0 text-sm text-right">
                <p>1409 Canuto Villanueva St., Caingin, Bocaue, Bulacan</p>
                <p>(+63) 961 261 4463</p>
                <p className="underline">legaspi.johnclarence@dyci.edu.ph</p>
              </div>
            </div>
          </header>

          <section className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left column */}
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
                  <p className="text-gray-700">
                    Recent Information Technology graduate with hands-on experience in web development, game development, and UI/UX design.
                    Skilled in frontend and backend technologies, with leadership experience in team-based projects. Holds certifications in Cybersecurity, Agile Project Management, and Network Fundamentals. Passionate about building scalable, user-friendly solutions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">Projects & Experience</h2>

                  <article className="mb-4">
                    <h3 className="font-semibold">Lost and Found WebApp — <span className="italic">Team Leader, Full-Stack Developer</span></h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Led a 3-member team to develop a web application for lost-and-found web application.</li>
                      <li>Designed user, staff, and admin workflows for reporting and tracking items.</li>
                      <li>Built scalable full-stack architecture, improving accountability in schools and workplaces.</li>
                    </ul>
                  </article>

                  <article className="mb-4">
                    <h3 className="font-semibold">E-Commerce Website — <span className="italic">Project Leader, Frontend Developer</span></h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Directed frontend development of an eyewear e-commerce site with product variants and dynamic dropdowns.</li>
                      <li>Built intuitive browsing experience with responsive product displays.</li>
                      <li>Ensured project security by limiting backend exposure during development.</li>
                    </ul>
                  </article>

                  <article className="mb-4">
                    <h3 className="font-semibold">Ordering System Application — <span className="italic">UI/UX Designer</span></h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Designed and implemented UI/UX for a canteen ordering system using Flutter.</li>
                      <li>Optimized navigation flow for easy ordering and clear, user-friendly layouts.</li>
                    </ul>
                  </article>

                  <article className="mb-4">
                    <h3 className="font-semibold">DaMath Educational Game — <span className="italic">Frontend 3D Designer</span></h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Created interactive 3D chessboard and themed assets in Blender to enhance learning.</li>
                    </ul>
                  </article>

                  <article className="mb-4">
                    <h3 className="font-semibold">Basic Banking System — <span className="italic">Solo Developer</span></h3>
                    <ul className="list-disc ml-5 text-gray-700">
                      <li>Developed a local banking application using Visual Basic & MySQL, implementing full CRUD operations.</li>
                    </ul>
                  </article>

                </section>

                <section className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">Education</h2>
                  <p className="text-gray-700">Dr. Yanga’s Colleges Inc. — Bachelor of Science in Information Technology (BSIT), 2021 – 2025</p>
                </section>
              </div>

              {/* Right column */}
              <aside className="space-y-6">
                <section>
                  <h2 className="text-lg font-semibold mb-3">Technical Skills</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Programming:</strong> TypeScript, JavaScript (ES6+), C#, HTML5, CSS3, MySQL</li>
                    <li><strong>Frameworks & Tools:</strong> React, Vite, Unity, Flutter, Blender, Figma, Git, GitHub, VS Code</li>
                    <li><strong>Web & UI/UX:</strong> Responsive design, Wireframing, User flow optimization</li>
                    <li><strong>Other:</strong> Agile collaboration, Problem-solving, English fluency</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold mb-3">Certifications</h2>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Cybersecurity</li>
                    <li>Agile Project Management</li>
                    <li>Network Fundamentals</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-semibold mb-3">Contact</h2>
                  <div className="text-gray-700 text-sm">
                    <p>Email: <a href="mailto:legaspi.johnclarence@dyci.edu.ph" className="text-sky-600 underline">legaspi.johnclarence@dyci.edu.ph</a></p>
                    <p>Phone: (+63) 961 261 4463</p>
                    <p>Location: Caingin, Bocaue, Bulacan</p>
                  </div>
                </section>
              </aside>
            </div>
          </section>
            <footer className="px-8 py-6 bg-gray-50 text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} John Clarence A. Legaspi. All rights reserved.
            </footer>
        </div>
      </main>
    </FadeContent>
  );
}
