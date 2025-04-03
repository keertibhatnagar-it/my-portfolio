"use client";

import React, { useEffect, useRef } from "react";

const CursorShadow = ({ theme }: { theme: string }) => {
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme !== "dark") return; // Disable shadow if not dark mode

    const handleMouseMove = (e: MouseEvent) => {
      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [theme]);

  if (theme !== "dark") return null; // No shadow in light mode

  return (
    <div
      ref={shadowRef}
      className="fixed w-28 h-28 rounded-full bg-green-500 opacity-30 blur-3xl pointer-events-none"
    />
  );
};

export default CursorShadow;
