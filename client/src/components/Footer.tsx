import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gta-dark-blue text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-['Bebas_Neue'] text-2xl font-bold text-gta-accent mb-4">GTA V Car Collector</h3>
            <p className="max-w-xs text-gray-400">Your comprehensive database for all vehicles in Grand Theft Auto V.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-['Bebas_Neue'] font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/"><a className="hover:text-white transition-colors">Home</a></Link></li>
                <li><Link href="/dashboard"><a className="hover:text-white transition-colors">Dashboard</a></Link></li>
                <li><Link href="/about"><a className="hover:text-white transition-colors">About</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-['Bebas_Neue'] font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/collection/Super"><a className="hover:text-white transition-colors">Super</a></Link></li>
                <li><Link href="/collection/Sports"><a className="hover:text-white transition-colors">Sports</a></Link></li>
                <li><Link href="/collection/Muscle"><a className="hover:text-white transition-colors">Muscle</a></Link></li>
                <li><Link href="/dashboard"><a className="hover:text-white transition-colors">View All</a></Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-['Bebas_Neue'] font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <path d="M21 10c0 6-5 11-11 11-6 0-11-5-11-11 0-6 5-11 11-11 6 0 11 5 11 11z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.5 7.5L10 14l-3.5-3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 GTA V Car Collector. All rights reserved.</p>
          <p className="mt-4 md:mt-0">This is a fan-made app and is not affiliated with Rockstar Games.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
