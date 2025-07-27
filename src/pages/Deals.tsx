import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, MapPin, Bed, Bath, Square, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Deal {
  id: string;
  address: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  daysOnMarket: number;
  rating: number;
  type: "foreclosure" | "short-sale" | "price-drop" | "new-listing";
  image: string;
}

export default function Deals() {
  const [sortBy, setSortBy] = useState("discount");
  const [filterType, setFilterType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const mockDeals: Deal[] = [
    {
      id: "1",
      address: "789 Elm Street, Queens, NY",
      originalPrice: 850000,
      currentPrice: 720000,
      discount: 15.3,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1400,
      daysOnMarket: 45,
      rating: 4.5,
      type: "price-drop",
      image: "/placeholder.svg"
    },
    {
      id: "2",
      address: "321 Pine Ave, Manhattan, NY",
      originalPrice: 1200000,
      currentPrice: 950000,
      discount: 20.8,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1100,
      daysOnMarket: 62,
      rating: 4.2,
      type: "foreclosure",
      image: "/placeholder.svg"
    },
    {
      id: "3",
      address: "654 Cedar Blvd, Brooklyn, NY",
      originalPrice: 675000,
      currentPrice: 599000,
      discount: 11.3,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 1800,
      daysOnMarket: 28,
      rating: 4.7,
      type: "short-sale",
      image: "/placeholder.svg"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const getDealTypeColor = (type: Deal['type']) => {
    const colors = {
      'foreclosure': 'bg-red-500',
      'short-sale': 'bg-orange-500',
      'price-drop': 'bg-green-500',
      'new-listing': 'bg-blue-500'
    };
    return colors[type];
  };

  const getDealTypeLabel = (type: Deal['type']) => {
    const labels = {
      'foreclosure': 'Foreclosure',
      'short-sale': 'Short Sale',
      'price-drop': 'Price Drop',
      'new-listing': 'New Listing'
    };
    return labels[type];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-realestate-darkGradientStart via-realestate-darkGradientMid to-realestate-darkGradientEnd text-white">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Smart Deals</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the best real estate opportunities with significant savings and investment potential
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="discount">Highest Discount</SelectItem>
                        <SelectItem value="price">Lowest Price</SelectItem>
                        <SelectItem value="rating">Highest Rating</SelectItem>
                        <SelectItem value="recent">Most Recent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Deal Type</label>
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="foreclosure">Foreclosure</SelectItem>
                        <SelectItem value="short-sale">Short Sale</SelectItem>
                        <SelectItem value="price-drop">Price Drop</SelectItem>
                        <SelectItem value="new-listing">New Listing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Price Range</label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="0-500k">Under $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value="1m+">$1M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Input
                      placeholder="Enter city or zip"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Deal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <TrendingDown className="h-8 w-8 text-realestate-purple mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">18.5%</p>
                <p className="text-gray-300">Avg. Discount</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white">247</div>
                <p className="text-gray-300">Active Deals</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white">$185K</div>
                <p className="text-gray-300">Avg. Savings</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-white">42</div>
                <p className="text-gray-300">Days on Market</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Deals Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {mockDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-200 overflow-hidden">
                  <div className="relative">
                    <div className="h-48 bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-400">Property Image</span>
                    </div>
                    <Badge className={`absolute top-4 left-4 ${getDealTypeColor(deal.type)} text-white`}>
                      {getDealTypeLabel(deal.type)}
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                      -{deal.discount.toFixed(1)}%
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{deal.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">{deal.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-realestate-purple">
                          {formatPrice(deal.currentPrice)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(deal.originalPrice)}
                        </span>
                      </div>
                      <p className="text-sm text-green-400 font-medium">
                        Save {formatPrice(deal.originalPrice - deal.currentPrice)}
                      </p>
                    </div>
                    
                    <div className="flex justify-between text-gray-300 text-sm mb-4">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{deal.bedrooms} bed</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{deal.bathrooms} bath</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{deal.sqft} sqft</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{deal.daysOnMarket} days on market</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full" variant="gradient">
                        View Details
                      </Button>
                      <Button className="w-full" variant="outline">
                        Schedule Tour
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}