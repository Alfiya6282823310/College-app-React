import React, { useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Add = () => {
    const [data, changeData] = useState(
        {
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""

        }
    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status ==  "success")
        {
            alert("success")
        } else {
            alert("error")
        }
    }
        ).catch ().finally()
    }
return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">first Name</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College Name</label>
                            <textarea name="college" id="" className="form-control" value={data.college} onChange={inputHandler} ></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date of birth</label>
                            <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                                <option className="option">select Option</option>
                                <option className="option">MCA</option>
                                <option className="option">MBA</option>
                                <option className="option">BTEC</option>
                                <option className="option">MTEC</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="number" name="mobile" id="" className="form-control" value={data.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name="email" id="" className="form-control" value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Add