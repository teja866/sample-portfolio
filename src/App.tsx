import { motion, AnimatePresence } from "framer-motion";
import { Github, Mail, Phone, MapPin, GraduationCap, Star, Linkedin } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import React, { useState, useEffect, Suspense } from "react";

const SplineDemo = React.lazy(() => import("@/components/SplineDemo").then(module => ({ default: module.SplineDemo })));

// --- Data ---
const skills = [
  "C", "Python", "Java", "HTML", "CSS", "JavaScript", "React", "ASP.NET", "SQL"
];

const projects = [
  {
    title: "Smart Recipe & Inventory Management",
    desc: "A React-based application for recipe and inventory management with ingredient tracking and stock monitoring. Deployed for real-time usage.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Student Management System",
    desc: "A web-based system using ASP.NET for student registration, login, and record management integrating frontend, backend, and database.",
    tech: ["ASP.NET", "C#", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "ProConnect",
    desc: "A web platform connecting users with workers for temporary and task-based hiring with responsive service booking interfaces.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "RoboMaze",
    desc: "A RoboMaze Solver using C programming implementing logic for robot navigation and pathfinding inside a maze.",
    tech: ["C Programming"],
  },
  {
    title: "Power Generation Using Sidewalks",
    desc: "Conceptual design for generating electrical energy using pressure applied on sidewalks, exploring renewable energy methods.",
    tech: ["Research", "Renewable Energy"],
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "KL University",
    year: "2024–2028",
    detail: "Specialization: Data Lake Systems and Streaming Analytics | CGPA: 9.24"
  },
  {
    degree: "Intermediate Education",
    school: "NRI SAI JUNIOR COLLEGE",
    year: "2022–2024",
    detail: "Percentage: 87.9%"
  },
  {
    degree: "Secondary School Education",
    school: "NRI Indian Springs",
    year: "2021–2022",
    detail: "Percentage: 81.8%"
  }
];

// --- Components ---

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-4xl md:text-5xl font-black mb-12 text-zinc-900 tracking-tighter uppercase"
    >
      {children}
    </motion.h2>
  );
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // Wait long enough for the smooth, clean animation to be read
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%", 
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#f8f9fa] flex flex-col items-center justify-center overflow-hidden origin-top"
          >
            <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-5 px-4 mt-6">
              {["Welcome", "to", "my", "Portfolio"].map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1, 
                    ease: "easeOut" 
                  }}
                  className="origin-bottom will-change-transform"
                >
                    <h1 className={`text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter ${word === "Portfolio" ? "text-zinc-400 drop-shadow-sm" : "text-zinc-900"}`}>
                      {word}
                    </h1>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: "circInOut" }}
              className="absolute bottom-0 left-0 h-2 bg-zinc-900 origin-left w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2, ease: "easeOut" }}
        className="bg-[#f8f9fa] text-zinc-900 min-h-screen selection:bg-black selection:text-white font-sans"
      >
      {/* Hero Section */}
      <HeroGeometric 
        badge="Aspiring Software Developer | B.Tech CSE"
        title1="Gnana Teja"
        title2="Bonthala" 
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-20 md:space-y-32 relative z-10">

        {/* 3D Spline Demo Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="will-change-transform w-full"
          >
            <Suspense fallback={
              <div className="w-full h-[50vh] flex items-center justify-center animate-pulse rounded-t-[100px] md:rounded-t-[500px] rounded-b-3xl bg-zinc-200">
                <span className="text-zinc-400 font-bold uppercase tracking-widest text-sm text-center px-4">Loading 3D Experience...</span>
              </div>
            }>
              <SplineDemo />
            </Suspense>
          </motion.div>
        </section>
        
        {/* Education & About */}
        <section>
          <SectionHeading>Education & Profile</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-white border border-black/5 shadow-xl shadow-black/5 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-black mb-8 flex items-center gap-2 text-zinc-900 tracking-tight uppercase">
                <GraduationCap className="h-6 w-6 text-zinc-400" /> Academic Journey
              </h3>
              <div className="space-y-8">
                {education.map((ed, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-black/10">
                    <div className="absolute w-3 h-3 bg-zinc-900 rounded-full -left-[7px] top-1.5 shadow-sm" />
                    <h4 className="font-bold text-zinc-900 text-lg">{ed.degree}</h4>
                    <p className="text-sm text-zinc-500 mt-1 font-medium">{ed.school} <span className="text-zinc-400 border-l border-black/10 pl-2 ml-2">{ed.year}</span></p>
                    <p className="text-sm text-zinc-600 mt-2 leading-relaxed">{ed.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl bg-white border border-black/5 shadow-xl shadow-black/5 flex flex-col justify-center gap-12"
            >
              <div>
                <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-zinc-900 tracking-tight uppercase">
                  <Star className="h-6 w-6 text-zinc-400" /> Strengths
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Quick Learner", "Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management", "Creative Thinking"].map(s => (
                    <span key={s} className="px-4 py-2 rounded-full bg-zinc-100 border border-black/5 text-zinc-700 text-sm font-bold tracking-tight uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-zinc-900 tracking-tight uppercase">
                  Languages
                </h3>
                <p className="text-zinc-600 text-lg"><strong className="text-zinc-900">English</strong> (Fluent) <span className="mx-2 text-zinc-300">|</span> <strong className="text-zinc-900">Telugu</strong> (Native)</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <SectionHeading>Technical Arsenal</SectionHeading>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap gap-4"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-6 py-3 rounded-2xl bg-white border border-black/5 text-lg font-bold tracking-tight shadow-md text-zinc-900 cursor-default uppercase"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 p-8 rounded-2xl bg-zinc-100 border border-black/5 shadow-md">
            <h3 className="text-2xl font-black mb-4 flex items-center gap-2 text-zinc-900 uppercase tracking-tight">
              Portfolio Architecture
            </h3>
            <p className="text-zinc-600 font-medium leading-relaxed mb-6">
              This portfolio was crafted to demonstrate high-performance UI engineering. Built exclusively using the following modern tech stack:
            </p>
            <div className="flex flex-wrap gap-3">
              {["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Playwright", "Spline WebGL 3D"].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-zinc-900 text-white font-bold tracking-tight text-sm uppercase">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl bg-white border border-black/5 shadow-xl shadow-black/5 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-black mb-3 text-zinc-900 leading-tight tracking-tight uppercase">{project.title}</h3>
                <p className="text-zinc-600 text-sm mb-6 leading-relaxed flex-grow font-medium">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 border border-black/5 text-zinc-700 uppercase tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-black/10 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl transform-gpu"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform-gpu pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl transform-gpu pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white uppercase">Let's Connect</h2>
              <p className="text-zinc-400 mb-10 max-w-xl mx-auto text-base md:text-lg font-medium">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <a href="mailto:gnanateja234@gmail.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-900 font-bold hover:bg-zinc-200 transition-colors uppercase tracking-tight text-sm md:text-base">
                  <Mail className="h-5 w-5" /> gnanateja234@gmail.com
                </a>
                <a href="tel:+919398474878" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors tracking-tight text-sm md:text-base">
                  <Phone className="h-5 w-5" /> +91 9398474878
                </a>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-8 mt-16 text-zinc-500 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Guntur, AP</span>
                <a href="https://github.com/teja866" className="flex items-center gap-2 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /> teja866</a>
                <a href="https://www.linkedin.com/in/bonthala-v-b-s-n-d-s-gnana-teja-02364a367" className="flex items-center gap-2 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> IN: bonthala-v-b-s</a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </motion.div>
    </>
  );
}
