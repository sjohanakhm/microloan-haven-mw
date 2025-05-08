
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

interface FinancialEducationProps {
  loanType?: string;
}

export const FinancialEducation = ({ loanType = "loan" }: FinancialEducationProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Financial Education</h3>
      </div>
      
      <Card className="card-purple">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2 text-foreground">
            <span className="bg-accent/20 text-accent p-1 rounded-full">
              <Lightbulb className="h-4 w-4" />
            </span>
            Paying on Time Helps You Borrow More
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            When you repay your {loanType.replace('-', ' ')} on time, your credit score goes up. 
            A higher score means you can access more money next time, with better terms. 
            Lenders trust borrowers who repay on time.
          </p>
        </CardContent>
      </Card>

      <Card className="card-purple">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2 text-foreground">
            <span className="bg-accent/20 text-accent p-1 rounded-full">
              <Lightbulb className="h-4 w-4" />
            </span>
            Borrow Only What You Can Repay
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">
            Just because a {loanType.replace('-', ' ')} is offered doesn't mean you have to take it. 
            Think: how much do I need? How will I repay it? Only borrow what you 
            can afford, and you'll stay in control.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
