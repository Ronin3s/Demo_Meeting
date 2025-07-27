
import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6 text-realestate-purple" />
          <span className="font-bold text-xl">AptPriceSeer</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-realestate-purple transition-colors">Home</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-realestate-purple transition-colors">How It Works</a>
          <a href="#" className="text-gray-600 hover:text-realestate-purple transition-colors">Market Reports</a>
          <a href="#" className="text-gray-600 hover:text-realestate-purple transition-colors">Pricing</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">Sign In</Button>
          <Button className="bg-realestate-purple hover:bg-realestate-purple/90">Try Free</Button>
        </div>
      </div>
    </header>
  );
}
