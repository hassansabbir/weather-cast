// Footer.test.jsx
import { suite, test } from "@vitest/runner";
import { render } from "react-dom";
import React from "react"; // Import React
import Footer from "./Footer";

// Import jsdom and configure it
import { JSDOM } from "jsdom";

// Create a new JSDOM instance and set it as the global window
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});
global.window = dom.window;
global.document = window.document;

suite("Footer component", (test) => {
  test("renders the footer content correctly", () => {
    const div = document.createElement("div");
    render(<Footer />, div);

    // Query elements directly using DOM methods
    const footerElement = div.querySelector(".footer");
    const titleElement = div.querySelector(".text-blue-800");

    // Assert that elements are present and have the expected content using if statements
    if (!footerElement) {
      throw new Error("Footer element should exist");
    }
    if (titleElement.textContent !== "weatherCast") {
      throw new Error("Title should have expected content");
    }

    // Clean up after the test
    div.remove();
  });
});
