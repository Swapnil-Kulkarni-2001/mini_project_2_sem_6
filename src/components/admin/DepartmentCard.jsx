import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from 'next/router';



const DepartmentCard = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col bg-[#e2f4f5] px-5 py-5 rounded-xl font-OpenSans  h-40">
            <h1 onClick={()=>{
                router.push("/admin/department/12");
            }} className="text-[#609797] text-sm font-bold cursor-pointer">Information Technology</h1>
            <h1 className="text-[#609797] text-xs mt-2">Head : Swapnil Kulkarni</h1>

            <div className='flex flex-row mt-auto'>
                <div className="bg-white p-1 rounded-full">
                    {/* <AiOutlineUser className="text-[#609797] text-2xl" /> */}
                    <img className="h-10 w-10 rounded-full" src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'/>
                </div>
                <div className="bg-white ml-auto p-1 self-end rounded-lg cursor-pointer">
                    <BsThreeDots className="text-[#609797] text-xl" />
                </div>
            </div>
        </div>
    )
}

export default DepartmentCard