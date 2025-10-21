// components/sections/home.tsx
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import { 
  FontAwesomeIcon, 
  faUser, 
  faSatellite, 
  faRocket, 
  faSatelliteDish, 
  faLaptopCode, 
  faGithub, 
  faMap, 
  faCode, 
  faMobileAlt, 
  faMapMarkedAlt, 
  faDownload, 
  faMapMarkerAlt, 
  faEnvelope, 
  faWhatsapp, 
  faLinkedin, 
  faFlask, 
  faGraduationCap, 
  faExternalLinkAlt, 
  faScroll, 
  faPaperPlane 
} from '../../utils/icons';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">

      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
        <div className="max-w-6xl mx-auto">
          {/* Foto de Perfil */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-6xl text-cyan-400" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <FontAwesomeIcon icon={faSatellite} className="text-white text-sm" />
            </div>
          </div>

          {/* Nome e Título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              GLÓRIA MARIA
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              DEITOS GOMES
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1 max-w-24"></div>
            <span className="text-xl md:text-2xl text-cyan-300 font-light tracking-wider">
              GEODESISTA & DESENVOLVEDORA
            </span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent flex-1 max-w-24"></div>
          </div>
          
          {/* Badges Profissionais */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-300 text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faLaptopCode} />
              Tec. Informática
            </span>
            <span className="px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-300 text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faGithub} />
              Análise e Dev de Sistemas
            </span>
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faMap} />
              Eng. Cartográfica
            </span>
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-cyan-300 text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faCode} />
              Full Stack
            </span>
            <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/40 rounded-full text-pink-300 text-sm font-medium flex items-center gap-2">
              <FontAwesomeIcon icon={faMobileAlt} />
              Dev Mobile
            </span>
          </div>
          
          {/* Descrição */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Atuo no desenvolvimento de soluções em <span className="text-cyan-400 font-semibold">geotecnologia</span>, 
            com foco em <span className="text-purple-400 font-semibold">aplicações web e mobile</span> que integram 
            <span className="text-pink-400 font-semibold">dados espaciais</span>, mapas interativos e interfaces acessíveis.
          </p>
          
          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <FontAwesomeIcon icon={faRocket} className="text-xl group-hover:animate-bounce" />
              <span>Explorar Perfil</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contato')}
              className="group relative border-2 border-cyan-500/50 hover:border-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              <FontAwesomeIcon icon={faSatelliteDish} className="text-xl group-hover:animate-spin" />
              <span>Fazer Contato</span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="relative z-10 min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Sobre o Explorador
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Atuo no desenvolvimento de soluções em geotecnologia, com foco em aplicações web e mobile que integram 
                dados espaciais, mapas interativos e interfaces acessíveis. Tenho experiência em projetos que envolvem 
                desde a estruturação de bases de dados até a implementação de sistemas completos.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Desenvolvo soluções voltadas à representação e organização de dados espaciais de forma visual, 
                intuitiva e funcional. Me interesso por tecnologias que facilitam o acesso, a análise e a 
                compreensão de informações espaciais por diferentes públicos.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="text-3xl text-cyan-400 mb-3" />
                  <h4 className="text-cyan-300 font-bold mb-2">Geotecnologia</h4>
                  <p className="text-gray-400 text-sm">Especialista em dados espaciais e cartografia</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
                  <FontAwesomeIcon icon={faLaptopCode} className="text-3xl text-purple-400 mb-3" />
                  <h4 className="text-purple-300 font-bold mb-2">Desenvolvimento</h4>
                  <p className="text-gray-400 text-sm">Soluções web e mobile inovadoras</p>
                </div>
              </div>

              <a 
                href="/curriculo.pdf" 
                download
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faDownload} />
                <span>Download Currículo</span>
              </a>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Tecnologias & Ferramentas</h3>
                
                {[
                  { category: "GIS & Geodesia", techs: ["ArcGIS", "QGIS", "PostGIS", "GNSS", "AutoCAD"], color: "cyan" },
                  { category: "Desenvolvimento", techs: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"], color: "purple" },
                  { category: "Mobile & Cloud", techs: ["React Native", "Flutter", "AWS", "Docker", "Git"], color: "pink" }
                ].map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className={`text-${skillGroup.color}-300 font-semibold mb-3`}>{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 bg-${skillGroup.color}-500/20 border border-${skillGroup.color}-500/30 rounded-lg text-${skillGroup.color}-300 text-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="relative z-10 min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Missões Concluídas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adicione seus projetos reais aqui */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl mb-6 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCode} className="text-4xl text-cyan-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">Projeto {i}</h3>
                <p className="text-gray-400 mb-4">Descrição do projeto de geodesia/desenvolvimento aqui...</p>
                
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded text-cyan-300 text-xs">React</span>
                  <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-green-300 text-xs">GIS</span>
                </div>
                
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publicações Section */}
      <section id="publicacoes" className="relative z-10 min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Transmissões Científicas
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {/* Adicione suas publicações reais aqui */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gradient-to-r from-yellow-500/10 to-orange-600/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faScroll} className="text-white text-xl" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Título da Publicação {i}</h3>
                    <p className="text-yellow-300 mb-2">Revista/Conferência • Ano</p>
                    <p className="text-gray-300 mb-4">Resumo ou descrição da publicação científica...</p>
                    
                    <div className="flex gap-4">
                      <a href="#" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Ver Publicação</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                        <FontAwesomeIcon icon={faDownload} />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="relative z-10 min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Estabelecer Contato
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-500/10 to-red-600/10 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Canais de Comunicação</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-400">seu.email@exemplo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">WhatsApp</p>
                      <p className="text-gray-400">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Localização</p>
                      <p className="text-gray-400">Curitiba, PR - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Redes Profissionais</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub', icon: faGithub, color: 'gray-700', url: '#' },
                    { name: 'LinkedIn', icon: faLinkedin, color: 'blue-600', url: '#' },
                    { name: 'ResearchGate', icon: faFlask, color: 'green-600', url: '#' },
                    { name: 'Lattes', icon: faGraduationCap, color: 'orange-500', url: '#' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`group flex items-center gap-3 p-4 bg-${social.color}/10 border border-${social.color}/30 rounded-xl hover:bg-${social.color}/20 hover:border-${social.color}/50 transition-all duration-300 hover:scale-105`}
                    >
                      <FontAwesomeIcon icon={social.icon} className={`text-2xl text-${social.color.includes('gray') ? 'white' : social.color.split('-')[0] + '-400'}`} />
                      <span className="text-white font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Enviar Mensagem</h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Seu Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Assunto"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={5}
                    placeholder="Sua Mensagem"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;