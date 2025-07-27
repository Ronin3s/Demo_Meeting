
import { Building, MapPin, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative mt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-realestate-purple/90 via-realestate-purple/70 to-realestate-darkBlue/90 opacity-90 z-0"></div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-white">
        <div className="flex items-center gap-2 mb-4">
          <Building className="h-8 w-8" />
          <h1 className="text-3xl md:text-4xl font-bold">AptPriceSeer</h1>
        </div>
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-center max-w-2xl">
          Machine learning predictions for apartment prices in your area
        </h2>
        <p className="text-center max-w-xl mb-8 text-white/80">
          Get accurate price estimates based on location, size, amenities, and market trends
        </p>
        
        {/* Quick location search */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg p-2 flex items-center border border-white/20">
          <MapPin className="ml-2 h-5 w-5 text-white/70" />
          <input 
            type="text" 
            placeholder="Enter your city" 
            className="flex-1 bg-transparent border-none focus:outline-none px-3 py-2 text-white placeholder:text-white/50" 
          />
          <Button className="bg-white text-realestate-purple hover:bg-white/90">
            <SearchCheck className="mr-2 h-4 w-4" />
            Predict
          </Button>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/80 mb-2">Already trusted by real estate professionals</p>
          <div className="flex gap-6 justify-center">
            <div className="w-16 h-8 bg-white/20 rounded-md"></div>
            <div className="w-16 h-8 bg-white/20 rounded-md"></div>
            <div className="w-16 h-8 bg-white/20 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
