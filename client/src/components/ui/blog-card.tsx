import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
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
    <Card className="h-full overflow-hidden rounded-2xl border border-border bg-white card-hover">
      {post.imageUrl && (
        <div className="w-full bg-sand overflow-hidden" style={{ aspectRatio: '400/192' }}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
            width={400}
            height={192}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center text-sm text-medium-grey mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-1" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-extrabold leading-snug text-charcoal mb-3">{post.title}</h3>
        <p className="text-medium-grey mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`}>
          <Button variant="ghost" className="text-primary hover:text-sky-deep hover:bg-transparent p-0 font-bold">
            Read More →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
