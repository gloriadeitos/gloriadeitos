import { faGlobe, faChevronRight, faBroadcastTower, faEnvelope, faMapMarkerAlt, faCopyright, faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Footer.tsx
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-950 to-gray-900 border-t border-cyan-500/20">
      {/* Efeito de brilho no topo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 text-2xl font-black text-white mb-6">
              <div className="relative">
                <FontAwesomeIcon icon={faGlobe} className="text-cyan-400 text-3xl" />
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-lg"></div>
              </div>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                GLÓRIA DEITOS
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Desenvolvendo soluções inovadoras que conectam geodesia e tecnologia, 
              criando aplicações que facilitam o acesso e compreensão de dados espaciais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <FontAwesomeIcon icon={faBroadcastTower} className="text-cyan-400" />
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Projetos', href: '#projetos' },
                { name: 'Publicações', href: '#publicacoes' },
                { name: 'Contato', href: '#contato' }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
              <FontAwesomeIcon icon={faBroadcastTower} className="text-cyan-400" />
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" />
                <span>gloria.deitos@exemplo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400" />
                <span>Curitiba, PR - Brasil</span>
              </div>
              <div className="flex gap-3 mt-6">
                {[
                  { platform: 'github', icon: faGithub, url: '#' },
                  { platform: 'linkedin', icon: faLinkedin, url: '#' },
                  { platform: 'email', icon: faEnvelope, url: '#' }
                ].map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-cyan-500/50"
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <div className="flex items-center gap-2 text-sm">
            <FontAwesomeIcon icon={faCopyright} />
            <span>2024 - Todos os direitos reservados</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>Desenvolvido com</span>
            <FontAwesomeIcon icon={faHeart} className="text-red-400 animate-pulse" />
            <span>e muito café</span>
            <FontAwesomeIcon icon={faCoffee} className="text-yellow-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;