"use client"

import React from 'react';
import donation from '../../../../assets/donation.jpg';
import donation2 from '../../../../assets/donation2.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { AuthContext } from '@/Providers/AuthProvider';

const DonationPage = () => {
  const { user } = useContext(AuthContext);

  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationChange = (event) => {
    setDonationAmount(parseFloat(event.target.value));
  };

  const handleDonationSubmit = (event) => {
    event.preventDefault();

    const dataToSend = {
      donationAmount,
      displayName: user?.displayName || 'Anonymous',
      email: user?.email || 'Unknown',
    };

    fetch('https://weather-cast-server.vercel.app/donation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log('Server response:', result);
      })
      .catch((error) => {
        console.error('Error sending donation:', error);
      });

    console.log(`Donation amount: $${donationAmount}`);
    console.log(
      `Donated by: ${user?.displayName || 'Anonymous'} (${
        user?.email || 'Unknown'
      })`
    );
  };

  return (
    <div className="max-w-[1460px] mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-1">
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-start pl-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold my-6 text-center md:text-left">
              Bring a smile to Their faces.
            </h1>
            <h3 className="text-lg md:text-2xl text-center md:text-left">
              A new way of giving back to your loved charities.
            </h3>
            <p className="text-base md:text-xl text-center md:text-left my-6 font-semibold">
              <span className="text-2xl text-fuchsia-600">Happiness </span>
              doesn't result from what we get, but from what we{' '}
              <span className="text-2xl text-red-700">give....</span>
            </p>
            <Link href="/">
              <button className="btn btn-accent">----Explore our project</button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image alt="" src={donation}></Image>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-16 bg-stone-800">
        <div className="md:w-1/2 pl-10">
          <p className="text-2xl md:text-5xl my-6 text-center md:text-left text-slate-50">
            Would You like to{' '}
            <span className="text-yellow-500 font-semibold">Help</span> <br />{' '}
            <span className="text-amber-500 font-semibold">people</span> Across the Globe?
          </p>

          <div className="flex items-center my-8 gap-3">
            <Image alt="" src={donation2}></Image>
            <h3 className="text-base md:text-xl text-center md:text-left text-slate-50">
              If you want to change the world, one wish at a time,
              <span className="text-lime-400 font-bold"> help kids</span>
            </h3>
          </div>
        </div>

        <div className="md:w-1/2 border-zinc-30 rounded-lg p-4 md:p-20">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-semibold mt-4 text-white text-center">
              Make a Donation
            </h3>
            <form onSubmit={handleDonationSubmit}>
              <div className="mb-4">
                <label className="block text-white">Donation Amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={donationAmount}
                  onChange={handleDonationChange}
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <p className="text-white">
                Donated by: {user?.displayName || 'Anonymous'} ({user?.email || 'Unknown'})
              </p>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-lg p-2 w-full hover:bg-blue-600"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
