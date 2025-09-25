import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Package, DollarSign, Check } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

export default function ProductsPage() {
  const [addingToCart, setAddingToCart] = useState<number | null>(null);
  const { toast } = useToast();
  
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const addToCart = async (productId: number) => {
    setAddingToCart(productId);
    try {
      await apiRequest(`/api/cart/${productId}`, {
        method: "POST",
      });
      toast({
        title: "Added to cart",
        description: "Item has been added to your cart successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAddingToCart(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-20 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const equipmentProducts = products?.filter(p => p.category === 'equipment') || [];
  const toyProducts = products?.filter(p => p.category === 'toys') || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Training Products
          </h1>
          <p className="text-xl text-medium-grey mb-8">
            Professional-grade training equipment and toys personally recommended by our certified trainers for effective, engaging training sessions.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-medium-grey">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              <span>Trainer Approved</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Equipment Section */}
      {equipmentProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Package className="w-4 h-4" />
                Training Equipment
              </div>
              <h2 className="text-4xl font-bold text-charcoal mb-4">Professional Training Gear</h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Essential equipment for effective training sessions, carefully selected by our professional trainers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipmentProducts.map((product) => (
                <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  {product.imageUrl && (
                    <div className="h-64 w-full">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-charcoal">{product.name}</h3>
                      {product.inStock ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-medium-grey mb-4 min-h-[3rem]">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center text-2xl font-bold text-charcoal">
                          <DollarSign className="w-5 h-5 mr-1" />
                          <span>{product.price}</span>
                        </div>
                        {product.priceRange && (
                          <div className="text-sm text-medium-grey">Range: {product.priceRange}</div>
                        )}
                      </div>
                    </div>

                    <Button 
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock || addingToCart === product.id}
                      className="w-full btn-primary"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {addingToCart === product.id ? "Adding..." : 
                       !product.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Training Toys Section */}
      {toyProducts.length > 0 && (
        <section className="py-20 bg-light-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Training Toys
              </div>
              <h2 className="text-4xl font-bold text-charcoal mb-4">Interactive Learning Tools</h2>
              <p className="text-xl text-medium-grey max-w-3xl mx-auto">
                Engaging toys designed to support play-based learning and build stronger bonds through interactive training.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toyProducts.map((product) => (
                <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  {product.imageUrl && (
                    <div className="h-64 w-full">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-charcoal">{product.name}</h3>
                      {product.inStock ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-red-100 text-red-700">
                          Out of Stock
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-medium-grey mb-4 min-h-[3rem]">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center text-2xl font-bold text-charcoal">
                          <DollarSign className="w-5 h-5 mr-1" />
                          <span>{product.price}</span>
                        </div>
                        {product.priceRange && (
                          <div className="text-sm text-medium-grey">Range: {product.priceRange}</div>
                        )}
                      </div>
                    </div>

                    <Button 
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock || addingToCart === product.id}
                      className="w-full btn-primary"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {addingToCart === product.id ? "Adding..." : 
                       !product.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommendation CTA */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Product Recommendations?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Not sure which products are right for your dog? Get personalized recommendations from our certified trainers during a consultation.
          </p>
          <Button className="bg-white text-primary-blue hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
            <Package className="w-5 h-5 mr-2" />
            Get Professional Advice
          </Button>
        </div>
      </section>
    </div>
  );
}