'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getProjects, deleteProject } from '@/app/api/projects'
import { FiGithub, FiExternalLink, FiTrash2 } from 'react-icons/fi'

export default function ArchiveView() {
    const [projects, setProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    const loadData = async () => {
        try {
            setLoading(true)
            const res = await getProjects()
            
            if (Array.isArray(res)) {
                setProjects(res);
            } else if (res && res.projects) {
                setProjects(res.projects);
            } else {
                setProjects([]);
            }
        } catch (error) {
            console.error("Failed to fetch projects:", error);
            setProjects([]);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { loadData() }, [])

    const confirmDelete = async (id: string) => {
        if (confirm("ARE YOU SURE YOU WANT TO TERMINATE THIS PROJECT INTEL?")) {
            try {
                const res = await deleteProject(id)
                if (res.success) loadData()
            } catch (err) {
                console.error("Delete Error:", err)
            }
        }
    }

    if (loading) return <div className="p-20 text-center font-mono text-[#C3F53C] animate-pulse uppercase tracking-[0.5em]">DECRYPTING_DATABASE...</div>

    return (
        <div className="p-8 space-y-32 bg-[#050505] min-h-screen">
            {projects.length === 0 ? (
                <div className="h-60 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[3rem] text-zinc-600 font-mono">
                    <p className="tracking-widest uppercase">NO_DATA_FOUND_IN_ARCHIVE</p>
                </div>
            ) : (
                projects.map((proj, index) => (
                    <motion.div 
                        key={proj._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-12 items-start group relative"
                    >
                        {/* --- PROJECT NUMBER --- */}
                        <div className="absolute -left-4 top-0 hidden xl:block">
                            <span className="text-zinc-800 font-mono text-9xl font-black leading-none select-none opacity-20 group-hover:opacity-40 group-hover:text-[#C3F53C] transition-all duration-500">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        {/* PROJECT IMAGE */}
                        <div className="w-full lg:w-[550px] aspect-video bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/5 relative z-10">
                            {proj.imageUrl ? (
                                <img 
                                    src={proj.imageUrl} 
                                    alt={proj.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-800 font-mono text-xs">NO_IMAGE_SOURCE</div>
                            )}
                            
                            {/* DELETE BUTTON */}
                            <button 
                                onClick={() => confirmDelete(proj._id)}
                                className="absolute top-6 right-6 p-4 bg-red-600/20 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md hover:bg-red-600 hover:text-white z-30"
                            >
                                <FiTrash2 size={20}/>
                            </button>
                        </div>

                        {/* PROJECT DETAILS */}
                        <div className="flex-1 space-y-6 pt-4 z-10">
                            <div className="space-y-2">
                                <span className="text-[#C3F53C] font-mono text-xs tracking-[0.4em] uppercase opacity-60">
                                    DATA_ENTRY_{String(index + 1).padStart(3, '0')}
                                </span>
                                <h2 className="text-white text-6xl font-black uppercase tracking-tighter italic leading-none">
                                    {proj.title || "UNTITLED_PROJECT"}
                                </h2>
                            </div>
                            
                            <p className="text-zinc-500 text-xl leading-relaxed italic font-medium max-w-2xl">
                                "{proj.description || "No description provided."}"
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-3">
                                {proj.tags && typeof proj.tags === 'string' && (
                                    proj.tags.split(',').map((tag: string, i: number) => (
                                        <span key={i} className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] bg-white/[0.02]">
                                            {tag.trim()}
                                        </span>
                                    ))
                                )}
                            </div>

                            {/* ACTION LINKS */}
                            <div className="flex gap-8 pt-6">
                                {proj.codeLink && (
                                    <a href={proj.codeLink} target="_blank" className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group/link">
                                        <div className="p-3 bg-zinc-900 rounded-full group-hover/link:bg-white group-hover/link:text-black transition-all">
                                            <FiGithub size={20}/>
                                        </div>
                                        <span className="font-mono text-xs uppercase tracking-[0.3em]">CODE</span>
                                    </a>
                                )}

                                {proj.launchLink && (
                                    <a href={proj.launchLink} target="_blank" className="flex items-center gap-3 text-zinc-500 hover:text-[#C3F53C] transition-colors group/link">
                                        <div className="p-3 bg-zinc-900 rounded-full group-hover/link:bg-[#C3F53C] group-hover/link:text-black transition-all">
                                            <FiExternalLink size={20}/>
                                        </div>
                                        <span className="font-mono text-xs uppercase tracking-[0.3em]">LAUNCH</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))
            )}
        </div>
    )
}