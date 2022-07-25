import React from 'react'
import './Technology.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import TechnologyTable  from './TechnologyTable'

const Technology = () => {
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

            <div className='body-technology-style-section'>
            <TechnologyTable />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default Technology