import React, {Component} from 'react'
import './loginStyle.css'
import { Link } from 'react-router-dom'

import SignUp from './SignUp'
import { withRouter } from "react-router-dom";



//for background color
document.body.style = 'background: white;';
class Login extends Component{

   constructor(props){
       super(props)
       this.state={
           email:'',
           password:'',
           loading: false
       }
       
   }

   validate=()=>{
       let isValidEmail=this.validateEmail(this.state.email)
       let isValidPassword=this.validatePassword(this.state.password)
       if(!isValidEmail){
        alert("Enter valid email");
        return;
       }
       if(!isValidPassword){
        alert("Enter valid password");
        return;
       }
    if(isValidEmail && isValidPassword )  {
      //  console.log("valid"),
      this.setState({loading:true});
     // this.props.history.push("/signup");
     setInterval(() => {
       this.props.history.push("/home");
      }, 2000);
   
       
    }else{
        alert("Incorrect email or password");
        return;
    }
  
   }
   validateEmail(inputEmail){
       return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail));

   }
   validatePassword(inputPassword){
        console.log(inputPassword)
       if((inputPassword.length<8) ){
           return false
       }

       return true
   }

   handleSubmit=(event)=>{
       event.preventDefault();
       console.log(this.state.email)
       const isValid=this.validate()
       return true

   }

    handleEmailChange=event=>{
        this.setState({
            email:event.target.value
        })
    }

    handleReset=event=>{
        this.setState({
            email:'',
            password:''

        })
    }

    handlePasswordChange=event=>{
        this.setState({
            password:event.target.value
        })
    }
    

   
    render(){
        return(
            <div style={{height: 'auto',width:'30%',backgroundColor: "#311244",
            float:"left", position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',borderRadius: '20px',paddingBottom:'30px'}}>
              <form onSubmit={this.handleSubmit}>
                  

                <div className='sign-in-title'>Sign In</div>

                <div style={{ display:'flex',justifyContent: 'center'}}>
                { this.state.loading && <div style={{height:'20px',width:'20px'}}><div class="spinner-border text-success"></div> </div>}
                </div>
                <div  className='rowC' style={{paddingTop:'25px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'52px',color:'white',fontSize:'25px'}}><label>Email</label></div>
                    <div><input value={this.state.email} onChange={this.handleEmailChange}  placeholder='Email' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                </div>

               
                <div  className='rowC' style={{paddingTop:'20px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'10px',color:'white',fontSize:'25px'}}><label>Password</label></div>
                    <div><input type='password' value={this.state.password} onChange={this.handlePasswordChange}  placeholder='Password' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                 </div>
                 <div className='submit-button rowC' style={{justifyContent: 'center'}}>
                <div style={{marginRight:'20px'}}>
                 <button type="submit" class="btn btn-success"
                     >
                   LOGIN
             </button>
             </div>
             <div>
             <button type="reset" onClick={this.handleReset} class="btn btn-info"
                     >
                   RESET
             </button>
             </div>
           

             
                 </div>
                 <div style={{paddingTop:'20px',color:'greenyellow'}}>
                     Do not have an Account? &nbsp;&nbsp;
                 <Link to="/signup">
                  <font style={{color:'white',textDecoration:'none'}}>SignUp</font> 
           
             </Link>

                 </div>
                
                </form>
             
        
 
            </div>
            
        )
    }
}

export default Login