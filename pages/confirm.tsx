import { useEffect, useState } from "react"
import { Auth } from "aws-amplify"
import { useRouter } from "next/router"

const initialFormState = { code: "" }
const ConfirmSignup = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [email, setEmail] = useState("")
  const router = useRouter()
  const code = formData.code

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let e = localStorage.getItem("user")
    if (e) {
      setEmail(e)
    }
  }, [])

  async function confirmSignUp() {
    if (email === "") {
      console.error("email is empty")
      return
    }
    try {
      await Auth.confirmSignUp(email, code)
      localStorage.clear()
      router.replace("/")
    } catch (error) {
      console.error("error confirming sign up", error)
    }
  }

  return (
    <div className="bg-white">
      <div className="grid max-w-screen-xl h-screen text-black m-auto place-content-center">
        <div className="w-[30rem] space-y-6">
          <label htmlFor="Confirmation Code">
            Enter the confirmation code sent to your email{" "}
          </label>
          <input
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            placeholder="code"
            value={formData.code}
            type="text"
            className="border border-sky-500 p-2 rounded w-full shadow bg-white"
          />
        </div>
        <button
          className="border-2 bg-sky-700 border-none text-white p-2 mt-4 rounded m-auto"
          onClick={confirmSignUp}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default ConfirmSignup
