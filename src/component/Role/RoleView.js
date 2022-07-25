import React from 'react'
import './RoleView.css'
import RoleViewBody from './RoleViewBody'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const RoleView = () => {
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

            <div className='role-view-body-style-section'>
         <RoleViewBody />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 

    </>
  )
}

export default RoleView