import React from 'react'
import Navbar from '@/components/admin/Navbar'
import { AiOutlineInfoCircle } from "react-icons/ai";
import DepartmentCard from '@/components/admin/DepartmentCard';
import { FcDepartment } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { useRouter } from 'next/router';


const departmentId = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col font-OpenSans">
            <Navbar />
            <div className="flex flex-col px-64 py-10">
                <div className="flex flex-col h-60 mb-10 p-5 rounded-2xl bg-[#456995] bg-[url('https://www.gstatic.com/classroom/themes/img_code.jpg')]">
                    <div className="flex flex-row mt-auto items-center ">
                        <h1 className="text-4xl font-semibold text-white">Information Technology</h1>
                        <AiOutlineInfoCircle className="text-3xl text-white self-end ml-auto" />
                    </div>
                </div>
                <div className="flex flex-row gap-x-20">
                    <div className="flex flex-col basis-[30%]">
                        <div className="flex flex-col items-center p-5 rounded-2xl border shadow-sm">
                            <div className="bg-white p-1 rounded-full">
                                {/* <AiOutlineUser className="text-[#609797] text-2xl" /> */}
                                <img className="h-20 w-20 rounded-full" src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                            </div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-base text-gray-600 font-semibold">Dr ABC XYZ</h1>
                            </div>
                            <div className="flex flex-row items-center">
                                <h1 className="text-xs text-gray-600 font-medium">~Department Head</h1>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col gap-y-5 basis-[70%]">
                        <DepartmentCard />
                        <DepartmentCard />
                        <DepartmentCard />
                    </div> */}

                    <div className="flex flex-col gap-y-5 basis-[70%]">
                        <div onClick={() => {
                            router.push({
                                pathname: "/admin/department/[departmentid]/teachingstaff",
                                query: {
                                    departmentid: router.query.departmentid
                                }
                            }, "/admin/department/[departmentid]/teachingstaff");
                        }} className="flex flex-row items-center p-5 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer">
                            <BiGroup className="text-2xl text-gray-600 mr-5" />
                            <h1 className="text-sm">teaching staff</h1>
                        </div>
                        <div onClick={() => {
                            router.push({
                                pathname: "/admin/department/[departmentid]/nonteachingstaff",
                                query: {
                                    departmentid: router.query.departmentid
                                }
                            }, "/admin/department/[departmentid]/nonteachingstaff");
                        }} className="flex flex-row items-center p-5 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] cursor-pointer">
                            <BiGroup className="text-2xl text-gray-600 mr-5" />
                            <h1 className="text-sm">non teaching staff</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default departmentId