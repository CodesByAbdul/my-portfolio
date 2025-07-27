"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll when menu is opened/closed
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Handle link clicks to close menu and enable scrolling
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Get the href attribute
    const href = e.currentTarget.getAttribute('href');
    
    // If it's a hash link, handle smooth scrolling
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close menu before scrolling
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
        
        // Smooth scroll to element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Close menu in any case
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Clean up effect to ensure body scrolling is restored if component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="w-full flex justify-center fixed top-0 z-50">
      <header className="backdrop-blur-md bg-white/10 md:w-[65%] w-full shadow-sm border-b border-white/60 rounded-b-lg">
        <div className="container w-full mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Brand Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-bold text-gray-800">CodesByAbdul</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="text-foreground/70 hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </a>
          ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden flex flex-col justify-center items-center">
          <nav className="flex flex-col items-center w-full">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleLinkClick}
                className="block py-4 px-6 text-white text-2xl font-medium hover:text-primary transition duration-300 w-full text-center"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;