import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Car } from '@shared/schema';
import CarCard from '@/components/CarCard';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
  const { data: featuredCars, isLoading } = useQuery({
    queryKey: ['/api/cars/featured'],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gta-red"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gta-dark-blue text-white rounded-lg shadow-xl overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="font-['Bebas_Neue'] text-5xl md:text-6xl font-bold mb-4 text-gta-accent">GTA V Car Collection</h1>
            <p className="text-gray-300 text-lg mb-6">Explore the comprehensive database of vehicles from Grand Theft Auto V. Find detailed specifications, performance metrics, and categorized lists of every car in the game.</p>
            <div>
              <Link href="/dashboard">
                <a className="bg-gta-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md inline-flex items-center transition-colors">
                  <span>Explore Collection</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src="https://cdn.staticneo.com/w/gtav/thumb/GtaVVehicle.jpg/1200px-GtaVVehicle.jpg" 
              alt="GTA V Vehicle" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-gta-red mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
            </svg>
          </div>
          <h2 className="font-['Bebas_Neue'] text-xl font-bold mb-2">Categorized Collection</h2>
          <p className="text-gray-600">Browse vehicles sorted by class including Sports, Super, Muscle, SUVs, and more.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-gta-red mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.617 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="font-['Bebas_Neue'] text-xl font-bold mb-2">Performance Metrics</h2>
          <p className="text-gray-600">Check detailed specifications like top speed and lap times to find the fastest rides.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-gta-red mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
              <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
              <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
            </svg>
          </div>
          <h2 className="font-['Bebas_Neue'] text-xl font-bold mb-2">Comprehensive Data</h2>
          <p className="text-gray-600">Access the most complete GTA V vehicle database with regularly updated information.</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="font-['Bebas_Neue'] text-3xl font-bold mb-6 text-center text-gta-dark-blue">Featured Vehicles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCars?.map((car: Car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
