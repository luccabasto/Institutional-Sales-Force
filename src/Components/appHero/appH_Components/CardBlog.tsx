import { MdOutlineReadMore } from 'react-icons/md'
// components

import Card_Interface from './Card_Interface'

//styles
import  '../../../Styles/Card.css'

function CardBlog() {
  return (
    
    <div id='novidadesS' className='cardBlog default'>
        <h3 className='relative bottom-5'>Novidades</h3>
        <section className='card-container'>
                
                <Card_Interface 
                    body='Descrição do artigo'
                    title='Título'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Novidades', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Hiii'
                    title='Hi2'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Aprendizado', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Descrição do artigo'
                    title='Título'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Novidades', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Hiii'
                    title='Hi2'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Aprendizado', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Hiii'
                    title='Hi2'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Aprendizado', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Hiii'
                    title='Hi2'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Aprendizado', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Hiii'
                    title='Hi2'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Aprendizado', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>
                <Card_Interface 
                    body='Hiii'
                    title='Hi2'
                    image='https://source.unsplash.com/random/500x400'
                    badge={{
                        text:'Aprendizado', 
                        filled:true,
                    }}
                    indicator='Best'
                    subtitle='Great'
                    btn={{
                        text: 'Leia mais',
                        href: '#',
                        type: 'secondary',
                        filled: true,
                        icon: <MdOutlineReadMore/>
                    }}/>

        </section>
        
    </div>
        

  )
}

export default CardBlog