import { useQuery } from '@tanstack/react-query';

const About = () => {
  const { data: appStats, isLoading } = useQuery({
    queryKey: ['/api/stats'],
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
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="font-['Bebas_Neue'] text-3xl font-bold text-gta-dark-blue mb-4">About GTA V Car Collector</h2>
          <p className="mb-4 text-gray-700">
            GTA V Car Collector is a comprehensive database application designed to help Grand Theft Auto V enthusiasts find detailed information about all vehicles in the game.
          </p>
          <p className="mb-4 text-gray-700">
            Our mission is to provide accurate, up-to-date information on vehicle performance, helping players make informed decisions about their in-game purchases and races.
          </p>
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="font-['Bebas_Neue'] text-xl font-bold text-gta-dark-blue mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gta-red text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Rockstar Games Fan Club</p>
                  <p className="text-gray-600 text-sm">Publisher</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gta-blue text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">contact@gtavcarcollector.com</p>
                  <p className="text-gray-600 text-sm">Email</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">(555) 123-4567</p>
                  <p className="text-gray-600 text-sm">Phone</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Los Santos, San Andreas</p>
                  <p className="text-gray-600 text-sm">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 bg-gray-300">
            <img 
              src="https://maps.googleapis.com/maps/api/staticmap?center=Los+Angeles,CA&zoom=10&size=800x400&key=AIzaSyBi9H9Q3Fiz0K9nfJZ8d8mPAKM8JvaKGJc" 
              alt="Office Location Map" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-6">
            <h3 className="font-['Bebas_Neue'] text-xl font-bold text-gta-dark-blue mb-2">Our Location</h3>
            <p className="text-gray-600 mb-4">Find us in the heart of Los Santos, near the Vinewood Hills.</p>
            <button className="bg-gta-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg> Get Directions
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="font-['Bebas_Neue'] text-3xl font-bold text-gta-dark-blue mb-6">App Statistics</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-gta-red text-3xl font-bold mb-2">{appStats?.totalVehicles}+</div>
            <div className="text-gray-700">Total Vehicles</div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-gta-blue text-3xl font-bold mb-2">{appStats?.vehicleClasses}</div>
            <div className="text-gray-700">Vehicle Classes</div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-green-600 text-3xl font-bold mb-2">{appStats?.monthlyUsers}+</div>
            <div className="text-gray-700">Monthly Users</div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-purple-600 text-3xl font-bold mb-2">{appStats?.userRating}/5</div>
            <div className="text-gray-700">User Rating</div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="font-['Bebas_Neue'] text-xl font-bold text-gta-dark-blue mb-4">Version History</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-gta-red text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1h-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H4v11a1 1 0 001 1h10a1 1 0 001-1v-11h.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H16V3a1 1 0 00-1-1H5zm1 1h8a1 1 0 00-1 1v1H7V4a1 1 0 00-1-1zm6.5 4H14v10h-1.5V7zM9 7h2v10H9V7zM6 7h1.5v10H6V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Version 2.1.0</span>
                  <span className="text-sm text-gray-500">June 15, 2023</span>
                </div>
                <p className="text-gray-700 text-sm">Added latest DLC vehicles and performance stats. Updated UI with dark mode option.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-gta-blue text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1h-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H4v11a1 1 0 001 1h10a1 1 0 001-1v-11h.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H16V3a1 1 0 00-1-1H5zm1 1h8a1 1 0 00-1 1v1H7V4a1 1 0 00-1-1zm6.5 4H14v10h-1.5V7zM9 7h2v10H9V7zM6 7h1.5v10H6V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Version 2.0.0</span>
                  <span className="text-sm text-gray-500">March 2, 2023</span>
                </div>
                <p className="text-gray-700 text-sm">Major redesign with improved filtering and sorting capabilities. Added comparison feature.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1h-.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5H4v11a1 1 0 001 1h10a1 1 0 001-1v-11h.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5H16V3a1 1 0 00-1-1H5zm1 1h8a1 1 0 00-1 1v1H7V4a1 1 0 00-1-1zm6.5 4H14v10h-1.5V7zM9 7h2v10H9V7zM6 7h1.5v10H6V7z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex-grow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold">Version 1.0.0</span>
                  <span className="text-sm text-gray-500">August 12, 2022</span>
                </div>
                <p className="text-gray-700 text-sm">Initial release with basic vehicle database and search functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
