import { Car } from "@shared/schema";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px] hover:shadow-lg">
      <div className="h-40 bg-gray-300">
        <img 
          src={car.imageUrl} 
          alt={car.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-['Bebas_Neue'] font-bold text-lg">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.class}</p>
          </div>
          <span className={`text-white text-xs font-bold px-2 py-1 rounded ${
            car.class === 'Super' ? 'bg-gta-red' : 
            car.class === 'Sports' ? 'bg-gta-blue' : 
            car.class === 'Muscle' ? 'bg-yellow-600' : 
            car.class === 'SUVs' ? 'bg-green-600' : 
            car.class === 'Sedans' ? 'bg-purple-600' :
            car.class === 'Motorcycles' ? 'bg-gray-700' : 'bg-gray-500'
          }`}>
            {car.class.toUpperCase()}
          </span>
        </div>
        <div className="mt-3 flex justify-between text-sm">
          <span>Top Speed: {car.topSpeed} mph</span>
          <span>Lap Time: {car.lapTime}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
