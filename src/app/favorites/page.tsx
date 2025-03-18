'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Filter } from 'lucide-react';
import Image from 'next/image';

export default function Favorites() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">My Favorites</h1>
        <p className="text-lg text-foreground/70 mb-8">Your favorite NFTs and collections</p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-6 py-2 bg-primary text-white rounded-lg">All Items</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Art</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Collectibles</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Music</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Photography</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-2">
            <Filter size={16} />
            More Filters
          </button>
        </div>
        
        {/* Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl overflow-hidden hover-card"
            >
              <div className="relative aspect-square">
                <Image
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1511379938547-c1f69419868d' : item === 2 ? '1511379938547-c1f69419868d' : item === 3 ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                  alt={`NFT ${item}`}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500/30">
                  <Heart size={20} className="fill-current" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">NFT Name {item}</h3>
                <p className="text-sm text-foreground/70 mb-3">Collection Name</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-foreground/50">Current Price</p>
                    <p className="font-bold">0.5 ETH</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {false && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
              <Heart size={48} className="text-foreground/20" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Favorites Yet</h3>
            <p className="text-foreground/70 mb-6">Start adding NFTs to your favorites to see them here</p>
            <button className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg">
              Explore NFTs
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 