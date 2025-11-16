const Button = ({ text }: { text: string }) => {
  const theme = "dark";
  const shineColor = theme === "dark" ? "via-white/30" : "via-gray-200";

  // Common classes for both a and button
  const buttonClasses =
    "cursor-pointer relative text-[var(--primary-green)] text-xs font-mono px-6 py-3 border-1 border-[var(--primary-green)] rounded-sm overflow-hidden transition-all duration-300 group shadow-2xl shadow-green-500";

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
