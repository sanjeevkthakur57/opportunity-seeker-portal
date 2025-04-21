
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "TechCorp",
    description: "Leading technology solutions provider with innovative internship programs.",
    industry: "Technology",
    location: "New York, NY",
    internships: 5,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Creative Solutions",
    description: "Award-winning design agency offering hands-on experience for design interns.",
    industry: "Design",
    location: "San Francisco, CA",
    internships: 3,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "GrowthHub",
    description: "Marketing agency specializing in growth strategy and digital marketing.",
    industry: "Marketing",
    location: "Boston, MA",
    internships: 4,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "DataMasters",
    description: "Data analytics firm providing cutting-edge solutions for businesses.",
    industry: "Data Science",
    location: "Chicago, IL",
    internships: 2,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    name: "ServerStack",
    description: "Cloud infrastructure company with a focus on backend technologies.",
    industry: "Technology",
    location: "Austin, TX",
    internships: 3,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 6,
    name: "WordCraft",
    description: "Content creation agency working with major brands across industries.",
    industry: "Content Writing",
    location: "Seattle, WA",
    internships: 2,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 7,
    name: "SocialBoost",
    description: "Social media marketing agency helping brands increase their online presence.",
    industry: "Marketing",
    location: "Miami, FL",
    internships: 4,
    logo: "https://via.placeholder.com/150"
  },
  {
    id: 8,
    name: "ProductLabs",
    description: "Product development firm with a strong focus on user experience.",
    industry: "Product Management",
    location: "Denver, CO",
    internships: 2,
    logo: "https://via.placeholder.com/150"
  }
];

const Companies = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-slate-800">Browse Companies</h1>
            <p className="text-gray-600 mt-2">
              Discover top companies offering internship opportunities
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search companies by name or industry" 
                  className="pl-10 py-6" 
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <Button variant="outline" size="sm">Technology</Button>
                <Button variant="outline" size="sm">Marketing</Button>
                <Button variant="outline" size="sm">Design</Button>
                <Button variant="outline" size="sm">Finance</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <Card key={company.id} className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-16 w-16 bg-accent flex items-center justify-center rounded overflow-hidden">
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{company.name}</h3>
                      <p className="text-sm text-gray-500">{company.industry} • {company.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {company.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary">
                      {company.internships} active internships
                    </span>
                    <Button variant="outline" size="sm">View Company</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More Companies</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Companies;
