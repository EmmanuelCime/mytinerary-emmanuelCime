

function Cities() {
    return (
        <>
            <div className="flex flex-col items-center h-full bg-gradient-to-b from-sky-950 to-sky-800 p-5">
                <div className="pt-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-400 pb-14">Cities</h2>
                </div>

                <div className="h-80 w-96 flex items-center justify-center">
                    <CitySearch></CitySearch>
                </div>
            </div>

        </>
    )
}

function CitySearch() {
    return (
        <>
            <input type="text" placeholder="Search by city name" className="w-full p-2 border rounded mb-4 text-center"/>
        </>
    )
}


export default Cities