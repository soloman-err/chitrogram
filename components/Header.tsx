'use client';
import {
  Bell,
  CircleUserRound,
  Menu,
  PlusCircle,
  Search,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('toggled');
  };

  return (
    <section className="container flex items-center md:gap-10 justify-between py-2 px-4 my-2 md:my-4 bg-dark/5 rounded-full">
      {/* Brand Logo */}
      <div>
        <Link href={'/'} className="flex items-center gap-2">
          <span className="text-3xl font-semibold -rotate-45">&copy;</span>
          <h1 className="hidden md:flex font-bold md:text-lg">Chitrogram</h1>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="md:w-full flex items-center justify-between gap-2 bg-light py-1 md:p-2 px-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm md:text-base"
        />
        <Search />
      </div>

      <div className="md:hidden">
        <PlusCircle />
      </div>

      {/* User Functionalities */}
      <div className="hidden md:flex items-center gap-2">
        <PlusCircle />
        <Bell />
        <CircleUserRound />
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </section>
  );
};

export default Header;
