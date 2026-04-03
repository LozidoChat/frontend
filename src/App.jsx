import { useState } from "react"
import { Toaster, toast } from "sonner"

import { MainLayout } from "@/components/layouts/MainLayout"
import AuthPage from "@/pages/AuthPage"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authMode, setAuthMode] = useState("login")

  const handleLogin = ({ username, password }) => {
    if (username === "admin" && password === "123") {
      setIsAuthenticated(true)
      toast.success("Login successful")
      return
    }

    toast.error("Wrong username or password")
  }

  const handleRegister = ({ username, password, confirmPassword }) => {
    if (!username || !password || !confirmPassword) {
      toast.error("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    toast.success("Register successful. Please log in with admin / 123")
    setAuthMode("login")
  }

  return (
    <>
      {!isAuthenticated ? (
        <AuthPage
          mode={authMode}
          onModeChange={setAuthMode}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
      ) : (
        <MainLayout />
      )}
      <Toaster richColors position="top-right" />
    </>
  )
}
