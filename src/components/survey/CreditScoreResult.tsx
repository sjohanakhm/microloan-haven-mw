
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FinancialEducation } from "./FinancialEducation";

interface CreditScoreResultProps {
  score: number;
  category: string;
  factors: {
    [key: string]: number;
  };
  formData?: Record<string, any>;
}

export const CreditScoreResult = ({ score, category, factors, formData = {} }: CreditScoreResultProps) => {
  const navigate = useNavigate();
  
  // Function to get color based on score
  const getScoreColor = () => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    if (score >= 20) return "text-orange-600";
    return "text-red-600";
  };

  // Function to get background color based on score
  const getScoreBackgroundColor = () => {
    if (score >= 80) return "bg-green-100";
    if (score >= 60) return "bg-blue-100";
    if (score >= 40) return "bg-yellow-100";
    if (score >= 20) return "bg-orange-100";
    return "bg-red-100";
  };

  const viewFullReport = () => {
    // Save data to sessionStorage if needed
    if (formData) {
      sessionStorage.setItem('formData', JSON.stringify(formData));
    }
    sessionStorage.setItem('creditScoreData', JSON.stringify({ score, category, factors }));
    navigate('/credit-report');
  };

  return (
    <div className="space-y-8">
      <Card className="p-6 border-2 border-primary/20">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">Your Credit Assessment</h2>
        
        <div className="flex flex-col items-center mb-8">
          <div className={`flex items-center justify-center w-32 h-32 rounded-full ${getScoreBackgroundColor()} mb-4`}>
            <span className={`text-4xl font-bold ${getScoreColor()}`}>{score}</span>
          </div>
          <div className="text-xl font-medium">
            {category}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Score Factors</h3>
          <div className="space-y-2">
            {Object.entries(factors).map(([factor, value], index) => (
              <div key={index} className="flex justify-between items-center p-2 rounded-md bg-muted/30">
                <span>{factor}</span>
                <span className={typeof value === 'number' && value > 0 ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                  {typeof value === 'number' && value > 0 ? `+${value}` : value}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <Button
          onClick={viewFullReport}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 text-base shadow-md"
        >
          View Full Credit Report
        </Button>
      </Card>

      <Card className="p-6 border-2 border-secondary/50">
        <FinancialEducation loanType={formData.loanType || "loan"} />
      </Card>
    </div>
  );
};
