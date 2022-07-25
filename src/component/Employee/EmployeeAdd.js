import React from 'react'
import EmployeeForm from './EmployeeForm'
import './EmployeeAdd.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const EmployeeAdd = () => {
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

            <div className='body-employee-add-section'>
         <EmployeeForm />
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default EmployeeAdd