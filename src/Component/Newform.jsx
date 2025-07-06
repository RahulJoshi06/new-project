 import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import { Link } from 'react-router-dom'
 import { useParams } from 'react-router-dom'

 const Newform = () => {

  const [userdata , setUserdata ] = useState({})
  
  useEffect (() => {
      getOnedata()
  },[])
  

  let param = useParams()
  console.log(param.id)

  const getOnedata = async()=>{
    let name = await axios.get (`http://localhost:5000/getid/${param.id}`)
    //console.log("hello");
    console.log(name.data);
    setUserdata(name.data)
  }
  
   return (
    <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12">
              <form className="p-4 border rounded shadow-sm bg-light">
                <h2 className="mb-4 text-center">Edit Form</h2>
    
                <div className="mb-3">
                  <label className="form-label text-start w-100">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={userdata.name || ''}
                    required
                  />
                </div>
    
                <div className="mb-3">
                  <label className="form-label text-start w-100">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={userdata.email || ''}
                    required
                  />
                </div>
    
                <div className="mb-4">
                  <label className="form-label text-start w-100">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
    
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </form>
    
              <div className="text-center mt-3">
                <Link to="/table" className="btn btn-outline-secondary btn-sm">Back to Table</Link>
              </div>
            </div>
          </div>
        </div>
   )
 }

 export default Newform
