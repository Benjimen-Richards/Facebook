import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const registerurl ='http://localhost:1111/user/register'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      dob:'',
      gender:'',
    };
  }
  changehandler=(e)=>
  {
    this.setState({[e.target.name]:e.target.value})
    
    
  }
  

  registerhandler=(e)=>
  {
    e.preventDefault()
    axios.post(registerurl,this.state).then(res=>console.log("success"))
    console.log(this.state)
  }
  render() {
    return (
      <div className="register" style={{display:this.state.displayvisible}}>
        <form className="register__container">
          <h1>Sign Up</h1>
          <p>It's quick and easy.</p>
          <div className="hr3" />
          <div>
            <div className="row">
              <input
                className="register_name"
                name='firstname'
                 value={this.state.firstname}
                 onChange={this.changehandler}
                placeholder="First Name"
              />
              <input
                className="register__name"
                type="name"
                name='lastname'
                 value={this.state.lastname}
                 onChange={this.changehandler}
                placeholder="Last Name"
              />
            </div>
            <center>
              <input type="email" 
               name='email'
                 value={this.state.email}
                 onChange={this.changehandler}placeholder="Email" />
            </center>
            <center>
              <input type="password" 
               name='password'
                 value={this.state.password}
                 onChange={this.changehandler}placeholder="New Password" />
            </center>
            <h5 className="register__date">Date Of Birth</h5>
            <div className="row">
              <input type='date' name='dob' onChange={this.changehandler}/>
            </div>
            <h5 className="register__gender">Gender</h5>

            <div className="register__radiocontainer"
             onChange={this.radiohandler}>
              <div className="wrapper">
                <label>Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={this.changehandler}
                />
              </div>

              <div className="wrapper">
                <label>Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={this.changehandler}

                />
              </div>
              <div className="wrapper">
                <label>Other</label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={this.changehandler}

                />
              </div>
            </div>
            <p className="register__policy">
              By clicking Sign Up, you agree to our
              <span>Terms, Data Policy</span> and <span>Cookie Policy</span>.
              You may receive SMS notifications from us and can opt out at any
              time.
            </p>

            <center>
              <button
                onClick={this.registerhandler}
                className="register__register"
              >
                Sign Up
              </button>
            </center>
            <Link to="/login">
              <p className="register__login">Already have an account?</p>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
