import { 
  Car, InsertCar, 
  Category, InsertCategory, 
  AppStats, InsertAppStats 
} from "@shared/schema";

export interface IStorage {
  // Car operations
  getAllCars(): Promise<Car[]>;
  getCarsByClass(className: string): Promise<Car[]>;
  getFeaturedCars(): Promise<Car[]>;
  getCarById(id: number): Promise<Car | undefined>;
  createCar(car: InsertCar): Promise<Car>;
  
  // Category operations
  getAllCategories(): Promise<Category[]>;
  getCategoryByName(name: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // App stats operations
  getAppStats(): Promise<AppStats>;
  updateAppStats(stats: InsertAppStats): Promise<AppStats>;
}

export class MemStorage implements IStorage {
  private cars: Map<number, Car>;
  private categories: Map<number, Category>;
  private stats: AppStats;
  private carId: number;
  private categoryId: number;

  constructor() {
    this.cars = new Map();
    this.categories = new Map();
    this.carId = 1;
    this.categoryId = 1;
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  // Car operations
  async getAllCars(): Promise<Car[]> {
    return Array.from(this.cars.values());
  }

  async getCarsByClass(className: string): Promise<Car[]> {
    return Array.from(this.cars.values()).filter(
      (car) => car.class.toLowerCase() === className.toLowerCase()
    );
  }

  async getFeaturedCars(): Promise<Car[]> {
    // Return 3 random cars as featured
    const allCars = Array.from(this.cars.values());
    return allCars.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  async getCarById(id: number): Promise<Car | undefined> {
    return this.cars.get(id);
  }

  async createCar(car: InsertCar): Promise<Car> {
    const id = this.carId++;
    const newCar: Car = { ...car, id };
    this.cars.set(id, newCar);
    return newCar;
  }

  // Category operations
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryByName(name: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const id = this.categoryId++;
    const newCategory: Category = { ...category, id };
    this.categories.set(id, newCategory);
    return newCategory;
  }

  // App stats operations
  async getAppStats(): Promise<AppStats> {
    return this.stats;
  }

  async updateAppStats(stats: InsertAppStats): Promise<AppStats> {
    this.stats = { ...stats, id: 1 };
    return this.stats;
  }

  // Initialize with sample data
  private initializeSampleData() {
    // Create Categories
    const categories = [
      { name: "Super", description: "The fastest and most expensive cars in the game.", count: 25 },
      { name: "Sports", description: "High-performance vehicles with excellent handling.", count: 30 },
      { name: "Muscle", description: "American muscle cars with high torque and power.", count: 20 },
      { name: "SUVs", description: "Sport utility vehicles with off-road capabilities.", count: 15 },
      { name: "Sedans", description: "Four-door civilian vehicles for everyday driving.", count: 18 },
      { name: "Motorcycles", description: "Two-wheeled vehicles with high speed and agility.", count: 22 }
    ];

    categories.forEach(category => {
      this.createCategory(category);
    });

    // Create Cars - Super class
    const superCars = [
      { name: "Zentorno", class: "Super", topSpeed: "220", lapTime: "1:01.2", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/5/51/Zentorno-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20140525144536" },
      { name: "Adder", class: "Super", topSpeed: "215", lapTime: "1:01.8", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/9/9e/Adder-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20150529144651" },
      { name: "Entity XF", class: "Super", topSpeed: "210", lapTime: "1:02.1", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/3/3d/EntityXF-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20150529205924" },
      { name: "T20", class: "Super", topSpeed: "218", lapTime: "1:01.5", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/0/0e/T20-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20150708153548" },
      { name: "Osiris", class: "Super", topSpeed: "212", lapTime: "1:02.0", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/4/47/Osiris-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20150614115131" }
    ];

    // Create Cars - Sports class
    const sportsCars = [
      { name: "Banshee", class: "Sports", topSpeed: "205", lapTime: "1:02.8", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/8/8d/Banshee-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20160302171259" },
      { name: "Comet", class: "Sports", topSpeed: "200", lapTime: "1:03.2", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/0/00/Comet-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20160305173227" },
      { name: "Elegy RH8", class: "Sports", topSpeed: "208", lapTime: "1:02.5", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/d/df/ElegyRH8-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20160302171257" }
    ];

    // Create Cars - Muscle class
    const muscleCars = [
      { name: "Dominator", class: "Muscle", topSpeed: "192", lapTime: "1:04.5", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/6/6e/Dominator-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20160302171144" },
      { name: "Gauntlet", class: "Muscle", topSpeed: "190", lapTime: "1:04.8", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/2/2b/Gauntlet-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20160302171148" },
      { name: "Phoenix", class: "Muscle", topSpeed: "188", lapTime: "1:05.1", imageUrl: "https://static.wikia.nocookie.net/gtawiki/images/a/a7/Phoenix-GTAV-front.png/revision/latest/scale-to-width-down/350?cb=20190810122941" }
    ];

    // Add all cars
    [...superCars, ...sportsCars, ...muscleCars].forEach(car => {
      this.createCar(car);
    });

    // Create App Stats
    this.stats = {
      id: 1,
      totalVehicles: 130,
      vehicleClasses: 8,
      monthlyUsers: 25000,
      userRating: "4.8"
    };
  }
}

export const storage = new MemStorage();
