import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Student ID</th>
                                            <th scope="col">Fname</th>
                                            <th scope="col">Lname</th>
                                            <th scope="col">college</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">mobile</th>
                                            <th scope="col">email</th>
                                            <th scope="col">address</th>
                                            <th scope="col">---v</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value._id}</td>
                                                    <td>{value.firstname}</td>
                                                    <td>{value.lastname}</td>
                                                    <td>{value.college}</td>
                                                    <td>{value.dob}</td>
                                                    <td>{value.course}</td>
                                                    <td>{value.mobile}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.address}</td>
                                                    <td>{value.__v}</td>


                                                </tr>
                                            }
                                        )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall