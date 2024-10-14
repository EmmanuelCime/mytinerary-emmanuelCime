import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { FooterButton } from "./Footer"


function Header() {
    return (
        <>
            <header className="bg-sky-950 py-1 sticky top-0 left-0 right-0 z-10 shadow">
                <nav className="bg-sky-950 hidden md:flex justify-between">
                    <div className="h-1/2 flex items-center">
                        <Logo></Logo>
                    </div>

                    <div className="flex items-center">
                        <div className="hidden sm:flex items-center">
                            <Link to="./Home.jsx" className="text-white font-semibold md:pe-5 sm:text-[14px] sm:pe-3 md:text-[20px] hover:bg-sky-700 xl:py-2 xl:px-6 rounded">
                                Home
                            </Link>
                            <Link to="./Cities.jsx" className="text-white font-semibold md:pe-5 sm:text-[14px] sm:pe-3 md:text-[20px] hover:bg-sky-700 xl:py-2 xl:px-6 rounded">
                                Cities
                            </Link>
                        </div>

                        <div className="flex flex-col items-center ps-4 pe-3">
                            <button className="hidden sm:block sm:ps-5 sm:pe-4 ps-10 pe-7">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white sm:size-6 lg:size-8">
                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <FooterButton>Log In</FooterButton>
                        </div>

                    </div>

                </nav>

            </header>
        </>
    )
}

export function Logo () {
    return (
        <>
            <Link to="./Home.jsx" className="pe-3">
            <img src={logo} alt="Logo" className="w-20 ms-3 me-3 p-1 cursor-pointer" />
            </Link>
            <Link to="./Home.jsx" className="text-white font-bold md:text-2xl">
            MyTinerary
            </Link>
        </>
    )
}


export default Header