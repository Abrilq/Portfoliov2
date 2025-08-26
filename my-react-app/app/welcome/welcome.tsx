import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">

      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 dark:text-white">
              John Doe
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Full Stack Web Developer
            </p>
          </div>
        </header>

        <div className="flex gap-10 inline-flex flex-wrap justify-center">
          {/* Lost and Found WebApp */}
          <div className="bg-gray-900 w-48 h-64 rounded-lg">
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
            <div className="card__content">
              <h1 className="text-sm text-center leading-relaxed">Lost and Found WebApp</h1>
                <span className="text-xs text-blue-700 text-center leading-relaxed">
                  <div>Team Leader</div>
                  <div>Full-stack Developer</div>
                </span>
                <p className="text-xs text-center opacity-50">
                  <hr className="w-40 inline-block center" />
                  <div>React</div>
                  <div>CCS3</div>
                  <div>JavaScript (ES6+)</div>
                  <div>MySQL</div>
                </p>
            </div>
          </div>
          {/* E-commerce Website */}
          <div className="bg-gray-900 w-48 h-64 rounded-lg">
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
            <div className="card__content">
              <h1 className="text-sm text-center leading-relaxed">E-commerce Website</h1>
                <span className="text-xs text-blue-700 text-center leading-relaxed">
                  <div>Project Leader</div>
                  <div>Frontend Developer</div>
                </span>
                <p className="text-xs text-center opacity-50">
                  <hr className="w-40 inline-block center" />
                  <div>HTML5</div>
                  <div>CSS3</div>
                  <div>JavaScript (ES6+)</div>
                </p>
            </div>
          </div>
          {/* Ordering System Application  */}
          <div className="bg-gray-900 w-48 h-64 rounded-lg">
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
            <div className="card__content">
              <h1 className="text-sm text-center leading-relaxed">Ordering System Mobile Application </h1>
                <span className="text-xs text-blue-700 text-center leading-relaxed">
                  <div>UI/UX Designer</div>
                </span>
                <p className="text-xs text-center opacity-50">
                  <hr className="w-40 inline-block center" />
                  <div>Flutter (Dart)</div>
                </p>
            </div>
          </div>
          {/* DaMath Educational Game */}
          <div className="bg-gray-900 w-48 h-64 rounded-lg">
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
            <div className="card__content">
              <h1 className="text-sm text-center leading-relaxed">DaMath Educational Game</h1>
                <span className="text-xs text-blue-700 text-center leading-relaxed">
                  <div>Frontend 3D Designer</div>
                </span>
                <p className="text-xs text-center opacity-50">
                  <hr className="w-40 inline-block center" />
                  <div>Unity</div>
                  <div>C#</div>
                  <div>Blender3D</div>
                </p>
            </div>
          </div>


        </div>

        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Connect With Me
            </p>
            <ul>
              {resources.map(({ href, text, icon }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      
    </main>
  );
}

const resources = [
  {
    href: "https://github.com/yourusername",
    text: "GitHub Profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    text: "LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "mailto:your.email@example.com",
    text: "Contact Me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
