
import { useEffect, useState } from "react"
import ElipseButton from "./components/ElipseButton"
import { motion } from "framer-motion"
import ChatBox from "./components/ChatBox"
import InformationChat from "./components/InformationChat"
// eslint-disable-next-line no-unused-vars
import { v4 } from "uuid";
import Task from "./components/Task"
import NewTask from "./components/NewTask"
import searchIcon from "./assets/search_24px.png"
// import NewTask from "./components/NewTask"

const App = () => {
  const [show, setShow] = useState(false)
  const [inboxIsOpen, setInboxIsOpen] = useState(false)
  const [taskIsOpen, setTaskIsOpen] = useState(false)
  const [messageIsOpen, setMessageIsOpen] = useState(false)
  const [dataGroup, setDataGroup] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [dataChatGroup, setDataChatMessage] = useState([])
  const [openMyTask, setOpenMyTask] = useState(false)
  // const [chat, setChat] = useState('')

  const getDataGroup = () => {
    setIsLoading(true)
    fetch("https://my-json-server.typicode.com/alimprasetyo77/inbox-api/group")
      .then(response => response.json())
      .then(data => {
        setDataGroup(data)
        setIsLoading(false)
      })
  }
  const getDataGroupById = (id) => {
    setIsLoading(true)
    fetch("https://my-json-server.typicode.com/alimprasetyo77/inbox-api/chat?group_id=" + id)
      .then(response => response.json())
      .then(data => {
        setDataChatMessage(data)
        setIsLoading(false)
      })
  }
  // const sendChat = (e) => {
  //   e.preventDefault()
  //   fetch("https://my-json-server.typicode.com/alimprasetyo77/inbox-api/chat", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: 2,
  //       group_id: 2,
  //       username: "user_2",
  //       message: chat,
  //       time: new Date().toLocaleDateString()
  //     })
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }
  useEffect(() => {
    getDataGroup()
  }, [inboxIsOpen])

  function chatGroupIsOpen(id) {
    setMessageIsOpen(true)
    getDataGroupById(id)
  }

  function isOpened(status, value) {
    if (status === "taskOpen") {
      setTaskIsOpen(value)
      setInboxIsOpen(false)
    } else if (status === "inboxOpen") {
      setInboxIsOpen(value)
      setTaskIsOpen(false)
    }
  }
  return (
    <div className="h-screen relative  bg-[#262626] overflow-hidden">
      <header className="bg-[#4F4F4F] p-2" >
        <img src={searchIcon} alt="search" />
      </header>

      <div className="absolute bottom-5 right-10">
        <div className="flex items-end gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: show ? 1 : 0, x: show ? 0 : 20
            }}
            transition={{ type: "spring", duration: 0.5 }}
            className={show ? "flex gap-4" : "hidden"}>
            <div className={taskIsOpen ? "flex-col text-center space-y-3 order-last" : "flex-col text-center space-y-3"}>
              <span className=" text-white font-bold ">Task</span>
              {taskIsOpen ? <ElipseButton path={"src/assets/chrome_reader_mode_24px_open.png"} className={"bg-[#F8B76B]"} onClick={() => isOpened("taskOpen", !taskIsOpen)} /> : <ElipseButton path={"src/assets/chrome_reader_mode_24px.png"} className={"bg-[#F2F2F2]"} onClick={() => isOpened("taskOpen", !taskIsOpen)} />}
            </div>
            <div className={inboxIsOpen ? "flex-col text-center space-y-3 order-last" : "flex-col text-center space-y-3"}>
              <span className=" text-white font-bold ">inbox</span>
              {inboxIsOpen ? <ElipseButton path={"src/assets/question_answer_24px_open.png"} className={"  bg-[#8785FF]  shadow-white "} onClick={() => isOpened("inboxOpen", !inboxIsOpen)} /> : <ElipseButton path={"src/assets/question_answer_24px.png"} className={" bg-[#F2F2F2]"} onClick={() => isOpened("inboxOpen", !inboxIsOpen)} />}
            </div>
          </motion.div>
          <ElipseButton path={"src/assets/Shape.png"} className={inboxIsOpen || taskIsOpen ? "hidden" : "bg-[#2F80ED]"} onClick={() => setShow(!show)} />
        </div>
      </div>

      {inboxIsOpen &&
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inboxIsOpen ? 1 : 0, y: inboxIsOpen ? 0 : 50
          }}
          transition={{ duration: 0.2 }}
          className={messageIsOpen ? "absolute right-4 bottom-36 w-[734px] h-[470px] 2xl:w-[734px] 2xl:h-[600px] bg-[#FFFFFF] rounded-sm scrollbar scrollbar-thumb-[#BDBDBD] scrollbar-track-gray-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-h-4 scrollbar-w-2" : "absolute right-4 bottom-36 w-[734px] h-[470px] 2xl:w-[734px] 2xl:h-[600px] bg-[#FFFFFF] rounded-sm py-[24px] px-[32px] overflow-y-scroll  scrollbar-thumb-[#BDBDBD] scrollbar scrollbar-w-2 scrollbar-h-72 scrollbar-track-gray-100 scrollbar-track-rounded-xl"}>

          {messageIsOpen ?
            <>
              <div className="flex items-center justify-between gap-x-6 border-b-2 z-[99] sticky top-0 bg-white">
                <div className="cursor-pointer p-4" onClick={() => setMessageIsOpen(false)} >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#333333" />
                  </svg>
                </div>
                <div className="flex-grow py-4">
                  <span className=" font-semibold  block text-[#2F80ED] ">I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</span>
                  <span className="text-[#333333] text-xs">3 Parcitipants</span>
                </div>
                <div className="cursor-pointer p-4" onClick={() => setInboxIsOpen(false)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#333333" />
                  </svg>
                </div>
              </div>
              <div className="px-8 h-full ">
                {isLoading ?
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="inline-block h-11 w-11 animate-spin rounded-full border-4 border-solid border-[#C4C4C4] border-r-transparent">
                    </div>
                    <p className="text-[#4F4F4F] font-semibold">Loading Chats ...</p>
                  </div> :
                  <>
                    <InformationChat />
                    {dataChatGroup.map((data, index) => (
                      <div className="m-[20px]" key={index}>
                        <ChatBox bg={"bg-[#EEDCFF]"} textcolor={"text-[#9B51E0]"} text={data.message} time={data.time} />
                      </div>
                    ))}
                    <InformationChat bg={"bg-[#EB5757]"} textcolor={"text-[#EB5757]"} text={"New Message"} />

                  </>
                }
              </div>
              <div className="w-full sticky bottom-0 bg-white p-4 border-t-2 px-[32px] pb-[24px]">
                <form >
                  <div className="flex justify-between gap-x-4">
                    <input placeholder="Type a new message" type="text" className="flex-grow py-[10px] px-[16px] outline-none border border-[#828282] rounded-[5px] placeholder-[#333333] text-[#333333]" />
                    <button type="submit" className="bg-[#2F80ED] text-white py-[8px] px-[16px] rounded-[5px]">Send</button>
                  </div>
                </form>
              </div>
            </>
            :
            <>
              <label htmlFor="search">
                <div className="flex w-full h-8 border-[1px] border-[#828282] rounded-[5px] py-[5px] px-20  ">
                  <input type="text" className="w-full border-none placeholder-[#333333]" placeholder="Search" id="search" />
                  <button>
                    <img src="src/assets/search_24px.svg" alt="search" />
                  </button>
                </div>
              </label>

              {isLoading ?
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="inline-block h-11 w-11 animate-spin rounded-full border-4 border-solid border-[#C4C4C4] border-r-transparent">
                  </div>
                  <p className="text-[#4F4F4F] font-semibold">Loading Chats ...</p>
                </div>
                :
                <>
                  {dataGroup.map((data, index) => (

                    <>
                      <div className="flex gap-x-11 my-[22px]" key={index}>
                        <div className="flex justify-center ">
                          <div className="z-[1] mix-blend-normal bg-[#2F80ED] w-[34px] h-[34px] rounded-full flex items-center justify-center">
                            <img src="src/assets/2person_24px.png" alt="" />
                          </div>
                          <div className=" mix-blend-normal bg-[#E0E0E0] w-[34px] h-[34px] rounded-full flex items-center justify-center -ml-[52px]">
                            <img src="src/assets/1person_24px.png" alt="" />
                          </div>
                        </div>
                        <div className="cursor-pointer" onClick={() => chatGroupIsOpen(data.id)}>
                          {/* Information */}
                          <p className="text-[#2F80ED] font-semibold">{data.title}</p>
                          <span className="font-semibold text-[#4F4F4F] block"> </span>
                          <p className="text-sm text-[#4F4F4F]"></p>
                        </div>
                        <div>
                          {/* Date */}
                          <p className="text-sm text-[#4F4F4F]">{new Date().toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="h-[1px] w-full bg-[#828282] mt-8"></div>
                    </>
                  ))}

                </>
              }
            </>
          }

        </motion.div>
      }
      {taskIsOpen &&
        <div className={messageIsOpen ? "absolute right-4 bottom-36 w-[734px] h-[470px] 2xl:w-[734px] 2xl:h-[600px] bg-[#FFFFFF] rounded-sm " : "absolute right-4 bottom-36 w-[734px] h-[470px] 2xl:w-[734px] 2xl:h-[600px] bg-[#FFFFFF] rounded-sm pt-[18px] pb-[42px] pl-[29px] pr-[13px]"}>
          <div className="container h-full overflow-y-scroll scrollbar-thumb-[#BDBDBD] scrollbar scrollbar-w-2 scrollbar-h-72 scrollbar-track-gray-100 scrollbar-track-rounded-xl">
            <div className="flex justify-between sticky top-0 z-10 bg-white border-b pb-4">
              <div className="w-full px-24">
                <button onClick={() => setOpenMyTask(!openMyTask)} className="flex items-center gap-x-[7px] border w-[118px] border-[#828282] rounded-[5px] py-[10px] px-[14px] text-[#4F4F4F] font-semibold">
                  My Tasks
                  <img src="src/assets/expand_more_24px.svg" alt="" className={openMyTask && "rotate-180"} />
                </button>
                {openMyTask &&
                  <div className="absolute left-1 top-16 border border-[#828282] rounded-[5px] w-[288px] h-[80px] bg-[#FFFFFF] text-[#4F4F4F] font-semibold">
                    <button className="w-full text-start  border-b border-[#828282] py-2 px-4 ">Personal Errands</button>
                    <button className="w-full  text-start border-[#828282] py-2 px-4">Urgent To-Do</button>
                  </div>
                }
              </div>
              <div className="w-full flex items-center justify-end">
                <button className="py-[8px] px-[16px] bg-[#2F80ED] rounded-[5px] text-white">New Task</button>
              </div>
            </div>
            <Task />
            <Task />
            <Task />
            <NewTask />
          </div>
        </div>
      }
    </div >
  )
}

export default App