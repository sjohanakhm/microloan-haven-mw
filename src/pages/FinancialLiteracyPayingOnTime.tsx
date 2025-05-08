
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialLiteracyPayingOnTime = () => {
  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-primary hover:underline">
            &larr; Back to Home
          </Link>
        </div>
        
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/20 backdrop-blur-sm text-foreground">
            <span className="text-sm font-medium">Lesson 1</span>
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            🌿 Paying on Time Helps You Grow
          </h1>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-foreground">
              Paying your loan on time shows you are trustworthy — and opens the door to more opportunities.
            </p>
            
            <p className="text-foreground">
              When you repay on time, CFL increases your credit score. That means next time, you may qualify for a bigger loan, 
              a longer repayment period, or lower fees. It's not about how much money you have — it's about how you manage what you borrow.
            </p>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Why it matters:</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>You might need to restock your business, pay school fees, or manage an emergency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Paying late lowers your score and delays future access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>But every on-time payment builds your financial reputation</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Real-life example:</h2>
              <Card className="bg-muted/30 border-0">
                <CardContent className="pt-6 text-foreground">
                  Agnes runs a tomato stand in Blantyre. She took MK 60,000 for her business and repaid weekly. 
                  Within two months, she qualified for MK 100,000 on better terms.
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Tips to stay on track:</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Choose a repayment day you'll remember (e.g. market day or salary day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Pay in small amounts weekly, even before the due date</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Use your CFL app or USSD to check your balance any time</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-purple">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  Next Lesson
                </h3>
                <p className="mb-4 text-foreground">
                  Continue learning with our next financial literacy lesson.
                </p>
                <Button asChild className="w-full">
                  <Link to="/financial-literacy/borrow-wisely">Borrow Only What You Can Repay</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  Ready to apply?
                </h3>
                <p className="mb-4 text-foreground">
                  Start your loan application process with CFL.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/loan-application">Apply for a Loan</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracyPayingOnTime;
