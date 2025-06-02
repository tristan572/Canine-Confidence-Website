import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/product-card";
import type { Product } from "@shared/schema";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = [
    { id: "all", name: "All Products" },
    { id: "equipment", name: "Training Equipment" },
    { id: "toys", name: "Training Toys" },
  ];

  const filteredProducts = products?.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Professional Training Products
          </h1>
          <p className="text-xl text-medium-grey mb-8">
            Professional-grade training equipment and toys recommended by our trainers to support your dog's learning journey.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredProducts?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {filteredProducts?.length === 0 && (
            <div className="text-center py-12">
              <p className="text-medium-grey text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Why Choose Our Products?</h2>
            <p className="text-lg text-medium-grey">
              All products are carefully selected and tested by our professional trainers to ensure they meet our high standards for safety, durability, and effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 text-center">
              <h3 className="font-semibold text-charcoal mb-3">Trainer Recommended</h3>
              <p className="text-medium-grey text-sm">
                Every product is personally tested and approved by our certified trainers.
              </p>
            </Card>

            <Card className="bg-white p-6 text-center">
              <h3 className="font-semibold text-charcoal mb-3">Premium Quality</h3>
              <p className="text-medium-grey text-sm">
                Durable, safe materials that can withstand regular training sessions.
              </p>
            </Card>

            <Card className="bg-white p-6 text-center">
              <h3 className="font-semibold text-charcoal mb-3">Fast Shipping</h3>
              <p className="text-medium-grey text-sm">
                Quick delivery across Brisbane and surrounding areas.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary-blue text-white p-8">
              <h3 className="text-xl font-semibold mb-4">Need Product Advice?</h3>
              <p className="text-blue-100 mb-6">
                Not sure which products are right for your dog? Get personalized recommendations during your training session or free consultation.
              </p>
              <Button className="bg-white text-primary-blue hover:bg-gray-50">
                Contact Us for Advice
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
