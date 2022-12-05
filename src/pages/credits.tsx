/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import {
  Button,
  Divider,
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

const Credits: NextPage = () => {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  const [creditCount, setCreditCount] = useState(0)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then()
      .catch(() => {
        router.push("/login")
      })
    const getCount = async () => {
      if (user) {
        assert(user.username)
        try {
          const res: any = await API.graphql({
            query: getCoverCount,
            variables: {
              id: user.username,
            },
            authToken: user.getSignInUserSession()?.getIdToken().getJwtToken(),
          })
          console.log(res.data)
          setCreditCount(res.data.getUsers.coverLetterCount)
        } catch (err) {
          console.error(err)
        }
      }
    }
    getCount()
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
        <NavBar logout={(e) => logout(e)} title="Get Credits" />
        <main className="min-h-[100vh] px-8 md:px-16 py-16 flex flex-col justify-start items-center w-full">
          <div className="flex flex-col w-full h-full justify-start text-center items-center">
            <h1 className="w-full text-[#015369] my-4 text-xl font-light italic">
              Credits remaining: {creditCount}
            </h1>
            <div className="flex flex-col md:flex-row w-full space-y-4 md:space-x-4 md:space-y-0">
              <div className="w-full lg:w-1/3 h-full bg-[#9EB7BE] text-white p-8 rounded-lg font-[Inter] space-y-6 lg:text-xl">
                <h1 className="text-4xl font-[Averia-Serif-Libre] tracking-wide">
                  Cram
                </h1>
                <h3 className="text-xl italic">10 credits for $10.00</h3>
                <Divider backgroundColor={"white"} color={"white"} />
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>1 credit per cover letter</h3>
                </div>
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>5 credits per essay outline</h3>
                </div>
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>10 credits per essay draft</h3>
                </div>
                <div className="flex flex-row justify-center items-center my-12">
                  <Link
                    target="_blank"
                    href="https://buy.stripe.com/aEU9EB1MP7Gq4Ok28d"
                    passHref
                  >
                    <button className="bg-[#0BA8D3] text-white text-xl w-full py-3 rounded-md">
                      Get Credits
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/3 h-full bg-[#9EB7BE] text-white p-8 rounded-lg font-[Inter] space-y-6 lg:text-xl">
                <h1 className="text-4xl font-[Averia-Serif-Libre] tracking-wide">
                  Basic
                </h1>
                <h3 className="text-xl italic">$7.99/month</h3>
                <Divider />
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>Get 10 credits every month</h3>
                </div>
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>$0.79 per credit</h3>
                </div>
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>Credits can accumulate if not used</h3>
                </div>
                <div className="flex flex-row justify-center items-center my-12">
                  <Link
                    target="_blank"
                    href="https://buy.stripe.com/3csg2Z7797Gq4Ok8wA"
                    passHref
                  >
                    <button className="bg-[#0BA8D3] text-white text-xl w-full py-3 rounded-md">
                      Subscribe
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/3 h-full bg-[#9EB7BE] text-white p-8 rounded-lg font-[Inter] space-y-6 lg:text-xl">
                <h1 className="text-4xl font-[Averia-Serif-Libre] tracking-wide">
                  Premium
                </h1>
                <h3 className="text-xl italic">$24.99/month</h3>
                <Divider />
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>Get 100 credits every month 🔥</h3>
                </div>
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>$0.25 per credit 🤑</h3>
                </div>
                <div className="flex flex-row space-x-2 justify-start items-center align-middle text-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#0BA8D3"
                    className="h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <h3>Early access to new features 🥳</h3>
                </div>
                <div className="flex flex-row justify-center items-center my-12">
                  <Link
                    target="_blank"
                    href="https://buy.stripe.com/dR61853UXe4O4OkfZ1"
                    passHref
                  >
                    <button className="bg-[#0BA8D3] text-white text-xl w-full py-3 rounded-md">
                      Subscribe
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="w-full text-[#015369] my-4 font-light italic text-xl">
              Current subscription: Free
            </h1>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Credits
