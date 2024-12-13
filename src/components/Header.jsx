import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (  
    <div 
      className={`bg-green-400 px-4 py-2 flex flex-row items-center justify-around sticky top-0 z-10 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavLink to={"/"} className="text-cyan-950">
        Home
      </NavLink>
      <NavLink to={"/register"} className="text-cyan-950">
        Register
      </NavLink>
      <NavLink to={"/login"} className="text-cyan-950">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
