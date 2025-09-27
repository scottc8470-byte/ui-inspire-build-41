import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
}

export const MetricCard = ({ 
  title, 
  value, 
  description, 
  change, 
  changeType = "neutral",
  icon 
}: MetricCardProps) => {
  return (
    <Card className="bg-gradient-card border-border shadow-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-muted/10">
            {icon}
          </div>
          {change && (
            <Badge 
              variant="secondary" 
              className={cn(
                "text-xs font-medium",
                changeType === "positive" && "bg-success/10 text-success border-success/20",
                changeType === "negative" && "bg-destructive/10 text-destructive border-destructive/20",
                changeType === "neutral" && "bg-info/10 text-info border-info/20"
              )}
            >
              {change}
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-black">{value}</h3>
          <p className="text-sm text-black">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};