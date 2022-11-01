/* eslint-disable react/no-unescaped-entities */
import { Button } from "@aws-amplify/ui-react"
import { NextPage } from "next"
import Image from "next/image"
import React from "react"

const Home: NextPage = () => {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Image
        alt="header"
        src="/coverPhoto.png"
        layout="intrinsic"
        height={300}
        width={1600}
      />
      <div>
        <h1>Unmatched productivity</h1>
        <p>Generate cover letters in seconds, not minutes</p>
        <Button>
          <p>Start for free</p>
        </Button>
      </div>
      <div>
        <h1>Reclaim an average of 29 minutes per cover letter</h1>
      </div>
      <div className="flex flex-row">
        <div>
          <h1>Write more. Write faster.</h1>
          <p>
            In the time it takes you to write 1 cover letter, Brainiac can write
            90. Don't believe us? Try it for free.
          </p>
          <Button>Get Started</Button>
        </div>
        <div>
          <Image src="/demo.gif" height={250} width={450} alt="demo video" />
        </div>
      </div>
      <div>
        <h1>See how it works</h1>
        <video autoPlay loop muted playsInline src="/landingPageDemo.mp4" />
      </div>
      <div>
        <Button>Sign up for free</Button>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
