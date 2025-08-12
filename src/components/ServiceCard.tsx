import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, link, features }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-nature transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto p-4 bg-gradient-forest rounded-xl text-primary-foreground mb-4 group-hover:shadow-adventure transition-all duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Link to={link} className="flex items-center justify-center">
            Lihat Detail
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;