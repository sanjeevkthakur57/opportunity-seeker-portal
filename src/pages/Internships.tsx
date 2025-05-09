
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import InternshipCard, { InternshipProps } from "@/components/InternshipCard";
import InternshipFilters from "@/components/InternshipFilters";
import { allInternships } from "@/data/internships";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const Internships = () => {
  const [filters, setFilters] = useState({});
  const [displayCount, setDisplayCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredInternships, setFilteredInternships] = useState<InternshipProps[]>([]);
  
  // Initialize with first batch of internships
  useEffect(() => {
    setFilteredInternships(allInternships.slice(0, displayCount));
  }, [displayCount]);

  const handleFilter = (newFilters: any) => {
    setFilters(newFilters);
    // In a real application, you would apply these filters to the data
    // For now, we'll just use the full list
    setFilteredInternships(allInternships.slice(0, displayCount));
  };
  
  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Increase the display count to show more internships
    setDisplayCount(prevCount => {
      const newCount = prevCount + 4;
      return Math.min(newCount, allInternships.length);
    });
    
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-800">Browse Internships</h1>
            <p className="text-gray-600 mt-2">
              Find the perfect internship opportunity that matches your skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <InternshipFilters onFilter={handleFilter} />
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 flex justify-between items-center">
                <div className="text-gray-600">
                  Showing <span className="font-medium">{filteredInternships.length}</span> of {allInternships.length} internships
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Most Recent
                  </Button>
                  <Button variant="ghost" size="sm">
                    Most Relevant
                  </Button>
                </div>
              </div>

              {filteredInternships.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredInternships.map((internship) => (
                    <InternshipCard key={internship.id} {...internship} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border">
                  <h3 className="text-lg font-medium mb-2">No internships found</h3>
                  <p className="text-gray-600">
                    Try adjusting your filters to see more results
                  </p>
                </div>
              )}

              {filteredInternships.length > 0 && filteredInternships.length < allInternships.length && (
                <div className="mt-8 flex justify-center">
                  <Button 
                    variant="outline" 
                    onClick={handleLoadMore}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader className="h-4 w-4 animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      "Load More"
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Internships;
