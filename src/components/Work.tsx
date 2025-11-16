const Work = () => {

const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Integrated with Stripe for payments and Keycloak for authentication.",
      tech: ["Next.js", "TypeScript", "Stripe", "Keycloak", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using WebSockets. Features include drag-and-drop task organization, team collaboration, and progress tracking with beautiful UI/UX.",
      tech: ["React", "Node.js", "WebSockets", "MongoDB", "Express"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS, featuring smooth animations, dark mode support, and optimized performance with SEO best practices.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      image: "/api/placeholder/600/400",
      github: "#",
      live: "#",
      featured: false,
    },
  ];
  return (
    <section id="work" className="min-h-[100vh] max-w-[1000px] flex flex-col justify-start mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-0">
      <div className="flex items-center gap-3 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl text-[var(--lightest-slate)] font-bold">
          Some Things I've Built
        </h2>
        <div className="flex-1 h-[1px] bg-[var(--lightest-navy)]"></div>
      </div>

      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1 relative group w-full md:w-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative z-10 w-full h-[200px] sm:h-[250px] md:h-[300px] bg-[var(--light-navy)] rounded overflow-hidden border border-[var(--primary-green)]/20 hover:border-[var(--primary-green)]/50 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-[var(--primary-green)]/10 to-[var(--light-navy)] flex items-center justify-center">
                  <img
                    src="/project-placeholder.svg"
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-[var(--primary-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div className="flex-1 flex flex-col gap-3 md:gap-4 w-full md:w-auto">
              {project.featured && (
                <p className="text-[10px] sm:text-xs font-mono text-[var(--primary-green)]">
                  Featured Project
                </p>
              )}
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--lightest-slate)] hover:text-[var(--primary-green)] transition-colors">
                {project.title}
              </h3>
              <div className="bg-[var(--light-navy)] p-4 sm:p-6 rounded border border-[var(--primary-green)]/10 shadow-lg">
                <p className="text-[var(--slate)] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4 text-[10px] sm:text-xs font-mono text-[var(--light-slate)]">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary-green)] hover:text-[var(--lightest-slate)] transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-5 sm:h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary-green)] hover:text-[var(--lightest-slate)] transition-colors"
                    aria-label="External Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-5 sm:h-5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

