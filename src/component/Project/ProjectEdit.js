import React, { useState, useEffect } from 'react'
import './ProjectEdit.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useParams,useNavigate } from 'react-router-dom'
const ProjectEdit = () => {

    const[projectData, setProjectData] = useState({
        project_name:''
      })
      const {id} = useParams();
      const navigate = useNavigate();
      const projectChange = (e) =>{
        setProjectData(e.target.value)
      }
    
      const fetchProjectTag = () =>{
        fetch(`https://echofounder.com/inquiry/project/${id}`,{
          method:'GET',
          headers : { 
            'Accept': 'application/json',
            'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
           }
      
          })
          .then(res => res.json())
          .then(
            (result) => {
                setProjectData(result.data);
              console.log(projectData)
            });
        }
    
        useEffect(() =>{
            fetchProjectTag()
        }, [])
    
    
        const updatedProject = (e) =>{
          e.preventDefault();
          const result =  fetch(`https://echofounder.com/inquiry/project/${id}`,{
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
            body: JSON.stringify({'name':projectData})
         
      
      
          })
          .then(response => response.json())

           navigate('/project')
           fetchProjectTag()
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

            <div className='project-edit-body-style-section'>
              
            <div className='project-edit-css'>
   <div className='project-edit-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>PROJECT</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Edit PROJECTS</h4>
   </div>
   </div>
      <div className='project-edit-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow technology-project-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label" >Project</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" id='textid' placeholder='Project' name='project_name' value={projectData.project_name} onChange={projectChange} />
                        </div>
                    </div>
                   
                    <button type="submit" class="btn btn-warning float-end mb-5" onClick={updatedProject}>Updated Project</button>
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

export default ProjectEdit