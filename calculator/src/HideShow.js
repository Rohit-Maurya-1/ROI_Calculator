import React, { useState } from 'react'

const HideShow = () => {
    const[state,setState]=useState(true)
  return (
   <div className='main'>
   <div className='text-center'>

   <button  onClick={()=>setState(!state)} className="btn btn-light mt-4 text-center"> HideShow</button>
   </div>
   
   { state ?<div className='row mt-3'>
       <div className='col-11' style={{fontWeight:"bold"}}>APY</div>
       <div className='col-1' style={{color:"#F9EC85",fontWeight:"bold",fontSize:"25px"}}>9.0%</div>
   

   <ul>
  <li>Calculated based on current rates</li>
  <li>All figures are estimates provided for your convenience only and by node_modules
      means represent guaranteed returns.
  </li>
</ul>
</div>:null}
   </div>
  )
}


export default HideShow;