import React from 'react'
import './Dashboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Login from './Login';

const Dashboard = () => {
   


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

            <div className='body'>
            <p>Dashboard</p>
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 

    </>
  )
}

export default Dashboard