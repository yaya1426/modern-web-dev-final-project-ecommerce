import OpenAI from "openai";

const openai = new OpenAI();

export const PromptGPTChat = async (query: string) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices;
};
