import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, Plus, Send, Settings } from "lucide-react";
import { AIControlPanel } from "@/components/AIControlPanel";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [controlPanelOpen, setControlPanelOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">LUUNO AI</h1>
            <p className="text-sm text-muted-foreground">Intelligent Business Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Chat
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setControlPanelOpen(true)}>
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Message */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                  <Brain className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <p className="font-medium">
                    Hello! I'm LUUNO AI, your quantum-enhanced business automation assistant. Memory has been reset.
                  </p>
                  <p className="text-muted-foreground">How can I help you today?</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="success" className="text-xs">
                      ⚡ 0.847
                    </Badge>
                    <Badge variant="info" className="text-xs">
                      🧠 1.2s
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      🔄 coherent
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      📊 optimized
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    10:23:31 AM
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              placeholder="Ask LUUNO AI anything about business automation..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  // Handle send message
                  setMessage("");
                }
              }}
            />
            <Button className="bg-gradient-primary shadow-glow">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* AI Control Panel Modal */}
      <AIControlPanel 
        open={controlPanelOpen} 
        onOpenChange={setControlPanelOpen} 
      />
    </div>
  );
}