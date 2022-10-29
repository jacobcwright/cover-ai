/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react"
import { Auth } from "aws-amplify"
import { Router, useRouter } from "next/router"

const Home: NextPage = () => {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  const [name, setName] = useState("")
  const [resume, setResume] = useState("")
  const [company, setCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [coverLetter, setCoverLetter] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user])

  const getCoverLetter = async () => {
    if (resume && jobDescription) {
      setLoading(true)
      try {
        const data = {
          name: name,
          jobTitle: jobTitle,
          company: company,
          resume: resume,
          jobDescription: jobDescription,
          user: user.getUsername(),
        }
        await fetch("/api/openAi", {
          method: "POST",
          body: JSON.stringify({ data }),
        })
          .then((res) => res.json())
          .then((data) => {
            setCoverLetter(data.choices[0].text)
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
    <div className="h-full w-full flex flex-col relative">
      <Head>
        <title>Braniac</title>
        <meta
          name="description"
          content="Create personalized cover letters using AI"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav>
        <button className="m-6 mb-0 p-2 bg-red-300 rounded-xl" onClick={logout}>
          Sign Out
        </button>
      </nav>
      <main className="min-h-[100vh] px-8 md:px-16 py-16 flex flex-col justify-center items-center w-full">
        <h1 className="m-0 text-8xl text-center">
          <i className="text-red-300">Hate</i> writing cover letters?
        </h1>

        <p className="my-16 mx-0 text-3xl text-center">
          Let ai write personalized cover letters for your job applications!
        </p>

        {loading && (
          <div
            role="status"
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <svg
              className="inline mr-2 w-24 h-24 text-gray-200 animate-spin dark:text-gray-600 fill-red-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
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
          <div className="flex flex-col md:flex-row w-full space-y-8 md:space-x-8 md:space-y-0 min-h-[33vh]">
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
            className="bg-red-300 text-white text-2xl px-8 py-4 rounded-md"
            onClick={() => {
              getCoverLetter()
            }}
          >
            Submit
          </button>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <label className="text-2xl">Cover Letter</label>
          <textarea
            className="w-full h-full p-4 border-2 border-gray-300 rounded-md min-h-[40vh]"
            placeholder="Cover letter will be displayed here"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
          ></textarea>
        </div>
      </main>
    </div>
  )
}

export default Home
