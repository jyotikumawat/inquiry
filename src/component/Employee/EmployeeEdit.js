import React, { useEffect, useState} from 'react'
import './EmployeeEdit.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useParams, useNavigate} from 'react-router-dom'



const EmployeeEdit = () => {
  const[editRole, setEditRole] = useState([])

  const {id} = useParams();
  console.log(id)

  const[employe, setEmploye] = useState({
   role_id :"",
    name:"",
    email:"",
    contact:""
 

  })


  const navigate = useNavigate(); 



  function employeChange(evt) {
    const value = evt.target.value;
    setEmploye({
      ...employe,
      [evt.target.name]: value
    });
   
  }

 

  const fetchEmployeeData = () =>{
    fetch(`https://echofounder.com/inquiry/user/${id}` , {
      method:'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`
  
       }
  
  
    })
    .then(res => res.json())
    .then(
      (result) => {
       setEmploye(result.data);
        console.log(result)
      });
  }
  
  useEffect(() =>{
    fetchEmployeeData()
  }, [])



  const updateEmployee = (e) =>{
    e.preventDefault();

    const result =  fetch(`https://echofounder.com/inquiry/user/${id}`,{
      method:'PUT',
      mode:'cors',
      cache:'no-cache',
      credentials: 'same-origin',
      
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`
  
       },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(employe)
   


    })
    .then(response => response.json())
    navigate('/employe')

  }

  // role_id  get Api

  const fetchRoleId = () =>{


    fetch('https://echofounder.com/inquiry/role', {
    method:'GET',
    headers : { 
      'Accept': 'application/json',
      'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`
  
     }
  
  })
  .then((response) => response.json())
  .then((result) => {
  setEditRole(result.data)
  
  })
  
  }
  
  
  useEffect(() => {
  
    fetchRoleId()
    
  }, [])

  // const selectValue = (id) =>{
  //   const updatedValue = editRole.filter((curElem) =>{
  //         return curElem.id === id
  //   })

  //   setEditRole(updatedValue)

  // }


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

            <div className='body-employee-edit-section'>
            <div className='employe-edit-css'>
       <div className='employe-edit-heading pt-2' style={{paddingLeft:'25px'}}>
         <span className='text-secondary d-block pt-4 '>EMPLOYEE</span>
         <h4 style={{color:'#3D5170'}} className='pb-3'>Edit Employee</h4>
       </div>
       </div>
          <div className='employe-edit-table-start'>
           <div className='row'>
               <div className='col-lg-4 bg-white shadow technology-employe-cls'>
    
                    <form className='py-4'>
    
                    {/* <div class="row mb-3">
                          
                            <div class="col-sm-12" >
                            <input type="hidden" class="form-control" value={employe.role_id}   required />
                            </div>
                        </div> */}
                        


                        <div class="row mb-3">
                            <label htmlFor="textid" class="col-sm-12 col-form-label" >Name</label>
                            <div class="col-sm-12" >
                            <input type="text" class="form-control" name="name" value={employe.name} placeholder='Project Manager' onChange={employeChange} required />
                            </div>
                        </div>


                        <div class="row mb-3">
                            <label htmlFor="textid2" class="col-sm-12 col-form-label" >Email</label>
                            <div class="col-sm-12" >
                            <input type="email" class="form-control" name="email" placeholder='hello@gmail.com' value={employe.email} onChange={employeChange} required />
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label htmlFor="textid2" class="col-sm-12 col-form-label">contact</label>
                            <div class="col-sm-12" >
                            <input type="number" class="form-control" name="contact"  placeholder='123456' value={employe.contact} onChange={employeChange} required />
                            </div>
                        </div>


                        <div class="row mb-3">
                          <div class="col-md-9">
                            <label htmlFor="inputRole" className="form-label">Role</label>
                            <select id="inputRole" className="form-select" value={employe.role_id} defaultValue  name='role_id' onChange={employeChange} required >

                            {
                              editRole.map((curElem) =>(

                                <option value={curElem.id} selected={curElem.name === employe.role}>{curElem.name}</option>

                          

                              ))
                            }
                            </select>


                          </div>
                        </div>
                        <button type="submit" class="btn btn-warning float-end mb-5" onClick={updateEmployee}>Update Employee</button>
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

export default EmployeeEdit