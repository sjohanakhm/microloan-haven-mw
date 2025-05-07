
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, Share } from "lucide-react";

interface FinancialAdviceProps {
  loanType: string;
}

export const FinancialAdvice = ({ loanType }: FinancialAdviceProps) => {
  const getLoanTypeName = () => {
    switch (loanType) {
      case "personal-loan":
        return "Personal Loan";
      case "auto-loan":
        return "Auto Loan";
      case "home-loan":
        return "Home Loan";
      case "business-loan":
        return "Small Business Loan";
      case "student-loan":
        return "Education Loan";
      default:
        return "Loan";
    }
  };

  const renderAdvice = () => {
    switch (loanType) {
      case "student-loan":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Education Loan Advice</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Create a detailed study budget that includes tuition, books, living expenses, and transportation.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Plan school fees payment in advance; many institutions offer early payment discounts.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Consider part-time work during studies to reduce overall loan amount.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Research scholarship opportunities to supplement your education financing.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Start repayment planning before graduation to ensure a smooth transition.</span>
              </li>
            </ul>
          </div>
        );
      case "home-loan":
      case "personal-loan":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Household Loan Advice</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Track all household expenses with a monthly budget spreadsheet or app.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Build an emergency fund covering 3-6 months of essential expenses.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Implement a family budgeting system where all members understand financial goals.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Prioritize needs over wants when making purchasing decisions.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Consider bulk buying and seasonal shopping to reduce overall expenses.</span>
              </li>
            </ul>
          </div>
        );
      case "business-loan":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Small Business Loan Advice</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Develop proper pricing strategies to ensure profitability while remaining competitive.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Reinvest a percentage of profits back into the business for sustainable growth.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Implement effective inventory tracking to prevent overstocking and stockouts.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Separate business and personal finances to accurately track business performance.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Consider seasonal cash flow variations in your financial planning.</span>
              </li>
            </ul>
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">General Financial Advice</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Create and stick to a realistic monthly budget.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Build an emergency fund for unexpected expenses.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Track all income and expenses to identify areas for improvement.</span>
              </li>
              <li className="flex gap-2">
                <Check className="text-green-600" size={20} />
                <span>Avoid taking on additional debt while repaying existing loans.</span>
              </li>
            </ul>
          </div>
        );
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Financial Advice for {getLoanTypeName()}</h2>
      {renderAdvice()}
      
      <div className="flex gap-3 mt-6">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Download size={16} />
          <span>Download Advice</span>
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Share size={16} />
          <span>Share Advice</span>
        </Button>
      </div>
    </Card>
  );
};
