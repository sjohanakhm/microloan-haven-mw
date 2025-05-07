
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonalInfo } from "./survey/PersonalInfo";
import { LoanDetails } from "./survey/LoanDetails";
import { FinancialInfo } from "./survey/FinancialInfo";
import { LoanPreferences } from "./survey/LoanPreferences";
import { AdditionalComments } from "./survey/AdditionalComments";
import { CreditScoreResult } from "./survey/CreditScoreResult";
import { FinancialAdvice } from "./survey/FinancialAdvice";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateCreditScore } from "@/utils/creditScoreCalculator";
import { useNavigate } from "react-router-dom";

interface FormData {
  [key: string]: any;
}

export const LoanSurvey = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [showResults, setShowResults] = useState(false);
  const [creditScoreData, setCreditScoreData] = useState<{
    score: number;
    category: string;
    factors: Record<string, number>;
  } | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else if (showResults) {
      setShowResults(false);
      setStep(totalSteps);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted",
      description: "Your loan application has been submitted successfully.",
    });
  };

  const calculateAndShowScore = () => {
    const result = calculateCreditScore(formData);
    setCreditScoreData(result);
    setShowResults(true);
    
    // Store the form data and credit score result in sessionStorage for the report page
    sessionStorage.setItem('formData', JSON.stringify(formData));
    sessionStorage.setItem('creditScoreData', JSON.stringify(result));
    
    // Navigate to the credit report page
    navigate('/credit-report');
  };

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <Card className="max-w-3xl mx-auto p-6 border-2 border-primary/20 shadow-lg">
      <div className="flex justify-between items-center mb-8">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index < totalSteps - 1 ? "flex-1" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? "bg-primary text-primary-foreground"
                    : step === index + 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > index + 1 ? <Check size={16} /> : index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 flex-1 mx-2 ${
                    step > index + 1 ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

      {!showResults ? (
        <>
          {step === 1 && <PersonalInfo formData={formData} updateFormData={updateFormData} />}
          {step === 2 && <LoanDetails formData={formData} updateFormData={updateFormData} />}
          {step === 3 && <FinancialInfo formData={formData} updateFormData={updateFormData} />}
          {step === 4 && <LoanPreferences formData={formData} updateFormData={updateFormData} />}
          {step === 5 && (
            <AdditionalComments 
              formData={formData} 
              updateFormData={updateFormData}
              onCalculateScore={calculateAndShowScore} 
            />
          )}
        </>
      ) : (
        <div className="space-y-8">
          {creditScoreData && (
            <>
              <CreditScoreResult 
                score={creditScoreData.score} 
                category={creditScoreData.category} 
                factors={creditScoreData.factors}
                formData={formData}
              />
              
              <FinancialAdvice 
                loanType={formData.loanType || "personal-loan"} 
              />
            </>
          )}
        </div>
      )}

      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={handleBack}
          className="px-6 py-2 font-medium bg-background text-foreground border-2 border-primary/30 hover:bg-primary/10"
        >
          {showResults ? "Back to Survey" : "Back"}
        </Button>
        
        {!showResults && step === totalSteps && (
          <Button 
            onClick={handleSubmit}
            className="px-6 py-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Submit Application
          </Button>
        )}
        
        {!showResults && step < totalSteps && (
          <Button 
            onClick={handleNext}
            className="px-6 py-2 font-medium bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Next
          </Button>
        )}
      </div>
    </Card>
  );
};
