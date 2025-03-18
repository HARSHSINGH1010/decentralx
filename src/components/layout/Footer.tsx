'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Github 
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background/50 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
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
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/explore" className="text-foreground/70 hover:text-foreground transition-colors">
                  All NFTs
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-foreground/70 hover:text-foreground transition-colors">
                  Art
                </Link>
              </li>
              <li>
                <Link href="/collectibles" className="text-foreground/70 hover:text-foreground transition-colors">
                  Collectibles
                </Link>
              </li>
              <li>
                <Link href="/music" className="text-foreground/70 hover:text-foreground transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/photography" className="text-foreground/70 hover:text-foreground transition-colors">
                  Photography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="text-foreground/70 hover:text-foreground transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-foreground/70 hover:text-foreground transition-colors">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="text-foreground/70 hover:text-foreground transition-colors">
                  Watchlist
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-foreground/70 hover:text-foreground transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-foreground/70 hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/platform-status" className="text-foreground/70 hover:text-foreground transition-colors">
                  Platform Status
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-foreground/70 hover:text-foreground transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-foreground/70 hover:text-foreground transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/70">
          <p>© 2025 DecentralX. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 