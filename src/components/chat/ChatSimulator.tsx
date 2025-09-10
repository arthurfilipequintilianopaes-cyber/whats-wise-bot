import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Bot, 
  User, 
  MessageCircle, 
  MoreVertical,
  Phone,
  Video,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: "user" | "bot" | "system";
  content: string;
  timestamp: Date;
  status?: "sending" | "sent" | "delivered" | "read";
}

const ChatSimulator = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "system",
      content: "Simulador de Chat iniciado. Teste as funcionalidades do seu chatbot RAG aqui.",
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: "2",
      type: "bot",
      content: "Olá! 👋 Sou o assistente virtual da empresa. Como posso ajudá-lo hoje?",
      timestamp: new Date(Date.now() - 50000),
      status: "read"
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        "Entendo sua dúvida! De acordo com nossa base de conhecimento, posso te ajudar com isso. 📋",
        "Encontrei informações relevantes sobre isso em nossa documentação. Vou te explicar:",
        "Essa é uma pergunta frequente! Deixe-me consultar nossa base de dados... ✅",
        "Baseado nas informações que temos, posso esclarecer essa questão para você.",
        "Hmm, não encontrei uma resposta específica para isso em nossa base. Vou transferir você para um atendente humano. 🤝"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        type: "bot",
        content: randomResponse,
        timestamp: new Date(),
        status: "sent"
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Simula tempo de processamento variável
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
      status: "sent"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    // Simula resposta do bot após um delay
    setTimeout(() => {
      simulateBotResponse(userMessage.content);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        type: "system",
        content: "Chat limpo. Nova simulação iniciada.",
        timestamp: new Date(),
      },
      {
        id: "2",
        type: "bot",
        content: "Olá! 👋 Sou o assistente virtual da empresa. Como posso ajudá-lo hoje?",
        timestamp: new Date(),
        status: "read"
      }
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Simulador de Chat</h2>
          <p className="text-muted-foreground">Teste as respostas do seu chatbot RAG</p>
        </div>
        <Button onClick={clearChat} variant="outline" className="flex items-center space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Limpar Chat</span>
        </Button>
      </div>

      <Card className="shadow-strong">
        {/* Header do Chat */}
        <CardHeader className="pb-4 border-b border-border bg-whatsapp-light/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Chatbot RAG</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Área de Mensagens */}
          <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-background to-accent/20">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.type === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.type === "system" ? (
                    <div className="w-full text-center">
                      <Badge variant="outline" className="text-xs">
                        {message.content}
                      </Badge>
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-soft",
                        message.type === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-card text-card-foreground rounded-bl-sm border"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                        {message.type === "user" && message.status && (
                          <span className="text-xs opacity-70">✓✓</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-card text-card-foreground px-4 py-2 rounded-2xl rounded-bl-sm border shadow-soft">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input de Mensagem */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={sendMessage} 
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-primary hover:bg-primary-hover"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Este é um simulador. As respostas são exemplos do comportamento do chatbot.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatSimulator;