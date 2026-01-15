'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiUser, FiAward, FiArrowRight, FiCode, FiDownload, FiFileText } from 'react-icons/fi'
import NavHeaders from '../components/NavHeaders'
import Footer from '../components/Footer'
import profile from '../../public/profile Harsh.png'
import profile1 from '../../public/profileharsh.png'
import Image from 'next/image'
import Skills from '../components/Skills'

const AboutPage = () => {
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
                                "Passionate developer and strategist focused on bridging the gap between complex backend architecture and fluid user experiences."
                            </p>

                            <div className="flex gap-10 border-t border-white/5 pt-10">
                                <div>
                                    <h4 className="text-[#C3F53C] font-black text-2xl italic">05+</h4>
                                    <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest mt-1">Years Experience</p>
                                </div>
                                <div>
                                    <h4 className="text-[#C3F53C] font-black text-2xl italic">50+</h4>
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
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                            </div>
                            {/* Decorative Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-[#C3F53C] text-black p-8 rounded-full font-black text-xs uppercase tracking-tighter transform -rotate-12">
                                Available<br />for Intel
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- EDUCATION SECTION --- */}
                <section className="bg-white/[0.02] border-y border-white/5 py-32">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                            {/* IMAGE 2: ACADEMIC / LIFESTYLE */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <div className="aspect-video bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 relative">
                                    <Image
                                        src={profile1}
                                        alt="Academic Background"
                                        className="w-full h-full object-cover opacity-50"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FiBookOpen size={60} className="text-[#C3F53C]/20" />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-12 order-1 lg:order-2"
                            >
                                <div className="space-y-4">
                                    <h2 className="text-5xl font-black uppercase tracking-tighter italic">Academic_Intel</h2>
                                    <p className="text-zinc-500 font-mono text-sm tracking-widest">FOUNDATION OF KNOWLEDGE</p>
                                </div>

                                <div className="space-y-8">
                                    {/* Education Item 1 */}
                                    <div className="group border-l-2 border-[#C3F53C]/20 hover:border-[#C3F53C] pl-8 py-2 transition-all">
                                        <span className="text-[#C3F53C] font-mono text-xs">2019 — 2023</span>
                                        <h3 className="text-2xl font-bold uppercase mt-1">Bachelor of Computer Science</h3>
                                        <p className="text-zinc-500 mt-2">University Name • GPA 3.9/4.0</p>
                                    </div>

                                    {/* Education Item 2 */}
                                    <div className="group border-l-2 border-white/5 hover:border-[#C3F53C] pl-8 py-2 transition-all">
                                        <span className="text-zinc-700 font-mono text-xs group-hover:text-[#C3F53C]">2023 — Present</span>
                                        <h3 className="text-2xl font-bold uppercase mt-1">Advanced Web Architecture</h3>
                                        <p className="text-zinc-500 mt-2">Specialization in Full-Stack Systems</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- CORE SKILLS / FOOTER --- */}
                <section className="max-w-7xl mx-auto px-8 py-32 text-center">
                    <Skills />
                </section>

                <section className="max-w-7xl mx-auto px-8 py-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative bg-zinc-900/50 border border-white/5 rounded-[4rem] p-12 lg:p-24 overflow-hidden text-center"
                    >
                        {/* Background Graphic */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none font-mono text-[150px] font-black leading-none overflow-hidden select-none">
                            RESUME_DATA_RESUME_DATA
                        </div>

                        <div className="relative z-10 flex flex-col items-center space-y-8">
                            <div className="w-20 h-20 bg-[#C3F53C]/10 rounded-full flex items-center justify-center">
                                <FiFileText className="text-[#C3F53C] text-3xl" />
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic">Ready_for_Deployment?</h2>
                                <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Download full technical specifications and career history</p>
                            </div>

                            <a
                                href="/Harsh Exp Resume.pdf"
                                download
                                className="group flex items-center gap-6 bg-[#C3F53C] text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(195,245,60,0.2)]"
                            >
                                Download_Resume
                                <FiDownload className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage