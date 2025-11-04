import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Search } from "lucide-react";
import BlogCard from "@/components/ui/blog-card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { BlogPost } from "@shared/schema";
import { SEO } from "@/components/SEO";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const subscribeMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/subscribers", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our weekly training tips and updates.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/subscribers"] });
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "This email may already be subscribed.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate(email);
    }
  };

  // Get all unique tags from blog posts
  const allTags = blogPosts?.reduce((tags: string[], post) => {
    if (post.tags) {
      post.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, []) || [];

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === "" || 
      (post.tags && post.tags.includes(selectedTag));
    
    return matchesSearch && matchesTag;
  });

  const formatDate = (date: Date | null) => {
    if (!date) return "Recently";
    return new Date(date).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
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
      <SEO 
        title="Dog Training Advice and Tips"
        description="Expert dog training tips, guides, and insights from Canine Confidence. Learn to understand your dog better and build a stronger relationship through play-based training methods."
        canonical="/blog"
        keywords={[
          'dog training tips',
          'dog training advice Brisbane',
          'puppy training tips',
          'dog behaviour tips',
          'training guides',
          'dog training blog'
        ]}
      />
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            Free Training Advice & Tips
          </h1>
          <p className="text-xl text-medium-grey mb-8">
            Expert tips, guides, and insights to help you understand your dog better and build a stronger relationship together.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedTag === "" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag("")}
                className={selectedTag === "" ? "bg-primary-blue text-white" : ""}
              >
                All Topics
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={selectedTag === tag ? "bg-primary-blue text-white" : ""}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts && filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-medium-grey text-lg mb-4">
                {searchTerm || selectedTag ? "No articles found matching your criteria." : "No articles available yet."}
              </p>
              {(searchTerm || selectedTag) && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedTag("");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Training Tips Delivered
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for weekly training tips, success stories, and expert advice delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-charcoal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit"
              className="bg-white text-primary-blue hover:bg-gray-50 whitespace-nowrap"
              disabled={subscribeMutation.isPending}
              data-testid="button-newsletter-subscribe"
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-blue-100 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      {/* Featured Topics Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Popular Training Topics</h2>
            <p className="text-lg text-medium-grey">
              Explore our most popular training guides and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white p-6 text-center card-hover">
              <h3 className="font-semibold text-charcoal mb-2">Basic Commands</h3>
              <p className="text-medium-grey text-sm mb-4">
                Foundation training every dog should know
              </p>
              <Button variant="outline" size="sm">
                View Articles
              </Button>
            </Card>

            <Card className="bg-white p-6 text-center card-hover">
              <h3 className="font-semibold text-charcoal mb-2">Behaviour Issues</h3>
              <p className="text-medium-grey text-sm mb-4">
                Solutions for common behavioural problems
              </p>
              <Button variant="outline" size="sm">
                View Articles
              </Button>
            </Card>

            <Card className="bg-white p-6 text-center card-hover">
              <h3 className="font-semibold text-charcoal mb-2">Puppy Training</h3>
              <p className="text-medium-grey text-sm mb-4">
                Get your puppy started on the right path
              </p>
              <Button variant="outline" size="sm">
                View Articles
              </Button>
            </Card>

            <Card className="bg-white p-6 text-center card-hover">
              <h3 className="font-semibold text-charcoal mb-2">Advanced Training</h3>
              <p className="text-medium-grey text-sm mb-4">
                Take your dog's skills to the next level
              </p>
              <Button variant="outline" size="sm">
                View Articles
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
