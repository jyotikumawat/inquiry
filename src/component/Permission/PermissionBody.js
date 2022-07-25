import React from 'react'
import './PermissionBody.css'
import {Table} from 'react-bootstrap'

const PermissionBody = () => {
  return (
    <>


        <div className='inquiry-permission-css'>
        <div className='inquiry-permission-heading pt-2' style={{paddingLeft:'25px'}}>
            <span className='text-secondary d-block pt-4 '>PERMISSION</span>
            <h4 style={{color:'#3D5170'}} className='pb-3'>Permission</h4>
        </div>
        </div>
        <div className='permisson-div'>
                <div className='row permission-row'>
                    <center>
                    <div className='col-lg-10 shadow-lg permission-col pb-4 mb-5'>
                        <h3 className='pt-4 pb-5'>Manage Permission</h3>


                        <Table  bordered hover style={{width:'700px'}} className='mb-5'>
                            <thead>
                                <tr>
                                <th>Menu</th>
                                <th>Admin</th>
                                <th>Super Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                               
                                <td colSpan={3}>Dashoard</td>

                                </tr>
                                <tr>
                                <td>View</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>

                                <tr>
                               
                               <td colSpan={3}>Inquiry</td>

                               </tr>


                               <tr>
                                <td>View</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>


                              


                                <tr>
                                <td>Edit</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>


                           


                                <tr>
                                <td>Add</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>


                               


                                <tr>
                                <td>Delete</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>


                                <tr>
                               
                               <td colSpan={3}>Employes</td>

                               </tr>


                               <tr>
                                <td>View</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>


                                <tr>
                               
                               <td colSpan={3}>Tag</td>

                               </tr>


                               <tr>
                                <td>View</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>

                                <tr>
                                <td>Edit</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </td>
                                </tr>


                                <tr>
                                <td>Delete</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>

                                </td>
                                </tr>


                                <tr>
                               
                               <td colSpan={3}>Roles</td>

                               </tr>


                               <tr>
                                <td>View</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>

                                </td>
                                </tr>


                                <tr>
                                <td>Edit</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>

                                </td>
                                </tr>

                                <tr>
                                <td>Delete</td>
                                <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                </td>
                                <td>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>

                                </td>
                                </tr>
                              
                            </tbody>
                        </Table>


                    </div>

                    </center>
                </div>

        </div>

   
    </>
  )
}

export default PermissionBody