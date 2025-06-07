import React, { useState, useEffect } from "react";

const Temperature = () => {
  const [temp, setTemp] = useState(null);
  const API_KEY = "c54ab4fcb69a4326608abf6c8dd7702f"; // Replace with your actual API key
  const CITY = "Singapore"; // Change to your location

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => setTemp(data.main.temp))
      .catch(err => console.error("Error fetching temperature:", err));
  }, []);

  return <h3>🌡 Temperature: {temp ? `${temp}°C` : "Loading..."}</h3>;
};

export default Temperature;