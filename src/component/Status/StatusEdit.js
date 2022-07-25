import React, { useState, useEffect } from 'react'
import './StatusEdit.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useParams,useNavigate } from 'react-router-dom'
const StatusEdit = () => {
    const[statusSection, setStatusSection] = useState({
        status_name:''
      })

      const {id} = useParams();
      const navigate = useNavigate();
      const statusChange = (e) =>{
        setStatusSection(e.target.value)
      }

      const fetchStatusData = () =>{
        fetch(`https://echofounder.com/inquiry/status/${id}`,{
          method:'GET',
          headers : { 
            'Accept': 'application/json',
            'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
           }
      
          })
          .then(res => res.json())
          .then(
            (result) => {
              setStatusSection(result.data);
            });
        }
    
        useEffect(() =>{
            fetchStatusData()
        }, [])


        const updatedStatus = (e) =>{
            e.preventDefault();
            const result =  fetch(`https://echofounder.com/inquiry/status/${id}`,{
              method:'PUT',
              mode:'cors',
              cache:'no-cache',
              credentials: 'same-origin',
              
              headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
        
              },
              redirect: 'follow',
              referrerPolicy: 'no-referrer', 
              body: JSON.stringify({'name':statusSection})
           
        
        
            })
            .then(response => response.json())
        
             navigate('/status')
             fetchStatusData()
          }
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

            <div className='status-edit-body-section'>
              
            <div className='status-edit-css'>
   <div className='status-edit-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>STATUS</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Edit Status</h4>
   </div>
   </div>
      <div className='status-edit-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow status-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label" >Status</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" id='textid' placeholder='Status' name='Status_name' value={statusSection.status_name} onChange={statusChange} />
                        </div>
                    </div>
                   
                    <button type="submit" class="btn btn-warning float-end mb-5" onClick={updatedStatus}>Updated Status</button>
                </form>
            </div>

            </div>
            </div>
            </div>

            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    
    </>
  )
}

export default StatusEdit