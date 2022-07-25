import React, {useState, useEffect} from 'react'
import './RoleEdit.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useParams, useNavigate} from 'react-router-dom'


const RoleEdit = () => {
  const {id} = useParams();

  const [employee, setEmployee] = useState({
   name:''
  });
  console.log(employee)

  const navigate = useNavigate(); 



  
  function changeEmployeeData(e){
    setEmployee(e.target.value)
      }
    


  const fetchRoleData = () =>{
    fetch(`https://echofounder.com/inquiry/role/${id}`,{
      method:'GET',
      headers : { 
        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
  
       }
  
    })
    .then(res => res.json())
    .then(
      (result) => {
    setEmployee(result.data);
      });
  }

  useEffect(()=> {

    fetchRoleData()
  
  }, []);


  
  const updatedRole = (e) =>{
    e.preventDefault()
   
    const result =  fetch(`https://echofounder.com/inquiry/role/${id}`,{
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
      body: JSON.stringify({'name':employee})
   


    })
    .then(response => response.json())

     navigate('/role')


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

            <div className='role-edit-body-style-section'>
               
            <div className='inquiry-edit-roles-css'>
   <div className='inquiry-roles-edit-heading pt-2' style={{paddingLeft:'25px'}}>
     <span className='text-secondary d-block pt-4 '>ROLES</span>
     <h4 style={{color:'#3D5170'}} className='pb-3'>Edit Role</h4>
   </div>
   </div>
      <div className='roles-edit-table-start'>
       <div className='row'>
           <div className='col-lg-4 bg-white shadow technology-role-cls'>

                <form className='py-4'>

                <div class="row mb-3">
                      
                        <div class="col-sm-12" >
                        <input type="hidden" class="form-control"  name="id" 
                 />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label htmlFor="textid" class="col-sm-12 col-form-label">Role</label>
                        <div class="col-sm-12" >
                        <input type="text" class="form-control" name="name" 
                 value={employee.name} onChange={changeEmployeeData} required  placeholder='Project Manager' />
                        </div>
                    </div>
                   
                    <button type="submit" class="btn btn-primary float-end mb-5" onClick={updatedRole}>Update Role</button>
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

export default RoleEdit