
import { Card } from "@/components/ui/card";
import { BadgeCheck, Book, Building2, HandHeart, LightbulbIcon, Users } from "lucide-react";

const values = [
  { icon: BadgeCheck, title: "Integrity", description: "We uphold the highest standards of honesty and ethical behavior" },
  { icon: Building2, title: "Excellence", description: "We strive for exceptional quality in everything we do" },
  { icon: LightbulbIcon, title: "Innovation", description: "We embrace creative solutions to serve our customers better" },
  { icon: Users, title: "Customer Focus", description: "We put our customers' needs at the heart of our decisions" },
  { icon: HandHeart, title: "Boldness", description: "We take calculated risks to create positive change" },
  { icon: Book, title: "Trust", description: "We build lasting relationships based on reliability and transparency" }
];

const sdgs = [
  { number: 1, title: "No Poverty" },
  { number: 4, title: "Quality Education" },
  { number: 5, title: "Gender Equality" },
  { number: 8, title: "Decent Work and Economic Growth" },
  { number: 9, title: "Industry, Innovation and Infrastructure" },
  { number: 10, title: "Reduced Inequalities" }
];

const About = () => {
  return (
    <div className="min-h-screen py-20">
      {/* About Us Section */}
      <section className="container px-4 mx-auto mb-20">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">
            We are a digital first customer-centric microfinance institution duly registered and regulated by the Reserve Bank of Malawi.
          </p>
          <p className="text-lg text-muted-foreground">
            Our vision is to be a trusted partner to the underserved, formal and informal segments, with a focus on Women, Youth and MSME's.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted/50 py-20 mb-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 glass-card">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide innovative financial services alongside educating our clients on the importance of financial diligence on their journey to success.
              </p>
            </Card>
            <Card className="p-8 glass-card">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become a trusted and reliable partner to the underserved, formal and informal segment in Malawi.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container px-4 mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="p-6 glass-card">
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SDG Section */}
      <section className="bg-muted/50 py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our SDG Alignment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sdgs.map((sdg) => (
              <Card key={sdg.number} className="p-6 glass-card text-center">
                <div className="text-2xl font-bold text-primary mb-2">SDG {sdg.number}</div>
                <div className="text-muted-foreground">{sdg.title}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
