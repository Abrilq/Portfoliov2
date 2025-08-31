import type { ReactElement } from "react";
import { useNavigate } from 'react-router-dom';

import FadeContent from "app/welcome/FadeContent";
import CardSwap, { Card } from '../../welcome/CardSwap'
import { div } from "motion/react-client";

export default function ProjectPage(): ReactElement {
  const navigate = useNavigate();
  
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={1}>

        <div style={{ height: '600px', position: 'relative', marginBottom: '20vh' }}>
          <CardSwap
            cardDistance={60}
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
          </CardSwap>

          <div className='absolute left-20 mt-10'>
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
          </div>
        </div>

        {/* What I Did */}
        <section className="py-20 px-6 bg-white-50 text-center">
          <h2 className="text-2xl font-semibold mb-6">My Role</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>✔ Full-Stack Developer</li>
            <li>✔ UI/UX Designer</li>
            <li>✔ Database Designer</li>
          </ul>
        </section>

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
    </FadeContent>
  );
}
