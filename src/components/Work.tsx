"use client";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const Work = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const projects = [
    {
      title: "Social Media OSINT Application",
      description:
        "An advanced OSINT platform designed for social media intelligence. It includes real-time analytics, geolocation tracking, sentiment clustering, and interactive visual dashboards. The system is built with a modern full-stack architecture, integrating secure authentication through Keycloak and delivering highly intuitive data visualizations.",
      tech: [
        "React.js",
        "TypeScript",
        "Keycloak",
        "D3.js",
        "Apex Charts",
        "Redux Toolkit",
        "Tailwind CSS",
        "MUI",
      ],
      primary_features: [
        "Location intelligence, geolocation tracking, sentiment clustering, analytical dashboards",
      ],
      images: [
        "/media/analytics2.png",
        "/media/analytics3.png",
        "/media/location-intelligence.png",
        "/media/link-analysis.png",
      ],
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management platform featuring real-time updates powered by WebSockets. It includes drag-and-drop task organization, team collaboration tools, progress tracking, and a clean, responsive UI. The app integrates MQTT for real-time desktop notifications and Keycloak for secure role-based access control.",
      tech: [
        "React",
        "WebSockets",
        "Context API",
        "MQTT",
        "Keycloak",
        "Mantine",
      ],
      primary_features: [
        "Real-time desktop notifications using MQTT, role-based access control with nine user types",
      ],
      images: ["/media/task-management.png"],
      featured: false,
    },
    {
      title: "News Portal with CMS",
      description:
        "A dynamic news portal paired with a custom CMS for content creation and management. The website is built with Next.js for high performance and SEO, while the CMS is developed using React.js and styled with Tailwind CSS to provide an efficient and modern editorial workflow.",
      tech: ["Next.js", "React.js"],
      primary_features: [
        "Next.js-powered news website with a React.js + Tailwind CMS",
      ],
      images: ["/media/cms-news-website.png"],
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek, fully responsive portfolio website designed to showcase projects, skills, and experience. Built with Next.js and Tailwind CSS, it features elegant animations powered by Framer Motion, dark mode support, and optimized performance following SEO best practices.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      images: ["/media/portfolio-ss.png"],
      featured: false,
    },
  ];

  const swiperConfig = {
    modules: [Navigation],
    spaceBetween: 8,
    slidesPerView: 1,
    navigation: false,
    speed: 600,
    grabCursor: true,
  };

  return (
    <section
      id="work"
      className="min-h-[100vh] max-w-[1000px] flex flex-col justify-start mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-0"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--lightest-slate)] font-bold whitespace-nowrap">
          Some Things I&apos;ve Worked on
        </h2>
        <div className="flex-1 h-[1px] bg-[var(--lightest-navy)]"></div>
      </div>

      <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE / SLIDER */}
            <div className="relative group w-full md:max-w-[480px]">
              {project.images?.length > 1 ? (
                <>
                  <Swiper
                    {...swiperConfig}
                    ref={swiperRef}
                    className="w-full 
    md:max-w-[480px]
    h-[220px] sm:h-[260px] md:h-[300px] 
    rounded overflow-hidden 
    border border-[var(--primary-green)]/30"
                    // className="w-full h-[220px] sm:h-[260px] md:h-[300px] rounded overflow-hidden border border-[var(--primary-green)]/30"
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i} className="!flex">
                        <Image
                          src={img}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* Custom Navigation Arrows */}
                  <button
                    onClick={() => swiperRef.current?.swiper.slidePrev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-red-600 text-white rounded-full p-2.5 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm shadow-lg active:scale-95"
                    aria-label="Previous slide"
                  >
                    <FaChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.swiper.slideNext()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-red-600 text-white rounded-full p-2.5 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 backdrop-blur-sm shadow-lg active:scale-95"
                    aria-label="Next slide"
                  >
                    <FaChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </button>
                </>
              ) : (
                <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] relative rounded overflow-hidden border border-[var(--primary-green)]/30">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto">
              {project.featured && (
                <p className="text-[10px] sm:text-xs md:text-sm font-mono text-[var(--primary-green)]">
                  Featured Project
                </p>
              )}

              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--lightest-slate)] hover:text-[var(--primary-green)] transition-colors">
                {project.title}
              </h3>

              <div className="bg-[var(--light-navy)] p-4 sm:p-5 md:p-6 rounded border border-[var(--primary-green)]/10 shadow-lg">
                <p className="text-[var(--slate)] text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 sm:gap-3 mb-4 text-[10px] sm:text-xs md:text-sm font-mono text-[var(--light-slate)]">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex} className="px-2 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 sm:gap-4 md:gap-5">
                  {/* GITHUB */}
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary-green)] hover:text-[var(--lightest-slate)] transition-colors"
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
                      className="w-5 h-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a> */}

                  {/* LIVE LINK */}
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary-green)] hover:text-[var(--lightest-slate)] transition-colors"
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
                      className="w-5 h-5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a> */}
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
