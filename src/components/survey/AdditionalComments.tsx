
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const AdditionalComments = () => {
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
          />
        </div>
      </div>
    </div>
  );
};
