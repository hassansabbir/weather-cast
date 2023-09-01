const weatherIcons = {
  Thunderstorm: "https://i.ibb.co/SQyNHwj/mist.png",
  Drizzle: "https://i.ibb.co/JzRpLfJ/drizzle.png",
  Rain: "https://i.ibb.co/G0NC8pT/rain.png",
  Snow: "https://i.ibb.co/TYzztp2/snow.png",
  Clear: "https://i.ibb.co/Ct2Mgdv/clear.png",
  Clouds: "https://i.ibb.co/KXWy7H1/clouds.png",
  Haze: "https://i.ibb.co/56R9wyq/haze-Weather-Icon.png",
};

export const getWeatherIcon = (condition) => {
  const defaultIcon =
    "https://i.ibb.co/hyzPq0w/free-cloudy-weather-11-1147979.png";
  return weatherIcons[condition] || defaultIcon;
};
