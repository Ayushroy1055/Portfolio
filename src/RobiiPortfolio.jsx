// Paste your RobiiPortfolio.jsx content here from ChatGPT canvas
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function RobiiPortfolio() {
  return (
    <div className="bg-slate-950 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-blue-500">Ayush Roy</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Hi, I’m <span className="text-blue-500">Ayush</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-6">
            Full Stack Developer building scalable web applications with React & Django.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl shadow-lg">
              View Projects
            </a>
            <a href="#" className="border border-blue-500 px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-blue-500/20">
              <Download size={18}/> Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-500">About Me</h3>
          <p className="text-slate-400 leading-relaxed">
            I am a passionate Full Stack Developer with hands-on experience in building real-world applications using React, Django REST Framework, and Node.js. I focus on writing clean, scalable code and building secure authentication systems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-500">Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Frontend", skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"] },
              { title: "Backend", skills: ["Django", "DRF", "Node.js"] },
              { title: "Tools", skills: ["Git", "Postman", "Docker", "VS Code"] },
            ].map((category, index) => (
              <div key={index} className="bg-slate-900 p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h4>
                <ul className="space-y-2 text-slate-400">
                  {category.skills.map((skill, i) => (
                    <li key={i}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-500">Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "API Monitoring System",
                desc: "Track, log, and analyze API requests in real-time with a web dashboard.",
              },
              {
                title: "Smart Expense Splitter",
                desc: "OCR-based bill splitting app using Tesseract.js and Node.js.",
              },
              {
                title: "Device Authentication System",
                desc: "Secure login system with device ID verification and email confirmation.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800 p-6 rounded-2xl shadow-xl"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-400">{project.title}</h4>
                <p className="text-slate-400 mb-4">{project.desc}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-500 hover:underline">Live</a>
                  <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-500">Contact</h3>
          <p className="text-slate-400 mb-6">Let’s connect and build something amazing together.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-blue-400"><Github /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400"><Mail /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-center py-6 border-t border-slate-800">
        <p className="text-slate-500">© 2026  | Built with React</p>
      </footer>
    </div>
  );
}
