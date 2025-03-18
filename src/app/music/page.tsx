'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';

export default function MusicPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Music NFTs</h1>
        <p className="text-lg text-foreground/70 mb-8">Discover and collect unique music NFTs</p>
        
        {/* Featured Artists */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Artists</h2>
            <button className="text-primary hover:text-primary/80">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/5 rounded-xl overflow-hidden hover-card"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1511379938547-c1f69419868d' : item === 2 ? '1511379938547-c1f69419868d' : item === 3 ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                    alt={`Artist ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Artist Name {item}</h3>
                  <p className="text-sm text-foreground/70 mb-3">Electronic / Ambient</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-foreground/50">Floor Price</p>
                      <p className="font-bold">0.8 ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                        <Heart size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Latest Releases */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-${item === 1 ? '1511379938547-c1f69419868d' : item === 2 ? '1511379938547-c1f69419868d' : item === 3 ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                      alt={`Album ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Track Name {item}</h3>
                    <p className="text-sm text-foreground/70">Artist Name</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30">
                      <Play size={16} />
                    </button>
                    <span className="text-sm text-foreground/70">3:45</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                      <Heart size={16} />
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-foreground/50">Price</p>
                      <p className="font-bold">0.5 ETH</p>
                    </div>
                    <button className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg text-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Music Stats */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Total Tracks</h3>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-green-500">+12.5% from last month</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Active Artists</h3>
              <p className="text-2xl font-bold">456</p>
              <p className="text-sm text-green-500">+8.2% from last month</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
              <p className="text-2xl font-bold">8,234 ETH</p>
              <p className="text-sm text-green-500">+15.3% from last month</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Average Price</h3>
              <p className="text-2xl font-bold">0.6 ETH</p>
              <p className="text-sm text-red-500">-2.1% from last month</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 