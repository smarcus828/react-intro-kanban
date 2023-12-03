import { Task } from "./data-tasks"

const TaskCard = ({task}: {
  task: Task  
}) => {
  return <div className="border px-2 rounded-lg border-red-800 bg-gray-200 p-2 m-2" >
    <div className="text-base font-semibold py-2">
      {task.title}
    </div>
    <div className="flex gap-4 py-2 justify-between text-gray-700">
      <div>{task.id}</div>
      <div>EL</div>
      <div>{task.points}</div>
    </div>
  </div>
}

export default TaskCard