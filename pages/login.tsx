/* eslint-disable react-hooks/exhaustive-deps */
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react"
import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Login = () => {
  const [formData, setFormData] = useState<any>()
  const router = useRouter()
  const { user } = useAuthenticator()

  useEffect(() => {
    if (user?.getSignInUserSession()) {
      router.push("/")
    }
  }, [user])

  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center space-y-6">
        <h1 className="text-black text-5xl text-center font-[Averia-Serif-Libre] weight-300 italic">
          Sign In
        </h1>
        <p className="text-[#015369] text-xl text-center font-[Inter]">
          to your Brainiac account
        </p>
        <Authenticator className="font-[Inter]"></Authenticator>
      </div>
    </div>
  )
}

export default Login
