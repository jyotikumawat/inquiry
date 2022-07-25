import React from 'react'
import './Inquiry.css'
import InquiryTable from './InquiryTable'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
const Inquiry = () => {
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

            <div className='bodys'>
         <InquiryTable />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default Inquiry