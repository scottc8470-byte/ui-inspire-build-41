import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Play, 
  Pause, 
  Settings, 
  Activity, 
  Cpu, 
  Database,
  Shield,
  TrendingUp,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  Brain,
  Atom,
  Layers,
  Gauge
} from "lucide-react";

const Quantum = () => {
  const quantumMetrics = [
    {
      title: "Simulation Coherence",
      value: "95.2%",
      status: "optimal",
      description: "Quantum simulation stability",
      icon: Atom,
      color: "text-green-500"
    },
    {
      title: "Simulation Nodes",
      value: "24",
      status: "active",
      description: "Active simulation connections",
      icon: Layers,
      color: "text-blue-500"
    },
    {
      title: "Simulated Qubits",
      value: "10",
      status: "available",
      description: "Simulated quantum bits",
      icon: Cpu,
      color: "text-purple-500"
    },
    {
      title: "Simulation Speedup",
      value: "3-8x",
      status: "enhanced",
      description: "Simulated performance gain",
      icon: TrendingUp,
      color: "text-yellow-500"
    }
  ];

  // State for interactive controls
  const [eta, setEta] = React.useState(0.1);
  const [x0, setX0] = React.useState(3.0);
  const [timeSteps, setTimeSteps] = React.useState(100);
  const [decayRate, setDecayRate] = React.useState(0.1);



  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
      case "active":
      case "enhanced":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quantum Simulation</h1>
          <p className="text-muted-foreground mt-2">
            Quantum computing simulation and mathematical modeling controls
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Zap className="h-4 w-4 mr-2" />
            Initialize Simulation
          </Button>
        </div>
      </div>

      {/* Quantum Status Banner */}
      <Card className="border-blue-500/20 bg-blue-500/5">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div>
              <h3 className="text-lg font-semibold text-blue-500">Quantum Simulation Active</h3>
              <p className="text-sm text-muted-foreground">
                Quantum simulation systems operational • 95.2% efficiency • 24 simulation nodes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quantum Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quantumMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
              <div className="flex items-center space-x-1 text-xs">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(metric.status)}`} />
                <span className="text-muted-foreground">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Interactive Mathematical Simulations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2" />
            Quantum Operations
          </CardTitle>
          <CardDescription>
            Interactive mathematical simulations and optimization algorithms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Convex Optimization Controls */}
            <div className="space-y-6 flex flex-col h-full justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Convex Optimization</h4>
                  <p className="text-sm text-muted-foreground">Based on "Are Convex Optimization Curves Convex?" by Barzilai & Shamir (2025)</p>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">📚 How to Use:</h5>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• <strong>Step Size η:</strong> Controls how big steps gradient descent takes</li>
                  <li>• <strong>Initial Point x₀:</strong> Starting position for optimization</li>
                  <li>• <strong>Function:</strong> f(x) = x² (quadratic function with L = 2.0)</li>
                  <li>• <strong>Goal:</strong> Find minimum at x = 0 using gradient descent</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Step Size η: {eta.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.01"
                    max="1.0"
                    step="0.01"
                    value={eta}
                    onChange={(e) => setEta(parseFloat(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0.01</span>
                    <span>1.0</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Initial Point x₀: {x0.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="-5.0"
                    max="5.0"
                    step="0.1"
                    value={x0}
                    onChange={(e) => setX0(parseFloat(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>-5.0</span>
                    <span>5.0</span>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm space-y-1">
                    <div>L-smoothness: L = 2.0</div>
                    <div>η/L ratio: {(eta/2.0).toFixed(3)}</div>
                    <div className={eta <= 0.5 ? "text-green-500" : eta <= 0.875 ? "text-yellow-500" : "text-red-500"}>
                      {eta <= 0.5 ? "✅ Theorem 1: Guaranteed convex curve" : 
                       eta <= 0.875 ? "⚠️ Theorem 2: May not be convex" : 
                       "❌ Theorem 3: May diverge"}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {eta <= 0.5 ? "η ≤ 1/L: Optimal convergence" :
                       eta <= 0.875 ? "1/L < η ≤ 1.75/L: Unknown behavior" :
                       eta <= 1.0 ? "1.75/L < η < 2/L: Non-convex but convergent" :
                       "η ≥ 2/L: May diverge"}
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Run Gradient Descent
                </Button>
                
                {/* Live Demonstration */}
                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h6 className="font-medium text-blue-900 dark:text-blue-100 mb-2">📊 Live Demonstration:</h6>
                  <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <div>Current settings: η = {eta.toFixed(2)}, x₀ = {x0.toFixed(1)}</div>
                    <div>Expected iterations to converge: ~{Math.ceil(Math.log(0.001) / Math.log(1 - 2*eta))}</div>
                    <div>Final value: x* ≈ {Math.pow(1 - 2*eta, 10) * x0}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quantum State Visualization Controls */}
            <div className="space-y-6 flex flex-col h-full justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Atom className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Quantum State Evolution</h4>
                  <p className="text-sm text-muted-foreground">Qubit superposition and decay modeling</p>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">⚛️ How to Use:</h5>
                <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                  <li>• <strong>Time Steps:</strong> Number of points in the simulation</li>
                  <li>• <strong>Decay Rate:</strong> How quickly quantum states lose coherence</li>
                  <li>• <strong>Qubit |0⟩:</strong> sin(t) × exp(-decay×t) evolution</li>
                  <li>• <strong>Qubit |1⟩:</strong> cos(t) × exp(-decay×t) evolution</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Time Steps: {timeSteps}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="10"
                    value={timeSteps}
                    onChange={(e) => setTimeSteps(parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>50</span>
                    <span>200</span>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Decay Rate: {decayRate.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.01"
                    max="0.5"
                    step="0.01"
                    value={decayRate}
                    onChange={(e) => setDecayRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0.01</span>
                    <span>0.5</span>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="text-sm space-y-1">
                    <div>Qubit States: |0⟩ and |1⟩</div>
                    <div>Evolution: sin(t) and cos(t)</div>
                    <div>Decay: exp(-{decayRate.toFixed(2)}t)</div>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Play className="h-4 w-4 mr-2" />
                  Run Quantum Visualization
                </Button>
                
                {/* Live Quantum Demonstration */}
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h6 className="font-medium text-purple-900 dark:text-purple-100 mb-2">⚛️ Live Quantum State:</h6>
                  <div className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                    <div>Time steps: {timeSteps}, Decay rate: {decayRate.toFixed(2)}</div>
                    <div>Qubit |0⟩ amplitude: sin(0) × exp(-{decayRate.toFixed(2)}×0) = 0</div>
                    <div>Qubit |1⟩ amplitude: cos(0) × exp(-{decayRate.toFixed(2)}×0) = 1</div>
                    <div>Coherence time: ~{Math.round(1/decayRate)} time units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mathematical Theory Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="h-5 w-5 mr-2" />
            Mathematical Theory & Key Theorems
          </CardTitle>
          <CardDescription>
            Core mathematical principles behind convex optimization curves
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Theorem 1</h4>
              <p className="text-sm text-green-800 dark:text-green-200">
                For L-smooth convex functions with η ∈ (0, 1/L], the optimization curve is <strong>convex</strong>.
              </p>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Theorem 2</h4>
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                For η ∈ (1.75/L, 2/L), the curve may <strong>not be convex</strong> despite convergence.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Theorem 3</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Gradient norms always decrease <strong>monotonically</strong> for η ∈ (0, 2/L].
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h5 className="font-medium mb-2">🔬 Key Concepts:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Optimization Curve:</strong> The linear interpolation of points &#123;(n, f(x_n))&#125; in ℝ²
              </div>
              <div>
                <strong>Convex Curve:</strong> A curve where differences f(x_n) - f(x_&#123;n+1&#125;) are non-increasing
              </div>
              <div>
                <strong>L-Smooth Function:</strong> ||∇f(x) - ∇f(y)|| ≤ L||x - y|| for all x, y
              </div>
              <div>
                <strong>Step Size Regimes:</strong> η ≤ 1/L guarantees convex curves, η &gt; 1.75/L may not
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quantum Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Simulation Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">95.2%</div>
              <Progress value={95.2} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">Simulation performance</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Simulation Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">3-8x</div>
              <div className="flex justify-center space-x-1 mb-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-green-500">simulated gain</span>
              </div>
              <p className="text-sm text-muted-foreground">vs classical simulation</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Simulation Stability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">95.2%</div>
              <Badge variant="default" className="mb-2">Good</Badge>
              <p className="text-sm text-muted-foreground">Simulation coherence</p>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  );
};

export default Quantum;


