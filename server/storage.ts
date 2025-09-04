import { 
  type Documentary, 
  type InsertDocumentary, 
  type Testimonial, 
  type InsertTestimonial, 
  type Contact, 
  type InsertContact,
  type ProducerInfo,
  type InsertProducerInfo,
  type User, 
  type InsertUser 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods (existing)
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Documentary methods
  getDocumentaries(): Promise<Documentary[]>;
  getDocumentaryById(id: string): Promise<Documentary | undefined>;
  getDocumentariesByCategory(category: string): Promise<Documentary[]>;
  getFeaturedDocumentary(): Promise<Documentary | undefined>;
  createDocumentary(documentary: InsertDocumentary): Promise<Documentary>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Contact methods
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Producer info methods
  getProducerInfo(): Promise<ProducerInfo | undefined>;
  updateProducerInfo(info: InsertProducerInfo): Promise<ProducerInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private documentaries: Map<string, Documentary>;
  private testimonials: Map<string, Testimonial>;
  private contacts: Map<string, Contact>;
  private producerInfo: ProducerInfo | undefined;

  constructor() {
    this.users = new Map();
    this.documentaries = new Map();
    this.testimonials = new Map();
    this.contacts = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Initialize documentaries
    const docs: Documentary[] = [
      {
        id: "1",
        title: "Digital Disconnect",
        description: "A thought-provoking exploration of how social media and digital technology are reshaping human relationships. this 90-minute documentary follows five individuals as they navigate the challenges of authentic connection in an increasingly virtual world.",
        category: "technology",
        year: "2024",
        imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Best Documentary - Film Festival 2024",
        status: "featured",
        platforms: "Netflix, Amazon Prime",
        runtime: "90 minutes",
        socialLinks: JSON.stringify({
          instagram: "#",
          twitter: "#",
          linkedin: "#"
        })
      },
      {
        id: "2",
        title: "Voices Unheard",
        description: "A powerful exploration of homelessness in major cities, featuring personal stories of resilience and hope.",
        category: "social-issues",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Best Documentary",
        status: "trending",
        platforms: "Amazon Prime",
        runtime: "75 minutes",
        socialLinks: JSON.stringify({
          instagram: "#",
          linkedin: "#",
          twitter: "#"
        })
      },
      {
        id: "3",
        title: "Ocean's Last Stand",
        description: "An urgent call to action documenting the devastating effects of climate change on marine ecosystems.",
        category: "environment",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Eco Winner",
        status: "global",
        platforms: "Netflix",
        runtime: "85 minutes",
        socialLinks: JSON.stringify({
          tiktok: "#",
          youtube: "#",
          linkedin: "#"
        })
      },
      {
        id: "4",
        title: "The AI Revolution",
        description: "Examining the transformative impact of artificial intelligence on industries, jobs, and society.",
        category: "technology",
        year: "2023",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Trending",
        status: "trending",
        platforms: "Hulu",
        runtime: "95 minutes",
        socialLinks: JSON.stringify({
          instagram: "#",
          twitter: "#",
          linkedin: "#"
        })
      },
      {
        id: "5",
        title: "Traditions Lost",
        description: "Preserving indigenous cultures and traditions before they disappear in our rapidly modernizing world.",
        category: "culture",
        year: "2021",
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Audience Choice",
        status: "award-winning",
        platforms: "Netflix, Hulu",
        runtime: "110 minutes",
        socialLinks: JSON.stringify({
          instagram: "#",
          tiktok: "#",
          youtube: "#"
        })
      },
      {
        id: "6",
        title: "Learning Barriers",
        description: "Addressing educational inequality and the digital divide affecting students worldwide.",
        category: "social-issues",
        year: "2020",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Educational Impact",
        status: "educational",
        platforms: "Amazon Prime, Hulu",
        runtime: "80 minutes",
        socialLinks: JSON.stringify({
          linkedin: "#",
          twitter: "#",
          youtube: "#"
        })
      },
      {
        id: "7",
        title: "Green Cities",
        description: "Showcasing innovative urban sustainability initiatives transforming cities worldwide.",
        category: "environment",
        year: "2022",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        trailerUrl: "#",
        fullDocUrl: "#",
        awards: "Eco Winner",
        status: "sustainability",
        platforms: "Netflix",
        runtime: "70 minutes",
        socialLinks: JSON.stringify({
          instagram: "#",
          tiktok: "#",
          linkedin: "#"
        })
      }
    ];

    docs.forEach(doc => this.documentaries.set(doc.id, doc));

    // Initialize testimonials
    const testimonialData: Testimonial[] = [
      {
        id: "1",
        name: "Sarah Chen",
        role: "Netflix Documentary Director",
        company: "Netflix",
        testimonial: "Marcus has an incredible ability to build trust with her subjects and extract authentic, powerful stories. her documentaries don't just inform—they transform perspectives.",
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: "5"
      },
      {
        id: "2",
        name: "David Rodriguez",
        role: "Community Organizer",
        company: "Local Community",
        testimonial: "Working with Marcus was transformative. He approached our story with sensitivity and authenticity, creating a documentary that truly captured our community's spirit.",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: "5"
      },
      {
        id: "3",
        name: "Emily Thompson",
        role: "Film Critic",
        company: "The Guardian",
        testimonial: "Marcus consistently delivers documentaries that are both artistically compelling and socially impactful. her work sets the standard for documentary filmmaking.",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: "5"
      }
    ];

    testimonialData.forEach(testimonial => this.testimonials.set(testimonial.id, testimonial));

    // Initialize producer info
    this.producerInfo = {
      id: "1",
      name: "Perrine Keramphele",
      title: "Documentary Producer",
      bio: "With over 5 years in documentary filmmaking, I've dedicated my career to amplifying voices that need to be heard and stories that demand to be told. My work has taken me across six continents, documenting everything from environmental crises to social justice movements.",
      email: "pkera@documentaryproducer.com",
      phone: "+1 (555) 123-4567",
      location: "Paris, CA",
      experience: "5+ Years",
      documentariesCount: "10 Released",
      awardsCount: "1 International",
      countriesCount: "5 Filmed In",
      socialLinks: JSON.stringify({
        instagram: "https://www.instagram.com/pkera_productions",
        tiktok: "#", 
        linkedin: "#",
        youtube: "https://www.youtube.com/@Pkera_productions",
        twitter: "#"
      })
    };
  }

  // User methods (existing)
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Documentary methods
  async getDocumentaries(): Promise<Documentary[]> {
    return Array.from(this.documentaries.values());
  }

  async getDocumentaryById(id: string): Promise<Documentary | undefined> {
    return this.documentaries.get(id);
  }

  async getDocumentariesByCategory(category: string): Promise<Documentary[]> {
    return Array.from(this.documentaries.values()).filter(
      doc => doc.category === category
    );
  }

  async getFeaturedDocumentary(): Promise<Documentary | undefined> {
    return Array.from(this.documentaries.values()).find(
      doc => doc.status === "featured"
    );
  }

  async createDocumentary(insertDocumentary: InsertDocumentary): Promise<Documentary> {
    const id = randomUUID();
    const documentary: Documentary = {
      ...insertDocumentary,
      id,
      trailerUrl: insertDocumentary.trailerUrl ?? null,
      fullDocUrl: insertDocumentary.fullDocUrl ?? null,
      awards: insertDocumentary.awards ?? null,
      status: insertDocumentary.status ?? null,
      platforms: insertDocumentary.platforms ?? null,
      runtime: insertDocumentary.runtime ?? null,
      socialLinks: insertDocumentary.socialLinks ?? null
    };
    this.documentaries.set(id, documentary);
    return documentary;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      rating: insertTestimonial.rating ?? "5"
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Contact methods
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Producer info methods
  async getProducerInfo(): Promise<ProducerInfo | undefined> {
    return this.producerInfo;
  }

  async updateProducerInfo(info: InsertProducerInfo): Promise<ProducerInfo> {
    const id = this.producerInfo?.id || randomUUID();
    const updatedInfo: ProducerInfo = {
      ...info,
      id,
      socialLinks: info.socialLinks ?? null
    };
    this.producerInfo = updatedInfo;
    return updatedInfo;
  }
}

export const storage = new MemStorage();
