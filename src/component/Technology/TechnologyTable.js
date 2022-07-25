import React,{useState, useEffect} from 'react'
import './TechnologyTable.css'
import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Technology from './Technology'
import swal from 'sweetalert'
const TechnologyTable = () => {

    const[technology, setTechnology] = useState();
    const [technologyData, setTechnologyData] = useState([]);
  

    const handleTechnology = (e) =>{
        e.preventDefault();
        const result =  fetch("https://echofounder.com/inquiry/technology",{
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
          body: JSON.stringify({'name':technology})
       
    
    
        })
        .then(response => response.json())
    
        alert(technology)


// To print data into table

fetch('https://echofounder.com/inquiry/technology', {
        method:'GET',
        headers : { 
          'Accept': 'application/json',
          'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
  
         }
  
      })
  .then((response) => response.json())
  .then((result) => {
  setTechnologyData(result.data.reverse())
  console.log(technologyData)
  
  })
  
}


const fetchtag = () =>{


    fetch('https://echofounder.com/inquiry/technology', {
          method:'GET',
          headers : { 
            'Accept': 'application/json',
            'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
    
           }
    
        })
  .then((response) => response.json())
  .then((result) => {
   setTechnologyData(result.data)
 
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
    fetch(`https://echofounder.com/inquiry/technology/${id}`,{
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
    
    <div className='technology-css'>
   <div className='technology-Table-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>TECHNOLOGY</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Add New Technology</h4>
   </div>
   </div>

   <div className='technology-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow technology-table-cls'>

                <form className='py-4'>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label fw-bold">Technology</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" id='textid' value={technology} onChange={(e) => setTechnology(e.target.value)}/>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary float-end" onClick={handleTechnology}>Add Technology<i class="bi bi-plus"></i></button>
                </form>
            </div>
           <div className='col-lg-7 bg-white shadow technology-table-sub-cls'>

             <div className='pt-3 pb-2'>
                 <h4 className='text-center'>Manage Technology</h4>
                 <hr></hr>
             </div>

  
           <div className='technology-table-class'>
            <Table striped hover style={{margin:'auto', width:'500px'}} className="mt-4 technology-tag-table-cls">
           <tbody>
             <tr>
               <th style={{paddingLeft:'20px'}}>Technology record</th>
               <th></th>
               <th></th>
               
             </tr>
              <tr className='technology-table-tr'>
               <th style={{paddingLeft:'44px', width:'23%'}} className='technology-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </th>
               <th style={{paddingLeft:'20px'}}>Technology</th>
               
               <th>               
                </th>

               
              
              </tr>


              {
    technologyData.map(curElem =>(

      
              <tr className='technology-table-tr' key={curElem.id}>
               <td style={{paddingLeft:'44px', width:'23%'}} className='technology-table-td'>
               <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> 
                </td>
               <td style={{paddingLeft:'20px'}}>{curElem.technology_name}</td>
               
               <td style={{paddingLeft:'20px'}}>                   
                <button class="btn btn-danger btn-sm me-md-2" type="button" onClick={() => deleteTag(curElem.id)}><i class="bi bi-trash-fill"></i> Delete</button>
                <Link to={`/technology/edit/${curElem.id}`} class="btn btn-primary me-md-2 btn-sm" type="button"><i class="bi bi-pencil-fill"></i> Edit</Link>
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

export default TechnologyTable