import { useState } from 'react';
import { Link, useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Car } from '@shared/schema';

const Collection = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'all' | 'speed' | 'lap'>('all');
  
  const { data, isLoading } = useQuery({
    queryKey: [`/api/cars/category/${category}`],
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

  // Define category colors
  const getCategoryColor = (categoryName: string) => {
    switch (categoryName) {
      case 'Super': return 'bg-gta-red text-white';
      case 'Sports': return 'bg-gta-blue text-white';
      case 'Muscle': return 'bg-yellow-600 text-white';
      case 'SUVs': return 'bg-green-600 text-white';
      case 'Sedans': return 'bg-purple-600 text-white';
      case 'Motorcycles': return 'bg-gray-700 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  // Filter and sort cars based on user input
  const filteredCars = data ? data
    .filter((car: Car) => 
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a: Car, b: Car) => {
      if (sortBy === 'speed') {
        return parseInt(b.topSpeed) - parseInt(a.topSpeed);
      } else if (sortBy === 'lap') {
        return parseFloat(a.lapTime) - parseFloat(b.lapTime);
      }
      return 0;
    }) : [];

  // Pagination
  const carsPerPage = 10;
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  // Function to calculate speed percentage for progress bar
  const calculateSpeedPercentage = (speed: string) => {
    const maxSpeed = 230; // Assuming max speed in the game
    return (parseInt(speed) / maxSpeed) * 100;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <Link href="/dashboard">
            <a className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 mr-3 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
          <div>
            <h1 className="font-['Bebas_Neue'] text-4xl font-bold text-gta-dark-blue">{category} Cars</h1>
            <p className="text-gray-600">View all vehicles in the {category} class category</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <button 
                className={`px-3 py-1 ${sortBy === 'all' ? 'bg-gta-red text-white' : 'bg-gray-200 hover:bg-gray-300'} text-sm rounded transition-colors`}
                onClick={() => setSortBy('all')}
              >
                All
              </button>
              <button 
                className={`px-3 py-1 ${sortBy === 'speed' ? 'bg-gta-red text-white' : 'bg-gray-200 hover:bg-gray-300'} text-sm rounded transition-colors`}
                onClick={() => setSortBy('speed')}
              >
                Highest Speed
              </button>
              <button 
                className={`px-3 py-1 ${sortBy === 'lap' ? 'bg-gta-red text-white' : 'bg-gray-200 hover:bg-gray-300'} text-sm rounded transition-colors`}
                onClick={() => setSortBy('lap')}
              >
                Best Lap Time
              </button>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search vehicles..." 
                className="border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-gta-red"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Top Speed 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lap Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedCars.map((car: Car) => (
                <tr key={car.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded">
                        <img className="h-10 w-10 rounded object-cover" src={car.imageUrl} alt={car.name} />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{car.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(car.class)}`}>
                      {car.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-900">{car.topSpeed} mph</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className="bg-gta-red h-1.5 rounded-full" 
                        style={{ width: `${calculateSpeedPercentage(car.topSpeed)}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900">{car.lapTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-gta-blue hover:text-blue-800 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {totalPages > 1 && (
          <div className="mt-6 flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              Showing <span className="font-medium">{(currentPage - 1) * carsPerPage + 1}-{Math.min(currentPage * carsPerPage, filteredCars.length)}</span> of <span className="font-medium">{filteredCars.length}</span> vehicles
            </div>
            <div className="flex space-x-1">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50" 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button 
                  key={index} 
                  className={`px-4 py-2 border border-gray-300 rounded-md ${
                    currentPage === index + 1 ? 'bg-gta-red text-white font-bold' : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50" 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
