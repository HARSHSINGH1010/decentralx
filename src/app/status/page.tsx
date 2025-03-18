'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, Server, Database, Network, Shield } from 'lucide-react';

export default function PlatformStatus() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-4">Platform Status</h1>
        <p className="text-lg text-foreground/70 mb-8">Real-time status of our platform and services</p>
        
        {/* Overall Status */}
        <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg">
              <CheckCircle2 size={24} className="text-green-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">All Systems Operational</h2>
              <p className="text-foreground/70">Last updated: 2 minutes ago</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server size={16} className="text-green-500" />
                <span className="text-sm font-medium">API</span>
              </div>
              <p className="text-sm text-foreground/70">100% uptime</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database size={16} className="text-green-500" />
                <span className="text-sm font-medium">Database</span>
              </div>
              <p className="text-sm text-foreground/70">Healthy</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Network size={16} className="text-green-500" />
                <span className="text-sm font-medium">Network</span>
              </div>
              <p className="text-sm text-foreground/70">Stable</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-green-500" />
                <span className="text-sm font-medium">Security</span>
              </div>
              <p className="text-sm text-foreground/70">Protected</p>
            </div>
          </div>
        </div>
        
        {/* Recent Incidents */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recent Incidents</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                  <AlertCircle size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">API Latency Issues</h3>
                  <p className="text-foreground/70 mb-4">
                    We experienced increased latency in our API endpoints. The issue has been resolved and all systems are now operating normally.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span>March 15, 2024</span>
                    <span>•</span>
                    <span>Resolved</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <CheckCircle2 size={24} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Scheduled Maintenance</h3>
                  <p className="text-foreground/70 mb-4">
                    Completed scheduled maintenance to improve system performance and reliability.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span>March 10, 2024</span>
                    <span>•</span>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* System Updates */}
        <section>
          <h2 className="text-2xl font-bold mb-6">System Updates</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Clock size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">New Features Released</h3>
                  <p className="text-foreground/70 mb-4">
                    We've added new features to improve your NFT trading experience, including enhanced search filters and improved wallet integration.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span>March 20, 2024</span>
                    <span>•</span>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Clock size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Performance Improvements</h3>
                  <p className="text-foreground/70 mb-4">
                    Implemented various performance optimizations to enhance platform speed and reliability.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span>March 18, 2024</span>
                    <span>•</span>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 