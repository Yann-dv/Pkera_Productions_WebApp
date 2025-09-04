import { z } from "zod";

// TypeScript types for static data
export interface Documentary {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  imageUrl: string;
  trailerUrl?: string;
  fullDocUrl?: string;
  awards?: string;
  status?: string; // e.g., "featured", "trending", "latest"
  platforms?: string; // e.g., "Netflix, Amazon Prime"
  runtime?: string;
  socialLinks?: string; // JSON string for social media links
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
  rating: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export interface ProducerInfo {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  documentariesCount: string;
  awardsCount: string;
  countriesCount: string;
  socialLinks?: string; // JSON string for social media links
}

// Contact form validation schema
export const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
