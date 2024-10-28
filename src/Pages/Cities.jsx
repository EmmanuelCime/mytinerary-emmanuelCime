import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import img1 from "../assets/try_again.png"

export default function Cities() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchCities = () => {
            const url = search
                ? `http://localhost:8080/api/cities/all?name=${search}`
                : "http://localhost:8080/api/cities/all"

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setData(data.response)
                    console.log(data.response)

                    setLoading(false)
                })
                .catch((error) => {
                    setError(error)
                    setLoading(false)
                });
        };

        fetchCities();
    }, [search]);

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    };

    if (loading) {
        return (
            <div className="my-auto text-4xl w-full h-[60vh] flex justify-center items-center font-bold">
                Loading...
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <>
            <div className="flex flex-col items-center h-full bg-gradient-to-b from-sky-950 to-sky-800 md:pt-2 pb-10 md:min-h-[70dvh] min-h-[45dvh]">
                <div className="md:pt-10 pt-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-400 md:pb-14 pb-8">Cities</h2>
                </div>

                <div className="w-full flex justify-center md:mb-12 mb-7">
                    <div className="md:w-[500px] bg-sky-800 flex justify-center rounded-full items-center ">
                        <input
                            type="text"
                            placeholder="Search by city name"
                            value={search}
                            onChange={handleInputChange}
                            className="text-center md:p-3 p-1 placeholder-gray-100 text-gray-300 bg-transparent focus:outline-none"
                        />
                    </div>
                </div>


                {data.length === 0 ? (
                    <NotFoundCard />

                ) : (
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5 md:gap-7 md:py-2 w-[98vw] place-items-center">
                        {data.map((cities) => (
                            <div
                                className="relative rounded-lg overflow-hidden group w-[135px] h-[130px] md:w-[350px] md:h-[250px] lg:w-[320px] lg:h-[300px] xl:w-[340px] xl:h-[350px] md:mb-4"
                                key={cities._id}>

                                <img
                                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                                    src={cities.photo}
                                    alt={cities.name}
                                />

                                <div className="absolute inset-2 flex flex-col justify-between md:p-4">

                                    <div>
                                        <h3 className="text-white text-xs md:text-xl font-extrabold bg-[#000000bb] w-fit px-2 mb-1 p-1 rounded-lg">
                                            {cities.name}
                                        </h3>
                                        <p className="text-white text-xs md:text-xl font-bold bg-[#000000bb] w-fit px-2 p-1 rounded-lg">
                                            {cities.country}
                                        </p>
                                    </div>

                                    <NavLink
                                        to={`/details/${cities._id}`} // Asegúrate de que cities._id sea el ID correcto
                                        className="text-center xl:text-xl lg:text-lg md:text-base text-xs font-bold mt-2 inline-block bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300">
                                        View More
                                    </NavLink>

                                </div>
                            </div>
                        ))}

                    </div>
                )}

            </div>

        </>
    )
}

function NotFoundCard() {

    return (

        <div class="flex items-center justify-center md:m-12 m-5">
            <div class="flex flex-col items-center md:p-11 p-3 md:gap-5 gap-2 max-w-sm w-full bg-sky-800 shadow-lg rounded-lg text-center">
                <img src={img1} class="md:size-20 size-12" alt="try again" />
                <h2 class="font-semibold text-white md:text-2xl text-lg">No results were found</h2>
                <p class="md:text-xl mt-2 text-white">Try another search</p>
            </div>
        </div>
    )
}