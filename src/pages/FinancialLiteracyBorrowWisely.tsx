
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialLiteracyBorrowWisely = () => {
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
            <span className="text-sm font-medium">Lesson 2</span>
          </div>
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            🌾 Borrow Only What You Can Repay
          </h1>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-foreground">
              A smart borrower thinks ahead — don't take more than you need just because it's offered.
            </p>
            
            <p className="text-foreground">
              Sometimes it's tempting to accept a large loan, but it's wiser to borrow only what you have a plan 
              to repay. That way, you stay in control, avoid stress, and protect your credit score.
            </p>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Ask yourself:</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>What exactly is this loan for?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>When will I get the money to repay it?</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Is the amount too much for my current income?</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Why this matters:</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Borrowing too much without a plan can lead to missed payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Missed payments lower your score and limit future access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Responsible borrowing = long-term financial freedom</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Real-life example:</h2>
              <Card className="bg-muted/30 border-0">
                <CardContent className="pt-6 text-foreground">
                  Chikondi needed MK 40,000 to pay school fees. CFL offered her MK 100,000, but she only took what 
                  she needed. She repaid early and was approved again a month later.
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-4">Tips before taking a loan:</h2>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Write down your plan: what it's for, how much you need, and your repayment schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Say no to loan amounts that don't match your income or your purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Trust your judgment — a smaller, well-used loan builds more power than a large unpaid one</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="card-purple">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  Previous Lesson
                </h3>
                <p className="mb-4 text-foreground">
                  Review the previous financial literacy lesson.
                </p>
                <Button asChild className="w-full">
                  <Link to="/financial-literacy/paying-on-time">Paying on Time Helps You Grow</Link>
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

export default FinancialLiteracyBorrowWisely;
