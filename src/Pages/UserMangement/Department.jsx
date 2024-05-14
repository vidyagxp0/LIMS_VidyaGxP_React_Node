import React from 'react'
import './Department.css'

const Department = () => {
    return (
        <div>
            <h1>Department</h1>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Show
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">All</a>
                    <a class="dropdown-item" href="#">Active</a>
                    <a class="dropdown-item" href="#">Inactive</a>
                </div>
            </div>


            <div class="container">
                <div class="card-container">
                    <div class="card border border-left border-secondary 5px">
                        <div class="card-body">
                            <h5 class="card-title">Admin</h5>
                            <p class="card-text">  12 Employee
                                <a href="#" class="btn btn-primary"><img src='/images/plus-icon.svg' /></a></p>
                        </div>
                    </div>
                    <div class="card border border-left border-danger 5px">
                        <div class="card-body">
                            <h5 class="card-title">Quality Assurance</h5>
                            <p class="card-text">3 Employee
                                <a href="#" class="btn btn-primary"><img src='/images/plus-icon.svg' /></a></p>
                        </div>
                    </div>
                    <div class="card border-left border-warning ">
                        <div class="card-body">
                            <h5 class="card-title">Quality Check</h5>
                            <p class="card-text">2 Employee
                                <a href="#" class="btn btn-primary"><img src='/images/plus-icon.svg' /></a></p>
                        </div>
                    </div>
                    <div class="card border-left border-secondary 5px">
                        <div class="card-body">
                            <h5 class="card-title">Store</h5>
                            <p class="card-text">2 Employee
                                <a href="#" class="btn btn-primary"><img src='/images/plus-icon.svg' /></a></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Department
