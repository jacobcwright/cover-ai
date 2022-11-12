import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

function SideNav() {
  const router = useRouter()
  return (
    <div className="hidden md:flex md:flex-col md:fixed md:min-w-[180px] md:w-[12vw] md:h-screen bg-[#9EB7BE] p-4 pt-12 justify-between">
      <div className="flex justify-start flex-col h-full">
        <div
          className="flex h-1/4 justify-center hover:cursor-pointer hover:animate-pulse"
          onClick={() => {
            router.replace("/")
          }}
        >
          <Image
            src="/brainiacWhite.png"
            alt="brainiac logo"
            layout="intrinsic"
            height={300}
            width={120}
          />
        </div>
        <div className="mt-6 flex flex-col space-y-6 text-center text-2xl text-white font-[Averia-Serif-Libre]">
          <Link href="/home" passHref>
            {router.pathname === "/home" ? (
              <a className="text-[#015369]">Cover Letter</a>
            ) : (
              <a className="">Cover Letter</a>
            )}
          </Link>
          <Link href="/subscription" passHref>
            {router.pathname === "/subscription" ? (
              <a className="text-[#015369]">Subscription</a>
            ) : (
              <a className="">Subscription</a>
            )}
          </Link>
          <div
            onClick={() => {
              alert(
                "Coming soon! If you need more cover letters, please reach out to Jacob or visit the subscriptions tab."
              )
              return
            }}
          >
            Contact Us
          </div>
        </div>
      </div>
      <h1 className="flex text-center align-bottom justify-center font-[Averia-Serif-Libre] text-white text-3xl tracking-wider">
        Br<p className="text-[#015369]">ai</p>niac
      </h1>
    </div>
  )
}

export default SideNav
