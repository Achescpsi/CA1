import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Car Table
export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  class: text("class").notNull(),
  topSpeed: text("top_speed").notNull(),
  lapTime: text("lap_time").notNull(),
  imageUrl: text("image_url").notNull(),
});

// Category Table
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description").notNull(),
  count: integer("count").notNull(),
});

// App Statistics Table
export const appStats = pgTable("app_stats", {
  id: serial("id").primaryKey(),
  totalVehicles: integer("total_vehicles").notNull(),
  vehicleClasses: integer("vehicle_classes").notNull(),
  monthlyUsers: integer("monthly_users").notNull(),
  userRating: text("user_rating").notNull(),
});

// Create insert schemas
export const insertCarSchema = createInsertSchema(cars).pick({
  name: true,
  class: true,
  topSpeed: true,
  lapTime: true,
  imageUrl: true,
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  description: true,
  count: true,
});

export const insertAppStatsSchema = createInsertSchema(appStats).pick({
  totalVehicles: true,
  vehicleClasses: true,
  monthlyUsers: true,
  userRating: true,
});

// Export types
export type InsertCar = z.infer<typeof insertCarSchema>;
export type Car = typeof cars.$inferSelect;

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export type InsertAppStats = z.infer<typeof insertAppStatsSchema>;
export type AppStats = typeof appStats.$inferSelect;
