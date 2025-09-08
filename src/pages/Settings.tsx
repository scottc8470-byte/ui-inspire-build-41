import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Database, 
  Network, 
  Zap,
  Save,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Eye,
  Key,
  Globe,
  Monitor,
  Moon,
  Sun
} from "lucide-react";

const Settings = () => {
  const settingsCategories = [
    {
      title: "Account Settings",
      description: "Manage your profile and account preferences",
      icon: User,
      items: [
        { name: "Profile Information", description: "Update your name, email, and avatar" },
        { name: "Password & Security", description: "Change password and security settings" },
        { name: "Two-Factor Authentication", description: "Enable 2FA for enhanced security" },
        { name: "Account Deletion", description: "Permanently delete your account" }
      ]
    },
    {
      title: "Notifications",
      description: "Configure how you receive notifications",
      icon: Bell,
      items: [
        { name: "Email Notifications", description: "Receive updates via email", enabled: true },
        { name: "Push Notifications", description: "Get real-time push notifications", enabled: true },
        { name: "SMS Alerts", description: "Critical alerts via SMS", enabled: false },
        { name: "Weekly Reports", description: "Receive weekly performance reports", enabled: true }
      ]
    },
    {
      title: "Privacy & Security",
      description: "Control your privacy and security settings",
      icon: Shield,
      items: [
        { name: "Data Collection", description: "Allow anonymous usage data collection", enabled: true },
        { name: "Analytics Tracking", description: "Help improve the product with analytics", enabled: true },
        { name: "Cookie Preferences", description: "Manage cookie settings", enabled: true },
        { name: "API Access", description: "Control third-party API access", enabled: false }
      ]
    },
    {
      title: "Appearance",
      description: "Customize the look and feel of the application",
      icon: Palette,
      items: [
        { name: "Dark Mode", description: "Use dark theme", enabled: true },
        { name: "Compact Mode", description: "Use compact interface layout", enabled: false },
        { name: "High Contrast", description: "Enable high contrast mode", enabled: false },
        { name: "Font Size", description: "Adjust text size for better readability", enabled: false }
      ]
    },
    {
      title: "System",
      description: "System configuration and performance settings",
      icon: SettingsIcon,
      items: [
        { name: "Auto-save", description: "Automatically save changes", enabled: true },
        { name: "Performance Mode", description: "Optimize for better performance", enabled: false },
        { name: "Debug Mode", description: "Enable debugging information", enabled: false },
        { name: "Cache Management", description: "Manage application cache", enabled: true }
      ]
    },
    {
      title: "Integrations",
      description: "Manage third-party integrations and APIs",
      icon: Network,
      items: [
        { name: "GitHub Integration", description: "Connect with GitHub repositories", enabled: true },
        { name: "Slack Notifications", description: "Send notifications to Slack", enabled: false },
        { name: "Google Drive", description: "Sync with Google Drive", enabled: false },
        { name: "Webhook Endpoints", description: "Configure webhook URLs", enabled: true }
      ]
    }
  ];

  const systemInfo = [
    { label: "Version", value: "v2.1.0 QUANTUM" },
    { label: "Build", value: "2024.09.02.1" },
    { label: "Environment", value: "Production" },
    { label: "Last Updated", value: "2 hours ago" },
    { label: "Storage Used", value: "2.4 GB / 10 GB" },
    { label: "Memory Usage", value: "67% (1.2 GB)" }
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">
            System configuration and user preferences
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Default
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* System Status */}
      <Card className="border-green-500/20 bg-green-500/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <h3 className="text-lg font-semibold text-green-500">System Operational</h3>
                <p className="text-sm text-muted-foreground">
                  All systems running normally • Last backup: 2 hours ago
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Backup
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Restore
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsCategories && settingsCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {category.icon && <category.icon className="h-5 w-5 mr-2" />}
                {category.title || 'Unnamed Category'}
              </CardTitle>
              <CardDescription>{category.description || 'No description available'}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.items && category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name || 'Unnamed Setting'}</h4>
                      <p className="text-sm text-muted-foreground">{item.description || 'No description available'}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.enabled !== undefined ? (
                        <Switch defaultChecked={Boolean(item.enabled)} />
                      ) : (
                        <Button variant="ghost" size="sm">
                          Configure
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Database className="h-5 w-5 mr-2" />
            System Information
          </CardTitle>
          <CardDescription>
            Current system status and configuration details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {systemInfo && systemInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm font-medium">{info.label || 'Unknown'}</span>
                <span className="text-sm text-muted-foreground">{info.value || 'N/A'}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Key className="h-4 w-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Shield className="h-4 w-4 mr-2" />
                Two-Factor Auth
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Appearance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Moon className="h-4 w-4 mr-2" />
                Dark Mode
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Monitor className="h-4 w-4 mr-2" />
                Layout Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="h-4 w-4 mr-2" />
                Language
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <RefreshCw className="h-4 w-4 mr-2" />
                Clear Cache
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Database className="h-4 w-4 mr-2" />
                Storage Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Trash2 className="h-4 w-4 mr-2" />
                Reset Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="border-red-500/20">
        <CardHeader>
          <CardTitle className="text-red-500">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible and destructive actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
              <div>
                <h4 className="font-medium text-red-500">Delete Account</h4>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
              <div>
                <h4 className="font-medium text-red-500">Reset All Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Reset all settings to their default values
                </p>
              </div>
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
