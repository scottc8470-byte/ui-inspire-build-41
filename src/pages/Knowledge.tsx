import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Download, 
  Star, 
  Clock, 
  Eye,
  ThumbsUp,
  FileText,
  Video,
  Image,
  Code,
  Zap,
  Database,
  Workflow,
  BarChart3,
  Settings
} from "lucide-react";

const Knowledge = () => {
  const categories = [
    { name: "Getting Started", count: 12, icon: BookOpen, color: "bg-blue-500" },
    { name: "Workflows", count: 8, icon: Workflow, color: "bg-green-500" },
    { name: "Analytics", count: 6, icon: BarChart3, color: "bg-purple-500" },
    { name: "Quantum Engine", count: 4, icon: Zap, color: "bg-yellow-500" },
    { name: "API Reference", count: 15, icon: Code, color: "bg-orange-500" },
    { name: "Troubleshooting", count: 9, icon: Settings, color: "bg-red-500" }
  ];

  const popularArticles = [
    {
      title: "Getting Started with LUUNO AI",
      description: "Complete guide to setting up and using LUUNO AI for the first time",
      category: "Getting Started",
      views: 1247,
      likes: 89,
      lastUpdated: "2 days ago",
      type: "guide",
      isFeatured: true
    },
    {
      title: "Creating Your First Workflow",
      description: "Step-by-step tutorial on building automated workflows",
      category: "Workflows",
      views: 892,
      likes: 67,
      lastUpdated: "1 week ago",
      type: "tutorial",
      isFeatured: true
    },
    {
      title: "Analytics Dashboard Setup",
      description: "Configure and customize your analytics dashboard",
      category: "Analytics",
      views: 654,
      likes: 45,
      lastUpdated: "3 days ago",
      type: "guide",
      isFeatured: false
    },
    {
      title: "Quantum Processing Explained",
      description: "Understanding quantum computing features in LUUNO",
      category: "Quantum Engine",
      views: 423,
      likes: 32,
      lastUpdated: "5 days ago",
      type: "documentation",
      isFeatured: false
    },
    {
      title: "API Authentication Guide",
      description: "How to authenticate and use the LUUNO API",
      category: "API Reference",
      views: 756,
      likes: 54,
      lastUpdated: "1 week ago",
      type: "guide",
      isFeatured: false
    },
    {
      title: "Common Issues and Solutions",
      description: "Troubleshooting guide for frequent problems",
      category: "Troubleshooting",
      views: 987,
      likes: 78,
      lastUpdated: "4 days ago",
      type: "troubleshooting",
      isFeatured: true
    }
  ];

  const recentUpdates = [
    { title: "New Workflow Templates Added", date: "2 hours ago", type: "update" },
    { title: "Analytics API v2.1 Released", date: "1 day ago", type: "release" },
    { title: "Quantum Processing Documentation Updated", date: "2 days ago", type: "update" },
    { title: "Community Guidelines Published", date: "3 days ago", type: "announcement" },
    { title: "Performance Optimization Guide", date: "1 week ago", type: "guide" }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      case "tutorial":
        return <Video className="h-4 w-4" />;
      case "documentation":
        return <FileText className="h-4 w-4" />;
      case "troubleshooting":
        return <Settings className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "guide":
        return "bg-blue-500";
      case "tutorial":
        return "bg-green-500";
      case "documentation":
        return "bg-purple-500";
      case "troubleshooting":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Knowledge Base</h1>
          <p className="text-muted-foreground mt-2">
            Documentation, guides, and resources for LUUNO AI
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">54</div>
            <p className="text-xs text-muted-foreground">
              +3 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4K</div>
            <p className="text-xs text-muted-foreground">
              +1.2K this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">
              Well organized
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Helpfulness</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              User satisfaction
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Categories */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <CardDescription>{category.count} articles</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {article.isFeatured && (
                            <Badge variant="secondary" className="text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getTypeColor(article.type)} text-white`}
                          >
                            {getTypeIcon(article.type)}
                            <span className="ml-1 capitalize">{article.type}</span>
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                        <CardDescription className="mb-3">{article.description}</CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {article.views} views
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {article.likes} likes
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Updated {article.lastUpdated}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Recent Updates
              </CardTitle>
              <CardDescription>
                Latest documentation changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{update.title}</p>
                      <p className="text-xs text-muted-foreground">{update.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Getting Started Guide
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  Video Tutorials
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Code className="h-4 w-4 mr-2" />
                  API Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Troubleshooting
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Help & Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <Button className="w-full">
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full">
                  Submit Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;


