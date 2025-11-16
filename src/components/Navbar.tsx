"use client";

import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Get initial theme from HTML element or cookie
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Update HTML class immediately for instant feedback
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);

    // Update cookie via API
    try {
      await fetch("/api/theme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme: newTheme }),
      });
    } catch (error) {
      console.error("Failed to update theme:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6 sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-sm">
      <div className="flex justify-center items-center">
        {/* Hexagon Shape */}
        <div className="w-10 h-10 relative cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {/* Hexagon Background */}
          <div className="absolute inset-0 bg-[var(--primary-green)] clip-hexagon"></div>
          
          {/* Letter K */}
          <div className="absolute inset-0 flex justify-center items-center text-[var(--dark-navy)] text-sm font-bold">
            K
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-10">
        <ul className="flex gap-10 items-center font-mono text-sm">
          {["About", "Experience", "Work", "Contact"].map((item, index) => (
            <li
              key={index}
              onClick={() => handleNavClick(item)}
              className='relative cursor-pointer after:content-[""] hover:text-[var(--primary-green)] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-green)] after:transition-all after:duration-300 hover:after:w-full'
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-sm border border-[var(--primary-green)]/30 hover:border-[var(--primary-green)] transition-colors group"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
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
                className="text-[var(--primary-green)]"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
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
                className="text-[var(--primary-green)]"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
            <span className="absolute inset-0 overflow-hidden">
              <span className="absolute w-[150%] h-[150%] top-0 left-[-75%] bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 ease-in-out"></span>
            </span>
          </button>
          <Button text="Resume" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
