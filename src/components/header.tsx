import Link from "next/link";
import { useRef, useState } from "react";
import HeaderLinks from "@lib/header_links.json";
import { X, Menu } from "@images/heroicons/solid";
import { trackGoal } from "fathom-client";
import Img from "react-optimized-image";
import ProfileImg from "../../public/favicon-60x60.png";
import { Transition } from "@tailwindui/react";
import Card from "@components/card";
import { useClickAway } from "use-click-away";

const links = HeaderLinks;
const trackMobileMenuGoal = () => trackGoal("RYQBIEQE", 0);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) trackMobileMenuGoal();
  };

  const mobileMenu = useRef(null);

  useClickAway(mobileMenu, () => setIsOpen(false));

  return (
    <header className="w-full">
      <nav className="w-full px-4 py-4 pb-4 bg-white border-b sm:px-8">
        <div className="flex items-center justify-between w-full">
          <h1>
            <Link href="/">
              <a className="py-2">
                <Img
                  src={ProfileImg}
                  alt="Brandon in a black kimono"
                  className="w-12 h-12 rounded-full shadow shadow-outline-gray"
                />
              </a>
            </Link>
          </h1>

          <div className="relative block md:hidden">
            <button
              className="flex items-center focus:outline-none"
              onClick={handleMenuClick}
            >
              <span className="sr-only">Toggle menu</span>
              {!isOpen ? (
                <Menu className="w-8 h-8" />
              ) : (
                <X className="w-8 h-8" />
              )}
            </button>

            {/* Mobile nav Links */}
            <Transition
              show={isOpen}
              enter="transition duration-150 transform origin-top-right"
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="transition duration-75 transform origin-top-right"
              leaveTo="opacity-0 scale-75"
            >
              <Card
                style={{ minWidth: "14rem" }}
                className="absolute right-0 p-4 text-pink-100 bg-pink-500"
              >
                <ul ref={mobileMenu}>
                  {links.map(link => (
                    <li key={link.title}>
                      <Link href={link.to}>
                        <a className="block py-3 font-medium">{link.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </Transition>
          </div>

          <ul className="hidden md:flex">
            {links.map(link => (
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
      </nav>
    </header>
  );
}
