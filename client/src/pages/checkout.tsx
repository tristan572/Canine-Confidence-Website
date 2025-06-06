import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { getCartSessionId } from "@/lib/cart";
import type { CartItem, Product } from "@shared/schema";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
if (!import.meta.env.VITE_STRIPE_PUBLIC_KEY) {
  throw new Error('Missing required Stripe key: VITE_STRIPE_PUBLIC_KEY');
}
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ sessionId, cartItems, totalAmount }: { 
  sessionId: string; 
  cartItems: CartItem[];
  totalAmount: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
      });

      if (error) {
        toast({
          title: "Payment Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Payment Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          Payment Details
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <PaymentElement />
          <Button 
            type="submit" 
            disabled={!stripe || isProcessing}
            className="w-full btn-primary"
          >
            {isProcessing ? "Processing..." : `Pay $${totalAmount.toFixed(2)} AUD`}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const CartSummary = ({ cartItems, products }: { 
  cartItems: CartItem[]; 
  products: Product[];
}) => {
  const total = cartItems.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? parseFloat(product.price) * item.quantity : 0);
  }, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cartItems.map(item => {
          const product = products.find(p => p.id === item.productId);
          if (!product) return null;
          
          const itemTotal = parseFloat(product.price) * item.quantity;
          
          return (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium">${itemTotal.toFixed(2)}</p>
            </div>
          );
        })}
        
        <Separator />
        
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)} AUD</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const sessionId = getCartSessionId();

  // Fetch cart items
  const { data: cartItems = [], isLoading: isCartLoading } = useQuery({
    queryKey: ['/api/cart', sessionId],
    queryFn: () => apiRequest('GET', `/api/cart/${sessionId}`).then(res => res.json())
  });

  // Fetch all products to get details
  const { data: products = [], isLoading: isProductsLoading } = useQuery({
    queryKey: ['/api/products'],
    queryFn: () => apiRequest('GET', '/api/products').then(res => res.json())
  });

  const totalAmount = cartItems.reduce((sum: number, item: CartItem) => {
    const product = products.find((p: Product) => p.id === item.productId);
    return sum + (product ? parseFloat(product.price) * item.quantity : 0);
  }, 0);

  useEffect(() => {
    if (cartItems.length > 0 && !clientSecret) {
      // Create PaymentIntent when cart items are loaded
      apiRequest("POST", "/api/create-payment-intent", { 
        items: cartItems,
        sessionId 
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.error('Error creating payment intent:', error);
        });
    }
  }, [cartItems, clientSecret, sessionId]);

  if (isCartLoading || isProductsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading"/>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-8">Your Cart is Empty</h1>
          <p className="text-medium-grey mb-8">Add some products to your cart to proceed with checkout.</p>
          <Link href="/products">
            <Button className="btn-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading"/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/products">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-charcoal">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CartSummary cartItems={cartItems} products={products} />
          </div>
          
          <div>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm 
                sessionId={sessionId} 
                cartItems={cartItems}
                totalAmount={totalAmount}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}