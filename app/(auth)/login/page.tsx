'use client';
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
    <div className="flex flex-col justify-center items-center h-screen">
      {/* App Info */}
      <div className="flex flex-col justify-center">
        <div className="relative">
          <h1 className="absolute -top-10 left-7 text-6xl -rotate-45 font-semibold">
            &copy;
          </h1>
        </div>
        <h4 className="text-xl mt-5 font-semibold">Chitrogram</h4>
      </div>

      {/* Login Form */}
      <form
        className="bg-white w-full rounded px-8 mt-10 pb-8 mb-4"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
