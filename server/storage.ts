import { 
  services, products, blogPosts, bookings, consultations, contactSubmissions, cartItems,
  type Service, type InsertService,
  type Product, type InsertProduct,
  type BlogPost, type InsertBlogPost,
  type Booking, type InsertBooking,
  type Consultation, type InsertConsultation,
  type ContactSubmission, type InsertContactSubmission,
  type CartItem, type InsertCartItem
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
}

export class MemStorage implements IStorage {
  private services: Map<number, Service>;
  private products: Map<number, Product>;
  private blogPosts: Map<number, BlogPost>;
  private bookings: Map<number, Booking>;
  private consultations: Map<number, Consultation>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private cartItems: Map<number, CartItem>;
  private currentServiceId: number;
  private currentProductId: number;
  private currentBlogPostId: number;
  private currentBookingId: number;
  private currentConsultationId: number;
  private currentContactSubmissionId: number;
  private currentCartItemId: number;

  constructor() {
    this.services = new Map();
    this.products = new Map();
    this.blogPosts = new Map();
    this.bookings = new Map();
    this.consultations = new Map();
    this.contactSubmissions = new Map();
    this.cartItems = new Map();
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentBlogPostId = 1;
    this.currentBookingId = 1;
    this.currentConsultationId = 1;
    this.currentContactSubmissionId = 1;
    this.currentCartItemId = 1;

    this.seedData();
  }

  private seedData() {
    // Seed services
    const serviceData: InsertService[] = [
      {
        name: "Behaviour Modification",
        description: "Address problem behaviours with science-based methods that create lasting positive change for reactive, anxious, or aggressive dogs.",
        duration: "90 minutes",
        location: "Your home or neutral venue",
        price: "From $150",
        category: "training",
        features: ["Science-based methods", "Personalized approach", "Ongoing support"]
      },
      {
        name: "Walk & Train Sessions",
        description: "Real-world training during walks to improve leash manners, recall, and social skills in everyday environments.",
        duration: "60 minutes",
        location: "Local parks & streets",
        price: "From $120",
        category: "training",
        features: ["Real-world training", "Leash manners", "Social skills"]
      },
      {
        name: "One-on-One Coaching",
        description: "Personalized training sessions focused on your specific goals and challenges with dedicated one-on-one attention.",
        duration: "75 minutes",
        location: "Your home",
        price: "From $140",
        category: "training",
        features: ["Personalized sessions", "One-on-one attention", "Goal-focused"]
      },
      {
        name: "Professional Walks",
        description: "Exercise and enrichment walks that maintain training progress while giving your dog physical and mental stimulation.",
        duration: "30-60 minutes",
        location: "Pick up from home",
        price: "From $45",
        category: "care",
        features: ["Exercise & enrichment", "Training maintenance", "Physical & mental stimulation"]
      },
      {
        name: "House Visits",
        description: "Comprehensive in-home training to address specific household behaviours and establish routines in your dog's environment.",
        duration: "90 minutes",
        location: "Your home",
        price: "From $160",
        category: "training",
        features: ["In-home training", "Household behaviours", "Routine establishment"]
      }
    ];

    serviceData.forEach(service => this.createService(service));

    // Seed products
    const productData: InsertProduct[] = [
      {
        name: "Training Leashes",
        description: "Professional-grade training leashes in various lengths for different training scenarios.",
        price: "50.00",
        priceRange: "$35 - $65",
        category: "equipment",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Training Balls",
        description: "Durable balls designed for fetch training and reward-based learning activities.",
        price: "20.00",
        priceRange: "$15 - $25",
        category: "toys",
        imageUrl: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Tug Toys",
        description: "Interactive tug toys perfect for building engagement and teaching impulse control.",
        price: "30.00",
        priceRange: "$20 - $40",
        category: "toys",
        imageUrl: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Training Collars",
        description: "Comfortable, adjustable collars designed specifically for training sessions.",
        price: "40.00",
        priceRange: "$25 - $55",
        category: "equipment",
        imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      }
    ];

    productData.forEach(product => this.createProduct(product));

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
}

export const storage = new MemStorage();
