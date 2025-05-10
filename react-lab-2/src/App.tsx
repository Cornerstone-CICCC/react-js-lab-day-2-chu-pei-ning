import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import UserContextProvider from "./contexts/UserContextProvider"
import LoginLayout from "./pages/Login/LoginLayout"
import TodoLayout from "./pages/Todos/TodoLayout"
import Login from "./pages/Login/Login"
import { UseUser } from "./contexts/useUser"
import Todos from "./pages/Todos/Todos"
import NotFound from "./pages/NotFound"
import { Toaster } from "react-hot-toast"

const App = () => {
  const { user } = UseUser()

  return (
    <UserContextProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLayout />} >
            <Route index element={user ? <Navigate to="/todo" /> : <Login />} />
          </Route>
          <Route path="/todo" element={<TodoLayout />} >
            <Route index element={<Todos />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App