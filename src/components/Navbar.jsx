import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const router = useRouter();
  const [open, setOpen] = useState(false);



  return (
    <div className='flex flex-row text-md px-5 md:px-40 font-medium items-center py-2 bg-white text-gray-600 shadow-sm '>

      <div className='border-4 py-1  border-white'>
        <h1 className="text-3xl text-[#183e6b] font-bold">Manaze</h1>
      </div>

      <div onClick={() => setOpen(!open)} className="ml-auto sm:hidden">
        {
          open ? <GrClose className="text-2xl text-black" /> : <GiHamburgerMenu className="text-2xl text-black" />
        }
      </div>

      <div className={`absolute flex flex-col pb-10 md:pb-0 bg-white top-20 left-0 w-full transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 sm:opacity-100'} md:static md:flex md:w-full md:flex-row `}>
        <div className='mx-5 md:ml-24 md:mr-10 border-4 py-1 rounded-md border-white  hover:border-b-[#456995]'>
          <Link href="/" className="hover:text-black font-OpenSans font-semibold">About</Link>
        </div>
        <div className='mx-5 border-4 py-1 rounded-md border-white  hover:border-b-[#456995]'>
          <Link href="/" className="hover:text-black font-OpenSans font-semibold">Showcase</Link>
        </div>

        <div className='flex flex-col md:flex-row md:ml-auto'>
          <div className='mx-5 mt-5 md:mt-0'>
            <button onClick={() => router.push("/login")} className='px-6 py-2 font-OpenSans text-sm rounded-sm bg-[#ff6f3d] hover:bg-[#ff865c] text-white'>Login</button>
          </div>

          <div className='mx-5 mt-5 md:mt-0'>
            <button onClick={()=> router.push("/register")} className='px-6 py-2 font-OpenSans text-sm rounded-sm bg-[#444] hover:bg-[#666666] text-white'>Register</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar