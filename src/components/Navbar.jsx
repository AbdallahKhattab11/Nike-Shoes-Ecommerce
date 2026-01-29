import { useState, useEffect } from "react";
import { FaHeart, FaCartShopping, FaBars, FaXmark } from "react-icons/fa6"; // Updated import to include Xmark
import { navLinks } from "../constants";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold italic uppercase text-primary font-poppins"
        >
          tigrun
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-primary hover:text-accent-purple transition-colors capitalize text-base font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-primary hover:text-accent-purple transition-transform hover:scale-110 cursor-pointer">
            <FaHeart size={20} />
          </button>

          <button
            onClick={toggleCart}
            className="relative text-primary hover:text-accent-purple transition-transform hover:scale-110 cursor-pointer"
          >
            <FaCartShopping size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent-pink text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`absolute top-full right-0 w-64 bg-white/10 backdrop-blur-xl p-6 rounded-bl-2xl flex flex-col gap-4 transform transition-transform duration-300 md:hidden border-l border-b border-white/20 ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-primary hover:text-accent-purple block text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
