
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InternshipProps } from "@/components/InternshipCard";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Briefcase, Search, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ApplyForm from "@/components/ApplyForm";
import { toast } from "@/components/ui/sonner";

interface InternshipDetailProps {
  internship: InternshipProps;
}

const InternshipDetail = ({ internship }: InternshipDetailProps) => {
  const {
    title,
    company,
    location,
    stipend,
    duration,
    type,
    applicationDeadline,
    logo,
  } = internship;

  const [isApplyFormOpen, setIsApplyFormOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  const handleApplyClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      toast.error("Please login to apply for internships");
      navigate("/login");
      return;
    }
    
    setIsApplyFormOpen(true);
  };

  const handleSaveInternship = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      toast.error("Please login to save internships");
      navigate("/login");
      return;
    }
    
    setIsSaved(!isSaved);
    
    if (!isSaved) {
      // Here you would call your API to save the internship
      toast.success("Internship saved to your profile");
    } else {
      // Here you would call your API to unsave the internship
      toast.success("Internship removed from saved items");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/internships" className="inline-flex items-center text-primary mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Internships
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-16 w-16 bg-accent flex items-center justify-center rounded overflow-hidden">
                {logo ? (
                  <img src={logo} alt={company} className="h-full w-full object-cover" />
                ) : (
                  <Briefcase className="h-8 w-8 text-primary" />
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{title}</h1>
                <p className="text-gray-600 mb-2">{company}</p>
                <div className="flex items-center gap-2">
                  <Badge variant={
                    type === "Remote" ? "outline" : 
                    type === "In-office" ? "secondary" : 
                    "default"
                  }>
                    {type}
                  </Badge>
                  <span className="text-gray-500">{location}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Stipend</p>
                <p className="font-semibold">{stipend}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">{duration}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Apply By</p>
                <p className="font-semibold">{applicationDeadline}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="text-sm text-gray-500">Posted</p>
                <p className="font-semibold">April 15, 2025</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">About the Internship</h2>
              <p className="text-gray-700">
                We are looking for a passionate {title.toLowerCase()} to join our team at {company}. 
                This is a {duration.toLowerCase()} internship with a stipend of {stipend}. 
                The selected intern will get to work on real projects and gain valuable industry experience.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Assist in the development and implementation of projects</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Research and analyze industry trends</li>
                <li>Participate in team meetings and contribute ideas</li>
                <li>Prepare reports and presentations as needed</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Currently pursuing a degree in a relevant field</li>
                <li>Strong interest in {title.split(' ')[0].toLowerCase()}</li>
                <li>Excellent communication and teamwork skills</li>
                <li>Ability to work {type.toLowerCase()} for {duration.toLowerCase()}</li>
                <li>Proficiency in relevant tools and technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Perks</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Certificate of completion</li>
                <li>Letter of recommendation based on performance</li>
                <li>Flexible working hours</li>
                <li>Mentorship from industry professionals</li>
                <li>Possibility of pre-placement offer based on performance</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Apply for this Internship</h3>
              <p className="text-gray-600 mb-6">
                Application deadline: {applicationDeadline}
              </p>
              <Button className="w-full mb-3" onClick={handleApplyClick}>Apply Now</Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleSaveInternship}
              >
                {isSaved ? "Saved" : "Save Internship"}
              </Button>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-2">About {company}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {company} is a leading company in the industry, known for its innovative solutions and growth opportunities for interns.
                </p>
                <a href="#" className="text-primary text-sm hover:underline">
                  Visit Company Website
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <ApplyForm 
        internship={internship} 
        isOpen={isApplyFormOpen} 
        onClose={() => setIsApplyFormOpen(false)} 
      />
    </div>
  );
};

export default InternshipDetail;
