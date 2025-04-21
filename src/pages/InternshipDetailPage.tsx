
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import InternshipDetail from "@/components/InternshipDetail";
import { allInternships } from "@/data/internships";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InternshipDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const internship = allInternships.find((internship) => internship.id === id);

  if (!internship) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Internship Not Found</h1>
          <p className="text-gray-600 mb-8">
            The internship you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/internships">Browse All Internships</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <InternshipDetail internship={internship} />
    </Layout>
  );
};

export default InternshipDetailPage;
