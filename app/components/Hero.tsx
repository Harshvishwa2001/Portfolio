'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

// Ensure your image path is correct
import profile from '../../public/profile Harsh.png'
import { DiJava } from 'react-icons/di'
import Link from 'next/link'

const Hero = () => {
    const [time, setTime] = useState('')
    console.log(time)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const socials = [
        { Icon: FiGithub, href: "https://github.com/Harshvishwa2001" },
        { Icon: FiLinkedin, href: "https://www.linkedin.com/in/harsh-vishwa2001/" },
        { Icon: FiInstagram, href: "https://www.instagram.com/harshhv__" },
    ];

    return (
        <section className='relative min-h-screen w-full bg-[#050505] text-white p-6 md:p-12 overflow-hidden flex items-center'>

            {/* --- 1. AMBIENT BACKGROUND LAYER --- */}
            <div className='absolute inset-0 z-0 pointer-events-none'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a152e,transparent_70%)] opacity-50' />
                <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]' />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className='absolute top-20 right-[10%] w-[500px] h-[500px] bg-[#A186FF]/10 blur-[120px] rounded-full'
                />
            </div>

            <div className='relative z-10 max-w-7xl mx-auto w-full pt-20 lg:pt-0'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>

                    {/* --- LEFT SIDE: THE CONTENT --- */}
                    <div className='lg:col-span-6 space-y-10'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className='inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6'>
                                <span className='flex h-2 w-2 rounded-full bg-[#2bff00] shadow-[0_0_10px_#C3F53C] animate-pulse' />
                                <span className='text-[10px] font-black tracking-[0.2em] text-white/70 uppercase'>System Status: Creative Mode</span>
                            </div>

                            <h1 className='text-6xl md:text-[110px] font-black leading-[0.8] tracking-tighter mb-8'>
                                DESIGN <br />
                                <span className='text-[#A186FF] drop-shadow-[0_0_30px_rgba(161,134,255,0.3)]'>ENGINEERED.</span>
                            </h1>

                            <p className='text-white/50 text-xl font-medium max-w-lg leading-relaxed'>
                                I am <span className='text-white'>Harsh Vishwakarma</span>, a developer who crafts
                                <span className='text-white'> high-performance</span> digital ecosystems using the
                                <span className='text-[#C3F53C]'> MERN Stack</span>.
                            </p>

                            <div className='flex flex-wrap gap-4 mt-12'>
                                <Link href={'#contact'}>
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(195, 245, 60, 0.4)" }}
                                        className='px-10 py-5 bg-white text-black rounded-2xl font-black text-sm flex items-center gap-3 transition-all'
                                    >
                                        START A PROJECT <FiArrowUpRight size={20} />
                                    </motion.button>
                                </Link>

                                <div className='flex gap-2'>
                                    {socials.map(({ Icon, href }, i) => (
                                        <Link
                                            key={i}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <motion.button
                                                whileHover={{
                                                    y: -5,
                                                    backgroundColor: "rgba(255,255,255,0.1)",
                                                    borderColor: "#A186FF",
                                                    boxShadow: "0 10px 20px rgba(161, 134, 255, 0.2)"
                                                }}
                                                className='w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all'>
                                                <Icon size={22} />
                                            </motion.button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT SIDE: THE VISUAL STACK --- */}
                    <div className='lg:col-span-6 relative h-[700px] flex items-center justify-center'>

                        {/* Main Profile Card with Glassmorphism */}
                        <motion.div
                            style={{ perspective: 1200 }}
                            className='relative z-20 w-full max-w-[360px]'
                        >
                            <motion.div
                                className='relative aspect-[4/5] bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-[3rem] p-3 shadow-2xl overflow-hidden group' >
                                <div className='relative w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0a0a0a]'>
                                    <Image src={profile} alt="Harsh" fill className='object-cover transition-all duration-1000 grayscale-80 hover:grayscale-0 cursor-pointer' />
                                    <div className='absolute bottom-4 left-4 right-4 p-5 backdrop-blur-2xl bg-black/60 border border-white/10 rounded-[2rem] z-20'>
                                        <p className='text-[8px] font-black text-[#A186FF] tracking-widest uppercase mb-1'>Lead Developer</p>
                                        <h4 className='text-md font-black tracking-tight uppercase'>Harsh Vishwakarma</h4>
                                    </div>
                                </div>
                            </motion.div>

                            {/* --- NEXT LEVEL TERMINAL --- */}
                            <motion.div
                                animate={{ y: [0, -25, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className='absolute -top-10 -left-50 z-30 bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden xl:block min-w-[260px]'
                            >
                                <div className='flex gap-1.5 mb-4'>
                                    <div className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]' />
                                    <div className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]' />
                                    <div className='w-2.5 h-2.5 rounded-full bg-[#27C93F]' />
                                </div>
                                <code className='text-[12px] font-mono leading-relaxed block'>
                                    <p className='flex gap-2'><span className='text-white/40'>1</span><span className='text-[#A186FF]'>status:</span> <span className='text-[#C3F53C]'>`Available`</span></p>
                                    <p className='flex gap-2'><span className='text-white/40'>2</span><span className='text-[#A186FF]'>role:</span> <span className='text-[#C3F53C]'>`Junior Developer`</span></p>
                                    <p className='flex gap-2'><span className='text-white/40'>3</span><span className='text-[#A186FF]'>stack:</span> <span className='text-[#C3F53C]'>`MERN`</span></p>
                                    <p className='flex gap-2'><span className='text-white/40'>4</span><span className='text-[#A186FF]'>focus:</span> <span className='text-[#C3F53C]'>`Full Stack Developer`</span><span className='w-2 h-4 bg-[#C3F53C] animate-pulse ml-1' /></p>
                                </code>
                            </motion.div>

                            {/* --- FLOATING ICONS (Optimized Color & Glow) --- */}
                            {/* Next.js Badge */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className='absolute -bottom-20 -right-16 w-44 h-44 z-30 hidden md:block'
                            >
                                <svg viewBox="0 0 100 100" className='w-full h-full'>
                                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                                    <text className='text-[8px] font-bold uppercase fill-white/50 tracking-[3px]'>
                                        <textPath xlinkHref="#circlePath">• NEXT.JS EXPERT • UI DESIGNER • REACT SPECIALIST</textPath>
                                    </text>
                                </svg>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]'>
                                        <RiNextjsFill size={40} />
                                    </div>
                                </div>
                            </motion.div>

                            {/* 1. Java - Orange Glow */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 10, 0],
                                    filter: ["drop-shadow(0 0 0px #e7880b)", "drop-shadow(0 0 20px #e7880b)", "drop-shadow(0 0 0px #e7880b)"]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className='absolute -top-18 right-35 w-16 h-16 bg-[#e7880b] text-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(231,136,11,0.3)] z-30 cursor-pointer'
                            >
                                <DiJava size={32} />
                            </motion.div>

                            {/* 2. JavaScript - Yellow Glow */}
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -10, 0],
                                    filter: ["drop-shadow(0 0 0px #faf211)", "drop-shadow(0 0 20px #faf211)", "drop-shadow(0 0 0px #faf211)"]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className='absolute top-1/4 -right-30 w-16 h-16 bg-[#faf211] text-black rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(250,242,17,0.3)] z-20 cursor-pointer'
                            >
                                <SiJavascript size={32} />
                            </motion.div>

                            {/* 3. React - Cyan Glow */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 10, 0],
                                    filter: ["drop-shadow(0 0 0px #61DAFB)", "drop-shadow(0 0 20px #61DAFB)", "drop-shadow(0 0 0px #61DAFB)"]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className='absolute -top-6 -right-20 w-16 h-16 bg-[#61DAFB] text-black rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(97,218,251,0.4)] z-30 cursor-pointer'
                            >
                                <SiReact size={32} />
                            </motion.div>

                            {/* 4. MongoDB - Green Glow */}
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    filter: ["drop-shadow(0 0 0px #47A248)", "drop-shadow(0 0 25px #47A248)", "drop-shadow(0 0 0px #47A248)"]
                                }}
                                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                className='absolute bottom-25 -right-20 w-14 h-14 bg-[#47A248] text-white rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(71,162,72,0.4)] z-30 cursor-pointer'
                            >
                                <SiMongodb size={28} />
                            </motion.div>

                            {/* 5. Tailwind - Blue/Cyan Glow */}
                            <motion.div
                                animate={{
                                    x: [0, -10, 0],
                                    y: [0, 15, 0],
                                    filter: ["drop-shadow(0 0 0px #06B6D4)", "drop-shadow(0 0 20px #06B6D4)", "drop-shadow(0 0 0px #06B6D4)"]
                                }}
                                transition={{ duration: 6, repeat: Infinity }}
                                className='absolute top-50 -left-18 w-14 h-14 bg-[#06B6D4] text-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] z-30'
                            >
                                <SiTailwindcss size={28} />
                            </motion.div>

                            {/* 6. Node.js - Deep Green Glow */}
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    filter: ["drop-shadow(0 0 0px #339933)", "drop-shadow(0 0 20px #339933)", "drop-shadow(0 0 0px #339933)"]
                                }}
                                transition={{ duration: 4.5, repeat: Infinity }}
                                className='absolute -bottom-8 -left-15 w-15 h-15 bg-[#339933] text-white rounded-[1rem] flex items-center justify-center shadow-[0_0_25px_rgba(51,153,51,0.5)] z-30 cursor-pointer'
                            >
                                <SiNodedotjs size={30} />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero