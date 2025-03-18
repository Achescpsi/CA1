import { Link } from "wouter";
import { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Function to determine border and button colors based on category name
  const getCategoryColors = (categoryName: string) => {
    switch (categoryName) {
      case 'Super':
        return { border: 'border-gta-red', text: 'text-gta-red', bg: 'bg-gta-red', icon: 'fas fa-bolt' };
      case 'Sports':
        return { border: 'border-gta-blue', text: 'text-gta-blue', bg: 'bg-gta-blue', icon: 'fas fa-tachometer-alt' };
      case 'Muscle':
        return { border: 'border-yellow-600', text: 'text-yellow-600', bg: 'bg-yellow-600', icon: 'fas fa-fire' };
      case 'SUVs':
        return { border: 'border-green-600', text: 'text-green-600', bg: 'bg-green-600', icon: 'fas fa-mountain' };
      case 'Sedans':
        return { border: 'border-purple-600', text: 'text-purple-600', bg: 'bg-purple-600', icon: 'fas fa-users' };
      case 'Motorcycles':
        return { border: 'border-gray-700', text: 'text-gray-700', bg: 'bg-gray-700', icon: 'fas fa-motorcycle' };
      default:
        return { border: 'border-gray-500', text: 'text-gray-500', bg: 'bg-gray-500', icon: 'fas fa-car' };
    }
  };

  const colors = getCategoryColors(category.name);

  return (
    <div className={`category-card bg-gray-100 rounded-lg p-5 border-l-4 ${colors.border} shadow hover:shadow-md transition-all hover:scale-103`}>
      <div className="flex justify-between items-center">
        <h3 className="font-['Bebas_Neue'] text-xl font-bold">{category.name}</h3>
        <Link href={`/collection/${category.name}`}>
          <a className={`${colors.text} hover:underline flex items-center`}>
            <span>View Cars</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </Link>
      </div>
      <p className="text-gray-600 text-sm mt-1">{category.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
          </svg> {category.count} vehicles
        </span>
        <span className={`${colors.bg} text-white text-xs rounded-full w-8 h-8 flex items-center justify-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
