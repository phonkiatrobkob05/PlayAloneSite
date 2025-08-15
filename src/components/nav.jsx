import { useState } from 'react';
import { Link } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black-figma p-4 fixed top-0 w-full z-50">
      <div className="container flex justify-between items-center font-bold text-2xl">
        <div className="text-white text-lg">
          <img
            src="/playalonelogo.png"
            alt="Logo"
            className="w-[120px] md:w-[250px]"
          />
        </div>
        <ul className="hidden md:flex space-x-6 text-white-figma">
          <li className="text-xl cursor-pointer">
            <Link to="Home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="text-xl cursor-pointer">
            <Link to="TaKhon" smooth={true} duration={500}>TaKhon</Link>
          </li>
          <li className="text-xl cursor-pointer">
            <Link to="Contact" smooth={true} duration={500}>itch.io</Link>
          </li>
        </ul>
        <div className="md:hidden text-white-figma">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 mt-4 text-white-figma">
          <li className="text-xl cursor-pointer">
            <Link to="Home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
          </li>
          <li className="text-xl cursor-pointer">
            <Link to="TaKhon" smooth={true} duration={500} onClick={closeMenu}>TaKhon</Link>
          </li>
          <li className="text-xl cursor-pointer">
            <Link to="Contact" smooth={true} duration={500} onClick={closeMenu}>itch.io</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
