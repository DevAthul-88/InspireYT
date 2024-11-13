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

        // Modify the prompt to request a video script
        const modifiedPrompt = `Generate a plain-text YouTube video script based on the following topic: ${prompt}. Make it detailed, conversational, and structured like a typical video script with introduction, main content, and conclusion.`;

        // Call the AI model to generate content
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

        // Here, we're directly using the generated script
        const script = text;

        // Return the generated script with an ID
        return Response.json(JSON.stringify({ script, id: uuidv4() }), { status: 200 });

    } catch (error) {
        return new Response(null, { status: 500 });
    }
}
