const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  // let prompt = `Artist: ${req.body.name}\n\nArticle:\n`;
  // const gptResponse = await openai.complete({
  //   engine: 'davinci',
  //   prompt: prompt,
  //   maxTokens: 200,
  //   temperature: 0.7,
  //   topP: 1,
  //   presencePenalty: 0,
  //   frequencyPenalty: 0.5,
  //   bestOf: 1,
  //   n: 1
  //   });
  
  // res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
   res.status(200).json({text: "Hello Next GPT3"})
}

