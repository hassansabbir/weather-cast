const weatherIcons = {
    Thunderstorm: "https://i.ibb.co/SQyNHwj/mist.png",
    Drizzle: "https://i.ibb.co/JzRpLfJ/drizzle.png",
    Rain: "https://i.ibb.co/G0NC8pT/rain.png",
    Snow: "https://i.ibb.co/TYzztp2/snow.png",
    Clear: "https://i.ibb.co/Ct2Mgdv/clear.png",
    Clouds: "https://i.ibb.co/KXWy7H1/clouds.png",
  };
  
  export const getWeatherIcon = (condition) => {
    const defaultIcon = "/src/assets/images/default.png";
    return weatherIcons[condition] || defaultIcon;
  };