'use client';
import { UserCircle } from 'lucide-react';
import { useState } from 'react';

const UserProfileButton = () => {
  const [isUserAuthOpen, setUserAuthOpen] = useState(false);

  const handleUserAuth = () => {
    setUserAuthOpen(!isUserAuthOpen);
  };

  return (
    <div>
      <UserCircle size={28} onClick={handleUserAuth} />
    </div>
  );
};

export default UserProfileButton;
