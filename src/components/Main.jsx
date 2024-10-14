import { Link } from "react-router-dom"
import Carousel from "../Carousel"
import img1 from "../assets/Borabora.jpg"
import img2 from "../assets/Mandalay.jpeg"
import img3 from "../assets/Marrakech.jpg"


function Main() {
    return (
        <>
            <div className="h-full bg-gradient-to-b from-sky-950 to-sky-800 p-5">
                <div>
                    <IntroductoryMessage></IntroductoryMessage>
                    <CallToAction></CallToAction>

                    <div className="container mx-auto pt-8 pb-4 md:p-12 lg:pt-20 xl:pt-24">
                        <h2 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 pb-5 md:pb-14">Popular Mytineraries</h2>
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
function IntroductoryMessage() {
    return (
        <>
            <h1 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 p-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">MyTinerary</h1>
            <p className="text-gray-50 text-center m-2 md:m-10 text-lg md:text-xl lg:text-2xl xl:text-3xl">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
        </>
    )
}


function CallToAction() {
    return (
        <div className="text-center mt-10 md:mt-16 p-4 md:p-5 bg-gradient-to-r from-violet-950 to-blue-500 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-around">
                <img
                    src={img1}
                    alt="Bora bora"
                    className="w-full md:w-1/3 h-28 md:h-52 lg:h-64 object-cover rounded-lg mb-4 hover:scale-110 transform transition duration-300 ease-in-out"
                />
                <img
                    src={img2}
                    alt="Mandalay"
                    className="w-full md:w-1/4 h-28 md:h-52 lg:h-64 object-cover rounded-lg mb-4 hover:scale-110 transform transition duration-300 ease-in-out"
                />
                <img
                    src={img3}
                    alt="Marrakech"
                    className="w-full md:w-1/3 h-28 md:h-52 lg:h-64 object-cover rounded-lg mb-4 hover:scale-110 transform transition duration-300 ease-in-out"
                />
            </div>

            <p className="text-lg md:text-2xl lg:text-4xl font-bold text-white m-3 md:m-7">
                Live an <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">UNIQUE EXPERIENCE</span> and discover places where <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300">DREAMS COME TRUE!</span> ✨
            </p>
            <Link to="/Cities.jsx" className="mt-4 px-6 py-2 text-xs md:text-lg lg:text-xl text-white font-bold bg-indigo-800 hover:bg-indigo-950 rounded-full">
                🚀 YES, I WOULD LOVE TO! 🌍
            </Link>
        </div>
    );
}


export default Main