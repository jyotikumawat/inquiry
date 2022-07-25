import React from 'react'
import './Project.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import ProjectTable from './ProjectTable'

const Project = () => {
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

            <div className='project-body-section'>
         <ProjectTable />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default Project