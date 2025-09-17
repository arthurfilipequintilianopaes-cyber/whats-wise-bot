# WhatsApp RAG Bot - Sistema de Atendimento Inteligente

Um dashboard profissional para gerenciar seu chatbot RAG (Retrieval-Augmented Generation) integrado ao WhatsApp, utilizando OpenAI para respostas inteligentes.

## 🚀 Funcionalidades

### 📊 Dashboard Completo
- **Métricas em tempo real**: Acompanhe conversas, respostas automáticas e transferências
- **Atividade recente**: Monitor de todas as interações do chatbot
- **Status do sistema**: Verificação de conectividade das APIs (OpenAI, WhatsApp)
- **Indicadores de desempenho**: Tempo de resposta e taxa de sucesso

### 💬 Simulador de Chat
- **Interface WhatsApp-like**: Teste seu chatbot em ambiente similar ao real
- **Respostas simuladas**: Veja como o bot responde a diferentes perguntas
- **Indicador de digitação**: Experiência realista de conversa
- **Chat limpo**: Reinicie facilmente para novos testes

### 📚 Base de Conhecimento
- **Gerenciamento de documentos**: Organize informações que alimentam o RAG
- **Busca avançada**: Encontre rapidamente documentos por título ou conteúdo
- **Filtros por categoria**: Organize por políticas, tutoriais, FAQ, etc.
- **Estatísticas de uso**: Veja quais documentos são mais consultados
- **Status de documentos**: Controle entre ativos, rascunhos e arquivados

### 🔐 Sistema de Autenticação
- **Login seguro**: Integração com Supabase Auth
- **Proteção de rotas**: Acesso apenas para usuários autenticados
- **Persistência de sessão**: Mantenha-se logado entre sessões
- **Interface de login/registro**: Design moderno e responsivo

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Backend**: Supabase (Auth + Database)
- **Roteamento**: React Router DOM
- **Estado**: React Query para cache e sincronização
- **Icons**: Lucide React

## 🎨 Design System

O projeto utiliza um design system completo baseado no WhatsApp:
- **Cores primárias**: Verde WhatsApp (#25D366)
- **Gradientes**: Integração harmoniosa com a identidade visual
- **Modo escuro**: Suporte completo com alternância automática
- **Componentes**: Baseados no shadcn/ui com customizações
- **Responsivo**: Interface adaptável para todos os dispositivos

## 📱 Responsividade

- **Mobile-first**: Interface otimizada para dispositivos móveis
- **Breakpoints**: Adaptação para tablet e desktop
- **Touch-friendly**: Botões e elementos com tamanho adequado
- **Performance**: Carregamento rápido em todas as plataformas

## 🚀 Deploy

Este projeto está pronto para deploy na Lovable ou qualquer plataforma que suporte aplicações React:

1. **Lovable**: Use o botão "Publish" no editor
2. **Vercel/Netlify**: Conecte seu repositório e faça deploy automático
3. **Docker**: Containerização disponível para deploy customizado

## 📊 Métricas e Monitoramento

O sistema inclui métricas essenciais:
- **Conversas diárias**: Acompanhe o volume de atendimentos
- **Taxa de automação**: Percentual de respostas automáticas vs. transferências
- **Tempo de resposta**: Performance do sistema RAG
- **Base de conhecimento**: Utilização e eficácia dos documentos

## 🔗 Integrações

### Supabase
- Autenticação de usuários
- Armazenamento de dados
- Políticas de segurança (RLS)
- Edge Functions para lógica customizada

### APIs Externas (Preparado para)
- **OpenAI API**: Processamento de linguagem natural
- **WhatsApp Business API**: Integração com mensagens
- **Webhooks**: Recebimento de mensagens em tempo real

## 📝 Próximos Passos

Para conectar com APIs reais:
1. Configure as credenciais da OpenAI no Supabase
2. Implemente webhooks para WhatsApp Business API
3. Conecte a base de conhecimento com sistema de embeddings
4. Configure monitoramento e alertas

## 💡 Como Usar

1. **Login**: Faça login com suas credenciais
2. **Dashboard**: Visualize métricas e atividades
3. **Chat Simulator**: Teste respostas do chatbot
4. **Knowledge Base**: Gerencie documentos e informações
5. **Deploy**: Publique quando estiver pronto

---

**Desenvolvido com ❤️ usando Lovable**

Sistema completo e profissional para gerenciamento de chatbots RAG no WhatsApp.
