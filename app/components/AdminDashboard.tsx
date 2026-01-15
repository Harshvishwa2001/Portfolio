'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { FiMail, FiUpload, FiDatabase, FiShield, FiLogOut, FiLock, FiKey } from 'react-icons/fi'
import ContactDataView from './ContactDataView';
import ProjectDataView from './ProjectDataView';
import ProjectData from './Project Data';

type AdminTab = 'contacts' | 'upload' | 'archive';

export default function AdminDashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<AdminTab>('contacts');
    const router = useRouter();

    // --- SESSION CONFIG ---
    const SESSION_DURATION = 6 * 60 * 60 * 1000; // 6 Hours in milliseconds

    useEffect(() => {
        const sessionData = localStorage.getItem('admin_session');
        if (sessionData) {
            const { timestamp } = JSON.parse(sessionData);
            const now = new Date().getTime();

            if (now - timestamp < SESSION_DURATION) {
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem('admin_session');
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, );

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Replace 'your_password' with your actual secure password
        if (password === 'admin123') {
            const session = {
                loggedIn: true,
                timestamp: new Date().getTime()
            };
            localStorage.setItem('admin_session', JSON.stringify(session));
            setIsLoggedIn(true);
        } else {
            alert("ACCESS DENIED: INVALID CREDENTIALS");
        }
    };

    const handleLogout = () => {
        if (confirm("TERMINATE SECURE SESSION?")) {
            localStorage.removeItem('admin_session');
            setIsLoggedIn(false);
            router.push('/'); 
        }
    };

    // --- LOADING STATE ---
    if (isLoggedIn === null) return <div className="h-screen bg-[#050505] flex items-center justify-center font-mono text-[#C3F53C]">INITIALIZING_SYSTEM...</div>

    // --- LOGIN UI ---
    if (!isLoggedIn) {
        return (
            <div className="h-screen bg-[#050505] flex items-center justify-center p-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-[#0A0A0A] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl"
                >
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-[#C3F53C]/10 rounded-full flex items-center justify-center mb-4">
                            <FiLock className="text-[#C3F53C] text-2xl" />
                        </div>
                        <h2 className="text-2xl font-black uppercase tracking-tighter italic">Admin_Auth</h2>
                        <p className="text-zinc-500 font-mono text-[10px] tracking-widest mt-2 uppercase">Secure Terminal Access</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <FiKey className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600" />
                            <input 
                                type="password" 
                                placeholder="ENTER ACCESS KEY"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/5 py-4 pl-14 pr-6 rounded-2xl outline-none focus:border-[#C3F53C]/50 transition-all font-mono text-sm"
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#C3F53C] text-black py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
                            Initialize_Session
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // --- MAIN DASHBOARD UI (The code you already had) ---
    const tabs = [
        { id: 'contacts', label: 'Contact Details', icon: <FiMail /> },
        { id: 'upload', label: 'Project Upload', icon: <FiUpload /> },
        { id: 'archive', label: 'Project Archive', icon: <FiDatabase /> },
    ];

    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
            <aside className="w-72 border-r border-white/5 bg-[#0A0A0A] p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <FiShield className="text-[#C3F53C] text-2xl" />
                    <span className="font-black tracking-tighter uppercase text-lg">Control_Center</span>
                </div>

                <nav className="flex-1 space-y-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as AdminTab)}
                            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                                activeTab === tab.id 
                                ? 'bg-[#C3F53C] text-black font-bold' 
                                : 'text-zinc-500 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {tab.icon}
                            <span className="text-sm uppercase tracking-wider">{tab.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="pt-6 border-t border-white/5">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-5 py-4 text-zinc-600 hover:text-red-500 hover:bg-red-500/5 rounded-2xl transition-all duration-300 uppercase font-mono text-[10px] tracking-widest group">
                        <FiLogOut className="group-hover:rotate-180 transition-transform duration-500" /> 
                        Terminate_Session
                    </button>
                </div>
            </aside>

            <main className="flex-1 relative overflow-y-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                    >
                        {activeTab === 'contacts' && <ContactDataView />}
                        {activeTab === 'upload' && <ProjectDataView />}
                        {activeTab === 'archive' && <ProjectData />}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}