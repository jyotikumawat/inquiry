import React from 'react'
import './Permission.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import PermissionBody from './PermissionBody'

const Permission = () => {
  return (
    <>
    <div className='Main'>
        <div className='left'>
            <Sidebar />
        </div>
        <div className='right'>

            <div className='header'>
            <Header />
            </div>

            <div className='bodys-permission-section'>
         <PermissionBody />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default Permission