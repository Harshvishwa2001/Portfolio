'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getMessages } from '@/app/api/contactform' // Ensure deleteMessage exists in your API
import { FiMail, FiTrash2, FiUser, FiCalendar, FiArrowRight } from 'react-icons/fi'

interface Contact {
    _id: string;
    name: string;
    email: string;
    message: string;
    createdAt: string;
}

export default function ContactDataView() {
    const [data, setData] = useState<Contact[]>([]);
    const [selected, setSelected] = useState<Contact | null>(null);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);
        const res = await getMessages();
        setData(res);
        if (res.length > 0) setSelected(res[0]);
        setLoading(false);
    };

    useEffect(() => { loadData(); }, []);

    const handleDelete = async (id: string) => {
        if (confirm("TERMINATE THIS INBOUND MESSAGE?")) {
            // Assume you have a deleteMessage function in your API
            // const res = await deleteMessage(id); 
            // if (res.success) loadData();
            
            // For now, UI filter:
            setData(prev => prev.filter(item => item._id !== id));
            if (selected?._id === id) setSelected(data[0] || null);
        }
    };

    if (loading) return (
        <div className="h-full flex items-center justify-center bg-[#050505]">
            <div className="text-[#C3F53C] font-mono text-xs tracking-[0.5em] animate-pulse uppercase">
                Synchronizing_Inbound_Intel...
            </div>
        </div>
    );

    return (
        <div className="flex h-full bg-[#050505] overflow-hidden border-t border-white/5">
            {/* --- LEFT: INBOX LIST --- */}
            <div className="w-[380px] border-r border-white/5 flex flex-col bg-[#0A0A0A]">
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <h2 className="text-white font-black uppercase tracking-tighter text-sm">Inbound_Queue</h2>
                    <span className="bg-white/10 text-zinc-500 text-[9px] px-2 py-0.5 rounded-full font-mono">{data.length}</span>
                </div>
                
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {data.map((item) => (
                        <div 
                            key={item._id} 
                            onClick={() => setSelected(item)} 
                            className={`p-6 border-b border-white/5 cursor-pointer transition-all relative group ${
                                selected?._id === item._id ? 'bg-[#C3F53C]' : 'hover:bg-white/[0.02]'
                            }`}
                        >
                            <div className="flex justify-between items-start mb-1">
                                <p className={`font-bold uppercase tracking-tight text-sm ${selected?._id === item._id ? 'text-black' : 'text-white'}`}>
                                    {item.name}
                                </p>
                                <span className={`text-[9px] font-mono ${selected?._id === item._id ? 'text-black/60' : 'text-zinc-600'}`}>
                                    {new Date(item.createdAt).toLocaleDateString('en-GB')}
                                </span>
                            </div>
                            <p className={`text-xs truncate italic ${selected?._id === item._id ? 'text-black/70' : 'text-zinc-500'}`}>
                                {item.message}
                            </p>
                            
                            {selected?._id === item._id && (
                                <motion.div layoutId="indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- RIGHT: MESSAGE DECRYPTOR --- */}
            <div className="flex-1 relative bg-[#050505]">
                <AnimatePresence mode="wait">
                    {selected ? (
                        <motion.div 
                            key={selected._id}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="p-16 max-w-4xl"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <div className="flex items-center gap-3 text-[#C3F53C] font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                                        <FiMail /> Source_Verified
                                    </div>
                                    <h1 className="text-7xl font-black uppercase tracking-tighter leading-none text-white italic">
                                        {selected.name}
                                    </h1>
                                    <p className="text-zinc-500 mt-4 font-mono text-lg lowercase tracking-tight">
                                        {selected.email}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => handleDelete(selected._id)}
                                    className="p-4 rounded-full border border-white/10 text-zinc-700 hover:text-red-500 hover:border-red-500 transition-all"
                                >
                                    <FiTrash2 size={24} />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
                                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2 flex items-center gap-2"><FiCalendar/> Transmission_Date</p>
                                    <p className="text-white font-bold">{new Date(selected.createdAt).toLocaleString()}</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
                                    <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2 flex items-center gap-2"><FiUser/> Intel_UID</p>
                                    <p className="text-white font-mono text-xs">{selected._id}</p>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#C3F53C]/20 to-transparent rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition" />
                                <div className="relative p-12 bg-white/[0.03] border border-white/10 rounded-[3rem] backdrop-blur-xl">
                                    <div className="absolute -top-3 left-10 bg-[#C3F53C] text-black text-[10px] font-black px-4 py-1 rounded-full italic tracking-widest">
                                        DECRYPTED_MESSAGE
                                    </div>
                                    <p className="text-2xl leading-relaxed text-zinc-300 italic font-medium">
                                       {selected.message}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="mt-12 flex gap-4">
                                <a 
                                    href={`mailto:${selected.email}`} 
                                    className="px-8 py-4 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest hover:bg-[#C3F53C] transition-all flex items-center gap-3"
                                >
                                    Respond_Directly <FiArrowRight />
                                </a>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="h-full flex items-center justify-center text-zinc-900 font-black text-8xl uppercase tracking-tighter opacity-10 select-none">
                            Inbox_Empty
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}