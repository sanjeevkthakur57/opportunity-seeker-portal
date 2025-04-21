
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedInternships from "@/components/FeaturedInternships";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import { featuredInternships } from "@/data/internships";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedInternships internships={featuredInternships} />
      <CategoriesSection />
      <HowItWorks />
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-primary-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their dream internships through InternHub. 
            Create your profile today and get personalized internship recommendations!
          </p>
          <Button size="lg" variant="secondary">
            Sign Up Now - It's Free!
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
