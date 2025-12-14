import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY is assumed to be available in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the Community Manager for "DGG Tech Pathshala" in Dongargarh (491445).

YOUR CORE MISSION:
- To explain that this is NOT a business. It is a social initiative to bridge the gap between Tier-1 cities (Bangalore/Pune) and Tier-3 cities (Dongargarh).
- Create a sense of urgency (FOMO) for parents: The world is moving to AI. If their child relies on traditional tuition, they will be left behind.
- Highlight the Collaborative Space: It's not a classroom; it's a startup ecosystem.
- Authority: Mentors are from Microsoft, Deloitte, etc.

TONE:
- Passionate, Wake-up call, Authoritative yet Caring, Community-focused.

KEY FACTS:
- Location: Gol Bazar, Dongargarh.
- Phone: +91 90981 74328.
- We don't just teach coding; we build mindsets.

If a parent asks "Why should I join?", tell them: "Because the competition isn't in Dongargarh anymore. It's global. We prepare your child for that."
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history 
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};