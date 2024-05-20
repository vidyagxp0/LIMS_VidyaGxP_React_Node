import React from 'react'

export default function StockMaterialDetail() {
  return (
    <div style={{ margin: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
    <h3 style={{marginLeft:'160px',paddingTop:'30px'}}>Material Details</h3>
      
       <div style={{margin: '0 auto',border:'2px solid',width:'70%',display:'flex'
       }}>
           



           <div style={{ borderRight:'2px solid',width:'45%',backgroundColor:'blue',color:'white', }}>
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>Material Name </p> 
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Desciption</p> 
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Created On</p> 
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>Updated On</p>
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>   Status </p>
           </div>
          
           <div style={{width:'55%'}}>
           <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>test OP</p> 
           <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> 
           Operation</p> 
           <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>20/02/2023</p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>20/02/2023</p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> INITIATED</p>
           </div>
     
      </div>
   </div>
  )
}
