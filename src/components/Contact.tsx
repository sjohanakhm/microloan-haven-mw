
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our services? We're here to help you get started on your journey to financial success.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-primary" />
                <span>+265 1 234 5678</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <span>contact@cfl-malawi.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary" />
                <span>Lilongwe City Center, Malawi</span>
              </div>
            </div>
          </div>
          <Card className="p-6 glass-card">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Email Address" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[120px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
