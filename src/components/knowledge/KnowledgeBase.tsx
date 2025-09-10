import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, 
  Upload, 
  Search, 
  Edit, 
  Trash2, 
  Plus,
  Database,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  category: string;
  lastUpdated: Date;
  status: "active" | "draft" | "archived";
  usage: number;
}

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const mockData: KnowledgeItem[] = [
    {
      id: "1",
      title: "Política de Devolução",
      content: "Nossa política de devolução permite que você devolva produtos em até 30 dias...",
      category: "Políticas",
      lastUpdated: new Date(Date.now() - 86400000),
      status: "active",
      usage: 145
    },
    {
      id: "2",
      title: "Horário de Funcionamento",
      content: "Funcionamos de segunda a sexta das 9h às 18h...",
      category: "Informações Gerais",
      lastUpdated: new Date(Date.now() - 172800000),
      status: "active",
      usage: 89
    },
    {
      id: "3",
      title: "Como Fazer Pedidos",
      content: "Para fazer um pedido, acesse nosso site e siga os passos...",
      category: "Tutoriais",
      lastUpdated: new Date(Date.now() - 259200000),
      status: "draft",
      usage: 23
    }
  ];

  const categories = ["Todos", "Políticas", "Informações Gerais", "Tutoriais", "FAQ", "Produtos"];

  const filteredData = mockData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || selectedCategory === "Todos" ||
                           item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-success bg-success/10 border-success/20";
      case "draft":
        return "text-warning bg-warning/10 border-warning/20";
      case "archived":
        return "text-muted-foreground bg-muted/10 border-muted/20";
      default:
        return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Base de Conhecimento</h2>
          <p className="text-muted-foreground">Gerencie os documentos e informações que alimentam seu chatbot RAG</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Documento
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Documentos</p>
                <p className="text-2xl font-bold text-foreground">156</p>
              </div>
              <Database className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Documentos Ativos</p>
                <p className="text-2xl font-bold text-success">142</p>
              </div>
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Necessitam Revisão</p>
                <p className="text-2xl font-bold text-warning">14</p>
              </div>
              <AlertCircle className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e Busca */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category.toLowerCase() || 
                          (category === "Todos" && selectedCategory === "all") ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category === "Todos" ? "all" : category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <Button variant="outline" className="lg:w-auto w-full">
              <Upload className="w-4 h-4 mr-2" />
              Importar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Documentos */}
      <div className="grid gap-4">
        {filteredData.map((item) => (
          <Card key={item.id} className="shadow-soft hover:shadow-medium transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status === "active" ? "Ativo" : 
                       item.status === "draft" ? "Rascunho" : "Arquivado"}
                    </Badge>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Atualizado em {item.lastUpdated.toLocaleDateString('pt-BR')}</span>
                      <span>•</span>
                      <span>{item.usage} consultas</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="ghost" size="icon">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredData.length === 0 && (
        <Card className="shadow-soft">
          <CardContent className="p-8 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhum documento encontrado com os filtros aplicados</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default KnowledgeBase;