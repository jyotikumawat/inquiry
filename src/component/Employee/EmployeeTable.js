import React, { useEffect, useState } from 'react'
import './EmployeeTable.css'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const EmployeeTable = () => {

 const[data, setData] = useState([]);


   // To print data into table
console.log(data)



const fetchEmployeeData = () =>{

     fetch('https://echofounder.com/inquiry/user', {
    method:'GET',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`

     }

  })
.then((response) => response.json())
.then((result) => {
setData(result.data.reverse())



})

}

useEffect(() => {

  fetchEmployeeData()

}, [])

  // delete data


  
const deleteEmployee = (id) =>{


  let willDelete  = swal({
    title: "Are you sure?",
    text: "You want to delete this user?",
    icon: "warning",
    dangerMode: true,
  })
  .then(willDelete => {   
    if (willDelete) { 
  fetch(`https://echofounder.com/inquiry/user/${id}`,{
    method:'DELETE',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`
    }
  })
}
}).then((result) =>{
    result.json().then((resp) =>{
      fetchEmployeeData();
    })
  }) 
  .catch(err => {
    swal("Oops!", "Seems like we couldn't fetch the info", "error");
  });


 }


    
  return (
    <>
     
     <div className='employee-css pb-5'>
   <div className='EmployeeTable-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>EMPLOYEE</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Employee Post</h4>
   </div>
   </div>


   <div className='employee-table'>
     <div className='row'>
       <center>
      <div className='col-lg-11 employee-add-col-cls'>
  
      
        <Table striped hover className='employee-table-cls'>
              <tbody>
                <tr>
                  <th style={{paddingLeft:'20px'}}>Name</th>  
                  <th>Email</th>
                   <th>Contact</th>
                   <th>Action</th>
                  
                </tr>


                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                 
                  
                  
                  <th>
                  <Link to='/employeeadd' class="btn btn-success me-md-2 btn-sm" type="button">Add</Link>
                  </th>
                  
                </tr>


            {
               data.map(curElem =>
                (
                <tr className='employee-table-tr' key={curElem.id}>
                    <td style={{paddingLeft:'20px'}}>{curElem.name}</td>
                    <td>{curElem.email}</td>
                    <td>{curElem.contact}</td>

                    <td>
                  <Link to={`/employee/edit/${curElem.id}`} class="btn btn-primary btn-sm " type="button">Edit</Link>
                  <button class="btn btn-danger me-md-2 btn-sm ms-md-2" type="button" onClick={() => deleteEmployee(curElem.id)}> Delete</button>
                    </td>
                  
                  </tr>


            )
)
    }

                 
              </tbody>
            </Table>
           </div>
           </center>

         </div>


     


     </div>

    



    </>
  )
}

export default EmployeeTable