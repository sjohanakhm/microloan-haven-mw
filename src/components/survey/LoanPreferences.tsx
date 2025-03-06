
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const LoanPreferences = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">4. Loan Preferences & Credit</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>What repayment period do you prefer?</Label>
          <RadioGroup defaultValue="less-than-1-year">
            <div className="grid gap-4">
              {[
                "Less than 1 year",
                "1-3 years",
                "3-5 years",
                "More than 5 years",
              ].map((period) => (
                <div key={period} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={period.toLowerCase().replace(/ /g, "-")}
                    id={`period-${period.toLowerCase().replace(/ /g, "-")}`}
                  />
                  <Label
                    htmlFor={`period-${period.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {period}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>How would you rate your credit score?</Label>
          <RadioGroup defaultValue="good">
            <div className="grid gap-4">
              {[
                "Poor (Below 580)",
                "Fair (580-669)",
                "Good (670-739)",
                "Very Good (740-799)",
                "Excellent (800+)",
              ].map((score) => (
                <div key={score} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={score.split(" ")[0].toLowerCase()}
                    id={`score-${score.split(" ")[0].toLowerCase()}`}
                  />
                  <Label
                    htmlFor={`score-${score.split(" ")[0].toLowerCase()}`}
                  >
                    {score}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Are you interested in receiving financial advice or loan counseling?</Label>
          <RadioGroup defaultValue="yes">
            <div className="flex gap-4">
              {["Yes", "No"].map((answer) => (
                <div key={answer} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={answer.toLowerCase()}
                    id={`counseling-${answer.toLowerCase()}`}
                  />
                  <Label htmlFor={`counseling-${answer.toLowerCase()}`}>
                    {answer}
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
