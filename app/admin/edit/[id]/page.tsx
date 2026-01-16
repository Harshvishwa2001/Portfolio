import { getProjects } from "@/app/api/projects";
import ProjectUploader from "@/app/components/ProjectDataView";
import Link from "next/link";
import { FiArrowLeft, FiShield, FiActivity } from "react-icons/fi";

export default async function EditProjectPage({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;
    const allProjects = await getProjects();
    const projectToEdit = allProjects.find((p: any) => p._id === id);

    if (!projectToEdit) {
        return (
            <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white font-mono">
                <div className="w-16 h-16 border border-red-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <FiShield className="text-red-500" size={32} />
                </div>
                <h2 className="text-red-500 text-2xl font-black tracking-tighter uppercase italic">
                    ACCESS_DENIED: NULL_REFERENCE
                </h2>
                <p className="text-zinc-600 text-[10px] mt-2 tracking-[0.3em]">THE REQUESTED INTEL DOES NOT EXIST IN THE ARCHIVE</p>
                <Link href="/admin" className="mt-8 px-6 py-2 border border-zinc-800 text-zinc-400 hover:text-[#C3F53C] hover:border-[#C3F53C] transition-all uppercase text-[10px] tracking-widest">
                    Return to Terminal
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#050505] selection:bg-[#C3F53C] selection:text-black">
            {/* --- TOP NAVIGATION BAR --- */}
            <nav className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
                    <Link 
                        href="/admin" 
                        className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all font-mono text-[10px] uppercase tracking-widest"
                    >
                        <div className="p-2 border border-zinc-800 group-hover:border-[#C3F53C] rounded-lg transition-colors">
                            <FiArrowLeft size={14} />
                        </div>
                        BACK_TO_ARCHIVE
                    </Link>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-end font-mono">
                            <span className="text-[#C3F53C] text-[10px] tracking-widest uppercase flex items-center gap-2">
                                <FiActivity className="animate-pulse" /> SYSTEM_ACTIVE
                            </span>
                            <span className="text-zinc-600 text-[8px] uppercase">ID: {id.slice(0, 12)}...</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- MAIN CONTENT SECTION --- */}
            <div className="max-w-[1400px] mx-auto pt-12 pb-24 px-8">
                {/* Visual Accent */}
                <div className="flex items-center gap-4 mb-2">
                   <div className="h-[1px] w-12 bg-[#C3F53C]"></div>
                   <span className="text-[#C3F53C] font-mono text-[10px] uppercase tracking-[0.5em]">Mode: Reconfiguration</span>
                </div>

                {/* The Form Component */}
                <div className="mt-4">
                    <ProjectUploader 
                        isEditMode={true} 
                        initialData={projectToEdit} 
                    />
                </div>
            </div>

            {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C3F53C]/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full"></div>
            </div>
        </main>
    );
}