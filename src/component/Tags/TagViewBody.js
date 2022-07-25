import React from 'react'
import './TagViewBody.css'
const TagViewBody = () => {
  return (
      <>
     <div className='row view-tag-row' style={{paddingBottom:'25px'}}>
        <div className='col-lg-9'>
            <div className='tag-heading-post-cls'>
              <span className='text-muted'>TAG</span>
                <h4>View Tag</h4>
            </div>
            <div className='row bg-white  shadow py-4 px-3 mx-4' style={{borderRadius:'13px'}}>
               
               <div className='tag-div border rounded py-5'>
                    <p><b>Tag :</b> Javascript</p>

                    {/* <div className='tag-sub-div py-3'>
                        <p><b>Technology Sub Tag :</b>
                       React
                        </p>
                    </div> */}


                   
                    {/* <div class="py-3 form-class">
                        <label for="exampleFormControlTextarea1" class="form-label fw-bold">Comment</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div> */}

                    {/* <button type="button" class="btn btn-primary px-4 float-end mt-4">Submit</button> */}
               </div>
            </div> 
        </div> 

        </div>

    </>
  )
}

export default TagViewBody