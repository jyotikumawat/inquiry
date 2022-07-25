import React, { useState, useEffect } from 'react'
import './TechnologyEdit.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useParams,useNavigate } from 'react-router-dom'

const TechnologyEdit = () => {

  const[technologyEditData, setTechnologyEditData] = useState({
    technology_name:''
  })
  const {id} = useParams();
  const navigate = useNavigate();

  const technologyChange = (e) =>{
    setTechnologyEditData(e.target.value)
  }

  const fetchTagData = () =>{
    fetch(`https://echofounder.com/inquiry/technology/${id}`,{
      method:'GET',
      headers : { 
        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
  
       }
  
      })
      .then(res => res.json())
      .then(
        (result) => {
          setTechnologyEditData(result.data);
        });
    }

    useEffect(() =>{
      fetchTagData()
    }, [])


    const updatedTag = (e) =>{
      e.preventDefault();
      const result =  fetch(`https://echofounder.com/inquiry/technology/ ${id}`,{
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
        body: JSON.stringify({'name':technologyEditData})
     
  
  
      })
      .then(response => response.json())
  
       navigate('/technology')
       fetchTagData()
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

            <div className='technology-edit-body-section'>
              
            <div className='technology-edit-css'>
   <div className='technology-edit-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>TECHNOLOGY</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Edit Technology</h4>
   </div>
   </div>
      <div className='technology-edit-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow technology-edit-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label" >Technology Tag</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" id='textid' placeholder='Technology' name='technology_name' value={technologyEditData.technology_name} onChange={technologyChange} />
                        </div>
                    </div>
                   
                    <button type="submit" class="btn btn-warning float-end mb-5" onClick={updatedTag}>Updated Tag</button>
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

export default TechnologyEdit