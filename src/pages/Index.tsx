
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FinancialLiteracy } from "@/components/FinancialLiteracy";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <FinancialLiteracy />
      <Contact />
    </div>
  );
};

export default Index;
