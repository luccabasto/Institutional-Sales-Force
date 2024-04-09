
//Components
import Slider from './appH_Components/Slider'
import CardBlog from './appH_Components/CardBlog'
import Infinite_Parceiros from './appH_Components/Infinite_Parceiros'
import { About_Component} from './appH_Components/About_Component'
import Footer from '../footer/Footer'

//Construção layout
import{Constructor_layout} from '../appHero/fragments_Component/Constructor_layout'

function AppHero() {
  return (
    <>
        <div>
            <Slider autoSlide={true}/>
        </div>
        <div>
          <CardBlog/>
        </div>
        <div className='_default'>
          <About_Component/>
          <Infinite_Parceiros/>
          <Constructor_layout/>
        </div>
        <Footer/>
    </>
  )
}

export default AppHero