import React from 'react';
import donation from '../../../../assets/donation.jpg'
import Image from 'next/image';
import Link from 'next/link';

const DonationPage = () => {
    return (
        <div className='max-w-[1460px] mx-auto'>
            <div className='flex flex-row justify-center items-center gap-3 '>
                <div className='w-1/2 flex flex-col justify-center items-center text-start'>
               <div>
               <h1 className='text-5xl font-bold my-4 text-start'>Bring a smile to <br /> Their faces.</h1>
                <h3 className='text-2xl text-start'>A new way of giving back to your <br /> loved charities.</h3>
                <p className='text-xl text-start my-4'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br />Corporis, reiciendis!</p>
                <Link href='/'>
                <button className='btn btn-neutral text-start'>Explore our project</button>
                </Link>
               </div>
                </div>
                <div className='w-1/2'>
                    <Image alt='' src={donation}></Image>
                </div>
            </div>
            <div>
                <div>
                <p>Would You like to Help <br /> people Across the Globe?</p>
                <h3></h3>
                </div>
                <div>
                    <h3>form</h3>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;