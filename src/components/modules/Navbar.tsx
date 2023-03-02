import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },

  ];


  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800 md:text-2xl">
            Mombasa Digital Solutions
          </Link>
          <button
            className="border border-gray-800 px-3 py-2 rounded text-gray-800 opacity-50 hover:opacity-75 sm:hidden"
            type="button"
            onClick={() => setToggleNav(!toggleNav)} 
          
            >
           {!toggleNav? <FaBars />: <FaWindowClose />}
          </button>
        </div>
        <ul className="hidden sm:flex flex-col sm:flex-row items-center">
          {
            navLinks.map(({ title, href }) =>
              <Link
                key={title} to={href}
                className="w-full sm:w-fit py-2 px-4 text-gray-800 font-medium hover:text-gray-600 transition duration-300"
              >
                {title}
              </Link>
            )}

        </ul>

        <ul className="flex flex-col sm:hidden items-center justify-center">
          {
          toggleNav ?  navLinks.map(({ title, href }) =>
              <Link
                key={title} to={href}
                className="w-full sm:w-fit py-2 px-4 text-gray-800 font-medium hover:text-gray-600 transition duration-300"
              >
                {title}
              </Link>
            ):""
            }

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;