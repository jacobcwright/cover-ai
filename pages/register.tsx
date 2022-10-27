import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import { useState } from "react"
import { PhoneNumberField } from "@aws-amplify/ui-react"

const initialFormState = {
  name: "",
  email: "",
  password: "",
  dialCode: "+1",
  phone: "",
}
const Register = () => {
  const [formData, setFormData] = useState(initialFormState)
  const router = useRouter()

  async function signUp() {
    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.name === "" ||
      formData.phone === ""
    ) {
      alert("Please fill out all fields")
      return
    }
    try {
      const { user } = await Auth.signUp({
        username: formData.email,
        password: formData.password,
        attributes: {
          name: formData.name,
          phone_number: formData.dialCode + formData.phone,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      })
      console.log(user)
      localStorage.setItem("user", user.getUsername())
      router.push("/confirm")
    } catch (error) {
      console.log("error signing up:", error)
    }
  }

  return (
    <div className="bg-white flex flex-col justify-center">
      <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center">
        <h1 className="text-blue-500 text-2xl text-center">
          Create an account with Brainiac
        </h1>
        <div className="w-[30rem] space-y-6">
          <div className="flex flex-col">
            <label>Name</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="name"
              value={formData.name}
              type="text"
              className="border border-black p-2 rounded w-full bg-white my-2"
            />
          </div>
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
          <div className="flex flex-col">
            <PhoneNumberField
              defaultDialCode="+1"
              label="Phone number"
              placeholder="234-567-8910"
              value={formData.phone}
              onDialCodeChange={(e) => {
                console.log(e)
                setFormData({
                  ...formData,
                  dialCode: e.target.value,
                })
              }}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value })
              }}
            />
          </div>

          <div>
            <button
              className="border-none bg-sky-700 text-white p-2 mt-4 rounded m-auto"
              onClick={signUp}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
