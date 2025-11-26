import React, { useState, useEffect } from "react";

  const Temperature = () => {
  const [temp, setTemp] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
 // Replace with your actual API key
  const CITY = "Singapore"; // Change to your location

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => setTemp(data.main.temp))
      .catch(err => console.error("Error fetching temperature:", err));
  }, []);

  return <p className="text-sm">🌡 Temperature: {temp ? `${temp}°C` : "Loading..."}</p>;
};

export default Temperature;