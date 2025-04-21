
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Create an Account",
    description: "Sign up for free and complete your profile to get personalized internship recommendations."
  },
  {
    number: 2,
    title: "Browse Opportunities",
    description: "Search and filter internships based on your interests, location preferences, and availability."
  },
  {
    number: 3,
    title: "Apply with Ease",
    description: "Submit applications directly through our platform with just a few clicks."
  },
  {
    number: 4,
    title: "Get Hired",
    description: "Receive responses from employers and kickstart your professional journey."
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">How It Works</h2>
          <p className="text-gray-600 mt-2">
            Finding your perfect internship is easy with InternHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
