'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Bell, User, PlusCircle, Wallet } from 'lucide-react';
import { usePathname } from 'next/navigation';
import WalletModal from '../modals/WalletModal';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if the path matches the current route
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Open wallet connect modal
  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  // Close wallet connect modal
  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="DecentralX"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                DecentralX
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/explore" 
                className={`transition-colors ${isActive('/explore') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Explore
              </Link>
              <Link 
                href="/collections" 
                className={`transition-colors ${isActive('/collections') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Collections
              </Link>
              <Link 
                href="/artists" 
                className={`transition-colors ${isActive('/artists') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Artists
              </Link>
              <Link 
                href="/community" 
                className={`transition-colors ${isActive('/community') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Community
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/create" className="btn-primary flex items-center">
                <PlusCircle className="w-4 h-4 mr-2" />
                Create
              </Link>
              <button className="p-2 rounded-full text-foreground/80 hover:bg-white/10 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full text-foreground/80 hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <Link href="/auth/login" className="p-2 rounded-full bg-primary text-white">
                <User className="w-5 h-5" />
              </Link>
              <button 
                className="btn-primary flex items-center"
                onClick={openWalletModal}
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full text-foreground/80 hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-white/10">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  href="/explore" 
                  className={`py-2 transition-colors ${isActive('/explore') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Explore
                </Link>
                <Link 
                  href="/collections" 
                  className={`py-2 transition-colors ${isActive('/collections') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Collections
                </Link>
                <Link 
                  href="/artists" 
                  className={`py-2 transition-colors ${isActive('/artists') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artists
                </Link>
                <Link 
                  href="/community" 
                  className={`py-2 transition-colors ${isActive('/community') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </Link>
                <Link 
                  href="/create" 
                  className={`py-2 transition-colors ${isActive('/create') ? 'text-primary font-medium' : 'text-foreground/80 hover:text-foreground'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Create NFT
                </Link>
                <div className="flex items-center space-x-4 py-2">
                  <button className="p-2 rounded-full text-foreground/80 hover:bg-white/10 transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full text-foreground/80 hover:bg-white/10 transition-colors">
                    <Bell className="w-5 h-5" />
                  </button>
                  <Link href="/auth/login" className="p-2 rounded-full bg-primary text-white">
                    <User className="w-5 h-5" />
                  </Link>
                </div>
                <button 
                  className="btn-primary w-full flex items-center justify-center"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openWalletModal();
                  }}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </button>
                <div className="pt-2 border-t border-white/10 flex space-x-4">
                  <Link 
                    href="/auth/login" 
                    className="text-primary hover:text-primary/80 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/auth/signup" 
                    className="text-primary hover:text-primary/80 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Wallet Modal */}
      <WalletModal 
        isOpen={isWalletModalOpen} 
        onClose={closeWalletModal} 
      />
    </>
  );
} 