
import { BrainCircuit, Database, LineChart, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  return (
    <div id="how-it-works" className="py-16 bg-realestate-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Our AI Price Prediction Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           PropertyPredict uses advanced machine learning algorithms trained on millions of real estate 
            transactions to provide accurate price predictions for your property.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="rounded-full bg-realestate-purple/10 w-12 h-12 flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-realestate-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">Data Collection</h3>
              <p className="text-gray-600 text-sm">
                We analyze millions of property listings, historical sales data, and market trends 
                to build a comprehensive dataset.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="rounded-full bg-realestate-purple/10 w-12 h-12 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-realestate-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">ML Training</h3>
              <p className="text-gray-600 text-sm">
                Our advanced algorithms learn patterns between property features and sale prices, 
                adapting to different markets and conditions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="rounded-full bg-realestate-purple/10 w-12 h-12 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-realestate-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">Price Prediction</h3>
              <p className="text-gray-600 text-sm">
                Your property details are processed through our model to generate an accurate 
                price prediction with confidence scores.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="rounded-full bg-realestate-purple/10 w-12 h-12 flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-realestate-purple" />
              </div>
              <h3 className="text-lg font-medium mb-2">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Our system constantly improves as new data becomes available, ensuring the 
                most up-to-date and accurate predictions possible.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our predictions have achieved 93% accuracy when compared to actual sale prices, 
            making PropertyPredict one of the most reliable tools in the market.
          </p>
          <div className="inline-flex items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-realestate-purple">93%</span>
              <span className="text-xs text-gray-500">Accuracy</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-realestate-purple">250K+</span>
              <span className="text-xs text-gray-500">Predictions</span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-realestate-purple">1M+</span>
              <span className="text-xs text-gray-500">Data Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
