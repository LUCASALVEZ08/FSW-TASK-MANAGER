const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.completed === "done") {
      return "bg-[#00ADB5] bg-opacity-10 text-[#00ADB5]"
    }
    if (task.completed === "in_progress") {
      return "bg-[#FFAA04] bg-opacity-10 text-[#FFAA04]"
    }
    if (task.completed === "not_started") {
      return "bg-[#35383E] bg-opacity-10 text-[#35383E]"
    }
  }

  return (
    <div className={`gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`}>
      {task.title}
    </div>
  )
}

export default TaskItem
