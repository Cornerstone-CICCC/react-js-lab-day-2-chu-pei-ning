import React, { useState } from "react"
import { UseUser } from "../../contexts/useUser"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [name, setName] = useState("")
  const {setUser} = UseUser()
  const navigate = useNavigate()


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if(name !== "" ) {
      setUser(name)
      navigate("/todo")
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <label className="text-xl font-bold text-white">Hi. What's your name?</label>
        <div className="flex gap-3">
          <input className="text-white border border-white rounded-lg p-2" type="text" name="username" value={name} onChange={(e) => setName(e.target.value)}/>
          <button className="border border-white bg-gray-950 text-white font-bold rounded-lg p-2">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login