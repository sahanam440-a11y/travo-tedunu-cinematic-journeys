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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 gradient-primary pb-safe shadow-elevated backdrop-blur-md border-t border-white/20 rounded-t-3xl mx-2">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 min-w-[50px] transition-all ${
                  isActive
                    ? "text-white font-semibold scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    : "text-white/80 hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : ""}`} />
                <span className="text-[10px] font-semibold">{item.name}</span>
              </Link>
            );
          })}
        </div>
    </nav>
  );
};

export default BottomNav;
