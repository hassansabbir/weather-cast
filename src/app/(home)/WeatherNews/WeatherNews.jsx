import React, { useEffect, useState } from "react";

const  WNews = () => {
  const [headlineData, setHeadlineData] = useState([]);
  const [latestData, setLatestData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [scienceData, setScienceData] = useState([]);
  const [cricketData, setCricketData] = useState([]);
  const [showMoreCountFeature, setShowMoreCountFeature] = useState(3);
  const [showMoreCountEntertainment, setShowMoreCountEntertainment] =
    useState(3);
  const [showMoreCountScience, setShowMoreCountScience] = useState(3);
  const [showMoreCountCricket, setShowMoreCountCricket] = useState(3);

  useEffect(() => {
    fetch("https://latestnewsapi.vercel.app/latest")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          setHeadlineData(data.data);
        } else {
          console.error("Failed to fetch headline news data");
        }
      })
      .catch((error) => {
        console.error("Error fetching headline news data:", error);
      });

    fetch("https://latestnewsapi.vercel.app/latest")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          setLatestData(data.data);
        } else {
          console.error("Failed to fetch latest news data");
        }
      })
      .catch((error) => {
        console.error("Error fetching latest news data:", error);
      });

    fetch("https://latestnewsapi.vercel.app/world")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          setFeatureData(data.data);
        } else {
          console.error("Failed to fetch feature news data");
        }
      })
      .catch((error) => {
        console.error("Error fetching feature news data:", error);
      });

    fetch("https://latestnewsapi.vercel.app/entertainment")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          setEntertainmentData(data.data);
        } else {
          console.error("Failed to fetch entertainment news data");
        }
      })
      .catch((error) => {
        console.error("Error fetching entertainment news data:", error);
      });

    fetch("https://latestnewsapi.vercel.app/science")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          setScienceData(data.data);
        } else {
          console.error("Failed to fetch science news data");
        }
      })
      .catch((error) => {
        console.error("Error fetching science news data:", error);
      });

    fetch("https://latestnewsapi.vercel.app/cricket")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          setCricketData(data.data);
        } else {
          console.error("Failed to fetch cricket news data");
        }
      })
      .catch((error) => {
        console.error("Error fetching cricket news data:", error);
      });
  }, []);

  const handleShowMoreFeature = () => {
    setShowMoreCountFeature((prevCount) => prevCount + 3);
  };

  const handleShowMoreEntertainment = () => {
    setShowMoreCountEntertainment((prevCount) => prevCount + 3);
  };

  const handleShowMoreScience = () => {
    setShowMoreCountScience((prevCount) => prevCount + 3);
  };

  const handleShowMoreCricket = () => {
    setShowMoreCountCricket((prevCount) => prevCount + 3);
  };

  const renderNewsSection = (data, title, showMoreFunction, showMoreCount) => {
    if (data.length === 0) {
      return null;
    }

    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.slice(0, showMoreCount).map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </a>
          ))}
        </div>

        {showMoreCount < data.length && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={showMoreFunction}
              className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="text-blue-800"></span>
      </h1>
      <div className="lg:flex  justify-around gap-6">
        <div className="lg:w-2/3">
          <h2 className="text-2xl text-center font-bold mb-4 text-blue-800">
            News Headlines
          </h2>
          <ul
            className="overflow-y-auto max-h-[400px] text-center text-ellipsis"
            style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            {headlineData.map((item, index) => (
              <li key={index} className="mb-4">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/3 ">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
            Latest News
          </h2>
          <div className="overflow-y-auto h-[400px]">
            <ul>
              {latestData.map((item, index) => (
                <li key={index} className="mb-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item.title}
                  </a>
                  <div className="mt-2 h-[200px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {renderNewsSection(
        featureData,
        "Features",
        handleShowMoreFeature,
        showMoreCountFeature
      )}
      {renderNewsSection(
        cricketData,
        "Cricket",
        handleShowMoreCricket,
        showMoreCountCricket
      )}
      {renderNewsSection(
        entertainmentData,
        "Entertainment",
        handleShowMoreEntertainment,
        showMoreCountEntertainment
      )}
      {renderNewsSection(
        scienceData,
        "Science",
        handleShowMoreScience,
        showMoreCountScience
      )}
    </div>
  );
};

export default  WNews;
