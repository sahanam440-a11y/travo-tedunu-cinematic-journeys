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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe shadow-elevated backdrop-blur-md border-t border-nav-border rounded-t-xl bg-nav-background">
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 min-w-[56px] min-h-[48px] justify-center px-2 py-1.5 transition-all ${
                  isActive
                    ? "text-nav-foreground font-semibold scale-105 drop-shadow-[0_0_8px_rgba(217,119,6,0.6)]"
                    : "text-nav-foreground/80 hover:text-nav-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
                }`}
              >
                <Icon className={`h-4.5 w-4.5 ${isActive ? "stroke-[2.5]" : ""}`} />
                <span className="text-[9px] font-semibold">{item.name}</span>
              </Link>
            );
          })}
        </div>
    </nav>
  );
};

export default BottomNav;
