
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface AdditionalCommentsProps {
  formData: any;
  updateFormData: (newData: any) => void;
  onCalculateScore: () => void;
}

export const AdditionalComments = ({ formData, updateFormData, onCalculateScore }: AdditionalCommentsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">5. Additional Comments</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="comments" className="text-base font-medium">
            If you have any specific concerns or preferences, please share them here.
          </Label>
          <Textarea
            id="comments"
            placeholder="Enter your comments here..."
            className="min-h-[150px] border-2 focus-visible:ring-primary"
            value={formData.comments || ""}
            onChange={(e) => updateFormData({ comments: e.target.value })}
          />
        </div>
      </div>

      <div className="pt-6">
        <Button 
          onClick={onCalculateScore}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium py-6 text-lg shadow-md"
          size="lg"
        >
          Get My Credit Score
        </Button>
      </div>
    </div>
  );
};
