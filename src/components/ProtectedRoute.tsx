/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { withSSRContext } from "aws-amplify"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { signOut, user } = useAuthenticator()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user])

  return <>{user ? children : null}</>
}

export default ProtectedRoute

export async function getServerSideProps(context: any) {
  const { Auth } = withSSRContext(context)
  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      user,
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }
  }
}
