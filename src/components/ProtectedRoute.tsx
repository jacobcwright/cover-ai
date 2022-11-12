/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { Auth, withSSRContext } from "aws-amplify"
import { setDefaultResultOrder } from "dns"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((u) => {
        setUser(u)
      })
      .catch(() => {
        router.push("/login")
      })
  }, [])

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
