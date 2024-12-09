import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  const pubicLinks = [   
    { label: "SignUp", href: "/SignUp" },
    { label: "Login", href: "/Login" },
  ];

  return (
    <nav className="p-4 shadow-lg text-[black] ">
      <div className="container mx-auto flex justify-between lg:items-start xl:items-center">
        <div className="text-2xl font-semibold">
          <a href="/" className="font-sourGummy font-bold ">
            TaskBoard
          </a>
        </div>

        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes className="text-black text-3xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </div>

        <div className="hidden lg:flex lg:items-center space-x-6">
          {pubicLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-black hover:text-gray-300 transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`lg:hidden flex flex-col items-center space-y-4 mt-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-black hover:text-gray-300 transition duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
