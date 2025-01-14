import React from 'react'
import Header from '../dashboard/_components/Header'

function Upgrade_Layout({children}) {
  return (
    <div>
      <Header/>
        <div className='mx-5 md:mx-20 lg:mx-36'>
          {children}
        </div>
    </div>
  )
}

export default Upgrade_Layout