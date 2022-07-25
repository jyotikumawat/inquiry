import React, { useEffect, useState } from 'react'
import './RoleTable.css'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const RoleTable = () => {

  const [roleValue, setRoleValue] = useState()
  const [data, setData] = useState([]);



  const roleClick = (e) =>{
    e.preventDefault()
   
    const result =  fetch("https://echofounder.com/inquiry/role",{
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
      body: JSON.stringify({'name':roleValue})
   


    })
    .then(response => response.json())
   

    // alert(roleValue)


    // To print data into table


    fetch('https://echofounder.com/inquiry/role', {
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

 const fetchData = () =>{


      fetch('https://echofounder.com/inquiry/role', {
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
  fetchData();
}, []);




  // Delete Data

  const deleteRole = (id) =>{


    let willDelete  = swal({
      title: "Are you sure?",
      text: "You want to delete this user?",
      icon: "warning",
      dangerMode: true,
    })
    .then(willDelete => {   
      if (willDelete) { 
  fetch(`https://echofounder.com/inquiry/role/${id}`,{
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
      fetchData();
    })
  }).catch(err => {
    swal("Oops!", "Seems like we couldn't fetch the info", "error");
  }); 



  }



 

  


  const EditFunction = (id, name) =>{

 
 
  
    fetch(`https://echofounder.com/inquiry/role/${id}`,{
      method:'GET',
      headers : { 
        // 'Content-Type': 'application/json',
        //'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`,
        'Content-Type': 'application/x-www-form-urlencoded'
       }
   

      })
      .then((response) => {
        response.json().then((resp) =>{
         
        
        })
        })
  
  }


  return (
    <>
    <div className='inquiry-role-css'>
   <div className='inquiry-role-Table-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>ROLE</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Add New Role</h4>
   </div>
   </div>



    
   <div className='role-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow role-technology-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label fw-bold">Role</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" id='textid'
                         onChange={(e) => setRoleValue(e.target.value)} required />
                        </div>
                    </div>

               
                    <button type="submit" class="btn btn-primary float-end" onClick={roleClick}>Create Role<i class="bi bi-plus"></i></button>
                </form>
            </div>
           <div className='col-lg-7 bg-white shadow role-technology-sub-cls'>

             <div className='pt-3 pb-2'>
                 <h4 className='text-center'>Manage Role</h4>
                 <hr></hr>
             </div>

             <div class="d-grid gap-2 d-md-flex justify-content-md-center">
               
            </div>
            
           <div className='role-class'>
            <Table striped hover style={{margin:'auto', width:'500px'}} className="mt-4 role-table-cls">
           <tbody>
             <tr>
               <th style={{paddingLeft:'20px'}}>Role record</th>
               <th></th>
               <th></th>
             </tr>
              <tr className='role-table-tr'>
               <th className='role-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </th>
               <th style={{paddingLeft:'20px'}}>Role</th>
               <th>               
                </th>
              </tr>
              

              {
    data.map(curElem =>(
   
      
        <tr className='role-table-tr' key={curElem.id}>
          <td className='role-table-td' >
            <input class="form-check-input" type="checkbox"  id="flexCheckDefault" /> 
              </td>
            <td style={{paddingLeft:'20px'}}>{curElem.name}</td>
            <td style={{paddingLeft:'20px'}}>                   
            <Link to={`/role/edit/${curElem.id}`}  class="btn btn-primary me-md-2 btn-sm">
              <i class="bi bi-pencil-fill"></i>Edit
            </Link>
              <button class="btn btn-danger btn-sm" type="button" onClick={() => deleteRole(curElem.id)}><i class="bi bi-trash-fill"></i> Delete</button>
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

export default RoleTable