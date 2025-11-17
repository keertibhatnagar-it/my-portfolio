import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:min-h-[calc(100vh-90px)] max-w-[1000px] flex items-start justify-start pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] px-4 sm:px-6 md:px-8 lg:px-0 pb-12 sm:pb-16 md:pb-20 flex-col mx-auto"
    >
      <p className="pl-1 pb-2 sm:pb-3 md:pb-4 font-mono text-xs sm:text-sm md:text-base text-[var(--primary-green)]">
        Hi, My name is
      </p>
      <h1 className="py-2 sm:py-3 md:py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-extrabold text-[var(--lightest-slate)] leading-tight">
        Keerti Bhatnagar
      </h1>
      <h1 className="py-2 sm:py-3 md:py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-extrabold text-[var(--slate)] leading-tight">
        I build things for the web.
      </h1>
      <p className="pt-3 sm:pt-4 md:pt-5 pb-6 sm:pb-8 md:pb-10 text-xs sm:text-sm md:text-base font-inter text-[var(--slate)] max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[83%] leading-relaxed">
        <span className=" text-[var(--primary-green)]">
          Bringing ideas to life with code!
        </span>{" "}
        As a frontend developer, I craft seamless, interactive, and
        high-performance digital experiences using React.js, Next.js, and modern
        web technologies. Passionate about security, scalability, and
        accessibility, I strive to build products that are not just functional
        but also delightful.
      </p>

      <Button text="Work with me!" />
    </section>
  );
};

export default Banner;
