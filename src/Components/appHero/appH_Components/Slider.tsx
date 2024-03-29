import React, {useEffect, useRef} from 'react'
import imageSlide from './Slider_Images'

const screenWidth=window.innerWidth

//Icons
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'


function Slider({ autoSlide = false, autoSlideInterval = 6000}) {

  useEffect(() => {
    let slideInterval;
    if (autoSlide) {
      slideInterval = setInterval(() => {
        if (elementRef.current) {
          // Se estiver no último slide, volte para o primeiro slide
          if (elementRef.current.scrollLeft + elementRef.current.clientWidth === elementRef.current.scrollWidth) {
            elementRef.current.scrollLeft = 0;
          } else {
            sliderRight();
          }
        }
      }, autoSlideInterval);
    }
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);
  

  //buttons 
  const elementRef=useRef(null);
  const sliderRight=()=>{
    if(elementRef.current){
      elementRef.current.scrollLeft += screenWidth - 110;
    }
}

const sliderLeft=()=>{
    if(elementRef.current){
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
}

  return (
   <div>
    <HiChevronLeft className="bg-white rounded-full opacity-80 text-gray-500 hover:opacity-90 text-[30px] absolute mx-8 mt-[200px] cursor-pointer hidden lg:block" onClick={()=>sliderLeft()} />

    <HiChevronRight className=" bg-white rounded-full opacity-80 text-gray-500 hover:opacity-90  text-[30px] absolute mx-8 mt-[200px] right-0 cursor-pointer hidden lg:block" onClick={()=>sliderRight()} />

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {imageSlide.map(imagem =>(
          <img src={imagem.src} alt={imagem.alt} className='min-w-full md:h-[400px] object-fill object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out shadow-md shadow-gray-800 ' />
        ))}
    </div>
  </div>
      
   
  )
}

export default Slider