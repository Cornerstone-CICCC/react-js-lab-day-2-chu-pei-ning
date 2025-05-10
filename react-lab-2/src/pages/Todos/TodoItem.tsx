import type { Todo } from "../../types/todo.types"

type Props = {
  todo: Todo,
  onComplete: (id: string) => void,
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, onComplete, onDelete }: Props) => {

  return (
    <li key={todo.id} className="flex flex-row justify-between bg-gray-400 text-blue-950 p-3 border border-white">
      {todo.task}
      <div className="flex gap-2">
        <button onClick={() => onComplete(todo.id)}>{todo.completed ? "true" : "false"}</button>
        <button className="text-red-600" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItem