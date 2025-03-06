
import { Card } from "@/components/ui/card";

const stats = [
  { number: "5000+", label: "Entrepreneurs Supported" },
  { number: "₭500M", label: "In Loans Disbursed" },
  { number: "98%", label: "Repayment Rate" },
  { number: "12", label: "Districts Served" },
];

export const Impact = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Making a real difference in communities across Malawi
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 text-center glass-card">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
