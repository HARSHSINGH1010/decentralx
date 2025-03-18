'use client';

import React, { useState } from 'react';
import { BarChart, Clock, Flame, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Collection interface
interface Collection {
  id: string;
  name: string;
  creator: string;
  image: string;
  bannerImage: string;
  itemCount: number;
  floorPrice: number;
  currency: string;
  volume: number;
  volumeChange: number;
  verified: boolean;
}

export default function Collections() {
  const [timeFilter, setTimeFilter] = useState<'24h' | '7d' | '30d' | 'all'>('7d');
  
  // Sample collections data
  const collections: Collection[] = [
    {
      id: '1',
      name: 'Abstract Dreams',
      creator: 'CryptoArtist',
      image: 'https://images.unsplash.com/photo-1615204652378-8470439a2907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      itemCount: 3200,
      floorPrice: 0.8,
      currency: 'ETH',
      volume: 450,
      volumeChange: 12.5,
      verified: true
    },
    {
      id: '2',
      name: 'Neon Punks',
      creator: 'DigitalDreamer',
      image: 'https://images.unsplash.com/photo-1592492152545-9695d3f473f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      itemCount: 5800,
      floorPrice: 1.2,
      currency: 'ETH',
      volume: 950,
      volumeChange: 25.8,
      verified: true
    },
    {
      id: '3',
      name: 'Digital Landscapes',
      creator: 'NFTWizard',
      image: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1117&q=80',
      itemCount: 1850,
      floorPrice: 0.65,
      currency: 'ETH',
      volume: 320,
      volumeChange: -5.2,
      verified: false
    },
    {
      id: '4',
      name: 'Cyber Avatars',
      creator: 'ArtistX',
      image: 'https://images.unsplash.com/photo-1569516449771-41c89ee14ca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80',
      itemCount: 4200,
      floorPrice: 1.8,
      currency: 'ETH',
      volume: 870,
      volumeChange: 42.3,
      verified: true
    },
    {
      id: '5',
      name: 'Metaverse Cities',
      creator: 'BlockchainArtist',
      image: 'https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1510973371500-76226090cb88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      itemCount: 2650,
      floorPrice: 0.9,
      currency: 'ETH',
      volume: 520,
      volumeChange: 18.7,
      verified: true
    },
    {
      id: '6',
      name: 'Pixel Monsters',
      creator: 'CryptoCreator',
      image: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      itemCount: 6800,
      floorPrice: 0.5,
      currency: 'ETH',
      volume: 380,
      volumeChange: -2.3,
      verified: false
    }
  ];
  
  // Filter collections by time period
  const filteredCollections = [...collections].sort((a, b) => b.volume - a.volume);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Top Collections</h1>
            <p className="text-lg text-foreground/70">The top NFT collections ranked by volume, floor price and other statistics</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-2 bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setTimeFilter('24h')}
              className={`px-4 py-2 rounded-lg text-sm ${timeFilter === '24h' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              24h
            </button>
            <button
              onClick={() => setTimeFilter('7d')}
              className={`px-4 py-2 rounded-lg text-sm ${timeFilter === '7d' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              7d
            </button>
            <button
              onClick={() => setTimeFilter('30d')}
              className={`px-4 py-2 rounded-lg text-sm ${timeFilter === '30d' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              30d
            </button>
            <button
              onClick={() => setTimeFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm ${timeFilter === 'all' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              All Time
            </button>
          </div>
        </div>
        
        {/* Collection stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary/20 rounded-lg mr-3">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Top Trending</h3>
            </div>
            <p className="text-2xl font-bold">Neon Punks</p>
            <p className="text-foreground/60 mt-1">+25.8% in volume</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg mr-3">
                <BarChart size={20} className="text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Highest Volume</h3>
            </div>
            <p className="text-2xl font-bold">950 ETH</p>
            <p className="text-foreground/60 mt-1">In the last 7 days</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-amber-500/20 rounded-lg mr-3">
                <Star size={20} className="text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold">Highest Floor</h3>
            </div>
            <p className="text-2xl font-bold">1.8 ETH</p>
            <p className="text-foreground/60 mt-1">Cyber Avatars</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-500/20 rounded-lg mr-3">
                <Flame size={20} className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold">Most Items</h3>
            </div>
            <p className="text-2xl font-bold">6,800</p>
            <p className="text-foreground/60 mt-1">Pixel Monsters</p>
          </div>
        </div>
        
        {/* Collections table */}
        <div className="bg-white/5 rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-sm font-semibold text-foreground/70">
            <div className="col-span-1 text-center">#</div>
            <div className="col-span-5">Collection</div>
            <div className="col-span-2 text-right">Floor Price</div>
            <div className="col-span-2 text-right">Volume</div>
            <div className="col-span-2 text-right">Change</div>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredCollections.map((collection, index) => (
              <motion.div 
                key={collection.id}
                variants={itemVariants}
                className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="col-span-1 text-center flex items-center justify-center">
                  <span className="text-foreground/70 font-medium">{index + 1}</span>
                </div>
                
                <div className="col-span-5 flex items-center">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden mr-3">
                    <Image 
                      src={`https://images.unsplash.com/photo-${index + 1 === 1 ? '1511379938547-c1f69419868d' : index + 1 === 2 ? '1511379938547-c1f69419868d' : index + 1 === 3 ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                      alt={`Collection ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{collection.name}</h3>
                      {collection.verified && (
                        <svg className="ml-1 w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-foreground/60">{collection.itemCount.toLocaleString()} items</p>
                  </div>
                </div>
                
                <div className="col-span-2 text-right flex flex-col items-end justify-center">
                  <div className="font-semibold">{collection.floorPrice} {collection.currency}</div>
                  <div className="text-sm text-foreground/60">floor</div>
                </div>
                
                <div className="col-span-2 text-right flex flex-col items-end justify-center">
                  <div className="font-semibold">{collection.volume.toLocaleString()} {collection.currency}</div>
                  <div className="text-sm text-foreground/60">{timeFilter} vol</div>
                </div>
                
                <div className="col-span-2 text-right flex items-center justify-end">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${collection.volumeChange >= 0 ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                    {collection.volumeChange >= 0 ? '+' : ''}{collection.volumeChange}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Featured collection */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Collection</h2>
          
          <motion.div 
            className="bg-white/5 rounded-2xl overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative h-64 w-full">
              <Image
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Featured collection"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold">Digital Landscapes</h3>
                  <p className="text-foreground/70">by NFTWizard</p>
                </div>
                <Link href="#" className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors">
                  View Collection
                </Link>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-foreground/70 mb-4">A breathtaking collection of digital landscapes spanning from futuristic cityscapes to serene natural environments. Each piece is uniquely crafted with meticulous detail.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-foreground/60 text-sm">Items</p>
                  <p className="text-xl font-bold">1,850</p>
                </div>
                <div>
                  <p className="text-foreground/60 text-sm">Owners</p>
                  <p className="text-xl font-bold">842</p>
                </div>
                <div>
                  <p className="text-foreground/60 text-sm">Floor</p>
                  <p className="text-xl font-bold">0.65 ETH</p>
                </div>
                <div>
                  <p className="text-foreground/60 text-sm">Volume</p>
                  <p className="text-xl font-bold">320 ETH</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 