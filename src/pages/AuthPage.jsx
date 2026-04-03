import { useState } from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import googleLogo from "@/assets/google.webp"
export default function AuthPage({ mode, onModeChange, onLogin, onRegister }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const isLogin = mode === "login"

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLogin) {
      onLogin({ username, password })
      return
    }

    onRegister({ username, password, confirmPassword })
  }

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg,
              rgba(248,250,252,1) 0%,
              rgba(219,234,254,0.7) 30%,
              rgba(165,180,252,0.5) 60%,
              rgba(129,140,248,0.6) 100%
            ),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
        <Card className="border-zinc-200 bg-white shadow-sm">
          <CardHeader className="space-y-4 pb-2">
            <CardTitle className="text-center text-3xl font-semibold text-zinc-900">
              {isLogin ? "Sign in to ZOLA" : "Create account"}
            </CardTitle>
            <Button
              type="button"
              variant="outline"
              className="h-11 w-full justify-center gap-3 border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50"
            >
              <img src={googleLogo} alt="Google" className="h-5 w-5" />
              {isLogin ? "Sign in with Google" : "Sign up with Google"}
            </Button>
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <div className="h-px flex-1 bg-zinc-200" />
              <span>OR</span>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>
          </CardHeader>

          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-800">Username</label>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-800">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-800">Confirm Password</label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                  />
                </div>
              )}

              <Button
                type="submit"
                className="h-11 w-full bg-zinc-900 text-white hover:bg-zinc-800"
              >
                {isLogin ? "Log in" : "Sign up"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-5 text-center text-sm text-zinc-700">
          {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => onModeChange(isLogin ? "register" : "login")}
            className="font-medium text-zinc-900 underline underline-offset-2"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>

        {isLogin && (
          <p className="mt-3 text-center text-xs text-zinc-500">
            Demo account: admin / 123
          </p>
        )}
        </div>
      </div>
    </div>
  )
}
