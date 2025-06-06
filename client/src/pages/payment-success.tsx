import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { apiRequest } from '@/lib/queryClient';
import { Link } from 'wouter';

export default function PaymentSuccessPage() {
  const [, setLocation] = useLocation();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [sessionId] = useState(() => 
    sessionStorage.getItem('cart-session') || ''
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentIntentId = urlParams.get('payment_intent');
    
    if (paymentIntentId && sessionId) {
      // Confirm payment with backend
      apiRequest('POST', '/api/payment-success', {
        sessionId,
        paymentIntentId
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setIsConfirmed(true);
            // Clear the cart session
            sessionStorage.removeItem('cart-session');
          }
        })
        .catch(error => {
          console.error('Payment confirmation error:', error);
        });
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto px-4">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-charcoal">
              Payment Successful!
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-medium-grey mb-4">
                Thank you for your purchase! Your payment has been processed successfully.
              </p>
              
              {isConfirmed && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <Package className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Your order has been confirmed
                    </span>
                  </div>
                </div>
              )}
              
              <p className="text-sm text-medium-grey">
                You will receive an email confirmation with your order details shortly.
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/products">
                <Button className="w-full btn-primary">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}