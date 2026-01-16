"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiTerminal, FiShield, FiCpu } from 'react-icons/fi'

const Resume = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-40" id='resume'>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group bg-[#080808] border border-white/5 rounded-[3rem] overflow-hidden"
            >
                {/* 1. CYBERNETIC BACKGROUND ELEMENTS */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>
                
                {/* Animated Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div 
                        animate={{ y: ["0%", "100%", "0%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C3F53C]/30 to-transparent shadow-[0_0_15px_#C3F53C]"
                    />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* 2. LEFT CONSOLE: SYSTEM SPECS */}
                    <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-[#C3F53C]" />
                                </div>
                                <span className="text-white/20 font-mono text-[10px] tracking-[0.3em] uppercase">Status: System_Ready</span>
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                                TECH_<br />
                                <span className="text-[#C3F53C] italic">MANIFESTO.</span>
                            </h2>
                            
                            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest leading-relaxed max-w-sm">
                                Accessing the full architectural blueprint of full-stack ecosystems, modular engines, and optimized deployment logs.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div className="flex flex-col">
                                <span className="text-white/20 font-mono text-[8px] uppercase tracking-widest mb-1">Last_Updated</span>
                                <span className="text-white font-mono text-xs italic">Jan_2026</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/20 font-mono text-[8px] uppercase tracking-widest mb-1">Encrypted</span>
                                <span className="text-[#A186FF] font-mono text-xs italic">AES_256_BIT</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. RIGHT CONSOLE: ACTION ZONE */}
                    <div className="p-12 lg:p-20 bg-white/[0.01] flex flex-col items-center justify-center relative">
                        {/* Central Decorative Icon */}
                        <div className="relative mb-12">
                            <div className="absolute inset-0 bg-[#C3F53C]/20 blur-3xl rounded-full animate-pulse" />
                            <div className="relative w-24 h-24 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <FiCpu className="text-[#C3F53C] text-4xl" />
                            </div>
                        </div>

                        <div className="space-y-6 w-full text-center">
                            <a
                                href="/Harsh Exp Resume.pdf"
                                download
                                className="relative overflow-hidden w-full group/btn inline-flex items-center justify-center gap-4 bg-[#C3F53C] text-black px-8 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_20px_40px_rgba(195,245,60,0.1)]"
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                                <FiDownload className="text-xl animate-bounce" />
                                Download my resume
                            </a>

                            <div className="flex justify-center gap-6">
                                <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] uppercase tracking-tighter">
                                    <FiShield className="text-[#C3F53C]/40" /> Secure_Protocol
                                </div>
                                <div className="flex items-center gap-2 text-white/20 font-mono text-[9px] uppercase tracking-tighter">
                                    <FiTerminal className="text-[#C3F53C]/40" /> Root_Access
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default Resume