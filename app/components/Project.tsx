'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

// Static imports - Ensure these paths are 100% correct in your project structure
import project from '../../public/project.jpg'
import project1 from '../../public/landing.png'
import project2 from '../../public/connecthub.png'
import project3 from '../../public/travel.png'
import project4 from '../../public/Ai Image Generator.png'
import project5 from '../../public/Textgenerator.png'

const projects = [
    {
        title: "KartBuddy Website",
        desc: "KartBuddy is a modern, responsive landing page engineered to showcase platform features. It focuses on clean design, high performance, and fluid user interaction.",
        devStack: ["REACT JS", "TAILWIND CSS", "FRAMER MOTION"],
        gitLink: "https://github.com/Harsh24082001/KartBuddy-Landing-Page",
        src: project1,
        color: "#A186FF"
    },
    {
        title: "Connect Hub Website",
        desc: "A professional networking full-stack application inspired by LinkedIn. Features include profile building, connection logic, and real-time networking capabilities.",
        devStack: ["NEXT JS", "NODE JS", "MONGO DB", "TAILWIND"],
        gitLink: "https://github.com/Harsh24082001/ConnectHub",
        src: project2,
        color: "#C3F53C"
    },
    {
        title: "Booking and Travel Website",
        desc: "A comprehensive travel platform enabling users to explore global destinations, view curated packages, and manage online bookings seamlessly.",
        devStack: ["MERN STACK", "TAILWIND CSS"],
        gitLink: "https://github.com/Harsh24082001/Travel-Website",
        src: project3,
        color: "#A186FF"
    },
    {
        title: "AI Image Generator",
        desc: "Advanced visual synthesis tool integrated with Google’s Gemini API, allowing users to generate high-fidelity AI artwork from natural language prompts.",
        devStack: ["MERN STACK", "GEMINI API"],
        gitLink: "https://github.com/Harsh24082001/Image-Generator",
        src: project4,
        color: "#C3F53C"
    },
    {
        title: "AI Text Generator",
        desc: "Intelligent content generation platform leveraging Gemini API to facilitate instant brainstorming, copywriting, and structured text creation.",
        devStack: ["MERN STACK", "GEMINI API"],
        gitLink: "https://github.com/Harsh24082001/Image-Generator",
        src: project5,
        color: "#A186FF"
    },
    {
        title: "Calculator App",
        desc: "A sleek, high-precision utility focused on state management and reactive UI. Designed for standard arithmetic operations with zero latency.",
        devStack: ["REACT JS", "TAILWIND CSS"],
        gitLink: "https://github.com/Harsh24082001/Calculator",
        src: project,
        color: "#C3F53C"
    },
];

const Project = () => {
    return (
        <section className='bg-[#030303] py-32' id='projects'>
            <div className='max-w-[1200px] mx-auto px-6'>

                {/* Section Header */}
                <div className='mb-24'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='flex items-center gap-3 mb-4'
                    >
                        <div className='w-10 h-[2px] bg-[#C3F53C]'></div>
                        <span className='text-[#C3F53C] font-mono text-xs uppercase tracking-[0.3em] font-bold'>Selected Works</span>
                    </motion.div>
                    <h2 className='text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic'>
                        Creative <span className='text-[#A186FF]'>Portfolio</span>
                    </h2>
                </div>

                {/* Projects Display */}
                <div className='space-y-40'>
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
                        >
                            {/* Project Image Container */}
                            <div className='flex-1 relative group w-full'>
                                <div
                                    className='absolute inset-0 blur-[100px] opacity-20 rounded-full transition-all duration-500 group-hover:opacity-40'
                                    style={{ backgroundColor: project.color }}
                                ></div>
                                <div className='relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video'>
                                    <Image
                                        src={project.src}
                                        alt={project.title}
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-700'
                                    />
                                </div>
                            </div>

                            {/* Project Content Container */}
                            <div className='flex-1 space-y-6'>
                                <h3 className='text-4xl md:text-5xl font-black text-white uppercase tracking-tight'>
                                    {project.title}
                                </h3>

                                <p className='text-white/50 text-lg leading-relaxed italic'>
                                    "{project.desc}"
                                </p>

                                <div className='flex flex-wrap gap-2'>
                                    {project.devStack.map((tech, i) => (
                                        <span key={i} className='px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/70 tracking-widest uppercase'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex gap-6 pt-6 border-t border-white/5'>
                                    <a href={project.gitLink} target="_blank" className='flex items-center gap-2 group text-white/40 hover:text-white transition-all'>
                                        <div className='p-3 bg-white/5 rounded-full group-hover:bg-[#A186FF] group-hover:text-black transition-all'>
                                            <FiGithub size={20} />
                                        </div>
                                        <span className='text-[10px] font-black uppercase tracking-widest'>Code</span>
                                    </a>
                                    <a href="#" className='flex items-center gap-2 group text-white/40 hover:text-white transition-all'>
                                        <div className='p-3 bg-white/5 rounded-full group-hover:bg-[#C3F53C] group-hover:text-black transition-all'>
                                            <FiExternalLink size={20} />
                                        </div>
                                        <span className='text-[10px] font-black uppercase tracking-widest'>Launch</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-24 mb-12">
                    <a href="/projects" className="group relative">
                        {/* Glow Effect Layer */}
                        <div className="absolute -inset-0.5 bg-[#C3F53C] rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

                        {/* The Button */}
                        <button className="relative px-12 py-4 bg-[#030303] border border-white/10 text-white rounded-full flex items-center gap-3 transition-all duration-300 group-hover:border-white/30">
                            <span className="text-xs font-black uppercase tracking-[0.3em]">
                                View All Works
                            </span>

                            {/* Minimal Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-4 h-4 text-[#C3F53C] group-hover:translate-x-1 transition-transform duration-300"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project