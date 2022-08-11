import React from 'react'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
            <a href='#' className='p-4'>HOME</a>
            <a href='#' className='p-4'>MENU</a>
            <a href='#' className='p-4'>ABOUT</a>
            <a href='#' className='p-4'>CONTACT</a>
        </div>
    )
}

export default Dropdown