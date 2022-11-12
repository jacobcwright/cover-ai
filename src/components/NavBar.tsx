import { useAuthenticator } from "@aws-amplify/ui-react"
import React from "react"

type Props = {
  logout: (e: any) => Promise<void>
  title: string
}

function NavBar({ logout, title }: Props) {
  const { signOut, user } = useAuthenticator()

  return (
    <nav className="flex flex-row align-middle justify-between px-16 pt-12 text-center">
      <h1 className="m-0 text-4xl text-center font-[Averia-Serif-Libre]">
        {title}
      </h1>
      <div
        // make icon bounce on hover
        className="hover:cursor-pointer"
        onClick={(e) => logout(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </nav>
  )
}

export default NavBar
