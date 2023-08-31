import AOSInitializer from "@/AOS/AOSInitializer";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://weather-cast-server.vercel.app/productFeatures`)
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <div className="my-20 px-7 lg:px-0 max-w-[1460px] mx-auto">
      <AOSInitializer></AOSInitializer>;
      <h2 className="text-4xl lg:text-5xl font-bold text-center my-10">
        Our <span className="text-blue-800">New</span> features
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-28"
      >
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col shadow-xl hover:shadow-2xl rounded-3xl bg-base-200 px-8 py-14 relative "
          >
            <Image
              className="mx-auto border-8 border-white w-36 h-36 rounded-full absolute -top-16 left-1/2 transform -translate-x-1/2"
              src={product.image}
              alt="Ekl Logo"
              width={300}
              height={100}
            />
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-blue-800 mt-10 text-center">
                {product.name}
              </h2>
              <p className="mt-6 text-xl text-center">{product.description}</p>
            </div>
            <button className="btn btn-neutral bg-blue-800 text-white w-full mt-10">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
