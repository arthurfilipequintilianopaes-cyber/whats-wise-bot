import { MessageSquare, Settings, Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Logout realizado com sucesso",
      description: "Você foi desconectado do sistema.",
    });
  };

  return (
    <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between shadow-soft">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">WhatsApp RAG Bot</h1>
            <p className="text-sm text-muted-foreground">Sistema de Atendimento Inteligente</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </Button>
        
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
        
        <Button variant="ghost" size="icon" onClick={handleLogout} title="Sair">
          <LogOut className="w-5 h-5" />
        </Button>
        
        <Avatar className="w-8 h-8">
          <AvatarImage src="/api/placeholder/32/32" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        
        <div className="hidden sm:block">
          <p className="text-sm font-medium">{user?.email}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;