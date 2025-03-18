'use client';

import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Plus, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// NFT Properties interface
interface NFTProperty {
  id: string;
  name: string;
  value: string;
}

export default function CreateNFT() {
  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [royalties, setRoyalties] = useState('10');
  const [properties, setProperties] = useState<NFTProperty[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Add property
  const addProperty = () => {
    const newProperty: NFTProperty = {
      id: Date.now().toString(),
      name: '',
      value: ''
    };
    setProperties([...properties, newProperty]);
  };
  
  // Update property
  const updateProperty = (id: string, field: 'name' | 'value', value: string) => {
    setProperties(properties.map(prop => 
      prop.id === id ? { ...prop, [field]: value } : prop
    ));
  };
  
  // Remove property
  const removeProperty = (id: string) => {
    setProperties(properties.filter(prop => prop.id !== id));
  };
  
  // Clear form
  const clearForm = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setRoyalties('10');
    setProperties([]);
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      clearForm();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">Create New NFT</h1>
          <p className="text-lg text-foreground/70">Create and mint your unique digital asset to the blockchain</p>
        </div>
        
        {/* Success message */}
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/20 border border-green-500/30 text-green-500 p-4 rounded-xl mb-8 flex items-center"
          >
            <div className="bg-green-500/20 p-2 rounded-full mr-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Your NFT has been created successfully! It will be minted shortly.</span>
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left column - Image upload */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Upload File</label>
                <div 
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                    isDragging 
                      ? 'border-primary bg-primary/10' 
                      : previewImage 
                        ? 'border-white/20 bg-white/5' 
                        : 'border-white/20 hover:border-white/30 hover:bg-white/5'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {previewImage ? (
                    <div className="relative">
                      <div className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={previewImage}
                          alt="NFT Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewImage(null);
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                        className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm p-1 rounded-full hover:bg-background"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <div className="mx-auto bg-white/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                        <Upload size={24} />
                      </div>
                      <p className="text-sm text-foreground/70 mb-1">JPG, PNG, GIF, SVG, WEBM, MP4. Max 100mb.</p>
                      <p className="text-xs text-foreground/60">Drag and drop or click to browse</p>
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*,video/*" 
                    onChange={handleImageSelect}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Preview</label>
                <div className="border border-white/10 bg-white/5 rounded-xl p-4">
                  <div className="aspect-square rounded-lg bg-white/5 flex flex-col items-center justify-center">
                    {previewImage ? (
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src={previewImage}
                          alt="NFT Preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <>
                        <ImageIcon size={32} className="text-foreground/30 mb-2" />
                        <p className="text-xs text-foreground/50">No preview available</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column - Form fields */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  placeholder="Item name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  placeholder="Provide a detailed description of your item"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  required
                >
                  <option value="" disabled>Select category</option>
                  <option value="art">Art</option>
                  <option value="collectibles">Collectibles</option>
                  <option value="music">Music</option>
                  <option value="photography">Photography</option>
                  <option value="sports">Sports</option>
                  <option value="virtual-worlds">Virtual Worlds</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="royalties" className="block text-sm font-medium mb-2">Royalties (%)</label>
                <input
                  type="number"
                  id="royalties"
                  value={royalties}
                  onChange={(e) => setRoyalties(e.target.value)}
                  min="0"
                  max="50"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                />
                <p className="text-xs text-foreground/60 mt-1">Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">Properties</label>
                  <button 
                    type="button" 
                    onClick={addProperty}
                    className="text-xs bg-white/10 hover:bg-white/20 py-1 px-2 rounded flex items-center"
                  >
                    <Plus size={12} className="mr-1" />
                    Add Property
                  </button>
                </div>
                <div className="space-y-3">
                  {properties.length === 0 && (
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-foreground/60 flex items-center">
                      <AlertCircle size={16} className="mr-2" />
                      No properties added. Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
                    </div>
                  )}
                  
                  {properties.map((prop) => (
                    <div key={prop.id} className="grid grid-cols-5 gap-2">
                      <div className="col-span-2">
                        <input
                          type="text"
                          value={prop.name}
                          onChange={(e) => updateProperty(prop.id, 'name', e.target.value)}
                          placeholder="e.g. Size"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="text"
                          value={prop.value}
                          onChange={(e) => updateProperty(prop.id, 'value', e.target.value)}
                          placeholder="e.g. Medium"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <button 
                          type="button" 
                          onClick={() => removeProperty(prop.id)}
                          className="text-foreground/60 hover:text-foreground/80 rounded-full p-1 hover:bg-white/10"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-white/10 pt-6 flex justify-end">
            <button
              type="button"
              onClick={clearForm}
              disabled={isSubmitting}
              className="px-6 py-3 mr-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear All
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !previewImage}
              className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating...
                </>
              ) : (
                'Create NFT'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 