
import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lungsang Developer
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate full-stack developer creating amazing digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Experience
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Lungsang Developer. Made with</span>
            <Heart className="text-red-500 fill-current" size={16} />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
