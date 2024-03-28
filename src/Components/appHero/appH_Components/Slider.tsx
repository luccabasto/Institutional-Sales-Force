import React, {useRef} from 'react'
import imageSlide from './Slider_Images'

const screenWidth=window.innerWidth

//Icons
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'


function Slider() {
  //buttons 
  const elementRef=useRef();

  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
}

const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
}

  return (
   <div>
    <HiChevronLeft className=" bg-transparent text-gray text-[30px] absolute mx-8 mt-[200px] cursor-pointer hidden lg:block" onClick={()=>sliderLeft(elementRef.current)} />

    <HiChevronRight className=" bg-transparent text-gray text-[30px] absolute mx-8 mt-[200px] right-0 cursor-pointer hidden lg:block" onClick={()=>sliderRight(elementRef.current)} />

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {imageSlide.map(imagem =>(
          <img src={imagem.src} alt={imagem.alt} className='min-w-full md:h-[400px] object-fill object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out shadow-md shadow-gray-800 ' />
        ))}
    </div>
  </div>
      
   
  )
}

export default Slider