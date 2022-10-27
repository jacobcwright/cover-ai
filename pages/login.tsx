/* eslint-disable react-hooks/exhaustive-deps */
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react"
import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// import { Header } from "./Header";
// import { Footer } from "./Footer";
// import { SignInHeader } from "./SignInHeader";
// import { SignInFooter } from "./SignInFooter";

// const components = {
//   Header,
//   SignIn: {
//     Header: SignInHeader,
//     Footer: SignInFooter
//   },
//   Footer
// };

// const initialFormState = {
//   email: "",
//   password: "",
// }

const Login = () => {
  // const [formData, setFormData] = useState(initialFormState)
  const router = useRouter()
  const { user } = useAuthenticator()

  // async function login() {
  //   if (formData.email === "" || formData.password === "") {
  //     alert("Please fill out all fields")
  //     return
  //   }
  //   try {
  //     await Auth.signIn({
  //       username: formData.email,
  //       password: formData.password,
  //     }).then((user) => {
  //       console.log(user)
  //       router.push("/")
  //     })
  //   } catch (error) {
  //     console.log("error signing up:", error)
  //   }
  // }

  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user])

  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center">
        <h1 className="text-blue-500 text-2xl text-center">Sign In</h1>
        <p>to your Brainiac account</p>
        <Authenticator></Authenticator>
      </div>
    </div>
  )
}

export default Login
