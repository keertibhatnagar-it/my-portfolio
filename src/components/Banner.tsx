import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-90px)] max-w-[1000px] flex items-start justify-start pt-16 sm:pt-20 md:pt-[100px] px-4 sm:px-6 md:px-0 flex-col mx-auto">
      <p className="pl-1 pb-2 sm:pb-3 font-mono text-sm sm:text-base text-[var(--primary-green)]">
        Hi, My name is
      </p>
      <h1 className="py-2 sm:py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold text-[var(--lightest-slate)] leading-tight">
        Keerti Bhatnagar
      </h1>
      <h1 className="py-2 sm:py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold text-[var(--slate)] leading-tight">
        I build things for the web.
      </h1>
      <p className="pt-3 pb-6 sm:pb-8 text-sm sm:text-base font-inter text-[var(--slate)] max-w-full sm:max-w-[90%] md:max-w-[83%] leading-relaxed"><span className=" text-[var(--primary-green)]">Bringing ideas to life with code!</span> As a frontend developer, I craft seamless, interactive, and high-performance digital experiences using React.js, Next.js, and modern web technologies. Passionate about security, scalability, and accessibility, I strive to build products that are not just functional but also delightful.</p>

     <Button text="Work with me!"/>
    </section>
  );
};

export default Banner;
