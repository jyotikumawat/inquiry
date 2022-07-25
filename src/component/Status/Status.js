import React from 'react'
import './Status.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import StatusTable from './StatusTable'

const Status = () => {
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

            <div className='bodys-status-section'>
         <StatusTable />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div>
    </>
  )
}

export default Status