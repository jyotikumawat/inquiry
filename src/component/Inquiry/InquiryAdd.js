import React,{useState, useEffect} from 'react'
import './InquiryAdd.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {useNavigate} from 'react-router-dom'
import Select from 'react-select';
const InquiryAdd = () => {

const[userInfo, setUserInfo] = useState({
  title:"",
  project_id:"",
  description:"",
  tag_section:"",
  technology_tag:"",
  assigned_tag:"",
  current_status:"",
  file:"",
  assigned_to: Array(),
  tags: Array(),
  technology_id: Array()
})

useEffect(() =>{
  const created_by = localStorage.getItem('user_id');
  // console.log(created_by)
  setUserInfo({
    ...userInfo, 
    created_by
  })
}, [])



const[project, setProject] = useState([])
const[tag, setTag] = useState([])
const[technology, setTechnology] = useState([])
const[assign, setAssign] = useState([])
const[status, setStatus] = useState([])


const {title, project_id, description, tag_section, technology_tag, assigned_tag, current_status, file} = userInfo;



const onChangeValue = (e) => {
  // const value = e.target.value;
  setUserInfo({
    ...userInfo,
    [e.target.name]: e.target.value
  });
 
  // console.log('onchangefunction')

  // console.log(e.target.value)
  // console.log(e.target.name)
}



const ondescription = (value) => {

  setUserInfo({ ...userInfo,
    description:value
  });
  // console.log(description)
}

const handleChange1 = (e) => {

  setUserInfo({ ...userInfo,
    tag_section:e
  });
}
const handleChange2 = (e) => {

  setUserInfo({ ...userInfo,
  technology_tag:e
  });
}


const handleChange3 = (e) => {

  setUserInfo({ ...userInfo,
    assigned_tag:e
  });
}

/* const [skills, setSkills] = useState([]);

  const handleChange3 = (skills) => {
    console.log(skills);
    setSkills(skills || []);
  };
 */

// const handleChange = (e) => {
//   setUserInfo(
//     Array.isArray(e)?e.map(x=>x.value ):[]
//   );
// }



  // set tag

  const fetchTag = () =>{


    fetch('https://echofounder.com/inquiry/tag', {
    method:'GET',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
  
     }
  
  })
  .then((response) => response.json())
  .then((result) => {
  setTag(result.data)
  
  })
  
  }

  const tagoptions = tag.map((curElem) =>{

    return {
      
      label:curElem.tag_name,
      value:curElem.id
    }
  }
  )

  
  
  useEffect(() => {
  
    fetchTag()
    
  }, [])


    // set project

    const fetchProject = () =>{


      fetch('https://echofounder.com/inquiry/project', {
      method:'GET',
      headers : {
        'Content-Type': 'application/json',
 
        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
    
       }
    
    })
    .then((response) => response.json())
    .then((result) => {
    setProject(result.data)
    
    })
    
    }
    
    
    useEffect(() => {
    
      fetchProject()
      
    }, [])


   // set technology

   const fetchTechnology = () =>{


    fetch('https://echofounder.com/inquiry/technology', {
    method:'GET',
    headers : {
      'Content-Type': 'application/json',
 
      'Accept': 'application/json',
      'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
  
     }
  
  })
  .then((response) => response.json())
  .then((result) => {
  setTechnology(result.data)
  
  })
  
  }

  const techoptions = technology.map((curElem) =>{

    return {
      
      label:curElem.technology_name,
      value:curElem.id
    }
  }
  )
  
  
  useEffect(() => {
  
    fetchTechnology()
    
  }, [])


    // set User

    const fetchUser = () =>{


      fetch('https://echofounder.com/inquiry/user', {
      method:'GET',
      headers : { 
        'Content-Type': 'application/json',

        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
    
       }
    
    })
    .then((response) => response.json())
    .then((result) => {
    setAssign(result.data)
    
    })
    
    }

    const assignoptions = assign.map((curElem) =>{

      return {
        
        label:curElem.name,
        value:curElem.id
      }
    }
    )
    
    
    
    useEffect(() => {
    
      fetchUser()
      
    }, [])



     // set Status

     const fetchStatus = () =>{


      fetch('https://echofounder.com/inquiry/status', {
      method:'GET',
      headers : { 
        'Content-Type': 'application/json',

        'Accept': 'application/json',
        'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
    
       }
    
    })
    .then((response) => response.json())
    .then((result) => {
    setStatus(result.data)
    
    })
    
    }
    
    
    useEffect(() => {
    
      fetchStatus()
      
    }, [])  

    const navigate = useNavigate();

    
    
    const onSubmit = (e) =>{
      e.preventDefault();
      assigned_tag.map(assigned =>(
        userInfo['assigned_to'].push( assigned.value)
      ))
      tag_section.map(tag =>(
        userInfo['tags'].push( tag.value)
      ))
      technology_tag.map(tech =>(
        userInfo['technology_id'].push( tech.value)
      ))
     
      delete userInfo['assigned_tag']
      delete userInfo['tag_section']
      delete userInfo['technology_tag']

      const created_by = localStorage.getItem('user_id');
      const result =  fetch("https://echofounder.com/inquiry/enquiry",{
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
            body: JSON.stringify(userInfo)
         
      
      
          })
          .then(response => response.json())
      
          navigate('/Inquiry')
          console.log(userInfo)
      
      
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

            <div className='bodys'>
               
            <div className='row' style={{paddingBottom:'25px'}}>
          <div className='col-lg-9'>
            <div className='heading-post-cls'>
              <span className='text-muted'>Inquiry POST</span>
                <h4>Add Employee Post</h4>
            </div>
               <div className='row bg-white  shadow py-4 px-3 mx-4' style={{borderRadius:'13px'}}>
                 <div className='col-lg-12'>

                   <div className='form-addd'>
                   <form className='mb-3'>
                     <div className='col-md-12'>
                     <label htmlFor="inputTitle" className="form-label">Title</label>
                      <input type='text' id="inputTitle" className="form-control" placeholder='Inquiry Title' name='title' value={title} onChange={onChangeValue}  required />
                     </div>

                   </form>
                   </div>
                   
                   <ReactQuill theme="snow" value={description} onChange={ondescription}/>

                      <div className='form-addd'>
                      <form className='mb-3'>
                        <div className='row mt-3'>
                          <div className="col-md-4">
                              <label htmlFor="inputTag" className="form-label">Tag</label>
                              <Select name='tag_section' value={tag_section} onChange={handleChange1} options = { tagoptions } isMulti required />
                            
                          </div>


                          <div className="col-md-4">
                              <label htmlFor="inputProject" className="form-label">Project</label>
                              <select id="inputProject" className="form-select" value={project_id}  name='project_id' onChange={onChangeValue} required >

                              {
                                project.map((curElem) =>(

                                  <option value={curElem.id}>{curElem.project_name}</option>

                            

                                ))
                              }
                              </select>


                          </div>


                            <div className="col-md-4">
                                <label htmlFor="inputTechnology" className="form-label">Technology</label>
                                <Select  name='technology_tag' value={technology_tag} onChange={handleChange2}  options = { techoptions } isMulti required />


                            </div>
                        </div>

                      <div className='row mt-3'>
                         <div className='col-md-4'>

                         <label htmlFor="inputuser" className="form-label">Assign To</label>
                          <Select name='assigned_tag' value={assigned_tag} onChange={handleChange3} options = { assignoptions } isMulti required />



                         </div>

                         <div className='col-md-4'>

                            <label htmlFor="inputstatus" className="form-label">Status</label>
                            <select id="inputstatus" className="form-select" value={current_status}  name='current_status' onChange={onChangeValue} required >

                            {
                              status.map((curElem) =>(

                                <option value={curElem.id}>{curElem.status_name}</option>



                              ))
                            }
                            </select>


                          </div>

                          <div className='col-md-3'>
                          <label htmlFor="inputfile" className="form-label ml-3">File</label>
                          <input type="file" name='file' value={file} onChange={onChangeValue} required ></input>
                          </div>

                          <div>
                            {/* <button type='button' className='btn btn-primary'> submit</button> */}
                          </div>
                      </div>


                      </form>
                    </div> 
                 </div>
                </div> 
              </div> 
                
               <div className='col-lg-3' style={{marginLeft:'-22px'}}>
                 <div className='first-div mb-4 shadow  bg-white employe-cls-shadow'  style={{borderRadius:'10px'}}>
                 <div className='heading-row pt-4'>
                   <h6 className='text-black pb-3'style={{borderBottom:'1px solid #C3C7CC',paddingLeft:'15px'}}>Actions</h6>
                   </div>
                    <div className='row list-type'>
                      <div className='col-lg-9 list-col-cls pl-0 pr-0'>
                      <ul>
                        <li className='pb-1'><i className="bi bi-flag-fill"></i><span className='text-muted span-cls fw-bold'>Status:</span><b className='text-muted'>Draft</b></li>

                        <li className='pb-1'><i className="bi bi-eye-fill"></i><span className='text-muted span-cls fw-bold'>Visibility:</span><b style={{color:'green', fontWeight:'normal'}}>Public</b></li>


                        <li className='pb-1'><i className="bi bi-calendar"></i><span className='text-muted span-cls fw-bold'>Schedule:</span><b className='text-muted'>Now</b></li>


                        <li><i className="bi bi-clipboard-data"></i><span className='text-muted span-cls fw-bold'>Readbility:</span><b style={{color:'orange', fontWeight:'normal'}}>Ok</b></li>
                       
                      </ul>
                      <div>

                      </div>
                      </div>

                      <div className='col-lg-3 list-col-cls2 pl-0 pr-0' style={{marginLeft:'-36px'}}>
                        <ul>
                          <li className='pb-1'><a href='/'>Edit</a></li>
                          <li className='pb-1'><a href='/'>Edit</a></li>
                          <li><a href='/'>Edit</a></li>
                          
                        </ul>
                      </div>

                      <div>
                        <ul>
                        <li className='d-flex btn-cls pt-2 mr-auto'>
                        <button type="button" className="btn  btn-outline-primary btn-lg btn1 text-center"><i className="bi bi-save2-fill primary"></i> Save Draft</button>
                        <button type="button" className="btn btn-primary btn-lg btn2"  onClick={onSubmit}><i className="bi bi-card-list"></i> Publish</button>
                        </li>
                        </ul>
                      </div>
                    </div>
                    </div>  
                  
                   <div className='second-div mt-3 shadow bg-white'  style={{borderRadius:'10px'}}>
                    <div className='heading-row pt-4'>
                   <h6 className='text-black pb-3'style={{borderBottom:'1px solid #C3C7CC',paddingLeft:'15px'}}>Categories</h6>
                   </div>
                    <div className='row list-type'>
                      <div className='col-lg-12' >
                       

                      <div className="form-check pb-1" style={{paddingLeft: '38px'}}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label" htmlFor="flexCheckChecked" />
                        Uncategorized
  
                      </div>

                      <div className="form-check pb-1" style={{paddingLeft: '38px'}}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label" htmlFor="flexCheckChecked" />
                        Design
  
                      </div>


                      <div className="form-check pb-1" style={{paddingLeft: '38px'}}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Development
                        </label>
                      </div>


                      <div className="form-check pb-1" style={{paddingLeft: '38px'}}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Writing
                        </label>
                      </div>


                      <div className="form-check" style={{paddingLeft: '38px'}}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Books
                        </label>
                      </div>

                      <hr style={{borderBottom: '1px solid rgb(195, 199, 204)'}}/>

                      <div className="input-group my-3">
                          <input type="text" className="form-control" placeholder="New Category" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <span className="input-group-text bg-white">+</span>
                      </div>


                      </div>

                     
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

export default InquiryAdd