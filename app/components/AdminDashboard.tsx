'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiUpload, FiDatabase, FiShield, FiLogOut } from 'react-icons/fi'
import ContactDataView from './ContactDataView';
import ProjectDataView from './ProjectDataView';
import ProjectData from './Project Data';

// Sub-components (We'll define these below)

type AdminTab = 'contacts' | 'upload' | 'archive';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<AdminTab>('contacts');

    const tabs = [
        { id: 'contacts', label: 'Contact Details', icon: <FiMail /> },
        { id: 'upload', label: 'Project Upload', icon: <FiUpload /> },
        { id: 'archive', label: 'Project Archive', icon: <FiDatabase /> },
    ];

    return (
        <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
            {/* --- SIDEBAR --- */}
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

                <button className="flex items-center gap-3 px-5 py-4 text-red-500/40 hover:text-red-500 transition-colors uppercase font-mono text-xs">
                    <FiLogOut /> Terminate_Session
                </button>
            </aside>

            {/* --- MAIN CONTENT --- */}
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