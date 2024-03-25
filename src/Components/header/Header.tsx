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
    HiOutlineBookOpen
} from 'react-icons/hi2';
    //md
import {MdSupportAgent} from 'react-icons/md';
    //io5
import {IoBusiness} from 'react-icons/io5';

//Components
import HeaderItem from './HeaderItem';
import { HiBarsArrowDown } from 'react-icons/hi2';

function Header() {
    const [toggle, setToggle]=useState(false);

    const menu =[
        {
        id: 'PRODUTOS',
        name:'PRODUTOS',
        icon:HiOutlineShoppingBag
    },
    {
        id:'APRENDIZADO',
        name:'APRENDIZADO',
        icon:HiOutlineBookOpen 
    },
    {
        id:'EMPRESA',
        name:'EMPRESA',
        icon:IoBusiness
    },
    {
        id:'SUPORTE',
        name:'SUPORTE',
        icon:MdSupportAgent
    }
   
]
    const menuASIDE=[
        {
        id:'USER',
        name:'USER',
        icon:HiMiniUserCircle 
    }
    
]

  return (

    <div className='flex items-center justify-between p-5'>

        <div className='flex items-center gap-8'>

            <img src={header_logo} alt="Logo da SalesForce para o header" className='w-[80px] md:w-[115px] object-cover' />

            <div className=' md:flex gap-8'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} key={item.id}/>
                ))};

                {/**Responsive menu */}
                <div className='flex md:hidden gap-5'>
                    {menu.map((item,index) =>index>3&&(
                        <HeaderItem name={''} Icon={item.icon} key={item.id}/>
                    ))}

                    <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiBars4}/>
                        {toggle ?
                            <div className='absolute mt-3 border-[1px] border-gray-700 p-3 px-5 py-4'>
                                {menu.map((item,index) =>index>1&&(
                                    <HeaderItem name={item.name} Icon={item.icon} key={index}/>
                                ))}
                            </div> 
                        :null }
                    </div>

                </div> {/** Responsive Menu */}
            </div>
        </div>
    </div>
  )
}

export default Header