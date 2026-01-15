'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { submitContact } from '@/app/api/contactform.js'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleForm(formData:FormData) {
        setIsSubmitting(true)
        const result = await submitContact(formData)
        setIsSubmitting(false)
        
        if (result?.success) {
            setIsSuccess(true)
            setTimeout(() => setIsSuccess(false), 5000)
        }
    }

    return (
        <section className='py-32 px-6' id='contact'>
            <div className='max-w-[1100px] mx-auto'>

                {/* Header Section */}
                <div className='mb-16'>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='flex items-center gap-2 mb-4'
                    >
                        <span className='w-8 h-[1px] bg-[#C3F53C]'></span>
                        <span className='text-[#C3F53C] font-mono text-xs uppercase tracking-[0.4em] font-bold'>Connect</span>
                    </motion.div>
                    <h2 className='text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none'>
                        GET IN <span className='text-white/20 italic'>TOUCH.</span>
                    </h2>
                </div>

                <div className='grid lg:grid-cols-12 gap-12'>

                    {/* LEFT: Info Panels */}
                    <div className='lg:col-span-5 space-y-6'>
                        {[
                            { label: 'Quick Call', val: '+91-8879004828', icon: <FiPhone />, color: '#C3F53C' },
                            { label: 'Email Office', val: 'chintuvishwa2001@gmail.com', icon: <FiMail />, color: '#A186FF' }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className='bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center gap-6 group transition-all hover:border-white/20'
                            >
                                <div className='text-3xl' style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p className='text-[10px] uppercase tracking-widest text-white/40 mb-1'>{item.label}</p>
                                    <p className='text-lg font-bold text-white group-hover:text-[#C3F53C] transition-colors break-all'>
                                        {item.val}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        <div className='p-8 rounded-3xl border border-dashed border-white/10 flex items-center justify-between'>
                            <span className='text-xs font-mono text-white/40 uppercase tracking-widest'>Status</span>
                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-[#C3F53C] animate-ping'></span>
                                <span className='text-white font-bold text-xs uppercase tracking-widest'>Available for Q1 2026</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Modern Form */}
                    <div className='lg:col-span-7 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden'>
                        <div className='absolute -top-24 -right-24 w-64 h-64 bg-[#A186FF] blur-[120px] opacity-10 pointer-events-none'></div>

                        {isSuccess ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className='h-full flex flex-col items-center justify-center text-center py-12'
                            >
                                <FiCheckCircle className='text-[#C3F53C] text-6xl mb-4' />
                                <h3 className='text-white text-2xl font-black uppercase tracking-widest'>Message Saved</h3>
                                <p className='text-white/40 mt-2 font-mono text-sm uppercase'>Stored in MongoDB</p>
                            </motion.div>
                        ) : (
                            <form action={handleForm} className='relative z-10 space-y-6'>
                                <div className='grid md:grid-cols-2 gap-6'>
                                    <div className='space-y-2'>
                                        <label className='text-[10px] font-bold text-white/40 uppercase tracking-widest ml-2'>Name</label>
                                        <input 
                                            name='name' 
                                            type="text" 
                                            className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#C3F53C] text-white transition-all' 
                                            placeholder='John Doe' 
                                            required
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <label className='text-[10px] font-bold text-white/40 uppercase tracking-widest ml-2'>Email</label>
                                        <input 
                                            name='email' 
                                            type="email" 
                                            className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#C3F53C] text-white transition-all' 
                                            placeholder='hello@example.com' 
                                            required 
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label className='text-[10px] font-bold text-white/40 uppercase tracking-widest ml-2'>Message</label>
                                    <textarea 
                                        name="message" 
                                        className='w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-[#C3F53C] text-white transition-all' 
                                        required 
                                        placeholder='Tell me about your project...'
                                    ></textarea>
                                </div>
                                
                                <motion.button 
                                    disabled={isSubmitting}
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='w-full py-5 bg-[#C3F53C] text-black font-black text-sm uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-white disabled:opacity-50'
                                >
                                    {isSubmitting ? 'Saving...' : 'Dispatch Message'} <FiArrowRight />
                                </motion.button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact