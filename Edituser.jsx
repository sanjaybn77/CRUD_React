import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './crud.module.css'

const Edituser = () => {
  let[name,Setname] = useState('')
  let[salary,setSalary] = useState('')
  let[company,setcompany] = useState('')
  let{index} =useParams()
  let navigator = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${index}`)
    .then(resp=>{
      console.log(resp.data)
      Setname(resp.data.name)
      setSalary(resp.data.salary)
      setcompany(resp.data.company)
    })
    .catch(()=>{
      console.log("something fishy")

    })
  },[index])


  let chgname=(e)=>{
    Setname(e.target.value)
  }
  let chgsal=(e)=>{
    setSalary(e.target.value)
  }
  let chgcomp=(e)=>{
    setcompany(e.target.value)
  }

  let chgdata=(e)=>{
    e.preventDefault()
    let payload = {name,salary,company}
    axios.put(`http://localhost:3000/users/${index}`,payload)
    .then(()=>{
        console.log("data is added into db")
    })
    .catch(() =>{
        console.log("something is fishy")
    })
  navigator("/user")
    
  }


  return (
    <div id={style.myform} >
     
        <form action="">
            <tr>
                <th colSpan="2"><h4> Update User Details</h4></th>
            </tr>
            <tr>
                <td> <label htmlFor="">Name</label></td>
                <td> :<input type="text" value={name} onChange={chgname} /></td>
            </tr>
          
            <tr>
                <td><label htmlFor="">Salary</label></td>
                <td>:<input type="text"  value={salary} onChange={chgsal}/></td>
            </tr>
    
            <tr>   
                <td><label htmlFor="">Company</label></td> 
                <td>:<input type="text" value={company} onChange={chgcomp}/></td>
            </tr> 

            <tr>
                <th colSpan='2'><button onClick={chgdata}>Update</button></th> 
            </tr>
        </form>
     
    </div>
  )
}

export default Edituser