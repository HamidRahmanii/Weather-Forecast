import "../styles/now.scss";
import { useEffect } from "react";
import { extractColors } from "extract-colors";

const Now = ({ dataLocation, dataCurrent, colors, setColors }) => {
  useEffect(() => {
    if (dataCurrent?.condition?.icon) {
      extractColors(dataCurrent?.condition?.icon)
        .then((colors) => {
          console.log("colors", colors);
          setColors(colors?.[0]?.hex);
        })
        .catch(console.error);
    }
  }, [dataCurrent]);

  return (
    <div className="now">
      <div className="city-conditions">
        <div className="city-region">
          <h1>{dataLocation?.name}</h1>
          <h3>
            {dataLocation?.region}, {dataLocation?.country}
          </h3>
        </div>
        <div className="city-temperature">
          <h1>{Math.round(dataCurrent?.temp_c)}°</h1>
        </div>
      </div>
      <div className="now-details">
        <div className="city-icon">
          <img
            src={dataCurrent?.condition?.icon}
            alt={dataCurrent?.condition?.text}
          />
        </div>
        <h5 style={{ color: colors }}>{dataCurrent?.condition?.text}</h5>
      </div>
    </div>
  );
};

export default Now;
