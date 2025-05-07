
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CreditScoreResultProps {
  score: number;
  category: string;
  factors: {
    [key: string]: number;
  };
  formData?: Record<string, any>;
}

export const CreditScoreResult = ({ score, category, factors, formData = {} }: CreditScoreResultProps) => {
  const { toast } = useToast();

  // Function to get color based on score
  const getScoreColor = () => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    if (score >= 20) return "text-orange-600";
    return "text-red-600";
  };

  // Function to get background color based on score
  const getScoreBackgroundColor = () => {
    if (score >= 80) return "bg-green-100";
    if (score >= 60) return "bg-blue-100";
    if (score >= 40) return "bg-yellow-100";
    if (score >= 20) return "bg-orange-100";
    return "bg-red-100";
  };

  // Function to generate downloadable credit report
  const handleDownloadReport = () => {
    // Format the factors for display
    const factorsText = Object.entries(factors)
      .map(([factor, value]) => `- ${factor}: ${value > 0 ? `+${value}` : value} points`)
      .join('\n');
    
    // Format user responses for display
    const userResponsesText = Object.entries(formData)
      .map(([key, value]) => {
        // Format the key to be more readable
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
        return `${formattedKey}: ${value}`;
      })
      .join('\n');
    
    // Create the report content
    const reportContent = 
`------------------------------------------
CREDIT ASSESSMENT REPORT
------------------------------------------

USER QUESTIONNAIRE RESPONSES:
${userResponsesText}

------------------------------------------
CREDIT SCORING LOGIC:
${factorsText}

------------------------------------------
FINAL SCORE & RISK CATEGORY:
Score: ${score}/100
Category: ${category}

------------------------------------------
We encourage you to review our financial advice section for tips tailored to your loan type.
This assessment is based on the information you provided and serves as a preliminary evaluation.
`;

    // Create a blob for the text file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Credit_Assessment_Report.txt';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Report Downloaded",
      description: "Your credit assessment report has been downloaded.",
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Your Credit Assessment</h2>
      
      <div className="flex flex-col items-center mb-8">
        <div className={`flex items-center justify-center w-32 h-32 rounded-full ${getScoreBackgroundColor()} mb-4`}>
          <span className={`text-4xl font-bold ${getScoreColor()}`}>{score}</span>
        </div>
        <div className="text-xl font-medium">
          {category}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Score Factors</h3>
        <div className="space-y-2">
          {Object.entries(factors).map(([factor, value], index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{factor}</span>
              <span className={value > 0 ? "text-green-600" : "text-red-600"}>
                {value > 0 ? `+${value}` : value}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3">
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={handleDownloadReport}
        >
          <Download size={16} />
          <span>Download My Credit Report</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Share size={16} />
          <span>Share Report</span>
        </Button>
      </div>
    </Card>
  );
};
