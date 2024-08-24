import { useAppStore } from "@/store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ChatContainer from "./components/chat-container"
import ContactsContainer from "./components/contacts-container"

const Chat = () => {
  const { userInfo } = useAppStore()
  const navigate = useNavigate()
  useEffect(() => {

  }, [userInfo, navigate])

  return (
    <div className="flex h-[100vh] text-white overflow">
      <ContactsContainer></ContactsContainer>
      <ChatContainer></ChatContainer>
    </div>
  )
}

export default Chat