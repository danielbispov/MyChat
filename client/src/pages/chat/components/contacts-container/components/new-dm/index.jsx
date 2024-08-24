import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function NewDm() {
  const [openNewContact, setOpenNewContact] = useState(false)
  const [searchedContacts, setSearchedContacts] = useState([])

  const searchContacts = async (searchTerm) => {

  }

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={() => setOpenNewContact(true)}>
              Search Contact
            </button>
          </TooltipTrigger>
          <TooltipContent
            className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">
            Search contact
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Dialog open={openNewContact} onOpenChange={setOpenNewContact}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="bg-[#181920] border-none text-white w-[300px] h-[400px] flex flex-col">
          <DialogHeader>
            <DialogTitle>Select a contact</DialogTitle>
            <DialogDescription>
  
            </DialogDescription>
          </DialogHeader>
          <input type="text"
                placeholder="Search contacts"
                className="border-b-2 text-black"
                onChange={(e) => searchContacts(e.target.value)}></input>

          {
            searchContacts
          }
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default NewDm