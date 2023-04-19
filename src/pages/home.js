import React from 'react'
import Link from 'next/link'
function Home() {
    return (
        <>
            <div className={` my-20 absolute flex flex-col justify-evenly pb-10 md:pb-0 bg-white top-20 left-0 w-full transition-all duration-500 ease-in  md:static md:flex md:w-full md:flex-row `}>
                <div className=' my-20 mx-5 md:ml-24 md:mr-10 border-4 py-1 rounded-md border-white  hover:border-blue-600'>
                  {/* /*image */ }
                  <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                      </div>
                 </div> {/* /*image */ }
                  
                 <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-12 mt-5 mb-5">
                 <Link href="/teaching" className="hover:text-black mx-20 text-2xl">Teaching skill</Link>
                 </button> 
                
                </div>
                <div className='my-20 mx-5 border-4 py-1 rounded-md border-white  hover:border-blue-600'>
               {/* /*image */ }
                <div className="flex flex-wrap justify-center ">
                    <div className="w-6/12 sm:w-4/12 px-4">
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                 {/* /*image */ }
                
                </div>  
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-12 mt-5 mb-5">
                <Link href="/non-teaching" className="hover:text-black mx-20 text-2xl">Non-Teaching skill</Link>
                </button> 
                    
                </div>

            </div>
        </>
    )
}

export default Home;