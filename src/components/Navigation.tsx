'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiSun, FiSearch, FiChevronDown } from 'react-icons/fi';
import type { NavLink } from '@/types';

const navLinks: NavLink[] = [
  { name: '博客', path: '/blog' },
  { name: '项目案例', path: '/projects' },
  { name: '友链', path: '/links' },
  { name: '关于', path: '/about' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Avatar */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">L</span>
            </div>
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Lucas
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  pathname === link.path ? 'text-blue-600' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            {/* <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                更多 <FiChevronDown className="ml-1" size={16} />
              </button>
              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  <Link href="/archive" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">归档</Link>
                  <Link href="/tags" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">标签</Link>
                  <Link href="/rss" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">RSS</Link>
                </div>
              )}
            </div> */}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            {/* <div className="relative">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                <span className="text-sm font-medium">中A</span>
                <FiChevronDown size={14} />
              </button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-2 text-gray-700 hover:text-blue-600 transition-colors ${
                  pathname === link.path ? 'text-blue-600 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

