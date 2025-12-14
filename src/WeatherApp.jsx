import { useState } from "react";
import InfoBox from "./infoBox";
import Wether from "./Wether";

export default function WeatherApp() {
  const [wetherInfo, setWetherInfo] = useState({
    city: "Search City",
    temp: "NN",
    temp_min: "NN",
    temp_max: "NN",
    humidity: "NN",
    pressure: "NN",
    wind_speed: "NN",
  });

  let updateWetherInfo = (info) => {
    setWetherInfo(info);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <h1 >Weather App by Kaushal</h1>
      <br />

      <Wether updateWetherInfo={updateWetherInfo}/>
      <InfoBox info={wetherInfo} />
    </div>
  );
}
