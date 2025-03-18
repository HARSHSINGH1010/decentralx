'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wallet, Palette, Music, Camera, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

export default function Partners() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Our Partners</h1>
        <p className="text-lg text-foreground/70 mb-8">Working with leading companies in the NFT space</p>
        
        {/* Featured Partners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1511379938547-c1f69419868d' : item === 2 ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                      alt={`Partner ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Partner Name {item}</h3>
                    <p className="text-sm text-foreground/70">Category</p>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">
                  Description of the partner and their contribution to the NFT ecosystem.
                </p>
                <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Integration Partners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Integration Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Wallet size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Wallet Providers</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Seamlessly connect with popular wallets like MetaMask, Coinbase Wallet, and more.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">View Integrations →</a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Palette size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Art Platforms</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Integration with leading digital art platforms and marketplaces.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">View Integrations →</a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Music size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Music Platforms</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Connect with music streaming and NFT music platforms.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">View Integrations →</a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Camera size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Photography Platforms</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Integration with photography and digital media platforms.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">View Integrations →</a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Gamepad2 size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Gaming Platforms</h3>
              </div>
              <p className="text-foreground/70 mb-4">
                Connect with gaming and virtual world platforms.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">View Integrations →</a>
            </motion.div>
          </div>
        </section>
        
        {/* Become a Partner */}
        <section>
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <Building2 size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Join our growing network of partners and help shape the future of NFTs. We're always looking for innovative companies to collaborate with.
            </p>
            <button className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg">
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 