/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import clsx from "clsx"
import { useState } from "react"

const MessageBox = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  return (
    <>
      <div className={props.position ? "flex justify-start" : "flex justify-end"}>
        <span className={clsx(props.textcolor, "text-right text-sm font-bold ")}>{props.author || "You"}</span>
      </div>
      <div className={props.position ? "flex flex-row-reverse justify-end" : "flex justify-end"}>
        <span className="font-bold px-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>...</span>
        {isOpen &&
          <div
            className="absolute w-[126px] h-[80px] border bg-[#FFFFFF] left-[50%] " >
            <span className="block text-[#2F80ED] border-b p-2">Edit</span>
            <span className="block text-[#EB5757] p-2">Delete</span>
          </div>
        }
        <div className={clsx(props.bg, "  rounded-md p-4 text-sm text-[#4F4F4F]")}>
          <p >{props.text || "No worries. it will be completed ASAP. I've asked him yesterday."} </p>
          <span>{new Date().getHours()}:{new Date().getMinutes()}</span>
        </div>
      </div>
    </>
  )
}

export default MessageBox