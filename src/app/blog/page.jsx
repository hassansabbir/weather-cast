"use client";

import React, { useState } from "react";
import Image from "next/image";
import earthquake_step from "./../../assets/earthquake_step.png";
import tornado from "./../../assets/Tornado_Damage.jpg";
import earthquake from "./../../assets/earthquake.jpg";
import hurricane from "./../../assets/hurricane.jpg";
import flood from "./../../assets/flood.jpg";

const posts = [
  {
    photo: tornado,
    name: "Tornadoes",
    title: "Preparing for Tornadoes",
    content: "Tornadoes are powerful tropical storms...",
    introduction:
      "Tornadoes are powerful tropical storms. Tornadoes are violently rotating columns of air that extend from a thunderstorm to the ground. Tornadoes can destroy buildings, flip cars, and create deadly flying debris.",
    happens: "Staying Safe During a Tornado:",
    steps: [
      "Stay away from windows, doors, and outside walls.",
      "Do not go under an overpass or bridge. You’re safer in a low, flat location.",
      "Watch out for flying debris that can cause injury or death.",
      "If you can’t stay at home, make plans to go to a public shelter.",
    ],
  },

  {
    photo: hurricane,
    name: "Hurricanes",
    title: "Preparing for Hurricanes",
    content: "Hurricanes are dangerous and can cause...",
    introduction:
      "Hurricanes are dangerous and can cause major damage from storm surge, wind damage, rip currents and flooding. They can happen along any U.S. coast or in any territory in the Atlantic or Pacific oceans. Storm surge historically is the leading cause of hurricane-related deaths in the United States.",
    happens: "Stay Safe During a Hurricane",
    steps: [
      "Take refuge in a designated storm shelter or an interior room for high winds.",
      "Do not walk, swim or drive through flood waters. Turn Around. Don’t Drown! Just six inches of fast-moving water can knock you down, and one foot of moving water can sweep your vehicle away.",
      "Go to the highest level of the building if you are trapped by flooding. Do not climb into a closed attic. You may become trapped by rising flood water.",
      "If you live in a mandatory evacuation zone and local officials tell you to evacuate, do so immediately.",
    ],
  },
  {
    photo: flood,
    name: "Floods",
    title: "Preparing for Floods",
    content: "Flooding is a temporary overflow of water...",
    introduction:
      "Flooding is a temporary overflow of water onto land that is normally dry. Failing to evacuate flooded areas or entering flood waters can lead to injury or death. Floods may,Result from rain, snow, coastal storms, storm surges and overflows of dams and other water systems. Develop slowly or quickly. Flash floods can come with no warning. Cause outages, disrupt transportation, damage buildings and create landslides.",
    happens: "Staying Safe During a Flood",
    steps: [
      "Do not walk, swim or drive through flood waters. Turn Around. Don’t Drown!",
      "Stay inside your car if it is trapped in rapidly moving water. Get on the roof if water is rising inside the car.",
      "Get to the highest level if trapped in a building. Only get on the roof if necessary and once there signal for help. Do not climb into a closed attic to avoid getting trapped by rising floodwater.",
      "Evacuate immediately, if told to evacuate. Never drive around barricades. Local responders use them to safely direct traffic out of flooded areas.",
    ],
    image: "",
  },
  {
    photo: earthquake,
    name: "Earthquakes",
    title: "Understanding Earthquakes",
    content: "An earthquake is a sudden, rapid shaking...",
    introduction:
      "An earthquake is a sudden, rapid shaking of the ground caused by the shifting of rocks deep underneath the earth’s surface. Earthquakes can cause fires, tsunamis, landslides or avalanches. While they can happen anywhere without warning, areas at higher risk for earthquakes include Alaska, California, Hawaii, Oregon, Puerto Rico, Washington and the entire Mississippi River Valley.",
    happens: "If an earthquake happens, protect yourself right away:",
    steps: [
      "If you are in a car, pull over and stop. Set your parking brake.",
      "If you are in bed, turn face down and cover your head and neck with a pillow.",
      "If you are outdoors, stay outdoors away from buildings.",
      "If you are inside, stay and do not run outside and avoid doorways.",
    ],
    image: earthquake_step,
  },
];

const HomePage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (index) => {
    setSelectedPost(posts[index]);
  };

  return (
    <div className="container">
      <main className="main">
        <div className="sidebar">
          <h2>Disaster Types</h2>
          {posts.map((post, index) => (
            <div
              key={index}
              className="post-card"
              onClick={() => handlePostClick(index)}
            >
              <h2 className="text-blue-800">{post.title}</h2>

              <p>{post.content}</p>
            </div>
          ))}
        </div>
        <div className="content">
          {selectedPost ? (
            <div className="post-details gap-1">
              <Image
                src={selectedPost.photo}
                alt="Protect Yourself"
                width={500}
                height={300}
              />
              <h2 className="text-5xl font-semibold mt-1 mb-1">{selectedPost.name}</h2>
              <p>{selectedPost.introduction}</p>
              <h2 className="text-xl font-semibold mt-1 mb-1">Stay Safe During {selectedPost.name}</h2>
              
              <p>{selectedPost.steps}</p>
              <h2>Protect Yourself</h2>
              <div className="image-container">
                {selectedPost.image ? (
                  <Image
                    src={selectedPost.image}
                    alt="Protect Yourself"
                    width={500}
                    height={300}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
           
            <div className="flex justify-center  items-center">
              <div>
              <p className="text-5xl font-semibold mb-1">we care about you</p>
              <p>Please select a disaster type to view details.</p>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
        }

        .main {
          display: flex;
          flex: 1;
          padding: 2rem;
        }

        .sidebar {
          flex: 1;
          padding-right: 2rem;
          border-right: 1px solid #ccc;
        }

        .content {
          flex: 2;
          padding-left: 2rem;
        }

        .post-card {
          cursor: pointer;
          background-color: #f4f4f4;
          border-radius: 5px;
          padding: 1rem;
          margin: 1rem 0;
        }

        .post-details {
          background-color: #f4f4f4;
          border-radius: 5px;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
