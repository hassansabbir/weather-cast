import AOSInitializer from "@/AOS/AOSInitializer";
import axios from "axios";
import Link from "next/link";
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
            className="group h-[350px] lg:w-[450px] bg-[#F8F6F9] hover:bg-white hover:shadow-2xl hover:shadow-blue-200 rounded-3xl border border-slate-200 [perspective:1000px]"
          >
            <div className="relative h-full w-full rounded-xl px-4 py-6 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:delay-[0.3s] ">
              <div className="absolute flex flex-col items-center justify-center inset-0">
                <img
                  className="w-48 h-48 rounded-full"
                  src={product.image}
                  alt=""
                />
                <h2 className="text-[24px] font-bold">{product.name}</h2>
              </div>
              <div className="absolute flex flex-col items-center rounded-3xl justify-center inset-0 h-full w-full bg-white px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-[14px]">{product.shortDescription}</p>
                <Link href={`/featureTechnology/${product?._id}`}>
                  <p className="text-[16px] mt-5 cursor-pointer underline text-[#0078FF] font-bold">
                    View More
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
