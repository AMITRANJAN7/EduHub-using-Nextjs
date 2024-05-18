'use client'
import React, { useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/app/_context/AuthContext';

const Home = () => {
  const { user, logOut } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/'); // Redirect to login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/Login');
    }
  }, [user, router]);

  return (

     
    <div className="mx-6 flex justify-end ">
      {user && (
        <div className="font-medium">
          <h1 className="">Welcome, {user.email} !</h1>
         
         <div className='flex justify-center m-2'>
    <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
    </div>
    </div>

      )}
    </div>
   

  );
};

export default Home;
