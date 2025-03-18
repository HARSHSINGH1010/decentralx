'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Wallet, Bell, Lock, HelpCircle } from 'lucide-react';
import Image from 'next/image';

export default function Account() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Account Settings</h1>
        <p className="text-lg text-foreground/70 mb-8">Manage your account preferences and settings</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="md:col-span-2">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">John Doe</h2>
                  <p className="text-foreground/70">@johndoe</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Display Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    defaultValue="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    defaultValue="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                    rows={4}
                    defaultValue="NFT collector and digital artist. Passionate about the future of digital art and blockchain technology."
                  />
                </div>
                
                <button className="w-full bg-primary hover:bg-primary/80 text-white rounded-lg px-4 py-3 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          
          {/* Settings Menu */}
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Settings</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Settings size={20} />
                  <span>General Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Wallet size={20} />
                  <span>Wallet Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Bell size={20} />
                  <span>Notifications</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Lock size={20} />
                  <span>Security</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <HelpCircle size={20} />
                  <span>Help & Support</span>
                </button>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Account Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Email Verified</span>
                  <span className="text-green-500">Verified</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">2FA Enabled</span>
                  <span className="text-red-500">Not Enabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Member Since</span>
                  <span>Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 