import openRouter from "../config/openRouter.js";

export const generateAIResponse = async ({ model, messages }) => {
  const completion = await openRouter.chat.send({
    chatRequest: {
      model,
      messages,
    },
  });


  //here  '?' used for name?.age  here age exitst ho then read karo warna nahii 
  const aiReply = completion.choices[0]?.message?.content;

  if (!aiReply) {
    throw new Error("AI response is empty");
  }

  const promptTokens = completion.usage?.promptTokens || 0;
  const completionTokens = completion.usage?.completionTokens || 0;

  return {
    aiReply,
    usage: {
      promptTokens,
      completionTokens,
      totalTokens: promptTokens + completionTokens,
    },
  };
};