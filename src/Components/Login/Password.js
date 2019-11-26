import React, { Component } from 'react'
import Axios from 'axios'

export default class password extends Component {
  constructor(props) {
    super(props)  
    this.state = {
        password:'',cpassword:'',data:[],details:[]
    }
  }
  
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
    
  

  submitHandler=(e)=>{
    let para=this.props.match.params;
    let new_password1=this.state.password;
    let new_password2=this.state.cpassword;    
    let uid=para[0];
    let token=para[1];      
    Axios.post("https://fleet-management-app.herokuapp.com/rest-auth/password/reset/confirm/    ",{new_password1,new_password2,uid,token})
    .then(resp=>{alert(resp.data.detail)
    console.log(resp.data)
    });

  }
  
    render() {
     console.log(this.props.match.params)       
        return (
            <div>
              
                <div  style={{position:"absolute",top:"35%",left:"25%"}} >
                 <div class="row">
    <div class="col s12">
      <div class="card" style={{width:"648px"}}>
        <div class="card-content black-text">
        <div className="row ma-in">
        <div className="row ma-in">
                 <div className="input-field col s12 log-input">
                   <input id="password" type="password" name='password' onChange={this.handleChange} className="box1 validate" placeholder=" Enter New Password" pattern=".{6,}"  title="Six or more characters"  required/>
                   <i class=" icon1  material-icons" >lock</i>
                   <label className="active"> New Password</label>
                 </div>
               </div>
               <div className="row ma-in">
               <div className="input-field col s12 log-input">
                   <input id="cpassword" type="password" name='cpassword'  onChange={this.handleChange} className="box1 validate" placeholder="Password" pattern=".{6,}"  title="Six or more characters"  required/>
                   <i class=" icon1  material-icons" >lock</i>
                   <label className="active">Confirm Password</label>
                 </div>
               </div>
               </div>  
               <div className="btn1 center">
            <button className=" btn center-align w-btn" onClick={this.submitHandler}>Submit</button>
               </div>
         
        </div>
        </div>        
      </div>
    </div>
  </div>
  </div>
            
        )
    }
}