import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Database' },
    { name: 'PostgreSQL', level: 70, category: 'Database' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' },
    { name: 'Docker', level: 65, category: 'DevOps' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section ref={skillsRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones excepcionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-6">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-yellow-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-gray-900 font-bold">Performance</div>
              <div className="text-gray-600 text-sm">Optimizado</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-gray-900 font-bold">Responsive</div>
              <div className="text-gray-600 text-sm">Mobile First</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-gray-900 font-bold">Seguro</div>
              <div className="text-gray-600 text-sm">Best Practices</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-gray-900 font-bold">Moderno</div>
              <div className="text-gray-600 text-sm">Latest Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;