// pages/context.js
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the client-only component with SSR disabled
const ClientOnly = dynamic(() => import('@/app/_components/ClientOnly'), { ssr: false });

const ContextPage = () => {
  return (
    <div>
      <h1>Context Page</h1>
      <ClientOnly />
    </div>
  );
};

export default ContextPage;
