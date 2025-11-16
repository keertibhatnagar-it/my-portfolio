"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const About = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen max-w-[1000px] flex flex-col md:flex-row justify-start items-start mx-auto gap-8 md:gap-12 lg:gap-[90px] px-4 sm:px-6 md:px-0 py-12 sm:py-16 md:py-20"
    >
      <div className="flex items-start justify-start flex-col w-full md:w-[65%]">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-[var(--lightest-slate)] font-bold">
          About Me
        </h2>
        <div className="pt-4 sm:pt-6 md:pt-[25px] text-[var(--slate)] flex justify-start gap-3 sm:gap-4 flex-col leading-relaxed text-sm sm:text-base">
          <p>
            Hello! I&apos;m Keerti, a frontend developer who loves bringing
            ideas to life on the web. My journey into web development started
            with curiosity—experimenting with{" "}
            <span className="text-[var(--primary-green)]">HTML & CSS</span>,
            tweaking small UI components, and eventually diving into the world
            of{" "}
            <span className="text-[var(--primary-green)]">
              React and Next.js
            </span>
            . Since then, I&apos;ve built{" "}
            <span className="text-[var(--primary-green)]">
              high-performance, interactive applications
            </span>
            , optimized{" "}
            <span className="text-[var(--primary-green)]">
              SEO for better visibility
            </span>
            , and integrated real-time features using{" "}
            <span className="text-[var(--primary-green)]">WebSockets</span>.
          </p>
          <p>
            Fast forward to today, I&apos;ve worked with startups and
            tech-driven companies, engineering{" "}
            <span className="text-[var(--primary-green)]">
              seamless digital experiences
            </span>{" "}
            and solving complex frontend challenges. From implementing{" "}
            <span className="text-[var(--primary-green)]">
              Keycloak authentication
            </span>{" "}
            to crafting{" "}
            <span className="text-[var(--primary-green)]">
              dynamic CMS solutions
            </span>
            , I focus on building{" "}
            <span className="text-[var(--primary-green)]">
              secure, scalable, and user-friendly products
            </span>
            .
          </p>
          <p>
            Currently, I&apos;m pushing boundaries with{" "}
            <span className="text-[var(--primary-green)]">
              modern frontend technologies
            </span>
            , ensuring{" "}
            <span className="text-[var(--primary-green)]">accessibility</span>,
            and improving user engagement through thoughtful{" "}
            <span className="text-[var(--primary-green)]">UI/UX design</span>.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-2 sm:gap-y-3 pt-3 sm:pt-4 text-[11px] sm:text-[12px] md:text-[13px] font-mono">
            {[
              "Javascript (ES6+)",
              "React.js",
              "Next.js",
              "Node.js",
              "Typescript",
              "Keycloak",
              "WebSockets",
              "RESTful & GraphQL APIs",
            ].map((item) => (
              <li
                key={item}
                className="relative pl-5 sm:pl-6 before:content-['▶'] before:text-[var(--primary-green)] before:absolute before:left-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:w-[32%] pt-0 md:pt-[65px] flex justify-center md:justify-start">
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-full h-[250px] sm:h-[280px] md:h-[320px] border border-[var(--primary-green)] bg-[var(--light-navy)] flex justify-center items-center overflow-hidden rounded-md">
          {isDark ? (
            <Image
              src="/media/keerti_profile_image_dark_theme.jpeg"
              alt="Keerti Profile Image"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-md"
            />
          ) : (
            <Image
              src="/media/keerti_profile_image_light_theme.jpg"
              alt="Keerti Profile Image"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-md"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
