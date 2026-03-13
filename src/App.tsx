import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Calendar, Users, ShieldAlert, HeartCrack, UserX, Frown, Brain, Sparkles, Star, ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-accent selection:text-[#0A0F16]">
      {/* Hero Section */}
      <section 
        className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          // TODO: TROQUE A IMAGEM DE FUNDO DA PRIMEIRA DOBRA AQUI
          // Substitua a URL abaixo pelo link da sua imagem.
          backgroundImage: `linear-gradient(to right, rgba(10, 13, 20, 0) 0%, rgba(10, 13, 20, 0.2) 100%), url('http://brunosimplicio.com.br/wp-content/uploads/2026/03/LP2.jpg')` 
        }}
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-2xl lg:max-w-[65%] mx-auto md:mx-0">
            
            {/* Date Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6 text-accent font-medium bg-accent-dim px-5 py-2.5 rounded-full border border-border-accent backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5" />
              <span>24, 25 e 26 de março às 19:30</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold leading-[1.15] tracking-tight mb-6"
            >
              O trauma que você viveu <span className="text-accent">(e talvez nem se lembre)</span> é responsável pela vida que você tem hoje!
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-text-secondary mb-8 space-y-4 w-full leading-relaxed"
            >
              <p>
                Por isso muitas mulheres passam a viver com <strong className="text-text-primary">relacionamentos frios, ansiedade constante, medo de rejeição, cansaço emocional e até sintomas físicos.</strong>
              </p>
              <p>
                Não porque querem. Mas porque o cérebro passou a acreditar que aquilo é o <strong className="text-text-primary">máximo de vida possível.</strong>
              </p>
              <p>
                Por isso, nos dias 24, 25 e 26 de março, às 19:30, eu vou conduzir um encontro onde você vai entender como experiências do passado ainda podem estar influenciando sua vida.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full sm:w-auto flex flex-col items-center md:items-start mt-4"
            >
              <button className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-[#0A0F16] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(108,229,177,0.2)]">
                <span>Garantir minha vaga</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-accent text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-lg border border-accent/20 whitespace-nowrap">1º Lote</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stylish Divider */}
      <div className="w-full flex justify-center items-center py-8 relative">
        <div className="absolute w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        <div className="absolute w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 blur-[2px]" />
        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(108,229,177,0.6)] relative z-10" />
      </div>

      {/* Second Section: The Workshop */}
      <section className="pt-12 pb-24 bg-bg-secondary border-y border-border-subtle text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">DEPOIS DO TRAUMA</h2>
            <p className="text-xl text-text-primary mb-8 font-medium">Um encontro onde você vai entender:</p>
            
            <ul className="space-y-5 mb-10 text-center md:text-left inline-block">
              {[
                "como traumas continuam governando sua vida",
                "como eles distorcem suas escolhas e relacionamentos",
                "e como começar a reconstruir sua vida emocional"
              ].map((item, i) => (
                <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-text-secondary text-lg">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 md:mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-200 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300">
              <span>Garantir minha vaga</span>
              <ChevronRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-lg whitespace-nowrap">1º Lote</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* New Section: Emotional Survival System */}
      <section className="pt-24 pb-12 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center max-w-3xl mx-auto">
              Talvez o problema não seja o que aconteceu com você
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p>
                Muitas mulheres passaram por experiências difíceis.
              </p>
              
              <div className="py-6">
                <div className="flex flex-col gap-3">
                  {[
                    { title: "Traição.", icon: HeartCrack },
                    { title: "Abandono.", icon: UserX },
                    { title: "Rejeição.", icon: Frown },
                    { title: "Relacionamentos dolorosos.", icon: ShieldAlert }
                  ].map((card, i) => (
                    <div key={i} className="bg-bg-card border border-border-subtle p-4 md:p-4 rounded-xl flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 hover:border-accent transition-colors">
                      <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold text-text-primary text-base">{card.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p>
                Mas o verdadeiro impacto do trauma muitas vezes não está apenas no que aconteceu. Ele está na vida que o cérebro aprendeu a aceitar depois disso.
              </p>
              
              <div className="py-6">
                <p>
                  Quando uma pessoa vive um trauma, o cérebro cria um sistema interno para evitar sofrer novamente. Chamamos isso de:
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-accent mt-4">
                  Sistema de Sobrevivência Emocional
                </h3>
              </div>
              
              <div className="my-12">
                <p className="mb-8 text-text-primary font-medium text-center text-xl">Esse sistema começa a guiar:</p>
                
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="hidden md:block absolute top-[48px] left-0 w-full h-[1px] bg-border-subtle z-0" />
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                    {[
                      "seus relacionamentos",
                      "sua vida financeira",
                      "suas emoções no dia a dia",
                      "e até sua saúde física"
                    ].map((item, i) => (
                      <div key={i} className="bg-bg-card border border-border-subtle p-6 rounded-2xl flex flex-col items-center text-center hover:border-accent transition-colors shadow-sm h-full">
                        <div className="w-12 h-12 rounded-full bg-bg-secondary text-accent font-bold flex items-center justify-center text-lg border border-border-subtle shrink-0 mb-5 relative z-10">
                          0{i + 1}
                        </div>
                        <span className="text-text-primary font-semibold text-base md:text-lg leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-8 border-t border-border-subtle">
                <p className="text-xl md:text-2xl font-medium text-text-primary mb-8">
                  O problema é que esse sistema foi criado para evitar dor.<br/>
                  <span className="text-accent block mt-2">Mas, sem perceber, ele acaba tirando das suas mãos o controle da própria vida.</span>
                </p>
                
                <button className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-[#0A0F16] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(108,229,177,0.2)]">
                  <span>Garantir minha vaga</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-accent text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold shadow-lg border border-accent/20 whitespace-nowrap">1º Lote</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stylish Divider */}
      <div className="w-full flex justify-center items-center py-8 relative">
        <div className="absolute w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        <div className="absolute w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 blur-[2px]" />
        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(108,229,177,0.6)] relative z-10" />
      </div>

      {/* Schedule Section */}
      <section className="pt-12 pb-12 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que você vai aprender</h2>
            <p className="text-xl text-text-secondary">Um cronograma desenhado para a sua reconstrução emocional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                day: "Aula 1",
                date: "24 de Março",
                title: "O Trauma que Ainda Governa a Sua Vida",
                desc: "Entenda como o seu cérebro foi reprogramado para aceitar menos do que você merece e como identificar os gatilhos invisíveis.",
                // TODO: TROQUE A IMAGEM DA AULA 1 AQUI
                image: "http://brunosimplicio.com.br/wp-content/uploads/2026/03/1o-Dia.jpg"
              },
              {
                day: "Aula 2",
                date: "25 de Março",
                title: "Como o Trauma Distorceu Sua Vida",
                desc: "O passo a passo para parar de repetir os mesmos padrões destrutivos nos seus relacionamentos e na sua vida pessoal.",
                // TODO: TROQUE A IMAGEM DA AULA 2 AQUI
                image: "http://brunosimplicio.com.br/wp-content/uploads/2026/03/2o-Dia.jpg"
              },
              {
                day: "Aula 3",
                date: "26 de Março",
                title: "A Vida Depois do Trauma",
                desc: "Como resgatar a sua identidade, estabelecer limites inegociáveis e voltar a confiar em si mesma e no futuro.",
                // TODO: TROQUE A IMAGEM DA AULA 3 AQUI
                image: "http://brunosimplicio.com.br/wp-content/uploads/2026/03/3o-Dia.jpg"
              }
            ].map((module, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg-card border border-border-subtle rounded-3xl overflow-hidden group flex flex-col"
              >
                {/* Video Thumbnail Area */}
                <div className="relative aspect-video w-full overflow-hidden p-3">
                  <div className="w-full h-full relative rounded-2xl overflow-hidden">
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
                      <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow text-center md:text-left">
                  <div className="text-accent font-bold text-sm tracking-wider uppercase mb-2">{module.day} • {module.date}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
                  <p className="text-text-secondary leading-relaxed flex-grow">{module.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylish Divider */}
      <div className="w-full flex justify-center items-center py-8 relative">
        <div className="absolute w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
        <div className="absolute w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 blur-[2px]" />
        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(108,229,177,0.6)] relative z-10" />
      </div>

      {/* Third Section: Pricing & CTA */}
      <section className="pt-12 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg-card border border-border-subtle rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Garanta seu lugar agora</h2>
            <p className="text-text-secondary mb-10 text-lg">O primeiro lote está se esgotando rapidamente.</p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-10">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span className="text-accent">Lote 1 acabando</span>
                <span className="text-text-primary">76% preenchido</span>
              </div>
              <div className="w-full h-3 bg-bg-secondary rounded-full overflow-hidden border border-border-subtle">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "76%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full bg-accent rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-10">
              <div className="text-text-secondary font-medium mb-2">Por apenas</div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-6xl font-bold text-accent leading-none">R$ 27</span>
              </div>
            </div>

            <button className="w-full group relative inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-[#0A0F16] font-bold text-xl px-8 py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(108,229,177,0.2)]">
              <span>Garantir minha vaga</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black text-accent text-xs px-4 py-1 rounded-full uppercase tracking-wider font-bold shadow-lg border border-accent/20 whitespace-nowrap">1º Lote</span>
            </button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted">
              <ShieldAlert className="w-4 h-4" />
              <span>Pagamento 100% seguro.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-bg-secondary border-y border-border-subtle overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent opacity-[0.05] blur-[60px] rounded-full" />
              {/* TODO: TROQUE A IMAGEM DO ESPECIALISTA (BRUNO) AQUI */}
              <img 
                src="http://brunosimplicio.com.br/wp-content/uploads/2026/01/3B3A6131.jpg" 
                alt="Bruno Simplício" 
                className="w-full h-auto rounded-3xl object-cover border border-border-subtle relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quem é Bruno Simplício?</h2>
              <div className="space-y-6 text-lg text-text-secondary">
                <p>
                  Especialista em comportamento humano e superação de traumas. Nos últimos anos, dediquei minha vida a ajudar mulheres a quebrarem ciclos de relacionamentos destrutivos e recuperarem sua autoestima.
                </p>
                <p>
                  Já guiei mais de <strong className="text-text-primary">5.000 alunas</strong> em seus processos de cura emocional, mostrando que o trauma não precisa ser uma sentença para o resto da vida.
                </p>
                <p>
                  Meu objetivo neste workshop é te dar clareza. Mostrar exatamente o que está acontecendo no seu cérebro e como você pode retomar o controle da sua própria história.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem as alunas</h2>
          <p className="text-xl text-text-secondary">Histórias reais de quem já passou pelo processo.</p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative w-full flex overflow-hidden">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex gap-6 w-max px-6 hover:[animation-play-state:paused]"
          >
            {/* 
              TODO: TROQUE AS IMAGENS DOS DEPOIMENTOS AQUI
              Adicione as URLs das imagens dos prints nos arrays abaixo.
              O array está duplicado para criar o efeito de loop infinito.
            */}
            {[
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-16.46.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-16.47.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-18.02.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-18.03.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/55-66-9984-0460.png",
              // Duplicated for seamless loop
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-16.46.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-16.47.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-18.02.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/Screenshot-2026-02-24-at-18.03.jpg",
              "http://brunosimplicio.com.br/wp-content/uploads/2026/03/55-66-9984-0460.png",
            ].map((src, i) => (
              <div key={i} className="w-[280px] md:w-[350px] flex-shrink-0">
                <img 
                  src={src} 
                  alt="Depoimento" 
                  className="w-full h-auto rounded-2xl border border-border-subtle object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-8 border-t border-border-subtle text-center text-text-muted text-sm">
        <p>© {new Date().getFullYear()} Bruno Simplício. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
