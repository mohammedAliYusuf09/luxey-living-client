import React from 'react';
import { IoIosSearch } from 'react-icons/io';

// A functional component for the custom find button.
// This component is built using Tailwind CSS classes for styling.
const FindButton = () => {
  return (
    <button className='hidden md:inline-flex bg-action border-[#14171C] border rounded-full  items-center justify-center py-2 px-5 text-center text-base font-medium text-white hover:bg-[#14171C] hover:border-white disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
      <span className='mr-[10px] text-2xl'>
        < IoIosSearch />
      </span>
      FIND
    </button>
  );
};

export default FindButton;
