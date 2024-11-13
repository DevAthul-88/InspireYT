const { GoogleGenerativeAI } = require("@google/generative-ai");
const { v4: uuidv4 } = require('uuid');


export async function POST(req: Request) {
    try {
        const { prompt, keywords } = await req.json();

        const genAI = new GoogleGenerativeAI(process.env.AI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        if (!prompt) {
            return Response.json("Prompt is required", { status: 400 });
        }

        // Construct the modified prompt to generate descriptions
        let modifiedPrompt = `Generate 10 detailed and engaging YouTube video descriptions based on the following topic: ${prompt}. Provide each description as a separate paragraph in plain text without any numbering, bullet points, or extra formatting.`;

        if (keywords) {
            modifiedPrompt += ` Consider using the following keywords: ${keywords}.`;
        }

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

        // Split the text into individual descriptions and filter empty lines
        const descriptionsArray = text.split('\n').filter(description => description.trim() !== '');

        // Map each description to an object with a unique ID
        const descriptionsWithId = descriptionsArray.map(description => ({
            description,
            id: uuidv4()
        }));

        return Response.json({ ideas: descriptionsWithId }, { status: 200 });

    } catch (error) {
        console.error("Error generating content:", error);
        return new Response(null, { status: 500 });
    }
}