
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, locations } from "@/data/internships";
import { Search } from "lucide-react";

interface InternshipFiltersProps {
  onFilter: (filters: any) => void;
}

const InternshipFilters = ({ onFilter }: InternshipFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h2 className="text-lg font-semibold mb-4">Filter Internships</h2>
      
      <div className="space-y-4">
        {/* Search */}
        <div>
          <Label htmlFor="search">Search</Label>
          <div className="relative mt-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="search"
              placeholder="Search by title or company"
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Category */}
        <div>
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger id="category" className="mt-1">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Location */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Select>
            <SelectTrigger id="location" className="mt-1">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location} value={location.toLowerCase()}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Type */}
        <div>
          <Label htmlFor="type">Type</Label>
          <Select>
            <SelectTrigger id="type" className="mt-1">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
              <SelectItem value="in-office">In-office</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Duration */}
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Select>
            <SelectTrigger id="duration" className="mt-1">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Durations</SelectItem>
              <SelectItem value="1-2">1-2 months</SelectItem>
              <SelectItem value="3-4">3-4 months</SelectItem>
              <SelectItem value="5-6">5-6 months</SelectItem>
              <SelectItem value="6+">6+ months</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button className="w-full mt-2" onClick={() => onFilter({})}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default InternshipFilters;
