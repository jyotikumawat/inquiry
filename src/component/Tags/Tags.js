import React from 'react'
import './Tags.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import TagsTable from './TagsTable'
const Tags = () => {
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

            <div className='bodys-style-section'>
         <TagsTable />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default Tags