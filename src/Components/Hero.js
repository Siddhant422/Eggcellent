import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-white'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-4 xl font-black p-4'>EGGCELLENT</h1>
            <a href='#' className='m-7 p-5 bg-yellow-500 text-2xl font-semibold flex justify-center items-center gap-3 rounded-full hover:bg-yellow-300 transition duration-300ms ease-in-out animate-bounce md:text-2xl'>ORDER NOW <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg></a>
        </div>

    )
}

export default Hero