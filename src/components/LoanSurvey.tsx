
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PersonalInfo } from "./survey/PersonalInfo";
import { LoanDetails } from "./survey/LoanDetails";
import { FinancialInfo } from "./survey/FinancialInfo";
import { LoanPreferences } from "./survey/LoanPreferences";
import { AdditionalComments } from "./survey/AdditionalComments";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  [key: string]: any;
}

export const LoanSurvey = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
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
    }
  };

  const handleSubmit = async () => {
    // Prepare email content
    const recipients = ["ahmed@consolfinance.com", "krystal@consolfinance.com"];
    const subject = "New Loan Application Submission";
    const body = `
      New loan application received:
      
      Personal Information:
      ${Object.entries(formData)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}
    `;

    // Create mailto link with all recipients
    const mailtoLink = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: "Application Ready to Send",
      description: "Your email client has been opened with the application details. Please review and send the email.",
      duration: 5000,
    });
  };

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <Card className="max-w-3xl mx-auto p-6">
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

      {step === 1 && <PersonalInfo formData={formData} updateFormData={updateFormData} />}
      {step === 2 && <LoanDetails formData={formData} updateFormData={updateFormData} />}
      {step === 3 && <FinancialInfo formData={formData} updateFormData={updateFormData} />}
      {step === 4 && <LoanPreferences formData={formData} updateFormData={updateFormData} />}
      {step === 5 && <AdditionalComments formData={formData} updateFormData={updateFormData} />}

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={handleBack} disabled={step === 1}>
          Back
        </Button>
        <Button onClick={step === totalSteps ? handleSubmit : handleNext}>
          {step === totalSteps ? "Submit Application" : "Next"}
        </Button>
      </div>
    </Card>
  );
};
