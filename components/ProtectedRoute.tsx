import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useAuthenticator } from "@aws-amplify/ui-react"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  useEffect(() => {
    console.log(user)
    if (!user?.getSignInUserSession()) {
      router.push("/login")
    }
  }, [router, user])

  return <>{user?.getSignInUserSession() ? children : null}</>
}

export default ProtectedRoute
