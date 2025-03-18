'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Book, Video, Mail, Search } from 'lucide-react';

export default function HelpCenter() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
        <p className="text-lg text-foreground/70 mb-8">Find answers to common questions and get support</p>
        
        {/* Search Bar */}
        <div className="relative mb-12">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 pl-12 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50" size={20} />
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Book size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Documentation</h3>
            </div>
            <p className="text-foreground/70 mb-4">Browse our comprehensive documentation and guides</p>
            <a href="#" className="text-primary hover:text-primary/80">View Docs →</a>
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
            <p className="text-foreground/70 mb-4">Watch step-by-step video tutorials</p>
            <a href="#" className="text-primary hover:text-primary/80">Watch Videos →</a>
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
            <p className="text-foreground/70 mb-4">Connect with other users and get help</p>
            <a href="#" className="text-primary hover:text-primary/80">Join Forum →</a>
          </motion.div>
          
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Contact Support</h3>
            </div>
            <p className="text-foreground/70 mb-4">Get in touch with our support team</p>
            <a href="#" className="text-primary hover:text-primary/80">Contact Us →</a>
          </motion.div>
        </div>
        
        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">How do I buy NFTs?</h3>
              <p className="text-foreground/70 mb-4">
                To buy NFTs, you'll need to connect your wallet, browse available NFTs, and click the "Buy Now" button. Make sure you have enough ETH in your wallet to cover the purchase price and gas fees.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">How do I create NFTs?</h3>
              <p className="text-foreground/70 mb-4">
                You can create NFTs by uploading your digital artwork, setting the price and royalties, and minting them on our platform. Follow our step-by-step guide in the documentation.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">What wallets are supported?</h3>
              <p className="text-foreground/70 mb-4">
                We support popular wallets like MetaMask, Coinbase Wallet, and WalletConnect compatible wallets. Make sure your wallet is connected to the Ethereum network.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-2">How do I sell my NFTs?</h3>
              <p className="text-foreground/70 mb-4">
                To sell your NFTs, go to your collection, select the NFT you want to sell, and click "List for Sale". Set your desired price and complete the listing process.
              </p>
              <a href="#" className="text-primary hover:text-primary/80">Learn more →</a>
            </div>
          </div>
        </section>
        
        {/* Need More Help */}
        <section>
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
              <HelpCircle size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues you may have. Contact us through email or join our community forum.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-2 bg-primary hover:bg-primary/80 rounded-lg">
                Contact Support
              </button>
              <button className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-lg">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 