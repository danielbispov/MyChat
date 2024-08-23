import { TabsContent } from "@radix-ui/react-tabs"
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const Auth = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const login = async () => {

  }

  const signUp = async () => {
    
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
          <Tabs className="w-3/4">
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
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />  

              <Button className="p-6" onClick={signUp}>Sign Up</Button>
            
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
    
  )
}

export default Auth