import { 
  LayoutDashboard, 
  MessageCircle, 
  Database, 
  Users, 
  Settings, 
  BarChart3,
  Bot,
  FileText
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  id: string;
  badge?: number;
}

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: MessageCircle, label: "Chat Simulator", id: "chat" },
  { icon: Database, label: "Base de Conhecimento", id: "knowledge" },
  { icon: Users, label: "Atendimentos", id: "support" },
  { icon: BarChart3, label: "Relatórios", id: "reports" },
  { icon: Bot, label: "Configuração do Bot", id: "bot-config" },
  { icon: Settings, label: "Configurações", id: "settings" },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col shadow-soft">
      <div className="p-6">
        <div className="bg-whatsapp-light rounded-lg p-4 border border-whatsapp/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">Bot Ativo</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Respondendo mensagens automaticamente
          </p>
        </div>
      </div>
      
      <nav className="flex-1 px-3 space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2.5 text-sm rounded-lg transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-soft" 
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;