import React, { useState, useEffect } from 'react'
import './TagsTable.css'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
const TagsTable = () => {

  const[name, setName] = useState();
  const [data, setData] = useState([]);

  const handleTag = (e) => {
    e.preventDefault();
    // const items = {name}
    const result =  fetch("https://echofounder.com/inquiry/tag",{
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


     fetch('https://echofounder.com/inquiry/tag', {
      method:'GET',
      headers : { 
        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`

       }

    })
.then((response) => response.json())
.then((result) => {
setData(result.data.reverse())
console.log(data)


})


  }


  const fetchtag = () =>{


    fetch('https://echofounder.com/inquiry/tag', {
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
fetchtag();
}, []);



// delete tag
const deleteTag = (id) =>{


  let willDelete  = swal({
    title: "Are you sure?",
    text: "You want to delete this user?",
    icon: "warning",
    dangerMode: true,
  })
  .then(willDelete => {   
    if (willDelete) { 
  fetch(`https://echofounder.com/inquiry/tag/${id}`,{
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
      fetchtag();
    })
  }).catch(err => {
    swal("Oops!", "Seems like we couldn't fetch the info", "error");
  }); 
   



  }






  return (
    <>


<div className='inquiry-tags-css'>
   <div className='inquiry-tags-Table-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>TAGS</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Add New Tags</h4>
   </div>
   </div>


   <div className='tags-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow technology-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label fw-bold">Technology Tag</label>
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
                    <button type="submit" class="btn btn-primary float-end" onClick={handleTag}>Add Tags <i class="bi bi-plus"></i></button>
                </form>
            </div>
           <div className='col-lg-7 bg-white shadow technology-sub-cls'>

             <div className='pt-3 pb-2'>
                 <h4 className='text-center'>Manage Tags</h4>
                 <hr></hr>
             </div>

  
           <div className='tags-classess'>
            <Table striped hover style={{margin:'auto', width:'500px'}} className="mt-4 tag-table-cls">
           <tbody>
             <tr>
               <th style={{paddingLeft:'20px'}}>Tags record</th>
               <th></th>
               <th></th>
               
             </tr>
              <tr className='tag-table-tr'>
               <th style={{paddingLeft:'44px', width:'23%'}} className='tag-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </th>
               <th style={{paddingLeft:'20px'}}>Tags</th>
               
               <th>               
                </th>

               
              
              </tr>


              {
    data.map(curElem =>(

      
              <tr className='tag-table-tr' key={curElem.id}>
               <td style={{paddingLeft:'44px', width:'23%'}} className='tag-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
                </td>
               <td style={{paddingLeft:'20px'}}>{curElem.tag_name}</td>
               
               <td style={{paddingLeft:'20px'}}>                   
                <button class="btn btn-danger btn-sm me-md-2" type="button" onClick={() => deleteTag(curElem.id)}><i class="bi bi-trash-fill"></i> Delete</button>
                <Link to={`/tag/edit/${curElem.id}`} class="btn btn-primary me-md-2 btn-sm" type="button"><i class="bi bi-pencil-fill"></i> Edit</Link>
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

export default TagsTable


