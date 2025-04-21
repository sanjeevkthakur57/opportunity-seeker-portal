
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-bold text-primary">
            InternHub
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/internships" className="text-gray-700 hover:text-primary">
              Internships
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-primary">
              Companies
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
          </div>
        </div>

        <div className="relative hidden md:flex items-center w-1/3">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <Input 
            type="text" 
            placeholder="Search internships..." 
            className="pl-10 pr-4 py-2 w-full rounded-md" 
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
