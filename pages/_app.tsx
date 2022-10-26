import "../styles/globals.scss"
import "@aws-amplify/ui-react/styles.css"
import type { AppProps } from "next/app"
import { Amplify } from "aws-amplify"
import config from "../src/aws-exports"
Amplify.configure(config)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
