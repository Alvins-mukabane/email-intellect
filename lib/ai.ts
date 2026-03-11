import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeEmailContent(text: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are an AI Email Agent. Analyze the email and return a JSON object with:
        - summary: 1 short sentence
        - priority: "High", "Medium", or "Low"
        - action_items: An array of strings
        - opportunity: boolean (true if it's a job/internship/deal)`
      },
      { role: "user", content: text }
    ],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content || "{}");
}
