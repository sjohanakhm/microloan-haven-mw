
import { LoanSurvey } from "@/components/LoanSurvey";

const LoanApplication = () => {
  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-foreground">Loan Application Survey</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Thank you for taking the time to complete this short survey. Your responses will help us better understand your financial needs and provide the best loan options for you.
        </p>
        <LoanSurvey />
      </div>
    </div>
  );
};

export default LoanApplication;
