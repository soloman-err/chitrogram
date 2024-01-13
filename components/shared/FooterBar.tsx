import { Bell, Home, PlusCircle, Search } from 'lucide-react';
import Link from 'next/link';
import UserProfileButton from '../others/auth-components/UserProfileButton';

const FooterBar = () => {
  return (
    <div className="bg-light/90 backdrop-blur-3xl py-3 px-4 rounded-xl md:hidden">
      <div className="flex justify-around">
        <Link href={'/'}>
          <Home size={28} />
        </Link>

        <Search size={28} />

        <Link href={'/create'}>
          <PlusCircle size={28} />
        </Link>

        <Link href={'/notification'}>
          <Bell size={28} />
        </Link>

        <Link href={'/profile'}>
          <UserProfileButton />
        </Link>
      </div>
    </div>
  );
};

export default FooterBar;
