import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const register = () => {

  const [registerStatus, setRegisterStatus] = useState(true);

  const [uName, setUname] = useState("");
  const [uEmail, setUemail] = useState("");
  const [uPassword, setUpassword] = useState("");
  const [uPhone, setUphone] = useState("");


  const [msg, setMsg] = useState("");

  const router = useRouter();

  return (
    <div className="flex flex-col font-OpenSans">
      <Navbar />
      <div className="bg-[#fafbfe] h-full flex md:flex-row flex-col px-7 md:px-40 gap-x-10">
        <div className="bg-white flex flex-col my-10 px-3 md:px-24 py-10 basis-1/2">
          <form>
            <h1 className="text-3xl font-bold text-center md:text-start ">Register your institute</h1>
            <div className="flex flex-col">
              <label className="text-xs font-semibold mt-7 ">Institute name</label>
              <input onChange={(e) => setUname(e.target.value)} type="text" placeholder="Institute name" className="p-2 border mt-2 focus:outline-[#ff6f3d]" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold mt-7">institute ID</label>
              <input onChange={(e) => setUemail(e.target.value)} type="email" placeholder="institute id" className="p-2 border mt-2 focus:outline-[#ff6f3d]" required />
            </div>
          </form>
        </div>
        <div className="bg-white flex flex-col my-10 px-3 md:px-24 py-10 basis-1/2">
          <form>
            <div className="flex flex-col">
              <label className="text-xs font-semibold mt-7 ">your email</label>
              <input onChange={(e) => setUname(e.target.value)} type="text" placeholder="what is your email ID ?" className="p-2 border mt-2 focus:outline-[#ff6f3d]" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold mt-7">Password</label>
              <input onChange={(e) => setUpassword(e.target.value)} type="password" placeholder="Create password for your account" className="p-2 border mt-2 focus:outline-[#ff6f3d]" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold mt-7">Confirm password</label>
              <input onChange={(e) => setUpassword(e.target.value)} type="password" placeholder="confirm password" className="p-2 border mt-2 focus:outline-[#ff6f3d]" required />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold mt-7">Mobile number</label>
              <input onChange={(e) => setUphone(e.target.value)} type="text" placeholder="Mobile number" className="p-2 border mt-2 focus:outline-[#ff6f3d]" required />
            </div>

            <div className="mt-5">
              <button type="submit" className="bg-[#444] hover:bg-[#666666] px-8 py-2 rounded-3xl text-white text-lg font-semibold">Register now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register