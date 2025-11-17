"use client";

import { useEffect, useState } from "react";

const Button = ({ text }: { text: string }) => {
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

  const shineColor = isDark ? "via-white/30" : "via-green-400/40";

  // Common classes for both a and button
  const buttonClasses =
    "cursor-pointer relative text-[var(--primary-green)] text-xs sm:text-sm font-mono px-4 sm:px-5 md:px-6 py-2 sm:py-2.2 border-1 border-[var(--primary-green)] rounded-sm overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-xl transition-shadow";

  return text === "Resume" ? (
    <a
      href="/media/KeertiBhatnagar_Software_developer_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      {text}
      <span className="absolute inset-0 overflow-hidden">
        {/* Shine effect */}
        <span
          className={`absolute w-[150%] h-[150%] top-0 left-[-75%] bg-gradient-to-r from-transparent ${shineColor} to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-in-out`}
        ></span>
      </span>
    </a>
  ) : text === "Work with me!" ? (
    <a href="mailto:keertibhatnagar.work@gmail.com?subject=Collaboration%20Inquiry&body=Hi%20Keerti,%0D%0A%0D%0AI%E2%80%99m%20interested%20in%20discussing%20a%20potential%20collaboration.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0D%0A%0D%0AThanks!">
      <button className={buttonClasses}>
        {text}
        <span className="absolute inset-0 overflow-hidden">
          <span
            className={`absolute w-[150%] h-[150%] top-0 left-[-75%] bg-gradient-to-r from-transparent ${shineColor} to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-in-out`}
          ></span>
        </span>
      </button>
    </a>
  ) : (
    <button className={buttonClasses}>
      {text}
      <span className="absolute inset-0 overflow-hidden">
        {/* Shine effect */}
        <span
          className={`absolute w-[150%] h-[150%] top-0 left-[-75%] bg-gradient-to-r from-transparent ${shineColor} to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-in-out`}
        ></span>
      </span>
    </button>
  );
};

export default Button;
