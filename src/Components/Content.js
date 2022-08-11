import React from 'react'
import ImageOne from '../Images/egg.jpg'
import ImageTwo from '../Images/egg-2.jpg'
const Content = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={ImageOne} alt="egg" className='h-full rounded-md mb-20 shadow-md hover:-translate-y-4 transition-transform' />
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl mb-3'>EGG MUFFINS</h2>
                    <p className='mb-3'>Cripsy, Delicious, and Nutritious</p>
                    <span>₹45</span>
                </div>


            </div>
            <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
                <img src={ImageTwo} alt="egg" className='h-full rounded-md mb-20 shadow-md hover:-translate-y-4 transition-transform' />
                <div className='flex flex-col justify-center items-center md:3xl '>
                    <h2 className='text-2xl mb-3'>EGG SALAD</h2>
                    <p className='mb-3'>Cripsy, Delicious, and Nutritious</p>
                    <span>₹115</span>
                </div>


            </div>
        </div>
    )
}

export default Content