'use client';

import React, { useState } from 'react';
import { Award, Instagram, Twitter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Artist interface
interface Artist {
  id: string;
  name: string;
  username: string;
  avatar: string;
  coverImage: string;
  bio: string;
  totalSales: number;
  itemCount: number;
  followers: number;
  verified: boolean;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export default function Artists() {
  const [filter, setFilter] = useState<'all' | 'trending' | 'top-selling' | 'new'>('all');
  
  // Sample artists data
  const artists: Artist[] = [
    {
      id: '1',
      name: 'Alex Rivers',
      username: 'cryptoartist',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      coverImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Digital artist specializing in abstract and futuristic art pieces. Creating unique NFTs since 2020.',
      totalSales: 450,
      itemCount: 38,
      followers: 12500,
      verified: true,
      socialLinks: {
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        website: 'https://example.com'
      }
    },
    {
      id: '2',
      name: 'Sophia Lin',
      username: 'digitaldreamer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
      coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Contemporary artist exploring the intersection of traditional art and digital technology. My work reflects modern digital culture.',
      totalSales: 820,
      itemCount: 65,
      followers: 28700,
      verified: true,
      socialLinks: {
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com'
      }
    },
    {
      id: '3',
      name: 'Marcus Chen',
      username: 'nftwizard',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      coverImage: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1117&q=80',
      bio: 'Creating ethereal landscapes and dreamlike environments in the digital realm. Pushing the boundaries of digital art.',
      totalSales: 320,
      itemCount: 27,
      followers: 9800,
      verified: false,
      socialLinks: {
        twitter: 'https://twitter.com',
        website: 'https://example.com'
      }
    },
    {
      id: '4',
      name: 'Diana Wright',
      username: 'artistx',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80',
      bio: 'Bringing cyberpunk aesthetics into the NFT space. My art blends retro tech with futuristic visions.',
      totalSales: 750,
      itemCount: 42,
      followers: 15300,
      verified: true,
      socialLinks: {
        instagram: 'https://instagram.com',
        website: 'https://example.com'
      }
    },
    {
      id: '5',
      name: 'James Rodriguez',
      username: 'blockchainartist',
      avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      coverImage: 'https://images.unsplash.com/photo-1510973371500-76226090cb88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Architectural designer turned digital artist. Creating intricate cityscapes and futuristic urban environments.',
      totalSales: 520,
      itemCount: 35,
      followers: 11200,
      verified: true,
      socialLinks: {
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        website: 'https://example.com'
      }
    },
    {
      id: '6',
      name: 'Emma Thompson',
      username: 'cryptocreator',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
      coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bio: 'Pixel artist specializing in nostalgic gaming-inspired characters and scenes. Each piece is a labor of love.',
      totalSales: 380,
      itemCount: 110,
      followers: 8700,
      verified: false,
      socialLinks: {
        twitter: 'https://twitter.com'
      }
    }
  ];
  
  // Filter artists based on selected filter
  const filteredArtists = [...artists].sort((a, b) => {
    if (filter === 'trending' || filter === 'all') return b.followers - a.followers;
    if (filter === 'top-selling') return b.totalSales - a.totalSales;
    return 0; // For 'new' filter we would normally use registration date, using default order for demo
  });
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Featured Artists</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Discover talented creators from around the world pushing the boundaries of digital art and NFTs</p>
        </div>
        
        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/5 p-1 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm ${filter === 'all' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              All Artists
            </button>
            <button
              onClick={() => setFilter('trending')}
              className={`px-4 py-2 rounded-lg text-sm ${filter === 'trending' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              Trending
            </button>
            <button
              onClick={() => setFilter('top-selling')}
              className={`px-4 py-2 rounded-lg text-sm ${filter === 'top-selling' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              Top Selling
            </button>
            <button
              onClick={() => setFilter('new')}
              className={`px-4 py-2 rounded-lg text-sm ${filter === 'new' ? 'bg-primary text-white' : 'text-foreground/70 hover:bg-white/10'}`}
            >
              New Artists
            </button>
          </div>
        </div>
        
        {/* Featured Artist */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Artist</h2>
          
          <div className="bg-white/5 rounded-2xl overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={filteredArtists[0].coverImage}
                alt={`${filteredArtists[0].name} cover`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
            
            <div className="p-8 relative">
              <div className="absolute -top-16 left-8 border-4 border-background rounded-2xl overflow-hidden">
                <div className="relative w-24 h-24">
                  <Image
                    src={filteredArtists[0].avatar}
                    alt={filteredArtists[0].name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="ml-32 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold">{filteredArtists[0].name}</h3>
                    {filteredArtists[0].verified && (
                      <div className="ml-2 bg-primary/20 p-1 rounded-full">
                        <Award size={16} className="text-primary" />
                      </div>
                    )}
                  </div>
                  <p className="text-foreground/70">@{filteredArtists[0].username}</p>
                </div>
                
                <div className="flex space-x-3 mt-4 md:mt-0">
                  {filteredArtists[0].socialLinks.twitter && (
                    <Link href={filteredArtists[0].socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Twitter size={20} />
                    </Link>
                  )}
                  {filteredArtists[0].socialLinks.instagram && (
                    <Link href={filteredArtists[0].socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <Instagram size={20} />
                    </Link>
                  )}
                  {filteredArtists[0].socialLinks.website && (
                    <Link href={filteredArtists[0].socialLinks.website} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      <ExternalLink size={20} />
                    </Link>
                  )}
                  <button className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg transition-colors">
                    Follow
                  </button>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-foreground/70 mb-6">{filteredArtists[0].bio}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <p className="text-2xl font-bold">{filteredArtists[0].totalSales.toLocaleString()}</p>
                    <p className="text-sm text-foreground/60">Total Sales</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <p className="text-2xl font-bold">{filteredArtists[0].itemCount}</p>
                    <p className="text-sm text-foreground/60">Items Created</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <p className="text-2xl font-bold">{filteredArtists[0].followers.toLocaleString()}</p>
                    <p className="text-sm text-foreground/60">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Artists Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Artists</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtists.slice(1).map((artist) => (
              <motion.div 
                key={artist.id}
                className="bg-white/5 rounded-xl overflow-hidden hover-card"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={`https://images.unsplash.com/photo-${artist.id === '1' ? '1511379938547-c1f69419868d' : artist.id === '2' ? '1511379938547-c1f69419868d' : artist.id === '3' ? '1511379938547-c1f69419868d' : '1511379938547-c1f69419868d'}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80`}
                    alt={`${artist.name} cover`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                
                <div className="p-5 relative">
                  <div className="absolute -top-8 left-4 border-2 border-background rounded-full overflow-hidden">
                    <div className="relative w-16 h-16">
                      <Image
                        src={artist.avatar}
                        alt={artist.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <div className="flex items-center mb-1">
                      <h3 className="font-semibold">{artist.name}</h3>
                      {artist.verified && (
                        <div className="ml-1 text-primary">
                          <Award size={14} />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-foreground/70 mb-4">@{artist.username}</p>
                    
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-xs text-foreground/50">Items</p>
                        <p className="font-medium">{artist.itemCount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50">Sales</p>
                        <p className="font-medium">{artist.totalSales}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50">Followers</p>
                        <p className="font-medium">{artist.followers.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {artist.socialLinks.twitter && (
                          <Link href={artist.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                            <Twitter size={14} />
                          </Link>
                        )}
                        {artist.socialLinks.instagram && (
                          <Link href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                            <Instagram size={14} />
                          </Link>
                        )}
                        {artist.socialLinks.website && (
                          <Link href={artist.socialLinks.website} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                            <ExternalLink size={14} />
                          </Link>
                        )}
                      </div>
                      
                      <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 