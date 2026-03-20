import CheckIcon from "../assets/icons/check.svg?react"
import DeailsIcon from "../assets/icons/details.svg?react"
import LoaderIcon from "../assets/icons/loader.svg?react"

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.completed === "done") {
      return "bg-[#00ADB5]  text-[#00ADB5]"
    }
    if (task.completed === "in_progress") {
      return "bg-[#FFAA04]  text-[#FFAA04]"
    }
    if (task.completed === "not_started") {
      return "bg-[#35383E] bg-opacity-15  text-[#35383E]"
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-opacity-100 ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.completed === "done"}
            className={`absolute h-full w-full cursor-pointer opacity-0 ${getStatusClasses()}`}
          />
          {task.completed === "done" && <CheckIcon />}
          {task.completed === "in_progress" && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="opacity-75 transition">
        {<DeailsIcon />}
      </a>
    </div>
  )
}

export default TaskItem
