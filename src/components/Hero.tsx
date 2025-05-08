
import { Button } from "@/components/ui/button";
import { HandCoins } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with darkened overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/photo-1482938289607-e9573fc25ebb")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.4)', // Darkened to improve text contrast
        }}
      />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/20 backdrop-blur-sm text-foreground">
          <HandCoins size={20} />
          <span className="text-sm font-medium">Empowering Malawi's Future</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#222222]">
          Financial Freedom Through
          <span className="text-primary"> Community Lending</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-[#333333]">
          CFL provides accessible microcredit solutions to empower entrepreneurs and small businesses across Malawi, helping communities thrive and grow together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="slide-up backdrop-blur-sm text-[#222222]" asChild>
            <Link to="/loan-application">Apply for a Loan</Link>
          </Button>
          <Button size="lg" variant="outline" className="slide-up backdrop-blur-sm bg-white/80 text-[#333333] hover:text-[#222222] border-white/30" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
