import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 top-0 fixed w-full">
      <Link href="/">
        <h1 className="text-4xl">GeneMe</h1>
      </Link>
    </header>
  );
};

export default Header;
