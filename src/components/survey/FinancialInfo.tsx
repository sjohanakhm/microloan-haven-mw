import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FinancialInfoProps {
  formData: any;
  updateFormData: (newData: any) => void;
}

export const FinancialInfo = ({ formData, updateFormData }: FinancialInfoProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">3. Financial Information</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>What is your estimated monthly income?</Label>
          <RadioGroup defaultValue="less-than-2000">
            <div className="grid gap-4">
              {[
                "Less than $2,000",
                "$2,000 - $5,000",
                "$5,000 - $10,000",
                "More than $10,000",
              ].map((income) => (
                <div key={income} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={income.toLowerCase().replace(/[\$,]/g, "").replace(/ /g, "-")}
                    id={`income-${income.toLowerCase().replace(/[\$,]/g, "").replace(/ /g, "-")}`}
                  />
                  <Label
                    htmlFor={`income-${income
                      .toLowerCase()
                      .replace(/[\$,]/g, "")
                      .replace(/ /g, "-")}`}
                  >
                    {income}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Do you have any existing loans?</Label>
          <RadioGroup defaultValue="no">
            <div className="flex gap-4">
              {["Yes", "No"].map((answer) => (
                <div key={answer} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={answer.toLowerCase()}
                    id={`existing-loans-${answer.toLowerCase()}`}
                  />
                  <Label htmlFor={`existing-loans-${answer.toLowerCase()}`}>
                    {answer}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>If yes, what is your total outstanding loan amount?</Label>
          <RadioGroup defaultValue="less-than-10000">
            <div className="grid gap-4">
              {[
                "Less than $10,000",
                "$10,000 - $50,000",
                "$50,000 - $100,000",
                "More than $100,000",
              ].map((amount) => (
                <div key={amount} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={amount.toLowerCase().replace(/[\$,]/g, "").replace(/ /g, "-")}
                    id={`outstanding-${amount
                      .toLowerCase()
                      .replace(/[\$,]/g, "")
                      .replace(/ /g, "-")}`}
                  />
                  <Label
                    htmlFor={`outstanding-${amount
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
