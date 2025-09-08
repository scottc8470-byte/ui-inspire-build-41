import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  BarChart3, 
  PieChart,
  Activity,
  Target,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$124,847",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "vs last month"
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      description: "vs last month"
    },
    {
      title: "Conversion Rate",
      value: "8.2%",
      change: "+1.1%",
      trend: "up",
      icon: Target,
      description: "vs last month"
    },
    {
      title: "Avg. Session",
      value: "4m 32s",
      change: "-2.3%",
      trend: "down",
      icon: Activity,
      description: "vs last month"
    }
  ];

  const chartData = [
    { month: "Jan", revenue: 85000, users: 1200 },
    { month: "Feb", revenue: 92000, users: 1350 },
    { month: "Mar", revenue: 98000, users: 1480 },
    { month: "Apr", revenue: 105000, users: 1620 },
    { month: "May", revenue: 112000, users: 1750 },
    { month: "Jun", revenue: 124000, users: 1900 }
  ];

  const topPages = [
    { page: "/dashboard", views: 1247, bounceRate: "23%", avgTime: "2m 45s" },
    { page: "/workflows", views: 892, bounceRate: "18%", avgTime: "4m 12s" },
    { page: "/analytics", views: 654, bounceRate: "31%", avgTime: "3m 28s" },
    { page: "/settings", views: 423, bounceRate: "15%", avgTime: "1m 52s" },
    { page: "/community", views: 387, bounceRate: "28%", avgTime: "5m 15s" }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    );
  };

  const getTrendColor = (trend: string) => {
    return trend === "up" ? "text-green-500" : "text-red-500";
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Real-time business analytics and performance metrics
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                {getTrendIcon(metric.trend)}
                <span className={getTrendColor(metric.trend)}>{metric.change}</span>
                <span className="text-muted-foreground">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Revenue Trend
            </CardTitle>
            <CardDescription>
              Monthly revenue performance over the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <Progress 
                        value={(data.revenue / 130000) * 100} 
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-20 text-right">
                      ${data.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* User Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              User Growth
            </CardTitle>
            <CardDescription>
              Monthly active user growth and engagement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <Progress 
                        value={(data.users / 2000) * 100} 
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-20 text-right">
                      {data.users.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <PieChart className="h-5 w-5 mr-2" />
            Top Pages
          </CardTitle>
          <CardDescription>
            Most visited pages and their performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium">{page.page}</p>
                    <p className="text-sm text-muted-foreground">{page.views} views</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm font-medium">{page.bounceRate}</p>
                    <p className="text-xs text-muted-foreground">Bounce Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{page.avgTime}</p>
                    <p className="text-xs text-muted-foreground">Avg. Time</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">94</div>
              <Progress value={94} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">Excellent performance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">User Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">4.8</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-300'}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Based on 247 reviews</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">99.8%</div>
              <Badge variant="default" className="mb-2">All Systems Operational</Badge>
              <p className="text-sm text-muted-foreground">Last updated 2 minutes ago</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;


