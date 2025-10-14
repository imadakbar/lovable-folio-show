import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
}

export const TimelineItem = ({ 
  title, 
  company, 
  period, 
  description,
  delay = 0 
}: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="group hover:shadow-glow hover:scale-[1.02] transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur">
        <CardContent className="p-6">
          <div 
            className="cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-saira text-2xl font-bold text-foreground mb-2">{title}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 mt-1 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <p className="text-primary font-semibold mb-2">{company}</p>
              </div>
              <Badge variant="secondary" className="shrink-0">{period}</Badge>
            </div>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-70'
              }`}
            >
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
