import React from 'react';

export default function StockInventoryDetail() {
  return (
    <div style={{ margin: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
     <h3 style={{marginLeft:'160px',paddingTop:'30px'}}>Inventory Details</h3>
       
        <div style={{margin: '0 auto',border:'2px solid',width:'70%',display:'flex'
        }}>
            <div style={{ borderRight:'2px solid',width:'45%',backgroundColor:'blue',color:'white', }}>
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>Material Name </p> 
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Received Date</p> 
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Supplier Name</p> 
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>Truck Number</p>
             <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>CH No. </p> 
             <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Invoice Number </p>    
             <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Quantity In Mt </p> 
             <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Inventory Registration Remarks </p> 
             <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>   Status </p>
            </div>
           
            <div style={{width:'55%'}}>
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>M1</p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> 
            Invalid date</p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>Ariz Enterprize</p> 
             <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>GT001TDM </p> 
             <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> H343D </p> 
             <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> INV0034 </p> 
             <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> 100 </p> 
             <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>  -</p>
             <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> APPROVED</p>
            </div>
       
        </div>

        <h3 style={{marginLeft:'160px',paddingTop:'30px'}}>History</h3>
       
       <div style={{margin: '0 auto',border:'2px solid',width:'70%',display:'flex'
       }}>

           <div style={{ borderRight:'2px solid',width:'45%',backgroundColor:'blue',color:'white', }}>
           <p style={{borderRight:'2px solid black',paddingLeft:'20px',backgroundColor:'whitesmoke',color:'black'}}>Revision </p> 
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>Material Name </p> 
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Received Date</p> 
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Supplier Name</p> 
           <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>Truck Number</p>
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>CH No. </p> 
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Invoice Number </p>    
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}> Quantity In Mt </p> 
            <p style={{borderBottom:'1px solid white',paddingLeft:'20px'}}>   Status </p>
           </div>
          
           <div style={{width:'55%'}}>
           <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>0</p> 
           <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>M1</p> 
           <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> 
           Invalid date</p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>GT001TDM </p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> H343D </p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> INV0034 </p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> 100 </p> 
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}>  -</p>
            <p style={{borderBottom:'1px solid black',paddingLeft:'20px'}}> INITIATED</p>
           </div>
      
       </div>
    </div>
  );
}
