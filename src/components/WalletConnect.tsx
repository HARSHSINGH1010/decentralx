'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, ExternalLink, AlertCircle, CheckCircle, Copy } from 'lucide-react';

interface WalletConnectProps {
  onClose?: () => void;
}

export default function WalletConnect({ onClose }: WalletConnectProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [ethBalance, setEthBalance] = useState<string | null>(null);
  
  // Check if user has MetaMask installed
  const hasMetaMask = typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  
  // Check if the wallet is already connected on component mount
  useEffect(() => {
    const checkConnection = async () => {
      if (hasMetaMask) {
        try {
          // @ts-ignore - ethereum is injected by MetaMask
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            await fetchBalance(accounts[0]);
          }
        } catch (err) {
          console.error('Failed to check connected accounts:', err);
        }
      }
    };
    
    checkConnection();
  }, [hasMetaMask]);
  
  // Listen for account changes
  useEffect(() => {
    if (hasMetaMask) {
      // @ts-ignore - ethereum is injected by MetaMask
      const handleAccountsChanged = async (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected
          setWalletAddress(null);
          setEthBalance(null);
        } else {
          // User switched accounts
          setWalletAddress(accounts[0]);
          await fetchBalance(accounts[0]);
        }
      };
      
      try {
        // @ts-ignore - ethereum is injected by MetaMask
        window.ethereum.on('accountsChanged', handleAccountsChanged);
      } catch (err) {
        console.error('Failed to add event listener:', err);
      }
      
      // Clean up event listener
      return () => {
        try {
          // @ts-ignore - ethereum is injected by MetaMask
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        } catch (err) {
          console.error('Failed to remove event listener:', err);
        }
      };
    }
  }, [hasMetaMask]);
  
  // Fetch ETH balance for connected wallet
  const fetchBalance = async (address: string) => {
    if (hasMetaMask) {
      try {
        // @ts-ignore - ethereum is injected by MetaMask
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [address, 'latest']
        });
        
        // Convert balance from wei to ETH
        const ethBalanceValue = parseInt(balance, 16) / Math.pow(10, 18);
        setEthBalance(ethBalanceValue.toFixed(4));
      } catch (err) {
        console.error('Failed to fetch balance:', err);
      }
    }
  };
  
  // Connect wallet
  const connectWallet = async () => {
    if (!hasMetaMask) {
      setError('MetaMask is not installed. Please install MetaMask to continue.');
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      // @ts-ignore - ethereum is injected by MetaMask
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      await fetchBalance(accounts[0]);
    } catch (err: any) {
      if (err.code === 4001) {
        // User rejected the request
        setError('You rejected the connection request. Please try again.');
      } else {
        setError('An error occurred while connecting to your wallet. Please try again.');
        console.error('Wallet connection error:', err);
      }
    } finally {
      setIsConnecting(false);
    }
  };
  
  // Disconnect wallet (just for demo, in reality MetaMask doesn't support programmatic disconnection)
  const disconnectWallet = () => {
    setWalletAddress(null);
    setEthBalance(null);
  };
  
  // Copy wallet address to clipboard
  const copyAddressToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  // Format address for display
  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 w-full max-w-md"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Connect Wallet</h2>
        {onClose && (
          <button onClick={onClose} className="text-foreground/60 hover:text-foreground">
            &times;
          </button>
        )}
      </div>
      
      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start">
          <AlertCircle className="text-red-400 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}
      
      {walletAddress ? (
        <div>
          <div className="bg-white/10 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-foreground/60">Connected Wallet</span>
              <span className="bg-green-500/20 text-green-500 text-xs py-1 px-2 rounded-full flex items-center">
                <CheckCircle size={12} className="mr-1" />
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 rounded-lg mr-3">
                  <Wallet size={20} className="text-primary" />
                </div>
                <span>{formatAddress(walletAddress)}</span>
              </div>
              <button 
                onClick={copyAddressToClipboard} 
                className={`p-2 rounded-lg ${copied ? 'bg-green-500/20 text-green-500' : 'hover:bg-white/10 text-foreground/60'}`}
              >
                {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
          
          {ethBalance && (
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <div className="text-sm text-foreground/60 mb-2">Balance</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                    alt="ETH" 
                    className="w-6 h-6 mr-2"
                  />
                  <span className="font-medium">{ethBalance} ETH</span>
                </div>
                <span className="text-xs text-foreground/60">≈ ${(parseFloat(ethBalance) * 2800).toFixed(2)}</span>
              </div>
            </div>
          )}
          
          <div className="flex space-x-4">
            <button
              onClick={disconnectWallet}
              className="w-full flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors"
            >
              Disconnect
            </button>
            <button
              onClick={onClose}
              className="w-full flex items-center justify-center bg-primary hover:bg-primary/80 text-white rounded-lg px-4 py-3 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-foreground/70 mb-6">Connect your wallet to access all features of our NFT marketplace.</p>
          
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="w-full flex items-center justify-center bg-primary hover:bg-primary/80 text-white rounded-lg px-4 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {isConnecting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connecting...
              </>
            ) : (
              <>
                <Wallet className="mr-2 h-5 w-5" />
                Connect with MetaMask
              </>
            )}
          </button>
          
          {!hasMetaMask && (
            <div className="text-center">
              <p className="text-sm text-foreground/70 mb-2">MetaMask not detected</p>
              <a 
                href="https://metamask.io/download/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 text-sm flex items-center justify-center"
              >
                Install MetaMask
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
} 