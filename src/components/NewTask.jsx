import { useState } from "react"
import expandMore from "../assets/expand_more_24px.svg"
import scheduleImg from "../assets/schedule_24px.svg"
import editImg from "../assets/edit_24px.svg"
const NewTask = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [onSelect, setOnSelect] = useState(false)
    const checked = () => {
        setOnSelect(!onSelect)
        setIsOpen(true)
    }
    return (
        <><div className=" flex-col space-y-4 mt-6">
            <div className="flex items-center w-full">
                <input type="checkbox" className="h-[18px] w-[18px]  text-[#828282] focus:ring-0 " onClick={() => checked()} />
                <input type="text" placeholder="Type Task Tittle" className="w-[380px] rounded-[5px] ml-8 mr-36 focus:ring-0 focus:border-[#828282]" />
                <button className="mx-6" onClick={() => setIsOpen(!isOpen)}>
                    <img src={expandMore} alt="" className={isOpen && "rotate-180"} />
                </button>
                <button className="font-bold" >...</button>

            </div>
            <div className={isOpen ? "hidden" : "flex items-center gap-4 ml-8"}>
                <img src={scheduleImg} alt="schedule_24px" className="grayscale" />
                <input type="date" placeholder="Set Date" className="border py-1 px-6 outline-none rounded-sm focus:border-[#828282] text-[#828282] focus:ring-0 " />
            </div>
            <div className={isOpen ? "hidden" : "flex items-start gap-4 ml-8"}>
                <img src={editImg} alt="edit_24px" className="grayscale" />
                <textarea className="text-[#4F4F4F] text-sm py-1 px-4 border-none focus:ring-0 outline-none w-full resize-none" placeholder="No Description" />

            </div>
        </div > <div className="h-[1px] w-full bg-[#828282] mt-8"></div></>
    )
}

export default NewTask