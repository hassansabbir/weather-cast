'use client'
// import useClient from "@/hooks/useClient";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import contactUs from "../../assets/contactus.gif";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
// import { Inter } from "next/fonts/google"; // Updated import
// import styles from "@/styles/Contact.module.css";
import { Inter } from "next/font/google";


const images = [
  '/images/Contact.jpg',
  '/images/Contact2.jpg',
  '/images/contactus2.gif',
  '/images/contactus2.gif',
  '/images/contactus.gif',
  '/images/Contact.jpg',
  '/images/Contact2.jpg',
  '/images/contactus.gif'
];


const inter = Inter({ subsets: ["latin"] });

const Contact = () => {

  const form = useRef(null);
  // const [client, setClient] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setImgUrl(images[imgIndex]);
  }, [imgIndex]);

  const sendEmail = (event) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
            form.current.reset();
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };
  return (
    <>

      {/* <div className={`${styles.main} ${inter.className}`}></div> */}
      <div>
        <div className="hero min-h-[500px] bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              width={500} height={500} className="rounded-full"
              src={imgUrl}
              alt="contact"
            />
            <div className="shadow-md rounded-lg bg-[#F2F2F2]">
              <h1 className="text-7xl font-bold mb-5">
                <span className="text-[#1E40AF]">Contact</span> Us
              </h1>
              <p className="font-bold text-3xl mx-2">
                Get in touch with us for any inquiries or feedback about our
                weather forecast web app. We are here to assist you
              </p>
            </div>
          </div>
        </div>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://i.ibb.co/1QMJd4s/footer-bg.png')]"></div>
            <div className="container px-6 md:px-12">
              <div className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <h6 className="font-medium">Bangladesh</h6>
                  </div>
                  <div className="mx-auto mb-12 text-center lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h6 className="font-medium">Dhaka</h6>
                  </div>
                  <div className="mx-auto mb-6 text-center md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <h6 className="font-medium">+ 88012345678</h6>
                  </div>
                  <div className="mx-auto text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                    <h6 className="font-medium">teamwebwizard@gmail.com</h6>
                  </div>
                </div>
                <div className="mx-auto max-w-[700px]">
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="from_name"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        rows={8}
                        id="message"
                        name="message"
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit" value='Send'
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
