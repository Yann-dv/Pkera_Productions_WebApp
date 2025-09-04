import { pgTable, text, varchar, timestamp, serial } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const documentaries = pgTable("documentaries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  year: text("year").notNull(),
  imageUrl: text("image_url").notNull(),
  trailerUrl: text("trailer_url"),
  fullDocUrl: text("full_doc_url"),
  awards: text("awards"),
  status: text("status"), // e.g., "featured", "trending", "latest"
  platforms: text("platforms"), // e.g., "Netflix, Amazon Prime"
  runtime: text("runtime"),
  socialLinks: text("social_links"), // JSON string for social media links
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  testimonial: text("testimonial").notNull(),
  avatarUrl: text("avatar_url").notNull(),
  rating: text("rating").notNull().default("5"),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const producerInfo = pgTable("producer_info", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  location: text("location").notNull(),
  experience: text("experience").notNull(),
  documentariesCount: text("documentaries_count").notNull(),
  awardsCount: text("awards_count").notNull(),
  countriesCount: text("countries_count").notNull(),
  socialLinks: text("social_links"), // JSON string for social media links
});

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Insert schemas
export const insertDocumentarySchema = createInsertSchema(documentaries).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertProducerInfoSchema = createInsertSchema(producerInfo).omit({
  id: true,
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

// Types
export type Documentary = typeof documentaries.$inferSelect;
export type InsertDocumentary = z.infer<typeof insertDocumentarySchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

export type ProducerInfo = typeof producerInfo.$inferSelect;
export type InsertProducerInfo = z.infer<typeof insertProducerInfoSchema>;

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
