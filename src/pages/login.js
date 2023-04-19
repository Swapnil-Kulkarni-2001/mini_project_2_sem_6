import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";



const login = () => {


  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const onShowToggleBtnClicked = () => {
    setVisible(!visible);
  }

  const onSubmitBtnClicked = (e) => {
    e.preventDefault();
  }


  return (
    <div className='flex flex-col w-full h-full'>
      <Navbar />
      <form onSubmit={onSubmitBtnClicked}>
        <div className='bg-[#fafafa] flex flex-col h-[100vh] w-full md:justify-center md:items-center'>
          <div className='flex flex-col bg-white shadow-md md:w-[28rem] mx-4 md:mx-0 px-5 md:px-16 py-10 pb-20'>
            <h1 className='text-lg font-semibold'>Login</h1>

            <label className="text-xs font-semibold mt-7">Email Id</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="p-2 border mt-2 focus:outline-[#ff865c]" required />
            <label className="text-xs font-semibold mt-5">Password</label>
            <div className='flex flex-row w-full border-2 mt-2 items-center pr-5 hover:border-[#ff865c]'>
              <input onChange={(e) => setPassword(e.target.value)} type={visible ? "text" : "password"} placeholder="password" className="p-2 focus:outline-none" required />
              <span onClick={onShowToggleBtnClicked} className="ml-auto text-sm text-[#444] cursor-pointer ">{visible ? "Hide" : "Show"}</span>
            </div>
            <Link href="/" className="text-xs self-end mt-2 text-[#4a90e4]">Forget password?</Link>

            <button type="submit" className="py-2 mt-12 rounded-sm bg-[#ff6f3d] hover:bg-[#ff865c] text-white">Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default login