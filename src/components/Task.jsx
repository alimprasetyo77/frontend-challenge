import { useState } from "react"
import expandMore from "../assets/expand_more_24px.svg"
import scheduleImg from "../assets/schedule_24px.svg"
import editImg from "../assets/edit_24px.svg"
const Task = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [onSelect, setOnSelect] = useState(false)
    const [edit, setEdit] = useState(false)

    const checked = () => {
        setOnSelect(!onSelect)
        setIsOpen(true)
    }
    return (
        <><div className="relative flex-col space-y-4 mt-6">
            <div className="flex w-full">
                <input type="checkbox" className="h-[18px] w-[18px]  text-[#828282] focus:ring-0 " onClick={() => checked()} />
                <span className={onSelect ? "text-[#828282] text-sm font-semibold pl-4 pr-8 line-through" : "text-[#4F4F4F] font-semibold pl-4 pr-8"}>Close Off Case #012920-RODRIGUES, Amiguel</span>
                <p className={onSelect ? "hidden" : "text-xs text-[#EB5757] px-3"}>2 Days left</p>
                <p className="text-sm text-[#4F4F4F]">12/06/2021</p>
                <button className="mx-6" onClick={() => setIsOpen(!isOpen)}>
                    <img src={expandMore} alt="" className={isOpen && "rotate-180"} />
                </button>
                <button className="font-bold" onClick={() => setEdit(!edit)}>...</button>
                {edit &&
                    <div className="absolute w-[126px] h-[43px] border border-[#828282] bg-white flex items-center right-10 top-8 rounded-[5px]" >
                        <span className="block text-[#EB5757] p-2">Delete</span>
                    </div>
                }
            </div>
            <div className={isOpen ? "hidden" : "flex items-center gap-4 ml-8"}>
                <img src={scheduleImg} alt="schedule_24px" />
                <input type="date" className="border py-1 px-6 outline-none rounded-sm focus:border-[#828282] text-[#828282] focus:ring-0" />
            </div>
            <div className={isOpen ? "hidden" : "flex items-start gap-4 ml-8"}>
                <img src={editImg} alt="edit_24px" />
                <p className="text-[#4F4F4F] text-sm">
                    Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!
                </p>
            </div>
        </div><div className="h-[1px] w-full bg-[#828282] mt-8"></div></>
    )
}

export default Task