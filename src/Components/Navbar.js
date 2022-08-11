import React from 'react';


const Navbar = ({ toggle }) => {
  return (
    <nav className='flex justify-between p-6 items-center h-16 bg-white text-black relative shadow-md font-semibold lg:h-20 lg:text-2xl' role="navigation">
      <a href='#'>EGG</a>
      <div className='px-4 cursor-pointer md:hidden flex-end' onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className='md:block hidden font-semibold'>
        <a href='#HOME' className='p-3 hover:bg-yellow-500 rounded-lg transition-all'>HOME</a>
        <a href='#MENU' className='p-3 hover:bg-yellow-500 rounded-lg transition-all'>MENU</a>
        <a href='#ABOUT' className='p-3 hover:bg-yellow-500 rounded-lg transition-all'>ABOUT</a>
        <a href='#CONTACT' className='p-3 hover:bg-yellow-500 rounded-lg transition-all'>CONTACT</a>
      </div>
    </nav>
  )
}

export default Navbar;