'use client';

import React, { useState } from 'react';
import { Filter, Grid, ListFilter, Sliders } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// NFT interface
interface NFT {
  id: string;
  name: string;
  creator: string;
  price: number;
  currency: string;
  image: string;
  likes: number;
  isLiked: boolean;
  category: string;
}

export default function Explore() {
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample NFT data with categories
  const nfts: NFT[] = [
    {
      id: '1',
      name: 'Abstract Dimension #358',
      creator: 'CryptoArtist',
      price: 0.85,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 45,
      isLiked: false,
      category: 'art'
    },
    {
      id: '2',
      name: 'Digital Landscape #42',
      creator: 'NFTCreator',
      price: 1.2,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 28,
      isLiked: true,
      category: 'photography'
    },
    {
      id: '3',
      name: 'Cyberpunk City',
      creator: 'DigitalDreamer',
      price: 2.5,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1681309698062-44952eff964d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 72,
      isLiked: false,
      category: 'art'
    },
    {
      id: '4',
      name: 'Neon Dreams',
      creator: 'ArtistX',
      price: 0.95,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 34,
      isLiked: false,
      category: 'collectibles'
    },
    {
      id: '5',
      name: 'Ethereal Beauty',
      creator: 'NFTWizard',
      price: 1.8,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 56,
      isLiked: true,
      category: 'photography'
    },
    {
      id: '6',
      name: 'Digital Genesis',
      creator: 'BlockchainArtist',
      price: 3.2,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      likes: 92,
      isLiked: false,
      category: 'art'
    },
    {
      id: '7',
      name: 'Cosmic Voyage #12',
      creator: 'GalacticArt',
      price: 1.75,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      likes: 61,
      isLiked: true,
      category: 'collectibles'
    },
    {
      id: '8',
      name: 'Pixel Perfection',
      creator: 'RetroGameArt',
      price: 0.65,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      likes: 42,
      isLiked: false,
      category: 'collectibles'
    },
    {
      id: '9',
      name: 'Abstract Flow',
      creator: 'ColorTheory',
      price: 1.05,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      likes: 37,
      isLiked: false,
      category: 'art'
    },
    {
      id: '10',
      name: 'Digital Butterfly',
      creator: 'NatureTech',
      price: 0.75,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1631118641419-a8968e1a9493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      likes: 29,
      isLiked: true,
      category: 'photography'
    },
    {
      id: '11',
      name: 'Future City 2077',
      creator: 'Futurist',
      price: 2.2,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
      likes: 84,
      isLiked: false,
      category: 'art'
    },
    {
      id: '12',
      name: 'Crystal Dreams',
      creator: 'MineralArt',
      price: 1.45,
      currency: 'ETH',
      image: 'https://images.unsplash.com/photo-1559762717-99c81ac85459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      likes: 51,
      isLiked: true,
      category: 'collectibles'
    }
  ];

  // Filter NFTs based on selected category and price range
  const filteredNFTs = nfts.filter(nft => {
    const matchesCategory = filter === 'all' || nft.category === filter;
    const matchesPrice = nft.price >= priceRange[0] && nft.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Toggle like function
  const toggleLike = (id: string) => {
    // This would typically update state in a real app
    console.log(`Toggled like for NFT ${id}`);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Explore NFTs</h1>
        <p className="text-lg text-foreground/70 mb-8">Discover, collect, and sell extraordinary NFTs</p>
        
        {/* Filters and view toggles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
            >
              All Items
            </button>
            <button 
              onClick={() => setFilter('art')}
              className={`px-4 py-2 rounded-full ${filter === 'art' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
            >
              Art
            </button>
            <button 
              onClick={() => setFilter('collectibles')}
              className={`px-4 py-2 rounded-full ${filter === 'collectibles' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
            >
              Collectibles
            </button>
            <button 
              onClick={() => setFilter('photography')}
              className={`px-4 py-2 rounded-full ${filter === 'photography' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
            >
              Photography
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button onClick={() => setShowFilters(!showFilters)} className="bg-white/5 hover:bg-white/10 p-2 rounded-lg">
              <Sliders size={20} />
            </button>
            <div className="bg-white/5 p-1 rounded-lg flex">
              <button 
                onClick={() => setView('grid')} 
                className={`p-1.5 rounded ${view === 'grid' ? 'bg-white/20' : ''}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setView('list')} 
                className={`p-1.5 rounded ${view === 'list' ? 'bg-white/20' : ''}`}
              >
                <ListFilter size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Advanced filters */}
        {showFilters && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white/5 rounded-xl p-6 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">Advanced Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Price Range (ETH)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.1"
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <span>{priceRange[0]} ETH</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    step="0.1"
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                    className="w-full"
                  />
                  <span>{priceRange[1]} ETH</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Collections</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>CryptoArt Masters</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Digital Dreams</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Virtual Worlds</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Sale Type</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Fixed Price</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Auction</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Open for bids</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-3">
              <button 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
                onClick={() => {
                  setPriceRange([0, 10]);
                  setFilter('all');
                }}
              >
                Reset
              </button>
              <button className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg">
                Apply Filters
              </button>
            </div>
          </motion.div>
        )}
        
        {/* NFT grid */}
        <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {filteredNFTs.map((nft) => (
            <motion.div 
              key={nft.id}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={view === 'grid' ? 'bg-white/5 rounded-xl overflow-hidden hover-card' : 'bg-white/5 rounded-xl overflow-hidden flex hover-card'}
            >
              <div className={view === 'grid' ? 'w-full' : 'w-1/3'}>
                <div className="relative aspect-square">
                  <Image
                    src={`https://images.unsplash.com/photo-${nft.id === '1' ? '1511379938547-c1f69419868d' : nft.id === '2' ? '1511379938547-c1f69419868d' : nft.id === '3' ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                    alt={nft.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className={`p-4 ${view === 'list' ? 'w-2/3' : ''}`}>
                <h3 className="text-lg font-semibold mb-1">{nft.name}</h3>
                <p className="text-sm text-foreground/70 mb-3">by {nft.creator}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-foreground/50">Current Price</p>
                    <p className="text-lg font-bold">{nft.price} {nft.currency}</p>
                  </div>
                  
                  <button 
                    onClick={() => toggleLike(nft.id)}
                    className="flex items-center gap-1"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill={nft.isLiked ? "#FF6B81" : "none"} 
                      stroke={nft.isLiked ? "#FF6B81" : "currentColor"} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span className="text-sm">{nft.likes}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 