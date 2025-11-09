"use client"

import { useState } from "react"

interface WeatherData {
  temperature: number
  condition: string
}

function WeatherWidget() {
  const [location, setLocation] = useState<string>("")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  
  const getLocation = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
  }
 
  return (
    <div className="mx-auto bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-100" onChange={getLocation}>
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">🌤️ Weather Widget</h1>
      <p className="text-gray-600 mb-6">
        Search for the current weather conditions in your city
      </p>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Enter city name..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition duration-200">
          Search
        </button>
      </div>
    </div>
  )
}

export default WeatherWidget
