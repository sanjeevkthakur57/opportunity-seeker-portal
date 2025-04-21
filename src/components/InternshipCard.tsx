
import { CalendarIcon, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface InternshipProps {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend: string;
  duration: string;
  type: "Remote" | "In-office" | "Hybrid";
  applicationDeadline: string;
  logo?: string;
}

const InternshipCard = ({
  id,
  title,
  company,
  location,
  stipend,
  duration,
  type,
  applicationDeadline,
  logo,
}: InternshipProps) => {
  return (
    <Card className="h-full hover:border-primary transition-all duration-200 hover:shadow-md">
      <CardHeader className="p-6 pb-0 flex flex-row items-center gap-4">
        <div className="h-12 w-12 bg-accent flex items-center justify-center rounded overflow-hidden">
          {logo ? (
            <img src={logo} alt={company} className="h-full w-full object-cover" />
          ) : (
            <Briefcase className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="flex-1">
          <Link to={`/internship/${id}`} className="hover:text-primary">
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          </Link>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-4">
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={
              type === "Remote" ? "outline" : 
              type === "In-office" ? "secondary" : 
              "default"
            } className="font-normal">
              {type}
            </Badge>
          </div>
          <div className="col-span-2">{location}</div>
          <div className="col-span-2 font-medium text-black">Stipend: {stipend}</div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          Apply by: {applicationDeadline}
        </div>
        <Button asChild size="sm">
          <Link to={`/internship/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;
