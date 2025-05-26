import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: Globe },
    { name: 'Backend Development', level: 85, icon: Database },
    { name: 'Mobile Development', level: 80, icon: Smartphone },
    { name: 'DevOps & Cloud', level: 75, icon: Code },
  ];

  const technologies = [
    'Javascript', 'Python', 'Django', 'React', 'Node.js','PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'render', 'vercel', 'Transifex'
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-[#40E0D0] to-[#40E0D0] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 4+ years of experience building scalable web applications 
            and mobile solutions. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-[#40E0D0]" size={20} />
                      <span className="text-gray-300 font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-[#40E0D0] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#40E0D0] to-[#40E0D0] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech}
                    className="bg-slate-600/50 rounded-lg p-3 text-center text-gray-300 hover:bg-[#40E0D0]/20 hover:text-[#40E0D0] transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3 text-gray-300">
                <p>🎓 Btech in Computer Science</p>
                <p>💼 4+ Years Professional Experience</p>
                <p>🌍 Remote Work Enthusiast</p>
                <p>☕ Coffee Latte Lover & Problem Solver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
