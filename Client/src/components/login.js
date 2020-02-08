import React, { Component } from 'react'

class login extends Component {
  constructor(props) {
    super(props)

    this.state = {
         email:"",
         password:""
    }
    this.handleForm=this.handleForm.bind(this);
  }
 
  handleForm(event){
       alert(event.target.value)
  }

  render() {
    return (
     
  <div style={{width: "50%",margin:" 0 auto"}} className="container">
     <p>Sign in</p>
       <form >
       <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       handleInput
       />
       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
      <div className="form-group">
       <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"/>
         </div>
     <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" onClick={this.handleForm} className="btn btn-primary">Submit</button>
    </form>   
                   
</div>

    )
  }
}

export default login
