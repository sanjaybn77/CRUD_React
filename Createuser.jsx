import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './crud.module.css'

const Createuser = () => {
    let [name,setName] = useState('')
    let[salary,setSalary] = useState('')
    let[company,setCompany] = useState('')

    let navigator = useNavigate()
    
    let chgname=(e)=>{
        setName(e.target.value)
    }
    let chgsalary=(e)=>{
        setSalary(e.target.value)
    }
    let chgcompany=(e)=>{
        setCompany(e.target.value)
    }

    
    let chgsubmit=(e)=>{
        e.preventDefault()
        let payload = {name,salary,company}
       
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("data is added into db")
        })
        .catch(() =>{
            console.log("something is fishy")
        })
        // console.log(name, salary,company)
        setName("")
        setSalary('')
        setCompany('')

        navigator("/user")
    }
  return (
    <div id={style.myform} >
     
        <form action="">
            <tr>
                <th colSpan="2"><h4>User Details</h4></th>
            </tr>
            <tr>
                <td> <label htmlFor="">Name</label></td>
                <td> :<input type="text" value={name} onChange={chgname} /></td>
            </tr>
          
            <tr>
                <td><label htmlFor="">Salary</label></td>
                <td>:<input type="text"  value={salary} onChange={chgsalary}/></td>
            </tr>
    
            <tr>   
                <td><label htmlFor="">Company</label></td> 
                <td>:<input type="text" value={company} onChange={chgcompany}/></td>
            </tr> 

            <tr>
                <th colSpan='2'><button onClick={chgsubmit}>Submit</button></th> 
            </tr>
        </form>
     
    </div>
  )
}

export default Createuser