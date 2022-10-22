import React from "react"

function Login() {
  return (
    <div className="flex w-full h-full items-center justify-center align-middle">
      <div className="flex flex-col justify-center items-center w-1/2 h-full align-middle">
        <label className="text-2xl">Login</label>
        <input
          className="w-full p-4 rounded-md border-2 border-gray-300"
          placeholder="Email"
        />
        <input
          className="w-full p-4 rounded-md border-2 border-gray-300"
          placeholder="Password"
        />
        <button className="bg-red-300 text-white text-2xl px-8 py-4 rounded-md">
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login
