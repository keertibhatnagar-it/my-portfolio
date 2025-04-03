import Button from "./Button";



const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-6  sticky top-0">
    <div className="flex justify-center items-center">
      {/* Hexagon Shape */}
      <div className="w-10 h-10 relative">
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
              className='relative cursor-pointer after:content-[""] hover:text-[var(--primary-green)] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--primary-green)] after:transition-all after:duration-300 hover:after:w-full'
            >
              {item}
            </li>
          ))}
        </ul>
        <div>
          <Button text="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
