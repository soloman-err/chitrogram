import { Bell, CircleUserRound, PlusCircle, Search } from 'lucide-react';

const Header = () => {
  return (
    <section className="container flex gap-10 justify-between py-2 px-4 my-4 bg-dark/5 rounded-full">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <span className="text-3xl font-semibold -rotate-45">&copy;</span>
        <h1 className="font-bold text-lg">Chitrogram</h1>
      </div>

      {/* Search Bar */}
      <div className="w-full flex items-center justify-between gap-2 bg-light p-2 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
        <Search />
      </div>

      {/* User Functionalities */}
      <div className="flex items-center gap-2">
        <PlusCircle />
        <Bell />
        <CircleUserRound />
      </div>
    </section>
  );
};

export default Header;
