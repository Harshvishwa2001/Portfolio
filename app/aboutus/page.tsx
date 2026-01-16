'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FiActivity, FiCpu } from 'react-icons/fi'
import NavHeaders from '../components/NavHeaders'
import Footer from '../components/Footer'
import profile from '../../public/profile Harsh.png'
import Image from 'next/image'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import ResumeCTA from '../components/Resume'

const AboutPage = () => {

    const eduDetails = [
        {
            clgname: "TIMSCDR (THAKUR COLLEGE)",
            degreename: "Master of Computer Application",
            year: "2023 - 2025 - Recently",
            marks: "CGPA 8.10 / 10 ",
            status: "Completed"
        },
        {
            clgname: "Valia College of Commerce And Science",
            degreename: "Bachelor of Science - IT",
            year: "2019 - 2022",
            marks: "CGPA 6.71 / 10 ",
            status: "Completed"
        },
        {
            clgname: "TIMSCDR (THAKUR COLLEGE)",
            degreename: "Maharashtra Board Of HSC",
            year: "2017 - 2019",
            marks: "Percentage: 66.62%",
            status: "Completed"
        },
        {
            clgname: "J. A. Meghani English Medium High School",
            degreename: "Maharashtra Board Of SSC",
            year: "2017",
            marks: "Percentage: 48.62%",
            status: "Completed"
        }
    ]

    return (
        <>
            <NavHeaders />
            <div className="min-h-screen bg-[#050505] text-white font-sans">
                {/* --- HERO SECTION / PROFILE --- */}
                <section className="max-w-7xl mx-auto px-8 pt-32 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-[#C3F53C] font-mono text-xs tracking-[0.5em] uppercase">
                                    System_Profile_V2.0
                                </span>
                                <h1 className="text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-none">
                                    Building <br /> Digital <br /> <span className="text-zinc-800">Futures.</span>
                                </h1>
                            </div>

                            <p className="text-zinc-500 text-xl leading-relaxed max-w-lg italic">
                                Passionate developer and strategist focused on bridging the gap between complex backend architecture and fluid user experiences.
                            </p>

                            <div className="flex gap-10 border-t border-white/5 pt-10">
                                <div>
                                    <h4 className="text-[#C3F53C] font-black text-2xl italic">01+</h4>
                                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mt-1">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-[#C3F53C] font-black text-2xl italic">20+</h4>
                                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mt-1">Projects Completed</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* IMAGE 1: PROFILE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/10 group">
                                <Image
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- EDUCATION SECTION --- */}
                <section className="relative bg-[#030303] py-32 overflow-hidden">
                    {/* Background Decorative Element: Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />

                    <div className="max-w-7xl mx-auto px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16">

                            {/* Left Side: System Metadata */}
                            <div className="lg:w-1/3 space-y-8 sticky top-32 h-fit">
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="flex items-center gap-2 mb-4"
                                    >
                                        <FiActivity className="text-[#C3F53C] animate-pulse" />
                                        <span className="text-[#C3F53C] font-mono text-xs uppercase tracking-[0.3em]">Live_Database</span>
                                    </motion.div>
                                    <h2 className="text-6xl font-black uppercase tracking-tighter text-white leading-none">
                                        EDUCATION_<br />
                                        <span className="text-zinc-800 ">HISTORY</span>
                                    </h2>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                    <p className="text-zinc-500 font-mono text-xs leading-relaxed uppercase tracking-widest">
                                        Archive contains authenticated records of academic progression and specialization in software architecture.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Timeline Data Nodes */}
                            <div className="lg:w-2/3 relative">
                                {/* The Vertical Bus Line */}
                                <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#C3F53C] via-zinc-800 to-transparent" />

                                <div className="space-y-16">
                                    {eduDetails.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="relative pl-12 group"
                                        >
                                            {/* The Node Point */}
                                            <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-2 bg-[#030303] z-10 transition-all duration-500 flex items-center justify-center
                                        ${index === 0 ? "border-[#C3F53C] shadow-[0_0_15px_rgba(195,245,60,0.5)]" : "border-zinc-700 group-hover:border-[#C3F53C]"}
                                    `}>
                                                <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#C3F53C] animate-ping" : "bg-zinc-700 group-hover:bg-[#C3F53C]"}`} />
                                            </div>

                                            {/* Data Content */}
                                            <div className="space-y-3">
                                                <div className="flex flex-wrap items-center gap-4">
                                                    <span className={`font-mono text-xs px-3 py-1 rounded-md border ${index === 0
                                                        ? "bg-[#C3F53C]/10 border-[#C3F53C]/20 text-[#C3F53C]"
                                                        : "bg-white/5 border-white/10 text-zinc-500"
                                                        }`}>
                                                        {edu.year}
                                                    </span>
                                                    {edu.status && (
                                                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
                                                            {edu.status}
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight group-hover:text-[#C3F53C] transition-colors">
                                                    {edu.degreename}
                                                </h3>

                                                <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-500">
                                                    <p className="text-lg font-medium group-hover:text-zinc-300 transition-colors">
                                                        {edu.clgname}
                                                    </p>
                                                    <span className="hidden md:block text-zinc-800">|</span>
                                                    <div className="flex items-center gap-2">
                                                        <FiCpu className="text-[#C3F53C]/40" />
                                                        <span className="text-sm font-mono tracking-tighter">{edu.marks}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Experience />
                </section>

                {/* --- CORE SKILLS / FOOTER --- */}
                <section className="max-w-7xl mx-auto px-8 py-2 text-center">
                    <Skills />
                </section>

                <section>
                    <ResumeCTA />
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage