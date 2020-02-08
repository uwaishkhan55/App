import React, { Component } from 'react'
import axios from 'axios'

class register extends Component {
  constructor(props) {
    super(props)


    this.onSubmit=this.onSubmit.bind(this)
    this.state = {
      email: '',
      password: '',
      username: null,
      location:''
    }
    
  }


  onChangeusername=(e) =>{
    this.setState({
      username: e.target.value
    })
  }

  onChangelocation=(e)=> {
    this.setState({
      location: e.target.value
    })
  }

  onChangeemail=(e)=> {
    this.setState({
      email: e.target.value
    })
  }

  onChangepassword=(e)=> {
    this.setState({
      password: e.target.value
    })
  }
  
  onSubmit=(e)=> {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location
    }

    alert(exercise.username);

    axios.post('http://localhost:5000/register/', exercise)
      .then(res => console.log(res.data+"fuckkkkkkkkkkkkkkkkk"));
    
    window.location = '/verification';
  }


  render() {
    return (
     
  <div style={{width: "50%",margin:" 0 auto"}} className="container">
     <p>Sign in</p>
       <form    onSubmit={this.onSubmit}>
       <div className="form-group">
     
       <input
       placeholder="Email"
        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       handleInput
       value={this.state.email}
       onChange={this.onChangeemail}
       />
      
       </div>
      <div className="form-group">
    
      <input
      placeholder="Password"
        value={this.state.password}
        onChange={this.onChangepassword}
         type="password" className="form-control" id="exampleInputPassword1"/>
         </div>
    <label className="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Full Name"
    value={this.state.username}
    onChange={this.onChangeusername}/>

     <div className="form-group">
    
    <input  value={this.state.location}
      onChange={this.onChangelocation}
    type="text" className="form-control" id="inputAddress" placeholder="Current Location"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"
     />
    <label className="form-check-label" htmlFor="exampleCheck1">I agree to all Terms & conditions</label>
      </div>
      <button type="submit"  className="btn btn-primary">Submit</button>
    </form>   
                   
</div>

    )
  }
}

export default register;
