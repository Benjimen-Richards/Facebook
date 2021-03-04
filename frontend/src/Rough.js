import React, { Component } from 'react'
import axios from 'axios'
const registerUrl ='http://localhost:1111/user/register'
class Rough extends Component {
    constructor()
    {
        super()
        this.state={
            firstname:'',
            lastname:'',
            phone:'',
            email:'',
            password:'',
            dob:'',
            gender:'',
        }
    }
    changehandler=(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
    buttonhandler=()=>
    {
        // console.log(this.state)
        axios.post(registerUrl,this.state).then(res=>console.log("postdata",res.data))
    }

    render()
    {
        return (
            <div>
        <input placeholder='firstname' onChange={this.changehandler} name="firstname" value={this.state.firstname}/>
        <input placeholder='lastname' onChange={this.changehandler} name="lastname" value={this.state.lastname}/>
        <input placeholder='phone' onChange={this.changehandler} name="phone" value={this.state.phone}/>
        <input placeholder='email' onChange={this.changehandler} name="email" value={this.state.email}/>
        <input placeholder='password' onChange={this.changehandler} name="password" value={this.state.password}/>
        <input type='date' placeholder='dob' onChange={this.changehandler} name="dob" value={this.state.dob}/>
        <input placeholder='gender' onChange={this.changehandler} name="gender" value={this.state.gender}/>
        <button onClick={this.buttonhandler}>Submit</button>
            </div>
        )
    }
    
}

export default Rough
