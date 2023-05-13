/* eslint-disable react/prop-types */
import clsx from "clsx"
const ElipseButton = (props) => {
    return (
        <button
            {...props} className={clsx(props.className, "rounded-full w-[68px] h-[68px] flex justify-center items-center")}>
            <img src={props.path} alt="ellipseButton" />
        </button>
    )
}

export default ElipseButton
