'use client';
import { Children } from '@/interfaces/shared.interface';
import axiosSecure from '@/lib/axios.lib';
import { FullUser, Profile, User } from '@/types/user.type';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export type AuthContextType = {
  loginUser: (email: string, password: string) => void;
  registerUser: (email: string, password: string) => void;
  updateUser: (user: Profile) => void;
  user: User | null;
  authLoading: boolean;
  logOutUser: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<Children> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        if (Cookies.get('__token__' || Cookies.get('__u_'))) {
          const localUser: User = JSON.parse(Cookies.get('__u_') || '') || null;
          if (localUser?.email && localUser?._id) {
            setUser(localUser);
            setAuthLoading(false);
          } else {
            toast.error('Invalid User');
            throw new Error('Invalid User');
          }
        } else {
          throw new Error('Login First.');
        }
      } catch (err) {
        setUser(null);
        setAuthLoading(false);
      }
    }

    return () => {
      setAuthLoading(false);
      setUser(null);
    };
  }, []);

  const loginUser = async (email: string, password: string) => {
    if ((!email && !password) || !email || !password) {
      throw new Error('Email and Password Needed');
    }
    setAuthLoading(true);
    const payload = {
      email,
      password,
    };
    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, payload)
      .then((res) => res.data)
      .then((res: FullUser) => {
        Cookies.set('__token__', res.token, {
          secure: true,
          path: '/',
          expires: 1,
        });
        Cookies.set('__u_', JSON.stringify(res.user), {
          secure: true,
          path: '/',
          expires: 1,
        });
        setUser(res?.user);
        setAuthLoading(false);
      })
      .catch((err) => {
        toast.error('Login failed!');
        setAuthLoading(false);
      });
  };

  const registerUser = async (email: string, password: string) => {
    if (!email && !password) {
      throw new Error('All Fields Needed');
    }
    setAuthLoading(true);

    const payload = {
      email,
      password,
    };

    await axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/register`, payload)
      .then((res) => res.data)
      .then((res: FullUser) => {
        setUser(res?.user);
        setAuthLoading(false);

        Cookies.set('__token__', res.token, {
          secure: true,
          path: '/',
          expires: 1,
        });
        Cookies.set('__u_', JSON.stringify(res.user), {
          secure: true,
          path: '/',
          expires: 1,
        });
      })
      .catch((err) => {
        toast.error('Registration failed!');
        setAuthLoading(false);
      });
  };

  // Updating user profile:
  const updateUser = async (payload: Profile) => {
    try {
      if (!user || !user._id) {
        throw new Error('Invalid user data provided for update');
      }
      setAuthLoading(true);
      const res = await axiosSecure.put(`/users/${user?._id}`, payload);

      if (res.status === 200) {
        toast.success('Profile updated successfully');
        const updatedUser: User = {
          ...user,
          profile: payload,
        };
        Cookies.set('__u_', JSON.stringify(updatedUser), {
          secure: true,
          path: '/',
          expires: 1,
        });
        setUser(updatedUser);
        setAuthLoading(false);
      } else {
        throw new Error(res.data?.msg || 'User Update failed!');
      }
    } catch (error) {
      toast.error('User Update failed!');
      console.error('User Update failed!', error);
      setAuthLoading(false);
    }
    router.replace('/profile');
  };

  const logOutUser = () => {
    setAuthLoading(true);
    Cookies.remove('__token__');
    Cookies.remove('__u_');
    setUser(null);
    setAuthLoading(false);
    toast.error('Logged Out Successfully');
    router.replace('/');
  };

  const getResetLink = () => {};

  const auth = {
    user,
    loginUser,
    logOutUser,
    authLoading,
    registerUser,
    updateUser,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
