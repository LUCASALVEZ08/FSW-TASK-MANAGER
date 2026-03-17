import SidebarButton from "./SidebarButton"
import HomeIcon from "../assets/icons/home.svg?react"
import TasksIcon from "../assets/icons/tasks.svg?react"

function Sidebar() {
  return (
    <>
      <div className="h-screen w-64 bg-white">
        <div className="space-y-4 px-8 py-6">
          <h1 className="text-xl font-semibold text-[#00ADB5]">Task maneger</h1>
          <p>
            Um simples
            <span className="text-[#00ADB5]"> organizador de tarefas</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <SidebarButton variant="unselected">
            <HomeIcon className="inline-block h-5 w-5" />
            Início
          </SidebarButton>
          <SidebarButton variant="selected">
            <TasksIcon />
            Minha tarefas
          </SidebarButton>
        </div>
      </div>
    </>
  )
}

export default Sidebar
