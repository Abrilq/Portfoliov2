import { useState } from 'react';
import { useNavigate } from 'react-router';
import FadeContent from './FadeContent';

interface ProjectCardProps {
  title: string;
  roles: string[];
  technologies: string[];
  imageUrl: string;
  route: string;
}

export function ProjectCardDark({ title, roles, technologies, imageUrl, route }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="bg-gray-900 w-48 h-64 rounded-lg transition-all duration-500 ease-in-out hover:scale-110 relative cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(route)}
    >
      {/* Window dots */}
      <div className="flex p-2 gap-1">
        <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
        <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
        <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
      </div>

      <div className="card__content relative">
        {/* Text content */}
        <div className={`transition-all duration-500 ${isHovered ? 'slide-up' : 'slide-down'}`}>
          <h1 className="text-sm text-center leading-relaxed">{title}</h1>
          
          <div className="text-xs text-blue-700 text-center leading-relaxed">
            {roles.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>

          <div className="text-xs text-center opacity-50">
            <hr className="w-40 mx-auto my-1" />
            {technologies.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
        </div>

        {/* Image hover content */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <FadeContent
            blur={true}
            duration={500}
            easing="ease-in-out"
            initialOpacity={1}
            inView={isHovered}
          >
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-40 object-cover rounded-xl"
            />
          </FadeContent>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardLight({ title, roles, technologies, imageUrl, route }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="bg-slate-800 w-48 h-64 rounded-lg transition-all duration-500 ease-in-out hover:scale-110 relative cursor-pointer overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(route)}
    >
      {/* Window dots */}
      <div className="flex p-2 gap-1">
        <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
        <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
        <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
      </div>

      <div className="card__content relative">
        {/* Text content */}
        <div className={`transition-all duration-500 ${isHovered ? 'slide-up' : 'slide-down'}`}>
          <h1 className="text-sm text-center leading-relaxed">{title}</h1>
          
          <div className="text-xs text-blue-400 text-center leading-relaxed">
            {roles.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>

          <div className="text-xs text-center opacity-50">
            <hr className="w-40 mx-auto my-1" />
            {technologies.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
        </div>

        {/* Image hover content */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <FadeContent
            blur={true}
            duration={500}
            easing="ease-in-out"
            initialOpacity={1}
            inView={isHovered}
          >
            <img 
              src={imageUrl}
              alt={title}
              className="w-full h-40 object-cover rounded-b-lg"
            />
          </FadeContent>
        </div>
      </div>
    </div>
  );
}
