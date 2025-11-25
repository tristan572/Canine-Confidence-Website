import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@shared/schema";
import ReactMarkdown from 'react-markdown';

export default function BlogDetailPage() {
  const [match, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : null;

  const { data: blogPost, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["/api/blog", postId],
    queryFn: async () => {
      if (!postId) throw new Error("Invalid post ID");
      const response = await fetch(`/api/blog/${postId}`);
      if (!response.ok) throw new Error("Failed to fetch blog post");
      return response.json();
    },
    enabled: !!postId,
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-full mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded w-full mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-4">Blog Post Not Found</h1>
          <p className="text-medium-grey mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 p-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-charcoal mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center text-medium-grey mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(blogPost.publishedAt)}</span>
              <span className="mx-3">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{blogPost.readTime}</span>
            </div>

            {/* Tags */}
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blogPost.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-light-blue text-primary-blue">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Featured Image */}
            {blogPost.imageUrl && (
              <div className="w-full mb-8" style={{ aspectRatio: '800/384' }}>
                <img 
                  src={blogPost.imageUrl} 
                  alt={blogPost.title}
                  className="w-full h-full object-cover rounded-xl"
                  width={800}
                  height={384}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            {/* Excerpt */}
            <div className="text-xl text-medium-grey leading-relaxed mb-8 p-6 bg-light-grey rounded-xl">
              {blogPost.excerpt}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-charcoal leading-relaxed space-y-6">
              <ReactMarkdown 
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-charcoal mb-6 mt-12 first:mt-0">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold text-charcoal mb-4 mt-10">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold text-charcoal mb-3 mt-8">{children}</h3>,
                  p: ({children}) => <p className="text-medium-grey leading-relaxed mb-6">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside space-y-2 mb-6 text-medium-grey">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-6 text-medium-grey">{children}</ol>,
                  li: ({children}) => <li className="leading-relaxed">{children}</li>,
                  table: ({children}) => (
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full border-collapse border border-gray-200 rounded-lg">
                        {children}
                      </table>
                    </div>
                  ),
                  th: ({children}) => <th className="border border-gray-200 bg-light-grey px-4 py-3 text-left font-semibold text-charcoal">{children}</th>,
                  td: ({children}) => <td className="border border-gray-200 px-4 py-3 text-medium-grey">{children}</td>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-primary-blue pl-6 py-2 mb-6 bg-light-blue/20 rounded-r-lg">
                      <div className="text-charcoal font-medium">{children}</div>
                    </blockquote>
                  ),
                  strong: ({children}) => <strong className="font-semibold text-charcoal">{children}</strong>,
                  em: ({children}) => <em className="italic text-charcoal">{children}</em>,
                }}
              >
                {blogPost.content}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Blog Posts
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button>
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}