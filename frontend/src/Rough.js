import axios from 'axios'
import React, { useEffect, useState } from 'react'
const users_url = 'http://localhost:1111/user/allusers'
const Rough = () => {
    const [inout, setinout] = useState('')
    const [users, setusers] = useState('')
    const chnagehandler=(e)=>
    {
        const keyword=e.target.value
        const list=users.filter(item=>(item.firstname.toLowerCase().indexOf(keyword.toLowerCase())>-1))
        setinout(list)
    }
    const submithandler=()=>
    {
        console.log(inout)
    }
    useEffect(()=>
    {
        axios.get(users_url).then(res=>setusers(res.data))
    
    },[])
    const renderlist=(data)=>
    {
        if(data)
        {
            return data.map(item=>(
                <li>{item.firstname}</li>
            ))
        }
    }
    return (
        <div>
        <h1>hello</h1>
            <input onChange={chnagehandler}/>
            <button onClick={submithandler}>Submit</button>
            <div>
                {renderlist(inout)}
            </div>
        </div>
    )
}

export default Rough
