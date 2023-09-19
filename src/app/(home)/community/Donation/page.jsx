import React from 'react';
import donation from '../../../../assets/donation.jpg'
import Image from 'next/image';
import Link from 'next/link';

const DonationPage = () => {
    return (
        <div className='max-w-[1460px] mx-auto'>
            <div className='flex flex-row justify-center items-center gap-1 '>
                <div className='w-1/2 flex flex-col justify-center items-center text-start'>
               <div>
               <h1 className='text-5xl font-bold my-6 text-start'>Bring a smile to <br /> Their faces.</h1>
                <h3 className='text-2xl text-start'>A new way of giving back to your <br /> loved charities.</h3>
                <p className='text-xl text-start my-6'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br />Corporis, reiciendis!</p>
                <Link href='/'>
                <button className='btn btn-neutral text-start'>Explore our project</button>
                </Link>
               </div>
                </div>
                <div className='w-1/2'>
                    <Image alt='' src={donation}></Image>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6 my-16 bg-stone-800'>
                <div>
                <p className='text-5xl my-6 text-slate-50'>Would You like to <span className=' text-yellow-500 font-semibold'>Help</span>  <br /> <span className=' text-amber-500 font-semibold'>people</span>  Across the Globe?</p>
                <h3 className=' text-xl text-slate-50'> Data from January 1 through November 30, 2018</h3>
                </div>
                <div className=' border-zinc-300'>
                <div className='flex flex-col gap-10'>
                    <input type="number" 
                  placeholder="amount of money"
                  className="input input-bordered p-5 "
                  name="name"/>
                    <button className='btn px-8 pt-6 text-2xl bg-emerald-300'>Donate Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;