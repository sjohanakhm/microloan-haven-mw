
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Plant } from "lucide-react";
import { Link } from "react-router-dom";

export const FinancialLiteracy = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn How to Grow with CFL</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore simple, practical lessons to help you manage money, make smart loan choices, and build your financial future.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="glass-card slide-up">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                <GraduationCap size={24} />
              </div>
              <CardTitle>Paying on Time Helps You Grow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                Paying your loan on time shows you are trustworthy — and opens the door to more opportunities.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full text-foreground">
                <Link to="/financial-literacy/paying-on-time">Read More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="glass-card slide-up">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                <Lightbulb size={24} />
              </div>
              <CardTitle>Borrow Only What You Can Repay</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                A smart borrower thinks ahead — don't take more than you need just because it's offered.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full text-foreground">
                <Link to="/financial-literacy/borrow-wisely">Read More</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="glass-card slide-up">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary mb-4">
                <Plant size={24} />
              </div>
              <CardTitle>More Lessons Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                We're growing our library of financial lessons to help you build knowledge and skills.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" disabled className="w-full text-foreground">
                Stay Tuned
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
