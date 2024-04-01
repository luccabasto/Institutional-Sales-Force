import React, { useState} from 'react';
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

import { HiBarsArrowDown } from 'react-icons/hi2';
    //md
import {MdSupportAgent} from 'react-icons/md';
    //io5
import {IoBusiness} from 'react-icons/io5';

//Components

import HeaderItem from './Header_Item';



function Header() {
///navegação
    const navTo = (path) =>{
        const element = document.querySelector(path);
        if(element) {
            element.scrollIntoView({
                behavior: 'smooth'
            }); 
        } else {
            window.location.pathname = path
        }
    }

/// menu
    const [toggle, setToggle]=useState(false);
    const [toggleASIDE, setToggleASIDE] =useState(false); 

    const menu =[
        {
        id: 'parceiroS',
        text:'PARCEIROS',
        icon:HiOutlineShoppingBag
    },
    {
        id:'novidadesS',
        text:'APRENDIZADO',
        icon:HiOutlineBookOpen 
    },
    {
        id:'aboutS',
        text:'EMPRESA',
        icon:IoBusiness
    },
    
]

    const menuASIDE =[

        {
            id:'acessoS',
            name:'Acesso',
            icon:HiMiniUserCircle 
        },
        {
            id:'suporteS',
            name:'Suporte',
            icon:MdSupportAgent

        }
    ]
  return (
    <>
    <div className='justify-between p-5 text-black flex items-center text-[15px] font-semibold'>
        {/** Responsive Menu */}
        <div className='flex md:hidden gap-5'>
            {menu.map((item,index) =>index>2&&(
                <HeaderItem text={''} icon={item.icon} key={item.id}/>
            ))}
            <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
                <HeaderItem text={''} icon={HiBars4}/>
                {toggle ?
                    <div className='absolute mt-3 border-[1px] border-gray-700 p-3 px-5
                    py-4 rounded-md'>
                        {menu.map((item,index) =>index<3&&(
                            <HeaderItem text={item.text} icon={item.icon} key={index} id={item.id} navTo={navTo} />
                        ))}
                    </div>
                :null}
            </div>
        </div> {/** Responsive Menu */}

       <img src={header_logo} alt="Logo da SalesForce para o header" className='w-[80px] md:w-[115px] object-cover'></img>
        {/**Menu principal */}
        <ul className='hidden md:flex gap-5 cursor-pointer  mb-2'>
            {menu.map(options =>(
                    <HeaderItem key={options.id} id={options.id} icon={options.icon} text={options.text} navTo={navTo}/>
                
            ))}

        </ul>
        {/* Menu ASIDE* */}
        {/*<ul className='flex hidden gap-5 cursor-pointer hover:underline underline-offset-8 mb-2'>
          <li onClick={()=> console.log('Clicado')} className='hover:underline underline-offset-8'>
            ACESSO
            </li>
          <li className='hover:underline underline-offset-8'>
            SUPORTE
            </li>
            </ul> */}
    </div>
  </>
  )
    
}

export default Header