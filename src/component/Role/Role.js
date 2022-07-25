import React from 'react'
import './Role.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import RoleTable from './RoleTable'

const Role = () => {
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

            <div className='bodys-role-section'>
         <RoleTable />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default Role