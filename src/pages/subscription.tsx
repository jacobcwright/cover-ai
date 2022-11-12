/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import {
  Button,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react"
import { Amplify, Auth, withSSRContext } from "aws-amplify"
import { Router, useRouter } from "next/router"
import { API, graphqlOperation } from "aws-amplify"
import { getCoverCount } from "../graphql/queries"
import Image from "next/image"
import assert from "assert"
import Link from "next/link"
import Modal from "../components/Modal"
import SideNav from "../components/SideNav"
import NavBar from "../components/NavBar"
import config from "../aws-exports"
Amplify.configure({ ...config, ssr: true })

const Subscription: NextPage = () => {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  const [name, setName] = useState("")

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then()
      .catch(() => {
        router.push("/login")
      })
  }, [])

  const logout = async (event: React.MouseEvent) => {
    event.preventDefault()
    setTimeout(async () => {
      try {
        await Auth.signOut()
        window.location.href = "/login"
      } catch (error) {
        console.log("error signing out: ", error)
        event.preventDefault()
      }
    })
  }

  return (
    <div className="h-full w-full flex flex-row relative overflow-hidden">
      <SideNav />
      <div className="w-full overflow-y-auto md:ml-[16vw] xl:ml-[12vw]">
        <NavBar logout={(e) => logout(e)} />

        <main className="min-h-[100vh] px-8 md:px-16 py-16 flex flex-col justify-center items-center w-full">
          <h1>
            Hello, {user.attributes?.email}. Thank you for your patience. We are
            working hard to add this.
          </h1>
        </main>
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
