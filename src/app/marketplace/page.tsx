'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Flame, Star, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Marketplace() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">NFT Marketplace</h1>
        <p className="text-lg text-foreground/70 mb-8">Discover and trade unique digital assets</p>
        
        {/* Featured Collections */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Collections</h2>
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
                    src={`https://images.unsplash.com/photo-${1618005198919 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                    alt={`Collection ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">CryptoArt Collection #{item}</h3>
                  <p className="text-sm text-foreground/70 mb-3">by Artist Name</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-foreground/50">Floor Price</p>
                      <p className="font-bold">0.5 ETH</p>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Trending Items */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <TrendingUp size={20} />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Flame size={20} />
              </button>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10">
                <Clock size={20} />
              </button>
            </div>
          </div>
          
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
                    src={`https://images.unsplash.com/photo-${1620641788421 + item}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                    alt={`NFT ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Digital Art #{item}</h3>
                  <p className="text-sm text-foreground/70 mb-3">by Creator Name</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-foreground/50">Current Price</p>
                      <p className="font-bold">1.2 ETH</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-green-500">+12.5%</span>
                      <span className="text-xs text-foreground/50">24h</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Market Stats */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Total Volume</h3>
              <p className="text-2xl font-bold">12,450 ETH</p>
              <p className="text-sm text-green-500">+8.2% from last week</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Active Users</h3>
              <p className="text-2xl font-bold">2,845</p>
              <p className="text-sm text-green-500">+12.5% from last week</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Total NFTs</h3>
              <p className="text-2xl font-bold">15,678</p>
              <p className="text-sm text-green-500">+5.3% from last week</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Average Price</h3>
              <p className="text-2xl font-bold">0.8 ETH</p>
              <p className="text-sm text-red-500">-2.1% from last week</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 