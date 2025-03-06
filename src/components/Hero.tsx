import { Button } from "@/components/ui/button";
import { HandCoins } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary">
          <HandCoins size={20} />
          <span className="text-sm font-medium">Empowering Malawi's Future</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
          Financial Freedom Through
          <span className="text-primary"> Community Lending</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
          CFL provides accessible microcredit solutions to empower entrepreneurs and small businesses across Malawi, helping communities thrive and grow together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="slide-up">
            Apply for a Loan
          </Button>
          <Button size="lg" variant="outline" className="slide-up" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
