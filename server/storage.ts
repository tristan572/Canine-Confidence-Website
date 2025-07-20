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
        price: "$550",
        originalPrice: "$600",
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
        price: "$280",
        originalPrice: "$300",
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
        price: "$280",
        originalPrice: "$300",
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

    // Seed blog posts - Four Building Blocks Articles
    const blogData: InsertBlogPost[] = [
      {
        title: "Building Block 1: Health - The Foundation of Everything",
        excerpt: "Before your dog can learn, behave, or thrive, they must feel good in their body. Discover why health is the non-negotiable starting point for all training success.",
        content: `# Building Block 1: Health - The Foundation of Everything

Before you can expect your dog to learn, behave, or thrive, they must first feel good in their body. This block is the non-negotiable starting point—without physical wellbeing, no amount of training, play, or structure will stick.

A dog in pain, discomfort, or poor health can't be expected to focus, cooperate, or feel calm. Health must come first—always.

## Key Elements of Canine Health

### 1. Diet
Feed a species-appropriate, balanced diet that fuels your dog's body and mind:
- Puppies need extra support for growth and development
- A mix of raw, air or freeze-dried food should be used—aim for nutrient density and minimal processing
- High-quality kibble can be mixed with the above for financial or practical reasons, if needed
- Poor nutrition often shows up as behavioural issues, poor coat and severe illness, years down the track

### 2. Rest & Recovery
- Dogs need 12–20 hours of sleep a day, depending on age and breed
- Overstimulated dogs become hyperactive and mouthy, not just tired
- Provide structured down time and calm spaces for nervous system recovery

### 3. Pain Management
- Always rule out pain if your dog's behaviour changes or they resist handling or training
- Dogs hide pain well—watch for subtle signs: reluctance to jump, changes in posture, irritability, or licking a body part
- Address both acute (injury) and chronic (arthritis, gut issues, structural problems) pain

### 4. Vet Check-Ups
- Regular health assessments are essential—even for young or seemingly healthy dogs
- Get baseline bloodwork done early in life for comparison later
- Early detection prevents long-term suffering and expensive interventions

### 5. Supplements (if needed)
Consider supplements for:
- Omega-3s for inflammation and coat health
- Probiotics for gut support
- Joint supplements for active or ageing dogs

## Why You Can't Skip This Block

- A dog in pain won't respond to leash pressure, play, or commands without distress
- Poor sleep leads to over-arousal, short fuse, and erratic behaviour
- Medical issues often look like behaviour problems—but they're not

When something seems "off," start by checking physical health. Don't train over pain.`,
        imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "8 min read",
        tags: ["health", "foundation", "wellness", "four building blocks"]
      },
      {
        title: "Building Block 2: Lifestyle - Fulfilling Your Dog's Mind",
        excerpt: "Once physical health is in check, your dog needs mental fulfillment and purpose. Learn how to identify your dog's natural drives and provide meaningful outlets.",
        content: `# Building Block 2: Lifestyle - Fulfilling Your Dog's Mind

Once physical health is in check, your dog needs a healthy mind and purpose. Without this, dogs become restless, anxious, or difficult to manage—not because they're a problem, but because they're having a problem.

## Key Elements of Canine Lifestyle

### 1. Purpose & Fulfillment
Every breed—and every individual dog—has natural drives, whether it's to chase, herd, hunt, guard, retrieve, or problem-solve.

While we can't always provide the real job (like sheep to herd or animals to hunt), we can fulfill these drives through thoughtful play and training activities that satisfy your dog's genetic needs.

**Understanding Your Dog's Drive:**
- Working breeds need jobs that challenge their minds and bodies
- High-energy dogs require outlets for their natural instincts
- Every dog benefits from activities that match their breeding purpose
- The right fulfillment activities prevent frustration and behavioral issues

### 2. Freedom & Expression
- Dogs need time to run, sniff, chew, and just be a dog
- Provide outlets (sniff walks, off leash running, chewing stations) that give freedom without sacrificing safety
- Suppression creates frustration—structured expression creates balance

### 3. Play
- Play is how dogs bond, learn, and regulate emotion
- Prioritise interactive human play like tug, chase, and fetch
- You should remain their main source of fun and fulfillment

### 4. Scent Work
- Scenting is a biological need for all dogs—not just hounds
- Simple games like "find it," scatter feeding, or intro-level scent work build confidence and calmness

## Why This Block Matters

Mental fulfillment is not optional—it's essential. Dogs with unmet lifestyle needs often show:
- Excessive barking
- Destruction
- Escaping or chasing
- Over-excitement or reactivity

A fulfilled dog is more focused, more cooperative, and more peaceful in daily life.

**Remember:** Find what drives your dog—and use it later to build clarity and skills.`,
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "10 min read",
        tags: ["lifestyle", "mental stimulation", "breed drives", "four building blocks"]
      },
      {
        title: "Building Block 3: Clarity - Understanding & Communication",
        excerpt: "Even the healthiest, most fulfilled dog will struggle without clarity. Learn how to create clear communication that builds confidence and eliminates confusion.",
        content: `# Building Block 3: Clarity - Understanding & Communication

Even the healthiest, most fulfilled dog will struggle to fit into our lives without clarity. Dogs need to understand what is expected of them, what their boundaries are, and how to interpret our feedback.

**Confusion creates anxiety. Clarity creates confidence.**

## What Clarity Really Means

Clarity isn't about rigid control—it's about consistent, meaningful communication. When your dog knows what words and tools mean, they feel more secure, cooperative, and calm.

A clear system reduces stress, builds trust, and eliminates guesswork.

## 1. The 4 Windows of Opportunity

Dogs move through natural "windows" or states of being. Teaching your dog to enter and exit each one smoothly creates emotional balance, better behaviour, and a deeper bond.

| Window/Command | Purpose | Definition |
|----------------|---------|------------|
| **Ready** | Engagement | Interactive play with you. Builds relationship, drive, and focus. |
| **Free** | Exploration | Off-duty time to sniff, wander, or just be a dog. Self-directed decompression. |
| **Settle** | Calmness | Low arousal, calm relaxation. Teaches patience and emotional control. Must be non-negotiable. |
| **Work** | Obedience | Structured skills, commands, and focused effort. Clear expectations, non-negotiable follow-through. |

Teaching your dog these states—and how to switch between them—is one of the most valuable things you'll ever do.

**This becomes the framework for daily life, not just a training concept.**

## 2. Markers Build Meaning

Words like "yes," "wrong," and "no" are not just instructions—they're communication packages, giving the dog multiple bits of info in one precise moment.

- **"Yes"** – Correct! Leave your position and take your reward from handler.
- **"Get it"** – Correct! Leave your position and take your reward over there.
- **"Wrong"** – Try something else, no big deal. No reward for that behaviour.
- **"No"** – That's over. Stop the behaviour now and forever. Intolerable outcome is coming.

### How to Use Markers: Mark the Moment

Markers are like pressing the shutter button on a camera: They take a snapshot of the exact moment/behaviour your dog does something you want to strengthen or weaken.

- **Yes** – Taking a photo of the behaviour your dog did right. That behaviour will be remembered and repeated because it's followed by a reward.
- **Wrong** – A gentle click showing your dog this moment won't lead to rewards. No big deal, just try something else.
- **No** – A clear picture of unacceptable behaviour that should never be repeated. We follow "no" with something undesirable to the dog, done fairly.

**Why it works:** Dogs live in the moment. Markers "freeze" the exact second your dog makes a choice, making your communication more efficient, fairer, and less emotional.

## 3. The Leash Is Communication, Not Restraint

The leash is an extension of your relationship—not just a tool for control.

- Teach your dog how to respond to leash pressure, not just tolerate it
- Use soft guidance, not jerking or dragging
- Pressure should feel like conversation, not conflict

When used clearly and fairly, the leash becomes a calm, reliable bridge between you and your dog.

## Why Clarity Is Foundational

- Dogs without clarity guess—and usually guess wrong
- Inconsistent communication creates confusion, stress, and disobedience
- Clear systems allow your dog to relax, focus, and make better choices

Clarity isn't about perfection—it's about predictability. Dogs thrive when they know what things mean.`,
        imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "9 min read",
        tags: ["communication", "clarity", "markers", "four building blocks"]
      },
      {
        title: "Building Block 4: Skills - Obedience That Holds Up in Real Life",
        excerpt: "With health, lifestyle, and clarity in place, we can focus on skills—the structured obedience behaviours that help your dog function confidently in everyday life.",
        content: `# Building Block 4: Skills - Obedience That Holds Up in Real Life

With health, lifestyle, and clarity in place, we can now focus on skills—the structured obedience behaviours that help your dog function calmly and confidently in everyday life.

Skills are the visible layer of training, but they only work when the other foundations are solid. If your dog is unwell, under-stimulated, or confused about what's expected, obedience will always be shaky.

**Skills give your dog the ability to live well in our human world—and give you the tools to guide them calmly through it.**

## What Skills Really Mean

Skills aren't just about tricks or control. They're about building your dog's ability to:
- Focus under pressure
- Pause when needed
- Move with you calmly and safely
- Respond to direction anywhere, anytime

**Obedience shouldn't feel like a power struggle—it should feel like a shared language.**

When trained properly, these skills increase freedom, reduce conflict, and make life more enjoyable for everyone involved.

## Core Life Skills Every Dog Should Learn

| Command/Concept | Purpose |
|-----------------|---------|
| **Sit / Down** | Stillness and focus |
| **Stay / Wait** | Patience and self-control |
| **Recall (Come)** | Freedom and safety |
| **Loose Lead Walking (Let's go)** | Calm navigation through the world |
| **Place** | Boundaries and relaxation |
| **Leave It** | Impulse control and safety |
| **Out** | Impulse control, play |
| **Thresholds** | Respect for space and exits |
| **Middle** | Engagement, safety, confidence |

**These are real-life skills—not tricks.** They reduce stress, increase trust, and make daily life smoother.

## Teaching Through Play, Not Pressure

- Most skills are best taught through play and luring, during the Ready window
- As your dog matures, expectations increase—but training remains fair, consistent, and fun
- Skills should be proofed in every window—Free, Settle, Work, and during Ready—so your dog doesn't only listen in perfect conditions

## The Work Window Needs Ongoing Work

Obedience is not a one-time achievement—it's a skillset that needs ongoing maintenance and generalisation.

- Dogs must learn to perform behaviours in different environments, levels of distraction, and states of arousal
- The Work window must be revisited regularly and adjusted as the dog's needs and challenges evolve

**A dog that can "sit" in your kitchen but not at the café doesn't have the skill—they have a trick.**

## Real-World Application

True obedience isn't what the dog does in training—it's what they can do in real life.

Your dog should be able to:
- Sit calmly while children run past
- Come when called at the off-leash park
- Walk on a loose lead through busy streets
- Stay on their place bed while guests visit
- Leave food on the ground when asked

## Building Skills Step by Step

1. **Start in the Ready window** - Use play and motivation
2. **Proof in different windows** - Ensure reliability across all states
3. **Add distractions gradually** - Build confidence in challenging environments
4. **Maintain regularly** - Skills need ongoing practice and refinement
5. **Apply in real life** - Transfer training to everyday situations

Remember: Skills are the final piece of the puzzle, not the starting point. When built on solid foundations of health, lifestyle, and clarity, they become reliable tools that serve both you and your dog for life.`,
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "8 min read",
        tags: ["obedience", "skills", "training", "four building blocks"]
      },
      {
        title: "Understanding Your Dog's Genetic Drives: A Breed-Specific Guide",
        excerpt: "Every dog has natural instincts bred into them for centuries. Learn how to identify your dog's drives and provide fulfilling activities that satisfy their genetic needs.",
        content: `# Understanding Your Dog's Genetic Drives: A Breed-Specific Guide

Your dog's behavior isn't random—it's driven by thousands of years of selective breeding. Understanding these genetic drives is the key to a fulfilled, balanced dog who cooperates with you instead of working against you.

## Why Genetic Drives Matter

When dogs don't get appropriate outlets for their natural instincts, they create their own "jobs"—usually ones we don't appreciate:
- Herding dogs nip at children and chase cars
- Hunting dogs destroy the house searching for "prey"
- Guardian breeds become overprotective or aggressive
- High-energy breeds develop anxiety and destructive behaviors

**The solution isn't to suppress these drives—it's to fulfill them appropriately.**

## The Major Drive Categories

### Herding Dogs
**Breeds:** Border Collie, Australian Kelpie, German Shepherd, Australian Cattle Dog

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

When you honor your dog's genetic blueprint and provide appropriate outlets, you're not just managing behavior—you're creating a partnership based on understanding and mutual satisfaction.`,
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "12 min read",
        tags: ["breed drives", "genetics", "fulfillment", "behavior", "training"]
      },
      {
        title: "The Four Building Blocks: Creating Balance for Life",
        excerpt: "Discover how health, lifestyle, clarity, and skills work together to create a calm, confident companion. Learn the complete framework for lasting harmony.",
        content: `# The Four Building Blocks: Creating Balance for Life

When all four blocks—Health, Lifestyle, Clarity, and Skills—are working together, you don't just have a trained dog. You have a calm, confident companion who feels good, feels fulfilled, understands how to live with you, and can follow your lead in the real world.

**This is how balance is built—and how harmony between humans and dogs is truly achieved.**

## Understanding the Framework

The Four Building Blocks aren't separate training methods—they're interconnected foundations that must work together:

### Block 1: Health - The Foundation
Without physical wellness, nothing else matters. A dog in pain, poor health, or chronic discomfort cannot:
- Focus on training
- Regulate emotions properly  
- Respond consistently to guidance
- Feel confident in their body

**Health must come first—always.**

### Block 2: Lifestyle - The Mind's Needs
Once your dog feels good physically, their mind needs purpose and fulfillment. Every dog has genetic drives that must be satisfied:
- Herding breeds need movement control
- Hunting breeds need scent and retrieval work
- Guardian breeds need protection-style engagement
- All dogs need freedom, play, and mental stimulation

**A fulfilled dog is naturally more cooperative and balanced.**

### Block 3: Clarity - The Communication Bridge
Even healthy, fulfilled dogs need to understand what's expected of them. Clear communication creates:
- Predictable interactions
- Reduced anxiety and confusion
- Stronger trust between dog and owner
- Framework for daily life through the 4 Windows (Ready, Free, Settle, Work)

**Clarity isn't control—it's confident communication.**

### Block 4: Skills - Real-World Application
With the first three blocks solid, your dog can now learn reliable life skills:
- Obedience that works anywhere
- Impulse control under pressure
- Calm navigation through human environments
- Safety and freedom through reliable responses

**Skills are the visible layer, but they only work when built on solid foundations.**

## Why the Order Matters

You cannot skip blocks or build them out of order:

❌ **Teaching skills to an unhealthy dog** = Unreliable, stressful training
❌ **Demanding obedience from an unfulfilled dog** = Constant battles and regression  
❌ **Training without clarity** = Confused, anxious responses
❌ **Skipping lifestyle needs** = Destructive, restless behaviour despite "good" training

✅ **Building systematically** = Lasting balance and genuine partnership

## Signs of a Balanced Dog

When all four blocks are in place, your dog will:

**Physically:**
- Move confidently and comfortably
- Sleep well and wake refreshed
- Show consistent energy levels
- Respond to touch and handling calmly

**Mentally:**
- Engage enthusiastically in appropriate activities
- Settle easily when asked
- Show curiosity without overwhelming excitement
- Adapt to new situations with confidence

**Emotionally:**
- Demonstrate secure attachment to you
- Recover quickly from stress or excitement
- Show appropriate responses to different contexts
- Display calm confidence in their daily life

**Behaviourally:**
- Respond reliably to guidance in any environment
- Make good choices independently
- Transition smoothly between different activities
- Live peacefully within human household rules

## Implementing the Four Building Blocks

### Start with Assessment
- Health: Schedule a vet check and evaluate diet, sleep, pain levels
- Lifestyle: Identify your dog's breed drives and current fulfillment level
- Clarity: Assess your current communication consistency
- Skills: Evaluate which life skills need development or refinement

### Build Systematically
1. **Address health first** - No training until physical needs are met
2. **Identify and fulfill drives** - Find what truly motivates your dog  
3. **Establish clear communication** - Implement the 4 Windows and marker system
4. **Develop reliable skills** - Build obedience that transfers to real life

### Maintain Balance
- Regular health monitoring and care
- Ongoing fulfillment of genetic drives
- Consistent communication and expectations
- Continued skill development and proofing

## The Result: True Partnership

Dogs with all four blocks in place become:
- **Calm** - because their needs are met
- **Confident** - because they understand their world
- **Cooperative** - because the relationship is fulfilling
- **Capable** - because they have the skills to succeed

This isn't just training—it's building a life together based on mutual understanding, clear communication, and genuine care for your dog's complete wellbeing.

**Build the blocks. Live the balance.**

Your dog is counting on you to provide not just commands and correction, but a complete foundation for a confident, fulfilling life. When you give them health, lifestyle, clarity, and skills, you're not just training behaviour—you're building a relationship that will bring joy and harmony for years to come.`,
        imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "12 min read",
        tags: ["four building blocks", "balance", "framework", "complete guide"]
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
