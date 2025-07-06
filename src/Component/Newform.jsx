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
    let name = await axios.get (`http://localhost:5173/getid/${param.id}`)
    console.log(name.data)
    setUserdata(name.data)
  }
  
   return (
    <div> 
      <form >
        <h1>edit form</h1>

        <label>Name :</label>
        <input type="text" name='name'value={userdata.name} />  <br />

        <label>email :</label>
        <input type="text" name='email'value={userdata.email} /> <br />

        <label>password :</label>
        <input type="text" name='password'value={userdata.password} /> <br /><br />


        <button>submit</button>

      </form>
    </div>
   )
 }

 export default Newform
