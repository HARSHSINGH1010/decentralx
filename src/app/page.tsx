'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Star, Flame } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingNFTs = [
    {
      id: 1,
      name: "Digital Dreams #1",
      artist: "CryptoArtist",
      price: "2.5 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 2,
      name: "Abstract Harmony",
      artist: "NFTMaster",
      price: "1.8 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 3,
      name: "Neon Pulse",
      artist: "DigitalArt",
      price: "3.2 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 4,
      name: "Cosmic Waves",
      artist: "ArtBlock",
      price: "4.5 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  const topArtists = [
    {
      id: 1,
      name: "CryptoArtist",
      sales: "2.5k ETH",
      followers: "12.5k",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 2,
      name: "NFTMaster",
      sales: "1.8k ETH",
      followers: "10.2k",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 3,
      name: "DigitalArt",
      sales: "3.2k ETH",
      followers: "15.8k",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 4,
      name: "ArtBlock",
      sales: "4.5k ETH",
      followers: "18.3k",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  const hotCollections = [
    {
      id: 1,
      name: "Digital Dreams",
      artist: "CryptoArtist",
      floorPrice: "2.5 ETH",
      volume: "125 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 2,
      name: "Abstract Harmony",
      artist: "NFTMaster",
      floorPrice: "1.8 ETH",
      volume: "98 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 3,
      name: "Neon Pulse",
      artist: "DigitalArt",
      floorPrice: "3.2 ETH",
      volume: "156 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 4,
      name: "Cosmic Waves",
      artist: "ArtBlock",
      floorPrice: "4.5 ETH",
      volume: "189 ETH",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background/80 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover, Collect & Sell NFTs
          </motion.h1>
          <motion.p 
            className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The world's largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/explore">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore NFTs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white/5 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-2">$2.5B+</h3>
              <p className="text-foreground/70">Total Volume</p>
            </motion.div>
            <motion.div 
              className="bg-white/5 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-2">100K+</h3>
              <p className="text-foreground/70">NFTs Created</p>
            </motion.div>
            <motion.div 
              className="bg-white/5 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-2">50K+</h3>
              <p className="text-foreground/70">Artists</p>
            </motion.div>
            <motion.div 
              className="bg-white/5 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-2">200K+</h3>
              <p className="text-foreground/70">Community Members</p>
            </motion.div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16">
          <Tabs defaultValue="trending" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="top-artists" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                Top Artists
              </TabsTrigger>
              <TabsTrigger value="hot-collections" className="flex items-center gap-2">
                <Flame className="h-4 w-4" />
                Hot Collections
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingNFTs.map((nft) => (
                  <motion.div
                    key={nft.id}
                    className="bg-white/5 rounded-2xl overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={nft.image}
                        alt={nft.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{nft.name}</h3>
                      <p className="text-foreground/70 text-sm mb-2">by {nft.artist}</p>
                      <p className="text-primary font-bold">{nft.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="top-artists">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topArtists.map((artist) => (
                  <motion.div
                    key={artist.id}
                    className="bg-white/5 rounded-2xl overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{artist.name}</h3>
                      <p className="text-foreground/70 text-sm mb-2">{artist.sales} Sales</p>
                      <p className="text-primary font-bold">{artist.followers} Followers</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hot-collections">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hotCollections.map((collection) => (
                  <motion.div
                    key={collection.id}
                    className="bg-white/5 rounded-2xl overflow-hidden"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1">{collection.name}</h3>
                      <p className="text-foreground/70 text-sm mb-2">by {collection.artist}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-primary font-bold">{collection.floorPrice} Floor</p>
                        <p className="text-foreground/70 text-sm">{collection.volume} Volume</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
} 