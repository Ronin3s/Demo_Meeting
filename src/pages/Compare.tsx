import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, X } from "lucide-react";
import { motion } from "framer-motion";

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
}

export default function Compare() {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const mockProperties: Property[] = [
    {
      id: "1",
      address: "123 Main St, New York, NY",
      price: 750000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1200,
      image: "/placeholder.svg"
    },
    {
      id: "2", 
      address: "456 Oak Ave, Brooklyn, NY",
      price: 650000,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 950,
      image: "/placeholder.svg"
    }
  ];

  const addProperty = (property: Property) => {
    if (selectedProperties.length < 3 && !selectedProperties.find(p => p.id === property.id)) {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  const removeProperty = (propertyId: string) => {
    setSelectedProperties(selectedProperties.filter(p => p.id !== propertyId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
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
              <span className="text-gradient">Compare Properties</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Side-by-side comparison of up to 3 properties to help you make informed decisions
            </p>
          </motion.div>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Search Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by address, neighborhood, or features"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button variant="gradient">Search</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Available Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Available Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProperties.map((property) => (
                <Card key={property.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                  <CardContent className="p-4">
                    <div className="h-48 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-400">Property Image</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{property.address}</h3>
                    <p className="text-2xl font-bold text-realestate-purple mb-2">{formatPrice(property.price)}</p>
                    <div className="flex justify-between text-gray-300 text-sm mb-4">
                      <span>{property.bedrooms} bed</span>
                      <span>{property.bathrooms} bath</span>
                      <span>{property.sqft} sqft</span>
                    </div>
                    <Button
                      onClick={() => addProperty(property)}
                      disabled={selectedProperties.length >= 3 || selectedProperties.find(p => p.id === property.id) !== undefined}
                      className="w-full"
                      variant="outline"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Compare
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Comparison Table */}
          {selectedProperties.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Property Comparison</h2>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left py-4 px-2 text-gray-300">Feature</th>
                          {selectedProperties.map((property) => (
                            <th key={property.id} className="text-center py-4 px-2 min-w-[200px]">
                              <div className="relative">
                                <Button
                                  onClick={() => removeProperty(property.id)}
                                  variant="ghost"
                                  size="icon"
                                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 hover:bg-red-600"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                                <div className="h-32 bg-gray-600 rounded-lg mb-2 flex items-center justify-center">
                                  <span className="text-gray-400 text-sm">Image</span>
                                </div>
                                <p className="text-white font-medium text-sm">{property.address}</p>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-white">
                        <tr className="border-t border-white/20">
                          <td className="py-3 px-2 font-medium">Price</td>
                          {selectedProperties.map((property) => (
                            <td key={property.id} className="py-3 px-2 text-center font-bold text-realestate-purple">
                              {formatPrice(property.price)}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-t border-white/20">
                          <td className="py-3 px-2 font-medium">Bedrooms</td>
                          {selectedProperties.map((property) => (
                            <td key={property.id} className="py-3 px-2 text-center">{property.bedrooms}</td>
                          ))}
                        </tr>
                        <tr className="border-t border-white/20">
                          <td className="py-3 px-2 font-medium">Bathrooms</td>
                          {selectedProperties.map((property) => (
                            <td key={property.id} className="py-3 px-2 text-center">{property.bathrooms}</td>
                          ))}
                        </tr>
                        <tr className="border-t border-white/20">
                          <td className="py-3 px-2 font-medium">Square Feet</td>
                          {selectedProperties.map((property) => (
                            <td key={property.id} className="py-3 px-2 text-center">{property.sqft.toLocaleString()}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}