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
  const [query, setQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('toggled');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log('searched');
  };

  return (
    <section className="container hidden md:flex items-center md:gap-10 justify-between py-2 px-2 md:px-4 my-2 md:my-4 bg-dark/5 rounded-full">
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
          value={query}
          onChange={handleSearchChange}
          placeholder="Search"
          className="bg-transparent outline-none text-sm md:text-base w-full"
        />
        <Search />
      </div>

      {/* User Functionalities */}
      <div className="hidden md:flex items-center gap-2">
        {/* <Moon /> */}

        <Link href={'/create'}>
          <PlusCircle />
        </Link>

        <Link href={'/notifications'}>
          <Bell />
        </Link>
        <Link href={'/profile'}>
          <CircleUserRound />
        </Link>
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </section>
  );
};

export default Header;
