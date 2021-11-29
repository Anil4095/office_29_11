import React, { useRef, useState } from 'react'
import '../App.css'

function UnControll() {
    const  userName=useRef(null)
    const [show, setShow]=useState(false)


    const submitForm=(e)=>{
        e.preventDefault()
        const name=userName.current.value
        name=== ""? alert('please fill the data') : setShow(true)
    }
    return (
       
        <div>
              <form action="" onSubmit={submitForm}>
               <div>
                  <label htmlFor="usernmae"></label>
                   <input type="text" id="username" ref={userName}/>
                   </div>
                   <button type="Submit">Submit</button>
                   </form>
                   <h2 className='showDataStyle'>{show ?`Your  User Name Is    : ${userName.current.value}`:""}</h2>
        </div>
    )
}

export default UnControll
