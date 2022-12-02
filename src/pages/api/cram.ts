import { AxiosResponse } from "axios"
import { Amplify, API, graphqlOperation } from "aws-amplify"
import config from "../../aws-exports"

Amplify.configure({ ...config, ssr: true })

// configure stripe

const handler = async (req: any, res: any) => {
  res.send(200).json({ message: "Hello World" })
}

export default handler
