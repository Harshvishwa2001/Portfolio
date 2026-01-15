'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCss3, FaGit, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiFramer, SiVercel, SiPostgresql, SiExpress, SiGreensock, SiTypescript } from 'react-icons/si'

const skillIcons = [
    { icon: <FaHtml5 />, label: 'HTML', color: '#E34F26', category: 'Frontend', level: '95%' },
    { icon: <FaCss3 />, label: 'CSS', color: '#1572B6', category: 'Styling', level: '90%' },
    { icon: <SiTailwindcss />, label: 'Tailwind', color: '#06B6D4', category: 'Styling', level: '95%' },
    { icon: <FaJsSquare />, label: 'JS', color: '#F7DF1E', category: 'Logic', level: '92%' },
    { icon: <SiTypescript />, label: 'TypeScript', color: '#3178C6', category: 'Logic', level: '88%' },
    { icon: <FaReact />, label: 'React', color: '#61DAFB', category: 'Library', level: '90%' },
    { icon: <SiNextdotjs />, label: 'Next.js', color: '#FFFFFF', category: 'Framework', level: '85%' },
    { icon: <SiFramer />, label: 'Framer', color: '#0055FF', category: 'Motion', level: '80%' },
    { icon: <SiGreensock />, label: 'GSAP', color: '#88CE02', category: 'Motion', level: '75%' },
    { icon: <FaNodeJs />, label: 'Node.js', color: '#339933', category: 'Backend', level: '80%' },
    { icon: <SiExpress />, label: 'Express', color: '#FFFFFF', category: 'Backend', level: '82%' },
    { icon: <FaJava />, label: 'Java', color: '#007396', category: 'Backend', level: '70%' },
    { icon: <SiPostgresql />, label: 'SQL', color: '#336791', category: 'Database', level: '75%' },
    { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248', category: 'Database', level: '75%' },
    { icon: <SiVercel />, label: 'Vercel', color: '#FFFFFF', category: 'DevOps', level: '90%' },
    { icon: <FaGit />, label: 'Git', color: '#F05032', category: 'Version', level: '88%' },
];

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(skillIcons[3]); // Default to React

    return (
        <section className='bg-[#030303] py-32 px-6' id='skills'>
            <div className='max-w-[1200px] mx-auto'>

                {/* Header with Glassmorphism */}
                <div className='flex flex-col mb-20'>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='text-[#C3F53C] font-mono text-sm tracking-[0.5em] uppercase mb-4'
                    >
                        Technical Arsenal
                    </motion.span>
                    <h2 className='text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8]'>
                        THE <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20'>STACK.</span>
                    </h2>
                </div>

                <div className='grid lg:grid-cols-12 gap-6'>

                    {/* LEFT: Central Focus Card (4 Columns) */}
                    <div className='lg:col-span-4'>
                        <motion.div
                            layout
                            className='sticky top-32 bg-white/5 border border-white/10 rounded-[2.5rem] p-10 h-[500px] flex flex-col justify-between overflow-hidden'
                        >
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeSkill.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className='relative z-10'
                                >
                                    <div
                                        className='text-8xl mb-6 transition-all duration-500'
                                        style={{ color: activeSkill.color, filter: `drop-shadow(0 0 20px ${activeSkill.color}40)` }}
                                    >
                                        {activeSkill.icon}
                                    </div>
                                    <h3 className='text-4xl font-black text-white uppercase mb-2'>{activeSkill.label}</h3>
                                    <p className='text-[#C3F53C] font-mono text-sm uppercase tracking-widest'>{activeSkill.category}</p>

                                    <div className='mt-12 space-y-2'>
                                        <div className='flex justify-between text-xs font-bold text-white/40 uppercase tracking-widest'>
                                            <span>Proficiency</span>
                                            <span>{activeSkill.level}</span>
                                        </div>
                                        <div className='h-[2px] w-full bg-white/5 rounded-full overflow-hidden'>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: activeSkill.level }}
                                                className='h-full bg-[#C3F53C]'
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative Background Blur */}
                            <motion.div
                                animate={{ backgroundColor: activeSkill.color }}
                                className='absolute -bottom-20 -right-20 w-64 h-64 blur-[120px] opacity-20'
                            />
                        </motion.div>
                    </div>

                    {/* RIGHT: Interaction Grid (8 Columns) */}
                    <div className='lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {skillIcons.map((skill, index) => (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setActiveSkill(skill)}
                                whileHover={{ scale: 0.98 }}
                                className={`
                                    cursor-pointer p-8 rounded-[2rem] border transition-all duration-500
                                    ${activeSkill.label === skill.label
                                        ? 'bg-white/10 border-white/20'
                                        : 'bg-white/[0.02] border-white/5 hover:border-white/10'}
                                    flex flex-col items-center justify-center gap-4 group
                                `}
                            >
                                <div
                                    className='text-4xl transition-transform duration-500 group-hover:scale-110'
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <span className='text-white/60 font-bold text-sm uppercase tracking-widest group-hover:text-white'>
                                    {skill.label}
                                </span>
                            </motion.div>
                        ))}

                        {/* Bonus "Hiring" Bento Box */}
                        <div className='md:col-span-2 bg-[#C3F53C] rounded-[2rem] p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative'>
                            <div className='relative z-10'>
                                <h4 className='text-black font-black text-2xl uppercase leading-none'>Always <br /> Learning</h4>
                                <p className='text-black/60 text-xs mt-2 font-bold uppercase tracking-tighter'>Exploring Three.js & AI integrations</p>
                            </div>
                            <div className='text-6xl text-black/10 absolute -right-4 -bottom-4 rotate-12 group-hover:rotate-0 transition-transform'>
                                <SiFramer />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills