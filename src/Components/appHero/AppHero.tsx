import React from 'react'
//Components
import Slider from './appH_Components/Slider'
import CardBlog from './appH_Components/CardBlog'
import InfiniteParceiros from './appH_Components/InfiniteParceiros'

function AppHero() {
  return (
    <>
        <div>
            <Slider autoSlide={false}/>
        </div>
        <div>
          <CardBlog/>
        </div>
        <div>
          <InfiniteParceiros/>
        </div>
    </>
  )
}

export default AppHero