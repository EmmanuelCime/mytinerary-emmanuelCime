import React, { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import img1 from "../assets/try_again.png"

function CityDetail() {

    const { cityId } = useParams()
    const [city, setCity] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/cities/id/${cityId}`)
                console.log(response)

                if (!response.ok) throw new Error("Error fetching city data")
                const data = await response.json()
                setCity(data.response)
                console.log(data.response)

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };

        fetchCity()
    }, [cityId])

    if (loading) {
        return <div className="my-auto text-4xl w-full h-[60vh] flex justify-center items-center font-bold">Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!city) {
        return (
            <div className="flex items-center justify-center m-12">
                <div className="flex flex-col items-center p-11 gap-5 max-w-sm w-full bg-sky-800 shadow-lg rounded-lg text-center">
                    <img src={img1} className="size-20" alt="try again" />
                    <h2 className="font-semibold text-white text-2xl">No results found</h2>
                    <p className="text-xl mt-2 text-white">Try another search</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-sky-950 to-sky-800 pb-3">
            <div className="flex flex-col items-center lg:h-[1100px] md:h-[650px] h-[435px]">
                <div className="flex justify-center relative md:w-full h-full w-[310px]">
                    <img
                        src={city.photo}
                        alt={city.name}
                        className="xl:w-[1200px] xl:h-[1050px] lg:h-[1020px] lg:w-[900px] md:w-[750px] md:h-[590px] w-[310px] h-[380px] object-cover rounded-lg shadow-lg mt-5"
                    />

                    <div className="flex flex-col items-center justify-center lg:gap-5 gap-1 absolute inset-0 rounded-lg">
                        <div className="bg-gray-300 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl md:mb-5 mb-2 w-fit">
                            <h2 className="xl:text-4xl lg:text-2xl md:text-lg text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600 md:p-1">{city.name}</h2>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs font-bold text-white">{city.description}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Country:</strong> {city.country}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Continent:</strong> {city.continent}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Language:</strong> {city.language}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Currency:</strong> {city.currency}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Time Zone:</strong> {city.timeZone}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Population:</strong> {city.population}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Latitude:</strong> {city.latitude}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-3 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Longitude:</strong> {city.longitude}</p>
                        </div>

                        <div className="bg-gray-950 bg-opacity-80 lg:p-4 md:p-2 p-1 rounded-2xl text-center">
                            <p className="xl:text-lg lg:text-base text-xs text-white"><strong>Area Code:</strong> {city.areaCode}</p>
                        </div>

                        <NavLink
                            to={`/cities`}
                            className="lg:p-4 md:p-2 p-1 lg:mt-9 mt-5 lg:text-lg text-xs bg-blue-800 hover:bg-blue-950 text-white font-bold rounded">
                            Back to Cities
                        </NavLink>

                    </div>
                </div>

            </div>

            <div className="flex justify-center md:pt-12 pt-8">

                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-400 md:pb-14 pb-8">Itineraries</h2>

                

            </div>

        </div>
    )
}


export default CityDetail