import { UseUser } from "../../contexts/useUser"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4} from "uuid"
import { useState } from "react"
import type { Todo } from "../../types/todo.types"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import toast from "react-hot-toast"

const Todos = () => {
  const {user, setUser} = UseUser()
  const navigate = useNavigate()
  const [todos, setTodos] = useState<Todo[]>([])

  const handleLogout = () => {
    setUser("")
    navigate("/")
  }

  const handleAddTodo = (task: string) => {
    if (task !== "") {
      toast.success("To Do added successfully!")
      setTodos(prevState => {
        const newTodo = {
          id: uuidv4(),
          task,
          completed: false
        }
        return [...prevState, newTodo]
      })
    } else {
      toast.error("Your todo is empty!")
    }
  }

  const handleCompleteTodo = (id: string) => {
    setTodos(prevState => 
      prevState.map(todo =>
        todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    )
    toast.success("To Do updated successfully!")
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(prevState =>
      prevState.filter(todo => todo.id !== id)
    )
    toast.error("To Do deleted succesfully!")
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-bold text-white">Welcome, {user}</h1>
          <button className="border border-white bg-gray-950 text-white font-bold rounded-lg p-1" onClick={handleLogout}>Logout</button>
        </div>
        <p className="text-sm text-white">Have a great and productive day!</p>
      </div>
      <ul>
      {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={handleCompleteTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <TodoForm onAdd={handleAddTodo} />
    </div>
  )
}

export default Todos