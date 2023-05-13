/* eslint-disable react/prop-types */

import clsx from "clsx"

const InformationChat = (props) => {
    return (
        <>
            <div className="flex items-center">
                <div className={clsx(props.bg, "h-[1px] w-full bg-[#4F4F4F]")}></div>
                <p className={clsx(props.textcolor, " mx-10 whitespace-nowrap font-bold text-[#4F4F4F]")}>{props.text || "Today June 08,2021"}</p>
                <div className={clsx(props.bg, "h-[1px] w-full bg-[#4F4F4F]")}></div>
            </div>
        </>
    )
}

export default InformationChat