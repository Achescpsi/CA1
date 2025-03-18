import { useState } from "react";
import { Link, useLocation } from "wouter";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="bg-gta-dark-blue text-white px-4 py-2 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="font-['Bebas_Neue'] text-2xl font-bold text-gta-accent">
            GTA V Car Collector
          </a>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <a className={`py-2 hover:text-gta-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gta-red after:bottom-[-2px] after:left-0 after:transition-all ${location === '/' ? 'after:w-full text-gta-accent' : ''} hover:after:w-full`}>
              Home
            </a>
          </Link>
          <Link href="/dashboard">
            <a className={`py-2 hover:text-gta-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gta-red after:bottom-[-2px] after:left-0 after:transition-all ${location === '/dashboard' ? 'after:w-full text-gta-accent' : ''} hover:after:w-full`}>
              Dashboard
            </a>
          </Link>
          <Link href="/about">
            <a className={`py-2 hover:text-gta-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gta-red after:bottom-[-2px] after:left-0 after:transition-all ${location === '/about' ? 'after:w-full text-gta-accent' : ''} hover:after:w-full`}>
              About
            </a>
          </Link>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gta-dark-blue`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a className="block px-3 py-2 rounded hover:bg-gta-red transition-colors">Home</a>
          </Link>
          <Link href="/dashboard">
            <a className="block px-3 py-2 rounded hover:bg-gta-red transition-colors">Dashboard</a>
          </Link>
          <Link href="/about">
            <a className="block px-3 py-2 rounded hover:bg-gta-red transition-colors">About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
