import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (date: Date | null) => {
    if (!date) return "Recently";
    return new Date(date).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="bg-light-grey card-hover border border-gray-100">
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-medium-grey mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-charcoal mb-3">{post.title}</h3>
        <p className="text-medium-grey mb-4">{post.excerpt}</p>
        <Button variant="ghost" className="text-primary-blue hover:text-secondary-blue p-0 font-medium">
          Read More →
        </Button>
      </CardContent>
    </Card>
  );
}
