import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface LoanDetailsProps {
  formData: any;
  updateFormData: (newData: any) => void;
}

export const LoanDetails = ({ formData, updateFormData }: LoanDetailsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">2. Loan Details</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>What type of loan are you applying for?</Label>
          <RadioGroup defaultValue="personal">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Personal Loan",
                "Auto Loan",
                "Home Loan",
                "Business Loan",
                "Student Loan",
                "Other",
              ].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={type.toLowerCase().replace(" ", "-")}
                    id={`type-${type.toLowerCase().replace(" ", "-")}`}
                  />
                  <Label htmlFor={`type-${type.toLowerCase().replace(" ", "-")}`}>
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>What loan amount are you requesting?</Label>
          <RadioGroup defaultValue="less-than-5000">
            <div className="grid gap-4">
              {[
                "Less than $5,000",
                "$5,000 - $10,000",
                "$10,000 - $50,000",
                "$50,000 - $100,000",
                "More than $100,000",
              ].map((amount) => (
                <div key={amount} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={amount.toLowerCase().replace(/[\$,]/g, "").replace(/ /g, "-")}
                    id={`amount-${amount.toLowerCase().replace(/[\$,]/g, "").replace(/ /g, "-")}`}
                  />
                  <Label
                    htmlFor={`amount-${amount
                      .toLowerCase()
                      .replace(/[\$,]/g, "")
                      .replace(/ /g, "-")}`}
                  >
                    {amount}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
