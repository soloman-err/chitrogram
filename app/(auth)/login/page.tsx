'use client';
import Google from '@/assets/google.png';
import Image from 'next/image';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const authContext = useContext(AuthContext);
  //   const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // try {
    //   await authContext.loginUser(email, password);
    //   router.push('/dashboard'); // Redirect to dashboard or another appropriate page
    // } catch (error) {
    //   // Handle errors (e.g., display an error message)
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-sm w-[90%] pt-10 rounded-md mt-10">
        {/* App Info */}
        <div className="flex flex-col justify-center">
          <div className="relative">
            <h1 className="absolute -top-10 left-7 text-6xl -rotate-45 font-semibold">
              &copy;
            </h1>
          </div>
          <h4 className="text-xl mt-5 font-semibold">Chitrogram</h4>
        </div>

        {/* Google Sign In */}
        <div className="mt-10 cursor-pointer">
          <Image src={Google} alt="google" width={28} height={28} />
        </div>

        {/* OR */}
        <div className="flex items-center gap-4 w-[80%] py-5">
          <div className="w-full h-[1px] bg-dark/10"></div>
          <span className="text-dark/50">or</span>
          <div className="w-full h-[1px] bg-dark/10"></div>
        </div>

        {/* Login Form */}
        <form
          className="bg-white w-full rounded px-8 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-dark hover:bg-dark/80 text-white font-semibold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline md:text-lg"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
