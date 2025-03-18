import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Category } from '@shared/schema';
import CategoryCard from '@/components/CategoryCard';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const { data: categories, isLoading } = useQuery({
    queryKey: ['/api/categories'],
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
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="font-['Bebas_Neue'] text-4xl font-bold text-gta-dark-blue mb-2">Vehicle Categories</h1>
        <p className="text-gray-600 mb-4">Browse all vehicle classes available in GTA V. Select a category to view all vehicles within that class.</p>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gta-dark-blue">Classes</h2>
            <div className="flex space-x-2">
              <button 
                className={`text-sm ${viewMode === 'grid' ? 'bg-gta-red text-white' : 'bg-gray-200 hover:bg-gray-300'} px-3 py-1 rounded transition-colors`}
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg> Grid
              </button>
              <button 
                className={`text-sm ${viewMode === 'list' ? 'bg-gta-red text-white' : 'bg-gray-200 hover:bg-gray-300'} px-3 py-1 rounded transition-colors`}
                onClick={() => setViewMode('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg> List
              </button>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories?.map((category: Category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {categories?.map((category: Category) => (
                <div key={category.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full ${
                      category.name === 'Super' ? 'bg-gta-red' : 
                      category.name === 'Sports' ? 'bg-gta-blue' : 
                      category.name === 'Muscle' ? 'bg-yellow-600' : 
                      category.name === 'SUVs' ? 'bg-green-600' : 
                      category.name === 'Sedans' ? 'bg-purple-600' :
                      category.name === 'Motorcycles' ? 'bg-gray-700' : 'bg-gray-500'
                    } text-white flex items-center justify-center mr-4`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.count} vehicles</p>
                    </div>
                  </div>
                  <a 
                    href={`/collection/${category.name}`} 
                    className={`${
                      category.name === 'Super' ? 'text-gta-red' : 
                      category.name === 'Sports' ? 'text-gta-blue' : 
                      category.name === 'Muscle' ? 'text-yellow-600' : 
                      category.name === 'SUVs' ? 'text-green-600' : 
                      category.name === 'Sedans' ? 'text-purple-600' :
                      category.name === 'Motorcycles' ? 'text-gray-700' : 'text-gray-500'
                    } hover:underline font-medium flex items-center`}
                  >
                    View Cars
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
