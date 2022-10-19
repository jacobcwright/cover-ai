import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const [resume, setResume] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [coverLetter, setCoverLetter] = useState("")

  const getCoverLetter = async () => {
    if (resume && jobDescription) {
      const prompt =
        "create a cover letter given input of a resume labeled 'MY RESUME' and a job description labeled 'JOB DESCRIPTION':" +
        "\n\n MY RESUME \n\n" +
        resume +
        "\n\n JOB DESCRIPTION \n\n" +
        jobDescription +
        "\n***END***"
      await fetch("/api/openAi", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCoverLetter(data.choices[0].text)
        })
        .catch((err) => console.log(err))
    } else {
      alert("Please fill out all fields")
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cover Letter AI</title>
        <meta
          name="description"
          content="Create personalized cover letters using AI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[100vh] px-8 md:px-16 py-16 flex flex-col justify-center items-center w-full">
        <h1 className="m-0 text-8xl text-center">
          <i className="text-red-300">Hate</i> writing cover letters?
        </h1>

        <p className="my-16 mx-0 text-3xl text-center">
          Let ai write personalized cover letters for your job applications!
        </p>

        <div className="h-full w-full flex flex-col space-y-12">
          {/* two input fields that take resume and job description as input text fields with a submit button below them */}
          <div className="flex flex-col md:flex-row justify-center items-center h-full space-y-6 md:space-y-0">
            <div className="flex flex-col justify-center items-center w-full md:mx-4">
              <label className="text-2xl">Resume</label>
              <textarea
                className="w-full h-full p-4 border-2 border-gray-300 rounded-md min-h-[40vh]"
                placeholder="Paste your resume here"
                value={resume}
                onChange={(e) => {
                  console.log(e.target.value)
                  setResume(e.target.value)
                }}
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:mx-4">
              <label className="text-2xl">Job Description</label>
              <textarea
                className="w-full h-full p-4 border-2 border-gray-300 rounded-md min-h-[40vh]"
                placeholder="Paste the job description here"
                value={jobDescription}
                onChange={(e) => {
                  console.log(e.target.value)
                  setJobDescription(e.target.value)
                }}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              className="bg-red-300 text-white text-2xl px-8 py-4 rounded-md"
              onClick={() => {
                getCoverLetter()
              }}
            >
              Submit
            </button>
          </div>
          {/* create a text are for output to be displayed */}
          <div className="flex flex-col justify-center items-center">
            <label className="text-2xl">Cover Letter</label>
            <textarea
              className="w-full h-full p-4 border-2 border-gray-300 rounded-md min-h-[40vh]"
              placeholder="Cover letter will be displayed here"
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
