"use server"
import mongoose from 'mongoose';
import dbConnect from '../../lib/dbConnect';

// Define Schema inside if not already defined in models folder
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export async function submitContact(formData) {
    try {
        await dbConnect();

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        await Contact.create(data);
        return { success: true };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false };
    }
}

// GET ACTION (New logic to fetch data)
export async function getMessages() {
    try {
        await dbConnect();
        // Fetching messages and converting them to plain objects for the frontend
        const messages = await Contact.find({}).sort({ createdAt: -1 }).lean();

        // Serialize MongoDB _id to string to avoid Next.js warnings
        return JSON.parse(JSON.stringify(messages));
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}