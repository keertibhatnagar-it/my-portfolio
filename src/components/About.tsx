import React from "react";

const About = () => {
  return (
    <section className="h-[100vh] max-w-[1000px]  flex justify-start mx-auto gap-[90px]">
      <div className="flex items-start justify-start  flex-col w-[65%]">
        <h2 className="text-2xl text-[var(--lightest-slate)] font-bold ">
          About Me
        </h2>
        <div className="pt-[25px] text-[var(--slate)] flex justify-start gap-3 flex-col leading-relaxed ">
          <p>
            Hello! I’m Keerti, a frontend developer who loves bringing ideas to
            life on the web. My journey into web development started with
            curiosity—experimenting with{" "}
            <span className="text-[var(--primary-green)]">HTML & CSS</span>,
            tweaking small UI components, and eventually diving into the world
            of
            {" "}<span className="text-[var(--primary-green)]">
              React and Next.js
            </span>
            . Since then, I’ve built{" "}
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
            Fast forward to today, I’ve worked with startups and tech-driven
            companies, engineering{" "}
            <span className="text-[var(--primary-green)]">
              seamless digital experiences
            </span>{" "}
            and solving complex frontend challenges. From implementing
            {" "}<span className="text-[var(--primary-green)]">
              Keycloak authentication
            </span>{" "}
            to crafting{" "}
            <span className="text-[var(--primary-green)]">
              dynamic CMS solutions
            </span>
            , I focus on building
            {" "}<span className="text-[var(--primary-green)]">
              secure, scalable, and user-friendly products
            </span>
            .
          </p>
          <p>
            Currently, I’m pushing boundaries with
            {" "}<span className="text-[var(--primary-green)]">
              modern frontend technologies
            </span>
            , ensuring{" "}
            <span className="text-[var(--primary-green)]">accessibility</span>,
            and improving user engagement through thoughtful{" "}
            <span className="text-[var(--primary-green)]">UI/UX design</span>.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid grid-cols-[repeat(2,minmax(120px,280px))] gap-x-1 gap-y-2 pt-2 text-[12px] font-mono">
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
                className="relative pl-5 before:content-['▶'] before:text-[var(--primary-green)] before:absolute before:left-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-[32%] pt-[65px]">
        <div className="w-full h-[320px] border border-[var-(--primary-green)] flex justify-center items-center">
          Photo
        </div>
      </div>
    </section>
  );
};

export default About;
