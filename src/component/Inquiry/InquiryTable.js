import React,{useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './InquiryTable.css'
// import swal from 'sweetalert';
import swal from 'sweetalert';

const InquiryTable = () => {


  const[data, setData] = useState([]);


  // To print data into table

const fetchProjectsData = () =>{

    fetch('https://echofounder.com/inquiry/enquiry',{
   method:'GET',
   headers : { 
     'Content-Type': 'application/json',
     'Accept': 'application/json',
     'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`

    }

 })
.then((response) => response.json())
.then((result) => {
setData(result.data)
console.log(result.data)

})

}


useEffect(() => {

  fetchProjectsData()

}, [])

  // delete data


const deleteProject = (id) =>{

let willDelete  = swal({
    title: "Are you sure?",
    text: "You want to delete this user?",
    icon: "warning",
    dangerMode: true,
  })
  .then(willDelete => {   
    if (willDelete) {
return fetch(`https://echofounder.com/inquiry/enquiry/${id}`,{
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
    fetchProjectsData();
  })
}) 
.catch(err => {
  swal("Oops!", "Seems like we couldn't fetch the info", "error");
});
 
 }



  return (
    <>
<div className='inquiry-css pb-5'>
   <div className='inquiryTable-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>BLOG POST</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Add New Post</h4>
   </div>
 
    <div className='table-cls'>
         <Table striped hover style={{width:'1000px', margin:'auto'}}>
           <tbody>
             <tr>
               <th>Title</th>
               <th>Project Name</th>
               <th>Created Date</th>
               <th>Updated Date</th>
               <th>Status</th>
               <th>Assigned To</th>
               <th>Action</th>
               
             </tr>


             <tr>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>
               <th></th>



               <th>
               <Link to='/inquiry/add' className='btn btn-sm btn-success me-2'>Add</Link>
              
               </th>
               
             </tr>

             {
               data.map(curElem => (
                 
                <tr data-id={console.log(curElem.title)} key={curElem.id}>
                <td>{curElem.title}</td>
                <td>{curElem.project}</td>
                <td>{(new Date(curElem.created_at)).toLocaleDateString()}</td>
                <td>{(new Date(curElem.updated_at)).toLocaleDateString()}</td>
                <td>{curElem.status}</td>
                {/* <td></td> */}
                <td>{curElem.assigned_to_user.map(curElem => curElem ? curElem + ' , '  : '')}</td>
                <td>
                <Link to={`/inquiry/edit/${curElem.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                <button type='button' className='btn btn-sm btn-danger me-2' onClick={() => deleteProject(curElem.id)}>Delete</button>
               <Link to={`/inquiry/view/${curElem.id}`} className='btn btn-sm btn-warning'>View</Link>
                </td>
               
               
               </tr>

               ))
             }

      

          
           </tbody>
         </Table>
     </div>

     </div>
    </>
  )
}

export default InquiryTable