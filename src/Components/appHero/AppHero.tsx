import React from 'react'
//Components
import Slider from './appH_Components/Slider'
import CardBlog from './appH_Components/CardBlog'
import InfiniteParceiros from './appH_Components/InfiniteParceiros'
import { About_Component} from './appH_Components/About_Component'

//test - footer
import Footer from '../footer/Footer'
//Construção layout
import{Constructor_layout} from '../appHero/fragments_Component/Constructor_layout'


function AppHero() {
  return (
    <>
        <div>
            <Slider autoSlide={false}/>
        </div>
        <div>
          <CardBlog/>
        </div>
        <div className='_default'>
          <About_Component/>
          <InfiniteParceiros/>
          <Constructor_layout/>
        </div>
        <Footer/>
    </>
  )
}

export default AppHero