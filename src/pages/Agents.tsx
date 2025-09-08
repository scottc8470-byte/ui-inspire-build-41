import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Search, 
  Star, 
  Download, 
  Bot, 
  MessageCircle, 
  Edit3, 
  BarChart3,
  Filter,
  Users,
  HeadphonesIcon,
  PenTool,
  TrendingUp
} from "lucide-react";

const agentCategories = ["All", "Sales", "Support", "Content", "Analytics", "Custom"];

const agents = [
  {
    id: 1,
    name: "Sales Assistant AI",
    category: "Sales",
    description: "Automate lead qualification and follow-ups with intelligent conversation flows",
    rating: 4.9,
    downloads: "12.4K",
    metrics: {
      deals: { value: "247", label: "Deals" },
      revenue: { value: "$1.2M", label: "Revenue" },
      conversion: { value: "34%", label: "Conversion" }
    },
    tags: ["Lead Gen", "CRM", "Email"],
    icon: <Bot className="h-6 w-6" />
  },
  {
    id: 2,
    name: "Customer Support Bot",
    category: "Support",
    description: "24/7 customer service with escalation to human agents when needed",
    rating: 4.8,
    downloads: "8.7K",
    metrics: {
      tickets: { value: "1547", label: "Tickets" },
      resolved: { value: "89%", label: "Resolved" },
      satisfaction: { value: "4.7★", label: "Satisfaction" }
    },
    tags: ["Support", "Chat", "Tickets"],
    icon: <HeadphonesIcon className="h-6 w-6" />
  },
  {
    id: 3,
    name: "Content Creator AI",
    category: "Content",
    description: "Generate blogs, social media posts, and marketing copy at scale",
    rating: 4.7,
    downloads: "15.2K",
    metrics: {
      posts: { value: "892", label: "Posts" },
      engagement: { value: "+45%", label: "Engagement" },
      reach: { value: "2.1M", label: "Reach" }
    },
    tags: ["Writing", "SEO", "Social"],
    icon: <PenTool className="h-6 w-6" />
  },
  {
    id: 4,
    name: "Data Analyst AI",
    category: "Analytics",
    description: "Automated reporting and insights from your business data",
    rating: 4.6,
    downloads: "6.3K",
    metrics: {
      reports: { value: "156", label: "Reports" },
      accuracy: { value: "94%", label: "Accuracy" },
      timeSaved: { value: "120h", label: "Time Saved" }
    },
    tags: ["Reports", "BI", "Insights"],
    icon: <BarChart3 className="h-6 w-6" />
  }
];

export default function Agents() {
  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Agents Hub</h1>
          <p className="text-muted-foreground">Deploy intelligent agents to automate your business processes</p>
        </div>
        <Button className="bg-gradient-primary shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Create Custom Agent
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search agents..." className="pl-10" />
        </div>
        <div className="flex items-center gap-2">
          {agentCategories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary/10"
            >
              {category}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {agent.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {agent.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{agent.rating}</span>
                  <span className="text-muted-foreground">{agent.downloads} downloads</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{agent.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {agent.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 py-3">
                {Object.entries(agent.metrics).map(([key, metric]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-primary">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button className="flex-1 bg-gradient-primary shadow-glow">
                  <Download className="h-4 w-4 mr-2" />
                  Deploy Agent
                </Button>
                <Button variant="outline" size="sm">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Custom Agent Builder */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardContent className="text-center py-12">
          <div className="max-w-lg mx-auto space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-muted/10">
                <Bot className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold">Custom Agent Builder</h3>
            <p className="text-muted-foreground">
              Describe what you want your agent to do, and we'll build it for you
            </p>
            <p className="text-sm text-muted-foreground">
              Tell us what tasks you want to automate, and our AI will create
              a custom agent for your needs
            </p>
            <Button className="bg-gradient-primary shadow-glow">
              <Plus className="h-4 w-4 mr-2" />
              Create New Agent
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}