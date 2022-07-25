import React from 'react'
import './RoleViewBody.css'
import { useState } from 'react';

const RoleViewBody = () => {



    // edit data


    const EditFunction = (id) =>{


  
      // fetch(`https://echofounder.com/inquiry/role/${id}`,{
      //   method:'PUT',
      //   headers : { 
      //     // 'Content-Type': 'application/json',
      //     'Accept': 'application/json',
      //     'Authorization': `Bearer 48|jjVDhojDiPlbrSHAyb9G2YDHSn28Kwvr1VUnbR8n`
      //    },
      //    body:JSON.stringify({'name':editState})
     
  
  
      //   })
      //   .then((response) => {
      //     response.json().then((resp) =>{
  
      //     setEditState(resp.data.name)
      //     })
      //     })
    
    }
  return (
    <>
 <div className='row view-role-row'>
        <div className='col-lg-9'>
            <div className='role-heading-post-cls'>
              <span className='text-muted'>ROLE</span>
                <h4>View Role</h4>
            </div>
            <div className='row bg-white  shadow py-4 px-3 mx-4' style={{borderRadius:'13px'}}>
               
               <div className='role-div border rounded py-5'>
                    <p><b>Role :</b> Project Manager</p>

                    

               </div>
            </div> 
        </div> 

        </div>
    </>
  )
}

export default RoleViewBody