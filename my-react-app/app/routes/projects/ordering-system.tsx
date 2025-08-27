import type { ReactElement } from 'react';

export default function OrderingSystem(): ReactElement {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Ordering System Mobile Application</h1>
        
        <img 
          src="/images/orderingsystem.PNG" 
          alt="Ordering System Mobile Application" 
          className="w-full rounded-lg shadow-lg mb-8"
        />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-lg mb-4">
            A mobile application designed to streamline the ordering process for businesses.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Role</h2>
          <ul className="list-disc list-inside text-lg">
            <li>UI/UX Designer</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {["Mobile Development", "UI/UX Design"].map((tech) => (
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
  );
}
