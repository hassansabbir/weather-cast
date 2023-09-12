import { createTest, suite } from "vitest";
import AboutPage from "./page";

const test = createTest();

suite("AboutPage component", () => {
  test.beforeEach(() => {
    render(<AboutPage />);
  });

  test("it renders the About Us section text", () => {
    test.it('should render the "About Us" heading', () => {
      expect(screen.getByText("About Us")).toBeTruthy();
    });

    test.it('should render the "Introducing WeatherCast" text', () => {
      expect(
        screen.getByText(
          "Introducing WeatherCast: Your Comprehensive Weather Forecast Solution. WeatherCast is a cutting-edge web application meticulously designed to provide you with a rich and insightful weather experience. Seamlessly integrating real-time data from trusted sources, WeatherCast offers you up-to-the-minute weather conditions, precise temperature forecasts, humidity levels, wind patterns, and more. Our interactive maps showcase radar imagery, satellite views, and weather advisories, ensuring you're always a step ahead of changing weather patterns."
        )
      ).toBeTruthy();
    });

    // Add more expectations for other text in the "About Us" section as needed
  });

  test("it renders the Data Source section text", () => {
    test.it('should render the "Data Source" heading', () => {
      expect(screen.getByText("Data Source")).toBeTruthy();
    });

    test.it(
      'should render the "The main provider of meteorological data" text',
      () => {
        expect(
          screen.getByText(
            "The main provider of meteorological data for weatherCast is AccuWeather and Ventusky. However, the radar layers have several other country-specific sources. All used sources are summarized on the page Data sources."
          )
        ).toBeTruthy();
      }
    );

    // Add more expectations for other text in the "Data Source" section as needed
  });

  // Similar tests for "Trusted By" and "Our Address" sections
});
