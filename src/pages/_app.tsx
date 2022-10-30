import "../styles/globals.scss"
import "@aws-amplify/ui-react/styles.css"
import type { AppProps } from "next/app"
import { Amplify } from "aws-amplify"
import config from "../aws-exports"
import Head from "next/head"
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react"
import { useRouter } from "next/router"
import ProtectedRoute from "../components/ProtectedRoute"
Amplify.configure(config)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const noAuthRequired = ["/login", "/register"]
  return (
    <>
      <Head>
        <title>Brainiac</title>
        <meta
          name="description"
          content="Create personalized cover letters using AI"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AmplifyProvider>
        <Authenticator.Provider>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Authenticator.Provider>
      </AmplifyProvider>
    </>
  )
}

export default MyApp
