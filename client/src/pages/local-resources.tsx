import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink, Heart, Stethoscope, ShoppingBag, TreePine } from "lucide-react";

interface ResourceEntry {
  name: string;
  description: string;
  suburb: string;
  website?: string;
  placeholder?: boolean;
}

interface ResourceCategory {
  title: string;
  icon: React.ElementType;
  colour: string;
  bgColour: string;
  entries: ResourceEntry[];
}

const categories: ResourceCategory[] = [
  {
    title: "Veterinary Clinics",
    icon: Stethoscope,
    colour: "text-blue-600",
    bgColour: "bg-blue-50",
    entries: [
      {
        name: "Your Local Vet",
        description: "Trusted veterinary care for your dog. Regular check-ups, vaccinations, and health advice to keep your dog in peak condition.",
        suburb: "North Brisbane",
        placeholder: true,
      },
      {
        name: "Get Listed Here",
        description: "Are you a local vet? We'd love to recommend trusted veterinary partners to our clients. Reach out to discuss a community partnership.",
        suburb: "North Brisbane",
        placeholder: true,
      },
    ],
  },
  {
    title: "Pet Shops",
    icon: ShoppingBag,
    colour: "text-green-600",
    bgColour: "bg-green-50",
    entries: [
      {
        name: "Your Local Pet Shop",
        description: "Quality food, enrichment toys, leads, and training equipment. Supporting local pet businesses means better advice and fresher stock.",
        suburb: "North Brisbane",
        placeholder: true,
      },
      {
        name: "Get Listed Here",
        description: "Do you run a local pet shop? We actively recommend quality suppliers to our training clients. Get in touch to explore a partnership.",
        suburb: "North Brisbane",
        placeholder: true,
      },
    ],
  },
  {
    title: "Groomers & Dog Wash",
    icon: Heart,
    colour: "text-pink-600",
    bgColour: "bg-pink-50",
    entries: [
      {
        name: "Your Local Groomer",
        description: "A well-groomed dog is a happy dog. We recommend groomers who understand dog behaviour and make the experience positive and stress-free.",
        suburb: "North Brisbane",
        placeholder: true,
      },
      {
        name: "Get Listed Here",
        description: "Are you a groomer who prioritises calm, fear-free handling? We'd love to refer our clients to you. Contact us to connect.",
        suburb: "North Brisbane",
        placeholder: true,
      },
    ],
  },
  {
    title: "Dog-Friendly Parks & Trails",
    icon: TreePine,
    colour: "text-emerald-600",
    bgColour: "bg-emerald-50",
    entries: [
      {
        name: "Kalinga Park",
        description: "A beautiful off-leash area in Kedron with open grassed sections, trees for shade, and walking paths along the Kedron Brook bikeway. Perfect for socialisation and adventure walks.",
        suburb: "Kedron / Northgate",
      },
      {
        name: "Sandgate Foreshore",
        description: "Stunning bayside walking paths along Flinders Parade with ocean views, open grassed areas, and access to Shorncliffe Pier. Excellent for loose-leash walking practice in a stimulating environment.",
        suburb: "Sandgate / Shorncliffe",
      },
      {
        name: "7th Brigade Park",
        description: "A large off-leash dog park in Chermside with fenced areas, open space, and shade. Well-suited for socialisation exercises and real-world training in a busy urban setting.",
        suburb: "Chermside",
      },
      {
        name: "Boondall Wetlands",
        description: "An expansive natural reserve near our base in Boondall. Great for low-distraction walks, scent enrichment, and building your dog's confidence around natural environments.",
        suburb: "Boondall",
      },
    ],
  },
];

export default function LocalResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Local Dog-Friendly Resources in North Brisbane"
        description="Trusted local vets, pet shops, groomers, and dog-friendly parks recommended by Canine Confidence. Building a strong North Brisbane dog community."
        canonical="https://canineconfidence.com.au/local-resources"
        keywords={[
          "dog friendly Brisbane",
          "local vets North Brisbane",
          "pet shops Boondall",
          "dog groomers Brisbane",
          "dog parks North Brisbane",
          "dog friendly parks Brisbane",
        ]}
      />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Local <span className="text-primary-blue">Resources</span>
          </h1>
          <p className="text-xl text-medium-grey mb-4 max-w-2xl mx-auto">
            A curated guide to trusted local businesses and dog-friendly spots in North Brisbane — because raising a great dog takes a whole community.
          </p>
          <p className="text-base text-medium-grey max-w-2xl mx-auto">
            We only recommend businesses that share our values: genuine care for dogs, quality service, and a commitment to the animals in their care.
          </p>
        </div>
      </section>

      {/* Partnership Banner */}
      <section className="bg-primary-blue py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Are You a Local Business?</h2>
          <p className="text-blue-100 text-lg mb-0">
            We love connecting our clients with trusted local professionals. If you'd like to be featured here,{" "}
            <a href="/contact" className="text-white underline font-semibold hover:text-blue-200 transition-colors">
              get in touch
            </a>{" "}
            and let's build something great together.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${category.bgColour} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${category.colour}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-charcoal">{category.title}</h2>
                </div>

                {/* Entries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.entries.map((entry, index) => (
                    <Card
                      key={index}
                      className={`border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${
                        entry.placeholder ? "opacity-75 border-dashed" : ""
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-bold text-charcoal">{entry.name}</h3>
                          {entry.placeholder && (
                            <Badge variant="outline" className="text-xs text-gray-400 border-gray-300 shrink-0">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-medium-grey mb-3">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span>{entry.suburb}</span>
                        </div>
                        <p className="text-medium-grey text-sm leading-relaxed mb-4">{entry.description}</p>
                        {entry.website && (
                          <a
                            href={entry.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-primary-blue text-sm font-medium hover:underline"
                          >
                            Visit Website
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {entry.placeholder && !entry.website && (
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-primary-blue text-sm font-medium hover:underline"
                          >
                            Contact us to get listed
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Know a Great Local Business?
          </h2>
          <p className="text-lg text-medium-grey mb-8">
            If you've had a great experience with a vet, groomer, or pet shop in the area, we'd love to hear about them. Help us grow this resource for the North Brisbane dog community.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Recommend a Business
          </a>
        </div>
      </section>
    </div>
  );
}
