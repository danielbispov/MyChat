import { TabsContent } from "@radix-ui/react-tabs"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { apiClient } from "@/lib/api-client"
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants"
import { useNavigate } from "react-router-dom"
import { useAppStore } from "@/store"

const Auth = () => {
  const navigate = useNavigate()
  const { setUserInfo } = useAppStore()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [cep, setCep] = useState("")

  const validateSignUp = () => {
    if (!email.length) {
      alert("Email is required.")
      return false
    }
    if (!password.length) {
      alert("Password is required.")
      return false
    }
    if (password !== confirmPassword) {
      alert("Password and Password Confirmation must be the same.")
      return false
    }
    if (!cep.length) {
      alert("CEP is required.")
      return false
    }
    return true
  }

  const validateLogin = () => {
    if (!email.length) {
      alert("Email is required.")
      return false
    }
    if (!password.length) {
      alert("Password is required.")
      return false
    }
    return true
  }

  const login = async () => {
    if (validateLogin()) {
      const response = await apiClient.post(
        LOGIN_ROUTE,
        { email, password },
        { withCredentials: true }
      )
      if (response.status === 200) {
        setUserInfo(response.data.user)
        navigate("/chat")
      }
      console.log(response)
    }
  }

  const signUp = async () => {
    if (validateSignUp()) {
      const response = await apiClient.post(
        SIGNUP_ROUTE,
        { email, password, cep },
        { withCredentials: true }
      )
      if (response.status === 201) {
        alert("Usuário criado com sucesso.")
        navigate("/chat")
      }
      console.log(response)
    }
  }

  return (
    <div className="h-[100vh] v-[100vh] flex items-center justify-center">
      <div className="h-[80vh] w-[80vw] bg-white border-2 border-white text-opacity-90 shadow-2xl
                      md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <p className="font-medium text-center">
            Fill with your details to get access to MyChat:
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <Tabs className="w-3/4" defaultValue="login">
            <TabsList className="bg-transparent rounded-none w-full">
              <TabsTrigger className="data-[state=active]:bg-transparent text-black text-opacity-90
              border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold
              data-[state=active]:border-b-black p-3 transition-all duration-300"
                value="login">Login</TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-transparent text-black text-opacity-90
              border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold
              data-[state=active]:border-b-black p-3 transition-all duration-300"
                value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-5 mt-6" value="login">
              <input type="email"
                placeholder="Email"
                className="p-2 m-1 border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <input type="password"
                placeholder="Password"
                className="p-2 m-1 border-b-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

              <Button className="p-6" onClick={login}>Login</Button>

            </TabsContent>
            <TabsContent className="flex flex-col gap-5" value="signup">
              <input type="email"
                placeholder="Email"
                className="p-2 m-1 border-b-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <input type="password"
                placeholder="Password"
                className="p-2 m-1 border-b-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

              <input type="password"
                placeholder="Confirm password"
                className="p-2 m-1 border-b-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} />

              <input type="text"
                placeholder="CEP"
                className="p-2 m-1 border-b-2"
                value={cep}
                onChange={(e) => setCep(e.target.value)} />

              <Button className="p-6" onClick={signUp}>Sign Up</Button>

            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>

  )
}

export default Auth