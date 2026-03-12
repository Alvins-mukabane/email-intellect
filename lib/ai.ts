import OpenAI from 'openai';

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY, // Ensure this is in your .env
  baseURL: "https://api.groq.com/openai/v1",
});

export async function analyzeEmailContent(text: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are an AI Email Agent. Extract a 1-sentence summary, a priority (High, Medium, Low), and a list of action items. Return only JSON.`
      },
      { role: "user", content: text }
    ],
    response_format: { type: "json_object" }
  });

  const content = response.choices[0].message.content;
  return JSON.parse(content || "{}");
}
