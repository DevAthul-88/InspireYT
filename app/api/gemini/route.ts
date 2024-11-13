const { GoogleGenerativeAI } = require("@google/generative-ai");
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
    try {

        const { prompt } = await req.json();

        const genAI = new GoogleGenerativeAI(process.env.AI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        if (!prompt) {
            return Response.json("Prompt is required", { status: 400 });
        }

        const modifiedPrompt = `Generate 10 plain-text YouTube video ideas based on the following topic: ${prompt}. Provide only the video ideas as plain text, no numbering, no extra formatting, and make it some long.`;

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

        const ideasArray = text.split('\n').filter(idea => idea.trim() !== '');

        const ideasWithId = ideasArray.map(idea => ({
            idea,
            id: uuidv4()
        }));

        return Response.json(JSON.stringify({ ideas: ideasWithId }), { status: 200 });

    } catch (error) {
        return new Response(null, { status: 500 });
    }
}