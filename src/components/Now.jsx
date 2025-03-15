// Import dependencies
import { useEffect } from "react";
import { extractColors } from "extract-colors";

// Import styles
import "../styles/now.scss";

// Now component
const Now = ({ dataLocation, dataCurrent, colors, setColors }) => {
  // Extract colors from the weather condition icon
  useEffect(() => {
    if (dataCurrent?.condition?.icon) {
      extractColors(dataCurrent?.condition?.icon)
        .then((colors) => {
          console.log("colors", colors); // Log extracted colors
          setColors(colors?.[0]?.hex); // Set the primary color
        })
        .catch(console.error); // Handle errors
    }
  }, [dataCurrent]);

  return (
    <div className="now">
      {/* City and region details */}
      <div className="city-conditions">
        <div className="city-region">
          <h1 className="text-black dark:text-white">{dataLocation?.name}</h1>
          <h3 className="text-blue-500">
            {dataLocation?.region}, {dataLocation?.country}
          </h3>
        </div>

        {/* Current temperature */}
        <div className="city-temperature text-black dark:text-white">
          <h1>{Math.round(dataCurrent?.temp_c)}°</h1>
        </div>
      </div>

      {/* Weather condition icon and text */}
      <div className="now-details">
        <div className="city-icon">
          <img
            src={dataCurrent?.condition?.icon}
            alt={dataCurrent?.condition?.text}
          />
        </div>
        <h6
          className="drop-shadow-sm dark:drop-shadow-none"
          style={{ color: colors }}
        >
          {dataCurrent?.condition?.text}
        </h6>
      </div>
    </div>
  );
};

// Export Now component
export default Now;
