import { Bell, Home, PlusCircle, Search, UserCircle } from 'lucide-react';
import Link from 'next/link';

const FooterBar = () => {
  return (
    <div className="bg-light/90 backdrop-blur-3xl py-3 px-4 rounded-xl md:hidden">
      <div className="flex justify-around">
        <Link href={'/'}>
          <Home size={28} />
        </Link>
        <Search size={28} />
        <PlusCircle size={28} />

        <Link href={'/notification'}>
          <Bell size={28} />
        </Link>

        <Link href={'/profile'}>
          <UserCircle size={28} />
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
