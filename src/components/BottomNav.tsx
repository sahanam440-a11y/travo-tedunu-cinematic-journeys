import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, Info, Mail, User } from "lucide-react";
import VintageTrain from "./VintageTrain";

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
    <>
      <VintageTrain />
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-header pb-safe shadow-elevated">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 min-w-[50px] transition-all ${
                  isActive
                    ? "text-primary font-semibold scale-105"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default BottomNav;
