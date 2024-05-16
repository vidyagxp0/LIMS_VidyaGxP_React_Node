import React, { useState } from 'react';
import '../UserManagement/Department/Admin.css';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from 'react-icons/fa';
import { CgAddR, CgCalendarDates } from 'react-icons/cg';


const Users = () => {
    const pageSize = 9; 
    const [currentPage, setCurrentPage] = useState(1);

    
    const employees = [

        { id: "USER-022024-000001", user: 'John Doe',  role: 'admin', departments: 'QC', joiningDate: '2024-05-15' , addedBy: 'admin',  status: 'Active'  },
        { id: "USER-022024-000002", user: 'Jane Smith',  role: 'admin', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000003", user: 'John Doe',  role: 'admin', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-000004", user: 'Jane Smith',  role: 'qa', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000005", user: 'John Doe',  role: 'qa', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-000006", user: 'Jane Smith',  role: 'qc', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000007", user: 'John Doe',  role: 'analyst', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-000008", user: 'Jane Smith',  role: 'mgr', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },
        { id: "USER-022024-000009", user: 'John Doe',  role: 'si', departments: 'QC', joiningDate: '2024-05-15', addedBy: 'admin', status: 'Active' },
        { id: "USER-022024-0000010", user: 'Jane Smith',  role: 'qa', departments: 'QC', joiningDate: '2024-05-16', addedBy: 'admin', status: 'Inactive' },

    ];

    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, employees.length);

    // Function to render table rows for current page
    const renderRows = () => {
        return employees.slice(startIndex, endIndex).map((employee, index) => (
            <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{employee.id}</td>
                <td>{employee.user}</td>
                <td>{employee.role}</td>
                <td>{employee.departments}</td>
                <td><CgCalendarDates/>{employee.joiningDate}</td>
                <td className={`rounded-5 ${employee.status === 'Active' ? 'bg-danger' : 'bg-warning'} bg-opacity-25 text-${employee.status === 'Active' ? 'danger' : 'warning'} d-flex justify-content-center p-1 m-2`} >{employee.status}</td>
                <td>{employee.addedBy}</td>
                <td>
                    {/* Action buttons */}

                    <HiDotsHorizontal />
                    

                </td>
                
            </tr>
        ));
    };

    // Function to handle pagination
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextToLastPage = () => {
        setCurrentPage(Math.ceil(employees.length / pageSize));
    };

    return (
        <div className="container mt-4 pb-4">
            <div className="row mb-4 p-4">
                <div className="main-head">
                    <h4 className="fw-bold mb-4 mt-4">User Management/ Users</h4>
                </div>
                <div className="col-md-6 pt-4">
                    <div className="dropdown">
                        <button className="btn border btn-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Show
                            <select id='selectOption'>
                                <option>Select Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </button>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <button
                        id="Addbtn"
                        className="btn btn-primary btn-right"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <CgAddR />  <span>Add user</span>
                    </button>
                </div>
                 {/* right toggle of add user  */}

                <div
                    className="offcanvas offcanvas-end overflow-y-scroll"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header ">
                        <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
                            Add User
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
                    
                    <label id="line3" htmlFor="">User Name</label>
                    <input id="line4" required type="text" placeholder="Name here" />

                    <label id="line3" htmlFor="">Contact Number</label>
                    <input id="line4" required type="text" placeholder="+91 0000000000" />

                    <label id="line3" htmlFor="">Gmail Address</label>
                    <input id="line4" required type="text" placeholder="sample@gamail.com" />

                    <label id="line3" htmlFor="">Address</label>
                    <input id="line4" required type="text" placeholder="Name" />

                    
                    
                    <label id="line3" htmlFor="">Plant</label>
                    
                    <select  id='line4' defaultValue="">
                    <option value="" disabled hidden>Select...</option>
                    <option value="1">Master</option>
                    <option value="2">win_Master</option>
                    <option value="3">plant3</option>
                    <option value="3">PlantDemo4</option>
                  </select>
                                            
                    <label id="line3" htmlFor="">Department</label>
                    
                    <select  id='line4' defaultValue="">
                    <option value="" disabled hidden >Select Department</option>
                    <option value="1">Admin</option>
                    <option value="2">Quality Assurance</option>
                    <option value="3">Quality Check</option>
                    <option value="3">Store</option>
                  </select>
                  
                    <label id="line3" htmlFor="">Role</label>
                    <input id="line4" required type="text" placeholder="Select Role"/>


                    <div id="line5">
                        <button type="button"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">&lt; Back</button>
                        <button>Create user Id &gt;</button>
                    </div>
                </div>




            </div>

            {/* Employee table */}
            <div className='table-responsive p-4 container1'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>User ID</th>
                            <th>User</th>
                            <th>Role</th>
                            <th>Departments</th>
                            <th>Joining Date</th>
                            <th>Status</th>
                            <th>Added By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}



            <div className="pagination">

                <div className="pagination">
                    <div className='mr-5'>
                        <button className="btn  mr-2" onClick={prevPage} disabled={currentPage === 1}>&lt;&lt;</button>
                    </div>
                    <div className="current-page-number mr-2 bg-dark-subtle page-item">
                        <button className='btn rounded-circle'> {currentPage} </button>
                    </div>
                    <div>
                        <button className="btn mr-2" onClick={nextPage} disabled={endIndex >= employees.length}>&gt;&gt;</button>

                    </div>

                </div>
                <button className="btn btn-next" onClick={nextToLastPage}> Next <FaArrowRight /></button>
            </div>

        </div>
    );
};

export default Users;






// import React,{useState} from 'react'
// import { CgAddR } from "react-icons/cg";


// export default function Users() {


//   function showActiveStatus(){
    
//   }
//   return (
      
//     <>
//      <div id="div1">
//         <h5>User Management / Users</h5>
//       </div>
    
//       <div id="div2">
//           <div id="div2ka2">
//              <select className="form-control form-select" id="fv-topics" name="status" data-placeholder="Select a option" required="">
//                  <option label=" Select Status" value=""></option>
//                  <option onClick={showActiveStatus} value="ACTIVE">Active</option>
//                  <option value="INACTIVE">Inactive</option>
//              </select>
//            </div>

//          <button
//           id="Addbtn"
//          className="btn btn-primary"
//          type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasRight"
//           aria-controls="offcanvasRight"
//          >
//           <CgAddR />  <span>Add user</span>
//         </button>

//         <div
//         className="offcanvas offcanvas-end overflow-y-scroll"
//         tabIndex="-1"
//         id="offcanvasRight"
//         aria-labelledby="offcanvasRightLabel"
//       >
//         <div className="offcanvas-header ">
//           <div id="line1"><h5 className="offcanvas-title" id="offcanvasRightLabel">
//             Add User
//           </h5>
//           <button
//             id="closebtn"
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//             ></button>
//           </div>
//         </div>
            
//         <label id="line3" htmlFor="">User Name</label>
//         <input id="line4" required type="text" placeholder="Name here"/>

//         <label id="line3" htmlFor="">Contact Number</label>
//         <input id="line4" required type="text" placeholder="+91 0000000000"/>

//         <label id="line3" htmlFor="">Gmail Address</label>
//         <input id="line4" required type="text" placeholder="sample@gamail.com"/>

//         <label id="line3" htmlFor="">Address</label>
//         <input id="line4" required type="text" placeholder="Floor,Bulding,Street,Land Mark,City,State"/>

//         <label id="line3" htmlFor="">Plant</label>
//         <input id="line4" required type="text" placeholder="Select"/> 
        
//         <label id="line3" htmlFor="">Department</label>
//         <input id="line4" required type="text" placeholder="Select Department"/>
       
//         <label id="line3" htmlFor="">Role</label>
//         <input id="line4" required type="text" placeholder="admin@lims.com"/>



//          <div id="line5">
//           <button type="button"
            
//             data-bs-dismiss="offcanvas"
//             aria-label="Close">&lt; Back</button>
//            <button>Create user Id</button>
//           </div>
//            </div>


//       </div>

//       <table className="table">
//   <thead>
//     <tr>	
//       <th scope="col">Sr.No</th>
//       <th scope="col">User Id</th>
//       <th scope="col">User</th>
//       <th scope="col">Role</th>
//       <th scope="col">Departments	</th>
//       <th scope="col">Joining Date</th>
//       <th scope="col">Status</th>
//       <th scope="col">Added By</th>
//       <th scope="col">...</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr> 					
//       <td>1</td>
//       <td>USER-022024-0000018</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//     <tr> 					
//       <td>2</td>
//       <td>USER-022024-0000017</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//     <tr> 					
//       <td>3</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//     <tr> 					
//       <td>4</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//      <tr> 					
//       <td>5</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr> 
//     <tr> 					
//       <td>6</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//      <tr> 					
//       <td>7</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr> 
//     <tr> 					
//       <td>8</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr> 
//     <tr> 					
//       <td>9</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>ACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//     <tr> 					
//       <td>10</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>INACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//     <tr> 					
//       <td>11</td>
//       <td>USER-022024-0000016</td>
//       <td>afiya</td>
//       <td>admin</td>
//       <td>QC</td>
//       <td>Feb 9th 24 15:52</td>
//       <td>INACTIVE</td>
//       <td>Admin</td>
//       <td>...</td>
//     </tr>
//   </tbody>
// </table>

// <nav aria-label="Page navigation example">
//   <ul className="pagination justify-content-center">
//     <li className="page-item disabled">
//       <a className="page-link">Previous</a>
//     </li>
//     <li className="page-item"><a className="page-link" href="#">1</a></li>
//     <li className="page-item"><a className="page-link" href="#">2</a></li>
//     <li className="page-item"><a className="page-link" href="#">3</a></li>
//     <li className="page-item">
//       <a className="page-link" href="#">Next</a>
//     </li>
//   </ul>
// </nav>

    
    
    
//     </>
//   )
// }
