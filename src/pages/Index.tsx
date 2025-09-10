import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import ChatSimulator from "@/components/chat/ChatSimulator";
import KnowledgeBase from "@/components/knowledge/KnowledgeBase";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardMetrics />;
      case "chat":
        return <ChatSimulator />;
      case "knowledge":
        return <KnowledgeBase />;
      case "support":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Atendimentos</h2>
            <p className="text-muted-foreground">Gerencie as conversas em andamento e histórico de atendimentos.</p>
            <div className="bg-card p-8 rounded-lg border border-dashed border-border text-center">
              <p className="text-muted-foreground">Módulo de atendimentos em desenvolvimento</p>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Relatórios</h2>
            <p className="text-muted-foreground">Analise métricas detalhadas e gere relatórios do seu chatbot.</p>
            <div className="bg-card p-8 rounded-lg border border-dashed border-border text-center">
              <p className="text-muted-foreground">Módulo de relatórios em desenvolvimento</p>
            </div>
          </div>
        );
      case "bot-config":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Configuração do Bot</h2>
            <p className="text-muted-foreground">Configure personalidade, respostas padrão e comportamentos do chatbot.</p>
            <div className="bg-card p-8 rounded-lg border border-dashed border-border text-center">
              <p className="text-muted-foreground">Módulo de configuração em desenvolvimento</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Configurações</h2>
            <p className="text-muted-foreground">Gerencie integrações, API keys e configurações gerais do sistema.</p>
            <div className="bg-card p-8 rounded-lg border border-dashed border-border text-center">
              <p className="text-muted-foreground">Módulo de configurações em desenvolvimento</p>
            </div>
          </div>
        );
      default:
        return <DashboardMetrics />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;