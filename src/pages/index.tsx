/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import {
  Button,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react"
import { Auth } from "aws-amplify"
import { Router, useRouter } from "next/router"
import { API, graphqlOperation } from "aws-amplify"
import { getCoverCount } from "../graphql/queries"
import Image from "next/image"
import assert from "assert"
import Link from "next/link"
import Modal from "../components/Modal"
import SideNav from "../components/SideNav"
import NavBar from "../components/NavBar"

const Home: NextPage = () => {
  // const getCoverCount = /* GRAPHQL */ `
  //   query GetUsers($id: ID!) {
  //     getUsers(id: $id) {
  //       coverLetterCount
  //   }
  // }
  // `

  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  const [name, setName] = useState("")
  const [resume, setResume] = useState("")
  const [company, setCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [coverLetter, setCoverLetter] = useState("")
  const [loading, setLoading] = useState(false)
  const [coverLetterCount, setCoverLetterCount] = useState(0)
  const [createCoverLetterCalled, setCreateCoverLetterCalled] = useState(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
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
          setCoverLetterCount(res.data.getUsers.coverLetterCount)
        } catch (err) {
          console.error(err)
        }
      }
    }
    getCount()
  }, [user, createCoverLetterCalled])

  const getCoverLetter = async () => {
    if (coverLetterCount <= 0) {
      setModalOpen(true)
      return
    }
    if (name && company && jobTitle && resume && jobDescription) {
      setLoading(true)
      try {
        const data = {
          name: name,
          jobTitle: jobTitle,
          company: company,
          resume: resume,
          jobDescription: jobDescription,
          user: user.username,
          coverLetterCount: coverLetterCount,
          token: user.getSignInUserSession()?.getIdToken().getJwtToken(),
        }
        await fetch("/api/openAi", {
          method: "POST",
          body: JSON.stringify({ data }),
        })
          .then((res) => res.json())
          .then((data) => {
            setCoverLetter(data.choices[0].text)
            setCreateCoverLetterCalled(!createCoverLetterCalled)
          })
      } catch (err) {
        setCoverLetter("An error has occurred, please try again.")
        console.error(err)
        setLoading(false)
      }
    } else {
      alert("Please fill out all fields")
    }
    setLoading(false)
  }

  const logout = async () => {
    localStorage.clear()
    await Auth.signOut()
    router.push("/login")
  }

  return (
    <div className="h-full w-full flex flex-row relative overflow-hidden">
      <Head>
        <title>Braniac</title>
        <meta
          name="description"
          content="Create personalized cover letters using AI"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <SideNav />
      <div className="w-full overflow-y-auto md:ml-[16vw] xl:ml-[12vw]">
        <NavBar logout={logout} />

        <main className="min-h-[100vh] px-8 md:px-16 py-16 flex flex-col justify-center items-center w-full">
          {loading && (
            <div
              role="status"
              className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center"
            >
              <Image
                height={300}
                width={300}
                src="/loadingGif.gif"
                alt="loading"
              />
              <p className="text-xl font-[Inter] text-[#9EB7BE]">loading...</p>
            </div>
          )}

          <div className="flex flex-col justify-center items-center w-full space-y-8">
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full space-y-8 md:space-x-8 md:space-y-0">
              <input
                className="w-full p-4 rounded-md border-2 border-gray-300"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full p-4 rounded-md border-2 border-gray-300"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                className="w-full p-4 rounded-md border-2 border-gray-300"
                placeholder="Job title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col md:flex-row w-full space-y-8 md:space-x-8 md:space-y-0 min-h-[25vh]">
              <textarea
                className="w-full p-4 rounded-md border-2 border-gray-300"
                placeholder="Resume"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
              />
              <textarea
                className="w-full p-4 rounded-md border-2 border-gray-300"
                placeholder="Job description"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center my-8">
            <button
              className="bg-[#0BA8D3] text-white text-2xl px-8 py-2 rounded-md"
              onClick={() => {
                getCoverLetter()
              }}
            >
              Submit
            </button>
          </div>

          <div className="flex flex-col justify-center items-center w-full">
            <label className="text-3xl font-[Averia-Serif-Libre]">
              Cover Letter
            </label>
            <textarea
              className="w-full h-full p-4 border-2 border-gray-300 rounded-md min-h-[25vh]"
              placeholder="Cover letter will be displayed here"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            ></textarea>
            <p className="flex w-full font-[Inter]">
              Cover Letters Remaining: {coverLetterCount}
            </p>
          </div>
        </main>
      </div>
      <Modal
        visible={modalOpen}
        title="You've used your 3 requests"
        subtitle="We're currently working on integrating a payment solution.
            Until then, email jacob.wright.ut@gmail.com and venmo @jacobwright30 $3 to receive 50 more credits."
      >
        <div className="flex flex-col space-y-2">
          <Button
            backgroundColor="#0BA8D3"
            onClick={() => {
              window.open("mailto:jacob.wright.ut@gmail.com")
            }}
          >
            <p className="text-white">Click here to email</p>
          </Button>
          <Button
            backgroundColor="#0BA8D3"
            onClick={() => {
              window.open("https://venmo.com/jacobwright30")
            }}
          >
            <p className="text-white">Click here to venmo</p>
          </Button>
        </div>
        <h2 className="font-[Averia-Serif-Libre] text-2xl">
          Thank you for your patience
        </h2>
      </Modal>
    </div>
  )
}

export default Home
