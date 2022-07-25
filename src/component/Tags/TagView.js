import React from 'react'
import './TagView.css'
import TagViewBody from './TagViewBody'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
const TagView = () => {
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

            <div className='tag-view-body-style-section'>
         <TagViewBody />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 

    </>
  )
}

export default TagView