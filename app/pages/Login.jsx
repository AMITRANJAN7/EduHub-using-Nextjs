'use client'

// app/Login/page.jsx
import Link from 'next/link';
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/app/context/AuthContext';

const Login = () => {
  const [remLogIn,setRemLogIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { logIn,user } = UserAuth();
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await logIn(email, password);
      router.push('/');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., display error message)
      // Handle different error cases
    if (error.code === 'auth/user-not-found') {
      // User not found, suggest registration
      const confirmRegistration = window.confirm(
        'User not found. Do you want to register with this email?'
      );
      if (confirmRegistration) {
        // Navigate to registration page or implement registration logic here
        router.push('/Signup'); // Example: Redirect to registration page
      }
    } else if (error.code === 'auth/wrong-password') {
      // Wrong password
      setError('Invalid email or password. Please try again.');
    } else {
      // Other login errors
      setError('Login failed. Please check your login details.');
    }
    }
  };

  {/*useEffect(() => {
    const handleLogin = async () => {
      if (user) {
        const storedCartItems = localStorage.getItem('cartItems');
        const parsedCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        // Set cart items in context or local state after login
        setCartItems(parsedCartItems);
      }
    };

    handleLogin();
  }, [user]);*/}

  return (
    <div>
    <div className="flex justify-center mb-2 ">
    <h1 className="text-2xl text-red-500 font-semibold">Welcome to EduHub !</h1></div>
    <div className="w-full mb-6 flex justify-center items-center">
      <div className="bg-fuchsia-200 p-4 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
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
            Log In
          </button>
        </form>

        <div className='flex justify-between items-center text-black'>
                  <p>
                    <input type="checkbox" className='mr-2 mt-2'checked={remLogIn} onChange={(e)=>setRemLogIn(!remLogIn)} />
                    Remember Me
                  </p>
                  <p className='hover:text-blue-800 cursor-pointer'>Need Help?</p>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-sm mt-4">
          New to Eduhub?
          <Link className="text-blue-500 underline text-xl" href="/Signup">
            SignUp
          </Link>
        </p>
      </div>
  </div>

  </div>
      
    


  );
};

export default Login;
