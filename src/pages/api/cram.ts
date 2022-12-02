import { AxiosResponse } from "axios"
import { Amplify, API, graphqlOperation } from "aws-amplify"
import config from "../../aws-exports"

Amplify.configure({ ...config, ssr: true })

const stripe = require("stripe")(process.env.STRIPE_API_KEY)
// const endpointSecret = process.env.STRIPE_ENDPOINT

const endpointSecret =
  "whsec_17b4c8caf9a34d5374052cfa76b1d6a27b9ced7a716b69c371cccbecc56799d6"

const handler = async (request: any, response: any) => {
  console.log("in handler")
  console.log("Request body:", request.body)
  console.log("Request header:", request.header)

  const sig = request.headers["stripe-signature"]
  let event
  try {
    event = stripe.webhooks.constructEvent(request.rawBody, sig, endpointSecret)
    console.log(event)
  } catch (err: any) {
    return response.status(400).send(`!Webhook Error: ${err.message}`)
  }

  // Handle the event
  switch (event.type) {
    case "invoice.payment_succeeded":
      const invoice = event.data.object
      response.send(200).json({ message: "Hello World" })
      // Then define and call a function to handle the event invoice.payment_succeeded
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send(200).json({ message: "Hello World" })
}

export default handler
