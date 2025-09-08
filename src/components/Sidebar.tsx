import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  Bot, 
  Brain, 
  MessageCircle, 
  Settings, 
  Users, 
  Workflow,
  Zap,
  Database,
  BookOpen
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Luuno AI", href: "/chat", icon: MessageCircle },
  { name: "AI Agents", href: "/agents", icon: Bot },
  { name: "Workflows", href: "/workflows", icon: Workflow },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Community", href: "/community", icon: Users },
  { name: "Knowledge", href: "/knowledge", icon: BookOpen },
  
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-sidebar-foreground">LUUNO</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-sidebar-foreground"
                  )
                }
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};