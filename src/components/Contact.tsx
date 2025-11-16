import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[100vh] max-w-[1000px] flex flex-col justify-center items-center mx-auto py-20"
    >
      <div className="flex flex-col items-center gap-4 max-w-[600px]">
        <p className="text-sm font-mono text-[var(--primary-green)]">
          What&apos;s Next?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--lightest-slate)] text-center">
          Get In Touch
        </h2>
        <p className="text-center text-[var(--slate)] leading-relaxed pt-4">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="pt-8">
          <a href="mailto:keertibhatnagar.work@gmail.com">
            <Button text="Say Hello" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t border-[var(--lightest-navy)] w-full">
        <div className="flex gap-4 sm:gap-6">
          <a
            href="https://github.com/keertibhatnagar-it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--slate)] hover:text-[var(--primary-green)] transition-colors"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-6 sm:h-6"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/keerti-bhatnagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--slate)] hover:text-[var(--primary-green)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-6 sm:h-6"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--slate)] hover:text-[var(--primary-green)] transition-colors"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-6 sm:h-6"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a> */}
          <a
            href="mailto:keertibhatnagar.work@gmail.com"
            className="text-[var(--slate)] hover:text-[var(--primary-green)] transition-colors"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-6 sm:h-6"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <p className="text-[10px] sm:text-xs font-mono text-[var(--slate)]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
