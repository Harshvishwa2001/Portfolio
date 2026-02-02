'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiLock, FiMail, FiArrowRight, FiAlertCircle, FiShield } from 'react-icons/fi'
import AdminDashboard from '../components/AdminDashboard'
import toast from 'react-hot-toast'

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isCheckingAuth, setIsCheckingAuth] = useState(true)

    // Check if user was already logged in on page load
    useEffect(() => {
        const authStatus = localStorage.getItem('admin_auth')
        if (authStatus === 'true') {
            setIsLoggedIn(true)
        }
        setIsCheckingAuth(false)
    }, [])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            if (email === 'harshvishwa2001@gmail.com' && password === 'Harsh@9869788464') {
                localStorage.setItem('admin_auth', 'true') 
                setIsLoggedIn(true)
                toast.success("ACCESS GRANTED: WELCOME ADMIN");
            } else {
                setError(('Invalid email or password. Access denied.'))
                toast.success("Invalid email or password. Access denied.");
            }
            setIsLoading(false)
        }, 1000)
    }

    if (isCheckingAuth) return <div className="min-h-screen bg-[#09090b]" />

    if (isLoggedIn) return <AdminDashboard  />

    return (
        <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-6 font-sans text-white">
            {/* ... Your existing login UI ... */}
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-[400px]">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-white/5">
                        <FiShield className="text-black text-2xl" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-zinc-100">Console Login</h1>
                    <p className="text-zinc-500 text-sm mt-1">Identify yourself to access the database</p>
                </div>

                <div className="bg-[#121214] border border-zinc-800 rounded-2xl shadow-2xl p-8 overflow-hidden relative">
                    <form onSubmit={handleLogin} className="space-y-5 relative z-10">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-widest">Email address</label>
                            <div className="relative group">
                                <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 text-zinc-100 transition-all text-sm" 
                                    placeholder="admin@gmail.com" 
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-widest">Password</label>
                            <div className="relative group">
                                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" />
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 text-zinc-100 transition-all text-sm" 
                                    placeholder="••••••••" 
                                    required 
                                />
                            </div>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg flex items-center gap-2 text-red-400 text-xs font-medium">
                                    <FiAlertCircle className="shrink-0" /> {error}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button type="submit" disabled={isLoading} className="w-full py-3 bg-zinc-100 text-zinc-950 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white active:scale-[0.98] transition-all disabled:opacity-50 text-sm shadow-md">
                            {isLoading ? <div className="w-5 h-5 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" /> : <>Enter Console <FiArrowRight /></>}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}