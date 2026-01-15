"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { SiReact, SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiMysql, SiJavascript } from 'react-icons/si'
import book from '../../public/book.png'
import card from '../../public/card.png'
import { DiJava } from 'react-icons/di'
import { CgVercel } from 'react-icons/cg'

const About = () => {
    return (
        <section className='max-w-[1200px] mx-auto py-24 px-6 md:px-0' id='about'>

            {/* --- 1. HEADER SECTION --- */}
            <div className='flex flex-col md:flex-row items-end justify-between mb-16 gap-4'>
                <div className='flex flex-col'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='flex items-center gap-2 mb-2'
                    >
                        <span className='w-8 h-[2px] bg-[#C3F53C]'></span>
                        <span className='text-[#C3F53C] font-mono text-xs uppercase tracking-[0.3em]'>System.Initialize()</span>
                    </motion.div>
                    <h1 className='text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none'>
                        ABOUT <span className='text-[#A186FF] italic'>ME.</span>
                    </h1>
                </div>
                <p className='text-white/30 font-mono text-[10px] uppercase tracking-widest md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-4 md:pl-0 md:pr-4'>
                    Specializing in <br /> High-Performance Ecosystems
                </p>
            </div>

            {/* --- 2. BENTO GRID SYSTEM --- */}
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>

                {/* Education Box */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className='md:col-span-8 group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden'
                >
                    <motion.div
                        whileHover={{ y: -5 }}
                        className='md:col-span-8 group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden'
                    >
                        <div className='absolute inset-0 bg-gradient-to-br from-[#A186FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
                        <div className='p-10 flex flex-col md:flex-row items-center gap-10 relative z-10'>

                            <Image src={book} alt='Education' className='w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(161,134,255,0.5)]' />
                            <div className='flex-1 text-center md:text-left'>
                                <h2 className='text-3xl text-white font-black uppercase italic'>Academic <span className='text-[#A186FF]'>Background</span></h2>
                                <p className='text-white/50 mt-4 text-lg leading-relaxed'>
                                    <span className='text-white font-bold'>MCA Graduate from Thakur College</span>. I specialized in advanced data structures and architectural patterns, bridging the gap between mathematical logic and scalable cloud systems.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Technical Stack Box */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className='md:col-span-4 bg-[#A186FF] rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden relative group'
                >
                    <div className='absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:bg-white/40 transition-all'></div>
                    <div>
                        <h2 className='text-black text-2xl font-black uppercase italic leading-none'>MERN <br />Expertise</h2>
                        <p className='text-black/60 mt-4 text-sm font-medium'>
                            Mastering the flow of data from MongoDB to React with ultra-fast Node.js middleware.
                        </p>
                    </div>
                    <div className='flex gap-3 mt-6'>
                        <SiReact className='text-black text-2xl' />
                        <SiMongodb className='text-black text-2xl' />
                        <SiNodedotjs className='text-black text-2xl' />
                        <SiNextdotjs className='text-black text-2xl' />
                        <SiExpress className='text-black text-2xl' />
                        <SiMysql className='text-black text-2xl' />
                        <SiNextdotjs className='text-black text-2xl' />
                        <SiJavascript className='text-black text-2xl' />
                        <DiJava className='text-black text-2xl' />
                    </div>
                </motion.div>

                {/* Experience Box */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className='md:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group'
                >
                    <div className='flex flex-col h-full'>
                        <div className='flex items-center gap-4 mb-6'>
                            <Image src={card} alt='Exp' className='w-12 h-12 object-contain' />
                            <div>
                                <h3 className='text-white font-black uppercase text-xl italic'>Runtime Solution PVT LTD</h3>
                                <p className='text-[#C3F53C] text-[10px] font-bold tracking-[0.2em] uppercase'>Junior Full Stack Developer</p>
                            </div>
                        </div>
                        <p className='text-white/40 text-sm leading-relaxed'>
                            Engineered a modular e-commerce engine that reduced page load times by 40%. Implemented secure payment gateways and dynamic inventory management systems.
                        </p>
                    </div>
                </motion.div>

                {/* Skills/Tools Grid Box */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className='md:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden'
                >
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-1 relative z-10'>
                        <SkillItem icon={<SiTypescript />} name="TS" />
                        <SkillItem icon={<SiTailwindcss />} name="Tailwind" />
                        <SkillItem icon={<CgVercel />} name="Vercel" />
                        <SkillItem icon={"GSAP"} name="GSAP" />
                        <SkillItem icon={<SiExpress />} name="Express" />
                    </div>
                    <div className='mt-8 pt-8 border-t border-white/5'>
                        <h2 className='text-white text-xl font-black uppercase italic mb-2'>The Arsenal</h2>
                        <p className='text-white/40 text-sm'>
                            My workflow is built on <span className='text-white font-bold'>Performance First</span> principles, utilizing TypeScript for type-safety and Vercel for seamless deployment.
                        </p>
                    </div>
                </motion.div>

                <div className="flex justify-center mt-24 mb-12">
                    <a href="/aboutus" className="group relative">
                        {/* Glow Effect Layer */}
                        <div className="absolute -inset-0.5 bg-[#C3F53C] rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>

                        {/* The Button */}
                        <button className="relative px-12 py-4 bg-[#030303] border border-white/10 text-white rounded-full flex items-center gap-3 transition-all duration-300 group-hover:border-white/30">
                            <span className="text-xs font-black uppercase tracking-[0.3em]">
                                See More About me
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

const SkillItem = ({ icon: Icon, name }: { icon: React.ReactNode; name: string }) => (
    <div className='flex flex-col items-center gap-3 group cursor-pointer'>
        {/* Animated Icon Container */}
        <div className='w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/80 group-hover:bg-[#C3F53C] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(195,245,60,0.4)] transition-all duration-300 transform group-hover:-translate-y-1'>
            {Icon}
        </div>

        {/* Label with technical tracking */}
        <span className='text-[10px] font-black text-white/50 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300'>
            {name}
        </span>
    </div>
);

export default About