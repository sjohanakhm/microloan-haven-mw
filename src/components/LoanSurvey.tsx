
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
    // This is redundant now as we're calculating the score instead
    toast({
      title: "Application Submitted",
      description: "Your loan application has been submitted successfully.",
    });
  };

  const calculateAndShowScore = () => {
    const result = calculateCreditScore(formData);
    setCreditScoreData(result);
    setShowResults(true);
    
    // Generate and send credit report email
    sendCreditReportEmail(result);
  };

  const sendCreditReportEmail = (creditResult: any) => {
    // Format factors with detailed explanations
    const getFactorExplanation = (factor: string, value: number) => {
      switch(factor) {
        case "Stable employment":
          return "Stable employment indicates reliable income, which increases your ability to make consistent loan repayments.";
        case "Self-employment":
          return "Self-employment shows initiative and a potential income stream. While income may be irregular, it reflects entrepreneurial activity.";
        case "Retirement status":
          return "Retirement typically indicates stable income through pensions or retirement savings, though fixed income may limit flexibility.";
        case "Student status":
          return "Student status suggests future earning potential, but current limited income capacity raises short-term risk.";
        case "Unemployment":
          return "Unemployment presents a significant risk factor due to lack of consistent income to service debt obligations.";
        case "High income":
          return "Higher income levels provide greater financial capacity to manage loan repayments, substantially reducing credit risk.";
        case "Good income":
          return "A good income level indicates solid financial capacity to manage loan repayments while maintaining other obligations.";
        case "Moderate income":
          return "Moderate income provides sufficient capacity for smaller loan products with careful budget management.";
        case "Lower income":
          return "Lower income requires careful assessment of debt-to-income ratio to ensure loan serviceability.";
        case "Existing loans":
          return "Existing debt obligations reduce disposable income available for new loan servicing, increasing overall risk.";
        case "No existing loans":
          return "Absence of existing loans indicates greater capacity to take on new debt without overextension.";
        case "Low outstanding debt":
        case "Medium outstanding debt":
        case "High outstanding debt":
        case "Very high outstanding debt":
          return `${factor} affects your overall debt-to-income ratio, impacting your ability to take on additional credit obligations.`;
        case "Excellent credit history":
        case "Very good credit history":
        case "Good credit history":
        case "Fair credit history":
        case "Poor credit history":
          return `Your ${factor.replace(" credit history", "").toLowerCase()} credit history indicates ${value > 0 ? "positive" : "concerning"} past behavior managing credit obligations.`;
        default:
          return `This factor ${value > 0 ? "positively" : "negatively"} impacts your overall creditworthiness assessment.`;
      }
    };

    // Format factors for email with detailed explanations
    const factorsText = Object.entries(creditResult.factors)
      .map(([factor, value]) => 
        `${factor}: ${value > 0 ? `+${value}` : value} points\n${getFactorExplanation(factor, Number(value))}\n`
      )
      .join('\n');
    
    // Format user responses for email
    const userResponsesText = Object.entries(formData)
      .map(([key, value]) => {
        // Format the key to be more readable
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
          
        // Get the question text based on the key
        const getQuestion = (key: string) => {
          switch(key) {
            case "fullName": return "What is your full name?";
            case "age": return "What is your age range?";
            case "employmentStatus": return "What is your employment status?";
            case "loanType": return "What type of loan are you applying for?";
            case "loanAmount": return "What loan amount are you requesting?";
            case "incomeLevel": return "What is your estimated monthly income?";
            case "existingLoans": return "Do you have any existing loans?";
            case "outstandingLoanAmount": return "What is your total outstanding loan amount?";
            case "repaymentPeriod": return "What repayment period do you prefer?";
            case "creditScore": return "How would you rate your credit score?";
            case "counselingInterest": return "Are you interested in receiving financial advice or loan counseling?";
            case "comments": return "Additional comments:";
            default: return `${key}:`;
          }
        };
        
        return `Question: ${getQuestion(key)}\nAnswer: ${value}`;
      })
      .join('\n\n');
    
    // Generate loan amount recommendation based on score
    const getLoanRecommendation = () => {
      if (creditResult.score >= 80) {
        return `Based on your profile, you are eligible for a ${formData.loanType?.replace('-', ' ')} up to MK 5,000,000.`;
      } else if (creditResult.score >= 60) {
        return `Based on your profile, you are eligible for a ${formData.loanType?.replace('-', ' ')} up to MK 2,000,000.`;
      } else if (creditResult.score >= 40) {
        return `Based on your profile, you are eligible for a ${formData.loanType?.replace('-', ' ')} up to MK 1,000,000 with additional security.`;
      } else if (creditResult.score >= 20) {
        return `Based on your profile, you are eligible for a ${formData.loanType?.replace('-', ' ')} up to MK 500,000 with appropriate collateral.`;
      } else {
        return `Based on your profile, we recommend financial counseling before proceeding with a loan application.`;
      }
    };
    
    // Create the full report content for the email
    const reportContent = 
`------------------------------------------
CONSOLIDATED FINANCE LIMITED - CREDIT ASSESSMENT REPORT
------------------------------------------

APPLICANT QUESTIONNAIRE RESPONSES:
${userResponsesText}

------------------------------------------
DETAILED CREDIT SCORING LOGIC:
${factorsText}

------------------------------------------
FINAL SCORE & RISK CATEGORY:
Score: ${creditResult.score}/100
Category: ${creditResult.category}

------------------------------------------
RECOMMENDATION:
${getLoanRecommendation()}

------------------------------------------
This assessment is based on the information provided and serves as a preliminary evaluation.
For more information, please contact Consolidated Finance Limited.
`;

    // Create a blob for the text file attachment
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const file = new File([blob], 'Credit_Assessment_Report.txt', {type: 'text/plain'});
    
    // Get first name for email subject
    const firstName = formData.fullName ? formData.fullName.split(' ')[0] : "Applicant";
    
    // Recipients
    const recipients = ["ahmed@consolfinance.com", "krystal@consolfinance.com"];
    const subject = `${firstName} Credit Scoring Report – CFL`;
    const emailBody = `Please find attached the credit assessment report for ${formData.fullName || "the applicant"}.
    
Score: ${creditResult.score}/100
Category: ${creditResult.category}

${getLoanRecommendation()}

This is an automated email from the Consolidated Finance Limited loan application system.`;

    // Create mailto link
    const mailtoLink = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Use the Web Share API to share the report if available
    // or fall back to mailto link
    if (navigator.share && blob) {
      try {
        navigator.share({
          title: subject,
          text: emailBody,
          url: URL.createObjectURL(blob)
        }).then(() => {
          toast({
            title: "Report Shared",
            description: "Credit report has been shared successfully.",
          });
        });
      } catch (err) {
        console.error("Sharing failed", err);
        // Fall back to mailto
        window.location.href = mailtoLink;
        
        toast({
          title: "Email Ready to Send",
          description: "Your email client has been opened with the report attached.",
          duration: 5000,
        });
      }
    } else {
      // Fall back to mailto
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Ready to Send",
        description: "Your email client has been opened with the report attached.",
        duration: 5000,
      });
    }
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
