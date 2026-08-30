// import "dotenv/config";

// const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
//   method: 'POST',
//   headers: {
//     Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     model: '~openai/gpt-latest',
//     messages: [
//       {
//         role: 'user',
//         content: 'Ye Rohit Negi kun hai',
//       },
//     ],
//   }),
// });

// const result = await response.json();

// console.log(result);
// console.log(result.choices[0].message.content);




const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer <"YOUR API KEY">',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'inclusionai/ling-3.0-flash-fin:free',
    messages: [
      {
        role: 'user',
        content: 'yea  Chandan Kumar Dalai kon he ?',
      },
    ],
  }),
});

const result = await response.json();
console.log(result);
console.log(result.choices[0].message.content);