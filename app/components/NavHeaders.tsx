"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// const navbarlink = [
//     { title: "About", path: "#about" },
//     { title: "Projects", path: "#projects" },
//     { title: "Experience", path: "#experience" },
// ];

const NavHeaders = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const togglenav = () => setNav(!nav);

    return (
        <header className='fixed top-0 left-0 w-full z-[100] px-6 py-8 transition-all duration-500'>
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`max-w-[1100px] mx-auto flex justify-between items-center px-6 py-3 rounded-[2rem] border transition-all duration-500 ${
                    scrolled 
                    ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                    : 'bg-transparent border-transparent'
                }`}
            >
                
                {/* 1. Futuristic Logo */}
                <Link href="/" className='group flex items-center gap-3'>
                    <div className='relative w-10 h-10 bg-[#A186FF] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(161,134,255,0.4)] transition-transform duration-500 group-hover:rotate-[15deg]'>
                        <span className='text-black font-black text-lg'>H</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-white font-black tracking-tighter leading-none text-xl uppercase'>Harsh Dev</span>
                        <span className='text-[#C3F53C] font-mono text-[10px] tracking-[0.2em] uppercase'>Architect</span>
                    </div>
                </Link>

                {/* 2. Desktop Navigation with Animated Underline */}
                {/* <nav className='hidden md:block'>
                    <ul className='flex items-center gap-10'>
                        {navbarlink.map((link, index) => (
                            <li key={index} className="relative group">
                                <Link href={link.path} className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">
                                    {link.title}
                                </Link>
                                <motion.div 
                                    className="absolute -bottom-1 left-0 h-[2px] bg-[#A186FF] w-0 group-hover:w-full transition-all duration-300"
                                    layoutId="underline"
                                />
                            </li>
                        ))}
                    </ul>
                </nav> */}

                {/* 3. Action Button (The "Glitch" Style) */}
                <div className='flex items-center gap-4'>
                    <Link href="#contact" className='hidden md:flex px-6 py-2.5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#C3F53C] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[#C3F53C]/40'>
                        Let's Talk
                    </Link>

                    {/* Mobile Toggle */}
                    <button onClick={togglenav} className='md:hidden p-2 text-white bg-white/5 rounded-full border border-white/10'>
                        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* 4. Mobile Menu Overlay */}
                <AnimatePresence>
                    {nav && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            className='absolute top-20 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 z-40 md:hidden shadow-2xl'
                        >
                            <ul className='flex flex-col items-center gap-8'>
                                {/* {navbarlink.map((link, index) => (
                                    <Link key={index} href={link.path} onClick={() => setNav(false)} className="text-3xl font-black text-white uppercase italic hover:text-[#A186FF]">
                                        {link.title}
                                    </Link>
                                ))} */}
                                <hr className='w-full border-white/10' />
                                <Link href="#contact" onClick={() => setNav(false)} className='w-full py-4 bg-[#A186FF] text-black text-center font-black rounded-2xl'>
                                    HIRE ME
                                </Link>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
};

export default NavHeaders;