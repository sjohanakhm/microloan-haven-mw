
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
          <Label htmlFor="comments">
            If you have any specific concerns or preferences, please share them here.
          </Label>
          <Textarea
            id="comments"
            placeholder="Enter your comments here..."
            className="min-h-[150px]"
            value={formData.comments || ""}
            onChange={(e) => updateFormData({ comments: e.target.value })}
          />
        </div>
      </div>

      <div className="pt-6">
        <Button 
          onClick={onCalculateScore}
          className="w-full"
          size="lg"
        >
          Get My Credit Score
        </Button>
      </div>
    </div>
  );
};
