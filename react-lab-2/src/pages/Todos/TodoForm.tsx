import { useState } from "react"

type Props = {
  onAdd: (task: string) => void
}

const TodoForm = ({onAdd}: Props) => {
  const [todoInput, setTodoInpute] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(todoInput)
    setTodoInpute("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input className="text-white border border-white rounded-lg p-1" type="text" name="task" value={todoInput} onChange={e => setTodoInpute(e.target.value)}/>
      <button className="border border-white bg-gray-950 text-white font-bold rounded-lg p-1">Add Task</button>
    </form>
  )
}

export default TodoForm