import { Bell, Home, PlusCircle, Search, UserCircle } from 'lucide-react';

const FooterBar = () => {
  return (
    <div className="sticky inset-0 bottom-0 left-0 bg-light/90 backdrop-blur-3xl py-3 px-4">
      <div className="flex justify-around">
        <Home size={28} />
        <Search size={28} />
        <PlusCircle size={28} />
        <Bell size={28} />
        <UserCircle size={28} />
      </div>
    </div>
  );
};

export default FooterBar;
