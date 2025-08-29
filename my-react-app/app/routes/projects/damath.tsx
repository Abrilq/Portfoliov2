import type { ReactElement } from 'react';
import FadeContent from 'app/welcome/FadeContent'

export default function DaMath(): ReactElement {
  return (
  <FadeContent
      blur={true}
      duration={500}
      easing="ease-in-out"
      initialOpacity={1}
    >
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">DaMath Educational Game</h1>
        
        <img 
          src="/images/damath.PNG" 
          alt="DaMath Educational Game" 
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-lg mb-4">
            An educational game designed to make learning mathematics fun and interactive.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Role</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Frontend 3D Designer</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {["Unity", "C#", "Blender3D"].map((tech) => (
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
