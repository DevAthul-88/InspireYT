import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'; // If you're using Google Generative AI
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(process.env.AI_KEY); // Initialize GoogleGenerativeAI with your key
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Model setup

        // Create a prompt for generating tags
        const modifiedPrompt = `Generate a list of relevant YouTube video tags for the following video topic: ${prompt}. Provide only the tags as a comma-separated list.`;

        // Send the request to the language model
        const result = await model.generateContent(modifiedPrompt);

        const {
            candidates: [
                {
                    content: {
                        parts: [{ text }]
                    }
                }
            ]
        } = result?.response;

        // Split the generated text into an array of tags
        const tagsArray = text.split(',').map(tag => tag.trim());

        const tagsWithId = tagsArray.map(tag => ({
            tag,
            id: uuidv4()
        }));

        return NextResponse.json({ tags: tagsArray }, { status: 200 });
    } catch (error) {
        console.error('Error generating tags:', error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
