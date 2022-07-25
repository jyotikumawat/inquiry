import React,{useState, useEffect} from 'react'
import './ProjectTable.css'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const ProjectTable = () => {

    const[name, setName] = useState();
    const [data, setData] = useState([]);
  
    const handleProject = (e) => {
      e.preventDefault();
      // const items = {name}
      const result =  fetch("https://echofounder.com/inquiry/project",{
        method:'POST',
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
        body: JSON.stringify({'name':name})
     
  
  
      })
      .then(response => response.json())
  
      alert(name)
  
  
       // To print data into table
  
  
       fetch('https://echofounder.com/inquiry/project', {
        method:'GET',
        headers : { 
          'Accept': 'application/json',
          'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
  
         }
  
      })
  .then((response) => response.json())
  .then((result) => {
  setData(result.data.reverse())
  
  
  })
  
  
    }
  
  
    const fetchProject = () =>{
  
  
      fetch('https://echofounder.com/inquiry/project', {
            method:'GET',
            headers : { 
              'Accept': 'application/json',
              'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
             }
      
          })
    .then((response) => response.json())
    .then((result) => {
     setData(result.data)
   
    })
  
  }
  useEffect(() =>{
    fetchProject();
  }, []);

  

  
  // delete tag
  const deleteProject = (id) =>{
  
    let willDelete  = swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {   
      if (willDelete) {
    fetch(`https://echofounder.com/inquiry/project/${id}`,{
      method:'DELETE',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      }
    })
  }
  }).then((result) =>{
      result.json().then((resp) =>{
        fetchProject();
      })
    }).catch(err => {
      swal("Oops!", "Seems like we couldn't fetch the info", "error");
    });
  
  
  
    }


  return (
    <>

<div className='inquiry-project-css'>
   <div className='inquiry-project-Table-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>PROJECT</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Add New Project</h4>
   </div>
   </div>


   <div className='project-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow project-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label fw-bold">Project</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" id='textid' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>
                    {/* <div class="row mb-4">
                        <label htmlFor="textidcls" class="col-sm-12 col-form-label fw-bold">Technology Sub Tag</label>
                        <div class="col-sm-12">
                        <input type="text" class="form-control" id='textidcls' value={subTag} onChange={(e) => setSubTag(e.target.value)} />
                        </div>
                    </div> */}
                    <button type="submit" class="btn btn-primary float-end" onClick={handleProject}>Add Project <i class="bi bi-plus"></i></button>
                </form>
            </div>
           <div className='col-lg-7 bg-white shadow project-sub-cls'>

             <div className='pt-3 pb-2'>
                 <h4 className='text-center'>Manage Projects</h4>
                 <hr></hr>
             </div>

  
           <div className='project-classess'>
            <Table striped hover style={{margin:'auto', width:'500px'}} className="mt-4 project-table-cls">
           <tbody>
             <tr>
               <th style={{paddingLeft:'20px'}}>Project record</th>
               <th></th>
               <th></th>
               
             </tr>
              <tr className='project-table-tr'>
               <th style={{paddingLeft:'44px', width:'23%'}} className='project-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </th>
               <th style={{paddingLeft:'20px'}}>Projects</th>
               
               <th>               
                </th>

               
              
              </tr>


              {
    data.map(curElem =>(

      
              <tr className='project-table-tr' key={curElem.id}>
               <td style={{paddingLeft:'44px', width:'23%'}} className='project-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
                </td>
               <td style={{paddingLeft:'20px'}}>{curElem.project_name}</td>
               
               <td style={{paddingLeft:'20px'}}>                   
                <button class="btn btn-danger btn-sm me-md-2" type="button" onClick={() => deleteProject(curElem.id)}><i class="bi bi-trash-fill"></i> Delete</button>
                <Link to={`/project/edit/${curElem.id}`} class="btn btn-primary me-md-2 btn-sm" type="button"><i class="bi bi-pencil-fill"></i> Edit</Link>
                {/* <Link to={`/tagview/${curElem.id}`} class="btn btn-success btn-sm" type="button"><i class="bi bi-eye"></i>  View</Link> */}
                </td>
               
              
              </tr>

     
)
)
} 
             

             
           </tbody>
         </Table>
         </div>

           </div>
       </div>
   </div>
    
    </>
  )
}

export default ProjectTable