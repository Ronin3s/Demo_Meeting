
import { useState } from "react";
import { 
  MapPin, Building2, BedDouble, Bath, Home, Trees, 
  Car, Wifi, AlarmClock, Building, Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PredictionForm({ onPredict }: { onPredict: (result: PredictionResult) => void }) {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("apartment");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [squareFeet, setSquareFeet] = useState(1000);
  const [yearBuilt, setYearBuilt] = useState(2000);
  const [amenities, setAmenities] = useState({
    parking: false,
    pool: false,
    gym: false,
    balcony: false,
    petsAllowed: false,
    furnished: false,
    centralAC: false,
    elevator: false,
  });

  const handleAmenityChange = (amenity: keyof typeof amenities) => {
    setAmenities({
      ...amenities,
      [amenity]: !amenities[amenity],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate ML prediction with a simple algorithm
    // In a real app, this would call a backend API with a trained model
    const basePrice = 200000;
    const locationFactor = location.length * 1000;
    const bedroomValue = bedrooms * 25000;
    const bathroomValue = bathrooms * 15000;
    const sizeValue = squareFeet * 200;
    const ageDepreciation = (2024 - yearBuilt) * 500;
    
    let amenitiesValue = 0;
    for (const [key, value] of Object.entries(amenities)) {
      if (value) amenitiesValue += 5000;
    }
    
    const predictedPrice = basePrice + locationFactor + bedroomValue + 
                          bathroomValue + sizeValue - ageDepreciation + 
                          amenitiesValue;
    
    // Add some randomness to simulate model uncertainty
    const confidenceScore = 0.7 + Math.random() * 0.2;
    const priceRange = predictedPrice * 0.1; // 10% range
    
    const result: PredictionResult = {
      predictedPrice,
      confidenceScore,
      priceRange,
      comparableProperties: [
        { address: "123 Main St", price: predictedPrice - 15000, sqft: squareFeet - 100 },
        { address: "456 Oak Ave", price: predictedPrice + 25000, sqft: squareFeet + 150 },
        { address: "789 Pine Rd", price: predictedPrice - 5000, sqft: squareFeet - 50 },
      ],
      features: {
        location,
        propertyType,
        bedrooms,
        bathrooms,
        squareFeet,
        yearBuilt,
        amenities
      }
    };
    
    onPredict(result);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-realestate-purple" />
          Property Details
        </CardTitle>
        <CardDescription>
          Enter the details of the property to get an accurate price prediction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-realestate-purple" /> Location
              </Label>
              <input
                id="location"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-realestate-purple"
                placeholder="Address or neighborhood"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            
            {/* Property Type */}
            <div className="space-y-2">
              <Label htmlFor="propertyType" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-realestate-purple" /> Property Type
              </Label>
              <select
                id="propertyType"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-realestate-purple"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="loft">Loft</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            
            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="bedrooms" className="flex items-center gap-2">
                <BedDouble className="h-4 w-4 text-realestate-purple" /> Bedrooms: {bedrooms}
              </Label>
              <div className="flex items-center gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                >-</Button>
                <Slider 
                  id="bedrooms"
                  min={1} 
                  max={5} 
                  step={1} 
                  value={[bedrooms]} 
                  onValueChange={(value) => setBedrooms(value[0])}
                  className="flex-1"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setBedrooms(Math.min(5, bedrooms + 1))}
                >+</Button>
              </div>
            </div>
            
            {/* Bathrooms */}
            <div className="space-y-2">
              <Label htmlFor="bathrooms" className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-realestate-purple" /> Bathrooms: {bathrooms}
              </Label>
              <div className="flex items-center gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setBathrooms(Math.max(1, bathrooms - 0.5))}
                >-</Button>
                <Slider 
                  id="bathrooms"
                  min={1} 
                  max={4} 
                  step={0.5} 
                  value={[bathrooms]} 
                  onValueChange={(value) => setBathrooms(value[0])}
                  className="flex-1"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => setBathrooms(Math.min(4, bathrooms + 0.5))}
                >+</Button>
              </div>
            </div>
            
            {/* Square Feet */}
            <div className="space-y-2">
              <Label htmlFor="squareFeet" className="flex items-center gap-2">
                <Home className="h-4 w-4 text-realestate-purple" /> Square Feet: {squareFeet}
              </Label>
              <Slider 
                id="squareFeet"
                min={500} 
                max={3000} 
                step={50} 
                value={[squareFeet]} 
                onValueChange={(value) => setSquareFeet(value[0])}
              />
            </div>
            
            {/* Year Built */}
            <div className="space-y-2">
              <Label htmlFor="yearBuilt" className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-realestate-purple" /> Year Built: {yearBuilt}
              </Label>
              <Slider 
                id="yearBuilt"
                min={1950} 
                max={2024} 
                step={1} 
                value={[yearBuilt]} 
                onValueChange={(value) => setYearBuilt(value[0])}
              />
            </div>
          </div>
          
          {/* Amenities */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="parking" 
                  checked={amenities.parking}
                  onCheckedChange={() => handleAmenityChange('parking')}
                />
                <Label htmlFor="parking" className="cursor-pointer">Parking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="pool" 
                  checked={amenities.pool}
                  onCheckedChange={() => handleAmenityChange('pool')}
                />
                <Label htmlFor="pool" className="cursor-pointer">Pool</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="gym" 
                  checked={amenities.gym}
                  onCheckedChange={() => handleAmenityChange('gym')}
                />
                <Label htmlFor="gym" className="cursor-pointer">Gym</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="balcony" 
                  checked={amenities.balcony}
                  onCheckedChange={() => handleAmenityChange('balcony')}
                />
                <Label htmlFor="balcony" className="cursor-pointer">Balcony</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="petsAllowed" 
                  checked={amenities.petsAllowed}
                  onCheckedChange={() => handleAmenityChange('petsAllowed')}
                />
                <Label htmlFor="petsAllowed" className="cursor-pointer">Pets Allowed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="furnished" 
                  checked={amenities.furnished}
                  onCheckedChange={() => handleAmenityChange('furnished')}
                />
                <Label htmlFor="furnished" className="cursor-pointer">Furnished</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="centralAC" 
                  checked={amenities.centralAC}
                  onCheckedChange={() => handleAmenityChange('centralAC')}
                />
                <Label htmlFor="centralAC" className="cursor-pointer">Central AC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="elevator" 
                  checked={amenities.elevator}
                  onCheckedChange={() => handleAmenityChange('elevator')}
                />
                <Label htmlFor="elevator" className="cursor-pointer">Elevator</Label>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-realestate-purple hover:bg-realestate-purple/90 text-white">
            Calculate Price Prediction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export interface PredictionResult {
  predictedPrice: number;
  confidenceScore: number;
  priceRange: number;
  comparableProperties: {
    address: string;
    price: number;
    sqft: number;
  }[];
  features: {
    location: string;
    propertyType: string;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    yearBuilt: number;
    amenities: {
      [key: string]: boolean;
    };
  };
}
