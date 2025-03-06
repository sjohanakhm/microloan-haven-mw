
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">1. Personal Information</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" placeholder="Enter your full name" />
        </div>

        <div className="space-y-2">
          <Label>Age</Label>
          <RadioGroup defaultValue="18-25">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["18-25", "26-35", "36-45", "46-55", "56+"].map((age) => (
                <div key={age} className="flex items-center space-x-2">
                  <RadioGroupItem value={age} id={`age-${age}`} />
                  <Label htmlFor={`age-${age}`}>{age}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Employment Status</Label>
          <RadioGroup defaultValue="employed">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Employed",
                "Self-employed",
                "Unemployed",
                "Student",
                "Retired",
              ].map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={status.toLowerCase()}
                    id={`status-${status.toLowerCase()}`}
                  />
                  <Label htmlFor={`status-${status.toLowerCase()}`}>{status}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
