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
          <h1 className="text-black dark:text-white">{dataLocation?.name}</h1>
          <h3 className="text-blue-500">
            {dataLocation?.region}, {dataLocation?.country}
          </h3>
        </div>
        <div className="city-temperature text-black dark:text-white">
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
        <h6 style={{ color: colors }}>{dataCurrent?.condition?.text}</h6>
      </div>
    </div>
  );
};

export default Now;
