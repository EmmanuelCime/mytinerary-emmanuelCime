import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FooterButton } from "./Footer"
import logo from "../assets/logo.png"
import logIn from "../assets/LogIn.png"
import menuIcon from "../assets/menuIcon.png"


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex justify-between bg-sky-950 sticky top-0 left-0 right-0 z-50 shadow">

            <button onClick={toggleSidebar} className="md:hidden pt-4 pb-4 ps-2">
                <img src={menuIcon} alt="Menu icon" className="w-10 sm:hidden cursor-pointer" />
            </button>

            <div className="flex items-center md:hidden">
                <Link to="./" className="text-white font-bold text-xl">
                    MyTinerary
                </Link>
                <Link to="./" className="ps-3">
                    <img src={logo} alt="Logo" className="w-20 p-1 cursor-pointer" />
                </Link>

            </div>


            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`fixed left-0 top-0 h-full bg-cyan-900 w-64 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex flex-col items-center space-y-10'>
                        <img src={logo} alt="Logo" className="w-20 ms-3" />
                        <div className='flex flex-col items-center space-y-2 pb-8'>
                            <img src={logIn} alt="" className='w-14 ms-3 me-3 p-1' />
                            <FooterButton>Log In</FooterButton>
                        </div>

                        <ul className="mt-4 space-y-10 pb-10">
                            <li className="mb-2">
                                <Link to="./" className="text-white font-semibold md:pe-5 sm:text-[14px] sm:pe-3 md:text-[15px] lg:text-[20px] hover:bg-sky-700 xl:py-2 xl:px-6 rounded">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="./cities" className="text-white font-semibold md:pe-5 sm:text-[14px] sm:pe-3 md:text-[15px] lg:text-[20px] hover:bg-sky-700 xl:py-2 xl:px-6 rounded">
                                    Cities
                                </Link>
                            </li>
                        </ul>
                        <div className="">
                            <button className="mt-4 text-white hover:bg-blue-700" onClick={toggleSidebar}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Sidebar