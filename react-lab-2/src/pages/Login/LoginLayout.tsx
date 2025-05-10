import { Outlet } from "react-router-dom"

const LoginLayout = () => {
  return (
    <div className="flex items-center justify-center bg-gray-800 p-6 w-150 rounded-lg min-h-100">
      <Outlet />
    </div>
  )
}

export default LoginLayout