import Image from "next/image";
import React from "react";

const RecentBlog = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Recent blog Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 -space-x-32 ">
        <div className="mt-4 ">
          <Image
            src="https://i.ibb.co/61fHgFh/pexels-george-desipris-826388.jpg"
            alt=""
            width={550}
            height={228}
            className="rounded sm:order-1"
          />
          <div className="mt-3 sm:order-2">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-2">
              Exploring the Majesty of Ocean Waves
            </h1>
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-justify mr-44">
              Ocean waves are a symbol of the sea's untamed power and beauty.
              They inspire awe, provide recreation, and support life beneath the
              surface. As we stand on the shore, watching the waves roll in, we
              are reminded of the vastness of our oceans and the wonders they
              hold.
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-14">
          <div className="flex">
            <Image
              src="https://i.ibb.co/BcCnfMb/pexels-sabeel-ahammed-68357.jpg"
              width={320}
              height={200}
              className="rounded"
              alt=""
            />
            <div className="ml-4">
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-2">
                Rainy Day Precautions: What to Do When It's Raining
              </h1>
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-justify">
                When it's raining, especially if it's a heavy or prolonged rain,
                it's important to take certain precautions and adapt your
                activities to stay safe and comfortable. Remember that light
                rain is often not a cause for concern and can be refreshing.
              </p>
            </div>
          </div>
          <div className="flex mt-4">
            <Image
              src="https://i.ibb.co/fH802hn/landscape-building-ruins-bare-trees-water-cloudy-sky-gloomy-day.jpg"
              width={320}
              height={200}
              className="rounded"
              alt=""
            />
            <div className="ml-4">
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-2">
                Rainy Day Precautions: What to Do When It's Raining
              </h1>
              <p className="text-sm sm:text-base md:text-base lg:text-lg text-justify">
                When it's raining, especially if it's a heavy or prolonged rain,
                it's important to take certain precautions and adapt your
                activities to stay safe and comfortable. Remember that light
                rain is often not a cause for concern and can be refreshing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 -space-x-32">
        <Image
          src="https://i.ibb.co/dbcvdBc/icelandic-geyser-panoramic-scenery-near-reykjavik-holes-erupting-creating-beautiful-fountain-with-ho.jpg"
          width={550}
          height={200}
          className="rounded"
          alt=""
        />
        <div className="mt-3 sm:mt-0">
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-2">
            Surviving a Drought: Essential Tips and Actions for Dry Spells
          </h1>
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-justify">
            Droughts, periods of prolonged dryness and water scarcity, can pose
            significant challenges to communities and individuals alike.
            However, armed with the right knowledge and proactive measures, it
            is possible to not only endure but also make the most of these
            challenging times. In this comprehensive guide, we will explore
            essential strategies for conserving water resources, safeguarding
            your garden or crops, and ensuring personal well-being during
            drought conditions.
          </p>
        </div>
      </div>

      <h1 className="text-center font-bold text-4xl mt-12">All blog Post</h1>
    </div>
  );
};

export default RecentBlog;
