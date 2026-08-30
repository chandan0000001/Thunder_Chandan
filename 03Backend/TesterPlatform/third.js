import { OpenRouter } from '@openrouter/sdk';
import "dotenv/config";
import readlineSync from 'readline-sync';



const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});



const History = [];

async function chatApp(question) {
  const completion = await client.chat.send({
    chatRequest:{
    // model: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',
    model: 'minimax/minimax-m3:free',
    messages: [
        ...History,
        {
          role:"user",
          content:question
        }

    ],
  }
  });

  History.push({role: "user" , content: question})
  History.push({role: "assistant" , content: completion.choices[0].message.content})
  console.log(completion.choices[0].message.content);
}



while(true){

  const question = readlineSync.question("Fuck you Ask me anything ? ")
  await chatApp(question);
}