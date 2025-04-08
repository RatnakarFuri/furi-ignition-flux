
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-furi-charcoal px-4">
      <div className="text-center max-w-lg">
        <div className="relative mx-auto h-32 w-32 animate-pulse-glow mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-iris blur-md opacity-75"></div>
          <div className="relative rounded-full bg-furi-charcoal flex items-center justify-center h-full w-full border border-furi-red">
            <h1 className="text-4xl font-bold text-furi-red">404</h1>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center btn-primary"
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
