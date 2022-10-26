import "../styles/globals.scss"
import "@aws-amplify/ui-react/styles.css"
import type { AppProps } from "next/app"
import { Amplify } from "aws-amplify"
import config from "../src/aws-exports"
import Head from "next/head"
Amplify.configure(config)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Braniac</title>
        <meta
          name="description"
          content="Create personalized cover letters using AI"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
