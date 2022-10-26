import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import { useState } from "react"
import { PhoneNumberField } from "@aws-amplify/ui-react"

const initialFormState = {
  email: "",
  password: "",
}
const Register = () => {
  const [formData, setFormData] = useState(initialFormState)
  const router = useRouter()
  async function login() {
    if (formData.email === "" || formData.password === "") {
      alert("Please fill out all fields")
      return
    }
    try {
      const user = await Auth.signIn({
        username: formData.email,
        password: formData.password,
      })
      console.log(user)
      router.push("/")
    } catch (error) {
      console.log("error signing up:", error)
    }
  }

  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center">
        <h1 className="text-blue-500 text-2xl text-center">
          Login to your Brainiac account
        </h1>
        <div className="w-[30rem] space-y-6">
          <div className="flex flex-col">
            <label> Email </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="email"
              value={formData.email}
              type="email"
              className="border border-black p-2 rounded w-full bg-white my-2"
            />
          </div>

          <div className="flex flex-col">
            <label>Password </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="pasword"
              value={formData.password}
              type="password"
              className="border p-2 rounded border-black bg-white my-2"
            />
          </div>
          <div>
            <button
              className="border-none bg-sky-700 text-white p-2 mt-4 rounded m-auto"
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
