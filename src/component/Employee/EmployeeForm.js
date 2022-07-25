import React, { useEffect, useState} from 'react'
import './EmployeeForm.css'
import img3 from '../../image/img3.png'
import {useNavigate} from "react-router-dom"
const EmployeeForm = () => {

  const navigate = useNavigate(); 
  const[roles, setRole] = useState([])

  const[tableData, setTableData] = useState({
    role_id:"",
    name: "",
    password:"",
    email:"",
    contact:"",
    address:"",
    city:"",
    state:"",
    description:""

  })

  console.log(tableData)

  const {role_id, name, password, email, contact, address, city, state, description} = tableData;


  function InputChange(evt) {
    const value = evt.target.value;
    setTableData({
      ...tableData,
      [evt.target.name]: value
    });
   
  }


  // set Role

const fetchRole = () =>{


  fetch('https://echofounder.com/inquiry/role', {
  method:'GET',
  headers : { 
    'Accept': 'application/json',
    'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`

   }

})
.then((response) => response.json())
.then((result) => {
setRole(result.data)

})

}


useEffect(() => {

  fetchRole()
  
}, [])




  const onSubmit = (e) =>{
e.preventDefault();

const result =  fetch("https://echofounder.com/inquiry/user",{
      method:'POST',
      mode:'cors',
      cache:'no-cache',
      credentials: 'same-origin',
      
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer 100|Samhrbie64cKxYxMyBa2sC3fRmBOVqx2YFcSKC2T`

      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(tableData)
   


    })
    .then(response => response.json())

    navigate('/employe')



  }


  return (
    <>
        <div className='employees-add'>
        <div className='employee-heading'>
          <span>EMPLOYEE</span>
          <h3 className='mb-4'>Add Employee</h3>
        </div>

        <div className=' row employee-main-div'>

          <div className='col-md-4 employee-left-div'>
             
          <div className="img-cls pt-4 pb-3">
            <img src={img3} alt="Sierra Brooks"  />
            </div>
            <h4 className='mb-0 text-center'>Sierra Brooks</h4>
            <span className='text-muted d-block mb-2 text-center '>Project Manager</span>

            <center ><button className="mb-3 btn btn-outline-primary btn-sm btn-pill px-3 py-2">
            <i className="bi bi-person-plus mr-2"></i> Follow</button></center>
             <hr></hr>
             <div>
               <div className='heading-section d-flex justify-content-between'>
                 <strong>Workload</strong>
                 <span>74%</span>
               </div>


               
              
             <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
             </div>

             <hr></hr>

             <div className='description'>
                 <h6 className='p-2'>Description</h6>
                 <p className='px-2 text-secondary fw-light'>
                 Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                 </p>
               </div>

            
          </div>


          
          <div className=' col-md-7 employee-right-div px-0'>
            <h4 className='py-4 fs-5'>
            Account Details
            </h4>

            <form className="row g-3">

    <div className="col-md-6">
 {/* <input type="hidden" name="role_id"  value={role_id} required  /> */}
    <label htmlFor="inputEmail4" className="form-label">Name</label>
    <input type="text" className="form-control" id="inputEmail4" placeholder='Sierra'  name="name" value={name} onChange={InputChange} required   />
  </div>

  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" name="password" value={password} onChange={InputChange} required />
  </div>
            
  <div className="col-md-6">
    <label htmlFor="inputEmail41" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail41" placeholder='sierra@example.com' name="email" value={email} onChange={InputChange} required />
  </div>

  <div className="col-6">
    <label htmlFor="inputAddress1" className="form-label">contact</label>
    <input type="number" className="form-control" id="inputAddress1" placeholder="12345667" name="contact" value={contact} onChange={InputChange} required />
  </div>
 
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={address} onChange={InputChange} required />
  </div>

 

  <div className="col-md-5">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity" value={city}  name='city' onChange={InputChange} required />
  </div>
  <div class="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select" value={state}  name='state' onChange={InputChange}  required >
      <option value='choose'>Choose...</option>
      <option value='hello'>hello</option>
    </select>
  </div>

  <div class="col-md-3">
    <label htmlFor="inputRole" className="form-label">Role</label>
    <select id="inputRole" className="form-select" value={role_id}  name='role_id' onChange={InputChange}  required >

    {
      roles.map((curElem) =>(

        <option value={curElem.id}>{curElem.name}</option>

  

      ))
    }
          </select>


  </div>
  {/* <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip" />
  </div> */}
  

    <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='description' value={description} onChange={InputChange} required></textarea>
  </div>
  


  <div className="col-12 btn-cls">
    <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Update Account</button>
  </div>
</form>

          </div>


 
        </div>
     </div>
    </>
  )
}

export default EmployeeForm