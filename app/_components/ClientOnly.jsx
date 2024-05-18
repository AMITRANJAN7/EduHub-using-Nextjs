// components/ClientOnlyComponent.js
import { useEffect } from "react";
import { auth } from '@/app/services/firebase';

const ClientOnly = () => {
  useEffect(() => {
    console.log('Firebase Initialized!', auth);
  }, []);

  return <div>Firebase Initialized!</div>;
};

export default ClientOnly;
