import { useSocket } from "@/context/SocketContext"
import { useAppStore } from "@/store"
import { useState } from "react"

const MessageBar = () => {
    const [message, setmessage] = useState("")
    const { selectedChatType, selectedChatData, userInfo } = useAppStore()
    const socket = useSocket()

    const sendMessage = async () => {
        socket.emit("sendMessage", {
            sender: userInfo.Id,
            content: message,
            recipient: selectedChatData._id,
            messageType: "text"
        })
    }

    return (
        <div className="h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6">
            <div className="flex-1 flex bg-[#2a2d33] rounded-md items-center gap-5 pr-5">
                <input type="text"
                    placeholder="Enter your message"
                    className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)} />

                <button className="bg-[#2b746a] p-2 rounded-md flex 
                                items-center justify-center focus:border-none focus:outline-none
                                focus:text-white duration-300 transition-all hover:bg-[#3fa89a]"
                        onClick={sendMessage}>
                    Send
                </button>

            </div>
        </div>
    )
}

export default MessageBar