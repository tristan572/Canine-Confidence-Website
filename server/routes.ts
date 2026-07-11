import path from "path";
import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertBookingSchema,
  insertConsultationSchema,
  insertContactSubmissionSchema,
  insertPackageSchema,
  insertSubscriberSchema
} from "@shared/schema";
import {
  sendBookingNotification,
  sendConsultationNotification,
  sendContactFormNotification
} from "./email";
import { requireAdminAuth } from "./adminAuth";
import { buildSitemapXml } from "./seo";

export async function registerRoutes(app: Express): Promise<Server> {
  // Services routes
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const service = await storage.getService(id);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service" });
    }
  });

  // Packages routes
  app.get("/api/packages", async (req, res) => {
    try {
      const category = req.query.category as string;
      let packages;
      if (category) {
        packages = await storage.getPackagesByCategory(category);
      } else {
        packages = await storage.getPackages();
      }
      res.json(packages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch packages" });
    }
  });

  app.get("/api/packages/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const packageData = await storage.getPackage(id);
      if (!packageData) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(packageData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch package" });
    }
  });

  // Blog posts routes
  // Blog slug redirects (301 permanent)
  app.get("/blog/1", (req, res) => res.redirect(301, "/blog/health-foundation-dog-training"));
  app.get("/blog/2", (req, res) => res.redirect(301, "/blog/lifestyle-fulfilling-your-dogs-mind"));
  app.get("/blog/3", (req, res) => res.redirect(301, "/blog/clear-communication-building-confidence"));
  app.get("/blog/4", (req, res) => res.redirect(301, "/blog/life-skills-obedience-that-works-everywhere"));
  app.get("/blog/5", (req, res) => res.redirect(301, "/blog/understanding-your-dogs-genetic-drives"));
  app.get("/blog/6", (req, res) => res.redirect(301, "/blog/creating-balance-complete-framework"));

  // Blog post by slug
  app.get("/api/blog/slug/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) return res.status(404).json({ message: "Blog post not found" });
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

    app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Bookings routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      // Send email notification
      try {
        await sendBookingNotification(booking);
      } catch (emailError) {
        console.error('Failed to send booking email notification:', emailError);
        // Don't fail the request if email fails
      }
      
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", requireAdminAuth, async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  // Consultations routes
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      
      // Send email notification
      try {
        await sendConsultationNotification(consultation);
      } catch (emailError) {
        console.error('Failed to send consultation email notification:', emailError);
        // Don't fail the request if email fails
      }
      
      res.status(201).json(consultation);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create consultation request" });
      }
    }
  });

  // Contact submissions routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        await sendContactFormNotification(submission);
      } catch (emailError) {
        console.error('Failed to send contact form email notification:', emailError);
        // Don't fail the request if email fails
      }
      
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Sitemap (built from storage each request, like the RSS feed below, so new
  // blog posts and local pages don't need a hand-maintained static XML file)
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.set("Content-Type", "application/xml; charset=utf-8");
      res.send(buildSitemapXml(posts.map((post) => ({ slug: post.slug }))));
    } catch (error) {
      res.status(500).send("Failed to generate sitemap");
    }
  });

  // RSS Feed
  app.get("/rss.xml", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      const siteUrl = "https://www.canineconfidence.com.au";

      const items = posts.map(post => {
        const pubDate = post.publishedAt ? new Date(post.publishedAt).toUTCString() : new Date().toUTCString();
        const postUrl = `${siteUrl}/blog/${post.slug}`;
        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      ${post.imageUrl ? `<enclosure url="${siteUrl}${post.imageUrl}" type="image/png" length="0"/>` : ""}
    </item>`;
      }).join("");

      const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Canine Confidence Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Dog training tips, behaviour insights, and practical advice from Canine Confidence.</description>
    <language>en-au</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

      res.set("Content-Type", "application/rss+xml; charset=utf-8");
      res.send(rss);
    } catch (error) {
      res.status(500).send("Failed to generate RSS feed");
    }
  });

  // Newsletter subscribers routes
  app.post("/api/subscribers", async (req, res) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);

      // Add subscriber to MailerLite
      const mailerLiteApiKey = process.env.MAILERLITE_API_KEY;
      const mailerLiteGroupId = process.env.MAILERLITE_GROUP_ID;

      if (mailerLiteApiKey && mailerLiteGroupId) {
        const mlResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${mailerLiteApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: validatedData.email,
            groups: [mailerLiteGroupId],
          }),
        });

        if (!mlResponse.ok) {
          const errorData = await mlResponse.json() as { message?: string };
          // 409 means already subscribed — treat as success
          if (mlResponse.status !== 409) {
            throw new Error(errorData.message || "Failed to add to mailing list");
          }
        }
      }

      const subscriber = await storage.createSubscriber(validatedData);
      res.status(201).json(subscriber);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to subscribe to newsletter" });
      }
    }
  });

  app.get("/api/subscribers", requireAdminAuth, async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscribers" });
    }
  });

  // Testimonials routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Lead magnet landing page
  app.get("/rescuedogguide", (_req, res) => {
    res.sendFile(path.resolve(import.meta.dirname, "rescue-dog-guide.html"));
  });
  
const httpServer = createServer(app);
  return httpServer;
}
