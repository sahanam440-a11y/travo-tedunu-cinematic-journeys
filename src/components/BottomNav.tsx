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
    <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50 pb-safe">
      <div className="bg-amber-50 dark:bg-amber-950/90 rounded-xl shadow-[0_2px_12px_rgba(217,119,6,0.15)] border border-amber-200 dark:border-amber-800">
        <div className="flex items-center justify-around px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 min-w-[48px] justify-center px-2 py-0.5 transition-all duration-200 ${
                  isActive
                    ? "text-amber-600 dark:text-amber-400 drop-shadow-[0_0_6px_rgba(217,119,6,0.5)]"
                    : "text-amber-700/70 dark:text-amber-300/70 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
              >
                <Icon 
                  className={`h-4 w-4 transition-all ${
                    isActive ? "stroke-[2.5]" : "stroke-[1.5]"
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
