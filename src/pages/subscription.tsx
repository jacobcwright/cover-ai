/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import {
  Button,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react"
import { Auth, withSSRContext } from "aws-amplify"
import { Router, useRouter } from "next/router"
import { API, graphqlOperation } from "aws-amplify"
import { getCoverCount } from "../graphql/queries"
import Image from "next/image"
import assert from "assert"
import Link from "next/link"
import Modal from "../components/Modal"
import SideNav from "../components/SideNav"
import NavBar from "../components/NavBar"

const Subscription: NextPage = () => {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  const [name, setName] = useState("")

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user])

  const logout = async () => {
    localStorage.clear()
    await Auth.signOut()
    router.push("/login")
  }

  return (
    <div className="h-full w-full flex flex-row relative overflow-hidden">
      <Head>
        <title>Brainiac</title>
        <meta
          name="description"
          content="Create personalized cover letters using AI"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SideNav />
      <div className="w-full overflow-y-auto md:ml-[16vw] xl:ml-[12vw]">
        <NavBar logout={logout} />

        <main className="min-h-[100vh] px-8 md:px-16 py-16 flex flex-col justify-center items-center w-full"></main>
      </div>
    </div>
  )
}

export default Subscription

// export async function getServerSideProps(context: any) {
//   const { Auth } = withSSRContext(context)
//   try {
//     const user = await Auth.currentAuthenticatedUser()
//     return {
//       user,
//     }
//   } catch (err) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     }
//   }
// }
