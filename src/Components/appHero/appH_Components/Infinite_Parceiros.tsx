
///IMPORTANDO IMAGENS 
import label_01 from '../../../assets/images/parceiros/label_01.png'
import label_02 from '../../../assets/images/parceiros/label_02.png'
import label_03 from '../../../assets/images/parceiros/label_03.png'
import label_04 from '../../../assets/images/parceiros/label_04.png'
import label_05 from '../../../assets/images/parceiros/label_05.png'
import label_06 from '../../../assets/images/parceiros/label_06.png'
import label_07 from '../../../assets/images/parceiros/label_07.png'

//Styles
import '../../../Styles/Parceiro.css'

export default function InfiniteParceiros() {
  const labelIMG =[
    {
        id:1, src:label_01
    },
    {
        id:2, src:label_02, alt:'Logo INTER'
    },
    {
        id:3, src:label_03, alt:'Logo FORMULA1'
    },
    {
        id:4, src:label_04, alt:'Logo SUMUP'
    },
    {
        id:5, src:label_05, alt:'Logo ITAU'
    },
    {
        id:6, src:label_06, alt:'Logo BIC'
    },
    {
        id:7, src:label_07, alt:'Logo GLOBOPLAY'
    },
]

  return (
    <div id='parceiroS' className='_sliderParceiro max-sm:hidden max-sm:overflow-x-auto'>

      <p className='text-center text-xl py-5 text-gray-800 font-semibold'>Mais de 150.000 empresas, grandes, médias e pequenas, estão expandindo seus negócios com a Salesforce.</p> 

      <div className=' _slider overflow-x-auto scrollbar-none group'>
        <div className='_slide-track group-hover:pausa size-auto p-7'>
          <div className='_slide'>
              <img src={label_01} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_02} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_03} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_04} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_05} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_06} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_07} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>  
            {/**DOUBLE */}

           <div className='_slide'>
              <img src={label_02} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_03} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_04} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_07} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_05} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_01} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          <div className='_slide'>
              <img src={label_06} alt='logo gympass' className='
            min-w-[200px] h-[200px] object-contain rounded-full bg-white '/>
          </div>   
          
        </div>

      </div>
      
    </div>
  )
}
