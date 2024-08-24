import NewDm from "./components/new-dm"

const ContactsContainer = () => {
  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2">
        <div className="pt-3">

        </div>
        <div className="my-5">
            <div className="flex items-center justify-between pr-10 ">
                <Title text="Direct Message" />
                <NewDm />
            </div>
        </div>
        <div className="my-5">
            <div className="flex items-center justify-between pr-10 ">
                <Title text="Channels" />
            </div>
        </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Title = ({ text }) => {
    return (
        <h6 className="uppercase tracking-widest text-neural-400 pl-10 font-light text-opacity-90 text-sm">{ text }</h6>
    )
}

export default ContactsContainer