import React, { useState, useEffect } from 'react'
import './InquiryEdit.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useParams,useNavigate } from 'react-router-dom'
import Select from 'react-select';


const InquiryEdit = () => {
    const [editUser, setEditUser] = useState({
      
      description:"",
      tag_section:"",
      technology_tag:"",
      assigned_tag:""
    })
    const[projectxSet, setProjectxSet] = useState([])
    const[project, setProject] = useState([])
    const[status, setStatus] = useState([])
    const[tag, setTag] = useState([])
    const[technologys, setTechnologys] = useState([])
    const[assign, setAssign] = useState([])
    const[statusSet, setStatusSet] = useState([])
    const[files, setFiles] = useState([])
    const[assigned_to_user, setAssigned_to_user] = useState([])
    const[tags, setTags] = useState([])
    const[technology, setTechnology] = useState([])
    const [selectedAssignedUser,setSelectedAssignedUser] = useState([]);
    const [selectedTechUser,setSelectedTechUser] = useState([]);
    const [selectedTagUser,setSelectedTagUser] = useState([]);



    console.log(selectedAssignedUser)

    const {id} = useParams();
    const navigate = useNavigate(); 

              //   get data
              const fetchInquiryData = async() =>{
              await fetch(`https://echofounder.com/inquiry/enquiry/${id}` , {
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
                      console.log(result)
                     setEditUser(result.data);
                     console.log(result.data)
                     setProject(result.data.project)
                     setStatus(result.data.status)
                     setFiles(result.data.files)
                     setAssigned_to_user(result.data.assigned_to_user)
                     setTags(result.data.tags)
                     setTechnology(result.data.technology)
                     
                    });
                }
        
              useEffect(() =>{
                fetchInquiryData()
              }, [])



    useEffect(() =>{
     const created_by = localStorage.getItem('user_id')
     console.log(created_by)  
     setEditUser({
         ...editUser,
         created_by
     });
    }, [])


      const ondescription = (value) => {

        setEditUser({ ...editUser,
          description:value
        });
        // console.log(description)
      }

      
     function onChangeValue(evt){
      // const value = evt.target.value;
      setEditUser({
        ...editUser,
        [evt.target.name]:evt.target.value
      });
    }

console.log(editUser.tag_section)
      const handleChange1 = (e) => {
        console.log(e)
        setEditUser({ ...editUser,
          tag_section:e
        });
      }
      const handleChange2 = (e) => {
        console.log(e)
        setEditUser({ ...editUser,
        technology_tag:e
        });
       
      }
      
      
      const handleChange3 = (e) => {
        console.log(e)
        setEditUser({ ...editUser,
          assigned_tag:e
          
        });
        console.log(editUser.assigned_tag)
      }

      // set project

      const fetchProject = () =>{


        fetch('https://echofounder.com/inquiry/project', {
        method:'GET',
        headers : { 
          'Accept': 'application/json',
          'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
         }
      
      })
      .then((response) => response.json())
      .then((result) => {
        setProjectxSet(result.data)
      })
      
      }
      
      
      useEffect(() => {
      
        fetchProject()
        
      }, [])


            // set status

            const fetchStatus = () =>{


              fetch('https://echofounder.com/inquiry/status', {
              method:'GET',
              headers : { 
                'Accept': 'application/json',
                'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
            
               }
            
            })
            .then((response) => response.json())
            .then((result) => {
              setStatusSet(result.data)
            })
            
            }
            
            
            useEffect(() => {
            
              fetchStatus()
              
            }, [])
      


        // set User

    const fetchUser = () =>{


        fetch('https://echofounder.com/inquiry/user', {
        method:'GET',
        headers : { 
          'Accept': 'application/json',
          'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
         }
      
      })
      .then((response) => response.json())
      .then((result) => {
      setAssign(result.data)
      
      })
      
      }

      useEffect(() => {
      
        fetchUser()
        
      }, [])


      useEffect(()=>{
        assignGet();
      },[assign]);
      
 


      const assignoptions = assign.map((curElem) =>{

        return {
          
          label:curElem.name,
          value:curElem.id
        }
      }
      )
      const assignGet = () =>{
        console.log(assign);
        var assignValues = assign.map((curElem) =>{
        if(assigned_to_user!=null){
            assigned_to_user.map((assigned) => {
              console.log(curElem.name+' == '+assigned)
              console.log(curElem.name == assigned)
              if(curElem.name == assigned){
                setSelectedAssignedUser((prev) => {
                  return [
                    ...prev,
                    {
                      label:curElem.name,
                      value:curElem.id
                    }
                  ];
                })
                return {
                  label:curElem.name,
                  value:curElem.id
                }
              } 
            })
          }
        
        })
       
      }
    
   

    
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

  useEffect(()=>{
    tagGet();
  },[tag]);


  useEffect(() => {
  
    fetchTag()
    
  }, [])



  const tagoptions = tag.map((curElem) =>{

    return {
      
      label:curElem.tag_name,
      value:curElem.id
    }
  }
  )
  const tagGet = () =>{
  const tagValues = tag.map((curElem) =>{
    if(tags!=null){
        tags.map((tagVal) =>{
          if(curElem.name == tagVal){
            setSelectedTagUser((prev) => {
              return [
                ...prev,
                {
                  label:curElem.name,
                  value:curElem.id
                }
              ];
            })
            return {
              label:curElem.name,
              value:curElem.id
            }
          } 
        })
      }
    
    })
   
      }
    




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
    setTechnologys(result.data)
    
    })
    
    }

      
    useEffect(()=>{
      techGet();
    },[technology]);


    useEffect(() => {
  
      fetchTechnology()
      
    }, [])


   
  const techoptions = technologys.map((curElem) =>{

    return {
      
      label:curElem.technology_name,
      value:curElem.id
    }
  }
  )  
const techGet = () =>{
  var techValues = technologys.map((curElem) =>{
    if(technology!=null){
        technology.map((techVal) =>{
          if(curElem.name === techVal){
            setSelectedTechUser((prev) => {
              return [
                ...prev,
                {
                  label:curElem.name,
                  value:curElem.id
                }
              ];
            })
            return {
              label:curElem.name,
              value:curElem.id
            }
          }
        })
      }
    
    })
  }
  

  


     

      const updateInquiry = (e) =>{
        e.preventDefault();
    
        const result =  fetch(`https://echofounder.com/inquiry/enquiry/${id}`,{
          method:'PUT',
          mode:'cors',
          cache:'no-cache',
          credentials: 'same-origin',
          
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer 115|1MIpXOLMcGerQYr8BbY08y4dbfsoTaZtmaNuZpfW`
      
           },
          redirect: 'follow',
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(editUser)
       
    
    
        })
        .then(response => response.json())
        navigate('/inquiry')
    
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

            <div className='inquiry-add-employee-body-style-section'>
              
              <div className='inquiry-add-employee-css'>
                <div className='inquiry-employee-add-heading pt-2' style={{paddingLeft:'25px'}}>
                  <span className='text-secondary d-block pt-4 '>INQUIRY</span>
                  <h4 style={{color:'#3D5170'}} className='pb-3'>Edit Inquiry</h4>
                </div>
              </div>
              <div className='inquiry-add-employee-table-start'>
                <div className='row'>
                  <div className='col-lg-9 bg-white shadow technology-employee-add-cls'>

                        <form className='py-4'>
                        <div class="row mb-3">
                                <div class="col-sm-12" >
                                    <label htmlFor="texttitle" className="form-label">Title</label>
                                    <input type="text" class="form-control" id='texttitle' placeholder='Title' name='title' value={editUser.title} onChange={onChangeValue} required />
                                </div>
                        </div>
                        
                            <div class="row mb-3">
                              
                                <label htmlFor="textdescription" class="col-sm-12 col-form-label" >Description</label>
                                {/* <input type="text" class="form-control" id='textdescription' placeholder='description' name='description' value={editUser.description}  onChange={onChangeValue} required  /> */}
                                <ReactQuill theme="snow" value={editUser.description}  onChange={ondescription} />

                            </div>
                            
                            <div class="row mb-3 pt-5">
                                <div class="col-sm-4" >
                                <label htmlFor="inputusers" className="form-label">Tag</label>
                                <Select name='tag_section' value={selectedTagUser} onChange={handleChange1} options = { tagoptions } isMulti required />                   
                                </div>
                                <div class="col-sm-4" >
                                    <label htmlFor="inputProjects" className="form-label">Project</label>
                                        <select id="inputProjects" className="form-select" name='project' onChange={onChangeValue} required >

                                        {
                                            projectxSet.map((curElem) =>(

                                            <option value={curElem.id} projectName={curElem.project_name} project={project} selected={curElem.project_name === project}> {curElem.project_name} </option>

                                        

                                            ))
                                        }
                                        </select>                        
                                </div>

                                <div class="col-sm-4" >
                                    <label htmlFor="inputTech" className="form-label">Technology</label>
                                    <Select  name='technology_tag' value={selectedTechUser} onChange={handleChange2} options = { techoptions } isMulti required />
                              
                                </div>

                                  {/* <div class="col-sm-6" >
                                    <label htmlFor="textfile" className="form-label">File</label>
                                    <input type="file" class="form-control" id='textfile'  name='files' value={editUser.files}  onChange={onChangeValue} required  />
                                  
                                </div> */}
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-4" >
                                <label htmlFor="inputusers" className="form-label">Assign To</label>
                                
                                <Select name='assigned_tag' value={selectedAssignedUser} onChange={handleChange3} options = { assignoptions } isMulti required />                          </div>


                                  <div class="col-sm-4" >
                                    <label htmlFor="inputStatuss" className="form-label">Status</label>
                                        <select id="inputStatuss" className="form-select" name='status' onChange={onChangeValue} required >
                                        {
                                            statusSet.map((curElem) =>(

                                            <option value={curElem.id} selected={curElem.status_name === status}>{curElem.status_name}</option>
                                            ))
                                        }
                                        </select>                        
                                </div>

                                <div class="col-sm-4" >
                                    <label htmlFor="inputProjects" className="form-label">File</label>
                                    <input type="file" class="form-control" id='textfile' required  />
                                    <span style={{fontSize:'10px', fontWeight:'bold', paddingTop:'12px'}}>{files ? files : null}</span>
                                </div>                            
                            </div>
                        {/* <button type="button" class="btn btn-warning float-end mb-5" onClick={updateInquiry}>Updated inquiry</button> */}
                        </form>
                  </div>
                  <div className='col-lg-3'>
                        <div className='first-div mb-4 shadow  bg-white employe-cls-shadow-section'  style={{borderRadius:'10px'}}>
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
                                <button type="button" className="btn btn-primary btn-lg btn2" onClick={updateInquiry}><i className="bi bi-card-list"></i> Update</button>
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
            </div>
          
            <div className='Footer'>
            <Footer />
            </div> 
        </div> 
       
    </div> 
    </>
  )
}

export default InquiryEdit