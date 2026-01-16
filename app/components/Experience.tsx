"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiArrowUpRight, FiCheckCircle, FiTerminal } from 'react-icons/fi'

const experiences = [
    {
        company: "Runtime Solution PVT LTD",
        role: "Junior Full Stack Developer",
        period: "2025 — Present",
        description: "Leading the development of high-performance e-commerce architectures, achieving a 40% improvement in Core Web Vitals. Implementing complex payment gateway logic and real-time inventory synchronization using WebSockets and Next.js server actions.",
        skills: ["React", "Node.js", "MongoDB", "Express", "NEXT JS", "GSAP", "Integration"],
        isCurrent: true
    },
    {
        company: "Cloud Counselage Pvt. Ltd",
        role: "Full Stack Developer - Intern",
        period: "2025 — 8 Months",
        description: "Developed and optimized scalable MERN stack applications, focusing on secure user authentication via Clerk and cloud-based media management with Cloudinary. Streamlined API response times and enhanced UI responsiveness through modular component design.",
        skills: ["React", "Node.js", "MongoDB", "Express", "NEXT JS", "MERN STACK", "Clerk", "Cloudinary"],
        isCurrent: false
    },
    {
        company: "Xupoli Technologies Inc",
        role: "Software Testing - Intern",
        period: "2022 - 1 years",
        description: "Executed comprehensive manual testing protocols to identify critical software defects and ensure cross-browser compatibility. Documented bug reports, performed regression testing, and collaborated with the dev team to improve overall system stability.",
        skills: ["Manual Testing"],
        isCurrent: false
    },
];

const Experience = () => {
    return (
        <section className="bg-[#030303] min-h-screen py-24 px-6 md:px-0" id="experience">
            <div className="max-w-[1200px] mx-auto">

                {/* --- HEADER --- */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="h-px w-12 bg-[#C3F53C]" />
                        <span className="text-[#C3F53C] font-mono text-xs uppercase tracking-[0.3em]">Career_Path.log</span>
                    </motion.div>
                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
                        WORK <span className="text-[#A186FF] italic">EXP.</span>
                    </h1>
                </div>

                {/* --- EXPERIENCE NODES --- */}
                <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-20">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 group"
                        >
                            {/* Glowing Connector Node */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-[#030303] transition-all duration-500
                                ${exp.isCurrent ? "border-[#C3F53C] shadow-[0_0_15px_rgba(195,245,60,0.6)]" : "border-white/20 group-hover:border-[#A186FF]"}
                            `}>
                                {exp.isCurrent && <div className="absolute inset-0 rounded-full bg-[#C3F53C] animate-ping opacity-40" />}
                            </div>

                            {/* Card Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                                {/* Timeline & Role */}
                                <div className="lg:col-span-4">
                                    <p className="text-[#C3F53C] font-mono text-xs mb-2 tracking-widest">{exp.period}</p>
                                    <h2 className="text-3xl font-black text-white uppercase italic leading-tight group-hover:text-[#A186FF] transition-colors">
                                        {exp.role}
                                    </h2>
                                    <div className="flex items-center gap-2 mt-2 text-white/50 font-bold uppercase tracking-tighter">
                                        <FiBriefcase className="text-[#A186FF]" />
                                        {exp.company}
                                    </div>
                                </div>

                                {/* Details & Description */}
                                <div className="lg:col-span-8 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 backdrop-blur-sm group-hover:bg-white/[0.05] transition-all">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-2 text-xs font-mono text-white/30 uppercase">
                                            <FiTerminal className="text-[#C3F53C]" />
                                            Task_Execution_Summary
                                        </div>
                                        <a href="#" className="text-white/20 hover:text-[#C3F53C] transition-colors">
                                            <FiArrowUpRight size={24} />
                                        </a>
                                    </div>

                                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                                        {exp.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, sIndex) => (
                                            <span
                                                key={sIndex}
                                                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:border-[#C3F53C]/30 group-hover:text-white transition-all"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 font-mono text-[10px] uppercase tracking-[0.5em]">
                    <span>End_Of_Records</span>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><FiCheckCircle className="text-[#C3F53C]" /> Verified_Background</span>
                        <span className="flex items-center gap-1"><FiCheckCircle className="text-[#C3F53C]" /> Security_Cleared</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience