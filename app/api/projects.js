"use server"
import mongoose from 'mongoose';
import { revalidatePath } from 'next/cache';

// 1. Database Connection
const MONGODB_URI = process.env.MONGODB_URL;

async function dbConnect() {
    if (mongoose.connection.readyState >= 1) return;
    return mongoose.connect(MONGODB_URI);
}

// 2. Schema Definition
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    tags: String,
    imageUrl: String,
    codeLink: String,
    launchLink: String,
    createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

// 3. Actions
export async function getProjects() {
    await dbConnect();
    const data = await Project.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(data));
}

export async function submitProject(formData) {
    try {
        await dbConnect();
        await Project.create(formData);
        revalidatePath('/admin'); // Refreshes the cache
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

export async function deleteProject(id) {
    try {
        await dbConnect();
        await Project.findByIdAndDelete(id);
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}