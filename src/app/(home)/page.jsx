import Intelligence from "./Intelligence";
import Marq from "./Marq";
import ProductSection from "./ProductSection";
import WeatherUpdates from "./WeatherUodates/WeatherUpdates";

const HomePage = () => {
  return (
    <div>
      <WeatherUpdates />
      <Intelligence />
      <ProductSection />
      <Marq />
    </div>
  );
};
export default HomePage;
