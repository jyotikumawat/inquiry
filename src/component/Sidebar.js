import React from 'react'
import './Sidebar.css' 
import img2 from '../image/img2.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
        <div className='logo'>
          <span className='flex'><img src={img2} /> <p> Shards Dashboard</p></span>
            
        </div>

        <div className='nav-bar'>
          <ul>
            <Link to='/Dashboard'><i class="bi bi-grid-fill"></i>Dashboard</Link>
            <Link to='/inquiry'><i class="bi bi-pencil-fill"></i>Inquiry</Link>
            <Link to='/employe'><i class="bi bi-people-fill"></i>Employes</Link>
            <Link to='/tags'><i class="bi bi-tag-fill"></i>Tags</Link>
            <Link to='/role'><i class="bi bi-menu-button"></i>Roles</Link>
            <Link to='/technology'><i class="bi bi-file-earmark-code-fill"></i>Technology</Link>
            <Link to='/status'><i class="bi bi-card-heading"></i>>Status</Link>
            <Link to='/project'><i class="bi bi-command"></i>Project</Link>
            <Link to='/permission'><i class="bi bi-shield-fill-check"></i>Permission</Link>




          </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar