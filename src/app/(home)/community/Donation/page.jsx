import React from 'react';
import donation from '../../../../assets/donation.jpg'
import Image from 'next/image';

const DonationPage = () => {
    return (
        <div>
            <div className='flex flex-row justify-center items-center gap-6 mx-auto'>
                <div>
                <h1 className='text-5xl font-bold my-4'>Bring a smile to <br /> Their faces.</h1>
                <h3 className='text-2xl'>A new way of giving back to your <br /> loved charities.</h3>
                <p className='text-xl my-4'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br />Corporis, reiciendis!</p>
                <button className='btn btn-neutral'>Explore our project</button>
                </div>
                <div>
                    <Image className=' w-2/4' src={donation}></Image>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;