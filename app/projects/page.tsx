'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Footer from '../components/Footer'
import { FiLayers, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import NavHeaders from '../components/NavHeaders'
import { getProjects } from '@/app/api/projects' // Ensure your API path is correct
import Link from 'next/link'

const ProjectPage = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const data = await getProjects();
                const projectList = Array.isArray(data) ? data : data.projects || [];
                
                // Reversed to show the newest entries at the top
                setProjects([...projectList].reverse());
            } catch (error) {
                console.error("Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
    }, []);

    if (loading) {
        return (
            <div className="bg-[#030303] h-screen flex items-center justify-center">
                <div className="text-[#C3F53C] font-mono animate-pulse tracking-[1em] uppercase">Initializing_Archive...</div>
            </div>
        );
    }

    return (
        <div className="bg-[#030303] selection:bg-[#C3F53C] selection:text-black">
            <NavHeaders/>
            <main className="pt-40 pb-32 px-6">
                <div className="max-w-[1200px] mx-auto">

                    {/* --- HERO HEADER --- */}
                    <header className="mb-48 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <FiLayers className="text-[#C3F53C] animate-pulse" />
                            <span className="text-[#C3F53C] font-mono text-xs uppercase tracking-[0.5em] font-black">Archive v2.0</span>
                        </motion.div>

                        <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.75] tracking-tighter uppercase mb-16">
                            SELECTED <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A186FF] via-white to-[#7042f8]">WORKS.</span>
                        </h1>

                        <p className="max-w-2xl text-white/40 text-lg md:text-2xl font-medium leading-relaxed italic border-l-2 border-white/10 pl-8">
                            Transforming complex logic into seamless digital experiences through modern full-stack engineering.
                        </p>
                    </header>

                    {/* --- PROJECT FEED --- */}
                    <div className="flex flex-col gap-64">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id || index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="group relative grid lg:grid-cols-12 gap-12 items-center"
                            >
                                {/* Image Container (Height Increased via aspect-[4/3]) */}
                                <div className={`lg:col-span-7 relative ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                                    <div 
                                        className="absolute inset-0 blur-[150px] opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-full"
                                        style={{ backgroundColor: index % 2 === 0 ? "#C3F53C" : "#A186FF" }}
                                    />
                                    <motion.div 
                                        whileHover={{ rotate: index % 2 === 0 ? -1 : 1, scale: 1.02 }}
                                        // CHANGED: aspect-[16/10] to aspect-[4/3] for more height
                                        className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/3] bg-[#0a0a0a]"
                                    >
                                        {project.imageUrl && (
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-all duration-700 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                        {project.launchLink && (
                                            <Link href={project.launchLink}>
                                        <div className="absolute top-8 right-8 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <FiArrowUpRight size={24} className="text-[#C3F53C]" />
                                        </div>
                                        </Link>
                                        )
                                        }
                                    </motion.div>
                                </div>

                                {/* Content Container */}
                                <div className="lg:col-span-5 space-y-10">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#A186FF] font-mono text-sm font-black tracking-widest">
                                                {project.entryNumber || `0${index + 1}`}
                                            </span>
                                            <div className="h-[1px] w-12 bg-white/20" />
                                            <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Case Study</span>
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                                            {project.title.split(' ')[0]} <br/>
                                            <span className="text-white/30 italic font-light">
                                                {project.title.split(' ').slice(1).join(' ')}
                                            </span>
                                        </h3>
                                    </div>

                                    <p className="text-white/50 text-xl leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {(typeof project.tags === 'string' ? project.tags.split(',') : project.tags || []).map((tech: string) => (
                                            <span key={tech} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white/80 tracking-widest uppercase hover:bg-[#C3F53C] hover:text-black transition-colors">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-10 flex gap-10">
                                        {project.codeLink && (
                                            <a
                                                href={project.codeLink}
                                                target="_blank"
                                                className="group/link flex items-center gap-2 text-white text-xs font-black uppercase tracking-[0.3em] transition-all"
                                            >
                                                <span className="border-b-2 border-[#C3F53C] pb-1 group-hover/link:text-[#C3F53C]">View Source</span>
                                                <FiGithub className="group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                        {project.launchLink && (
                                            <a
                                                href={project.launchLink}
                                                target="_blank"
                                                className="text-white/20 text-xs font-black uppercase tracking-[0.3em] hover:text-white transition-colors"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- FOOTER CTA --- */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-80 py-32 border-t border-white/5 text-center relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#C3F53C] to-transparent" />
                        <p className="text-[#C3F53C] font-mono text-xs tracking-[0.8em] mb-12 uppercase font-bold">End of Archive</p>
                        <h2 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter mb-20 leading-none">
                            NEXT IS <br/> <span className="text-[#A186FF] italic underline decoration-white/10">YOURS.</span>
                        </h2>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-16 py-8 bg-white text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#C3F53C] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            Start a Project
                        </motion.button>
                    </motion.div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ProjectPage