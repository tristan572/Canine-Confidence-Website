import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Clock, Star } from "lucide-react";

export default function ProductsPage() {
  const upcomingProducts = [
    {
      category: "Training Equipment",
      items: ["Long Lines", "Training Collars", "Standard Leashes", "Training Clickers"],
      description: "Professional-grade equipment for effective training sessions"
    },
    {
      category: "Training Toys",
      items: ["Balls", "Tug Toys", "Flirt Poles"],
      description: "Engaging toys that support play-based learning methods"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Training Products
          </h1>
          <p className="text-xl text-medium-grey mb-8">
            Professional training equipment and toys will be available soon to support your dog's learning journey.
          </p>
        </div>
      </section>

      {/* Coming Soon Section with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue rounded-full mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-charcoal mb-4">Coming Soon</h2>
              <p className="text-lg text-medium-grey mb-8 max-w-2xl">
                We're carefully curating a selection of professional training products to complement our services. 
                Each item will be personally tested and approved by our trainers.
              </p>

              {/* Product Categories Preview */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {upcomingProducts.map((category, index) => (
                  <Card key={index} className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-charcoal mb-3">{category.category}</h3>
                    <p className="text-medium-grey text-sm mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-charcoal flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="/attached_assets/F2CCD03F-F0E2-4A96-B411-2D1B602E7C73.jpg_1760360884952.webp" 
                alt="Colourful braided tug toys with green balls for dog training"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary-blue" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Trainer Approved</div>
                    <div className="text-sm text-medium-grey">Professional Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-blue rounded-full mb-4">
                <Star className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Trainer Approved</h3>
              <p className="text-medium-grey text-sm">
                Every product personally tested by our certified trainers
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-blue rounded-full mb-4">
                <Package className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Premium Quality</h3>
              <p className="text-medium-grey text-sm">
                Durable, safe materials for effective training sessions
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-soft-blue rounded-full mb-4">
                <Clock className="w-6 h-6 text-primary-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Local Service</h3>
              <p className="text-medium-grey text-sm">
                Quick delivery across Brisbane and surrounding areas
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-primary-blue text-white p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Get Product Recommendations Now</h3>
            <p className="text-blue-100 mb-6">
              While our online store is being prepared, get personalised product recommendations 
              during your training session or free consultation.
            </p>
            <Button className="bg-white text-primary-blue hover:bg-gray-50">
              Book Free Consultation
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}