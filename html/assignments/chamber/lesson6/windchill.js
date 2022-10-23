//Perceived Temperature = 13.12 + 0.6215T — 11.37 (V⁰-¹⁶) + 0.3965T (V⁰-¹⁶)

const windChillCelsius = (temperature, windSpeed) =>
  13.12 +
  0.6215 * temperature -
  11.37 * windSpeed ** 0.16 +
  0.3965 * temperature * windSpeed ** 0.16;

  const windChillFahrenheit = (temperature, windSpeed) =>
  35.74 +
  0.6215 * temperature -
  35.75 * windSpeed ** 0.16 +
  0.4275 * temperature * windSpeed ** 0.16;

  export const calculateWindchill = (
    temperature,
    windSpeed,
    units = undefined
  ) => {
    const result =
      units === "US"
        ? fahrenheit(temperature, windSpeed)
        : celsius(temperature, windSpeed);
    return Math.round(result);
  };

  //Convert numbers from one system to another

  //Convert Kilometers and Miles:
  const kmToMiles = (km) => km * 0.621371;
const milesToKm = (miles) => miles / 0.621371;

//Convert Celsius and Fahrenheit:
const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;