import React, { useEffect, useState } from "react"

const carouselData = [
  {
    id: 1,
    images: [
      { src: './src/assets/chichenItzaYucatan.jpeg', title: 'Chichen Itza, Yucatan, Mexico' },
      { src: './src/assets/parisFrance.jpg', title: 'Paris, France' },
      { src: './src/assets/shanghaiChina.jpg', title: 'Shanghai, China' }
    ]
  },
  {
    id: 2,
    images: [
      { src: './src/assets/barcelonaSpain.jpg', title: 'Barcelona, Spain' },
      { src: './src/assets/milanItaly.jpg', title: 'Milan, Italy' },
      { src: './src/assets/romeItaly.jpeg', title: 'Rome, Italy' }
    ]
  },
  {
    id: 3,
    images: [
      { src: './src/assets/shanghaiChina.jpg', title: 'Shanghai, China' },
      { src: './src/assets/bangkokThailand.jpg', title: 'Bangkok, Thailand' },
      { src: './src/assets/dubaiUnitedArabEmirates.jpg', title: 'Dubai, United Arab Emirates' }
    ]
  },
  {
    id: 4,
    images: [
      { src: './src/assets/newYorkUSA.jpg', title: 'New York, USA' },
      { src: './src/assets/istanbulTurkey.jpg', title: 'Istanbul, Turkey' },
      { src: './src/assets/londonUnitedKingdom.jpg', title: 'London, United Kingdom' }
    ]
  }
]


function Carousel () {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < carouselData[0].images.length - 1 ? prev + 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setActiveIndex((prev) => (prev < carouselData[0].images.length - 1 ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : carouselData[0].images.length - 1))
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 md:flex lg:space-x-4">
        {carouselData.map((carousel) => (
          <div key={carousel.id} className="relative w-full">
            <img
              src={carousel.images[activeIndex].src}
              alt={`Imagen ${carousel.id}`}
              className="w-full h-28 md:h-40 lg:h-48 xl:h-64 object-cover rounded-2xl"
            />
            <h3 className="bg-black bg-opacity-50 rounded-3xl text-sm md:text-base lg:text-xl text-center text-white mt-2 font-semibold">
              {carousel.images[activeIndex].title}
            </h3>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={handlePrev}
          className="bg-gray-800 bg-opacity-20 md:bg-gray-800 text-white p-1 md:p-2 rounded-l-lg hover:bg-gray-800 hover:bg-opacity-60 hover:md:bg-gray-800"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={handleNext}
          className="bg-gray-800 bg-opacity-20 md:bg-gray-800 text-white p-1 md:p-2 rounded-r-lg hover:bg-gray-800 hover:bg-opacity-60 hover:md:bg-gray-800"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}


export default Carousel