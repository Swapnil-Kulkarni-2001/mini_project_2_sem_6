import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);

    const onMenuClicked = () => {
        setMenu(!menu);
    }


    return (
        <div className='flex flex-row text-md px-5 md:px-32 font-medium font-OpenSans items-center py-2 bg-white text-gray-600 shadow-sm '>

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
                    <Link href="/admin/department" className="hover:text-black font-OpenSans font-semibold">departments</Link>
                </div>
                <div className='mx-5 border-4 py-1 rounded-md border-white  hover:border-b-[#456995]'>
                    <Link href="/admin/employee" className="hover:text-black font-OpenSans font-semibold">employees</Link>
                </div>

                {/* <div className="flex flex-row items-center gap-x-2 px-3 ml-auto border-2 hover:border-[#ff6f3d]">
                    <input type="text" placeholder="search emp" className="outline-none" required />
                    <FiSearch className="cursor-pointer" />
                </div>
                <div onClick={onMenuClicked} className="flex flex-row relative items-center gap-x-1 ml-auto px-1 cursor-pointer hover:bg-gray-100">
                    <BsCircle className="text-3xl" />
                    <h1 className="text-xs">swapnilkulkarni987@gmail.com</h1>
                    <FiChevronDown className="text-xl" />

                    <div className={`flex flex-col items-start absolute right-0 top-10 ${menu ? "flex" : "hidden"}  bg-gray-100` }>
                        <div className="flex flex-row items-center py-2 pl-2 pr-14 w-full hover:border-2 hover:border-[#456995]">
                            <h1 className="text-sm">Your profile</h1>
                        </div>
                        <div className="flex flex-row items-center py-2 pl-2 pr-14 w-full hover:border-2 hover:border-[#456995] ">
                            <h1 className="text-sm">Settings</h1>
                        </div>
                        <div className="flex flex-row items-center gap-x-4 border-t-2 py-2 pl-2 pr-14 border-white hover:border-2 hover:border-[#456995]">
                            <IoIosLogOut className="text-xl" />
                            <h1 className="text-sm">Logout</h1>
                        </div>
                    </div>
                </div> */}

                <div className="flex flex-row items-center ml-auto gap-x-3">
                    <div className="flex flex-row items-center gap-x-2 px-3  border-2 h-full hover:border-[#ff6f3d]">
                        <input type="text" placeholder="search emp" className="outline-none" required />
                        <FiSearch className="cursor-pointer" />
                    </div>
                    <div onClick={onMenuClicked} className="flex flex-row relative h-full items-center gap-x-1  px-1 cursor-pointer hover:bg-gray-100">
                        <BsCircle className="text-3xl" />
                        <h1 className="text-xs">swapnilkulkarni987@gmail.com</h1>
                        <FiChevronDown className="text-xl" />

                        <div className={`flex flex-col items-start absolute right-0 top-10 ${menu ? "flex" : "hidden"} shadow-lg bg-gray-100`}>
                            <div onClick={()=>alert("cl")} className="flex flex-row items-center py-2 pl-2 pr-14 w-full hover:border-2 hover:border-[#456995]">
                                <h1 className="text-sm">Your profile</h1>
                            </div>
                            <div className="flex flex-row items-center py-2 pl-2 pr-14 w-full hover:border-2 hover:border-[#456995] ">
                                <h1 className="text-sm">Settings</h1>
                            </div>
                            <div className="flex flex-row items-center gap-x-4 border-t-2 py-2 pl-2 pr-14 border-white hover:border-2 hover:border-[#456995]">
                                <IoIosLogOut className="text-xl" />
                                <h1 className="text-sm">Logout</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar