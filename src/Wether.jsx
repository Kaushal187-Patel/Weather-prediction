import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Wether.css";

export default function Wether({ updateWetherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4433609e93a9676fd5c656ce3ee34958";

  let getWeatherInfro = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      wind_speed: jsonResponse.wind.speed,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("City name submitted: " + city);
      setCity("");
      let info = await getWeatherInfro(city);
      updateWetherInfo(info);
    } catch {
      setError(true);
      // console.error("Error fetching weather data:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        {/* <br /> */}
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && <p style={{ color: "red" }}>City not found</p>}
      </form>
    </div>
  );
}
Wether.propTypes = {
  updateWetherInfo: PropTypes.func.isRequired,
};
