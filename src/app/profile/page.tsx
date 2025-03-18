'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Clock, TrendingUp, DollarSign, Users } from 'lucide-react';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">John Doe</h1>
            <p className="text-lg text-foreground/70 mb-4">@johndoe</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg">
                Edit Profile
              </button>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">
                Share Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Heart size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Favorites</h3>
            </div>
            <p className="text-2xl font-bold">128</p>
            <p className="text-sm text-foreground/70">NFTs you love</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Share2 size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Listed</h3>
            </div>
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-foreground/70">NFTs for sale</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/20 rounded-lg">
                <DollarSign size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Total Sales</h3>
            </div>
            <p className="text-2xl font-bold">156 ETH</p>
            <p className="text-sm text-foreground/70">Lifetime earnings</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Users size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Followers</h3>
            </div>
            <p className="text-2xl font-bold">1.2k</p>
            <p className="text-sm text-foreground/70">Community members</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button className="px-6 py-2 bg-primary text-white rounded-lg">My Collection</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Activity</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Favorites</button>
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">Settings</button>
        </div>
        
        {/* Collection Grid */}
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
      </div>
    </div>
  );
} 