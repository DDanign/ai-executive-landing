
import { useEffect } from 'react';
import '../styles/landing.css';
import { Brain, Users, Lock, Zap, BookOpen, Globe, CheckCircle, ChevronRight, Menu, X } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Import and initialize the main script after component mounts
    import('../scripts/main.js').catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-raycast-darker text-white overflow-x-hidden">
      {/* Custom cursor follower will be created by JS */}
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 neo-blur">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-raycast-purple animate-pulse-soft" />
                <span className="text-xl font-bold tracking-tight">AI Executive</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#program" className="hover:text-raycast-blue transition-colors">Programa</a>
              <a href="#modules" className="hover:text-raycast-blue transition-colors">Módulos</a>
              <a href="#benefits" className="hover:text-raycast-blue transition-colors">Benefícios</a>
              <a href="#pricing" className="hover:text-raycast-blue transition-colors">Investimento</a>
              <button className="glass-morphism px-5 py-2 rounded-full text-white font-medium hover:bg-raycast-purple/20 transition-all">
                Inscreva-se
              </button>
            </nav>
            
            {/* Mobile menu button */}
            <button id="mobile-menu-toggle" className="md:hidden flex items-center">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div id="mobile-menu" className="fixed inset-0 z-40 bg-raycast-darker/95 backdrop-blur-lg hidden md:hidden">
        <div className="h-full flex flex-col">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <button id="mobile-menu-close">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
            <a href="#program" className="hover:text-raycast-blue transition-colors">Programa</a>
            <a href="#modules" className="hover:text-raycast-blue transition-colors">Módulos</a>
            <a href="#benefits" className="hover:text-raycast-blue transition-colors">Benefícios</a>
            <a href="#pricing" className="hover:text-raycast-blue transition-colors">Investimento</a>
            <button className="glass-morphism px-5 py-2 rounded-full text-white font-medium hover:bg-raycast-purple/20 transition-all">
              Inscreva-se
            </button>
          </nav>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-3">
              <span className="tag animate-fade-in">Curso imersivo de 7 horas</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text animate-fade-in typewriter">
              <span className="text-gradient">Inteligência Artificial</span> para Executivos
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in-delayed">
              Fundamentos, Aplicações e Vantagem Competitiva
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delayed">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-raycast-blue to-raycast-purple font-medium transition-all hover:shadow-lg hover:shadow-raycast-purple/30">
                Inscreva-se Agora
              </button>
              <a href="#program" className="px-6 py-3 rounded-full glass-morphism font-medium hover:bg-white/10 transition-all">
                Ver Programa
              </a>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="neo-blur rounded-xl p-6 text-center reveal-item">
              <div className="mb-3 mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-raycast-purple/20">
                <Users className="w-7 h-7 text-raycast-purple" />
              </div>
              <div className="text-3xl font-bold mb-1">+500</div>
              <p className="text-white/60">Executivos treinados</p>
            </div>
            <div className="neo-blur rounded-xl p-6 text-center reveal-item" style={{transitionDelay: '0.1s'}}>
              <div className="mb-3 mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-raycast-blue/20">
                <Globe className="w-7 h-7 text-raycast-blue" />
              </div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <p className="text-white/60">Taxa de satisfação</p>
            </div>
            <div className="neo-blur rounded-xl p-6 text-center reveal-item" style={{transitionDelay: '0.2s'}}>
              <div className="mb-3 mx-auto w-14 h-14 rounded-full flex items-center justify-center bg-raycast-green/20">
                <Zap className="w-7 h-7 text-raycast-green" />
              </div>
              <div className="text-3xl font-bold mb-1">7h</div>
              <p className="text-white/60">De conteúdo prático</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About the Program */}
      <section id="program" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal-item">
            <span className="tag mb-4 inline-block">Sobre o curso</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-static">Visão Completa</span> sobre IA para Líderes
            </h2>
            <p className="text-white/70 leading-relaxed">
              Este curso oferece uma visão completa e pragmática sobre Inteligência Artificial para executivos, 
              gestores e profissionais que desejam entender como aplicar IA — em especial IA Generativa — 
              de forma estratégica e responsável em suas organizações.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
            <div className="order-2 md:order-1 reveal-item">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-morphism p-5 rounded-xl card-hover">
                  <BookOpen className="w-8 h-8 text-raycast-blue mb-3" />
                  <h3 className="font-bold mb-2">Aprendizado Prático</h3>
                  <p className="text-white/70 text-sm">Casos reais e exercícios hands-on durante todo o curso</p>
                </div>
                <div className="glass-morphism p-5 rounded-xl card-hover">
                  <Brain className="w-8 h-8 text-raycast-purple mb-3" />
                  <h3 className="font-bold mb-2">Fundamentos Sólidos</h3>
                  <p className="text-white/70 text-sm">Conceitos essenciais de IA explicados em linguagem clara</p>
                </div>
                <div className="glass-morphism p-5 rounded-xl card-hover">
                  <Users className="w-8 h-8 text-raycast-green mb-3" />
                  <h3 className="font-bold mb-2">Networking</h3>
                  <p className="text-white/70 text-sm">Troca de experiências com outros profissionais e especialistas</p>
                </div>
                <div className="glass-morphism p-5 rounded-xl card-hover">
                  <Zap className="w-8 h-8 text-raycast-blue mb-3" />
                  <h3 className="font-bold mb-2">Aplicação Imediata</h3>
                  <p className="text-white/70 text-sm">Conhecimentos que podem ser aplicados no dia seguinte</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 reveal-item">
              <div className="glass-morphism rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-raycast-purple/20 rounded-bl-full"></div>
                <h3 className="text-xl font-bold mb-4">Para quem é este curso?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-raycast-green mr-3 mt-0.5 shrink-0" />
                    <span className="text-white/80">Executivos e gestores interessados em entender como a IA pode gerar vantagem competitiva</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-raycast-green mr-3 mt-0.5 shrink-0" />
                    <span className="text-white/80">Profissionais de nível sênior que precisam alinhar estratégias de IA com objetivos de negócio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-raycast-green mr-3 mt-0.5 shrink-0" />
                    <span className="text-white/80">Empreendedores e decisores que desejam identificar oportunidades de inovação usando IA</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <svg className="progress-ring" width="60" height="60">
                        <circle className="progress-ring__circle progress-ring__circle--bg" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
                        <circle className="progress-ring__circle" data-percent="96" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">96% dos participantes</div>
                      <div className="text-sm text-white/60">aplicam o conhecimento em até 30 dias</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules */}
      <section id="modules" className="py-20 relative clip-path-diagonal bg-raycast-dark">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-item">
            <span className="tag mb-4 inline-block">Programa do curso</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-static">Módulos</span> do Curso
            </h2>
            <p className="text-white/70 leading-relaxed">
              Um dia completo de imersão para dominar os conceitos fundamentais e aplicações práticas da IA em negócios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="module-card reveal-item">
              <div className="mb-4 flex justify-between items-start">
                <div className="module-icon bg-raycast-purple/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Brain className="text-raycast-purple w-6 h-6" />
                </div>
                <span className="text-sm bg-raycast-highlight rounded-full px-3 py-1">1 hora</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fundamentos de IA</h3>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                  <span>O que é IA e como ela evoluiu</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                  <span>Diferenças entre IA tradicional e IA Generativa</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                  <span>Elementos essenciais de aplicações de IA</span>
                </li>
              </ul>
            </div>
            
            <div className="module-card reveal-item" style={{transitionDelay: '0.1s'}}>
              <div className="mb-4 flex justify-between items-start">
                <div className="module-icon bg-raycast-blue/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Globe className="text-raycast-blue w-6 h-6" />
                </div>
                <span className="text-sm bg-raycast-highlight rounded-full px-3 py-1">1 hora</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Estratégias de Aplicação</h3>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                  <span>Identificação de oportunidades em ambientes empresariais</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                  <span>Roadmap para implementação de projetos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                  <span>Fatores críticos de sucesso para projetos de IA</span>
                </li>
              </ul>
            </div>
            
            <div className="module-card reveal-item" style={{transitionDelay: '0.2s'}}>
              <div className="mb-4 flex justify-between items-start">
                <div className="module-icon bg-raycast-green/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Lock className="text-raycast-green w-6 h-6" />
                </div>
                <span className="text-sm bg-raycast-highlight rounded-full px-3 py-1">30 min</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Governança e IA Responsável</h3>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-green mr-2 mt-0.5 shrink-0" />
                  <span>Pilares de governança: privacidade, transparência, responsabilidade</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-green mr-2 mt-0.5 shrink-0" />
                  <span>Vieses algorítmicos e mitigação de riscos</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-green mr-2 mt-0.5 shrink-0" />
                  <span>Frameworks para implementação ética</span>
                </li>
              </ul>
            </div>
            
            <div className="module-card reveal-item">
              <div className="mb-4 flex justify-between items-start">
                <div className="module-icon bg-raycast-purple/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Zap className="text-raycast-purple w-6 h-6" />
                </div>
                <span className="text-sm bg-raycast-highlight rounded-full px-3 py-1">1.5 horas</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Uso Pessoal de IA (Prático)</h3>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                  <span>Ferramentas de IA para produtividade individual</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                  <span>Demonstração hands-on de um caso simples</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                  <span>Integração de IA no fluxo de trabalho executivo</span>
                </li>
              </ul>
            </div>
            
            <div className="module-card reveal-item" style={{transitionDelay: '0.1s'}}>
              <div className="mb-4 flex justify-between items-start">
                <div className="module-icon bg-raycast-blue/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <BookOpen className="text-raycast-blue w-6 h-6" />
                </div>
                <span className="text-sm bg-raycast-highlight rounded-full px-3 py-1">1 hora</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Case Studies</h3>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                  <span>Apresentação de casos reais de empresas</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                  <span>Discussão em grupo: lições aprendidas e desafios</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                  <span>Modelos de referência para escalabilidade</span>
                </li>
              </ul>
            </div>
            
            <div className="module-card reveal-item" style={{transitionDelay: '0.2s'}}>
              <div className="mb-4 flex justify-between items-start">
                <div className="module-icon bg-raycast-green/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="text-raycast-green w-6 h-6" />
                </div>
                <span className="text-sm bg-raycast-highlight rounded-full px-3 py-1">1 hora</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Networking e Encerramento</h3>
              <ul className="space-y-2 text-white/70 text-sm mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-green mr-2 mt-0.5 shrink-0" />
                  <span>Sessão de discussão aberta para troca de experiências</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-green mr-2 mt-0.5 shrink-0" />
                  <span>Orientações para aprofundamento</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-raycast-green mr-2 mt-0.5 shrink-0" />
                  <span>Networking com participantes e instrutor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-item">
            <span className="tag mb-4 inline-block">Resultados</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-static">Benefícios</span> do Curso
            </h2>
            <p className="text-white/70 leading-relaxed">
              Ao final do curso, você estará capacitado para implementar estratégias de IA em sua organização
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="reveal-item">
              <div className="glass-morphism p-8 rounded-xl animate-float">
                <h3 className="text-2xl font-bold mb-6 text-gradient-static">Você será capaz de:</h3>
                <ul className="space-y-5">
                  <li className="flex">
                    <div className="bg-raycast-purple/20 rounded-full p-2 mr-4 shrink-0">
                      <CheckCircle className="w-5 h-5 text-raycast-purple" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Compreender os fundamentos</h4>
                      <p className="text-white/70 text-sm">Diferenciar os tipos de IA e entender seus principais modelos e funcionamento</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-raycast-blue/20 rounded-full p-2 mr-4 shrink-0">
                      <CheckCircle className="w-5 h-5 text-raycast-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Identificar aplicações</h4>
                      <p className="text-white/70 text-sm">Reconhecer oportunidades relevantes e planejar iniciativas de forma estruturada</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-raycast-green/20 rounded-full p-2 mr-4 shrink-0">
                      <CheckCircle className="w-5 h-5 text-raycast-green" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Aplicar práticas de governança</h4>
                      <p className="text-white/70 text-sm">Implementar ética e compliance, garantindo o uso responsável da IA</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-raycast-purple/20 rounded-full p-2 mr-4 shrink-0">
                      <CheckCircle className="w-5 h-5 text-raycast-purple" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Maximizar produtividade</h4>
                      <p className="text-white/70 text-sm">Usar ferramentas de IA para aumentar sua eficiência e a de sua equipe</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-raycast-blue/20 rounded-full p-2 mr-4 shrink-0">
                      <CheckCircle className="w-5 h-5 text-raycast-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Explorar casos de sucesso</h4>
                      <p className="text-white/70 text-sm">Aproveitar insights de implementações bem-sucedidas em outras empresas</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6 reveal-item">
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-raycast-purple/20 flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-raycast-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Aplicação Imediata</h3>
                </div>
                <p className="text-white/70">
                  O curso foi desenhado para que você aplique os conhecimentos na semana seguinte, 
                  gerando impacto imediato em sua organização e carreira.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-raycast-blue/20 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-raycast-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Networking Estratégico</h3>
                </div>
                <p className="text-white/70">
                  Conexão com outros executivos e decisores que enfrentam desafios similares,
                  criando uma rede valiosa para troca de experiências e oportunidades.
                </p>
              </div>
              
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-raycast-green/20 flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-raycast-green" />
                  </div>
                  <h3 className="text-xl font-bold">Vantagem Competitiva</h3>
                </div>
                <p className="text-white/70">
                  Entenda como a IA pode transformar seu negócio e gerar diferenciais
                  em um mercado cada vez mais competitivo e tecnológico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="py-20 bg-raycast-dark relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16 reveal-item">
            <span className="tag mb-4 inline-block">Investimento</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient-static">Valor do</span> Investimento
            </h2>
            <p className="text-white/70 leading-relaxed">
              Invista em sua capacitação e transforme o futuro de sua organização com Inteligência Artificial
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="neo-blur rounded-2xl overflow-hidden reveal-item">
              <div className="bg-gradient-to-r from-raycast-blue to-raycast-purple p-1">
                <div className="bg-raycast-dark p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Curso Presencial</h3>
                      <p className="text-white/70">Um dia completo de imersão em IA</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="text-sm text-white/60 mb-1 line-through">R$ 3.900</div>
                      <div className="text-3xl md:text-4xl font-bold">R$ 3.500</div>
                      <div className="text-sm text-white/60">ou R$ 3.100 à vista</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-bold mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-raycast-green mr-2" />
                        O que está incluído
                      </h4>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                          <span>7 horas de conteúdo prático</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                          <span>Material didático digital</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                          <span>Coffee-break e almoço inclusos</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-purple mr-2 mt-0.5 shrink-0" />
                          <span>Certificado de participação</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-raycast-green mr-2" />
                        Condições especiais
                      </h4>
                      <ul className="space-y-3 text-white/80">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                          <span>Parcelamento em até 6x sem juros</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                          <span>10% de desconto para pagamento à vista</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                          <span>Descontos para grupos (3+ participantes)</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-raycast-blue mr-2 mt-0.5 shrink-0" />
                          <span>Suporte pós-curso por 30 dias</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-raycast-blue to-raycast-purple font-medium transition-all hover:shadow-lg hover:shadow-raycast-purple/30 w-full md:w-auto">
                      Inscreva-se Agora
                    </button>
                    <p className="mt-4 text-white/60 text-sm">Vagas limitadas - Próxima turma: 15 de Julho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8 md:p-12 reveal-item">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Pronto para liderar a <span className="text-gradient-static">transformação digital</span>?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Não perca a oportunidade de adquirir conhecimentos essenciais sobre IA para impulsionar 
                sua carreira e transformar sua organização.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-raycast-blue to-raycast-purple font-medium transition-all hover:shadow-lg hover:shadow-raycast-purple/30">
                Inscreva-se Agora
              </button>
              <button className="px-6 py-3 rounded-full neo-blur border border-white/10 font-medium hover:bg-white/5 transition-all">
                Solicitar Mais Informações
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Brain className="w-6 h-6 text-raycast-purple" />
                <span className="text-lg font-bold">AI Executive</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} AI Executive. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
