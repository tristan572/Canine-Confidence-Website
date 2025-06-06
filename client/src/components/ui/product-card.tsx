import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get or create session ID for cart functionality
  const getSessionId = () => {
    let sessionId = sessionStorage.getItem('cart-session');
    if (!sessionId) {
      sessionId = 'cart-' + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('cart-session', sessionId);
    }
    return sessionId;
  };

  const addToCartMutation = useMutation({
    mutationFn: async () => {
      const sessionId = getSessionId();
      const response = await apiRequest("POST", "/api/cart", {
        productId: product.id,
        quantity: 1,
        sessionId,
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
      const sessionId = getSessionId();
      queryClient.invalidateQueries({ queryKey: ['/api/cart', sessionId] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCartMutation.mutate();
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Card className="bg-white card-hover border border-gray-100">
      {product.imageUrl && (
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-charcoal mb-2">{product.name}</h3>
        <p className="text-medium-grey text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-blue">
            {product.priceRange || `$${product.price}`}
          </span>
          <Button 
            onClick={handleAddToCart}
            disabled={!product.inStock || addToCartMutation.isPending || isAdding}
            className="bg-primary-blue text-white hover:bg-secondary-blue px-4 py-2 text-sm font-medium"
          >
            {isAdding ? "Added!" : addToCartMutation.isPending ? "Adding..." : "Shop Now"}
          </Button>
        </div>
        {!product.inStock && (
          <p className="text-red-500 text-xs mt-2">Currently out of stock</p>
        )}
      </CardContent>
    </Card>
  );
}
