// components/header/header.tsx
import { useState, useEffect } from 'react';
import { FontAwesomeIcon, faHome, faUser, faSatellite, faBook, faEnvelope, faGlobe, faBars, faTimes } from '../../utils/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: faHome, color: 'from-cyan-400 to-blue-500' },
    { name: 'Sobre', icon: faUser, color: 'from-purple-400 to-pink-500' },
    { name: 'Projetos', icon: faSatellite, color: 'from-green-400 to-cyan-500' },
    { name: 'Publicações', icon: faBook, color: 'from-yellow-400 to-orange-500' },
    { name: 'Contato', icon: faEnvelope, color: 'from-pink-400 to-red-500' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 text-2xl font-black text-white group cursor-pointer">
            <div className="relative">
              <FontAwesomeIcon icon={faGlobe} className="text-cyan-400 text-3xl group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PORTFÓLIO
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="group relative px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 rounded-xl"
              >
                <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <FontAwesomeIcon icon={item.icon} className="text-sm group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm">{item.name}</span>
                <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r ${item.color} group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300 rounded-full`}></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden relative p-3 text-white bg-cyan-500/10 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-cyan-500/20 bg-gray-900/80 backdrop-blur-xl rounded-2xl">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="group flex items-center gap-4 px-6 py-4 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-cyan-500/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{item.name}</span>
                  <div className={`ml-auto w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;