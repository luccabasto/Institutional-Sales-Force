import React, {useState} from 'react';
import header_logo from './../../assets/images/header_logo.png';

//Icons - react-icons
    //Hi2
import {
    HiMiniUserCircle, 
    HiBars4,
    HiHome,
    HiMagnifyingGlass,
    HiOutlineShoppingBag,
} from 'react-icons/hi2';

    //md
import {MdSupportAgent} from 'react-icons/md';

//Components

function Header() {

    const menu =[]

  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center'>
            <img src={header_logo} alt="Logo da SalesForce para o header" className='w-[80px] md:w-[115px] object-cover' />
        </div>
    </div>
  )
}

export default Header