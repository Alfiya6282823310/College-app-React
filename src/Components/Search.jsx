import React, { useState } from 'react'
import Navbar from '../Navbar'

const Search = () => {
    const [data,setData]=useState(
        {
            "firstname":""
        }
    )
    const inputHandler=(event)=>{
        setData ({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <row className="g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                           <label htmlFor="" className="form-label">Name</label>
                           <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-warning" onClick={readValue}>Search</button>
                            
                        </div>
                    </row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search