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
    const [toggleASIDE, setToggleASIDE] =useState(false);

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
    
]

    const menuASIDE =[

        {
            id:'USER',
            name:'Acesso',
            icon:HiMiniUserCircle 
        },
        {
            id:'SUPORTE',
            name:'Suporte',
            icon:MdSupportAgent

        }
    ]
  return (

    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-4'>

            {/**Responsive menu */}
            <div className='flex md:hidden gap-5'>
                {menu.map((item,index) =>index>2&&(
                    <HeaderItem name={''} Icon={item.icon} key={item.id}/>
                    ))}

                <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiBars4}/>
                    {toggle ?
                        <div className='absolute mt-3 border-[1px] border-gray-700 p-3 px-5 py-4 rounded-md'>
                            {menu.map((item,index) =>index<3&&(
                                <HeaderItem name={item.name} Icon={item.icon} key={index}/>
                                ))}
                            </div> 
                        :null }
                    </div>

                </div> {/** Responsive Menu */}  

            <img src={header_logo} alt="Logo da SalesForce para o header" className='w-[80px] md:w-[115px] object-cover' />

            <div className='hidden md:flex gap-8'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon} key={item.id}/>
                ))};
            </div>

              
        </div>
                    
        <div className=' items-center flex gap-5'> {/**Opções ASIDE */}
            <div className='hidden md:flex gap-5'>
                {menuASIDE.map((item)=> (
                    <HeaderItem name={item.name} Icon={item.icon} key={item.id}/>
                ))}
            </div>

            <div className='flex md:hidden gap-5'> {/**Responsive ASIDE */}
                    {menuASIDE.map((item, index)=>index=0&&(
                        <HeaderItem name={''} Icon={item.icon} key={item.id}/>
                    ))}

                    <div className=' md:hidden' onClick={()=> setToggleASIDE(!toggleASIDE)}>
                        <HeaderItem name={''}  Icon={HiMiniUserCircle}/>
                        {toggleASIDE ?
                            <div className={`absolute mt-3 border-[1px] border-gray-700 p-3 px-5 py-4 rounded-md ${window.innerWidth < 768 ? 'right-0' : ''}`}>{menuASIDE.map((item,index) => index<2&&(
                                    
                                    <HeaderItem name={item.name} Icon={item.icon} key={index}/>
                                ))}
                            </div>
                        : null}

                    </div>

            </div> {/** Responsive ASIDE */}
        </div> {/**ASIDE */}
    </div>
  )
}

export default Header