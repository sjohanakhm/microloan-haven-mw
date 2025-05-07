
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface FormData {
  [key: string]: any;
}

interface CreditScoreData {
  score: number;
  category: string;
  factors: Record<string, number>;
}

const CreditReport = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [creditScoreData, setCreditScoreData] = useState<CreditScoreData | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Retrieve the data from sessionStorage
    const storedFormData = sessionStorage.getItem('formData');
    const storedCreditScoreData = sessionStorage.getItem('creditScoreData');
    
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
    
    if (storedCreditScoreData) {
      setCreditScoreData(JSON.parse(storedCreditScoreData));
    }
  }, []);

  // Formats question keys for better display
  const formatQuestionKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  // Gets the actual question based on the form field key
  const getQuestion = (key: string): string => {
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
      default: return `${formatQuestionKey(key)}:`;
    }
  };

  // Gets a detailed explanation for each factor
  const getFactorExplanation = (factor: string, value: number): string => {
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

  // Generate loan recommendation based on score
  const getLoanRecommendation = (): string => {
    if (!creditScoreData) return "";
    
    const loanTypeFormatted = formData.loanType?.replace('-', ' ') || 'personal loan';
    
    if (creditScoreData.score >= 80) {
      return `Based on your profile, you are eligible for a ${loanTypeFormatted} up to MK 5,000,000.`;
    } else if (creditScoreData.score >= 60) {
      return `Based on your profile, you are eligible for a ${loanTypeFormatted} up to MK 2,000,000.`;
    } else if (creditScoreData.score >= 40) {
      return `Based on your profile, you are eligible for a ${loanTypeFormatted} up to MK 1,000,000 with additional security.`;
    } else if (creditScoreData.score >= 20) {
      return `Based on your profile, you are eligible for a ${loanTypeFormatted} up to MK 500,000 with appropriate collateral.`;
    } else {
      return `Based on your profile, we recommend financial counseling before proceeding with a loan application.`;
    }
  };

  const sendEmailToAdmin = () => {
    // Format factors with detailed explanations for email
    const factorsText = creditScoreData && Object.entries(creditScoreData.factors)
      .map(([factor, value]) => 
        `${factor}: ${value > 0 ? `+${value}` : value} points\n${getFactorExplanation(factor, Number(value))}\n`
      )
      .join('\n');
    
    // Format user responses for email
    const userResponsesText = Object.entries(formData)
      .map(([key, value]) => `Question: ${getQuestion(key)}\nAnswer: ${value}`)
      .join('\n\n');
    
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
Score: ${creditScoreData?.score}/100
Category: ${creditScoreData?.category}

------------------------------------------
RECOMMENDATION:
${getLoanRecommendation()}

------------------------------------------
This assessment is based on the information provided and serves as a preliminary evaluation.
For more information, please contact Consolidated Finance Limited.
`;

    // Recipients
    const recipients = ["ahmed@consolfinance.com", "krystal@consolfinance.com"];
    const firstName = formData.fullName ? formData.fullName.split(' ')[0] : "Applicant";
    const subject = `${firstName} Credit Scoring Report – CFL`;
    const emailBody = `Please find attached the credit assessment report for ${formData.fullName || "the applicant"}.
    
Score: ${creditScoreData?.score}/100
Category: ${creditScoreData?.category}

${getLoanRecommendation()}

This is an automated email from the Consolidated Finance Limited loan application system.`;

    // Create mailto link
    const mailtoLink = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Prepared",
      description: "Your email client has been opened with the report.",
      duration: 5000,
    });
  };

  if (!creditScoreData) {
    return (
      <div className="min-h-screen bg-muted/30 py-12">
        <Card className="max-w-3xl mx-auto p-6 border-2 border-primary/20 shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">No Report Available</h2>
          <p className="text-center">Please complete the loan application survey first.</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container px-4 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-foreground">Your Credit Assessment Report</h1>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          This report provides a detailed overview of your credit assessment based on the information you've provided.
        </p>

        <Card className="max-w-4xl mx-auto p-8 border-2 border-primary/20 shadow-lg mb-8">
          {/* Header Section */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
              <span className={`text-3xl font-bold ${creditScoreData.score >= 60 ? 'text-green-600' : creditScoreData.score >= 40 ? 'text-yellow-600' : 'text-red-600'}`}>
                {creditScoreData.score}
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-2">
              Your Score: {creditScoreData.score}/100 – {creditScoreData.category}
            </h2>
            <p className="text-lg font-medium text-primary">
              {getLoanRecommendation()}
            </p>
          </div>

          {/* Questionnaire Responses */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Your Questionnaire Responses</h3>
            <div className="space-y-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 border-b border-muted">
                  <div className="font-medium">{getQuestion(key)}</div>
                  <div className="md:col-span-2">{String(value)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Credit Scoring Logic */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Detailed Credit Scoring Logic</h3>
            <div className="space-y-4">
              {Object.entries(creditScoreData.factors).map(([factor, value], index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{factor}</span>
                    <span className={`font-bold ${Number(value) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {Number(value) > 0 ? `+${value}` : value} points
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {getFactorExplanation(factor, Number(value))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Button */}
          <div className="mt-8 text-center">
            <Button 
              onClick={sendEmailToAdmin}
              className="px-6 py-6 font-medium bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg shadow-md"
              size="lg"
            >
              <Mail className="mr-2" /> Email this Report to Admin
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreditReport;
