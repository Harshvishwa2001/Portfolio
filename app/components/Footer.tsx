'use client'
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='relative bg-[#030303] pt-24 pb-12 px-6 overflow-hidden'>
            {/* Background Decorative Element */}
            <div className='absolute bottom-0 left-0 w-full h-[300px] bg-[radial-gradient(circle_at_50%_100%,#1a152e,transparent_70%)] opacity-50 pointer-events-none' />

            <div className='max-w-[1200px] mx-auto'>
                {/* Upper Section: The Big CTA */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end'>
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className='text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase'
                        >
                            Ready to build <br />
                            <span className='text-[#A186FF]'>the future?</span>
                        </motion.h2>
                        <p className='text-white/40 mt-6 text-lg max-w-md'>
                            Let's collaborate on your next high-performance digital ecosystem.
                        </p>
                    </div>

                    <div className='flex flex-col items-start lg:items-end gap-6'>
                        <a href="mailto:hello@harsh.dev" className='group relative px-10 py-5 bg-[#C3F53C] text-black font-black uppercase tracking-tighter rounded-2xl overflow-hidden'>
                            <span className='relative z-10'>Start a Project</span>
                            <motion.div 
                                whileHover={{ scale: 15 }} 
                                transition={{ duration: 0.5 }}
                                className='absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity' 
                            />
                        </a>
                    </div>
                </div>

                {/* Middle Section: The "Bento" Links */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-white/10 py-12'>
                    {/* Status Card */}
                    <div className='p-8 bg-white/5 rounded-[2rem] border border-white/5 flex flex-col justify-between h-[200px]'>
                        <div className='flex items-center gap-2'>
                            <span className='w-2 h-2 rounded-full bg-[#C3F53C] animate-pulse'></span>
                            <span className='text-[10px] font-bold text-white/40 uppercase tracking-widest'>Status</span>
                        </div>
                        <h3 className='text-xl font-bold text-white uppercase italic'>Available for <br/> Freelance</h3>
                    </div>

                    {/* Navigation Card */}
                    <div className='p-8 bg-white/5 rounded-[2rem] border border-white/5 h-[200px]'>
                        <span className='text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-6'>Explore</span>
                        <div className='grid grid-cols-2 gap-4'>
                            <a href="#about" className='text-white hover:text-[#A186FF] transition-colors'>About</a>
                            <a href="#work" className='text-white hover:text-[#A186FF] transition-colors'>Work</a>
                            <a href="#stack" className='text-white hover:text-[#A186FF] transition-colors'>Stack</a>
                            <a href="#contact" className='text-white hover:text-[#A186FF] transition-colors'>Contact</a>
                        </div>
                    </div>

                    {/* Socials Card */}
                    <div className='p-8 bg-[#A186FF] rounded-[2rem] flex flex-col justify-between h-[200px] group cursor-pointer'>
                        <span className='text-[10px] font-bold text-black/40 uppercase tracking-widest'>Connect</span>
                        <div className='flex gap-4'>
                            <FaLinkedin size={24} className='text-black hover:scale-110 transition-transform' />
                            <FaGithub size={24} className='text-black hover:scale-110 transition-transform' />
                            <FaTwitter size={24} className='text-black hover:scale-110 transition-transform' />
                            <FaInstagram size={24} className='text-black hover:scale-110 transition-transform' />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='flex flex-col md:flex-row justify-between items-center mt-12 gap-6'>
                    <div className='flex items-center gap-4'>
                        <div className='text-2xl font-black text-white italic tracking-tighter uppercase'>
                            Harsh <span className='text-[#A186FF]'>Dev</span>
                        </div>
                        <span className='text-white/10'>|</span>
                        <p className='text-[10px] text-white/30 uppercase tracking-[0.2em]'>
                            &copy; {year || '2026'} Engineered from Mumbai
                        </p>
                    </div>

                    <button 
                        onClick={scrollToTop}
                        className='w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#A186FF] transition-all group'
                    >
                        <FaArrowUp className='group-hover:-translate-y-1 transition-transform' />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer