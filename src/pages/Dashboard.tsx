import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Users, 
  Zap, 
  Clock, 
  Bot, 
  Workflow, 
  BarChart3, 
  MessageCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const metrics = [
  {
    title: "Revenue",
    value: "$847K",
    description: "This month from AI automation",
    change: "+23.4%",
    changeType: "positive" as const,
    icon: <DollarSign className="h-5 w-5 text-black" />
  },
  {
    title: "Agents",
    value: "47",
    description: "Agents currently deployed",
    change: "+8",
    changeType: "positive" as const,
    icon: <Bot className="h-5 w-5 text-primary" />
  },
  {
    title: "Automations",
    value: "2,847",
    description: "Active automations across platform",
    change: "+15.2%",
    changeType: "positive" as const,
    icon: <Zap className="h-5 w-5 text-primary" />
  },
  {
    title: "Time Saved",
    value: "1,247h",
    description: "Total automation time saved",
    change: "+31%",
    changeType: "positive" as const,
    icon: <Clock className="h-5 w-5 text-primary" />
  }
];

const quickActions = [
  {
    title: "Deploy New Agent",
    description: "Create and launch an AI agent",
    icon: <Bot className="h-5 w-5" />,
    variant: "default" as const
  },
  {
    title: "Create Workflow",
    description: "Build automated processes",
    icon: <Workflow className="h-5 w-5" />,
    variant: "secondary" as const
  },
  {
    title: "View Analytics",
    description: "Deep dive into performance",
    icon: <BarChart3 className="h-5 w-5" />,
    variant: "outline" as const
  },
  {
    title: "Browse Community",
    description: "Explore templates & guides",
    icon: <MessageCircle className="h-5 w-5" />,
    variant: "outline" as const
  }
];

const recentActivity = [
  {
    title: "Sales AI Agent closed deal worth $15K",
    time: "2 min ago",
    status: "Success"
  },
  {
    title: "Customer Support workflow resolved 12 tickets",
    time: "5 min ago",
    status: "Success"
  },
  {
    title: "Salesforce sync completed successfully",
    time: "8 min ago",
    status: "Success"
  },
  {
    title: "Content AI Agent published 3 blog posts",
    time: "12 min ago",
    status: "Success"
  },
  {
    title: "Invoice processing workflow saved 2.5 hours",
    time: "15 min ago",
    status: "Success"
  }
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          The Future of Business Automation
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Harness the power of AI agents and intelligent workflows to transform your business operations. Join
          thousands of companies already revolutionizing their processes.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button size="lg" className="bg-gradient-primary shadow-glow">
            Start Chatting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <div key={index} className="space-y-2">
                <Button 
                  variant={action.variant}
                  size="lg"
                  className="w-full h-auto flex-col gap-2 p-6"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    {action.icon}
                  </div>
                </Button>
                <div className="text-center">
                  <h3 className="font-medium text-sm">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant="success" className="text-xs">
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}