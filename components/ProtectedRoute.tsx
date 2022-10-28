/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useAuthenticator } from "@aws-amplify/ui-react"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  useEffect(() => {
    console.log(user)
    if (!user) {
      router.push("/login")
    }
  }, [user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute
