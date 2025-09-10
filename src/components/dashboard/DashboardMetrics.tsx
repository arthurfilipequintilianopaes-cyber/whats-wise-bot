import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Users, 
  Clock, 
  TrendingUp, 
  Bot, 
  UserCheck,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Conversas Hoje",
      value: "247",
      change: "+12%",
      icon: MessageCircle,
      trend: "up"
    },
    {
      title: "Respostas Automáticas",
      value: "189",
      change: "76%",
      icon: Bot,
      trend: "up"
    },
    {
      title: "Transferências Humanas",
      value: "58",
      change: "+5%",
      icon: UserCheck,
      trend: "up"
    },
    {
      title: "Tempo Médio de Resposta",
      value: "0.8s",
      change: "-23%",
      icon: Clock,
      trend: "down"
    }
  ];

  const recentActivity = [
    {
      type: "success",
      message: "Bot respondeu sobre política de devolução",
      time: "Há 2 min",
      user: "+55 11 99999-9999"
    },
    {
      type: "transfer",
      message: "Conversa transferida para atendente",
      time: "Há 5 min",
      user: "+55 11 88888-8888"
    },
    {
      type: "success",
      message: "FAQ sobre horário de funcionamento",
      time: "Há 8 min",
      user: "+55 11 77777-7777"
    },
    {
      type: "error",
      message: "Não foi possível encontrar resposta",
      time: "Há 12 min",
      user: "+55 11 66666-6666"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Acompanhe o desempenho do seu chatbot RAG em tempo real</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                  {metric.title}
                  <Icon className="w-4 h-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <Badge 
                  variant={metric.trend === "up" ? "secondary" : "outline"}
                  className={metric.trend === "up" ? "text-success" : "text-muted-foreground"}
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {metric.change}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Atividade Recente</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent/50">
                  <div className="mt-0.5">
                    {activity.type === "success" && (
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    )}
                    {activity.type === "transfer" && (
                      <UserCheck className="w-4 h-4 text-warning" />
                    )}
                    {activity.type === "error" && (
                      <AlertCircle className="w-4 h-4 text-destructive" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">
                      {activity.message}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-muted-foreground">
                        {activity.user}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bot className="w-5 h-5" />
              <span>Status do Sistema</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-whatsapp-light">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">API OpenAI</span>
                </div>
                <Badge variant="secondary" className="text-success">Ativo</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-whatsapp-light">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">WhatsApp API</span>
                </div>
                <Badge variant="secondary" className="text-success">Conectado</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Base de Conhecimento</span>
                </div>
                <Badge variant="outline">156 documentos</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMetrics;