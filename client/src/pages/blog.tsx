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
import { StaticSEO } from "@/components/SEO";
import { BLOG_TOPICS, postInTopic } from "@/lib/blog-topics";

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
        description: "You'll receive my weekly training tips and updates.",
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

  // Only offer topics that have at least one post.
  const topics = BLOG_TOPICS.map((t) => t.name).filter((name) =>
    blogPosts?.some((post) => postInTopic(post.tags, name)),
  );

  // Filter posts based on search term and selected tag
  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === "" || postInTopic(post.tags, selectedTag);
    
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

  return (
    <div className="min-h-screen">
      <StaticSEO
        path="/blog"
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-charcoal mb-6">
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
          <div className="flex flex-col gap-5">
            {/* Search */}
            <div className="relative w-full shrink-0 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Topic Filter */}
            <div className="flex min-w-0 flex-wrap gap-2" role="group" aria-label="Filter by topic">
              {["", ...topics].map((topic) => (
                <button
                  key={topic || "all"}
                  type="button"
                  onClick={() => setSelectedTag(topic)}
                  aria-pressed={selectedTag === topic}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    selectedTag === topic
                      ? "border-navy bg-navy text-white"
                      : "border-navy/15 bg-white text-charcoal hover:border-navy/40"
                  }`}
                >
                  {topic || "All topics"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPosts && filteredPosts.length > 0 ? (
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
      <section className="mx-2 my-12 overflow-hidden rounded-[28px] sm:mx-4 lg:mx-6 lg:rounded-[32px] py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Get Training Tips Delivered
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get new blog posts delivered straight to your inbox. Training tips, dog behaviour insights, and practical advice — free, no spam.
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
              className="whitespace-nowrap"
              disabled={subscribeMutation.isPending}
              data-testid="button-newsletter-subscribe"
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="text-white/80 text-sm mt-4">
            No spam, unsubscribe anytime. I respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
