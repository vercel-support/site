import Card from "../components/card";
import ContactForm from "../components/contactForm";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Available = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Get in touch with Brandon Pittman." />

      <Card className="max-w-sm px-6 py-8 mx-auto mt-8">
        <h1 className="max-w-md mx-auto text-2xl font-bold text-gray-900">
          Send me a message
        </h1>

        <ContactForm />
      </Card>
    </Layout>
  );
};

export default Available;
