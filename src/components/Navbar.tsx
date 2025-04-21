
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/sonner";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status when component mounts
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
    
    if (loginStatus) {
      setUserName(localStorage.getItem("userName") || localStorage.getItem("userEmail") || "User");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

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
          {isLoggedIn ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{userName}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48">
                <div className="space-y-2">
                  <Link to="/profile" className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">
                    My Profile
                  </Link>
                  <Link to="/applications" className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">
                    My Applications
                  </Link>
                  <Link to="/saved" className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded">
                    Saved Internships
                  </Link>
                  <hr className="my-1" />
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left py-2 px-3 hover:bg-gray-100 rounded text-red-500"
                  >
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Button variant="outline" onClick={() => navigate("/login")}>Login</Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
