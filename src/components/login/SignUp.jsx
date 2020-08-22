import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";


//for background color
document.body.style = 'background: white;';


class Registeruser extends Component{

   constructor(props){
       super(props)
       this.state={
           email:'',
           password:'',
           confirm_password:'',
           name:'',
           phone:'',

           clicked: false
       }
   }

   validate=()=>{
       let isValidEmail=this.validateEmail(this.state.email)
       let isValidPassword=this.validatePassword(this.state.password)
       let isValidConfirmPassword=this.validateConfirmPassword(this.state.password,this.state.confirm_password)
       let isValidPhone=this.validatePhone(this.state.phone)
       if(!isValidEmail){
        alert("Enter valid email");
        return;
       }
       if(!isValidPassword){
        alert("Enter valid password");
        return;
       }
       if(!isValidConfirmPassword){
           alert("Password and confirm password don't match");
           return;
       }
       if(!isValidPhone){
        alert("Enter valid Phone No.");
        return; 
       }
    if(isValidEmail && isValidPassword && isValidPhone)  {
      //  console.log("valid"),
      this.props.history.push("/signupsuccess");
       
    }else{
        alert("Provide valid information");
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

   validateConfirmPassword(inputPassword,confirmPassword){
       if(inputPassword !=confirmPassword){
           return false
       }
       return true
   }

   validatePhone(inputPhone){
        if((inputPhone.length<10) ){
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
   handleNameChange=event=>{
    this.setState({
        name:event.target.value
    })
   }

    handleEmailChange=event=>{
        this.setState({
            email:event.target.value
        })
    }

    handlePasswordChange=event=>{
        this.setState({
            password:event.target.value
        })
    }

    handleConfirmPasswordChange=event=>{
        this.setState({
            confirm_password:event.target.value
        })
    }
    handlePhoneChange=event=>{
        this.setState({
            phone:event.target.value
        })
      }

    handleCancel=event=>{
        this.props.history.push("/");
    }

  

    render(){
        const {name,email,password, confirm_password } = this.state;
        return(
            <div style={{height: 'auto',width:'30%',backgroundColor: "rgb(55 90 101)",
            float:"left", position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',borderRadius: '20px',paddingBottom:'25px'}}>
              <form onSubmit={this.handleSubmit}>

                <div className='sign-up-title'>Sign Up</div>

                <div  className='rowC' style={{paddingTop:'25px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'52px',color:'white',fontSize:'25px'}}><label>Name</label></div>
                    <div><input value={name} onChange={this.handleNameChange}  placeholder='Name' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                </div>

                <div  className='rowC' style={{paddingTop:'25px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'52px',color:'white',fontSize:'25px'}}><label>Email</label></div>
                    <div><input value={this.state.email} onChange={this.handleEmailChange}  placeholder='Email' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                </div>

               
                <div  className='rowC' style={{paddingTop:'20px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'10px',color:'white',fontSize:'25px'}}><label>Password</label></div>
                    <div><input type='password' value={this.state.password} onChange={this.handlePasswordChange}  placeholder='Password' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                 </div>

                 <div  className='rowC' style={{paddingTop:'20px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'17px',color:'white',fontSize:'25px'}}><label>Confirm<br/> Password</label></div>
                    <div><input type='password' value={this.state.confirm_password} onChange={this.handleConfirmPasswordChange}  placeholder='Confirm Password' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                 </div>

                 <div  className='rowC' style={{paddingTop:'25px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'52px',color:'white',fontSize:'25px'}}><label>Phone</label></div>
                    <div><input type="number" value={this.state.phone} onChange={this.handlePhoneChange}  placeholder='Phone' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                </div>
                <div className='submit-button rowC' style={{justifyContent: 'center'}}>
                 <div  style={{marginRight:'20px'}}>
            
                  <button type="submit" class="btn btn-primary"
                     >
                   SUBMIT
             </button>
             
                 </div>
                 <div>
             <button  type="reset" onClick={this.handleCancel} class="btn btn-info">
                   CANCEL
             </button>
             </div>
                 </div>


                
                </form>
             
        
 
            </div>
            
        )
    }
}

export default Registeruser