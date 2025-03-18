'use client';

import React, { useState } from 'react';
import { Calendar, MessageSquare, Users, Clock, ArrowUpRight, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Forum post interface
interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    isVerified: boolean;
  };
  category: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

// Event interface
interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
}

export default function Community() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'events' | 'tutorials'>('discussions');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample forum posts data
  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: 'How to price your first NFT collection?',
      content: 'I\'m about to launch my first collection and I\'m struggling with pricing. Should I start low to gain traction or price based on the time invested?',
      author: {
        name: 'CryptoArtist',
        avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        isVerified: true
      },
      category: 'advice',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      isLiked: false
    },
    {
      id: '2',
      title: 'Latest developments in the NFT market trends',
      content: 'I\'ve been tracking some interesting trends in the market over the last quarter. Here\'s what I\'ve noticed about collectibles versus generative art...',
      author: {
        name: 'MarketAnalyst',
        avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        isVerified: true
      },
      category: 'market',
      timestamp: '1 day ago',
      likes: 56,
      comments: 12,
      isLiked: true
    },
    {
      id: '3',
      title: 'Introducing myself - new digital artist',
      content: 'Hey everyone! I\'m new to the NFT space and wanted to introduce myself. I\'ve been creating digital art for about 3 years and am excited to join this community...',
      author: {
        name: 'NewArtist',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
        isVerified: false
      },
      category: 'introductions',
      timestamp: '3 days ago',
      likes: 18,
      comments: 7,
      isLiked: false
    },
    {
      id: '4',
      title: 'Technical: Gas optimization for smart contracts',
      content: 'I\'ve been working on some techniques to optimize gas usage in NFT smart contracts. Here\'s what I\'ve learned so far about reducing costs during minting...',
      author: {
        name: 'BlockchainDev',
        avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
        isVerified: true
      },
      category: 'technical',
      timestamp: '5 days ago',
      likes: 42,
      comments: 15,
      isLiked: false
    }
  ];
  
  // Sample events data
  const events: Event[] = [
    {
      id: '1',
      title: 'NFT Summer Exhibition',
      description: 'Join us for a virtual exhibition showcasing the best digital art from emerging creators around the world.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'Aug 15, 2023',
      time: '6:00 PM - 9:00 PM UTC',
      location: 'Virtual (Discord)',
      attendees: 143
    },
    {
      id: '2',
      title: 'Blockchain & NFT Workshop',
      description: 'Learn the fundamentals of blockchain technology and how to create, mint and sell your first NFT.',
      image: 'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'Aug 20, 2023',
      time: '2:00 PM - 4:00 PM UTC',
      location: 'Virtual (Zoom)',
      attendees: 89
    },
    {
      id: '3',
      title: 'NFT Marketplace AMA',
      description: 'Ask us anything about our marketplace, upcoming features, and partnerships.',
      image: 'https://images.unsplash.com/photo-1553775282-20af80779df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      date: 'Aug 25, 2023',
      time: '5:00 PM - 6:00 PM UTC',
      location: 'Twitter Spaces',
      attendees: 211
    }
  ];
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory);
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">NFT Community</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Connect with fellow collectors, creators, and enthusiasts. Share ideas, get advice, and stay updated on events.</p>
        </div>
        
        {/* Main tabs */}
        <div className="border-b border-white/10 mb-8">
          <div className="flex flex-wrap -mb-px">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'discussions' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-foreground/60 hover:text-foreground hover:border-white/30'
              }`}
            >
              <div className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Discussions
              </div>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'events' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-foreground/60 hover:text-foreground hover:border-white/30'
              }`}
            >
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Events
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`mr-4 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tutorials' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-foreground/60 hover:text-foreground hover:border-white/30'
              }`}
            >
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Tutorials
              </div>
            </button>
          </div>
        </div>
        
        {/* Discussions tab content */}
        {activeTab === 'discussions' && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-full text-sm ${selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
                >
                  All Topics
                </button>
                <button 
                  onClick={() => setSelectedCategory('introductions')}
                  className={`px-3 py-1.5 rounded-full text-sm ${selectedCategory === 'introductions' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
                >
                  Introductions
                </button>
                <button 
                  onClick={() => setSelectedCategory('advice')}
                  className={`px-3 py-1.5 rounded-full text-sm ${selectedCategory === 'advice' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
                >
                  Advice
                </button>
                <button 
                  onClick={() => setSelectedCategory('market')}
                  className={`px-3 py-1.5 rounded-full text-sm ${selectedCategory === 'market' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
                >
                  Market
                </button>
                <button 
                  onClick={() => setSelectedCategory('technical')}
                  className={`px-3 py-1.5 rounded-full text-sm ${selectedCategory === 'technical' ? 'bg-primary text-white' : 'bg-white/5 text-foreground/70 hover:bg-white/10'}`}
                >
                  Technical
                </button>
              </div>
              
              <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors">
                New Post
              </button>
            </div>
            
            {/* Forum posts */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{post.author.name}</h3>
                        {post.author.isVerified && (
                          <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        <span className="text-sm text-foreground/60">{post.timestamp}</span>
                      </div>
                      
                      <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                      <p className="text-foreground/70 mb-4">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 text-foreground/80">
                          #{post.category}
                        </span>
                        
                        <div className="flex items-center gap-4 ml-auto">
                          <button className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors">
                            <ThumbsUp size={16} className={post.isLiked ? "text-primary" : ""} />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-foreground/60 hover:text-foreground transition-colors">
                            <MessageCircle size={16} />
                            <span>{post.comments}</span>
                          </button>
                          <button className="text-foreground/60 hover:text-foreground transition-colors">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Events tab content */}
        {activeTab === 'events' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors">
                Submit Event
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/5 rounded-xl overflow-hidden hover-card"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 m-4">
                      <div className="bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <div className="text-sm font-medium">{event.date}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock size={16} className="mr-2 text-foreground/60" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users size={16} className="mr-2 text-foreground/60" />
                        <span>{event.attendees} attending</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <svg className="w-4 h-4 mr-2 text-foreground/60 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.6569 16.6569C16.7202 17.5935 15.5887 18.2931 14.3466 18.7015C13.1045 19.11 11.7825 19.2225 10.4837 19.0381C9.18486 18.8538 7.9476 18.3766 6.84731 17.6448C5.74703 16.913 4.81716 15.9523 4.13181 14.8286C3.44646 13.7049 3.02404 12.4456 2.89449 11.1401C2.76493 9.83455 2.93054 8.51431 3.37954 7.28952C3.82854 6.06474 4.55209 4.96063 5.51677 4.05025C6.48146 3.13987 7.65998 2.45493 8.94139 2.05353M12 2V8H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex-1">{event.location}</span>
                      </div>
                    </div>
                    
                    <Link href="#" className="flex items-center font-medium text-primary hover:text-primary/80 transition-colors">
                      <span className="mr-1">Register Now</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {/* Tutorials tab content */}
        {activeTab === 'tutorials' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Learn NFT Basics</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">Start your journey in the NFT space with our comprehensive guides and tutorials</p>
            </div>
            
            <div className="bg-primary/20 border border-primary/30 rounded-xl p-6 mb-12">
              <h3 className="text-xl font-semibold mb-2">Getting Started with NFTs</h3>
              <p className="mb-4">This video series covers everything you need to know about NFTs as a beginner - from understanding blockchain technology to creating your first digital asset.</p>
              <Link href="#" className="flex items-center font-medium text-primary hover:text-primary/80 transition-colors">
                <span className="mr-1">Watch Series</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Setting Up Your Wallet</h3>
                <p className="text-foreground/70 text-sm mb-4">Learn how to set up MetaMask and connect it to our marketplace to start your NFT journey.</p>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">Read Guide</Link>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Creating Your First NFT</h3>
                <p className="text-foreground/70 text-sm mb-4">Step-by-step tutorial on how to create, mint, and list your first NFT on our marketplace.</p>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">Read Guide</Link>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">NFT Marketplace Navigation</h3>
                <p className="text-foreground/70 text-sm mb-4">A complete tour of our marketplace features and how to use them effectively.</p>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">Read Guide</Link>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Smart Contracts Explained</h3>
                <p className="text-foreground/70 text-sm mb-4">Understanding the technology behind NFTs and how smart contracts work.</p>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">Read Guide</Link>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">NFT Marketing Basics</h3>
                <p className="text-foreground/70 text-sm mb-4">Learn effective strategies to promote your NFT creations and build a collector base.</p>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">Read Guide</Link>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">Gas Fees Optimization</h3>
                <p className="text-foreground/70 text-sm mb-4">Tips and tricks to minimize gas fees when creating and trading NFTs.</p>
                <Link href="#" className="text-primary hover:text-primary/80 transition-colors text-sm">Read Guide</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 