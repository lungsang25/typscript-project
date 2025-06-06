import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, X, Phone, MapPin, Send } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showContact, setShowContact] = useState(false);
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleConnectClick = () => {
    setShowContact(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1A1B23]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#40E0D0]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#40E0D0]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/6b7f70f9-61be-466c-9d8e-7a63bd005ff2.png"
                alt="Lungsang Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#40E0D0]/30 shadow-2xl hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-[#40E0D0] to-[#40E0D0] bg-clip-text text-transparent">Lungsang</span>
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 mb-8 h-12">
            {text}<span className="animate-pulse">|</span>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies. Passionate about creating scalable, 
            user-friendly applications that make a difference.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <button
              onClick={handleConnectClick}
              className="group bg-gradient-to-r from-[#40E0D0] hover:from-[#40E0D0] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[#40E0D0]/25 flex items-center gap-3"
            >
              <span>Let's Connect</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={16} className="text-white" />
              </div>
            </button>
            <a href="#projects" className="border border-[#40E0D0] text-[#40E0D0] px-8 py-4 rounded-full font-semibold hover:bg-[#40E0D0] hover:text-white transition-all duration-300">
              View My Work
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>

      {/* Side Contact Panel */}
      {showContact && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 w-full max-w-md bg-[#1A1B23]/95 backdrop-blur-sm z-50 transform transition-transform duration-300 shadow-xl border border-[#40E0D0] rounded-l-2xl max-h-[80vh] overflow-y-auto">
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              <button
                onClick={() => setShowContact(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#40E0D0]/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-[#40E0D0]" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">lungsang2025@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#40E0D0]/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-[#40E0D0]" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">+91 8882333181</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#40E0D0]/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-[#40E0D0]" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Dharamshala, India</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#1A1B23]/50 border border-[#40E0D0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#40E0D0] transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#1A1B23]/50 border border-[#40E0D0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#40E0D0] transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1A1B23]/50 border border-[#40E0D0] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#40E0D0] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#40E0D0] to-[#40E0D0] text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#40E0D0]/25"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
