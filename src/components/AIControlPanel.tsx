import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Zap, MessageSquare, Activity, BarChart3, Settings, Eye, RefreshCw, FileText, Lightbulb, RotateCcw, Download } from "lucide-react";

interface AIControlPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AIControlPanel({ open, onOpenChange }: AIControlPanelProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[80vh] bg-card/95 backdrop-blur-sm">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Brain className="h-4 w-4 text-primary-foreground" />
            </div>
            <DialogTitle className="text-xl font-semibold">AI Control Panel</DialogTitle>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="features" className="flex-1">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">AI Control Features</TabsTrigger>
            <TabsTrigger value="status">System Status</TabsTrigger>
            <TabsTrigger value="tests">Test Functions</TabsTrigger>
            <TabsTrigger value="metrics">Metrics & Actions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="flex-1 space-y-6 mt-6">
            <div>
              <h3 className="text-lg font-medium mb-4">AI Personality Mode</h3>
              <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-muted/50">
                <Settings className="h-5 w-5 text-amber-400" />
                <div>
                  <p className="font-medium">Balanced</p>
                  <p className="text-sm text-muted-foreground">Optimal balance of speed and accuracy</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="status" className="flex-1 space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Local LLM</p>
                      <p className="text-sm text-muted-foreground">Connected</p>
                    </div>
                  </div>
                  <Badge variant="success">Online</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Quantum Core</p>
                      <p className="text-sm text-muted-foreground">Processing ready</p>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <div>
                      <p className="font-medium">ChatGPT API</p>
                      <p className="text-sm text-muted-foreground">API key valid</p>
                    </div>
                  </div>
                  <Badge variant="success">Connected</Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Available Models</p>
                      <p className="text-sm text-muted-foreground">1 models loaded: llama3.2</p>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Knowledge Graph</p>
                      <p className="text-sm text-muted-foreground">13.2K nodes</p>
                    </div>
                  </div>
                  <Badge variant="success">Loaded</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Memory System</p>
                      <p className="text-sm text-muted-foreground">3 sessions</p>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tests" className="flex-1 space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Test Ollama</p>
                      <p className="text-sm text-muted-foreground">Test local LLM connection</p>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Test Consciousness</p>
                      <p className="text-sm text-muted-foreground">Calculate φ values</p>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Show Knowledge Graph</p>
                      <p className="text-sm text-muted-foreground">Display neural network</p>
                    </div>
                  </div>
                </Button>
              </div>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Quantum Test</p>
                      <p className="text-sm text-muted-foreground">Run quantum processing test</p>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Quantum Demo</p>
                      <p className="text-sm text-muted-foreground">Show quantum visualization</p>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-medium">Test ChatGPT</p>
                      <p className="text-sm text-muted-foreground">Test API connection</p>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="metrics" className="flex-1 space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Self-Improvement Metrics</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-500"></div>
                      <span className="text-sm">Queries Analyzed:</span>
                    </div>
                    <span className="font-mono">1,247</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-cyan-400"></div>
                      <span className="text-sm">Issues Detected:</span>
                    </div>
                    <span className="font-mono">3</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-purple-500"></div>
                      <span className="text-sm">Improvement Rate:</span>
                    </div>
                    <span className="font-mono">94.2%</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-amber-400"></div>
                      <span className="text-sm">Avg Response Quality:</span>
                    </div>
                    <span className="font-mono">9.4/10</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">Learning from interactions...</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Quick Actions</h3>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Settings className="h-4 w-4" />
                    Deploy AI Workforce
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <FileText className="h-4 w-4" />
                    Generate Business Document
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Lightbulb className="h-4 w-4" />
                    Get R7 Recommendations
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <RotateCcw className="h-4 w-4" />
                    Reset Memory
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <Download className="h-4 w-4" />
                    Export Analytics
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}