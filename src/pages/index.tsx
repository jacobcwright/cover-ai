/* eslint-disable react/no-unescaped-entities */
import { Button } from "@aws-amplify/ui-react"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full overflow-x-hidden items-center px-[10vw] h-full">
      <Header />
      <div className="flex w-full h-[40vh] z-0 align-middle items-center my-6">
        <div className="absolute w-full sm:w-[80vw] h-[40vh] -z-10 m-auto left-0 right-0">
          <Image
            alt="header"
            src="/coverPhoto.png"
            layout="fill"
            objectFit="cover"
            className="-z-10 absolute w-full h-full"
          />
          <div className="flex flex-col z-10 h-full w-full sm:w-1/2 text-white px-12 align-middle justify-center space-y-4">
            <h1 className="font-[Averia-Serif-Libre] text-3xl sm:text-4xl ">
              Unmatched productivity
            </h1>
            <p className="font-[Inter] text-xl sm:text-3xl font-extralight">
              Generate cover letters in seconds, not minutes
            </p>
            <div className="w-full z-10 hover:cursor-pointer">
              <Button
                backgroundColor="#0BA8D3"
                onClick={() => {
                  router.push("/home")
                }}
              >
                <p className="text-white">Start for free</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center my-14">
        <h1 className="font-[Averia-Serif-Libre] text-5xl italic tracking-wide">
          Reclaim an average of 29 minutes per cover letter
        </h1>
      </div>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row my-6 justify-evenly h-full">
        <div className="w-full md:w-1/3 h-full justify-evenly space-y-6">
          <h1 className="font-[Inter] text-2xl font-bold">
            Write more. Write faster.
          </h1>
          <p className="font-[Inter] text-xl">
            In the time it takes you to write 1 cover letter, Brainiac can write
            90. Don't believe us? Try it for free.
          </p>
          <Button
            backgroundColor="#0BA8D3"
            onClick={() => {
              router.push("/home")
            }}
          >
            <h1 className="text-white px-4">Get Started</h1>
          </Button>
        </div>
        <div className="h-full w-fit">
          <Image src="/demo.gif" height={250} width={450} alt="demo video" />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center mt-14">
        <h1 className="font-[Averia-Serif-Libre] text-5xl italic tracking-wide text-center my-14">
          See how it works
        </h1>
        <div className="w-full h-fit overflow-hidden border-2 border-black rounded-lg">
          <video autoPlay loop muted playsInline src="/landingPageDemo.mp4" />
        </div>
      </div>
      <div className="mt-6 mb-28">
        <Button
          backgroundColor="#0BA8D3"
          onClick={() => {
            router.push("/home")
          }}
        >
          <h1 className="text-white">Sign up for free</h1>
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default Home
