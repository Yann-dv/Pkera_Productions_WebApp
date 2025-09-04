import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all documentaries
  app.get("/api/documentaries", async (req, res) => {
    try {
      const documentaries = await storage.getDocumentaries();
      res.json(documentaries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch documentaries" });
    }
  });

  // Get documentaries by category
  app.get("/api/documentaries/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const documentaries = await storage.getDocumentariesByCategory(category);
      res.json(documentaries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch documentaries by category" });
    }
  });

  // Get featured documentary
  app.get("/api/documentaries/featured", async (req, res) => {
    try {
      const featured = await storage.getFeaturedDocumentary();
      if (!featured) {
        return res.status(404).json({ message: "No featured documentary found" });
      }
      res.json(featured);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured documentary" });
    }
  });

  // Get documentary by ID
  app.get("/api/documentaries/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const documentary = await storage.getDocumentaryById(id);
      if (!documentary) {
        return res.status(404).json({ message: "Documentary not found" });
      }
      res.json(documentary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch documentary" });
    }
  });

  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Get producer info
  app.get("/api/producer", async (req, res) => {
    try {
      const producer = await storage.getProducerInfo();
      if (!producer) {
        return res.status(404).json({ message: "Producer info not found" });
      }
      res.json(producer);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch producer info" });
    }
  });

  // Create contact submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to create contact" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
