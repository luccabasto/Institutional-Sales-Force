import {PRODUTOS, BLOG, SOBRE, DEVTEAM, SUPORTE} from "./Footer_Menu"


export const Footer_Items = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <Items Links={PRODUTOS} title="PRODUTOS" />
      <Items Links={BLOG} title="NOVIDADES" />
      <Items Links={SOBRE} title="SOBRE NÓS" />
      <Items Links={SUPORTE} title="SUPORTE" />
      <Items Links={DEVTEAM} title="DEVTEAM" />
    </div>
  )
}

export const Items = ({Links, title}) => {
  return <ul>
    <h1 className='mb-1 font-semibold'>{title}</h1> 
    {
      Links.map((Link) => (
        <li key={Link.name}>
          <a target='_blank' href={Link.link} className='text-gray-400 hover:text-teal-400 duration-300 
          text-sm cursor-pointer'>{Link.name}</a>
          <a className='cursor-none'> {Link.RM}</a>
        </li>
      ))
    }
  </ul>
}
