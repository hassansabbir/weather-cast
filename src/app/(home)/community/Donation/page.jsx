import React from 'react';
import donation from '../../../../assets/donation.jpg'
import donation2 from '../../../../assets/donation2.svg'
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
                <p className='text-xl text-start my-6 font-semibold'><span className=' text-2xl text-fuchsia-600'>Happiness </span> doesn’t result <br /> from what we get,<br /> but from what we <span className=' text-2xl text-red-700'>give....</span> </p>
                <Link href='/'>
                <button className='btn btn-accent text-start'>----Explore our project</button>
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
                <div className='flex  items-center my-8 gap-3 '>
                    <Image alt='' src={donation2}></Image>
                    <h3 className=' text-slate-50 text-xl'>If you want to change the <br /> world, one wish at a time,<span className=' text-lime-400 font-bold'> help <br /> kids</span></h3>
                </div>
                </div>
                <div className=' border-zinc-30 bg-orange-100 rounded-lg p-20'>
                <div className='flex flex-col gap-10'>
                    <input type="number" 
                  placeholder="amount of money"
                  className="input input-bordered p-5 "
                  name="name"/>
                    <button className='btn px-8 pt-6 pb-6 text-2xl bg-emerald-300'>Donate Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;