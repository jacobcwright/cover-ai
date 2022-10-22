import { AxiosResponse } from "axios"
import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai"
const configuration = new Configuration({
  organization: "org-fhbvWxvrrIWqdPztw6tQgwAA",
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

// create handler function that calls the openai api and returns the response
const handler = async (req: any, res: any) => {
  // get the prompt from the request body
  const data = JSON.parse(req.body).data
  const prompt =
    "Write a professional cover letter for " +
    data.name +
    " applying for the " +
    data.jobTitle +
    " position at " +
    data.company +
    ". Here is their resume: " +
    data.resume +
    ". Here is the job description: " +
    data.jobDescription +
    ":"

  if (!prompt) return res.status(400).json({ error: "No prompt provided" })

  try {
    const response: AxiosResponse<CreateCompletionResponse, any> =
      await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 2000,
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
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e })
  }
}
export default handler
