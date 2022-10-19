import { AxiosResponse } from "axios"
import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai"
const configuration = new Configuration({
  organization: "org-fhbvWxvrrIWqdPztw6tQgwAA",
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

// create handler function that calls the openai api and returns the response
const handler = async (req: any, res: any) => {
  const { prompt } = req.body
  try {
    const response: AxiosResponse<CreateCompletionResponse, any> =
      await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        max_tokens: 100,
        temperature: 0.5,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
        presence_penalty: 0,
        frequency_penalty: 0,
        best_of: 1,
        user: "",
      })
    res.status(200).json(response.data)
  } catch (error) {
    console.log(error)
  }
}

export default handler
