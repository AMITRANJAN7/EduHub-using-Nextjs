'use client'

// app/Login/page.jsx
import Link from 'next/link';
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/app/context/AuthContext';

const signup = () => {
  const [remLogIn,setRemLogIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = UserAuth();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div>
    <div className="flex justify-center mb-2 ">
    <h1 className="text-2xl text-red-500 font-semibold">Welcome to EduHub !</h1></div>
    <div className="w-full mb-6 flex justify-center items-center">
      <div className="bg-fuchsia-200 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <div className='flex justify-between items-center text-black'>
                  <p>
                    <input type="checkbox" className='mr-2 mt-2'checked={remLogIn} onChange={(e)=>setRemLogIn(!remLogIn)} />
                    Remember Me
                  </p>
                  <p className='hover:text-blue-800 cursor-pointer'>Need Help?</p>
              </div>
        <div className='text-medium gap-x-4 '>
        <p className=" m-4">
          Already a member!
          <Link className="text-blue-500 underline text-xl " href="/Login">
            Login
          </Link>
        </p>
        </div>
      </div>
  </div>
  </div>


      
    


  );
};

export default signup;
