import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  Settings, 
  Plus, 
  Workflow, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Zap,
  Database,
  Users,
  BarChart3
} from "lucide-react";

const Workflows = () => {
  const workflows = [
    {
      id: 1,
      name: "Customer Onboarding",
      description: "Automated customer registration and welcome sequence",
      status: "active",
      progress: 87,
      lastRun: "2 hours ago",
      nextRun: "In 4 hours",
      triggers: 3,
      actions: 8
    },
    {
      id: 2,
      name: "Lead Qualification",
      description: "AI-powered lead scoring and routing system",
      status: "active",
      progress: 92,
      lastRun: "1 hour ago",
      nextRun: "In 2 hours",
      triggers: 2,
      actions: 6
    },
    {
      id: 3,
      name: "Invoice Processing",
      description: "Automated invoice generation and payment tracking",
      status: "paused",
      progress: 45,
      lastRun: "1 day ago",
      nextRun: "Paused",
      triggers: 1,
      actions: 4
    },
    {
      id: 4,
      name: "Support Ticket Routing",
      description: "Intelligent ticket classification and assignment",
      status: "active",
      progress: 78,
      lastRun: "30 minutes ago",
      nextRun: "In 1 hour",
      triggers: 4,
      actions: 7
    },
    {
      id: 5,
      name: "Data Backup",
      description: "Automated daily backup and verification process",
      status: "active",
      progress: 100,
      lastRun: "6 hours ago",
      nextRun: "In 18 hours",
      triggers: 1,
      actions: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "paused":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4" />;
      case "paused":
        return <Pause className="h-4 w-4" />;
      case "error":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Automation Workflows</h1>
          <p className="text-muted-foreground mt-2">
            Manage and monitor your business process automation
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Create Workflow
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              +1 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Executions</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-muted-foreground">
              +0.3% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247h</div>
            <p className="text-xs text-muted-foreground">
              This month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Workflows List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Workflow Management</h2>
        <div className="grid gap-4">
          {workflows.map((workflow) => (
            <Card key={workflow.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(workflow.status)}`} />
                    <div>
                      <CardTitle className="text-lg">{workflow.name}</CardTitle>
                      <CardDescription>{workflow.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={workflow.status === "active" ? "default" : "secondary"}>
                      {getStatusIcon(workflow.status)}
                      <span className="ml-1 capitalize">{workflow.status}</span>
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{workflow.progress}%</span>
                    </div>
                    <Progress value={workflow.progress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Last Run</p>
                      <p className="font-medium">{workflow.lastRun}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Next Run</p>
                      <p className="font-medium">{workflow.nextRun}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Triggers</p>
                      <p className="font-medium">{workflow.triggers}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Actions</p>
                      <p className="font-medium">{workflow.actions}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Play className="h-4 w-4 mr-2" />
                      Run Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <Pause className="h-4 w-4 mr-2" />
                      {workflow.status === "active" ? "Pause" : "Resume"}
                    </Button>
                    <Button size="sm" variant="outline">
                      View Logs
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflows;


