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
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
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
        features: ["A full assessment of your dog's unique temperament, genetics, and needs", "An in-depth, personalised training roadmap outlining the clear steps needed to reach your goals", "Immediate clarity on communication and a few simple, actionable exercises you can start today", "A low-commitment entry to my training system, designed to save you time and money"]
      },

      {
        name: "One-on-One Private Coaching",
        description: "**The Ultimate in Convenience and Results**\n\nThis is fully personalised dog training brought directly to you, held either in your home (where most problems happen) or at a public location relevant to your goals (like a park for leash manners).\n\nI don't just train your dog—I coach you as the primary handler, ensuring you master the effective techniques needed for success. This approach maximises your involvement for lifelong results and a stronger, clearer relationship.\n\nYou'll walk away from every session empowered with the skills and confidence to handle any situation.",
        duration: "60 minutes",
        location: "In-home or suitable environment",
        price: "$120",
        category: "training",
        imageUrl: "/attached_assets/image_1750049391709_opt.webp",
        features: ["Personalised in-home or public location training", "Learn effective training techniques", "Build strong relationship with your dog", "You become the primary trainer", "Cost-effective option", "Support every step of the way"]
      },
      {
        name: "In-home Day Train",
        description: "**Training Done For You**\n\nThis is my done-for-you service that delivers effective, focused training right to your doorstep. I take the stress and time commitment out of dog training by working with your dog one-on-one in the comfortable, familiar environment of your home. No need for you to be present!\n\nHave a skilled trainer focus on your specific goals, whether it's general obedience (manners, recall) or targeted behavioural needs (jumping, counter-surfing). Every session is tailored to your dog's unique personality using my fun, play-based approach.\n\nWith session-based pricing and flexible scheduling, this service is designed to fit your busy lifestyle, ensuring your dog quickly becomes a well-mannered, happy companion at home. For maximum and fastest results, I recommend booking multiple sessions per week.",
        duration: "30 minutes",
        location: "In-home training",
        price: "$60",
        category: "training",
        imageUrl: "/attached_assets/image_1750049431855_opt.webp",
        features: ["Comfortable home environment", "General obedience or behavioural needs", "Tailored program for your dog", "Owners don't need to be home", "Flexible scheduling", "Session-based pricing", "Tools and treats included"]
      },
      {
        name: "Walk and Train",
        description: "**Building Confidence and Calm on Leash**\n\nIs your dog's walk the most stressful part of your day? My specialised Walk & Train service is the perfect solution for owners struggling with pulling, lunging, or reactivity outside the home. This is not just a dog walk—it's focused, professional training delivered one-on-one by an expert.\n\nI visit your home, then walk in your neighbourhood or drive to a nearby location, using real-world distractions to build rock-solid focus and manners. I reinforce the behaviours of your choice while teaching your dog to navigate the world calmly.\n\nPerfect for transitioning your established indoor skills into reliable, real-world responses, ensuring you finally get to enjoy a peaceful stroll with a well-mannered, confident companion. This service is designed for lasting results and is the ideal follow-up to my In-home Train and Play and private coaching sessions.",
        duration: "40 minutes",
        location: "Home pickup and local area",
        price: "$60",
        category: "training",
        imageUrl: "/attached_assets/irene-berral-hens-hJ-ZeyvuTbc-unsplash_1760533138023_opt.webp",
        features: ["Home visit with walk from there or nearby location", "Reinforce behaviours of your choice", "Real-world environment training", "Transition indoor training outdoors", "Reliable responses outside the home", "Tools and treats included"]
      },
      {
        name: "Adventure Walk and Training",
        description: "**The Ultimate Outing**\n\nGive your dog the ultimate high-value experience! I'll pick up your dog and take them to a local forest, park, or beach for an hour packed with adventure, exercise, and integrated skill work.\n\nThis session is designed to be highly fulfilling, allowing your dog to safely enjoy running, sniffing, playing, and safe exploration in exciting, real-world locations. While on the adventure, I will focus on reinforcing key real-world skills like reliable recall, loose-leash foundations, and impulse control under heavy distraction.\n\nYour dog returns home happy, thoroughly exercised, mentally stimulated, and better behaved. This is more than a walk—it's a genuinely enriching outing that leaves your dog fulfilled and content.",
        duration: "60 minutes", 
        location: "Local parks, forests, or beaches",
        price: "$80",
        category: "walking",
        imageUrl: "/attached_assets/image_1750049520029_opt.webp",
        features: ["Collection from home", "Adventure locations", "Video updates", "Enrichment activities", "Fun and play", "Obedience Proofing", "Tools and treats included"]
      },
      {
        name: "Local Walk",
        description: "**Reliable, Budget-Friendly Exercise**\n\nLocal Walk is your convenient, budget-friendly dog walking solution. Have a reliable, professional dog handler come directly to your home, providing your dog with essential exercise, stimulation, and fun right from your doorstep.\n\nWhether you have a busy schedule or just need a helping hand, Local Walk ensures your dog enjoys a healthy stroll, plenty of sniffing, and attentive care, making your life simpler while your dog stays happy and active.",
        duration: "30 minutes",
        location: "From client's home",
        price: "$45",
        category: "walking",
        imageUrl: "/attached_assets/image_1750049687824_opt.webp",
        features: ["Enrichment activities", "Fun and play", "Affection and care", "Photo or video updates", "Tools and treats included"]
      },
      {
        name: "Virtual Coaching and Support",
        description: "**Expert Help, Wherever You Are**\n\nGet the answers and support you need without the travel time! My Zoom Call service offers convenient, personalised, one-on-one guidance right on your phone or computer.\n\nThis is ideal for quick skill refinement, specific problem-solving, or follow-up questions on techniques covered in previous sessions. I can troubleshoot minor issues, review your training videos, or create a plan for the next steps in your dog's development.\n\nExperience flexible coaching that fits your schedule, is accessible globally, and provides expert support from the comfort of your home. It's the perfect, cost-effective way to keep your training progress moving forward.",
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
        description: "The ultimate in-home early development program for puppies (8-20 weeks).\n\nTogether with you, I build the essential foundations of confidence, connection, and clear communication during your puppy's critical learning period. Stop worrying about house training and biting, and start enjoying the confident, connected relationship you worked toward.\n\n**Why This Program is the Confident Choice:**\n\n**Customised, In-Home Coaching:** Receive personalised, one-on-one sessions delivered by an expert in the comfort of your own home, ensuring fast, effective learning tailored to your lifestyle.\n\n**Build Foundational Clarity:** Establish a clear shared language from day one, giving your puppy the confidence and guidance they need to succeed in their new world.\n\n**Play-Based Connection:** I teach you how to use engaging, fulfilling play to establish deep trust, enhance cooperation, and eliminate problem behaviours before they start.\n\n**Essential Life Skills:** Master crucial social skills, house-training protocols, and foundational manners (including reliable recall and settling on place).",
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
        isPopular: false
      },
      {
        name: "The Focused Progress Plan",
        description: "Achieve the reliable, lasting results you've been searching for.\n\nThis is your opportunity to unlock consistent progress and benefit from five personalised, one-on-one coaching sessions tailored to your unique goals—whether that's achieving perfect manners, tackling a specific behaviour, or deepening your bond.\n\n**Why Commit to the Focused Progress Plan?**\n\n**Dedicated, Personalised Coaching:** Receive five private sessions with ongoing feedback and support. This commitment ensures you move beyond troubleshooting into real proficiency and confidence for any issue you choose to focus on.\n\n**Built-in Momentum & Reliability:** This package is designed to harness the power of regular coaching, ensuring effective learning for both you and your dog. I build reliable skills that hold up in real-world distractions.\n\n**Clarity-First Philosophy:** I focus on giving your dog the clear communication they need and giving you an in-depth understanding of my methods, leading to consistent, stress-free improvement.\n\n**Exceptional Value:** This five-session commitment ensures effective, self-paced learning and provides exceptional value, saving you $50 compared to booking sessions individually.",
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
        isPopular: true
      },
      {
        name: "From Chaos to Calm Program",
        description: "Stop the barking, lunging, and anxiety. Start enjoying your life together.\n\nThis comprehensive program is specifically designed for dogs showing reactivity towards other dogs, people, or environmental triggers. I don't just mask the behaviour; I address the root causes to create lasting, foundational change.\n\n**How My Rehabilitation Program Works:**\n\n**Targeted, Dual-Phase Approach:** This package efficiently combines dedicated trainer-only sessions to build solid foundational skills with owner coaching sessions to ensure lifelong skill retention and real-world success.\n\n**Addressing Root Causes:** I focus on your dog's underlying anxiety and / or impulse control. My methods include advanced counter-conditioning techniques to fundamentally change how your dog feels about triggers.\n\n**Building Confidence & Trust:** I empower your dog with confidence-building exercises and establish clear, consistent communication, transforming them into a calm, self-assured companion who can navigate the world with ease.\n\n**Maximum Efficiency:** The entire intensive program is delivered over three consecutive weeks (saving you $90 compared to single session purchases).",
        price: "$990",
        originalPrice: "$1080",
        duration: "15 sessions",
        sessions: 15,
        category: "behaviour",
        imageUrl: "/attached_assets/image_1750049297197_opt.webp",
        features: [
          "Intensive Sessions focusing on effective, lasting behavioural change",
          "Clear Communication Foundations to reduce your dog's confusion and anxiety",
          "Master Real-World Management Techniques for immediate safety and peace of mind",
          "Advanced Impulse Control and Counter-Conditioning protocols",
          "Personalised Training Plan and Homework supplied",
          "Dedicated Ongoing Support from your trainer",
          "BONUS: The essential guide: 'The Four Building Blocks of a Balanced Dog' (Included Free!)"
        ],
        isPopular: true
      },
      // Hidden packages - pending implementation
      // {
      //   name: "Behaviour Transformation Package",
      //   description: "Comprehensive behaviour modification program for dogs with challenging behaviours. Via one-on-one coaching sessions I can address many problem behaviours including but not limited to anxiety, over-excitement, destructiveness, barking, lead pulling, defiance and more. This program is my flagship program. Turning dogs from 'behaving badly' to the perfect companion!",
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
        name: "The Connected Companion Walk",
        description: "Stop the struggle and start enjoying your walks.\n\nThis intensive program is designed to eliminate stressful pulling and resisting, giving you back your shoulders and your peace of mind. I deliver effective, efficient, and affordable results by building a lasting foundation of focus, connection, and clear communication in just one week.\n\n**How My Unique Program Works:**\n\n**Trainer-Led Foundations (4 Sessions):** Your dog works directly with an expert trainer over four focused sessions to build the correct habits, neutralise negative associations with the collar, and establish the core communication system.\n\n**Owner Coaching & Skill Transfer (1 Session):** I dedicate the final session entirely to coaching you. You'll master the advanced lead handling skills and the communication protocols, ensuring the brilliant results transfer straight into your hands.\n\n**Change the Collar Connection:** I focus on the dog's emotional response to the collar and lead, transforming resistance and struggle into positive and co-operative engagement.\n\n**Clarity-First Communication:** I build clear, consistent communication that teaches your dog exactly what you want on a walk, eliminating confusion and ensuring they choose to walk nicely by your side.\n\n**Important Note:** Please book the From Chaos To Calm Program if your dog is barking and lunging at dogs or people.",
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
          "Results Guaranteed or I continue until the core goal is met",
          "BONUS: The essential guide: 'The Four Building Blocks of a Balanced Dog' (Included Free!)"
        ],
        isPopular: false
      },

      {
        name: "The Foundation Program",
        description: "This is my flexible convenience service that delivers expert, focused training right to your doorstep, saving you time and effort. This commitment allows me, the trainer to deeply understand your dog over five dedicated sessions, leading to more consistent, reliable progress across any goal—from manners to enrichment. No need for you to be present!\n\n**What the 5x Commitment Delivers:**\n\n**Ultimate Flexibility for Any Goal:** Use these five sessions for any in-home need—whether you want to build foundational obedience, tackle specific behaviours, or simply ensure your dog receives fulfilling enrichment and play throughout your busy week.\n\n**Deeper Trainer-Dog Connection:** Committing to five sessions allows me to really get to know your dog's unique personality and learning style. This intimate understanding ensures training is perfectly tailored for maximum confidence and fastest results.\n\n**Consistency for Reliable Skills:** The repetition of five sessions ensures consistent implementation of my clarity-based system, building stronger, more reliable habits that last, regardless of the training focus.\n\n**Affordable Convenience:** Secure this essential service with a total saving of $20 on five private, done-for-you sessions. It's the easiest and quickest way to guarantee your dog's progress and fulfilment.",
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
        description: "Move beyond the backyard and achieve true reliability.\n\nMy active Five Walk and Trains Package offers the ultimate practical convenience, combining expert training with real-world exposure. I walk your dog from home and reinforce essential obedience and loose lead walking skills during real-world strolls. This commitment ensures skills are proofed against distractions for lasting results.\n\n**What the 5x Commitment Delivers:**\n\n**Real-World Reliability:** This package is ideal for progressing from in-home work. Five sessions ensure your dog's skills are progressively being tested in distracting environments (traffic, people, sounds), transitioning their obedience seamlessly from indoors to outdoors.\n\n**Confidence Building & Clarity:** The consistent practice builds your dog's confidence in new situations while reinforcing the clear communication system they need to succeed on lead.\n\n**Loose Lead Mastery:** I focus specifically on loose lead walking practice and general obedience reinforcement, eliminating frustration and ensuring your dog learns to walk co-operatively at all times.\n\n**Ultimate Convenience:** I come to you! Enjoy the results of expert training without the time commitment. My home pickup service is included in every session.",
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
        name: "The Adventure Pack",
        description: "Accelerate your dog's journey towards real-world reliability.\n\nThis premium five-session commitment is the most effective way to expose your dog to varied environments and distractions, ensuring they progress quickly and build strong, reliable habits on key skills. I handle the hard work for you, setting the highest possible foundation for success.\n\n**What the 5x Commitment Delivers:**\n\n**Building Reliable Habits:** Five consecutive adventures allows me to progressively expose your dog to a huge variety of real-world environments (forests, beaches, parks). This repetition is essential for helping your dog automatically focus on you, even when highly distracted.\n\n**Proofing Skills Under Distraction:** I focus on reinforcing key real-world skills like reliable recall, loose-lead foundations, and impulse control under heavy distraction. This package is the crucial step in teaching your dog to focus on you when it matters most.\n\n**Ultimate Mental and Physical Fulfilment:** This service is designed to be highly fulfilling. Your dog safely enjoys five sessions of running, sniffing, playing, and exploration, ensuring they return home thoroughly exercised, mentally stimulated, and happy.\n\n**Smart Savings:** This package ensures you maintain training momentum with a saving of $25 compared to booking five single sessions individually.",
        price: "$375",
        originalPrice: "$400",
        duration: "5 sessions",
        sessions: 5,
        category: "adventure",
        imageUrl: "/attached_assets/artem-beliaikin-edbhAWFxnTA-unsplash_1760531575107_opt.webp",
        features: [
          "5 x Adventure Outings (Each session is an hour of adventure and integrated training)",
          "Convenient Home Pick-up Service included",
          "Targeted reinforcement of Recall and Impulse Control under distraction",
          "Focus on safe exploration, fun, and fulfilling play",
          "Video and feedback after every session, including key tips for you"
        ],
        isPopular: false
      },
      {
        name: "The Neighbourhood Enrichment Pack",
        description: "Your reliable, budget-friendly solution for essential well-being.\n\nThis five-session package guarantees your dog receives consistent exercise, stimulation, and fun, all delivered right to your doorstep by a professional dog handler. It's the simplest way to ensure a happy, active dog, even on your busiest days.\n\n**What the 5x Commitment Delivers:**\n\n**Reliable, Consistent Care:** By committing to five sessions, you establish a consistent routine that your dog can count on. This regularity is key to reducing stress and maintaining good manners throughout the week.\n\n**Structured Enrichment Walks:** My walks are more than just a stroll. I ensure your dog gets plenty of essential sniffing time (mental stimulation) and attentive care, making every outing a fulfilling experience that leaves your dog content.\n\n**Ultimate Convenience & Simplicity:** I come directly to your home, ensuring your dog enjoys a healthy walk and essential exercise without you having to be present. It's the perfect helping hand for busy schedules.\n\n**Budget-Friendly Value:** This package offers the most convenient and reliable service while providing savings compared to booking single sessions.",
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
        excerpt: "Before a dog can learn, behave, or thrive, they have to feel good in their body. This is the non-negotiable starting point.",
        content: `# Health: The Foundation of Everything

*Before a dog can learn, behave, or thrive, they have to feel good in their body. This is the non-negotiable starting point.*

A dog in pain, discomfort, or poor health can't focus, cooperate, or stay calm. Train over that and nothing holds.

Health comes first. Always.

## Nutrition that actually fuels them

Diet is the cornerstone. Dogs perform better when they're properly fed, same as us.

The best approach combines raw, air-dried, or freeze-dried food. Maximum nutrient density, minimal processing. Puppies especially need that quality for their growing brains and bodies.

High-quality kibble can fill in around that for cost and convenience. That's fine. But the goal stays the same: nutrient-dense, species-appropriate food.

Poor nutrition doesn't just affect coat or energy. It shows up as behavioural issues, hyperactivity, and serious illness years down the track. When dogs feel good from the inside, they're more cooperative and focused. That isn't a coincidence.

## Rest is non-negotiable

Most people drastically underestimate how much sleep dogs need.

Depending on age and breed, that's 12 to 20 hours a day. This isn't laziness. It's biology. Their nervous systems need that time to process information, recover from stimulation, and reset.

Overstimulated dogs don't get tired. They get hyperactive, mouthy, and harder to manage. A lot of what gets labelled "stubborn" or "disobedient" is actually a dog who hasn't had enough recovery.

Structured downtime matters. So does a calm space where the dog can switch off.

## Pain hides in plain sight

Pain is the most overlooked factor in training problems.

Dogs are stoic. They hide discomfort. Which means it's easy to miss the signs that something is wrong.

If your dog's behaviour changes suddenly, if they start resisting handling, if training that worked stops working, look at pain first.

The quiet signs:
- Reluctance to jump up or down
- Changes in posture
- Increased irritability
- Licking the same spot over and over
- Resistance to being touched in a particular area

Acute injuries and chronic issues both count. Arthritis. Gut problems. Structural stuff. A dog in pain can't give you their best effort, no matter how much they want to.

## The vet is part of the team

Regular check-ups aren't just for when things go wrong. They're how you maintain the foundation.

When your dog feels good physically, everything else becomes possible. They can focus, they can learn, they can regulate their emotions, and they can truly partner with you. Health isn't just the first step—it's the foundation that supports everything meaningful you'll build together.`,
        imageUrl: "/attached_assets/health-foundation_1760531575107_opt.webp",
        readTime: "8 min read",
        publishedAt: new Date("2025-10-01"),
        tags: ["health", "foundation", "wellness", "four building blocks"],
        slug: "health-foundation-dog-training"
      },
      {
        title: "Lifestyle: Fulfilling Your Dog's Mind and Purpose",
        excerpt: "Once health is sorted, your dog needs a job. Without one, you'll get restlessness, anxiety, or behaviour that looks like disobedience but isn't.",
        content: `# Lifestyle: Fulfilling Your Dog's Mind and Purpose

*Once health is sorted, your dog needs a job. Without one, you'll get restlessness, anxiety, or behaviour that looks like disobedience but isn't.*

Once physical health is in check, your dog needs a healthy mind and purpose. Without it, dogs become restless, anxious, or hard to manage. Not because they're a problem. Because they're having a problem.

## Every dog has wiring underneath the breed

Every breed has natural drives, carefully built through generations of selective breeding. Those instincts don't disappear because your dog lives in a Brisbane suburb instead of a working farm.

The herding dog still wants to control movement. The retriever still craves carrying and delivering. The guardian still feels compelled to watch the territory.

Ignore that wiring and you're asking the dog to suppress something fundamental about who they are. That doesn't create a calm, obedient dog. It creates a frustrated one who'll find their own outlets, usually ones you don't appreciate.

## You don't need to give them the actual job

You don't need to give your Border Collie a flock or your Lab a hunting trip. You just need meaningful activities that satisfy the same drives in ways that work in modern life.

When dogs get appropriate outlets for their genetic needs, something shifts. They become more cooperative. More focused. More willing to work with you instead of against you.

Working breeds need challenges that engage both mind and body. High-energy dogs need structured outlets for their instincts. Even lower-drive dogs benefit from activities connected to their breeding purpose. Confidence and satisfaction in one area carries into every other.

## Freedom inside structure

Dogs need time to just be dogs. That means running, sniffing, chewing, exploring on their own terms.

But that freedom needs structure around it.

Sniff walks where the dog can move at their own pace and follow their nose. Off-lead time in safe areas where they can stretch out. Designated chewing stations so the appropriate items are obvious.

The key word is structured. Total suppression creates frustration. Total freedom creates chaos. Structured expression creates balance.

When dogs have appropriate outlets for natural behaviour, they're more willing to follow rules in other areas. The relationship runs on cooperation, not enforcement.

## Play with you is the strongest medicine

Play isn't entertainment. It's how dogs bond, learn, and regulate emotion.

The strongest play is interactive play between you and your dog. Not just dogs at the park. Not just toys on their own. Tug, chase, fetch, with you in the middle.

When you become your dog's main source of fun, you become the most relevant thing in their day. That relevance translates directly into better attention, better cooperation, better responses to direction. It's the foundation of the relationship.

## Scent work isn't just for hounds

Scenting is a biological need for all dogs. Their nose is their primary way of understanding the world.

This is why lifestyle and fulfillment must come before demanding obedience or trying to eliminate unwanted behaviors. Find what truly drives and motivates your individual dog, provide appropriate outlets for those drives, and you'll discover that everything else becomes significantly easier to achieve.`,
        imageUrl: "/attached_assets/lifestyle-fulfilling-dog-mind_1760531575107_opt.webp",
        readTime: "10 min read",
        publishedAt: new Date("2025-10-08"),
        tags: ["lifestyle", "mental stimulation", "breed drives", "four building blocks"],
        slug: "lifestyle-fulfilling-your-dogs-mind"
      },
      {
        title: "Clarity: How Communication Builds a Confident Dog",
        excerpt: "Even the healthiest, most fulfilled dog will struggle without clear communication. Confusion creates anxiety. Clarity creates confidence.",
        content: `# Clarity: How Communication Builds a Confident Dog

*Even the healthiest, most fulfilled dog will struggle without clear communication. Confusion creates anxiety. Clarity creates confidence.*

Dogs need to understand what's expected of them, what the boundaries are, and what your feedback means. Without that, even the most well-intentioned dog makes mistakes constantly. Everyone gets frustrated. The relationship erodes.

It comes down to one thing: confusion creates anxiety, clarity creates confidence.

## What clarity actually means

Clarity isn't rigid control or military discipline. It's consistent, meaningful communication the dog can rely on.

When your dog knows what your words mean, when they can predict what comes next, they feel secure. They cooperate. They settle. They stop wasting energy guessing what you want and start focusing on actually doing it.

A clear system reduces stress for both of you. It builds real trust. And it eliminates the exhausting guesswork that defines most dog-human relationships. Dogs are intelligent. They're not mind readers. The clarity has to come from you.

## The four windows of daily life

One of the most useful concepts in creating clarity is recognising that dogs naturally shift through different states throughout the day. Instead of expecting the dog to be "on" all the time, or letting them run completely unstructured, you can teach four distinct windows.

**Engagement.** Interactive play and connection. This is where you build relationship, develop drive, and create the foundation for cooperation. The dog is focused on you, ready to interact, ready to work together.

**Exploration.** Off-duty time. Sniffing, wandering, investigating. Self-directed decompression. Dogs need this to process the world through their nose, move at their own pace, and make their own choices.

**Calmness.** Low arousal. Settled. Relaxed. This window is non-negotiable. Dogs need to learn to switch off in the human world. It's not just lying down. It's a real state of mental and physical settling that lets the nervous system reset.

**Structured learning.** Focused effort with clear expectations and clean follow-through. The dog knows that during this time, the cues aren't optional. Concentrated work is expected.

A dog that can move smoothly between all four windows is a dog you can take anywhere. That's the framework for daily life, not just training.

## Markers carry weight

Words like "yes," "wrong," and "no" aren't just instructions. They're communication packages, each delivering several pieces of information in a single moment.

Markers work like pressing the shutter button on a camera. They take a snapshot of the exact second your dog made a choice.

**"Yes."** You made the right choice. Remember this. A reward is coming. The dog learns that specific behaviour earns the good stuff.

**"Wrong."** That wasn't it. No reward coming, but no big deal. Try something else. It's a redirect, not a telling-off. The dog can try again without stress.

**"No."** Stop, and don't do that again. This one has weight because it's followed through with a consequence. Fair, but clear.

The system works because dogs live in the moment. Markers freeze the exact second of the choice. That makes your communication more efficient, fairer, and less emotional. Instead of long explanations or frustrated reactions, you give clean feedback the dog can act on.

## The lead is a conversation

One of the most misunderstood tools in dog training is the lead.

Most people see it as restraint. Used well, it's the opposite. It's an extension of the relationship. An ongoing conversation about direction, pace, and focus.

Teaching the dog to respond to lead pressure rather than just tolerate it changes walks. Battle of wills becomes cooperative navigation. The handler offers soft, clear guidance. No jerking. No dragging. No constant tension. The pressure should feel like conversation, not conflict.

When the dog learns to yield to gentle pressure, to slow when they feel tension, to check in when they're unsure, the lead becomes a calm, reliable bridge. That awareness transfers everywhere else.

When communication is clear, training becomes collaborative rather than adversarial. Your dog becomes an active participant in the learning process because they understand what success looks like and how to achieve it.`,
        imageUrl: "/attached_assets/clear-communication_1760531575107_opt.webp",
        readTime: "9 min read",
        publishedAt: new Date("2025-10-15"),
        tags: ["communication", "clarity", "markers", "four building blocks"],
        slug: "clear-communication-building-confidence"
      },
      {
        title: "Life Skills: Obedience That Holds Up in the Real World",
        excerpt: "With health, lifestyle, and clarity in place, skills come last. They're the visible layer. But they only hold when everything underneath them is solid.",
        content: `# Life Skills: Obedience That Holds Up in the Real World

*With health, lifestyle, and clarity in place, skills come last. They're the visible layer. But they only hold when everything underneath them is solid.*

Skills are the obvious part of training. The cues people see at the park. But they're the last layer for a reason. If the dog is unwell, under-fulfilled, or confused, obedience will always be patchy. Skills sit on top of the framework. They don't replace it.

## What real life skills are

Skills aren't tricks. They're not about dominance or control. They're the dog's ability to navigate the human world without falling apart.

A real life skill is the ability to:
- Focus under pressure
- Pause when needed
- Move with you calmly and safely
- Respond to direction anywhere, anytime

Done properly, obedience isn't a power struggle. It's a shared language. You and the dog cooperating, even when things get loud.

These skills increase freedom. They don't shrink it. A dog with a reliable recall gets more off-lead time. A dog that walks well on lead gets taken more places. A dog that settles on cue is welcome in more environments. Good obedience opens doors.

## The skills every dog needs

Some skills are foundational regardless of breed, age, or temperament.

**Sit and down.** The basics for stillness and focus. Not just postures. Mental states the dog can hold while life happens around them. The reset button when arousal climbs too high.

**Stay and wait.** Patience and self-control. Teaches the dog that sometimes the right move is no move. Prevents the impulsive choices that lead to dangerous or annoying situations.

**Recall.** Coming when called. The most important safety skill there is. It can save your dog's life, and it earns them more freedom in return.

**Loose-lead walking.** Calm navigation, together. Makes walks something both of you actually want to do. Opens up shared adventures, easier vet visits, and stress-free movement through busy areas.

**Place.** Go to a spot, settle, stay there. A tool for managing the moments when you need the dog calm and contained without being shut away. Essential when guests arrive, during meals, or anywhere overstimulation needs somewhere to land.

**Leave it.** Disengage from the thing in front of you. Keeps the dog safe from dangerous items and teaches that not everything interesting is available. Extends to food, objects, animals, and people.

**Thresholds.** Wait for permission at doors, gates, car doors. Prevents escapes. Reduces over-excitement. Creates calmer transitions between environments.

## Build skills through engagement

The most effective way to build skills is through engagement and play. Not force. Not intimidation.

Most skills are best taught when the dog is alert, motivated, and ready to interact. Play, food, and connection make learning enjoyable and create good associations with the work. Dogs learn fastest when they're active participants, not when they're just enduring training sessions.

As the dog matures, expectations naturally rise. But the work stays fair, consistent, and fundamentally enjoyable. That part doesn't change.

## Skills have to travel

A skill that only works in your kitchen is a trick.

Real obedience holds up across environments and emotional states. The dog needs to learn to respond when excited, distracted, tired, anxious, or overstimulated. Otherwise you have a party trick, not a tool.

Your dog should be able to:
- Hold a sit while kids run past at the park
- Come when called even mid-play with another dog
- Walk loose-lead through a busy street
- Stay on a place mat while guests come and go
- Leave tempting food on the ground when asked

That doesn't happen overnight. It needs maintenance. Practice in different places. With different distractions. When the dog isn't in the mood.

## How to build it properly

Reliable skills follow a natural progression. You don't get there by demanding everything at once.

Skills get taught in calm, quiet environments first. The dog needs to succeed before they can be challenged. As the basic behaviour becomes confident, you start adding variables. Different locations. Mild distractions. Higher arousal.

Remember that skills are indeed the final piece of the puzzle, not the starting point. When built on solid foundations of health, mental fulfillment, and clear communication, they become natural expressions of your dog's desire to cooperate and succeed rather than behaviors that must be forced or constantly enforced.`,
        imageUrl: "/attached_assets/good-obedience-in-public_1760531575107_opt.webp",
        readTime: "8 min read",
        publishedAt: new Date("2025-10-22"),
        tags: ["obedience", "skills", "training", "four building blocks"],
        slug: "life-skills-obedience-that-works-everywhere"
      },
      {
        title: "Genetic Drives: A Breed-by-Breed Guide to What Your Dog Actually Needs",
        excerpt: "Your dog's behaviour isn't random. It's thousands of years of breeding aimed at a specific job. Find the job, fulfil it, and everything else gets easier.",
        content: `# Genetic Drives: A Breed-by-Breed Guide to What Your Dog Actually Needs

*Your dog's behaviour isn't random. It's thousands of years of breeding aimed at a specific job. Find the job, fulfil it, and everything else gets easier.*

When dogs don't get appropriate outlets for their natural instincts, they invent their own. Usually badly.

Herding dogs nip at children and chase cars. Hunting dogs tear the house apart looking for "prey." Guardian breeds become overprotective. High-energy breeds develop anxiety and destruction.

The fix isn't to suppress the drive. It's to fulfil it properly.

## The major drive categories

### Herding dogs

**Breeds:** Border Collie, Kelpie, Cattle Dog

**What they're wired for:** Controlling movement. Intense focus. Quick decisions. Close work with a handler.

**Fulfilment activities:**
- Flirt pole games (controlled chase with rules)
- Directional training: left, right, around, through
- Pattern work: weaving cones, set routes
- Impulse control: wait, then go on cue
- Tug with rules, building drive, then teaching "out"

### Hunting and retrieving dogs

**Breeds:** Labrador, Golden Retriever, Spaniels, Pointers, Setters

**What they're wired for:** Finding and retrieving. Using the nose. Water work. Carrying objects gently.

**Fulfilment activities:**
- "Find it" games around the house and yard
- Scent tracking with hidden rewards
- Fetch variations: different objects, distances, surfaces
- Delivery training: bring specific items on cue
- Water games where possible

### Guardian and protection dogs

**Breeds:** Rottweiler, Doberman, Mastiff, German Shepherd

**What they're wired for:** Territory protection. Threat assessment. Physical strength. Loyalty to the family unit.

**Fulfilment activities:**
- Structured tug with clear rules
- Obedience under distraction
- Perimeter walks with appropriate alerting
- Controlled bite work (with professional guidance only)
- Strength work: pulling, carrying, resistance

### Sighthounds

**Breeds:** Greyhound, Whippet, Afghan Hound, Saluki

**What they're wired for:** Chasing fast movement. Short, intense bursts. Visual tracking. Independence.

**Fulfilment activities:**
- Fast lure games with toys on strings
- Sprint-and-rest play
- Visual tracking games (eyes on movement before the chase)
- Coursing where available

### Terriers

**Breeds:** Jack Russell, Fox Terrier, Airedale, Bull Terrier

**What they're wired for:** Digging. Hunting small prey. Solving problems alone. Persistence that doesn't quit.

**Fulfilment activities:**
- Designated digging area (sandbox or dirt patch)
- "Hunt" games with toys buried in sand
- Flirt pole with small prey-like toys
- Puzzle toys with real problem-solving
- Tug and rag games with shaking

### Companion breeds

**Breeds:** Cavalier King Charles, Bichon, Havanese, Pug

**What they're wired for:** Human company. Lower physical drive. Social interaction. Gentle play.

**Fulfilment activities:**
- Food puzzles for mental work
- Easy scent games
- Social training: meeting people and dogs well
- Lap time and gentle handling
- Short training sessions that build confidence

## How to actually use this

### Step 1: Identify the primary drive

Look at the breed background, then watch the dog:
- What do they do when left to themselves?
- What gets them most fired up?
- What behaviour are you constantly trying to stop? That's usually the drive looking for an outlet.

### Step 2: Start small

Pick two or three activities from your dog's category. Try them for a week.
- Keep sessions short, five to fifteen minutes
- End on a high note
- Make it good for both of you

### Step 3: Build from there

Once the dog gets the game:
- Add challenge gradually
- Combine activities
- Use fulfilment before asking for obedience

### Step 4: Make it part of daily life

- Drive work in the morning before breakfast
- Sessions during natural energy peaks
- Use fulfilled drives to power training motivation later

When you honour your dog's genetic blueprint and provide appropriate outlets, you're not just managing behaviour—you're creating a partnership based on understanding and mutual satisfaction.`,
        imageUrl: "/attached_assets/genetic-drives_1760531575107_opt.webp",
        readTime: "12 min read",
        publishedAt: new Date("2025-11-05"),
        tags: ["breed drives", "genetics", "fulfillment", "behaviour", "training"],
        slug: "understanding-your-dogs-genetic-drives"
      },
      {
        title: "The Four Building Blocks: How a Balanced Dog Is Actually Built",
        excerpt: "Health, lifestyle, clarity, skills. In that order. Skip one and the rest falls over.",
        content: `# The Four Building Blocks: How a Balanced Dog Is Actually Built

*Health, lifestyle, clarity, skills. In that order. Skip one and the rest falls over.*

Most dogs aren't broken. They're missing one of four things.

Health. Lifestyle. Clarity. Skills.

When all four are in place, you don't have a "trained dog." You have a dog that feels good in their body, fulfilled in their mind, understood by their owner, and capable in the real world.

That's the foundation everything else sits on.

## The four blocks aren't separate

They're stages of the same build. Each one depends on the one before it.

The order matters more than most people realise.

Train life skills into an unhealthy dog and you'll get unreliable sessions and a frustrated owner. Ask for obedience from an under-fulfilled dog and you'll get constant battles and regression. Train without clear communication and you'll get a confused dog that "knows" the cues but can't apply them. Skip lifestyle and fulfilment and you'll get destructive, restless behaviour no amount of good training will fix.

Build them in order and the work holds. Try to skip steps and it doesn't.

## What a balanced dog actually looks like

When the four blocks are in place, the change is obvious.

**Physically.** They move with confidence. They sleep well. Their energy is steady through the day. They handle touch and grooming without drama.

**Mentally.** They engage when invited. They settle when asked. Curiosity without overwhelm. New situations get handled, not feared.

**Emotionally.** Securely attached without being clingy. Quick to recover from stress. Reactions that match the context. Not over the top. Not shut down.

**In behaviour.** Reliable around distraction. Good independent choices when no one's directing them. Smooth transitions between play and rest. Lives inside household rules without constant enforcement.

That's the picture. That's what's possible when the foundations are right.

## Where to start

Begin with an honest look at where your dog is in each area.

**Health.** Book a proper vet check. Look at diet, sleep, and any signs of pain or discomfort. No training overrides pain.

**Lifestyle.** What is your dog actually wired for? What drives sit underneath the breed? How well are those needs being met day to day?

**Communication.** How consistent is the system between you and your dog? Where do the mixed messages live? What does "no" actually mean in your house?

**Skills.** Which cues hold up in the real world, and which only work in the kitchen? What's missing?

Then build in order.

Sort the health stuff first. Nothing else lands until the dog feels good. Identify and meet the dog's drives. That's where motivation comes from. Install a clear communication system. Markers, lead pressure, a shared language. Then build the life skills that transfer to the real world.

## The work doesn't stop

This isn't a project you finish.

Health changes as dogs age. Catch problems early. Drives don't disappear. Fulfilment needs to be ongoing, not occasional. Communication systems need reinforcement as new situations come up. Skills need regular use in different places to stay reliable.

A dog that sits in your kitchen but not at the café doesn't have the skill. They have a trick.

## Why it's worth doing properly

Dogs with all four blocks in place become calm because their needs are met. Confident because they understand the world and their place in it. Cooperative because the relationship itself is the reward. Capable because they have skills that hold up when life gets loud.

That's not just better behaviour. That's a better life. For the dog, and for the people who live with them.

Build the blocks. Live the balance.`,
        imageUrl: "/attached_assets/generated_images/Balanced_harmonious_canine_life_357c8e73.webp",
        readTime: "12 min read",
        publishedAt: new Date("2025-11-19"),
        tags: ["four building blocks", "balance", "framework", "complete guide"],
        slug: "creating-balance-complete-framework"
      },
      {
        title: "The Four Windows: Why Your Dog Needs to Know How to Switch Off",
        excerpt: "Most dogs are only taught to go. The settle window is the foundation most owners skip — and why it matters before anything else.",
        content: `Your dog can probably sit. It might have a decent recall in the backyard.

But can it switch off?

Not crash from exhaustion. Switch off — move from active to genuinely low-arousal, on cue, in your lounge room, while something interesting is happening nearby.

For most dogs, the answer is no. Not because they're difficult. Because nobody taught them.

## Tired and calm aren't the same thing

Owners often arrive at their first session having already done two walks and a trip to the park. The dog is still wired.

Tired and calm are not the same state. A dog can be physically spent and still unable to settle. What you're seeing in that moment isn't excess energy. It's a dog that's never been given a cue to land on.

Calm is a skill. Like a recall or a loose lead walk, it has to be taught deliberately and expected consistently.

## The four windows your dog moves through

I work with four states in every dog's day.

Ready — engaged, interactive, working with the handler. Play, training, bonded focus. This is where real learning happens.

Free — off duty. Sniffing, wandering, self-directed decompression. The dog gets to be a dog.

Settle — low arousal. Calm. The dog genuinely switches off. Not because it's forced to, but because it understands the expectation.

Work — structured obedience. Non-negotiable follow-through. Positions held until the handler releases them. This is where impulse control is built and where real-world reliability comes from.

Most dogs I see are living in two of these. Ready and Free. Settle and Work are missing.

The result is a dog that's either switched on or completely checked out. It can't calm down on cue. It can't hold a position when it matters. It hits the first distraction and the wheels fall off.

## Why the settle window gets skipped

Because it's invisible until it's missing.

Play is enjoyable, so owners do it. Walks are obvious, so they happen. Obedience is visible — sit, drop, stay — so it gets some attention.

But teaching a dog to genuinely switch off doesn't feel like training. It feels like doing nothing. So it doesn't get done.

What owners miss is that the dog who can settle is the dog who can cope. Cope with a busy café. Cope with guests walking through the front door. Cope with another dog passing on the footpath without reacting. The ability to move into low arousal on cue is one of the most practical things a dog can develop.

## Why this comes before everything else

A dog that can't switch off at home isn't ready for the café. It isn't ready to work reliably outside, because the arousal level is already too high before you've started.

Every dog I work with, regardless of the presenting problem, gets this foundation first. Not because settle solves everything — because a dog that can move into genuine calm on cue is a dog whose nervous system is actually available to work with.

Build the windows at home. Take the work outside from there.

If you're not sure where your dog's gaps are, a free 15-minute phone call is the right place to start.`,
        imageUrl: "/attached_assets/dog-resting-settle_1760531575107_opt.webp",
        readTime: "5 min read",
        publishedAt: new Date("2026-05-18"),
        tags: ["calm", "settle", "behaviour", "training", "foundations"],
        slug: "the-four-windows-switch-off"
      },
      {
        title: "Adolescence: The Hardest Stage No One Warns You About",
        excerpt: "Your once-perfect puppy stopped listening at 9 months. Here's what's actually happening — and what to do before the bad habits become permanent.",
        content: `Your puppy used to come when called. They used to settle. They used to walk on lead without much drama.

Now they ignore you. Now they pull. Now they react to dogs they used to play with happily. And you're wondering what happened.

What happened is adolescence.

## The puppy you raised has left the building

Somewhere between 6 and 18 months, depending on the dog, adolescence kicks in. The brain is rewiring. The body is in a strange middle phase. Not a puppy. Not yet an adult. The hormones are doing what hormones do.

The dog in front of you is genuinely different to the one you had a few months ago. Not because they've forgotten everything. Because the foundations are being stress-tested under new conditions.

This is the stage where most "good puppies" become "difficult dogs." Not because the puppy training failed. Because training that worked in low-distraction environments doesn't automatically hold up against a teenage brain.

## What's actually happening

Three things shift at the same time.

The world becomes more interesting. Smells matter more. Other dogs matter more. The environment has more pull than the owner does. The puppy who used to focus on you now has competing priorities.

Impulse control becomes harder. The brain hasn't fully matured. Adolescent dogs genuinely struggle to override a strong impulse, even when they know what they should do.

Confidence shifts unpredictably. Some adolescent dogs get bolder and start testing. Others get more sensitive and start reacting to things that never bothered them before. Sometimes the same dog does both, in different contexts.

None of this is bad behaviour. It's normal development. But it's also the stage where habits set for life.

## Why this stage matters more than puppyhood

Puppyhood is foundational. Adolescence is where those foundations get tested.

If you taught your puppy to come when called in the kitchen, adolescence is when you find out whether the recall actually holds when there's another dog in the park.

If you taught your puppy to walk on a loose lead in the backyard, adolescence is when you find out whether the lead manners hold when something interesting walks past.

The habits that get practised during this window, good or bad, become the adult dog's defaults.

A dog that practises pulling for six months pulls forever. A dog that practises ignoring recall in adolescence becomes an adult who ignores recall. A dog that practises reactivity at the gate every morning becomes a reactive adult.

The reverse is also true. A dog that gets clean reps of the right behaviour through this stage walks into adulthood with those behaviours locked in.

## What the work looks like at this stage

It's different to puppy work. Less novelty. More proofing. Fewer new commands. More strengthening of the basics under harder conditions.

Engagement gets prioritised. You become the thing the dog wants to check in with, not a distraction from the world. Play and fulfilment do the heavy lifting here.

Impulse control gets built deliberately. Sit and wait at doors. Hold a down while distractions move past. Stay still while the food bowl is being prepared. Small reps, every day, in real contexts.

Boundaries get clarified. The rules that were soft in puppyhood get firmer. Not harsher. Clearer. The dog learns that requests are non-negotiable, and that's actually freeing for them.

## Don't wait it out

The most common mistake at this stage is hoping it passes.

It does pass. Eventually. But it leaves behind whatever the dog has been practising for the last six to twelve months. By the time owners get serious, the habits are usually well-established and the work takes longer than it needed to.

If your dog is in the adolescent window and things are slipping, that's the time to act.

A free 15-minute call is the simplest place to start. We'll talk through what you're seeing, what's normal, and what's worth working on now.`,
        imageUrl: "/attached_assets/naughty-dog-adolescence_1760531575107_opt.webp",
        readTime: "5 min read",
        publishedAt: new Date("2026-05-11"),
        tags: ["adolescence", "puppies", "behaviour", "training", "development"],
        slug: "adolescence-the-hardest-stage"
      },
      {
        title: "Your Dog Isn't Doing It to Spite You",
        excerpt: "Spite isn't in a dog's toolkit. Here's what's actually driving the behaviour — and why the fix is simpler than you think.",
        content: `The bin gets raided the moment you leave the room. The cushion gets destroyed within minutes of you stepping out the door. You catch your dog mid-act and you'd swear they know exactly what they're doing.

It's a natural read. But it's the wrong one.

The spite theory feels logical. It isn't.

Spite requires a dog to understand that a specific action will cause you distress, and to choose that action because they want that outcome. That's a level of social cognition dogs don't have.

Dogs are perceptive. They read body language, tone, and timing better than most owners realise. But reading your mood is very different from engineering revenge.

What looks like spite is almost always simpler: a behaviour that has worked before.

## What's actually driving the behaviour

Dogs learn through consequence. A behaviour that produces something good — food, entertainment, attention, access, relief — gets repeated. A behaviour that produces nothing, or produces something the dog dislikes, fades.

That's the whole system.

Raiding the bin worked once. The food was good. The opportunity came around again. It was tried again. Every time it works, the behaviour gets stronger.

Destroying a cushion is genuinely satisfying for a bored, under-stimulated dog. It uses the mouth, releases tension, and fills time. If nothing stops it, it keeps happening.

Your dog isn't waiting for you to leave because they want to punish you for leaving. They're waiting because your absence removes the one variable that usually interrupts the fun.

That's a management problem and a fulfilment problem. It's almost never a spite problem.

## Why the cause changes the fix

This is where the distinction actually matters.

If you believe it's spite, you focus on corrections after the fact. Stern voice. Frustration. The problem is that the behaviour already happened. The dog got the payoff before the correction arrived. And ten minutes later, the dog can't connect your reaction to something they did while you were gone. They connect it to whatever they were doing when you walked in — which is usually nothing.

So the corrections teach nothing useful. The behaviour continues. The "he knows what he's doing" theory gets reinforced. The cycle runs.

If you understand it's about access, opportunity, and unmet needs, you approach it completely differently.

## What to do instead

Start with management. If the bin is getting raided, move the bin. If the cushions are targets, close the door. This isn't surrendering. It's stopping the behaviour from practising itself into a deeper habit.

Then look at fulfilment. Most destructive behaviour in dogs is a lifestyle problem. The dog is under-stimulated, or not getting enough of what they're actually wired for — chewing, movement, real engagement with their owner. Address the root, and a lot of the surface behaviour resolves without much formal training at all.

Then build structure. A dog with clear routines, real skills, and a strong relationship with its owner has fewer reasons to self-entertain in ways that cause damage.

This doesn't happen overnight. But it builds quickly when the foundations are right.

## Ready to get clear?

If your dog is doing something you can't explain, it's worth getting a real read on what's driving it.

The Initial Canine Success Assessment is a 60-minute in-home session. You walk away understanding what's behind the behaviour, and with a plan to address it.

Start with a free 15-minute call. No pitch. Just a conversation about what your dog actually needs.`,
        imageUrl: "/attached_assets/guilty-dog_1779699487.webp",
        readTime: "6 min read",
        publishedAt: new Date("2026-05-05"),
        tags: ["behaviour", "dog psychology", "destructive behaviour", "training"],
        slug: "your-dog-isnt-doing-it-to-spite-you"
      },
      {
        title: "Why You Should Let Your Dog Win at Tug",
        excerpt: "The \"never let your dog win\" rule is outdated. Here's what winning actually does for your dog and why it matters for training.",
        content: `You've probably heard it. Never let your dog win at tug. It'll make them dominant, pushy, or hard to control.

It's repeated often enough that most owners just accept it. Then they wonder why their dog has no interest in the game.

## Where the rule came from

The idea sits inside a broader dominance framework that's been largely walked back by anyone paying attention. The thinking went: if the dog wins the toy, it perceives itself as higher in the pack hierarchy and becomes harder to manage.

The evidence for this was always thin. What we do know is that dogs aren't running a social ledger every time they grab a rope toy. They're playing. And play has rules that are a lot simpler than dominance theory suggests.

## What winning actually does

Winning builds confidence. It keeps the dog engaged. It gives the dog a reason to come back.

Think about it from the dog's perspective. If every game ends the same way, you take the toy, the fun stops, the dog loses, what's the incentive to keep playing? Some dogs push through anyway. Many don't. They disengage, they stop offering the game, or they grab the toy and run with it because at least that way they get to keep it for a minute.

The win is what makes the contest worth having. Without it, there's no game. There's just a human taking things off a dog.

## The trap of always winning

Owners who follow the "never let them win" rule often end up with dogs that are flat in play, disengaged in training, or possessive about toys because the only time they get to keep one is when they've stolen it.

That's not a confidence problem. That's a play problem that was trained in.

## How to do it properly

The win needs to feel earned. Hand the toy over too easily and it loses meaning. The dog learns the game has no real contest and the value drops. What you want is a genuine back and forth, some real resistance, and then a genuine victory that could win an Oscar. That sequence is what lights a dog up.

Let them win often. Make them work for it. End the game while they still want more, not after they've lost interest. That last part matters. You control when the game ends, not the dog. That's the structure inside the freedom.

Over time this builds a dog that's keen to play, confident in the contest, and actively looking to engage with you. That dog is easier to train, easier to redirect, and more connected in real-world situations where you actually need their attention.

## Why tug is one of the best training tools you have

The engagement built through tug transfers directly into training. A dog that loves playing with you will work harder, recover faster from mistakes, and stay more focused under distraction.

Tug also gives you a non-food reward that works in environments where food doesn't. High-distraction walks, reactive triggers, anywhere the dog's arousal makes treats irrelevant.

Most of the dogs I work with, tug becomes a core part of the training. Not as a side note but as the engine.

If your dog has gone flat in play or won't engage with toys, it's worth looking at whether the game has ever actually been worth playing for them.

A free 15-minute call is a good place to start. canineconfidence.com.au`,
        imageUrl: "/attached_assets/tug-game-dog-trainer_opt.webp",
        readTime: "5 min read",
        publishedAt: new Date("2026-06-01"),
        tags: ["play", "tug", "training", "engagement", "behaviour"],
        slug: "why-you-should-let-your-dog-win-at-tug"
      },
      {
        title: "Stubborn Dogs Aren't the Problem",
        excerpt: "Plenty of dogs are stubborn. That's not what's holding training back. Here's what stubbornness actually tells you, and what to do with it.",
        content: `There's a sentence I hear in nearly every initial assessment. "My dog is stubborn." Sometimes it's said with a laugh. Sometimes with frustration. Sometimes it's the thing that finally pushed the owner to ring me.

I never argue with it. Plenty of dogs are stubborn. The issue isn't whether the label is true. The issue is what owners do with it once they've decided it fits.

## Stubborn isn't a flaw, it's information

Selection pressure made certain breeds independent on purpose. Terriers had to make decisions underground without input from the handler standing on the surface. Scent hounds were bred to commit to a track even when called off it. Livestock guardians were built to assess a threat and act before the shepherd noticed. That's not bad behaviour. That's the job they were drawn for.

Plenty of family dogs without working credentials are stubborn too. A two-year-old Staffy who's spent eighteen months learning that ignoring a recall ends with a treat thirty seconds later has every reason to keep ignoring. From the dog's perspective, they're not being difficult. They're being consistent.

So when an owner tells me their dog is stubborn, I usually agree. The dog isn't wrong. They're working the system that's been built around them.

What gets owners stuck is treating the label as the answer.

"My dog is stubborn" can become the explanation for everything. Why recall doesn't hold. Why the dog ignores them at the park. Why three different trainers haven't shifted the behaviour. Stubbornness becomes a personality fact, like brown eyes or floppy ears, and the conversation stops there.

But stubbornness isn't a fixed trait. It's a signal. It tells you something specific about what the dog values, where your leverage is short, and what they've already learned works.

A dog who blows off recall at the park isn't broken. They're showing you that the squirrel, the smell, or the other dog is worth more than what you're holding. That's useful. Now you know where the gap is.

## What "stubborn" actually tells you

In practice, stubborn usually means one of three things.

**The dog doesn't value what you're offering in this moment.** Treats matter at home where there's nothing else going on. At the park, surrounded by every smell in Brisbane, a piece of kibble doesn't compete with the environment. The reward you've picked is too small for the job.

**The dog has practised getting their way.** Behaviour that's been reinforced gets repeated. If pulling on the lead has worked for two years, pulling is the default strategy. The dog isn't being defiant. They're using what works.

**The dog doesn't actually understand what you're asking.** Most dogs know "sit" in the kitchen. Fewer know "sit" on a slippery cafe floor with traffic going past. The cue hasn't generalised. From the dog's side, your request might as well be in a different language.

None of this is a character flaw. All of it is fixable.

## Building leverage instead of fighting the label

The work starts with the relationship.

I find what each dog actually values. For some dogs it's food. For others it's a tug toy. For a lot of the strong-willed ones, it's the chance to chase, fight a rag, or run hard at something. Once I know what lights them up, I've got currency.

Then I build clarity. The dog learns what each cue means, in stages, in environments that get gradually harder. Sit at home. Sit at the front door. Sit on the footpath. Sit at the cafe. Not all at once. Step by step, until the cue holds in the noise.

And I stop reinforcing the patterns that aren't serving them. Not with punishment. With clean information. The behaviour that used to work doesn't anymore. The new one pays.

A stubborn dog who understands the conversation, sees the value, and gets honest feedback usually softens fast. Not because they've changed personality. Because the system around them finally makes sense.

## Where to start

If your dog is described as stubborn often enough that it's become the explanation, the issue isn't the dog. It's the gap between what you're asking and what they're understanding. Increase the motivation and make it simple.

That's a fixable gap. The free 15-minute phone consult is where I'd start. No commitment, just a conversation about what's actually going on.`,
        imageUrl: "/attached_assets/stubborn-dog-pulling_1779699487.webp",
        readTime: "5 min read",
        publishedAt: new Date("2026-05-25"),
        tags: ["behaviour", "training", "stubbornness", "motivation"],
        slug: "stubborn-dogs-arent-the-problem"
      },
      {
        title: "Why Socialising Your Puppy Has Nothing to Do With Meeting More Dogs",
        metaTitle: "Why Socialising Your Puppy Has Nothing to Do With Meeting More Dogs | Canine Confidence Brisbane",
        excerpt: "Most puppy socialisation advice is wrong. Here's what your puppy actually needs to build real confidence in Brisbane's busy suburbs.",
        content: `Most puppy owners have heard the same advice: get your puppy out there, let them meet as many dogs and people as possible, and the rest will sort itself out.

It sounds reasonable. It's mostly wrong.

## What Does Socialisation Actually Mean?

Socialisation isn't about volume. It's about how your puppy processes the world around them. The goal is a dog who can see something unfamiliar and move on without falling apart. Not a dog who needs to interact with every person, dog, and distraction they encounter.

There's a difference between a puppy who's been exposed to the world and a puppy who's learned to handle it.

## Why More Dogs Doesn't Mean More Confidence

When you let a puppy greet every dog they see, you're not building confidence. You're building a pattern. Your puppy learns that other dogs are always accessible, always exciting, and worth pulling toward on every walk.

By adolescence, that pattern becomes a problem. A dog who expects to get to every dog on lead will start reacting when they can't. What looked like sociability at 10 weeks becomes frustration reactivity at 8 months.

The other risk is flooding. Too many experiences, too fast, without time to process. A puppy who's overwhelmed doesn't learn that the world is safe. They learn that the world is a lot — and start shutting down or overreacting to manage it.

## What a Well-Socialised Puppy Really Looks Like

A well-socialised puppy notices things and moves on. That's it.

They see a dog across the street, register it, and keep walking. They hear a loud noise, flick their ears, and get on with it. They walk into a new environment, sniff around, and settle.

That calm, curious neutrality is the goal. Not enthusiasm. Not indifference. Neutrality.

## How to Expose Your Puppy to the World Without Overwhelming Them

Let your puppy observe before they interact. Sit near a busy footpath. Watch dogs from across the oval. Walk through a shopping centre car park without stopping to greet anyone.

Watch their body language. Ears forward and relaxed, curious movement, easy breathing — that's a puppy processing well. Whale eyes, tight body, tucking back — that's a puppy who needs more distance, not more exposure.

The rule of thumb: if they can't settle and recover in the environment, the environment is too much. Pull back, find the distance where they're comfortable, and work from there.

You also want to remain your puppy's main source of engagement. Occasional well-managed interactions with calm, appropriate dogs are fine. But if every walk revolves around greeting other dogs, you've handed that role to every stranger's pet.

## What to Do If Your Puppy Is Already Struggling

If your puppy barks, lunges, or shuts down around other dogs, that's information. It doesn't mean you've failed. It means the foundations need attention before the exposure continues.

Start at home. Build confidence through play. Establish clear communication. Then reintroduce the world at a pace your puppy can actually handle.

If you're in Northside Brisbane and want help getting this right, the Confident Start Program is six private in-home sessions designed specifically for puppies. We work on confidence, play, how your puppy learns, and how to navigate the hard moments of the first year.

Book directly at canineconfidence.com.au.`,
        imageUrl: "/attached_assets/puppy-watching-park-socialisation_opt.webp",
        readTime: "6 min read",
        publishedAt: new Date("2026-06-15"),
        tags: ["puppy", "socialisation", "confidence", "puppy training", "Brisbane"],
        slug: "puppy-socialisation-not-about-meeting-more-dogs"
      },
      {
        title: "Why Your Dog Ignores You on Walks (and the Two-Minute Fix Before You Leave the House)",
        metaTitle: "Why Your Dog Ignores You on Walks — Two-Minute Fix | Canine Confidence Brisbane",
        excerpt: "Why dogs tune out on walks, and the simple routine that fixes it before you even leave the house.",
        content: `Your dog sits perfectly in the kitchen. The second the lead comes out, it's a different animal. Pulling at the door, spinning, dragging you down the driveway before you've even locked it behind you.

You've probably been trying everything you can, when walking. You've just been starting the walk in the wrong place.

## Why the first ten seconds matter

Most owners think a walk starts when they step outside. It actually starts the moment the lead touches the collar. That's the first signal your dog gets that something's about to happen, and it's the first chance you have to decide who's setting the tone.

If the dog drags you out the gate, that's the whole walk decided already. You spend the next forty minutes managing a dog that's already over threshold, instead of walking one that's checked in with you.

## What's actually happening

Dogs are quick to read patterns. If lead on always means rushing straight out the door, the dog learns that sequence and runs it every time. Excitement builds before you've even left the house, and there's nothing to bring it back down.

This isn't about obedience for its own sake. It's about giving the dog a moment to switch from "off duty" to "engaged with you" before the world outside gives it a hundred other things to focus on instead.

## The two-minute fix

Before you open the door:

- Clip the lead on.
- Ask for a sit.
- Wait a beat. A few seconds of stillness is enough.
- Release and walk out together, not the dog first.

That's it. You're not asking for a long down-stay or a complicated routine. You're asking for one small moment of focus before the door opens, so the dog leaves the house with you, not ahead of you.

If your dog won't sit calmly with the lead on, that's useful information too. It usually means the excitement is already too high before you've started, and that's worth working on specifically rather than pushing through it.

## How this carries into the rest of the walk

A dog that checks in with you at the door is far more likely to check in with you at the letterbox, the corner, the dog across the street. You haven't just fixed the first ten seconds. You've set the expectation for the whole walk.

It won't fix everything overnight. But it's the easiest, fastest change most owners can make, and it's usually the first thing I work on with a new client because everything else builds on it.

If your dog's walks start like a wrestling match and you're not sure where to start untangling it, a free fifteen-minute call is the easiest first step. We'll talk through what's actually happening and whether Walk and Train or a coaching session is the better fit for where you're at.`,
        imageUrl: "/attached_assets/dog-walk-blog-post.png",
        readTime: "4 min read",
        publishedAt: new Date("2026-06-22"),
        tags: ["walks", "leash walking", "training", "behaviour", "quick tips"],
        slug: "why-your-dog-ignores-you-on-walks"
      },
      {
        title: "Your Dog Isn't the Problem. It's Having a Problem.",
        metaTitle: "Why Your Dog Acts Out — and What's Actually Missing | Canine Confidence Brisbane",
        excerpt: "Jumping, chewing, digging, barking — most Brisbane dog behaviour problems come down to one thing. Here's what your dog actually needs, and where to start.",
        content: `Most behaviour people call "crazy" is just an unmet need wearing a dog suit.

Jumping on furniture. Chewing things they shouldn't. Digging holes in the backyard. Barking at everything. Pulling so hard on the lead the walk becomes a battle.

These aren't personality traits. They're outputs. What the dog does when nobody has set up a framework for what to do instead.

## Why "difficult" dogs usually aren't

In six years of working with dogs across Brisbane, the pattern is consistent. The dog labelled difficult, destructive, or just plain crazy is almost never actually any of those things. They're a dog, in a home that wasn't set up for a dog.

That's not a criticism of owners. Most people get a dog without anyone telling them what dogs actually need beyond food, water, and walks. And walks, as it turns out, only cover one part of the picture.

## The four things dogs need to function

Dogs need four things to live well and behave predictably:

**Physical fulfilment.** Not just exercise, but the right kind for their breed and drive level. A walk around the block doesn't cut it for a working breed with a high activity drive. They need something that actually depletes the tank.

**Mental engagement.** Dogs are problem-solvers. When nothing in their environment gives them a problem to solve, they make one. Usually involving your furniture.

**A clear communication system.** Dogs aren't born understanding what we want. They need a consistent language: a marker for right, a marker for wrong, and the patience to teach them both. Without it, the dog is guessing. Guessing dogs are stressed dogs.

**An outlet for breed drives.** A Staffy needs to tug. A Border Collie needs movement-based training or a mental challenge to work through. A Beagle needs to sniff. When those drives have nowhere to go, they find somewhere. It's not optional for the dog. It's just biology.

## What happens when the needs aren't met

The energy goes somewhere. It always does.

Chewing is often understimulation. Jumping is often unmet drive. Barking at the fence is often a dog that's been left to pattern that behaviour because there was nothing else to do. Reactivity on the lead is sometimes arousal that was never taught to come down.

None of this is malice. Dogs don't misbehave to frustrate you. They respond to what their environment is asking of them, and when the environment is offering nothing, they get creative.

## This isn't a training problem. It's a setup problem.

This is the part most people miss. Training the dog to stop jumping, stop barking, stop pulling is one layer. But if the underlying needs aren't being met, you're chasing symptoms.

Addressing the setup means asking: what does this dog actually need, and is the daily routine providing it? Often the answer changes everything without a single formal training session.

That said, you still need the communication system. Because once the needs are met, you need a way to direct the dog toward the right behaviour when it matters.

## Where to start

Start with observation. Watch the dog for a week. When does the behaviour happen? What did the day look like before it? What's missing?

If you're a dog owner in north Brisbane and something on this list sounds familiar, the free 15-minute call exists for exactly that. No pitch. Just an honest answer about what your dog actually needs.

Based in Boondall, I work with dogs and owners across Brisbane's north side.

Book via the link in the menu.`,
        imageUrl: "/attached_assets/dog-unmet-needs-brisbane_opt.webp",
        readTime: "4 min read",
        publishedAt: new Date("2026-06-08"),
        tags: ["behaviour", "unmet needs", "Brisbane", "dog training"],
        slug: "why-dogs-act-out-unmet-needs-brisbane"
      },
      {
        title: "Why I Use Different Dog Training Tools for Different Dogs in Brisbane",
        excerpt: "A Northside Brisbane dog trainer explains how he matches training tools — flirt poles, flexi leads, tugs and more — to the job each dog needs, not a one-size-fits-all kit. Because the question isn't 'what's the best tool.' It's 'what job do I need this tool to do, for this dog.'",
        content: `# Why I Use Different Dog Training Tools for Different Dogs in Brisbane

*A Northside Brisbane dog trainer explains how he matches training tools — flirt poles, flexi leads, tugs and more — to the job each dog needs, not a one-size-fits-all kit.*

## Why doesn't every dog get the same training tools?

Because the question isn't "what's the best tool." It's "what job do I need this tool to do, for this dog."

Sometimes that means two very different dogs end up using the same tool for opposite reasons.

## What's actually in my kit, and why

**Flirt pole.** First thing out of the bag with a lot of new dogs. A high-drive dog chases it because it moves like prey. A nervous dog uses the exact same tool to engage with me from a safe distance, no pressure to come close. Same toy, two different jobs. The pole and rope also do the movement work for me, so I'm not manufacturing the same energy a tug would need.

**Flexi lead.** My favourite tool, and the most misunderstood. Used with a bit of common sense, it gives the dog real freedom to sniff and explore while I still have instant pressure on the collar the moment I need it. That combination solves more leash walking problems than people expect.

**Drag line.** Light, long, dragging behind the dog during play or back-tied work. Lets me redirect or interrupt without grabbing the dog or the collar.

**Biothane leads.** Can be glamorous but I love them because they are functional. Rinses clean, doesn't hold water, sand or smell, survives Brisbane humidity.

**Chuckit! Kick It ball and Starmark Swing 'n Fling Chewball.** Some dogs ignore every toy you put in front of them until one of these clicks. The Chewball in particular is close to indestructible — floats, bounces, works for tug or fetch.

## How do you know which tool a dog actually needs?

You watch the dog, not the trend. That's what the Initial Canine Success Assessment is built around — figuring out what actually motivates your dog before we build a plan around it.

Tristan`,
        imageUrl: "/attached_assets/cleo-ball_opt.webp",
        readTime: "3 min read",
        publishedAt: new Date("2026-06-29"),
        tags: ["tools", "equipment", "Brisbane", "dog training", "flirt pole"],
        slug: "right-tool-for-the-right-dog-brisbane"
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

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(p => p.slug === slug);
  }

  async createBlogPost(post: InsertBlogPost & { publishedAt?: Date }): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const newPost: BlogPost = {
      ...post,
      id,
      publishedAt: post.publishedAt ?? new Date()
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
