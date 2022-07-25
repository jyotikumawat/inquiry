import React,{ useState, useEffect } from 'react'
import './ReplyAdd.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { useParams, useNavigate} from 'react-router-dom'

const ReplyAdd = () => {
 const[data, setData] = useState([])   

    const {id} = useParams();

    const fetchEmployeeData = () =>{
        fetch(`https://echofounder.com/inquiry/enquiry/${id}` , {
          method:'GET',
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
           }
      
      
        })
        .then(res => res.json())
        .then(
          (result) => {
           setData(result.data);
            console.log(result)
          });
      }
      
      useEffect(() =>{
        fetchEmployeeData()
      }, [])
   
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

            <div className='body-section'>
             
    <div className='row' style={{paddingBottom:'25px'}}>
        <div className='col-lg-9'>
            <div className='heading-post-cls'>
              <span className='text-muted'>Reply</span>
                <h4>Reply Post</h4>
            </div>
            <div className='row bg-white  shadow py-4 px-3 mx-4' style={{borderRadius:'13px'}}>
               
               <div className='border-div border rounded py-5'>
                    <p><b>Title :</b>{data.title}</p>

                    <div className='description py-3'>
                        <p><b>Description :</b>
                        {data.description}
                        </p>
                    </div>

                    <p><b>Project :</b>{data.project}</p>

                    <p><b>Tags :</b>{data.tags + ' , ' }</p>
                    <p><b>Technology :</b>{data.technology + ' , '}</p>

                   
                    <div class="py-3 reply-form-class">
                        <label for="exampleFormControlTextarea1" class="form-label fw-bold">Comment</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>

                    <button type="button" class="btn btn-primary px-4 float-end mt-4">Submit</button>
               </div>
            </div> 
        </div> 



                
        <div className='col-lg-3' style={{marginLeft:'-22px'}}>
            <div className='first-div mb-4 shadow  bg-white employe-cls-shadow'  style={{borderRadius:'10px'}}>
                <div className='heading-row pt-4'>
                   <h6 className='text-black pb-3'style={{borderBottom:'1px solid #C3C7CC',paddingLeft:'15px'}}>Actions</h6>
                </div>
                <div className='row list-type pb-4'>

                     <form>

                     <select className="form-select mx-2 mb-3 mt-4" aria-label="Default select example">
                        <option selected>Status</option>
                        <option value="draft">Draft</option>
                        <option value="pending">Pending</option>
                        <option value="complete">Complete</option>
                        <option value="Working">Working</option>
                    </select>

                    <select className="form-select mx-2 mb-5 mt-2" aria-label="Default select example">
                    <option selected>Assign</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>

                    <button type="button" className="btn btn-primary px-4 float-end btn-status"><i className="bi bi-clipboard-data text-white mr-2"></i> Publish</button>

                     </form> 

                </div>
            </div> 
         
            <div className='second-div mt-3 shadow bg-white'  style={{borderRadius:'10px'}}>
                <div className='heading-row pt-4'>
                   <h6 className='text-black pb-3'style={{borderBottom:'1px solid #C3C7CC',paddingLeft:'15px'}}>Categories</h6>
                </div>
                <div className='row list-type pb-4'>

                <form>



                <select className="form-select mx-2 mb-5 mt-2" aria-label="Default select example">
                <option selected>Assign User</option>
                <option value="amit">Amit</option>
                <option value="suresh">Suresh</option>
                <option value="jyoti">Jyoti</option>
                <option value="krishna">Krishna</option>
                <option value="nidhi">Nidhi</option>
                <option value="khushbu">Khushbu</option>
                <option value="jaya">Jaya</option>
                <option value="yogesh">Yogesh</option>
                <option value="monika">Monika</option>
                </select>

                <button type="button" className="btn btn-primary px-4 float-end btn-status"><i className="bi bi-clipboard-data text-white mr-2"></i> Publish</button>

              </form> 

                </div>
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

export default ReplyAdd