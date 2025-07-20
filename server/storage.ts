import { 
  services, products, packages, blogPosts, bookings, consultations, contactSubmissions, cartItems, testimonials,
  type Service, type InsertService,
  type Product, type InsertProduct,
  type Package, type InsertPackage,
  type BlogPost, type InsertBlogPost,
  type Booking, type InsertBooking,
  type Consultation, type InsertConsultation,
  type ContactSubmission, type InsertContactSubmission,
  type CartItem, type InsertCartItem,
  type Testimonial, type InsertTestimonial
} from "@shared/schema";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCategory(category: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Packages
  getPackages(): Promise<Package[]>;
  getPackage(id: number): Promise<Package | undefined>;
  getPackagesByCategory(category: string): Promise<Package[]>;
  createPackage(packageData: InsertPackage): Promise<Package>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Bookings
  getBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;

  // Consultations
  getConsultations(): Promise<Consultation[]>;
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;

  // Contact Submissions
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;

  // Cart Items
  getCartItems(sessionId: string): Promise<CartItem[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<boolean>;
  clearCart(sessionId: string): Promise<boolean>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private services: Map<number, Service>;
  private products: Map<number, Product>;
  private packages: Map<number, Package>;
  private blogPosts: Map<number, BlogPost>;
  private bookings: Map<number, Booking>;
  private consultations: Map<number, Consultation>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private cartItems: Map<number, CartItem>;
  private testimonials: Map<number, Testimonial>;
  private currentServiceId: number;
  private currentProductId: number;
  private currentPackageId: number;
  private currentBlogPostId: number;
  private currentBookingId: number;
  private currentConsultationId: number;
  private currentContactSubmissionId: number;
  private currentCartItemId: number;
  private currentTestimonialId: number;

  constructor() {
    this.services = new Map();
    this.products = new Map();
    this.packages = new Map();
    this.blogPosts = new Map();
    this.bookings = new Map();
    this.consultations = new Map();
    this.contactSubmissions = new Map();
    this.cartItems = new Map();
    this.testimonials = new Map();
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentPackageId = 1;
    this.currentBlogPostId = 1;
    this.currentBookingId = 1;
    this.currentConsultationId = 1;
    this.currentContactSubmissionId = 1;
    this.currentCartItemId = 1;
    this.currentTestimonialId = 1;

    this.seedData();
  }

  private seedData() {
    // Seed services
    const serviceData: InsertService[] = [
      {
        name: "Initial Assessment",
        description: "Get to know your dog and understand their unique needs.  We'll assess behaviour and temperament and then create a personalised plan that focuses on true genetic fulfilment, confidence and bond building, communication clarity and empowering you with skills to maintain lasting behavioural change",
        duration: "60 minutes",
        location: "In-home assessment",
        price: "$90",
        category: "assessment",
        features: ["Comprehensive evaluation", "Personalised training plan", "Written recommendations", "Ongoing support guidance"]
      },

      {
        name: "One-on-One Coaching",
        description: "Intensive personalised coaching sessions that instruct owners how to train and live with their dog along every step of their journey together. Strengthen the bond between you and your dog using modern techniques based in play and positive engagement to achieve lasting behavioural changes.",
        duration: "60 minutes",
        location: "In-home or suitable environment",
        price: "$120",
        category: "training",
        features: ["Individual, private sessions", "Customised training", "In-depth understanding of methods", "Modern techniques", "Lasting results", "Ongoing phone support"]
      },
      {
        name: "In-Home Obedience",
        description: "Basic obedience training, completed by the trainer, in your home environment. Short, focused sessions that teach essential commands while keeping your dog engaged through play and positive interaction.",
        duration: "30 minutes",
        location: "In-home training",
        price: "$60",
        category: "training",
        features: ["Home environment", "Essential commands", "Play-based learning", "Quick progress"]
      },
      {
        name: "Walk and Train",
        description: "Walk and Train is a specialised service where we visit your home, pick up your dog, and reinforce general obedience skills and loose lead walking while on a stroll. This service is perfect for transitioning your dog's established indoor training to real-world environments, ensuring reliable responses outside the home. Start with our in-home training sessions, then elevate your dog's skills with our Walk and Train experience for lasting results.",
        duration: "40 minutes",
        location: "Home pickup and local area",
        price: "$60",
        category: "training",
        features: ["Home pickup service", "General obedience reinforcement", "Loose lead walking practice", "Real-world environment training", "Transition from indoor to outdoor skills"]
      },
      {
        name: "Local Walk",
        description: "Local Walk is your convenient, budget-friendly dog walking solution. Our professional dog handlers come directly to your home, providing your pet with essential exercise, stimulation, and fun right from your doorstep. Whether you have a busy schedule or just need a helping hand, Local Walk ensures your dog enjoys a healthy stroll, plenty of sniffing, and attentive care, making your life simpler while your dog stays happy and active.",
        duration: "30 minutes",
        location: "From client's home",
        price: "$45",
        category: "walking",
        imageUrl: "/attached_assets/image_1750049687824.png",
        features: ["Enrichment activities", "Fun and play", "Affection and care", "Photo or video updates"]
      },
      {
        name: "Adventure Walk",
        description: "Give your dog the ultimate outing with our Adventure Walk service! We'll pick up your furry friend and whisk them away to a local forest, park, or beach for an hour packed with excitement. Your dog will enjoy running, sniffing, playing, swimming, and lots of loving attention. Adventure Walks offer maximum enrichment and fun, leaving your pet happy, exercised, and thoroughly fulfilled!",
        duration: "60 minutes", 
        location: "Local parks, forests, or beaches",
        price: "$80",
        category: "walking",
        features: ["Collection from home", "Adventure locations", "Video updates", "Enrichment activities", "Fun and play", "Affection and care"]
      },
      {
        name: "Virtual Consultation",
        description: "One-hour video consultation perfect for troubleshooting specific issues, follow-up support, or getting started with training guidance from the comfort of your home.",
        duration: "60 minutes",
        location: "Video call (Zoom)",
        price: "$100",
        category: "consultation",
        features: ["Convenient video call", "Problem solving", "Follow-up support", "Training guidance"]
      }
    ];

    serviceData.forEach(service => this.createService(service));

    // Seed products
    const productData: InsertProduct[] = [
      {
        name: "Long Lines",
        description: "Essential for recall training and giving your dog freedom while maintaining control. Perfect for building confidence in open spaces.",
        price: "45.00",
        priceRange: "$35 - $55",
        category: "equipment",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Standard Leash",
        description: "High-quality everyday leash designed for comfortable walks and basic training exercises. Durable and reliable for daily use.",
        price: "30.00",
        priceRange: "$25 - $35",
        category: "equipment",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Training Collars",
        description: "Comfortable, adjustable collars designed for training sessions. Safe and effective for teaching proper leash manners.",
        price: "40.00",
        priceRange: "$30 - $50",
        category: "equipment",
        imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Training Balls",
        description: "Durable balls designed for fetch training and play-based learning. Great for building engagement and reward-based training.",
        price: "20.00",
        priceRange: "$15 - $25",
        category: "toys",
        imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Tug Toys",
        description: "Interactive tug toys perfect for building engagement and teaching impulse control through play. Essential for modern training methods.",
        price: "25.00",
        priceRange: "$20 - $35",
        category: "toys",
        imageUrl: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Training Clickers",
        description: "Precise timing tools for mark-and-reward training. Help create clear communication between you and your dog.",
        price: "12.00",
        priceRange: "$8 - $15",
        category: "equipment",
        imageUrl: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Enrichment Toys",
        description: "Mental stimulation toys that fulfill your dog's genetic needs. Perfect for keeping active minds engaged and satisfied.",
        price: "35.00",
        priceRange: "$25 - $45",
        category: "toys",
        imageUrl: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      }
    ];

    productData.forEach(product => this.createProduct(product));

    // Seed packages
    const packageData: InsertPackage[] = [
      {
        name: "Puppy Foundation Package",
        description: "Complete early development program only for puppies, 8-20 weeks. Have personalised advice delivered by an expert in-home. Program is developed to build confidence, learning and play foundations, social skills, and basic manners during the critical learning period.",
        price: "$550",
        originalPrice: "$650",
        duration: "6 weeks",
        sessions: 6,
        category: "puppy",
        imageUrl: "/attached_assets/image_1750048904991.png",
        features: [
          "6 x in-home private sessions",
          "Socialisation protocols",
          "House training guidance and set up",
          "Basic commands (sit, stay, come etc)",
          "Foundations of learning and playing",
          "Take-home training materials",
          "Plus much more"
        ],
        isPopular: true
      },
      // Hidden packages - pending implementation
      // {
      //   name: "Behaviour Transformation Package",
      //   description: "Comprehensive behaviour modification program for dogs with challenging behaviours. Via one-on-one coaching sessions we can address many problem behaviours including but not limited to anxiety, over-excitement, destructiveness, barking, lead pulling, defiance and more. This program is our flagship program. Turning dogs from 'behaving badly' to the perfect companion!",
      //   price: "$990",
      //   originalPrice: "$1150",
      //   duration: "8 weeks", 
      //   sessions: 8,
      //   category: "behaviour",
      //   imageUrl: "/attached_assets/image_1750048973571.png",
      //   features: [
      //     "8 x 1-hour sessions",
      //     "Detailed behaviour assessment",
      //     "Customised training plan",
      //     "Management strategies",
      //     "Behavioural modification",
      //     "Ongoing support between sessions",
      //     "Follow-up check-ins and more"
      //   ],
      //   isPopular: true
      // },
      // {
      //   name: "Foundational Obedience Program",
      //   description: "Build your dogs foundational obedience skills to have a well mannered, balanced and fulfilled dog. Your bond with your dog will be the envy of your neighbourhood.",
      //   price: "$990",
      //   originalPrice: "$1150",
      //   duration: "8 weeks",
      //   sessions: 8,
      //   category: "obedience",
      //   imageUrl: "/attached_assets/image_1750049053389.png",
      //   features: [
      //     "8 x private 1-hour sessions",
      //     "Training plan and homework guide",
      //     "Skills - sit, down, come, place, loose lead + more",
      //     "Play development",
      //     "Impulse control",
      //     "Confidence building + more"
      //   ],
      //   isPopular: false
      // },
      // {
      //   name: "Reactivity Rehabilitation Program",
      //   description: "Comprehensive program for dogs showing reactivity towards other dogs, people, or environmental triggers. This package combines trainer only sessions and owner coaching sessions for life long skill retention but also efficient and effective rehabilitation.",
      //   price: "$1100",
      //   originalPrice: "$1250",
      //   duration: "4 weeks",
      //   sessions: 12,
      //   category: "behaviour",
      //   imageUrl: "/attached_assets/image_1750049297197.png",
      //   features: [
      //     "Training plan and homework supplied",
      //     "Foundations and communication",
      //     "Management techniques",
      //     "Confidence building and genetic fulfilment",
      //     "Impulse control",
      //     "Counter-conditioning",
      //     "Safe socialisation strategies",
      //     "Lifetime support guarantee"
      //   ],
      //   isPopular: false
      // },
      {
        name: "5 x One-on-One Coaching",
        description: "Unlock consistent progress and benefit from five personalised, one-on-one coaching sessions tailored to your unique goals, with ongoing feedback and dedicated support throughout your journey. Perfect for those seeking steady improvement, this package delivers exceptional value and ensures effective learning for both you and your dog.",
        price: "$600",
        originalPrice: "$700",
        duration: "5 sessions",
        sessions: 5,
        category: "behaviour,obedience",
        imageUrl: "/attached_assets/image_1750049391709.png",
        features: [
          "5 x individual private sessions",
          "Customised training approach",
          "In-depth understanding of methods",
          "Modern techniques focus",
          "Lasting results guarantee",
          "Ongoing phone support between sessions"
        ],
        isPopular: false
      },

      {
        name: "5 x In-Home Obedience",
        description: "Five focused obedience sessions completed by our trainer in your home environment, teaching essential commands through play-based learning. Each session is tailored to your dog's unique needs and can take place while you are at work, ensuring efficient, stress-free training in a familiar environment for optimal results.",
        price: "$340",
        originalPrice: "$350",
        duration: "5 sessions",
        sessions: 5,
        category: "obedience",
        imageUrl: "/attached_assets/image_1750049431855.png",
        features: [
          "5 x 30-minute home sessions",
          "Essential commands training",
          "Play-based learning approach",
          "Home environment comfort",
          "Quick progress tracking",
          "Trainer-led instruction"
        ],
        isPopular: false
      },
      {
        name: "5 x Walk and Train",
        description: "Our Five Walk and Trains Package offers practical dog training with convenience. We pick up your dog from home and reinforce obedience and loose lead walking skills during real-world strolls. Ideal for progressing from in-home training, this package ensures confidence building, practical application and lasting results.",
        price: "$340",
        originalPrice: "$350",
        duration: "5 sessions",
        sessions: 5,
        category: "obedience",
        imageUrl: "/attached_assets/image_1750049481697.png",
        features: [
          "5 x 40-minute sessions",
          "Home pickup service included",
          "General obedience reinforcement",
          "Loose lead walking practice",
          "Real-world environment training",
          "Indoor to outdoor skill transition"
        ],
        isPopular: false
      },
      {
        name: "5 x Adventure Walks",
        description: "Give your dog the ultimate outing with our Adventure Walk service! We'll pick up your furry friend and whisk them away to a local forest, park, or beach for an hour packed with excitement. Your dog will enjoy running, sniffing, playing, swimming, and lots of loving attention. Adventure Walks offer maximum enrichment and fun, leaving your pet happy, exercised, and thoroughly fulfilled!",
        price: "$375",
        originalPrice: "$400",
        duration: "5 sessions",
        sessions: 5,
        category: "adventure",
        imageUrl: "/attached_assets/image_1750049520029.png",
        features: [
          "5 x 60-minute adventure sessions",
          "Collection from home",
          "Adventure locations variety",
          "Video updates provided",
          "Enrichment activities focus",
          "Fun, play, and affection"
        ],
        isPopular: false
      },
      {
        name: "5 x Local Walks",
        description: "Local Walk is your convenient, budget-friendly dog walking solution. Our professional dog handlers come directly to your home, providing your pet with essential exercise, stimulation, and fun right from your doorstep. Whether you have a busy schedule or just need a helping hand, Local Walk ensures your dog stays happy and active.",
        price: "$215",
        originalPrice: "$225",
        duration: "5 sessions",
        sessions: 5,
        category: "adventure",
        imageUrl: "/attached_assets/image_1750049687824.png",
        features: [
          "5 x 30-minute local walks",
          "Direct from your home",
          "Enrichment activities included",
          "Fun and play focus",
          "Affection and care provided",
          "Photo or video updates"
        ],
        isPopular: false
      }
    ];

    packageData.forEach(pkg => this.createPackage(pkg));

    // Seed blog posts
    const blogData: InsertBlogPost[] = [
      {
        title: "5 Essential Commands Every Dog Should Know",
        excerpt: "Learn the fundamental commands that form the foundation of good behaviour and create a strong communication system with your dog.",
        content: "Training your dog is one of the most rewarding experiences you can share together...",
        imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "5 min read",
        tags: ["training", "commands", "basics"]
      },
      {
        title: "Understanding Your Dog's Body Language",
        excerpt: "Decode the signals your dog is sending you and learn to communicate more effectively through understanding their natural expressions.",
        content: "Dogs communicate primarily through body language...",
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "7 min read",
        tags: ["body language", "communication", "behavior"]
      },
      {
        title: "Mental Enrichment Ideas for Active Dogs",
        excerpt: "Keep your dog's mind stimulated with creative activities that challenge their intelligence and prevent destructive behaviours.",
        content: "Mental stimulation is just as important as physical exercise...",
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "6 min read",
        tags: ["enrichment", "mental stimulation", "activities"]
      }
    ];

    blogData.forEach(post => this.createBlogPost(post));

    // Seed testimonials
    const testimonialData: InsertTestimonial[] = [
      {
        clientName: "Steph and Jonathan A.",
        dogName: null,
        rating: 5,
        reviewText: "We reached out to Tristan for help training our 1yo puppy who is displaying some behaviour problems. Tristan was extremely knowledgeable, patient and understanding. He spent the time to talk us through all of our concerns with a no-judgement attitude. He has also taken the time to create a training plan for us to implement. Thank you Tristan! Looking forward to the next session.",
        service: "Training",
        location: null
      },
      {
        clientName: "Caitlyn F.",
        dogName: "Koda",
        rating: 5,
        reviewText: "He was great, very friendly. He helped us a lot with training and was great with koda. Can't wait for our future sessions.",
        service: "Training",
        location: null
      },
      {
        clientName: "Rorie N.",
        dogName: null,
        rating: 5,
        reviewText: "Great advise and instant results",
        service: "Training",
        location: null
      },
      {
        clientName: "Prue B.",
        dogName: null,
        rating: 5,
        reviewText: "Very professional and after only one session my dogs pulling on lead has improved! Highly recommend",
        service: "Dog walks",
        location: null
      },
      {
        clientName: "Charlotte S.",
        dogName: null,
        rating: 5,
        reviewText: "Thank you to Tristian for helping us get started on dog training at short notice for our new puppy. Tristian is very knowledgeable on all aspects of dog training and has great communication. We found the training session valuable and look foward to putting what we have learnt into practice. We highly recommend Tristian if you are looking for a dog trainer.",
        service: "Training",
        location: null
      }
    ];

    testimonialData.forEach(testimonial => this.createTestimonial(testimonial));
  }

  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(service: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const newService: Service = { ...service, id };
    this.services.set(id, newService);
    return newService;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.category === category);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const newProduct: Product = { ...product, id };
    this.products.set(id, newProduct);
    return newProduct;
  }

  // Packages
  async getPackages(): Promise<Package[]> {
    return Array.from(this.packages.values());
  }

  async getPackage(id: number): Promise<Package | undefined> {
    return this.packages.get(id);
  }

  async getPackagesByCategory(category: string): Promise<Package[]> {
    return Array.from(this.packages.values()).filter(pkg => pkg.category === category);
  }

  async createPackage(packageData: InsertPackage): Promise<Package> {
    const id = this.currentPackageId++;
    const newPackage: Package = { ...packageData, id };
    this.packages.set(id, newPackage);
    return newPackage;
  }

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => {
      const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return dateB - dateA;
    });
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const newPost: BlogPost = { 
      ...post, 
      id, 
      publishedAt: new Date() 
    };
    this.blogPosts.set(id, newPost);
    return newPost;
  }

  // Bookings
  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const newBooking: Booking = { 
      ...booking, 
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  // Consultations
  async getConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values());
  }

  async createConsultation(consultation: InsertConsultation): Promise<Consultation> {
    const id = this.currentConsultationId++;
    const newConsultation: Consultation = { 
      ...consultation, 
      id, 
      status: "pending",
      createdAt: new Date()
    };
    this.consultations.set(id, newConsultation);
    return newConsultation;
  }

  // Contact Submissions
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      status: "new",
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  // Cart Items
  async getCartItems(sessionId: string): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(item => item.sessionId === sessionId);
  }

  async addToCart(item: InsertCartItem): Promise<CartItem> {
    const id = this.currentCartItemId++;
    const newItem: CartItem = { 
      ...item, 
      id, 
      createdAt: new Date()
    };
    this.cartItems.set(id, newItem);
    return newItem;
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (item) {
      item.quantity = quantity;
      this.cartItems.set(id, item);
      return item;
    }
    return undefined;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(sessionId: string): Promise<boolean> {
    const items = await this.getCartItems(sessionId);
    items.forEach(item => this.cartItems.delete(item.id));
    return true;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isActive);
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial: Testimonial = {
      ...testimonial,
      id,
      createdAt: new Date(),
      isActive: true
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemStorage();
