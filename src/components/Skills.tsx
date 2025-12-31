import { motion } from 'framer-motion';
import { Code, Palette, Server, Database, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="text-green-600" size={24} />,
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 60 },
        { name: 'REST APIs', level: 68 },
        { name: 'Authentication', level: 54 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'Mongoose', level: 70 },
        { name: 'SQL', level: 65 },
        { name: "postgressql", level: 70},
      ]
    },
    {
      title: 'Design',
      icon: <Palette className="text-pink-600" size={24} />,
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 65 },
        { name: 'Adobe XD', level: 55 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="text-orange-600" size={24} />,
      skills: [
        { name: 'React Native', level: 30 },
        { name: 'PWA', level: 75 },
        { name: 'Mobile-First', level: 88 }
      ]
    },
    {
      title: 'Tools',
      icon: <Globe className="text-teal-600" size={24} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Webpack', level: 70 },
        { name: 'Vite', level: 80 },
        { name: 'npm/yarn', level: 88 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-morphism rounded-lg shadow-lg p-6 shimmer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-2">
                  {category.title}
                </h3>
              </motion.div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1 + skillIndex * 0.05 + 0.5, 
                      duration: 0.4 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-sm text-gray-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 + 1.5 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        variants={skillBarVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={skill.level}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;