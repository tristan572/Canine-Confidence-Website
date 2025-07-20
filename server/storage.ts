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
        title: "Health: The Foundation of Everything",
        excerpt: "Before your dog can learn, behave, or thrive, they must feel good in their body. Discover why health is the non-negotiable starting point for all training success.",
        content: `# Health: The Foundation of Everything

Before you can expect your dog to learn, behave, or thrive, they must first feel good in their body. This is the non-negotiable starting point—without physical wellbeing, no amount of training, play, or structure will stick.

A dog in pain, discomfort, or poor health can't be expected to focus, cooperate, or feel calm. Health must come first—always.

## The Critical Elements of Canine Health

### Nutrition That Fuels Success

Your dog's diet is the cornerstone of their physical and mental wellbeing. Just like humans, dogs perform better when they're properly fueled. Puppies especially need extra nutritional support for their rapidly growing brains and bodies. The best approach combines raw, air-dried, or freeze-dried foods that maintain maximum nutrient density with minimal processing.

While high-quality kibble can supplement this foundation for financial or practical reasons, the goal should always be nutrient-dense, species-appropriate food. Poor nutrition doesn't just affect your dog's coat or energy levels—it shows up as behavioral issues, hyperactivity, and can lead to serious illness years down the track. When dogs feel good from the inside out, they're naturally more cooperative and focused.

### Rest and Recovery: The Overlooked Essential

Most people underestimate how much sleep dogs actually need. Depending on their age and breed, dogs require between 12 and 20 hours of sleep daily. This isn't laziness—it's biological necessity. Their nervous systems need this time to process information, recover from stimulation, and prepare for the next day.

Overstimulated dogs don't just get tired—they become hyperactive, mouthy, and difficult to manage. Many behavioral issues that owners attribute to "stubbornness" or "disobedience" are actually signs of a dog who hasn't had adequate recovery time. Providing structured downtime and creating calm spaces where your dog can truly relax is essential for their emotional regulation and learning capacity.

### Pain: The Hidden Training Saboteur

Pain is perhaps the most overlooked factor in training difficulties. Dogs are incredibly stoic creatures who instinctively hide discomfort, making it easy to miss subtle signs that something is wrong. If your dog's behavior suddenly changes, if they become resistant to handling, or if training that once worked suddenly stops being effective, pain should be your first consideration.

Watch for the quiet indicators: reluctance to jump up or down, changes in posture, increased irritability, or obsessive licking of a particular body part. Both acute injuries and chronic conditions like arthritis, digestive issues, or structural problems can dramatically impact your dog's ability to learn and cooperate. A dog in pain simply cannot give you their best effort, no matter how much they want to please you.

### Professional Health Partnership

Regular veterinary check-ups aren't just for when something goes wrong—they're essential for maintaining the foundation of everything else you'll build with your dog. Even young, seemingly healthy dogs benefit from baseline bloodwork and comprehensive health assessments that establish normal parameters for future comparison.

Early detection prevents long-term suffering and expensive interventions down the road. Your veterinarian is your partner in ensuring your dog feels good enough to engage fully in training, play, and life with your family.

### Targeted Supplementation

While whole, species-appropriate food should provide most of what your dog needs, certain supplements can support optimal health. Omega-3 fatty acids help manage inflammation and promote coat health. Probiotics support digestive function, which increasingly research shows affects mood and behavior. For active or aging dogs, joint supplements can help maintain mobility and comfort.

The key is working with your veterinarian to identify your dog's specific needs rather than giving supplements "just in case."

## Why Health Cannot Be Compromised

The reality is simple: a dog in pain won't respond normally to leash pressure, play, or commands without experiencing distress. Poor sleep leads to over-arousal, emotional instability, and erratic behavior. Medical issues often masquerade as behavioral problems, leading owners to try to "train through" what is actually a health concern.

When something feels "off" with your dog, resist the urge to immediately seek behavioral solutions. Start by checking their physical wellbeing. You cannot and should not attempt to train over pain or illness.

When your dog feels good physically, everything else becomes possible. They can focus, they can learn, they can regulate their emotions, and they can truly partner with you. Health isn't just the first step—it's the foundation that supports everything meaningful you'll build together.`,
        imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
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

Mental fulfillment isn't optional—it's essential for your dog's wellbeing and your relationship with them. Dogs with unmet lifestyle needs often display behaviors that owners interpret as disobedience or behavioral problems: excessive barking, destructive behaviors, escape attempts, or over-excitement and reactivity in everyday situations.

These behaviors aren't moral failings or dominance displays—they're symptoms of a dog whose fundamental needs aren't being met. When we address the underlying need for mental stimulation and purpose, these problematic behaviors often resolve themselves without direct training.

## Building the Foundation for Everything Else

A fulfilled dog is naturally more focused, more cooperative, and more peaceful in daily life. When your dog's mind is engaged and their drives are satisfied, they have the mental and emotional capacity to focus on what you're asking of them. They become partners in the training process rather than resistant participants.

This is why lifestyle and fulfillment must come before demanding obedience or trying to eliminate unwanted behaviors. Find what truly drives and motivates your individual dog, provide appropriate outlets for those drives, and you'll discover that everything else becomes significantly easier to achieve.`,
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
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

Teaching your dog to enter and exit these states smoothly creates emotional balance, better behavior, and a deeper bond between you. This becomes the framework for daily life, not just a training concept. Your dog learns when it's time to be focused, when it's time to relax, when it's time to explore, and when it's time to work.

## The Power of Precise Markers

Words like "yes," "wrong," and "no" aren't just instructions—they're communication packages that give your dog multiple pieces of information in one precise moment. These markers are like pressing the shutter button on a camera, taking a snapshot of the exact moment your dog makes a choice.

When you say "yes," you're not just indicating approval—you're telling your dog they made the right choice, that they should remember this behavior, and that a reward is coming. This creates a positive association with the specific action they just performed.

"Wrong" serves as a gentle redirect, essentially telling your dog that this particular choice won't lead to rewards, but there's no big consequence. It's an invitation to try something else without creating stress or anxiety about making mistakes.

"No" carries more weight—it indicates that a behavior needs to stop immediately and shouldn't be repeated. This marker is followed by a fair but clear consequence that helps your dog understand the seriousness of the boundary they've crossed.

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
        imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
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

Teaching your dog to go to a specific place and settle there creates boundaries and provides a tool for managing situations when calm behavior is required. This skill is invaluable when guests arrive, during meals, or anytime you need your dog to be calm and contained without being confined.

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

Building truly reliable skills follows a natural progression that respects your dog's learning process and builds confidence along the way. Initially, skills are taught in calm, controlled environments where your dog can focus and succeed. As they become confident with the basic behavior, challenges are gradually added—different locations, mild distractions, varying levels of excitement or arousal.

The key is building success upon success rather than overwhelming your dog with challenges they're not ready for. Each step should feel achievable, and your dog should experience frequent success and positive reinforcement throughout the process.

Skills need regular practice and refinement throughout your dog's life. Like any ability, obedience skills can become rusty without use, and they need to be adapted and strengthened as your dog encounters new challenges and life circumstances.

## The Freedom That Comes With Skills

When properly developed, life skills become reliable tools that serve both you and your dog for life. They create a foundation of trust and communication that makes every aspect of your relationship easier and more enjoyable.

A dog with solid life skills is a dog who can participate more fully in family life, explore more of the world safely, and handle life's inevitable changes with confidence and grace. These aren't just training achievements—they're the building pieces of a rich, fulfilling partnership between human and dog.

Remember that skills are indeed the final piece of the puzzle, not the starting point. When built on solid foundations of health, mental fulfillment, and clear communication, they become natural expressions of your dog's desire to cooperate and succeed rather than behaviors that must be forced or constantly enforced.`,
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

When you honor your dog's genetic blueprint and provide appropriate outlets, you're not just managing behavior—you're creating a partnership based on understanding and mutual satisfaction.`,
        imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        readTime: "12 min read",
        tags: ["breed drives", "genetics", "fulfillment", "behavior", "training"]
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

Attempting to teach life skills to an unhealthy dog creates unreliable, stressful training sessions where both dog and owner become frustrated. Demanding obedience from an unfulfilled dog leads to constant battles and frequent regression as the dog's unmet needs drive problematic behaviors. Training without clear communication systems results in confused, anxious responses that lack consistency. Skipping lifestyle and fulfillment needs creates destructive, restless behavior that persists despite what appears to be "good" training.

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

This isn't a one-time process that you complete and then forget about. True balance requires ongoing attention to all four areas throughout your dog's life. Health needs change as dogs age, and regular monitoring ensures problems are caught early. Genetic drives don't disappear and require consistent fulfillment to prevent behavioral problems from developing. Communication systems need reinforcement and refinement as you and your dog encounter new situations together. Life skills require regular practice and proofing to maintain reliability across different environments and circumstances.

## The Partnership Payoff

Dogs who have all four foundational elements in place become calm because their fundamental needs are consistently met. They become confident because they understand their world and their place in it. They become cooperative because the relationship itself is fulfilling and rewarding for them. They become capable because they possess the skills necessary to succeed in various situations.

This comprehensive approach isn't just training—it's building a complete life together based on mutual understanding, clear communication, and genuine care for your dog's total wellbeing. When you provide your dog with physical health, mental fulfillment, clear communication, and practical skills, you're not just modifying behavior—you're creating the foundation for a relationship that will bring deep satisfaction and joy for years to come.

The investment in building these foundations properly pays dividends throughout your dog's entire life, creating not just better behavior, but a truly harmonious partnership between human and canine companions.`,
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
