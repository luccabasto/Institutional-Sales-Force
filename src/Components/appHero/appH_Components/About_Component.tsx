///image
import about_component360 from '../../../assets/images/about_component360.webp'


//Style
import '../../../Styles/About_Comp.css'

export const About_Component = () => {
  return (
    <section id='aboutS' className='default _default relative'>
        <article className='text-center py-7'>
            <h2 className='_title text-md mb-5 font-medium'>
                O que é a Salesforce?
            </h2>
            <p className='text-gray-800 text-md font-semibold  sm:mb-5'>
                A Salesforce é uma empresa de softwares que foca na solução de gerenciamento de relacionamento para aproximar empresas e pessoas. 
                É <span className='_span'> uma plataforma de  
                CRM</span> integrada que oferece a todos os departamentos uma visão única e compartilhada de cada cliente.
            </p>
        </article>
        <div className='text-gray-800 text-center py-7'>
            <h2 className='_title text-md pb-2 font-medium mb-2'>
                O que é a Salesforce faz? 
            </h2>
            <p className='text-md font-semibold leading-7 '>
            Juntos, conectamos as empresas aos 
            <span> seus clientes.</span>
            </p>
        </div>
        
        <article className='grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-2 gap-10 text-center'>
            <img className='mt-5 md:w-4/5' src={about_component360} alt="Icone que representa o Costumer 360 da Sales Force" />

            <p className='lg:text-xl text-base font-medium mb-5 tracking-normal text-gray-800  '>
            <span className='_span2'> Utilizando o Salesforce Customer 360, nossa plataforma de CRM integrada, sua empresa oferece experiências personalizadas para seus clientes.</span> Nossa solução fornece produtos poderosos e conectados para melhorar seu marketing, vendas, commerce, atendimento ao cliente, TI e muito mais.
            </p>
            
        </article>
    </section>
  )
}
