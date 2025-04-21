
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Intern at GrowthHub",
    quote: "InternHub helped me find the perfect marketing internship that aligned with my career goals. The application process was seamless, and I received a response within days!",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=120&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Software Developer Intern at TechCorp",
    quote: "As a computer science student, finding internships was always challenging until I discovered InternHub. The platform's filtering options helped me find remote opportunities that fit my schedule.",
    avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&h=120&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX Design Intern at Creative Solutions",
    quote: "The InternHub platform is intuitive and user-friendly. I was able to find and apply to multiple design internships in a single afternoon. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=120&h=120&fit=crop&crop=faces"
  },
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">What Our Users Say</h2>
          <p className="text-gray-600 mt-2">
            Success stories from students who found their dream internships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="h-14 w-14 rounded-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
