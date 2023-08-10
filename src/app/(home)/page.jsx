import Banner from "./Banner";
import Intelligence from "./Intelligence";
import Marq from "./Marq";
import NewsLetter from "./NewsLetter";
import ProductSection from "./ProductSection";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Banner/>
      <Intelligence></Intelligence>
      <Marq />
      <ProductSection />
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default HomePage;
