'use client'
import React, { useState } from 'react'
import { submitProject } from '@/app/api/projects'
import { 
    FiPlus, FiGithub,  
    FiImage, FiType, FiTag, FiLink, FiFileText, FiLoader 
} from 'react-icons/fi'
import Image from 'next/image'

const ProjectUploader = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '', 
        description: '', 
        tags: '', 
        imageUrl: '', 
        codeLink: '', 
        launchLink: ''
    });

    // Handles the local image selection and preview
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.imageUrl) return alert("SELECT IMAGE INTEL FIRST");

        setIsSubmitting(true);
        try {
            const res = await submitProject(formData);
            if (res.success) {
                alert("INTEL COMMITTED TO DATABASE");
                setFormData({ title: '', description: '', tags: '', imageUrl: '', codeLink: '', launchLink: '' });
            }
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white p-8 font-sans">
            
            {/* --- HEADER --- */}
            <div className="mb-12 border-b border-white/5 pb-8">
                <h1 className="text-[#C3F53C] text-5xl font-black italic tracking-tighter uppercase">
                    UPLOAD_INTEL
                </h1>
                <p className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] mt-2">
                    PUSH NEW ASSETS TO THE PERMANENT ARCHIVE
                </p>
            </div>

            {/* --- FORM --- */}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">
                
                {/* LEFT COLUMN: VISUALS & IDENTITY */}
                <div className="space-y-8">
                    {/* Image Selector Section */}
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            <FiImage/> PROJECT SNAPSHOT
                        </label>
                        
                        <div className="relative group aspect-video">
                            {/* Hidden actual file input */}
                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                            />
                            
                            {/* Visual UI for the file input */}
                            <div className="w-full h-full border-2 border-dashed border-white/10 bg-white/[0.02] rounded-[2.5rem] flex flex-col items-center justify-center gap-4 group-hover:border-[#C3F53C]/40 transition-all overflow-hidden relative">
                                {formData.imageUrl ? (
                                    <Image fill src={formData.imageUrl} className="w-full h-full object-cover" alt="Preview" />
                                ) : (
                                    <div className="text-center">
                                        <FiImage size={48} className="mx-auto text-zinc-800 group-hover:text-zinc-600 transition-colors" />
                                        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] mt-4">
                                            CLICK OR DRAG RAW IMAGE
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            <FiType/> PROJECT TITLE
                        </label>
                        <input 
                            required 
                            className="w-full bg-white/[0.03] border border-white/5 p-6 rounded-2xl outline-none focus:border-[#C3F53C]/50 text-xl font-bold uppercase tracking-tight text-white placeholder:text-zinc-800" 
                            placeholder="CORE_SYSTEM_V1" 
                            value={formData.title} 
                            onChange={e => setFormData({...formData, title: e.target.value})} 
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: METADATA */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            <FiTag/> TECH STACK
                        </label>
                        <input 
                            className="w-full bg-white/[0.03] border border-white/5 p-6 rounded-2xl outline-none focus:border-[#C3F53C]/50 text-[#C3F53C] font-mono placeholder:text-zinc-800" 
                            placeholder="REACT, TYPESCRIPT, TAILWIND" 
                            value={formData.tags} 
                            onChange={e => setFormData({...formData, tags: e.target.value})} 
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                <FiGithub/> SOURCE_CODE
                            </label>
                            <input 
                                className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-[#C3F53C]/50 text-zinc-400 text-xs" 
                                placeholder="GITHUB_URL" 
                                value={formData.codeLink} 
                                onChange={e => setFormData({...formData, codeLink: e.target.value})} 
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                <FiLink/> DEPLOY_LINK
                            </label>
                            <input 
                                className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-[#C3F53C]/50 text-zinc-400 text-xs" 
                                placeholder="LIVE_URL" 
                                value={formData.launchLink} 
                                onChange={e => setFormData({...formData, launchLink: e.target.value})} 
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                            <FiFileText/> LOG_DESCRIPTION
                        </label>
                        <textarea 
                            className="w-full bg-white/[0.03] border border-white/5 p-6 rounded-2xl outline-none focus:border-[#C3F53C]/50 h-40 resize-none text-zinc-400 leading-relaxed" 
                            placeholder="ENTER PROJECT SPECIFICATIONS..." 
                            value={formData.description} 
                            onChange={e => setFormData({...formData, description: e.target.value})} 
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#C3F53C] text-black py-6 rounded-[2rem] font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? <><FiLoader className="animate-spin" /> COMMITTING...</> : <><FiPlus/> COMMIT_TO_TERMINAL</>}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProjectUploader;