"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Digitem Technologies",
    title: "Software Developer",
    duration: "May 2023 – Present",
    bullets: [
      "Developed React.js and Next.js applications, optimized for performance, responsiveness, SEO, and social media sharing.",
      "Implemented user authentication with Keycloak including 2FA, SMS OTP, RBAC, and custom themes.",
      "Integrated WebSockets for live data streaming and real-time notifications.",
      "Worked with RESTful and GraphQL APIs to ensure scalable and high-performance communication between frontend and backend.",
      "Researched and addressed technical challenges to streamline workflows and encourage tech adoption within the team.",
    ],
  },
  {
    company: "Ackrolix Innovations",
    title: "Frontend Developer",
    duration: "Dec 2021 – Apr 2023",
    bullets: [
      "Built high-performance, responsive UIs using React.js and Next.js for diverse client projects.",
      "Created engaging animations with Framer Motion and CSS to enhance UI/UX.",
      "Implemented SEO strategies using meta tags, structured data, and image alt attributes to boost search visibility.",
    ],
  },
  {
    company: "RC Diamonds",
    title: "Web Development Intern",
    duration: "Aug 2021 – Oct 2021",
    bullets: [
      "Developed responsive websites using HTML, CSS, and JavaScript, ensuring cross-browser compatibility.",
      "Customized WordPress sites with themes and plugins to improve user experience.",
      "Collaborated on debugging and troubleshooting to improve site performance and project delivery.",
    ],
  },
];

export default function ExperienceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="h-[50vh] max-w-[1000px] flex justify-start mx-auto gap-[90px]">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl text-[var(--lightest-slate)] font-bold mb-4">
          Where I've Worked
        </h2>

        <div className="grid grid-cols-[1fr_3fr] text-[var(--lightest-slate)] gap-6 pt-[25px]">
          {/* Left Tabs */}
          <div className="flex flex-col border-l-2 border-white/10 relative self-start">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-4 transition-colors font-mono text-xs py-5 duration-300 flex items-center ${
                  index === activeIndex
                    ? "bg-white/5 border-l-2"
                    : "hover:text-white"
                }`}
                style={{
                  color:
                    index === activeIndex
                      ? "var(--primary-green)"
                      : "var(--slate)",
                  borderLeftColor:
                    index === activeIndex
                      ? "var(--primary-green)"
                      : "transparent",
                }}
              >
                {exp.company}
              </button>
            ))}
            <div
              className="absolute left-0 w-1 transition-all duration-300"
              style={{
                backgroundColor: "var(--primary-green)",
                height: `${100 / experiences.length}%`,
                top: `${activeIndex * (100 / experiences.length)}%`,
              }}
            />
          </div>

          {/* Right Content */}
          <div className="px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-[17px] font-semibold pb-1">
                  {experiences[activeIndex].title}{" "}
                  <span style={{ color: "var(--primary-green)" }} className="text-[18px]">
                    @ {experiences[activeIndex].company}
                  </span>
                </h3>
                <p
                  className="text-[12px] mb-4 font-mono pb-1 leading-relaxed"
                  style={{ color: "var(--slate)" }}
                >
                  {experiences[activeIndex].duration}
                </p>
                <ul className="space-y-2 list-none font-inter text-[15px] text-[var(--slate)] leading-relaxed">
                  {experiences[activeIndex].bullets.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 relative pl-5 before:content-['▶'] before:text-[var(--primary-green)] before:text-[12px] before:font-mono  before:absolute before:left-0"
                    >
                      {/* <span className='text-[var(--primary-green)]'>▹</span> */}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
