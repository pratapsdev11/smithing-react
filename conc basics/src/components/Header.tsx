//demonstarting props in functional component
import React from 'react';

// Props interface
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">{title}</h1>
    </header>
  );
};

export default Header;
