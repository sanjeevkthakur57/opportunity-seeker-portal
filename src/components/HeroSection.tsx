
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Find Your Perfect <span className="text-primary">Internship</span> Today!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with thousands of companies offering internship opportunities for students and recent graduates. Take the first step toward your dream career!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/internships">Search Internships</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Student working on laptop" 
              className="rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
