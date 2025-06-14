import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Tibet417.com',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['Javascript', 'React', 'Node.js', 'MongoDB', 'Stripe', 'Vercel'],
      github: 'https://github.com/lungsang25/tibet417-backend',
      live: 'https://tibet417.com'
    },
    {
      title: 'Pecha.ai',
      description: 'A digital platform that makes Buddhist scriptures accessible and searchable across multiple languages, serving scholars and practitioners with modern web technologies and educational tools.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      tags: ['Javascript', 'React', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Google Cloud', 'Docker', 'render'],
      github: 'https://github.com/OpenPecha/Pecha.org',
      live: 'https://pecha.ai/texts'
    },
    {
      title: 'Tenzin chatbot',
      description: 'An ongoing chatbot project using Hugging Face models and React, aspiring to become a Tibetan-language AI assistant bridging modern AI with Tibetan linguistic needs.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tags: ['Typescript', 'React', 'Hugging Face', 'Rest API', 'DialoGPT model', 'Vercel'],
      github: 'https://github.com/lungsang25/tenzin-ai',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-[#40E0D0] to-[#40E0D0] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-[#40E0D0]/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:from-[#40E0D0]/80 group-hover:via-[#40E0D0]/50 transition-all duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-[#40E0D0]/20 text-[#40E0D0] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#40E0D0] hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#40E0D0] hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
