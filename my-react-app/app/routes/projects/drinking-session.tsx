import type { ReactElement } from 'react';
import FadeContent from 'app/welcome/FadeContent'


export default function DrinkingSession(): ReactElement {
  return (
  <FadeContent
      blur={true}
      duration={500}
      easing="ease-in-out"
      initialOpacity={1}
    >
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Drinking Session</h1>
        
        <img 
          src="/images/drinking.PNG" 
          alt="Drinking Session" 
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-lg mb-4">
            A web application for managing and organizing social drinking events.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Role</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Full-stack Developer</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML5", "CSS3", "JavaScript (ES6+)"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-gray-200 rounded-full text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

  </FadeContent>
  );
}
