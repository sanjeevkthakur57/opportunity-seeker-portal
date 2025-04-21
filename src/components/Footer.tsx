
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">InternHub</h3>
            <p className="text-gray-600 mb-4">
              Connecting students with the best internship opportunities across the globe.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/internships" className="text-gray-600 hover:text-primary">
                  Browse Internships
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-primary">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/employers" className="text-gray-600 hover:text-primary">
                  Post Internships
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/employer-login" className="text-gray-600 hover:text-primary">
                  Employer Login
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: contact@internhub.com</li>
              <li className="text-gray-600">Phone: +1 123 456 7890</li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">
                  Send us a message
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} InternHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
