import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  ThumbsUp, 
  Share2, 
  Plus, 
  Search,
  Filter,
  TrendingUp,
  Award,
  Star,
  Clock,
  Reply,
  Heart,
  Activity
} from "lucide-react";

const Community = () => {
  const discussions = [
    {
      id: 1,
      title: "Best Practices for AI Workflow Automation",
      author: "Sarah Chen",
      avatar: "/avatars/sarah.jpg",
      time: "2 hours ago",
      replies: 12,
      likes: 24,
      category: "Workflows",
      isPinned: true,
      isSolved: false
    },
    {
      id: 2,
      title: "Quantum Computing Integration Tips",
      author: "Marcus Rodriguez",
      avatar: "/avatars/marcus.jpg",
      time: "4 hours ago",
      replies: 8,
      likes: 18,
      category: "Quantum",
      isPinned: false,
      isSolved: true
    },
    {
      id: 3,
      title: "Analytics Dashboard Customization",
      author: "Emily Watson",
      avatar: "/avatars/emily.jpg",
      time: "6 hours ago",
      replies: 15,
      likes: 31,
      category: "Analytics",
      isPinned: false,
      isSolved: false
    },
    {
      id: 4,
      title: "Memory System Optimization",
      author: "David Kim",
      avatar: "/avatars/david.jpg",
      time: "1 day ago",
      replies: 6,
      likes: 14,
      category: "System",
      isPinned: false,
      isSolved: false
    },
    {
      id: 5,
      title: "New Feature Request: Advanced Reporting",
      author: "Lisa Thompson",
      avatar: "/avatars/lisa.jpg",
      time: "2 days ago",
      replies: 23,
      likes: 45,
      category: "Feature Request",
      isPinned: false,
      isSolved: false
    }
  ];

  const topContributors = [
    { name: "Sarah Chen", posts: 47, reputation: 2847, avatar: "/avatars/sarah.jpg" },
    { name: "Marcus Rodriguez", posts: 32, reputation: 2156, avatar: "/avatars/marcus.jpg" },
    { name: "Emily Watson", posts: 28, reputation: 1923, avatar: "/avatars/emily.jpg" },
    { name: "David Kim", posts: 24, reputation: 1687, avatar: "/avatars/david.jpg" },
    { name: "Lisa Thompson", posts: 19, reputation: 1456, avatar: "/avatars/lisa.jpg" }
  ];

  const recentActivity = [
    { user: "Alex Johnson", action: "posted a new discussion", time: "5 minutes ago" },
    { user: "Maria Garcia", action: "solved a question", time: "12 minutes ago" },
    { user: "Tom Wilson", action: "earned a badge", time: "1 hour ago" },
    { user: "Anna Lee", action: "shared a workflow", time: "2 hours ago" },
    { user: "Chris Brown", action: "answered a question", time: "3 hours ago" }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workflows":
        return "bg-blue-500";
      case "Quantum":
        return "bg-purple-500";
      case "Analytics":
        return "bg-green-500";
      case "System":
        return "bg-orange-500";
      case "Feature Request":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground mt-2">
            Connect with users, share knowledge, and get help
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
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            New Discussion
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              +156 this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Discussions</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">
              +12 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Questions Solved</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">
              +3% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Health</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Excellent</div>
            <p className="text-xs text-muted-foreground">
              High engagement
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Discussions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Discussions</h2>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={discussion.avatar} />
                        <AvatarFallback>{discussion.author ? discussion.author.split(' ').map(n => n[0]).join('') : 'U'}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          {discussion.isPinned && (
                            <Badge variant="secondary" className="text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              Pinned
                            </Badge>
                          )}
                          {discussion.isSolved && (
                            <Badge variant="default" className="text-xs bg-green-500">
                              <Award className="h-3 w-3 mr-1" />
                              Solved
                            </Badge>
                          )}
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getCategoryColor(discussion.category || 'General')} text-white`}
                          >
                            {discussion.category || 'General'}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mb-2">{discussion.title || 'Untitled Discussion'}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>by {discussion.author || 'Unknown Author'}</span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {discussion.time || 'Recently'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <Reply className="h-4 w-4 mr-2" />
                        {discussion.replies || 0} replies
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        {discussion.likes || 0} likes
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      Join Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Top Contributors
              </CardTitle>
              <CardDescription>
                Most active community members this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{index + 1}</span>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback>{contributor.name ? contributor.name.split(' ').map(n => n[0]).join('') : 'U'}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{contributor.name || 'Unknown User'}</p>
                      <p className="text-xs text-muted-foreground">
                        {contributor.posts || 0} posts • {contributor.reputation || 0} reputation
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest community interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user || 'Unknown User'}</span> {activity.action || 'performed an action'}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time || 'Recently'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>• Be respectful and constructive</p>
                <p>• Search before posting</p>
                <p>• Use clear, descriptive titles</p>
                <p>• Mark solutions as solved</p>
                <p>• Share knowledge generously</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                Read Full Guidelines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
