import React from 'react';

function HeaderItem({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem