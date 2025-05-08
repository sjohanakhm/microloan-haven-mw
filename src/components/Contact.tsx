
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              We are committed to serving underserved groups, including SMEs, youth, and women, who face significant barriers to securing financing in emerging economies. Contact us to learn how we can help you access the financial services you need.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <span className="text-foreground">ahmed@consolfinance.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <span className="text-foreground">krystal@consolfinance.com</span>
              </div>
            </div>
          </div>
          <Card className="p-6 glass-card">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="text-foreground" />
              </div>
              <div>
                <Input type="email" placeholder="Email Address" className="text-foreground" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[120px] text-foreground" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
