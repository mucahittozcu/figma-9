"use client"
import { useState } from "react"

const App = () => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

  return (
    <div className="flex items-center  h-screen bg-[#00523F] relative overflow-hidden">

          <img className="absolute bottom-[-10%] right-[-0%] w-[50%] max-w-[1100px] h-auto" src={`/Ellipse 3.png`} alt="Ellipse" />
          <img className="absolute top-20 right-[15%]  w-[60%] max-w-[600px] h-auto" src={`/undraw_jogging_re_k28i 1.png`} alt="Ellipse" />

   <div className="absolute top-0 left-0 w-full h-full flex items-center ">
        <div className=" shadow-white shadow-md p-8 md:p-16 lg:p-28 ml-52">
        <div className="flex flex-col ">
          <h1 className="lg:text-8xl text-4xl md:text-6xl font-semibold text-white opacity-70">LOGIN</h1>
          <input 
            type="text"
            name="username"
            placeholder="Username"
            className="border mt-4 md-mt-8 lg:mt-10 max-w-[500px] lg:w-[500px] h-[50px] md:h-[60px] lg:h-[80px] pl-4 lg:pl-8 bg-[#00523F] text-white rounded-xl border-white"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            className="border mt-4 md-mt-8 lg:mt-10 max-w-[500px] h-[50px] md:h-[60px] lg:h-[80px] pl-4 lg:pl-8 bg-[#00523F] text-white rounded-xl border-white"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="bg-[#FFFFFF] mt-8 p-5 rounded-xl bg-opacity-70 font-semibold text-xl">LOGIN</button>
        </div>
        </div>

        
        </div>
    </div>
  )
}
export default App
