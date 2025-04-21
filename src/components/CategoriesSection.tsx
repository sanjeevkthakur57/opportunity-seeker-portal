
import { categories } from "@/data/internships";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">Browse by Category</h2>
          <p className="text-gray-600 mt-2">
            Find internships in your field of interest
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/internships?category=${encodeURIComponent(category)}`}
            >
              <Card className="h-full hover:border-primary hover:shadow-md transition-all">
                <CardContent className="flex items-center justify-center p-6 h-full">
                  <span className="text-center font-medium">{category}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
