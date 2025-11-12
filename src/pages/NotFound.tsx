import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
