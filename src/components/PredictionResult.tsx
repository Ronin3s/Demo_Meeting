
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpDown, Lightbulb, Sparkles, TrendingUp } from "lucide-react";
import { PredictionResult } from "./PredictionForm";
import { PriceChart } from "./PriceChart";

export function PredictionResults({ result }: { result: PredictionResult }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const confidencePercentage = Math.round(result.confidenceScore * 100);
  const lowerBound = formatPrice(result.predictedPrice - result.priceRange);
  const upperBound = formatPrice(result.predictedPrice + result.priceRange);

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      {/* Main prediction card */}
      <Card className="border-t-4 border-t-realestate-purple">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">Predicted Price</CardTitle>
              <CardDescription>Based on similar properties and market trends</CardDescription>
            </div>
            <Badge className="bg-realestate-purple hover:bg-realestate-purple/90 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              AI Prediction
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-realestate-purple">
              {formatPrice(result.predictedPrice)}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Price range: {lowerBound} - {upperBound}
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Prediction Confidence</span>
              <span className="text-sm font-medium">{confidencePercentage}%</span>
            </div>
            <Progress value={confidencePercentage} className="h-2" />
            <p className="text-xs text-gray-500">
              Based on {result.comparableProperties.length} comparable properties in the area
            </p>
          </div>
          
          <div className="mb-6">
            <PriceChart result={result} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-realestate-lightGray rounded-lg p-4">
              <h4 className="font-medium mb-1 flex items-center">
                <Lightbulb className="h-4 w-4 mr-1 text-realestate-purple" />
                Key Value Factors
              </h4>
              <ul className="text-sm space-y-1">
                <li>• {result.features.bedrooms} bedrooms</li>
                <li>• {result.features.bathrooms} bathrooms</li>
                <li>• {result.features.squareFeet} sq ft</li>
                <li>• Built in {result.features.yearBuilt}</li>
              </ul>
            </div>
            
            <div className="bg-realestate-lightGray rounded-lg p-4">
              <h4 className="font-medium mb-1 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1 text-realestate-purple" />
                Market Insights
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Trending upward</li>
                <li>• High demand area</li>
                <li>• 5% annual appreciation</li>
                <li>• 14 days avg. on market</li>
              </ul>
            </div>
            
            <div className="bg-realestate-lightGray rounded-lg p-4">
              <h4 className="font-medium mb-1 flex items-center">
                <ArrowUpDown className="h-4 w-4 mr-1 text-realestate-purple" />
                Price Impact Factors
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Prime location (+15%)</li>
                <li>• Recent renovations (+8%)</li>
                <li>• Building age (-3%)</li>
                <li>• Amenities (+6%)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Comparable properties */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Comparable Properties</CardTitle>
          <CardDescription>Similar properties used in our calculation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.comparableProperties.map((property, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">Property Image</span>
                </div>
                <div className="p-3">
                  <h4 className="font-medium">{property.address}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm">{property.sqft} sq ft</span>
                    <span className="font-medium text-realestate-purple">{formatPrice(property.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
