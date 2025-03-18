'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-foreground/70 mb-8">Latest news, insights, and updates from the NFT world</p>
        
        {/* Featured Post */}
        <section className="mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Featured Post"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Featured</span>
                  <div className="flex items-center gap-2 text-white/70">
                    <Calendar size={16} />
                    <span>March 15, 2024</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">The Future of Digital Art: NFTs and Beyond</h2>
                <p className="text-white/70 mb-6 max-w-2xl">
                  Explore how NFTs are revolutionizing the art world and creating new opportunities for artists and collectors.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Latest Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
              >
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1511379938547-c1f69419868d' : item === 2 ? '1511379938547-c1f69419868d' : item === 3 ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                    alt={`Blog Post ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar size={16} />
                      <span>March {14 - item}, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Clock size={16} />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Blog Post Title {item}</h3>
                  <p className="text-foreground/70 mb-4">
                    Brief description of the blog post content and what readers can expect to learn.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={16} className="text-primary" />
                    <span className="text-sm text-foreground/70">NFTs, Technology</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Technology', 'Art', 'Music', 'Gaming', 'Collectibles', 'Tutorials', 'News', 'Interviews'].map((category) => (
              <motion.div
                key={category}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center cursor-pointer hover:bg-white/10"
              >
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-foreground/70 mt-1">12 articles</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 