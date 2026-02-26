import { 
  services, products, packages, blogPosts, bookings, consultations, contactSubmissions, cartItems, testimonials, subscribers,
  type Service, type InsertService,
  type Product, type InsertProduct,
  type Package, type InsertPackage,
  type BlogPost, type InsertBlogPost,
  type Booking, type InsertBooking,
  type Consultation, type InsertConsultation,
  type ContactSubmission, type InsertContactSubmission,
  type CartItem, type InsertCartItem,
  type Testimonial, type InsertTestimonial,
  type Subscriber, type InsertSubscriber
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

  // Subscribers
  getSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
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
  private subscribers: Map<number, Subscriber>;
  private currentServiceId: number;
  private currentProductId: number;
  private currentPackageId: number;
  private currentBlogPostId: number;
  private currentBookingId: number;
  private currentConsultationId: number;
  private currentContactSubmissionId: number;
  private currentCartItemId: number;
  private currentTestimonialId: number;
  private currentSubscriberId: number;

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
    this.subscribers = new Map();
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentPackageId = 1;
    this.currentBlogPostId = 1;
    this.currentBookingId = 1;
    this.currentConsultationId = 1;
    this.currentContactSubmissionId = 1;
    this.currentCartItemId = 1;
    this.currentTestimonialId = 1;
    this.currentSubscriberId = 1;

    this.seedData();
  }

  private seedData() {
    // Seed services
    const serviceData: InsertService[] = [
      {
        name: "Initial Canine Success Assessment",
        description: "**Stop Guessing, Start Training**\n\nFeeling confused about where to start? Have you tried standard training with limited success? This session is the crucial first step to creating lasting, positive change by diagnosing the root cause of your dog's behaviour, not just treating the symptoms.\n\n**Perfect for:** All new clients, whether you're starting an obedience program, working through a specific challenge (like reactivity, digging, or anxiety), or just looking to build a deeper bond with your dog.",
        duration: "60 minutes",
        location: "In-home assessment",
        price: "$90",
        category: "assessment",
        imageUrl: "/attached_assets/c75d23458f22c6f788d64af16f9d89d3_1760359837260_opt.webp",
        features: ["A full assessment of your dog's unique temperament, genetics, and needs", "An in-depth, personalised training roadmap outlining the clear steps needed to reach your goals", "Immediate clarity on communication and a few simple, actionable exercises you can start today", "A low-commitment entry to our training system, designed to save you time and money"]
      },

      {
        name: "One-on-One Private Coaching",
        description: "**The Ultimate in Convenience and Results**\n\nThis is fully personalised dog training brought directly to you, held either in your home (where most problems happen) or at a public location relevant to your goals (like a park for leash manners).\n\nWe don't just train your dog—we coach you as the primary handler, ensuring you master the effective techniques needed for success. This approach maximises your involvement for lifelong results and a stronger, clearer relationship.\n\nYou'll walk away from every session empowered with the skills and confidence to handle any situation.",
        duration: "60 minutes",
        location: "In-home or suitable environment",
        price: "$120",
        category: "training",
        imageUrl: "/attached_assets/image_1750049391709_opt.webp",
        features: ["Personalised in-home or public location training", "Learn effective training techniques", "Build strong relationship with your dog", "You become the primary trainer", "Cost-effective option", "Support every step of the way"]
      },
      {
        name: "In-home Day Train",
        description: "**Training Done For You**\n\nThis is our premium convenience service that delivers effective, focused training right to your doorstep. We take the stress and time commitment out of dog training by working with your dog one-on-one in the comfortable, familiar environment of your home. No need for you to be present!\n\nOur skilled trainers focus on your specific goals, whether it's general obedience (manners, recall) or targeted behavioural needs (jumping, counter-surfing). Every session is tailored to your dog's unique personality using our fun, play-based approach.\n\nWith session-based pricing and flexible scheduling, this service is designed to fit your busy lifestyle, ensuring your dog quickly becomes a well-mannered, happy companion at home. For maximum and fastest results, we recommend booking multiple sessions per week.",
        duration: "30 minutes",
        location: "In-home training",
        price: "$60",
        category: "training",
        imageUrl: "/attached_assets/image_1750049431855_opt.webp",
        features: ["Comfortable home environment", "General obedience or behavioural needs", "Tailored program for your dog", "Owners don't need to be home", "Flexible scheduling", "Session-based pricing", "Tools and treats included"]
      },
      {
        name: "Walk and Train",
        description: "**Building Confidence and Calm on Leash**\n\nIs your dog's walk the most stressful part of your day? Our specialised Walk & Train service is the perfect solution for owners struggling with pulling, lunging, or reactivity outside the home. This is not just a dog walk—it's focused, professional training delivered one-on-one by an expert.\n\nWe visit your home, then walk in your neighbourhood or drive to a nearby location, using real-world distractions to build rock-solid focus and manners. We reinforce the behaviours of your choice while teaching your dog to navigate the world calmly.\n\nPerfect for transitioning your established indoor skills into reliable, real-world responses, ensuring you finally get to enjoy a peaceful stroll with a well-mannered, confident companion. This service is designed for lasting results and is the ideal follow-up to our In-home Train and Play and private coaching sessions.",
        duration: "40 minutes",
        location: "Home pickup and local area",
        price: "$60",
        category: "training",
        imageUrl: "/attached_assets/irene-berral-hens-hJ-ZeyvuTbc-unsplash_1760533138023_opt.webp",
        features: ["Home visit with walk from there or nearby location", "Reinforce behaviours of your choice", "Real-world environment training", "Transition indoor training outdoors", "Reliable responses outside the home", "Tools and treats included"]
      },
      {
        name: "Adventure Walk and Training",
        description: "**The Ultimate Outing**\n\nGive your dog the ultimate high-value experience! We'll pick up your furry friend and whisk them away to a local forest, park, or beach for an hour packed with adventure, exercise, and integrated skill work.\n\nThis premium service is designed to be highly fulfilling, allowing your dog to safely enjoy running, sniffing, playing, and safe exploration in exciting, real-world locations. While on the adventure, our handlers will focus on reinforcing key real-world skills like reliable recall, loose-leash foundations, and impulse control under heavy distraction.\n\nYour dog returns home happy, thoroughly exercised, mentally stimulated, and better behaved. This is more than a walk—it's a premium journey that leaves your pet fulfilled and content.",
        duration: "60 minutes", 
        location: "Local parks, forests, or beaches",
        price: "$80",
        category: "walking",
        imageUrl: "/attached_assets/image_1750049520029_opt.webp",
        features: ["Collection from home", "Adventure locations", "Video updates", "Enrichment activities", "Fun and play", "Obedience Proofing", "Tools and treats included"]
      },
      {
        name: "Local Walk",
        description: "**Reliable, Budget-Friendly Exercise**\n\nLocal Walk is your convenient, budget-friendly dog walking solution. Our reliable, professional dog handlers come directly to your home, providing your pet with essential exercise, stimulation, and fun right from your doorstep.\n\nWhether you have a busy schedule or just need a helping hand, Local Walk ensures your dog enjoys a healthy stroll, plenty of sniffing, and attentive care, making your life simpler while your dog stays happy and active.",
        duration: "30 minutes",
        location: "From client's home",
        price: "$45",
        category: "walking",
        imageUrl: "/attached_assets/image_1750049687824_opt.webp",
        features: ["Enrichment activities", "Fun and play", "Affection and care", "Photo or video updates", "Tools and treats included"]
      },
      {
        name: "Virtual Coaching and Support",
        description: "**Expert Help, Wherever You Are**\n\nGet the answers and support you need without the travel time! Our Zoom Call service offers convenient, personalised, one-on-one guidance right on your phone or computer.\n\nThis is ideal for quick skill refinement, specific problem-solving, or follow-up questions on techniques covered in previous sessions. We can troubleshoot minor issues, review your training videos, or create a plan for the next steps in your dog's development.\n\nExperience flexible coaching that fits your schedule, is accessible globally, and provides expert support from the comfort of your home. It's the perfect, cost-effective way to keep your training progress moving forward.",
        duration: "60 minutes",
        location: "Video call (Zoom)",
        price: "$100",
        category: "consultation",
        imageUrl: "/attached_assets/stock_images/professional_video_c_568ae1d6_opt.webp",
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
        imageUrl: "/attached_assets/stock_images/professional_dog_tra_68cb0c20_opt.webp",
        inStock: true
      },
      {
        name: "Standard Leash",
        description: "High-quality everyday leash designed for comfortable walks and basic training exercises. Durable and reliable for daily use.",
        price: "30.00",
        priceRange: "$25 - $35",
        category: "equipment",
        imageUrl: "/attached_assets/stock_images/high_quality_dog_lea_ec3bf9ad_opt.webp",
        inStock: true
      },
      {
        name: "Training Collars",
        description: "Comfortable, adjustable collars designed for training sessions. Safe and effective for teaching proper leash manners.",
        price: "40.00",
        priceRange: "$30 - $50",
        category: "equipment",
        imageUrl: "/attached_assets/stock_images/high_quality_dog_lea_ec3bf9ad_opt.webp",
        inStock: true
      },
      {
        name: "Training Balls",
        description: "Durable balls designed for fetch training and play-based learning. Great for building engagement and reward-based training.",
        price: "20.00",
        priceRange: "$15 - $25",
        category: "toys",
        imageUrl: "/attached_assets/stock_images/dog_training_balls_a_46124b17_opt.webp",
        inStock: true
      },
      {
        name: "Tug Toys",
        description: "Interactive tug toys perfect for building engagement and teaching impulse control through play. Essential for modern training methods.",
        price: "25.00",
        priceRange: "$20 - $35",
        category: "toys",
        imageUrl: "/attached_assets/stock_images/interactive_tug_toy__f1fbf953_opt.webp",
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
        name: "The Confident Start Program",
        description: "The ultimate in-home early development program for puppies (8-20 weeks).\n\nWe build the essential foundations of confidence, connection, and clear communication during your puppy's critical learning period. Stop worrying about house training and biting, and start enjoying the happy, harmonious relationship you dreamed of.\n\n**Why This Program is the Confident Choice:**\n\n**Customised, In-Home Coaching:** Receive personalised, one-on-one sessions delivered by an expert in the comfort of your own home, ensuring fast, effective learning tailored to your lifestyle.\n\n**Build Foundational Clarity:** Establish a crystal-clear communication system from day one, giving your puppy the confidence and guidance they need to succeed in their new world.\n\n**Play-Based Connection:** We teach you how to use engaging, fulfilling play to establish deep trust, enhance cooperation, and eliminate problem behaviors before they start.\n\n**Essential Life Skills:** Master crucial social skills, house-training protocols, and foundational manners (including reliable recall and settling on place).",
        price: "$480",
        originalPrice: "$720",
        duration: "6 weeks",
        sessions: 6,
        category: "puppy",
        imageUrl: "/attached_assets/image_1750048904991_opt.webp",
        features: [
          "6 x Private, In-Home Expert Sessions (Save $240)",
          "Personalised Socialisation Protocols & Exposure Plan",
          "Step-by-Step House Training Guidance & Setup",
          "The 5 Foundational Manners: Sit, Stay, Come, Place, and Loose-Leash Walking Foundations",
          "Take-Home Training Plan after every session",
          "BONUS: Comprehensive 50+ page Puppy Raising Guide (Included Free!)"
        ],
        isPopular: true
      },
      {
        name: "The Connected Companion Walk",
        description: "Stop the struggle and start enjoying your walks.\n\nThis intensive program is designed to eliminate stressful pulling and resisting, giving you back your shoulders and your peace of mind. We deliver effective, efficient, and affordable results by building a lasting foundation of focus, connection, and clear communication in just one week.\n\n**How Our Unique Program Works:**\n\n**Trainer-Led Foundations (4 Sessions):** Your dog works directly with our expert trainer over four focused sessions to build the correct habits, neutralise negative associations with the collar, and establish the core communication system.\n\n**Owner Coaching & Skill Transfer (1 Session):** We dedicate the final session entirely to coaching you. You'll master the advanced lead handling skills and the communication protocols, ensuring the brilliant results transfer straight into your hands.\n\n**Change the Collar Connection:** We focus on the dog's emotional response to the collar and lead, transforming resistance and struggle into positive and co-operative engagement.\n\n**Clarity-First Communication:** We build a crystal-clear communication system that teaches your dog exactly what you want on a walk, eliminating confusion and ensuring they choose to walk nicely by your side.\n\n**Important Note:** Please book the From Chaos To Calm Program if your dog is barking and lunging at dogs or people.",
        price: "$340",
        originalPrice: "$360",
        duration: "1 week",
        sessions: 5,
        category: "obedience",
        imageUrl: "/attached_assets/gabe-pierce-5TPx9X_obko-unsplash_1760530908839_opt.webp",
        features: [
          "5 Targeted Training Sessions Total (4 Trainer-Led + 1 Owner Coaching Session)",
          "Foundations of High-Level Engagement and Obedience on the move",
          "Master Advanced Lead Handling Skills for ultimate control and comfort",
          "Tailored Protocol to shift your dog's feelings about the collar and lead",
          "Results Guaranteed or we continue until the core goal is met",
          "BONUS: The essential guide: 'The Building Blocks of a Balanced Dog' (Included Free!)"
        ],
        isPopular: true
      },
      {
        name: "From Chaos to Calm Program",
        description: "Stop the barking, lunging, and anxiety. Start enjoying your life together.\n\nThis intensive, comprehensive program is specifically designed for dogs showing reactivity towards other dogs, people, or environmental triggers. We don't just mask the behaviour; we address the root causes to create lasting, foundational change.\n\n**How Our Rehabilitation Program Works:**\n\n**Targeted, Dual-Phase Approach:** This package efficiently combines dedicated trainer-only sessions to build solid foundational skills with owner coaching sessions to ensure lifelong skill retention and real-world success.\n\n**Addressing Root Causes:** We focus on your dog's underlying anxiety and / or impulse control. Our methods include advanced counter-conditioning techniques to fundamentally change how your dog feels about triggers.\n\n**Building Confidence & Trust:** We empower your dog with confidence-building exercises and establish clear, consistent communication, transforming them into a calm, self-assured companion who can navigate the world with ease.\n\n**Maximum Efficiency:** The entire intensive program is delivered over three consecutive weeks (saving you $90 compared to single session purchases).",
        price: "$990",
        originalPrice: "$1080",
        duration: "15 sessions",
        sessions: 15,
        category: "behaviour",
        imageUrl: "/attached_assets/image_1750049297197_opt.webp",
        features: [
          "Intensive Sessions focusing on effective, lasting behavioural change",
          "Crystal-Clear Communication foundations to reduce your dog's confusion and anxiety",
          "Master Real-World Management Techniques for immediate safety and peace of mind",
          "Advanced Impulse Control and Counter-Conditioning protocols",
          "Personalised Training Plan and Homework supplied",
          "Dedicated Ongoing Support from your trainer",
          "BONUS: The essential guide: 'Four Building Blocks of a Balanced Dog' (Included Free!)"
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
      //   imageUrl: "/attached_assets/image_1750048973571.webp",
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
      //   imageUrl: "/attached_assets/image_1750049053389.webp",
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
      //   imageUrl: "/attached_assets/image_1750049297197_opt.webp",
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
        name: "The Focused Progress Plan",
        description: "Achieve the reliable, lasting results you've been searching for.\n\nThis is your opportunity to unlock consistent progress and benefit from five personalised, one-on-one coaching sessions tailored to your unique goals—whether that's achieving perfect manners, tackling a specific behaviour, or deepening your bond.\n\n**Why Commit to the Focused Progress Plan?**\n\n**Dedicated, Personalised Coaching:** Receive five private sessions with ongoing feedback and support. This commitment ensures we move beyond troubleshooting into real proficiency and confidence for any issue you choose to focus on.\n\n**Built-in Momentum & Reliability:** This package is designed to harness the power of regular coaching, ensuring effective learning for both you and your dog. We build reliable skills that hold up in real-world distractions.\n\n**Clarity-First Philosophy:** We focus on giving your dog the clear communication they need and giving you an in-depth understanding of our methods, leading to consistent, stress-free improvement.\n\n**Exceptional Value:** This five-session commitment ensures effective, self-paced learning and provides exceptional value, saving you $50 compared to booking sessions individually.",
        price: "$550",
        originalPrice: "$600",
        duration: "5 sessions",
        sessions: 5,
        category: "behaviour,obedience",
        imageUrl: "/attached_assets/rafaella-waasdorp-jrsKVUBmJUM-unsplash_1760444556278_opt.webp",
        features: [
          "5 x Individual Private Sessions to be used across any behaviour or skill (flexible to your needs)",
          "Customised Training Approach and problem-solving strategy",
          "In-Depth Understanding of Methods (Clarity, Connection, Play and more)",
          "Dedicated Ongoing Support between sessions",
          "BONUS: The essential guide: 'The Four Building Blocks of a Balanced Dog' (Included Free!)"
        ],
        isPopular: false
      },

      {
        name: "In-home Day Train Five Pack",
        description: "This is our premium, flexible convenience service that delivers expert, focused training right to your doorstep, saving you time and effort. This commitment allows the trainer to deeply understand your dog over five dedicated sessions, leading to more consistent, reliable progress across any goal—from manners to enrichment. No need for you to be present!\n\n**What the 5x Commitment Delivers:**\n\n**Ultimate Flexibility for Any Goal:** Use these five sessions for any in-home need—whether you want to build foundational obedience, tackle specific behaviours, or simply ensure your dog receives fulfilling enrichment and play throughout your busy week.\n\n**Deeper Trainer-Dog Connection:** Committing to five sessions allows your dedicated trainer to really get to know your dog's unique personality and learning style. This intimate understanding ensures training is perfectly tailored for maximum confidence and fastest results.\n\n**Consistency for Reliable Skills:** The repetition of five sessions ensures consistent implementation of our clarity-based system, building stronger, more reliable habits that last, regardless of the training focus.\n\n**Affordable Convenience:** Secure this essential service with a total saving of $20 on five private, done-for-you sessions. It's the easiest and quickest way to guarantee your dog's progress and fulfilment.",
        price: "$280",
        originalPrice: "$300",
        duration: "5 sessions",
        sessions: 5,
        category: "obedience",
        imageUrl: "/attached_assets/jing-ma-B4ZWfy_rmQ0-unsplash_1760531280769_opt.webp",
        features: [
          "5 x Private, In-Home Training Sessions (Done by the trainer)",
          "Completely Flexible Focus—use for obedience, foundations, behaviour modification, or fulfilment",
          "Customised Training Plan focusing on your current priorities",
          "Ongoing Feedback and video updates"
        ],
        isPopular: false
      },
      {
        name: "The Real World Reliability Package",
        description: "Move beyond the backyard and achieve true reliability.\n\nOur premium Five Walk and Trains Package offers the ultimate practical convenience, combining expert training with real-world exposure. We walk your dog from home and reinforce essential obedience and loose lead walking skills during real-world strolls. This commitment ensures skills are proofed against distractions for lasting results.\n\n**What the 5x Commitment Delivers:**\n\n**Real-World Reliability:** This package is ideal for progressing from in-home work. Five sessions ensure your dog's skills are progressively being tested in distracting environments (traffic, people, sounds), transitioning their obedience seamlessly from indoors to outdoors.\n\n**Confidence Building & Clarity:** The consistent practice builds your dog's confidence in new situations while reinforcing the clear communication system they need to succeed on lead.\n\n**Loose Lead Mastery:** We focus specifically on loose lead walking practice and general obedience reinforcement, eliminating frustration and ensuring your dog learns to walk co-operatively at all times.\n\n**Ultimate Convenience:** We come to you! Enjoy the results of expert training without the time commitment. Our home pickup service is included in every session.",
        price: "$280",
        originalPrice: "$300",
        duration: "5 sessions",
        sessions: 5,
        category: "obedience",
        imageUrl: "/attached_assets/tamas-pap-n2vcWTUutIA-unsplash_1760532090287_opt.webp",
        features: [
          "5 x 40-Minute Sessions (Trainer-led, done for you)",
          "Home Pickup Service Included at no extra charge",
          "Targeted General Obedience Reinforcement (manners on the go)",
          "Dedicated Loose Lead Walking Practice and technique mastery",
          "Training focused on real-world environment application and distraction proofing"
        ],
        isPopular: false
      },
      {
        name: "The Adventure Five Pack",
        description: "Accelerate your dog's journey towards real-world reliability.\n\nThis premium five-session commitment is the most effective way to expose your dog to varied environments and distractions, ensuring they progress quickly and build strong, reliable habits on key skills. We handle the hard work for you, setting the highest possible foundation for success.\n\n**What the 5x Commitment Delivers:**\n\n**Building Reliable Habits:** Five consecutive adventures allow us to progressively expose your dog to a huge variety of real-world environments (forests, beaches, parks). This repetition is essential for helping your dog automatically focus on you, even when highly distracted.\n\n**Proofing Skills Under Distraction:** We focus on reinforcing key real-world skills like reliable recall, loose-lead foundations, and impulse control under heavy distraction. This package is the crucial step in teaching your dog to focus on you when it matters most.\n\n**Ultimate Mental and Physical Fulfilment:** This service is designed to be highly fulfilling. Your dog safely enjoys five sessions of running, sniffing, playing, and exploration, ensuring they return home thoroughly exercised, mentally stimulated, and happy.\n\n**Smart Savings:** This package ensures you maintain training momentum with a saving of $25 compared to booking five single sessions individually.",
        price: "$375",
        originalPrice: "$400",
        duration: "5 sessions",
        sessions: 5,
        category: "adventure",
        imageUrl: "/attached_assets/artem-beliaikin-edbhAWFxnTA-unsplash_1760531575107_opt.webp",
        features: [
          "5 x Adventure Outings (Each session is an hour of adventure and integrated training)",
          "Premium Home Pick-up Service included",
          "Targeted reinforcement of Recall and Impulse Control under distraction",
          "Focus on safe exploration, fun, and fulfilling play",
          "Video and feedback after every session, including key tips for you"
        ],
        isPopular: false
      },
      {
        name: "The Neighbourhood Enrichment Five Pack",
        description: "Your reliable, budget-friendly solution for essential well-being.\n\nThis five-session package guarantees your dog receives consistent exercise, stimulation, and fun, all delivered right to your doorstep by our professional dog handlers. It's the simplest way to ensure a happy, active dog, even on your busiest days.\n\n**What the 5x Commitment Delivers:**\n\n**Reliable, Consistent Care:** By committing to five sessions, you establish a consistent routine that your dog can count on. This regularity is key to reducing stress and maintaining good manners throughout the week.\n\n**Structured Enrichment Walks:** Our walks are more than just a stroll. We ensure your dog gets plenty of essential sniffing time (mental stimulation) and attentive care, making every outing a fulfilling experience that leaves your pet content.\n\n**Ultimate Convenience & Simplicity:** Our professional handlers come directly to your home, ensuring your pet enjoys a healthy walk and essential exercise without you having to be present. It's the perfect helping hand for busy schedules.\n\n**Budget-Friendly Value:** This package offers the most convenient and reliable service while providing savings compared to booking single sessions.",
        price: "$215",
        originalPrice: "$225",
        duration: "5 sessions",
        sessions: 5,
        category: "adventure",
        imageUrl: "/attached_assets/brock-wegner-OxJj1pd2kJk-unsplash Large_1760530840673_opt.webp",
        features: [
          "5 x Local Walk Sessions focused on essential exercise and mental stimulation",
          "Reliable Home Pick-up Service included",
          "Focus on Sniffing, Exercise, and Attentive Care",
          "Ideal for maintaining routine and providing daily fulfilment"
        ],
        isPopular: false
      }
    ];

    packageData.forEach(pkg => this.createPackage(pkg));

    // Seed blog posts - Four Building Blocks Articles
    const blogData: InsertBlogPost[] = [
      {
        title: "Health: The Foundation of Everything",
        excerpt: "Before your dog can learn, behave, or thrive, they must feel good in their body. Discover why health is the non-negotiable starting point for all training success.",
        content: `# Health: The Foundation of Everything

Before you can expect your dog to learn, behave, or thrive, they must first feel good in their body. This is the non-negotiable starting point—without physical wellbeing, no amount of training, play, or structure will stick.

A dog in pain, discomfort, or poor health can't be expected to focus, cooperate, or feel calm. Health must come first—always.

## The Critical Elements of Canine Health

### Nutrition That Fuels Success

Your dog's diet is the cornerstone of their physical and mental wellbeing. Just like humans, dogs perform better when they're properly fueled. Puppies especially need extra nutritional support for their rapidly growing brains and bodies. The best approach combines raw, air-dried, or freeze-dried foods that maintain maximum nutrient density with minimal processing.

While high-quality kibble can supplement this foundation for financial or practical reasons, the goal should always be nutrient-dense, species-appropriate food. Poor nutrition doesn't just affect your dog's coat or energy levels—it shows up as behavioural issues, hyperactivity, and can lead to serious illness years down the track. When dogs feel good from the inside out, they're naturally more cooperative and focused.

### Rest and Recovery: The Overlooked Essential

Most people underestimate how much sleep dogs actually need. Depending on their age and breed, dogs require between 12 and 20 hours of sleep daily. This isn't laziness—it's biological necessity. Their nervous systems need this time to process information, recover from stimulation, and prepare for the next day.

Overstimulated dogs don't just get tired—they become hyperactive, mouthy, and difficult to manage. Many behavioural issues that owners attribute to "stubbornness" or "disobedience" are actually signs of a dog who hasn't had adequate recovery time. Providing structured downtime and creating calm spaces where your dog can truly relax is essential for their emotional regulation and learning capacity.

### Pain: The Hidden Training Saboteur

Pain is perhaps the most overlooked factor in training difficulties. Dogs are incredibly stoic creatures who instinctively hide discomfort, making it easy to miss subtle signs that something is wrong. If your dog's behaviour suddenly changes, if they become resistant to handling, or if training that once worked suddenly stops being effective, pain should be your first consideration.

Watch for the quiet indicators: reluctance to jump up or down, changes in posture, increased irritability, or obsessive licking of a particular body part. Both acute injuries and chronic conditions like arthritis, digestive issues, or structural problems can dramatically impact your dog's ability to learn and cooperate. A dog in pain simply cannot give you their best effort, no matter how much they want to please you.

### Professional Health Partnership

Regular veterinary check-ups aren't just for when something goes wrong—they're essential for maintaining the foundation of everything else you'll build with your dog. Even young, seemingly healthy dogs benefit from baseline bloodwork and comprehensive health assessments that establish normal parameters for future comparison.

Early detection prevents long-term suffering and expensive interventions down the road. Your veterinarian is your partner in ensuring your dog feels good enough to engage fully in training, play, and life with your family.

### Targeted Supplementation

While whole, species-appropriate food should provide most of what your dog needs, certain supplements can support optimal health. Omega-3 fatty acids help manage inflammation and promote coat health. Probiotics support digestive function, which increasingly research shows affects mood and behaviour. For active or aging dogs, joint supplements can help maintain mobility and comfort.

The key is working with your veterinarian to identify your dog's specific needs rather than giving supplements "just in case."

## Why Health Cannot Be Compromised

The reality is simple: a dog in pain won't respond normally to leash pressure, play, or commands without experiencing distress. Poor sleep leads to over-arousal, emotional instability, and erratic behaviour. Medical issues often masquerade as behavioural problems, leading owners to try to "train through" what is actually a health concern.

When something feels "off" with your dog, resist the urge to immediately seek behavioural solutions. Start by checking their physical wellbeing. You cannot and should not attempt to train over pain or illness.

When your dog feels good physically, everything else becomes possible. They can focus, they can learn, they can regulate their emotions, and they can truly partner with you. Health isn't just the first step—it's the foundation that supports everything meaningful you'll build together.`,
        imageUrl: "/attached_assets/generated_images/Healthy_dog_nutrition_foundation_9e9d6454.webp",
        readTime: "8 min read",
        tags: ["health", "foundation", "wellness", "four building blocks"]
      },
      {
        title: "Lifestyle: Fulfilling Your Dog's Mind and Purpose",
        excerpt: "Once physical health is in check, your dog needs mental fulfillment and purpose. Learn how to identify your dog's natural drives and provide meaningful outlets.",
        content: `# Lifestyle: Fulfilling Your Dog's Mind and Purpose

Once physical health is in check, your dog needs a healthy mind and purpose. Without this mental fulfillment, dogs become restless, anxious, or difficult to manage—not because they're a problem, but because they're having a problem that we need to solve.

## Understanding the Need for Purpose

Every breed, and indeed every individual dog, has natural drives that were carefully cultivated through generations of selective breeding. These instincts don't disappear just because your dog lives in a suburban home rather than on a working farm. The herding dog still wants to control movement, the retriever still craves the satisfaction of carrying and delivering objects, and the guardian breed still feels compelled to protect their territory.

When we ignore these genetic blueprints, we're essentially asking our dogs to suppress fundamental aspects of who they are. This suppression doesn't lead to calm, obedient dogs—it leads to frustrated, anxious animals who will find their own outlets for these drives, usually in ways we don't appreciate.

## The Power of Appropriate Expression

The solution isn't to provide your Border Collie with a flock of sheep or give your Labrador a job as a hunting companion. Instead, we can create meaningful activities that satisfy these drives in ways that work within our modern lifestyles. When dogs get appropriate outlets for their genetic needs, something remarkable happens: they become more cooperative, more focused, and more willing to work with us rather than against us.

Working breeds need jobs that challenge both their minds and bodies. High-energy dogs require outlets that allow them to express their natural instincts in structured ways. Even lower-drive dogs benefit from activities that connect with their breeding purpose, as this builds confidence and satisfaction that carries over into every other aspect of their lives.

## Freedom Within Structure

Dogs need time and space to simply be dogs. This means opportunities to run, sniff extensively, chew appropriate items, and engage in natural behaviors without constant human direction. However, this freedom needs to be balanced with safety and practicality.

Sniff walks where your dog can explore scents at their own pace provide mental stimulation that's often more tiring than physical exercise. Off-leash running in secure areas allows for the kind of free movement that suburban backyards often can't provide. Designated chewing stations give dogs an appropriate outlet for their natural need to work their jaws and teeth.

The key is structured expression rather than complete suppression. When dogs have appropriate outlets for natural behaviors, they're more willing to follow rules and boundaries in other areas of life.

## Play as Partnership

Play is far more than entertainment for dogs—it's how they bond, learn, and regulate their emotions. The most powerful play happens between dog and human, not between dogs or with toys alone. Interactive play like tug games, chase, and fetch builds your relationship while providing physical and mental stimulation.

When you become your dog's primary source of fun and fulfillment, you automatically become more important and relevant in their daily life. This relevance translates directly into better attention, cooperation, and responsiveness in training and everyday situations.

## The Universal Need for Scent Work

Scenting is a biological need for all dogs, not just hounds and tracking breeds. A dog's sense of smell is their primary way of understanding and interacting with the world. Simple scent-based games like hiding treats around the house, scatter feeding, or basic "find it" exercises provide mental stimulation while building confidence and calmness.

These activities are particularly valuable because they're naturally calming for dogs. Unlike high-energy physical exercise that can sometimes increase arousal, scent work tends to create a focused, meditative state that helps dogs decompress and center themselves.

## The Cost of Unmet Needs

Mental fulfillment isn't optional—it's essential for your dog's wellbeing and your relationship with them. Dogs with unmet lifestyle needs often display behaviors that owners interpret as disobedience or behavioural problems: excessive barking, destructive behaviors, escape attempts, or over-excitement and reactivity in everyday situations.

These behaviors aren't moral failings or dominance displays—they're symptoms of a dog whose fundamental needs aren't being met. When we address the underlying need for mental stimulation and purpose, these problematic behaviors often resolve themselves without direct training.

## Building the Foundation for Everything Else

A fulfilled dog is naturally more focused, more cooperative, and more peaceful in daily life. When your dog's mind is engaged and their drives are satisfied, they have the mental and emotional capacity to focus on what you're asking of them. They become partners in the training process rather than resistant participants.

This is why lifestyle and fulfillment must come before demanding obedience or trying to eliminate unwanted behaviors. Find what truly drives and motivates your individual dog, provide appropriate outlets for those drives, and you'll discover that everything else becomes significantly easier to achieve.`,
        imageUrl: "/attached_assets/generated_images/Border_Collie_mental_stimulation_666374d6.webp",
        readTime: "10 min read",
        tags: ["lifestyle", "mental stimulation", "breed drives", "four building blocks"]
      },
      {
        title: "Clear Communication: Building Confidence Through Understanding",
        excerpt: "Even the healthiest, most fulfilled dog will struggle without clarity. Learn how to create clear communication that builds confidence and eliminates confusion.",
        content: `# Clear Communication: Building Confidence Through Understanding

Even the healthiest, most fulfilled dog will struggle to fit into our lives without clear communication. Dogs need to understand what is expected of them, what their boundaries are, and how to interpret our feedback. Without this clarity, even the most well-intentioned dogs will constantly make mistakes, leading to frustration for everyone involved.

The fundamental truth is simple: confusion creates anxiety, while clarity creates confidence.

## Understanding What Clarity Really Means

Clarity isn't about rigid control or military-style discipline—it's about consistent, meaningful communication that your dog can rely on. When your dog knows what words and tools mean, when they can predict what will happen next, they feel more secure, cooperative, and calm. This security allows them to focus on learning and cooperating rather than constantly guessing what you want from them.

A clear communication system reduces stress for both you and your dog, builds genuine trust, and eliminates the exhausting guesswork that characterizes so many human-dog relationships. Dogs are incredibly intelligent, but they're not mind readers. They need us to be clear, consistent, and fair in how we communicate with them.

## The Four Windows: A Framework for Daily Life

One of the most powerful concepts in creating clarity is understanding that dogs naturally move through different emotional and mental states throughout the day. Rather than expecting your dog to be "on" all the time, or allowing them to be completely unstructured, we can teach them four distinct "windows" or states of being.

The first window is engagement—a time for interactive play and connection between you and your dog. This is when you build your relationship, develop their drive and motivation, and create the foundation of cooperation. During engagement time, your dog should be focused on you, excited to interact, and ready to participate in activities together.

The second window is exploration—essentially off-duty time when your dog can sniff, wander, investigate, and just be a dog. This self-directed decompression time is crucial for their mental health. Dogs need time to process their environment through their nose, to move at their own pace, and to make choices about what interests them.

The third window is calmness—low arousal, peaceful relaxation that teaches patience and emotional control. This window is non-negotiable because dogs must learn to settle and be calm in our human world. This isn't just lying down; it's a state of mental and emotional settling that allows their nervous system to recover and reset.

The fourth window is structured learning—focused effort with clear expectations and consistent follow-through. During this time, your dog knows that responses to commands are non-negotiable, and that concentrated effort is expected.

Teaching your dog to enter and exit these states smoothly creates emotional balance, better behaviour, and a deeper bond between you. This becomes the framework for daily life, not just a training concept. Your dog learns when it's time to be focused, when it's time to relax, when it's time to explore, and when it's time to work.

## The Power of Precise Markers

Words like "yes," "wrong," and "no" aren't just instructions—they're communication packages that give your dog multiple pieces of information in one precise moment. These markers are like pressing the shutter button on a camera, taking a snapshot of the exact moment your dog makes a choice.

When you say "yes," you're not just indicating approval—you're telling your dog they made the right choice, that they should remember this behaviour, and that a reward is coming. This creates a positive association with the specific action they just performed.

"Wrong" serves as a gentle redirect, essentially telling your dog that this particular choice won't lead to rewards, but there's no big consequence. It's an invitation to try something else without creating stress or anxiety about making mistakes.

"No" carries more weight—it indicates that a behaviour needs to stop immediately and shouldn't be repeated. This marker is followed by a fair but clear consequence that helps your dog understand the seriousness of the boundary they've crossed.

This system works because dogs live in the moment. These markers "freeze" the exact second your dog makes a choice, making your communication more efficient, fairer, and less emotional. Instead of lengthy explanations or emotional reactions, you can give clear, timely feedback that your dog can understand and act upon.

## The Leash as Conversation

One of the most misunderstood tools in dog training is the leash. Too many people view it as restraint or control, but when used properly, the leash becomes an extension of your relationship—a way to have ongoing conversation with your dog about direction, pace, and focus.

Teaching your dog to respond to leash pressure rather than just tolerate it transforms walks from a battle of wills into cooperative navigation. This means using soft, clear guidance rather than jerking, dragging, or constant tension. The pressure should feel like conversation, not conflict.

When your dog learns to yield to gentle leash pressure, to slow down when they feel a slight increase in tension, and to check in with you when they're unsure about direction, the leash becomes a calm, reliable bridge between you. This skill transfers to every aspect of your relationship, creating a dog who is naturally more aware of and responsive to your guidance.

## Why Clarity Changes Everything

Dogs without clear communication systems are constantly guessing about what's expected of them—and unfortunately, they usually guess wrong. This leads to a cycle of corrections, frustration, and confusion that erodes the relationship between dog and owner.

Inconsistent communication creates confusion, stress, and what looks like disobedience but is actually a dog who simply doesn't understand what's being asked of them. Clear communication systems allow your dog to relax, focus, and make better choices because they understand the rules of the game.

Clarity isn't about achieving perfection—it's about creating predictability. Dogs thrive when they know what things mean, when they can trust that the rules won't change arbitrarily, and when they can predict the consequences of their choices. This predictability creates confidence, and confident dogs are naturally more cooperative, more focused, and more enjoyable to live with.

When communication is clear, training becomes collaborative rather than adversarial. Your dog becomes an active participant in the learning process because they understand what success looks like and how to achieve it.`,
        imageUrl: "/attached_assets/generated_images/Golden_Retriever_communication_training_1d6a9e14.webp",
        readTime: "9 min read",
        tags: ["communication", "clarity", "markers", "four building blocks"]
      },
      {
        title: "Life Skills: Building Obedience That Works Everywhere",
        excerpt: "With health, lifestyle, and clarity in place, we can focus on skills—the structured obedience behaviours that help your dog function confidently in everyday life.",
        content: `# Life Skills: Building Obedience That Works Everywhere

With health, lifestyle, and clear communication in place, we can now focus on developing practical life skills—the structured obedience behaviors that help your dog function calmly and confidently in everyday situations.

These skills are the visible layer of training, but they only work reliably when built on solid foundations. If your dog is unwell, under-stimulated, or confused about expectations, obedience will always be inconsistent and stressful for everyone involved.

## Understanding True Life Skills

Skills aren't about tricks, dominance, or control—they're about building your dog's ability to navigate our human world successfully. Real life skills give your dog the tools to focus under pressure, pause when needed, move with you calmly and safely, and respond to direction anywhere, anytime.

When properly developed, obedience shouldn't feel like a power struggle or constant battle of wills. Instead, it should feel like a shared language that allows you and your dog to communicate clearly and cooperate smoothly, even in challenging situations.

These skills increase your dog's freedom rather than restricting it. A dog who can be trusted to come when called gets more off-leash time. A dog who walks calmly on a leash gets to explore more places. A dog who can settle on command is welcome in more social situations. Good obedience opens doors rather than closing them.

## The Essential Life Skills Framework

Every dog needs certain fundamental skills to live harmoniously in our world. Sitting and lying down on command provide the foundation for stillness and focus—crucial abilities in our busy, distracting environments. These positions aren't just physical postures; they're mental states that allow your dog to pause, collect themselves, and wait for direction.

Staying and waiting build patience and self-control, teaching your dog that sometimes the best action is no action. This skill prevents impulsive behaviors that can create dangerous or problematic situations.

A reliable recall—coming when called—is perhaps the most important safety skill your dog can learn. This skill can literally save your dog's life in emergency situations while also giving them more freedom to explore and exercise.

Loose-leash walking allows for calm navigation through the world together. A dog who can walk peacefully beside you opens up possibilities for shared adventures, stress-free vet visits, and enjoyable neighborhood exploration.

Teaching your dog to go to a specific place and settle there creates boundaries and provides a tool for managing situations when calm behaviour is required. This skill is invaluable when guests arrive, during meals, or anytime you need your dog to be calm and contained without being confined.

Leave it and impulse control skills keep your dog safe from potentially dangerous items while teaching them that not everything interesting is available to them. This extends to food, objects, other animals, and even people—teaching appropriate boundaries in all areas of life.

Understanding and respecting thresholds—doorways, gates, car doors—teaches your dog to wait for permission rather than rushing through openings. This prevents escapes, reduces over-excitement, and creates calmer transitions between spaces.

## Building Skills Through Engagement

The most effective way to develop these skills is through engagement and play rather than force or intimidation. Most skills are best taught initially during times when your dog is alert, interested, and motivated to interact with you. Using play, treats, and positive interaction makes learning enjoyable and creates positive associations with obedience.

As your dog develops and matures, expectations naturally increase, but the training should remain fair, consistent, and fundamentally enjoyable. Dogs learn best when they're actively engaged in the process rather than simply enduring it.

Importantly, skills need to be practiced and proven across different emotional states and environments. A dog who only obeys when they're calm and focused doesn't truly have reliable skills. They need to learn to respond appropriately whether they're excited, distracted, tired, or in various environmental conditions.

## The Reality of Real-World Application

True obedience isn't demonstrated by what your dog does in perfect training conditions—it's what they can do in real life when it matters. Your dog should be able to sit calmly while children run past them at the park, come when called even when playing with other dogs, walk on a loose leash through busy streets full of distractions, stay in their designated spot while guests visit your home, and leave tempting food on the ground when asked.

This level of reliability doesn't happen overnight, and it requires ongoing maintenance and practice. Dogs need to learn to perform behaviors in different environments, with varying levels of distraction, and in different states of arousal. A dog that can sit perfectly in your quiet kitchen but falls apart at the busy café doesn't have a reliable skill—they have a trick that only works under specific conditions.

## The Progressive Development Process

Building truly reliable skills follows a natural progression that respects your dog's learning process and builds confidence along the way. Initially, skills are taught in calm, controlled environments where your dog can focus and succeed. As they become confident with the basic behaviour, challenges are gradually added—different locations, mild distractions, varying levels of excitement or arousal.

The key is building success upon success rather than overwhelming your dog with challenges they're not ready for. Each step should feel achievable, and your dog should experience frequent success and positive reinforcement throughout the process.

Skills need regular practice and refinement throughout your dog's life. Like any ability, obedience skills can become rusty without use, and they need to be adapted and strengthened as your dog encounters new challenges and life circumstances.

## The Freedom That Comes With Skills

When properly developed, life skills become reliable tools that serve both you and your dog for life. They create a foundation of trust and communication that makes every aspect of your relationship easier and more enjoyable.

A dog with solid life skills is a dog who can participate more fully in family life, explore more of the world safely, and handle life's inevitable changes with confidence and grace. These aren't just training achievements—they're the building pieces of a rich, fulfilling partnership between human and dog.

Remember that skills are indeed the final piece of the puzzle, not the starting point. When built on solid foundations of health, mental fulfillment, and clear communication, they become natural expressions of your dog's desire to cooperate and succeed rather than behaviors that must be forced or constantly enforced.`,
        imageUrl: "/attached_assets/generated_images/Australian_Shepherd_public_obedience_11c6c97e.webp",
        readTime: "8 min read",
        tags: ["obedience", "skills", "training", "four building blocks"]
      },
      {
        title: "Understanding Your Dog's Genetic Drives: A Breed-Specific Guide",
        excerpt: "Every dog has natural instincts bred into them for centuries. Learn how to identify your dog's drives and provide fulfilling activities that satisfy their genetic needs.",
        content: `# Understanding Your Dog's Genetic Drives: A Breed-Specific Guide

Your dog's behaviour isn't random—it's driven by thousands of years of selective breeding. Understanding these genetic drives is the key to a fulfilled, balanced dog who cooperates with you instead of working against you.

## Why Genetic Drives Matter

When dogs don't get appropriate outlets for their natural instincts, they create their own "jobs"—usually ones we don't appreciate:
- Herding dogs nip at children and chase cars
- Hunting dogs destroy the house searching for "prey"
- Guardian breeds become overprotective or aggressive
- High-energy breeds develop anxiety and destructive behaviors

**The solution isn't to suppress these drives—it's to fulfill them appropriately.**

## The Major Drive Categories

### Herding Dogs
**Breeds:** Border Collie, Australian Kelpie, Australian Cattle Dog

**Natural Instincts:**
- Controlling and directing movement
- Intense focus and eye contact
- Quick decision-making
- Working closely with handlers

**Fulfillment Activities:**
- **Flirt Pole Games:** Controlled chase with rules and structure
- **Directional Training:** Teaching "left," "right," "around," "through"
- **Pattern Games:** Weaving through cones, following specific routes
- **Impulse Control Games:** "Wait," then "go" on command
- **Tug with Rules:** Building drive, then teaching "out" and "wait"

### Hunting & Retrieving Dogs
**Breeds:** Labrador, Golden Retriever, Spaniels, Pointers, Setters

**Natural Instincts:**
- Finding and retrieving objects
- Using their nose extensively
- Swimming and water work
- Gentle mouth and carrying

**Fulfillment Activities:**
- **"Find It" Games:** Hide treats or toys around the house/yard
- **Scent Tracking:** Following trails to find hidden rewards
- **Fetch Variations:** Different objects, distances, and challenges
- **Delivery Training:** Bringing specific items on command
- **Water Games:** Swimming, retrieving from water (if available)

### Guardian & Protection Dogs
**Breeds:** Rottweiler, Doberman, Mastiffs, German Shepherd

**Natural Instincts:**
- Territory protection
- Threat assessment
- Physical strength and presence
- Loyalty to family units

**Fulfillment Activities:**
- **Structured Tug Games:** Building power with clear rules
- **Obedience Under Pressure:** Commands with distractions
- **Perimeter Walks:** Teaching appropriate alerting
- **Controlled Bite Work:** (Professional guidance recommended)
- **Strength Exercises:** Pulling, carrying, resistance work

### Sighthounds
**Breeds:** Greyhound, Whippet, Afghan Hound, Saluki

**Natural Instincts:**
- Chasing fast-moving objects
- Short bursts of intense activity
- Visual tracking
- Independent decision-making

**Fulfillment Activities:**
- **Fast Lure Games:** Quick-moving toys on strings
- **Sprint and Rest Play:** High intensity, then calm down
- **Visual Tracking Games:** Following movement with eyes before chasing
- **Coursing:** Following a lure around obstacles (if available)

### Terriers
**Breeds:** Jack Russell, Fox Terrier, Airedale, Bull Terrier

**Natural Instincts:**
- Digging and excavating
- Hunting small prey
- Independent problem-solving
- High persistence and determination

**Fulfillment Activities:**
- **Digging Areas:** Designated sandbox or dirt area
- **"Hunt" Games:** Finding toys buried in sand or hidden
- **Flirt Pole with Small Prey-like Toys:** Quick, erratic movement
- **Puzzle Toys:** Problem-solving challenges
- **Tug and Rag Games:** Shaking and "killing" toys

### Companion Breeds
**Breeds:** Cavalier King Charles, Bichon, Havanese, Pugs

**Natural Instincts:**
- Human companionship
- Lower physical drive
- Social interaction
- Gentle play styles

**Fulfillment Activities:**
- **Food Puzzles:** Mental stimulation through eating
- **Gentle Scent Games:** Easy "find it" games
- **Social Training:** Meeting people and other dogs appropriately
- **Comfort Work:** Lap time, gentle brushing, calm interaction
- **Short Training Sessions:** Building confidence without overwhelming

## How to Apply This Knowledge

### Step 1: Identify Your Dog's Primary Drive
Look at your dog's breed background and observe their natural behaviors:
- What do they do when left to their own devices?
- What gets them most excited?
- What behaviors are you constantly trying to stop?

### Step 2: Start With Easy Wins
Choose 2-3 activities from your dog's drive category and try them for a week:
- Keep sessions short (5-15 minutes)
- End on a positive note
- Make it rewarding for both of you

### Step 3: Build and Progress
Once your dog understands the game:
- Add more challenge gradually
- Combine different activities
- Use drive fulfillment before expecting obedience

### Step 4: Make It Part of Daily Life
- Morning drive work before breakfast
- Afternoon sessions during energy peaks
- Use fulfilled drives to build training motivation

## The Results of Proper Drive Fulfillment

Dogs with satisfied genetic drives become:
- **More Cooperative:** They've had their needs met, so they can focus on your needs
- **Less Destructive:** No need to create their own "jobs"
- **More Confident:** Working within their natural abilities builds self-assurance
- **Better Trained:** Fulfilled dogs are more attentive and responsive
- **Calmer:** Mental and physical satisfaction leads to better rest and recovery

## Remember: Every Dog is an Individual

While breed tendencies are real, every dog is unique. Some Border Collies have lower drive than others. Some Labs prefer scent work over retrieving. 

**Watch your dog, not just their breed label.** The goal is to find what genuinely fulfills your specific dog's needs.

When you honour your dog's genetic blueprint and provide appropriate outlets, you're not just managing behaviour—you're creating a partnership based on understanding and mutual satisfaction.`,
        imageUrl: "/attached_assets/generated_images/Dog_breed_genetic_drives_f7a3abc3.webp",
        readTime: "12 min read",
        tags: ["breed drives", "genetics", "fulfillment", "behaviour", "training"]
      },
      {
        title: "Creating Balance: A Complete Framework for Canine Harmony",
        excerpt: "Discover how health, lifestyle, clarity, and skills work together to create a calm, confident companion. Learn the complete framework for lasting harmony.",
        content: `# Creating Balance: A Complete Framework for Canine Harmony

When health, lifestyle, communication, and life skills are working together harmoniously, you don't just have a trained dog. You have a calm, confident companion who feels good in their body, feels fulfilled in their mind, understands how to live peacefully with you, and can navigate the real world successfully by your side.

This is how genuine balance is built—and how lasting harmony between humans and dogs is truly achieved.

## Understanding the Interconnected Framework

These four foundational elements aren't separate training methods that can be applied in isolation—they're deeply interconnected aspects of your dog's wellbeing that must work together to create lasting success.

## The Sequential Nature of Development

The order in which these elements are addressed matters tremendously. You cannot successfully skip steps or build them out of sequence without creating problems that will undermine your long-term success.

Attempting to teach life skills to an unhealthy dog creates unreliable, stressful training sessions where both dog and owner become frustrated. Demanding obedience from an unfulfilled dog leads to constant battles and frequent regression as the dog's unmet needs drive problematic behaviours. Training without clear communication systems results in confused, anxious responses that lack consistency. Skipping lifestyle and fulfillment needs creates destructive, restless behaviour that persists despite what appears to be "good" training.

Building systematically, however, creates lasting balance and genuine partnership that serves both dog and owner throughout their lives together.

## Recognizing a Truly Balanced Dog

When all four elements are properly developed and maintained, the transformation in your dog is unmistakable. Physically, they move with confidence and comfort, sleep well and wake refreshed, maintain consistent energy levels throughout the day, and respond calmly to touch and handling.

Mentally, they engage enthusiastically in appropriate activities while also settling easily when asked. They show healthy curiosity without becoming overwhelmed by excitement and adapt to new situations with confidence rather than anxiety or overarousal.

Emotionally, they demonstrate secure attachment to their family while also showing appropriate independence. They recover quickly from stress or excitement, display responses that match the context of different situations, and carry themselves with calm confidence in their daily life.

Behaviorally, they respond reliably to guidance regardless of environment or distraction level. They make good choices independently when not under direct instruction, transition smoothly between different activities and energy levels, and live peacefully within human household rules without constant enforcement.

## The Implementation Process

Successfully implementing this framework begins with honest assessment of where your dog currently stands in each area. Health assessment involves scheduling a comprehensive veterinary examination and evaluating current diet quality, sleep patterns, and any signs of pain or discomfort.

Lifestyle assessment requires identifying your dog's breed drives and genetic predispositions, then honestly evaluating how well these needs are currently being met through daily activities and enrichment.

Communication assessment involves examining the consistency and clarity of your current interaction patterns with your dog, identifying areas where confusion or mixed messages might be creating problems.

Skills assessment means evaluating which life skills your dog has truly mastered versus which ones only work in perfect conditions, and identifying which essential skills are still missing from their repertoire.

The building process follows the natural sequence: address health concerns first, as no meaningful training can occur until physical needs are met. Identify and begin fulfilling your dog's genetic drives, as this creates the motivation and cooperation needed for everything else. Establish clear, consistent communication systems that your dog can understand and rely on. Finally, develop reliable life skills that transfer to real-world situations.

## Maintaining Long-Term Balance

This isn't a one-time process that you complete and then forget about. True balance requires ongoing attention to all four areas throughout your dog's life. Health needs change as dogs age, and regular monitoring ensures problems are caught early. Genetic drives don't disappear and require consistent fulfillment to prevent behavioural problems from developing. Communication systems need reinforcement and refinement as you and your dog encounter new situations together. Life skills require regular practice and proofing to maintain reliability across different environments and circumstances.

## The Partnership Payoff

Dogs who have all four foundational elements in place become calm because their fundamental needs are consistently met. They become confident because they understand their world and their place in it. They become cooperative because the relationship itself is fulfilling and rewarding for them. They become capable because they possess the skills necessary to succeed in various situations.

This comprehensive approach isn't just training—it's building a complete life together based on mutual understanding, clear communication, and genuine care for your dog's total wellbeing. When you provide your dog with physical health, mental fulfillment, clear communication, and practical skills, you're not just modifying behaviour—you're creating the foundation for a relationship that will bring deep satisfaction and joy for years to come.

The investment in building these foundations properly pays dividends throughout your dog's entire life, creating not just better behaviour, but a truly harmonious partnership between human and canine companions.`,
        imageUrl: "/attached_assets/generated_images/Balanced_harmonious_canine_life_357c8e73.webp",
        readTime: "12 min read",
        tags: ["four building blocks", "balance", "framework", "complete guide"]
      }
    ];

    blogData.forEach(post => this.createBlogPost(post));

    // Seed testimonials
    const testimonialData: InsertTestimonial[] = [
      {
        clientName: "Donna M.",
        dogName: "Winnie",
        rating: 5,
        reviewText: "I enjoyed Tristan's expertise and insights about the benefits of play-based learning (for me as well as Winnie! :-) ) together with his understanding of the importance of working with my 10 month old puppy's strengths & positive characteristics while also attending to his challenges",
        service: "Training",
        location: null
      },
      {
        clientName: "Manpreet Kharbarh",
        dogName: null,
        rating: 5,
        reviewText: "My cavoodle is nuts about Tristan! Ever since Tristan has been working with my dog, he's doing so well with his behaviour. Tristan is a wealth of knowledge too, you can tell he loves what he does, he loves sharing his knowledge with you and most importantly, he genuinely cares about our dog.",
        service: "Training",
        location: null
      },
      {
        clientName: "Steph and Jonathan A.",
        dogName: null,
        rating: 5,
        reviewText: "We reached out to Tristan for help training our 1yo puppy who is displaying some behaviour problems. Tristan was extremely knowledgeable, patient and understanding. He spent the time to talk us through all of our concerns with a no-judgement attitude. He has also taken the time to create a training plan for us to implement. Thank you Tristan! Looking forward to the next session.",
        service: "Training",
        location: null
      },
      {
        clientName: "Brodie Sloan",
        dogName: "Rae",
        rating: 5,
        reviewText: "Tristan has been absolutely wonderful with our dog Rae. He has helped improve her ability to walk calmly on a leash and, just as importantly, taught us how to better understand Rae and her cues, which has made walking her genuinely enjoyable again.\n\nWe've also booked Tristan to come while we're at work to train and walk Rae, and we really appreciate how he keeps us updated with photos and videos throughout each session. It gives us so much peace of mind.\n\nWe truly value Tristan's knowledge and guidance and have seen huge improvements in Rae's leash walking and overall obedience in such a short time. Highly recommend him to anyone looking for a knowledgeable, patient, and effective dog trainer.",
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

  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values()).filter(s => s.isActive);
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentSubscriberId++;
    const newSubscriber: Subscriber = {
      ...subscriber,
      id,
      subscribedAt: new Date(),
      isActive: true
    };
    this.subscribers.set(id, newSubscriber);
    return newSubscriber;
  }
}

export const storage = new MemStorage();
