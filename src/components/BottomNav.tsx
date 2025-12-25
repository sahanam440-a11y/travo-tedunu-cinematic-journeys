import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, Star, MessageSquare, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "About", path: "/about", icon: Star },
    { name: "Contact", path: "/contact", icon: MessageSquare },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 pb-safe">
      <div className="bg-white dark:bg-gray-900 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-1 md:gap-6 px-3 md:px-6 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 min-w-[48px] justify-center px-2 py-0.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                <Icon 
                  className={`h-4 w-4 transition-all ${
                    isActive ? "stroke-[2.5] fill-primary/10" : "stroke-[1.5]"
                  }`} 
                />
                <span className={`text-[9px] ${isActive ? "font-semibold" : "font-medium"}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
