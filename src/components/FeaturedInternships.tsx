
import InternshipCard, { InternshipProps } from "@/components/InternshipCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturedInternshipsProps {
  internships: InternshipProps[];
}

const FeaturedInternships = ({ internships }: FeaturedInternshipsProps) => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Featured Internships</h2>
            <p className="text-gray-600 mt-2">
              Handpicked internships to kickstart your career
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/internships">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} {...internship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInternships;
