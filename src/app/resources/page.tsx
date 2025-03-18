'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileText, Video, HelpCircle, MessageSquare, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Resources() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Resources</h1>
        <p className="text-lg text-foreground/70 mb-8">Learn everything you need to know about NFTs</p>
        
        {/* Getting Started Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Book size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Beginner's Guide</h3>
              </div>
              <p className="text-foreground/70 mb-4">Learn the basics of NFTs, blockchain technology, and how to get started with collecting.</p>
              <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                Read Guide
                <ExternalLink size={16} />
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <FileText size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Documentation</h3>
              </div>
              <p className="text-foreground/70 mb-4">Detailed documentation covering all aspects of our platform and NFT technology.</p>
              <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                View Docs
                <ExternalLink size={16} />
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Video size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Video Tutorials</h3>
              </div>
              <p className="text-foreground/70 mb-4">Watch step-by-step video tutorials on how to use our platform effectively.</p>
              <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                Watch Videos
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4">What are NFTs?</h3>
              <p className="text-foreground/70 mb-4">
                NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of digital or physical items on the blockchain.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4">How do I buy NFTs?</h3>
              <p className="text-foreground/70 mb-4">
                You can buy NFTs using cryptocurrency (ETH) through our marketplace. First, connect your wallet and then browse available NFTs.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4">How do I create NFTs?</h3>
              <p className="text-foreground/70 mb-4">
                Create your own NFTs by uploading your digital artwork and following our simple minting process.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4">What wallets are supported?</h3>
              <p className="text-foreground/70 mb-4">
                We support popular wallets like MetaMask, Coinbase Wallet, and WalletConnect compatible wallets.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
          </div>
        </section>
        
        {/* Support Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <HelpCircle size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Support Center</h3>
              </div>
              <p className="text-foreground/70 mb-4">Get help with any issues or questions you may have about our platform.</p>
              <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                Visit Support
                <ExternalLink size={16} />
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <MessageSquare size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Community Forum</h3>
              </div>
              <p className="text-foreground/70 mb-4">Join our community forum to connect with other NFT enthusiasts and get help.</p>
              <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-2">
                Join Forum
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
} 