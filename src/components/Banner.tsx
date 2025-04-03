import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="h-[calc(100vh-90px)] max-w-[1000px] flex items-start justify-start pt-[100px] flex-col  mx-auto">
      <p className="pl-1 pb-3 font-mono text-base text-[var(--primary-green)]">
        Hi, My name is
      </p>
      <h1 className="py-3 text-6xl font-poppins font-extrabold text-[var(--lightest-slate)] ">
        Keerti Bhatnagar
      </h1>
      <h1 className="py-3 text-6xl font-poppins font-extrabold text-[var(--slate)] ">
        I build things for the web.
      </h1>
      <p className="pt-3 pb-8 text-base font-inter text-[var(--slate)] max-w-[83%] "><span className=" text-[var(--primary-green)]">Bringing ideas to life with code!</span> As a frontend developer, I craft seamless, interactive, and high-performance digital experiences using React.js, Next.js, and modern web technologies. Passionate about security, scalability, and accessibility, I strive to build products that are not just functional but also delightful.</p>

     <Button text="Work with me!"/>
    </section>
  );
};

export default Banner;
