import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, Info, Mail, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Destinations", path: "/destinations", icon: MapPin },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[hsl(43_75%_60%)] border-t border-white/20 pb-safe shadow-strong">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 min-w-[60px] transition-all ${
                isActive
                  ? "text-primary font-semibold scale-110"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
