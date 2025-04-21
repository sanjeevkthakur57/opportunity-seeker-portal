
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">About InternHub</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connecting talented students with the best internship opportunities around the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At InternHub, we're dedicated to bridging the gap between academia and industry by providing a platform 
              where students can discover valuable internship opportunities that align with their career aspirations.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that internships are a crucial stepping stone in a student's professional journey, 
              offering hands-on experience, skill development, and industry exposure that complement academic learning.
            </p>
            <p className="text-gray-700">
              Our mission is to empower students to make informed decisions about their career paths while helping 
              companies discover fresh talent and diverse perspectives.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Team working together" 
              className="rounded-lg shadow-xl" 
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Why Choose InternHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Curated Opportunities</h3>
                <p className="text-gray-600">
                  We carefully vet all internship listings to ensure they provide valuable learning experiences and fair compensation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Streamlined Applications</h3>
                <p className="text-gray-600">
                  Our platform simplifies the application process, allowing you to apply to multiple internships with just a few clicks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Career Resources</h3>
                <p className="text-gray-600">
                  Access resume templates, interview tips, and career guidance to help you succeed in your internship journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["CEO & Founder", "CTO", "Head of Operations", "Marketing Director"].map((role, index) => (
              <div key={index} className="text-center">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&auto=format&q=80`} 
                    alt={`Team member - ${role}`}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
