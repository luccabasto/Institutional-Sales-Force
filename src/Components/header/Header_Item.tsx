
function HeaderItem({ id, icon: Icon, text, navTo}) {
  return (
    <li onClick={() => navTo(`#${id}`)} className='cursor-pointer hover:underline underline-offset-8 flex items-center'>
      <Icon /> {/* Renderizando o ícone específico */}
      <span className='ml-1'>{text}</span> {/* Texto do item da lista */}
    </li>
  )
}

export default HeaderItem