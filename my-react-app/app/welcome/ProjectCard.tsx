import { useState } from 'react';
import { useNavigate } from 'react-router';

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
      <div className="flex p-2 gap-1">
        <div className="">
          <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div className="card__content relative">
        <div className={`transition-all duration-500 ${isHovered ? 'slide-up' : 'slide-down'}`}>
          <h1 className="text-sm text-center leading-relaxed">{title}</h1>
          <span className="text-xs text-blue-700 text-center leading-relaxed">
            {roles.map((role, index) => (
              <div key={index}>{role}</div>
            ))}
          </span>
          <p className="text-xs text-center opacity-50">
            <hr className="w-40 inline-block center" />
            {technologies.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </p>
        </div>
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            transform: `translateY(${isHovered ? '0' : '100%'})`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectCardLight({ title, roles, technologies, imageUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-slate-800 w-48 h-64 rounded-lg transition-all duration-500 ease-in-out hover:scale-110 relative cursor-pointer overflow-hidden shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex p-2 gap-1">
        <div className="">
          <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
        </div>
        <div className="circle">
          <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
        </div>
      </div>
      <div className="card__content relative">
        <div className={`transition-all duration-500 ${isHovered ? 'slide-up' : 'slide-down'}`}>
          <h1 className="text-sm text-center leading-relaxed">{title}</h1>
          <span className="text-xs text-blue-400 text-center leading-relaxed">
            {roles.map((role, index) => (
              <div key={index}>{role}</div>
            ))}
          </span>
          <p className="text-xs text-center opacity-50">
            <hr className="w-40 inline-block center" />
            {technologies.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </p>
        </div>
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            transform: `translateY(${isHovered ? '0' : '100%'})`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-40 object-cover rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
}