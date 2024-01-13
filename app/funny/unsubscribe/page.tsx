import React from 'react';
import FunnyButton from '@/app/components/FunnyButton';

const Page: React.FC = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Unsubscribe from our Blog(not recommended)</h1>
      <FunnyButton />
    </div>
  );
};

export default Page;
