'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, CheckCircle2, XCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Stay Updated</h1>
          <p className="text-lg text-foreground/70">
            Subscribe to our newsletter for the latest NFT news, updates, and exclusive offers.
          </p>
        </div>

        {/* Newsletter Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="notifications"
                  type="checkbox"
                  className="h-4 w-4 text-primary border-white/10 rounded focus:ring-primary"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="notifications" className="text-sm text-foreground/70">
                  I want to receive notifications about new NFT drops and exclusive offers
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Subscribe Now
            </button>
          </form>

          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
            >
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle2 size={20} />
                <span>Successfully subscribed to the newsletter!</span>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
            >
              <div className="flex items-center gap-2 text-red-500">
                <XCircle size={20} />
                <span>Something went wrong. Please try again.</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Early Access</h3>
            <p className="text-foreground/70">
              Get notified about new NFT drops before they're available to the public.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Weekly Updates</h3>
            <p className="text-foreground/70">
              Receive curated content about the latest trends and developments in the NFT space.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Exclusive Offers</h3>
            <p className="text-foreground/70">
              Get access to special deals and discounts available only to newsletter subscribers.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 