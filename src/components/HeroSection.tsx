
import { Building, MapPin, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative mt-16 min-h-screen bg-gradient-to-b from-realestate-darkGradientStart via-realestate-darkGradientMid to-realestate-darkGradientEnd">
      {/* Hero content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Building className="h-8 w-8 text-realestate-purple" />
          <h1 className="text-3xl md:text-4xl font-bold">PropertyPredict</h1>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gradient">AI-Powered Real Estate</span><br />
          Price Predictions
        </motion.h2>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 text-gray-300">
          Get accurate apartment price estimates using machine learning and market data
        </p>
        
        {/* Quick location search */}
        <motion.div 
          className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center border border-white/20 shadow-custom"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MapPin className="ml-3 h-5 w-5 text-white/70" />
          <input 
            type="text" 
            placeholder="Enter property address or location" 
            className="flex-1 bg-transparent border-none focus:outline-none px-3 py-3 text-white placeholder:text-white/50 text-lg" 
          />
          <Button className="bg-realestate-purple text-white hover:bg-realestate-purple/90 px-6 py-3 text-lg font-semibold">
            <SearchCheck className="mr-2 h-5 w-5" />
            Get Prediction
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-gray-400 mb-6 text-lg">Trusted by thousands of real estate professionals</p>
          <div className="flex gap-8 justify-center items-center opacity-60">
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white font-semibold">CORP</div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white font-semibold">REAL</div>
            <div className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white font-semibold">PROP</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
