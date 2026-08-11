export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
}

// Shared by the server's raw HTML response and route-keyed client SEO.
// Static metadata must be edited here so hydration cannot replace it with
// different title or description copy.
export const STATIC_META: Record<string, PageMeta> = {
  "/": {
    title: "Dog Training North Brisbane | Canine Confidence",
    description:
      "Dog training on Brisbane's Northside. I help owners build calmer homes and stronger bonds using play, clarity and practical coaching. Free 15-min consult.",
    canonicalPath: "",
  },
  "/puppy": {
    title: "Puppy Training North Brisbane | The Confident Start Program",
    description:
      "Six private in-home puppy training sessions for $549. Build confidence, communication and practical life skills without an assessment first.",
    canonicalPath: "/puppy",
  },
  "/behaviour-obedience": {
    title: "Dog Behaviour and Obedience North Brisbane | Canine Confidence",
    description:
      "From everyday obedience to complex reactivity, every new adult dog starts with a $99 assessment and a clear training plan.",
    canonicalPath: "/behaviour-obedience",
  },
  "/walking-adventure": {
    title: "Dog Walking and Adventure Training North Brisbane",
    description:
      "Trainer-led walks, adventure outings and real-world reliability programs for North Brisbane dogs. New clients start with a $99 assessment.",
    canonicalPath: "/walking-adventure",
  },
  "/services": {
    title: "Dog Training Services North Brisbane | Canine Confidence",
    description:
      "Explore puppy training, behaviour and obedience support, plus walking and adventure services from Canine Confidence in North Brisbane.",
    canonicalPath: "/services",
  },
  "/packages": {
    title: "Dog Training Programs and Packages | Canine Confidence",
    description:
      "Find the Canine Confidence training program that fits your dog, from puppy coaching and behaviour support to walking and adventure services.",
    canonicalPath: "/packages",
  },
  "/method": {
    title: "My Dog Training Method | Canine Confidence",
    description:
      "How Canine Confidence combines clear communication, play, genetic fulfilment and real-world practice to create lasting dog training results.",
    canonicalPath: "/method",
  },
  "/reviews": {
    title: "Dog Training Reviews North Brisbane | Canine Confidence",
    description:
      "Read what North Brisbane dog owners say about working with Canine Confidence and see verified five-star review sources.",
    canonicalPath: "/reviews",
  },
  "/blog": {
    title: "Dog Training Tips & Advice | Canine Confidence",
    description:
      "Expert dog training tips, guides, and insights from Canine Confidence. Learn to understand your dog better and build a stronger relationship through play-based training methods.",
    canonicalPath: "/blog",
  },
  "/about": {
    title: "About Tristan Pearson | Canine Confidence Dog Training",
    description:
      "Meet Tristan, North Brisbane's NDTF certified dog trainer. From redundancy in 2020 to certification in 2022, discover the story behind Canine Confidence's unique play-based training approach.",
    canonicalPath: "/about",
  },
  "/contact": {
    title: "Contact Canine Confidence | North Brisbane Dog Trainer",
    description:
      "Got a dog that pulls, jumps, or won't come back? Let's talk. Book a free 15-minute consult with Canine Confidence. Your local North Brisbane dog trainer.",
    canonicalPath: "/contact",
  },
  "/faq": {
    title: "Frequently Asked Questions | Canine Confidence Dog Training Brisbane",
    description:
      "Honest answers to the questions most people have before booking a dog training session with Canine Confidence in North Brisbane.",
    canonicalPath: "/faq",
  },
  "/dog-training-chermside": {
    title: "Chermside Dog Training | Canine Confidence",
    description:
      "Professional dog training in Chermside, Kedron & Stafford Heights. Urban dog training for apartment living, elevator etiquette, and real-world proofing at 7th Brigade Park.",
    canonicalPath: "/dog-training-chermside",
  },
  "/dog-training-sandgate": {
    title: "Dog Training Sandgate & Shorncliffe | Canine Confidence",
    description:
      "Dog training in Sandgate, Shorncliffe & Brighton — foreshore recall, cafe manners, and loose-leash walking. Local trainer, real results on the Northside.",
    canonicalPath: "/dog-training-sandgate",
  },
  "/dog-training-northgate": {
    title: "Northgate Dog Training | Canine Confidence",
    description:
      "Professional dog training in Northgate, Nundah & Kalinga. Walk & Train at Kalinga Park, 1-on-1 coaching sessions. Expert leash reactivity rehabilitation and loose-leash training.",
    canonicalPath: "/dog-training-northgate",
  },
  "/dog-training-aspley": {
    title: "Dog Training Aspley | Canine Confidence",
    description:
      "Personalised dog training in Aspley, Carseldine and Bridgeman Downs. In-home coaching and local training around Marchant Park and everyday distractions.",
    canonicalPath: "/dog-training-aspley",
  },
  "/dog-training-ascot": {
    title: "Dog Training Ascot | Canine Confidence",
    description:
      "Personalised dog training in Ascot, Hamilton and Hendra. In-home coaching and local training for calm walks, cafe manners and everyday city distractions.",
    canonicalPath: "/dog-training-ascot",
  },
  "/local-resources": {
    title: "Local Dog-Friendly Resources in North Brisbane | Canine Confidence",
    description:
      "Trusted local vets, pet shops, groomers, and dog-friendly parks recommended by Canine Confidence. Building a strong North Brisbane dog community.",
    canonicalPath: "/local-resources",
  },
  "/privacy": {
    title: "Privacy Policy | Canine Confidence",
    description:
      "How Canine Confidence collects, uses, and protects your personal information.",
    canonicalPath: "/privacy",
  },
  "/terms": {
    title: "Terms & Conditions | Canine Confidence",
    description:
      "Terms and conditions for dog training services provided by Canine Confidence, North Brisbane.",
    canonicalPath: "/terms",
  },
  "/admin": {
    title: "Website Management | Canine Confidence",
    description: "Internal website management tools.",
    canonicalPath: "/admin",
    noindex: true,
  },
};
