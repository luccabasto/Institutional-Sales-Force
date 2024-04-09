import {Footer_Items} from "./Footer_Items"
import { Footer_Social } from "./Footer_Social"

const Footer = () => {

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='flex justify-between md-flex md-justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
          
          <h1 className='lg:text-4xl text-4xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 '><span className='text-teal-400 '>Saiba de tudo</span> e não perca nenhuma novidade</h1>
          <div>
              <input type="text" placeholder='Inserir seu e-mail' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />

              <button className='bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full'>
                  Cadastre-se
              </button>
            </div>
      </div>
      <Footer_Items/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 text-center pt-2 text-gray-400 text-xs pb-8 inset">

        <span>©  2024 Appy. Plataforma desenvolvida como avaliação educacional pelos estudantes do curso de Análise e Desenvolvimento de Sistemas FIAP/SP em parceria com Sales Force.
        </span>
        <Footer_Social/>
      </div>

  </footer>
  )
}

export default Footer