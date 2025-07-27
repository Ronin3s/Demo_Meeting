
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative mt-16 min-h-screen bg-gradient-to-b from-realestate-darkGradientStart via-realestate-darkGradientMid to-realestate-darkGradientEnd flex items-center justify-center">
      {/* Hero content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-light mb-6 text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get accurate price estimates based on location, size, amenities, and market trends.
        </motion.h2>
        
        {/* Quick location search */}
        <motion.div 
          className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-lg p-2 flex items-center border border-white/20 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MapPin className="ml-4 h-6 w-6 text-white/70" />
          <input 
            type="text" 
            placeholder="Enter your city" 
            className="flex-1 bg-transparent border-none focus:outline-none px-4 py-3 text-white placeholder:text-white/50 text-lg" 
          />
          <Button className="bg-realestate-purple text-white hover:bg-realestate-purple/90 px-8 py-3 text-lg font-semibold rounded-md">
            <Search className="mr-2 h-5 w-5" />
            Predict
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex gap-8 md:gap-16 justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">93%</span>
            <span className="text-sm text-gray-300 mt-1">Accuracy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">250K+</span>
            <span className="text-sm text-gray-300 mt-1">Predictions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-white">1M+</span>
            <span className="text-sm text-gray-300 mt-1">Data Points</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
