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

        // Construct the modified prompt based on the presence of keywords
        let modifiedPrompt = `Generate 10 detailed and engaging YouTube video titles based on the following topic: ${prompt}. Provide only the titles as plain text, no numbering, no extra formatting.`;

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

        // Split the text into individual titles and filter empty lines
        const titlesArray = text.split('\n').filter(title => title.trim() !== '');

        // Map each title to an object with a unique ID
        const titlesWithId = titlesArray.map(title => ({
            title,
            id: uuidv4()
        }));

        return Response.json({ ideas: titlesWithId }, { status: 200 });

    } catch (error) {
        console.error("Error generating content:", error);
        return new Response(null, { status: 500 });
    }
}