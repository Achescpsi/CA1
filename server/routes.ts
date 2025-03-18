import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for Cars
  app.get("/api/cars", async (req, res) => {
    try {
      const cars = await storage.getAllCars();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cars" });
    }
  });

  app.get("/api/cars/featured", async (req, res) => {
    try {
      const featuredCars = await storage.getFeaturedCars();
      res.json(featuredCars);
    } catch (error) {
      res.status(500).json({ message: "Error fetching featured cars" });
    }
  });

  app.get("/api/cars/category/:categoryName", async (req, res) => {
    try {
      const { categoryName } = req.params;
      const cars = await storage.getCarsByClass(categoryName);
      res.json(cars);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cars by category" });
    }
  });

  app.get("/api/cars/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const car = await storage.getCarById(id);
      
      if (!car) {
        return res.status(404).json({ message: "Car not found" });
      }
      
      res.json(car);
    } catch (error) {
      res.status(500).json({ message: "Error fetching car" });
    }
  });

  // API routes for Categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Error fetching categories" });
    }
  });

  app.get("/api/categories/:name", async (req, res) => {
    try {
      const { name } = req.params;
      const category = await storage.getCategoryByName(name);
      
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Error fetching category" });
    }
  });

  // API route for App Stats
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getAppStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Error fetching app stats" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
