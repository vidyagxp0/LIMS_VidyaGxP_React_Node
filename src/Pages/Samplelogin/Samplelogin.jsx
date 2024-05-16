import React,{useState} from 'react'
import { CgAddR } from "react-icons/cg";
import './Samplelogin.css'


export default function Samplelogin() {
  return (
    <>
     <div id="div1">
        <h5>Sample Login</h5>
      </div>

      <div id="div2">
         <input className="p-1 m-5" type="text"  placeholder='Ar. No.'/>

         <div className="dropdown">
                    <div>
                        <button className="btn border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>All</option>
                                <option>Initiated</option>
                                <option>Approved</option>
                                <option>Rejected</option>
                                <option>Approved</option>
                                <option>Reinitiated</option>
                                <option>Droped</option>
                            </select>

                        </button>

                    </div>
                </div>



         <button
          id="sampleloginbtn"
          className="btn btn-primary mr-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          >
          <CgAddR />  <span>Add Sample Login</span>
        </button>

    </div>
    
        <div
        className="offcanvas offcanvas-end overflow-y-scroll"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
            Add Sample login
          </h5>
          <button
            id="closebtn"
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ></button>
          </div>
        </div>
          <p className='m-3'>Add information and add new sample login</p>
            
        <label id="line3" htmlFor="">Client</label>
        <input id="line4" required type="text" placeholder="Select..."/>

        <label id="line3" htmlFor="">Test Plan / Revision No.</label>
        <input id="line4" required type="text" placeholder="Select..."/>

        <label id="line3" htmlFor="">Product / Material</label>
        <input id="line4" required type="text" placeholder="Prefix"/>

        <label id="line3" htmlFor="">Product / Material Code</label>
        <input id="line4" required type="text" placeholder=""/>

        <label id="line3" htmlFor="">Generic Name</label>
        <input id="line4" required type="text" placeholder=""/> 
        
        <label id="line3" htmlFor="">Specification ID</label>
        <input id="line4" required type="text" placeholder=""/>
       
        <label id="line3" htmlFor="">Copy Sample from</label>
        <input id="line4" required type="text" placeholder="Select..."/>
        
        <label id="line3" htmlFor="">Sample Type</label>
        <input id="line4" required type="text" placeholder=""/>
        
        <label id="line3" htmlFor="">Certificates (If any)</label>
        <input id="line4" required type="text" placeholder="Select..."/>



         <div id="line5">
          <button type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close">&lt; Back</button>
           <button>Add Sample</button>
          </div>
           </div>

      <table className="table">
  <thead>
    <tr>	
      <th scope="col">Sr.No</th>
      <th scope="col">Sample Type</th>
      <th scope="col">Product / Material</th>
      <th scope="col">A.R No.</th>
      <th scope="col">Generic Name</th>
      <th scope="col">Specification code</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr> 					
      <td>1</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td><button>APPROVED</button></td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>2</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>3</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>4</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>5</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr>
    <tr> 					
      <td>6</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>7</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>8</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr> 
    <tr> 					
      <td>9</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr>
     <tr> 					
      <td>10</td>
      <td>Initiated Product</td>
      <td>Sacubitril</td>
      <td>ARIP0000095</td>
      <td>N/A</td>
      <td>RPS-TSLV-00</td>
      <td>APPROVED</td>
      <td>...</td>
    </tr>
  
  </tbody>
</table>

<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </>
  )
}
