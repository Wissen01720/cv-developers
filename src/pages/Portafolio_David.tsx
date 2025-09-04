
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LifeImg from "../img/photo.jpg";

const achievements = [
  
    {
    title: "Certificado de Product Owner",
    desc: "Completé el curso avanzado de Product Owner en platzi.",
    icon: "📜",
  },
];

// Variantes de animación
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

interface Repo {
  id: number;
  html_url: string;
  name: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
}

const Portafolio_David = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Wissen01720/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const proyectosFiltrados = data
            .filter(
              (repo: Repo) => !("fork" in repo && repo.fork) && repo.description
            )
            .slice(0, 6);
          setRepos(proyectosFiltrados);
        } else {
          setRepos([]);
        }
      })
      .catch(() => setRepos([]));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] flex flex-col relative overflow-x-hidden">
      {/* Animación de fondo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 40%, #a78bfa 0%, transparent 70%), radial-gradient(circle at 80% 60%, #38bdf8 0%, transparent 70%)",
        }}
      />
      {/* Partículas flotantes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-300 opacity-60"
          style={{
            width: 18 + i * 2,
            height: 18 + i * 2,
            top: `${8 + i * 6}%`,
            left: `${10 + i * 7}%`,
          }}
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3 + i * 0.2,
            delay: i * 0.3,
          }}
        />
      ))}
      {/* Hero personalizado con imagen jpg */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between mx-auto w-full max-w-5xl pt-20 pb-10 px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerStagger}
      >
        <motion.div className="md:w-2/3" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900">
            Hola, soy{" "}
            <span className="text-yellow-500 drop-shadow-lg">
              David Fernando Rico Mendivelso
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-2 font-medium">
            Desarrollador Frontend
            <span className="text-purple-500">|</span> Apasionado por la
            tecnología 
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Desarrollador apasionado por crear experiencias web
            Especializado en tecnologías modernas y soluciones innovadoras.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 flex justify-center items-cen.ter mt-10 md:mt-0"
          initial={{ scale: 0.7, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 8 }}
            className="rounded-full border-8 border-yellow-400 shadow-2xl p-6 bg-white flex flex-col items-center justify-center relative"
          >
            <motion.img
              src={LifeImg}
              alt="Foto Edgard"
              className="w-56 h-56 object-cover rounded-full border-4 border-yellow-400 shadow-lg transition-transform duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ boxShadow: "0 8px 32px 0 rgba(168,139,250,0.2)" }}
            />
            <motion.div
              className="absolute -top-6 -right-6 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center shadow-lg animate-pulse"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-white text-xl">👋</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Logros */}
      <motion.div
        className="mx-auto w-full max-w-3xl mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        {achievements.map((ach) => (
          <motion.div
            key={ach.title}
            className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-lg p-6 flex flex-col items-center border border-purple-200 hover:scale-105 hover:shadow-xl transition-all"
            variants={fadeInUp}
          >
            <span className="text-4xl mb-2">{ach.icon}</span>
            <h4 className="font-bold text-purple-700 mb-1 text-center">
              {ach.title}
            </h4>
            <p className="text-gray-700 text-center text-sm">{ach.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Proyectos desde GitHub */}
      <motion.div
        className="mx-auto max-w-5xl mb-16 relative z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-xl shadow-lg p-5 hover:shadow-2xl hover:scale-105 transition-all border border-purple-100"
              variants={fadeInUp}
            >
              <h4 className="font-bold text-purple-700">{repo.name}</h4>
              <p className="text-gray-600 text-sm mt-2">
                {repo.description || "Proyecto sin descripción"}
              </p>
              <span className="text-xs text-blue-500 mt-2 block">
                ⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Habilidades Técnicas - Exclusivo para el portafolio */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones
              excepcionales
            </p>
          </div>

          {/* Datos de habilidades */}
          {(() => {
            type Skill = {
              name: string;
              level: number;
              category: string;
            };
            const skills: Skill[] = [
              {
                name: "JavaScript/TypeScript",
                level: 65,
                category: "Frontend",
              },
              { name: "React/Flutter/kotlin", level: 75, category: "Frontend" },
              { name: "HTML/CSS", level: 90, category: "Frontend" },
              { name: "Tailwind CSS", level: 80, category: "Frontend" },
              { name: "Node.js", level: 65, category: "Backend" },
              { name: "FastAPI", level: 70, category: "Backend" },
              { name: "SpringBoot", level: 70, category: "Backend" },
              { name: "Supabase", level: 70, category: "Database" },
              { name: "MySQL", level: 70, category: "Database" },
              { name: "PostgreSQL", level: 70, category: "Database" },
              { name: "Git/GitHub", level: 75, category: "Tools" },
            ];
            const groupedSkills = skills.reduce<Record<string, Skill[]>>(
              (acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
              },
              {}
            );
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(groupedSkills).map(
                  ([category, categorySkills]) => (
                    <div
                      key={category}
                      className="bg-white p-8 rounded-xl shadow-lg"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                        {category}
                      </h3>
                      <div className="space-y-6">
                        {(categorySkills as Skill[]).map((skill, index) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-700 font-medium">
                                {skill.name}
                              </span>
                              <span className="text-yellow-500 font-bold">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: `${skill.level}%`,
                                  transitionDelay: `${index * 100}ms`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            );
          })()}

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

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Portafolio_David;
