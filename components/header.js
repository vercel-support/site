import Link from "next/link";
import React, { useState } from "react";
import HeaderLinks from "../data/header_links.json";
import MenuIcon from "../public/assets/images/icon-menu.svg";
import CloseIcon from "../public/assets/images/icon-close.svg";
import { trackGoal } from "fathom-client";

const links = HeaderLinks;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const trackMobileMenuGoal = () => trackGoal("RYQBIEQE", 0);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) trackMobileMenuGoal();
  };

  return (
    <header className="w-full">
      <nav className="w-full px-4 py-4 pb-4 bg-white border-b sm:px-8">
        <div className="flex items-center justify-between w-full">
          <h1>
            <Link href="/">
              <a className="py-2">
                <img
                  className="w-12 h-12 rounded-full shadow shadow-outline-gray"
                  src="/favicon-192x192.png"
                />
              </a>
            </Link>
          </h1>

          <div className="block md:hidden">
            <button
              className="flex items-center focus:outline-none"
              onClick={handleMenuClick}
            >
              {!isOpen ? (
                <MenuIcon className="w-8 h-8" />
              ) : (
                <CloseIcon className="w-8 h-8" />
              )}
            </button>
          </div>

          <ul className="hidden md:flex">
            {links.map((link) => (
              <li key={link.title}>
                <Link href={link.to}>
                  <a className="block ml-8 text-sm font-semibold tracking-wide text-gray-700 md:inline-block md:mt-0 transform transition-all ease-in-out duration-75 hover:text-gray-900">
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile nav Links */}
        <div className={`w-full my-16 md:hidden ${!isOpen ? "hidden" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.title}>
                <Link href={link.to}>
                  <a className="block py-3 font-semibold text-gray-700 hover:text-gray-900">
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
