
import { Card } from "@/components/ui/card";
import { DollarSign, Users, ChartBar } from "lucide-react";

const services = [
  {
    title: "Business Loans",
    description: "Flexible financing solutions tailored for small business growth",
    icon: DollarSign,
  },
  {
    title: "Group Lending",
    description: "Community-based lending programs with shared responsibility",
    icon: Users,
  },
  {
    title: "Financial Advisory",
    description: "Expert guidance to help you make informed financial decisions",
    icon: ChartBar,
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a range of financial solutions designed to meet your needs and help your business grow.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="p-6 glass-card slide-up">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
