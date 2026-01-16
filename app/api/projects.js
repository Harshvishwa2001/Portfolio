"use server"
import mongoose from 'mongoose';
import { revalidatePath } from 'next/cache';

// 1. Database Connection
const MONGODB_URI = process.env.MONGODB_URL;

async function dbConnect() {
    if (mongoose.connection.readyState >= 1) return;
    if (!MONGODB_URI) throw new Error("MONGODB_URL is not defined in environment variables");
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

// GET ALL
export async function getProjects() {
    await dbConnect();
    const data = await Project.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(data));
}

// CREATE
export async function submitProject(formData) {
    try {
        await dbConnect();
        await Project.create(formData);
        revalidatePath('/admin'); 
        revalidatePath('/'); // Refresh public view too
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

// UPDATE (EDIT)
export async function updateProject(id, formData) {
    try {
        await dbConnect();
        
        // Find by ID and update with new data
        const updatedProject = await Project.findByIdAndUpdate(
            id, 
            { $set: formData }, 
            { new: true } // returns the modified document
        );

        if (!updatedProject) {
            return { success: false, error: "Project not found" };
        }

        revalidatePath('/admin');
        revalidatePath('/'); 
        return { success: true };
    } catch (error) {
        console.error("Update Error:", error);
        return { success: false };
    }
}

// DELETE
export async function deleteProject(id) {
    try {
        await dbConnect();
        await Project.findByIdAndDelete(id);
        revalidatePath('/admin');
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.log(error)
        return { success: false };
    }
}