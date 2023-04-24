import React from 'react'
import Navbar from '@/components/admin/Navbar'
import DepartmentCard from '@/components/admin/DepartmentCard'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FcDepartment } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";

const index = () => {
    return (
        <div className="flex flex-col font-OpenSans">
            <Navbar />
            <div className="flex flex-col px-64 py-10">
                <div className="flex flex-col h-60 mb-10 p-5 rounded-2xl bg-[#456995] ">
                    <div className="flex flex-row mt-auto items-center ">
                        <h1 className="text-4xl font-semibold text-white">Departments</h1>
                        <AiOutlineInfoCircle className="text-3xl text-white self-end ml-auto" />
                    </div>
                </div>
                <div className="flex flex-row gap-x-20">
                    <div className="flex flex-col basis-[25%]">
                        <div className="flex flex-col p-5 rounded-2xl border shadow-sm">
                            <div className="flex flex-row items-center">
                                <FcDepartment className="text-3xl mr-3" />
                                <h1 className="text-base text-gray-600 font-semibold">Department</h1>
                                <BsThreeDotsVertical className="ml-auto cursor-pointer" />
                            </div>
                            <button className="bg-[#456995] mt-3 py-2 rounded-md text-white font-bold">create</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 basis-[75%]">
                        <DepartmentCard />
                        <DepartmentCard />
                        <DepartmentCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index