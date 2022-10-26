// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { Amplify, withSSRContext } from "aws-amplify"
import config from "../../src/aws-exports"
Amplify.configure({ ...config, ssr: true })

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" })
}
