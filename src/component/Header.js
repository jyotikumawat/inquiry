import React from 'react'
import './Header.css'
import img1 from '../image/img1.png'

const Header = () => {
  return (
    <div className='header-cls'>
       <div className='left-header'>
           <span><i class="bi bi-search"></i> Search for something...</span>
       </div>
       <div className='right-header'>
           <div className='div-1'>
           <span><i class="bi bi-bell-fill"></i><sub>2</sub></span>
           </div>

           <div className='div-2'>
           <span>
           <img src={img1} />
          <p>Sierra Brooks <i class="bi bi-caret-down-fill"></i></p>
           </span>
           </div>
         
         
       </div>
    </div>
  )
}

export default Header